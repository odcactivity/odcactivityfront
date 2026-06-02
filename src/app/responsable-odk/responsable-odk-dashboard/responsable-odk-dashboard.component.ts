import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

type Tab = 'attente' | 'transmises';
type ResponsableView = 'activites' | 'courriers';

@Component({
  selector: 'app-responsable-odk-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './responsable-odk-dashboard.component.html',
  styleUrl: './responsable-odk-dashboard.component.scss',
})
export class ResponsableOdkDashboardComponent implements OnInit {
  tab: Tab = 'attente';
  view: ResponsableView = 'activites';
  activites: any[] = [];
  activitesTransmises: any[] = [];
  courriersDelegues: any[] = [];
  loading = false;
  noteActivite = '';

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routed = this.route.snapshot.data['responsableTab'] as ResponsableView | undefined;
    this.view = routed === 'courriers' ? 'courriers' : 'activites';
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
      courriersDelegues: this.global.getCourriersDeleguesResponsableOdk(),
    }).subscribe({
      next: ({ attente, transmises, courriersDelegues }) => {
        this.activites = Array.isArray(attente) ? attente : [];
        this.activitesTransmises = Array.isArray(transmises) ? transmises : [];
        this.courriersDelegues = Array.isArray(courriersDelegues) ? courriersDelegues : [];
      },
      error: () => {
        this.activites = [];
        this.activitesTransmises = [];
        this.courriersDelegues = [];
        this.loading = false;
        this.toast.error('Impossible de charger les données.');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  telechargerCourrier(row: any): void {
    const id = row?.id;
    if (id == null) {
      return;
    }
    this.global.openCourrierFile(Number(id)).subscribe({
      next: (resp) => {
        const blob = resp.body ?? new Blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => window.URL.revokeObjectURL(url), 5000);
      },
      error: () => this.toast.error('Téléchargement impossible.'),
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

  peutSupprimerTransmise(row: { statut?: string }): boolean {
    return row?.statut === 'En_Validation_Directeur_ODC';
  }

  libelleStatutTransmise(row: {
    statut?: string;
    directeurOdcDecision?: string;
    suggestionDirecteurOdc?: string;
  }): string {
    if (row?.statut === 'En_Validation_Directeur_ODC') {
      return 'En attente directeur ODC';
    }
    if (row?.directeurOdcDecision === 'VALIDEE') {
      return 'Validée par le directeur ODC';
    }
    if (row?.directeurOdcDecision === 'REFUSEE') {
      return 'Refusée par le directeur ODC';
    }
    if (row?.suggestionDirecteurOdc) {
      return 'Retour suggestion directeur → à retravailler';
    }
    return row?.statut || 'Transmise';
  }

  classeBadgeTransmise(row: {
    statut?: string;
    directeurOdcDecision?: string;
  }): string {
    if (row?.statut === 'En_Validation_Directeur_ODC') {
      return 'bg-warning text-dark';
    }
    if (row?.directeurOdcDecision === 'VALIDEE') {
      return 'bg-success';
    }
    if (row?.directeurOdcDecision === 'REFUSEE') {
      return 'bg-danger';
    }
    return 'bg-secondary';
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
