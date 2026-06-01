import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';

type Tab = 'activites' | 'courriers';

@Component({
  selector: 'app-responsable-odk-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './responsable-odk-dashboard.component.html',
  styleUrl: './responsable-odk-dashboard.component.scss',
})
export class ResponsableOdkDashboardComponent implements OnInit {
  tab: Tab = 'activites';
  activites: any[] = [];
  courriers: any[] = [];
  services: { id: number; nom: string }[] = [];
  loading = false;
  noteActivite = '';
  noteCourrier = '';
  serviceId: number | null = null;

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const tab = this.route.snapshot.data['responsableTab'] as Tab | undefined;
    if (tab === 'activites' || tab === 'courriers') {
      this.tab = tab;
    }
    this.load();
  }

  setTab(t: Tab): void {
    this.tab = t;
    this.load();
  }

  load(): void {
    this.loading = true;
    if (this.tab === 'activites') {
      this.global.get('activite/responsable-odk/en-attente').subscribe({
        next: (d) => {
          this.activites = Array.isArray(d) ? d : [];
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toast.error('Impossible de charger les activités.');
        },
      });
    } else {
      this.global.get('api/courriers/responsable-odk/services-odc').subscribe({
        next: (s) => {
          this.services = Array.isArray(s) ? s : [];
        },
      });
      this.global.get('api/courriers/responsable-odk/courriers/en-attente').subscribe({
        next: (d) => {
          this.courriers = Array.isArray(d) ? d : [];
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toast.error('Impossible de charger les courriers.');
        },
      });
    }
  }

  transmettreActivite(row: any): void {
    const id = row?.id;
    if (id == null) {
      return;
    }
    const params = this.noteActivite?.trim()
      ? `?note=${encodeURIComponent(this.noteActivite.trim())}`
      : '';
    this.global.post(`activite/${id}/transmettre-directeur-odc${params}`, {}).subscribe({
      next: () => {
        this.toast.success('Activité transmise au directeur ODC.');
        this.noteActivite = '';
        this.load();
      },
      error: (e: { error?: { message?: string } }) => {
        this.toast.error(e?.error?.message || 'Échec de la transmission.');
      },
    });
  }

  retourActivite(row: any): void {
    const id = row?.id;
    if (id == null || !this.noteActivite?.trim()) {
      this.toast.warning('Indiquez un message pour le personnel.');
      return;
    }
    this.global
      .post(
        `activite/${id}/retour-personnel-responsable?note=${encodeURIComponent(this.noteActivite.trim())}`,
        {}
      )
      .subscribe({
        next: () => {
          this.toast.success('Retour envoyé au personnel.');
          this.noteActivite = '';
          this.load();
        },
        error: (e: { error?: { message?: string } }) => {
          this.toast.error(e?.error?.message || 'Échec.');
        },
      });
  }

  affecterCourrier(row: any): void {
    const id = row?.id;
    if (id == null || this.serviceId == null) {
      this.toast.warning('Choisissez un service ODC.');
      return;
    }
    let url = `api/courriers/responsable-odk/courriers/${id}/affecter-service?serviceEntiteId=${this.serviceId}`;
    if (this.noteCourrier?.trim()) {
      url += `&note=${encodeURIComponent(this.noteCourrier.trim())}`;
    }
    this.global.post(url, {}).subscribe({
      next: () => {
        this.toast.success('Courrier affecté au service.');
        this.noteCourrier = '';
        this.serviceId = null;
        this.load();
      },
      error: (e: { error?: { message?: string } }) => {
        this.toast.error(e?.error?.message || 'Échec de l’affectation.');
      },
    });
  }
}
