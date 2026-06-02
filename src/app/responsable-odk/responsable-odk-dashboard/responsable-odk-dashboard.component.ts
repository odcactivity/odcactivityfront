import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-responsable-odk-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './responsable-odk-dashboard.component.html',
  styleUrl: './responsable-odk-dashboard.component.scss',
})
export class ResponsableOdkDashboardComponent implements OnInit {
  activites: any[] = [];
  loading = false;
  noteActivite = '';

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.data['responsableTab'] === 'courriers') {
      this.toast.info('Les courriers ODC sont gérés par le directeur ODC.');
    }
    this.load();
  }

  load(): void {
    this.loading = true;
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

}
