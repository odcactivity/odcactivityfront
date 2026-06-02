import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

type Tab = 'attente' | 'transmises';

@Component({
  selector: 'app-responsable-odk-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './responsable-odk-dashboard.component.html',
  styleUrl: './responsable-odk-dashboard.component.scss',
})
export class ResponsableOdkDashboardComponent implements OnInit {
  tab: Tab = 'attente';
  activites: any[] = [];
  activitesTransmises: any[] = [];
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
    this.loadAll();
  }

  setTab(t: Tab): void {
    this.tab = t;
  }

  /** Charge les deux listes pour des compteurs d'onglets toujours à jour. */
  loadAll(): void {
    this.loading = true;
    forkJoin({
      attente: this.global.get('activite/responsable-odk/en-attente'),
      transmises: this.global.get('activite/responsable-odk/transmises-directeur'),
    }).subscribe({
      next: ({ attente, transmises }) => {
        this.activites = Array.isArray(attente) ? attente : [];
        this.activitesTransmises = Array.isArray(transmises) ? transmises : [];
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
        this.loadAll();
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
          this.toast.success('Retour envoyé au personnel pour correction.');
          this.noteActivite = '';
          this.loadAll();
        },
        error: (e: { error?: { message?: string } }) => {
          this.toast.error(e?.error?.message || 'Échec.');
        },
      });
  }

  supprimerActiviteTransmise(row: any): void {
    const id = row?.id;
    if (id == null) {
      return;
    }
    if (!confirm(`Supprimer l'activité « ${row.nom} » transmise au directeur ODC ?`)) {
      return;
    }
    this.global.delete('activite/responsable-odk', id).subscribe({
      next: () => {
        this.toast.success('Activité supprimée.');
        this.loadAll();
      },
      error: (e: { error?: { message?: string } }) => {
        this.toast.error(e?.error?.message || 'Suppression impossible.');
      },
    });
  }
}
