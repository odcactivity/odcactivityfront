import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '@core';
import { GlobalService } from '@core/service/global.service';
import {
  profileForRole,
  profileFromRoles,
  ResponsableEntiteProfile,
} from '@core/utils/responsable-entite-config';
import { resolveEffectiveRolesFromUser } from '@core/utils/app-roles';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

type Tab = 'attente' | 'transmises';
type CourrierTab = 'actifs' | 'archives';
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
  courrierTab: CourrierTab = 'actifs';
  view: ResponsableView = 'activites';
  profile: ResponsableEntiteProfile = {
    role: 'RESPONSABLE_ODK',
    routePrefix: 'responsable-odk',
    title: 'Responsable ODK (Kalanso)',
  };
  activites: any[] = [];
  activitesTransmises: any[] = [];
  courriersDelegues: any[] = [];
  courriersArchives: any[] = [];
  loading = false;
  noteActivite = '';

  // Réponse courrier
  reponseOuverte: any = null;
  reponseEmail = '';
  reponseObjet = '';
  reponseMessage = '';
  reponseFichier: File | null = null;
  reponseLoading = false;

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService,
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    const roles = resolveEffectiveRolesFromUser(this.auth.getCurrentUserFromStorage());
    const fromRoute = this.route.snapshot.data['responsableRole'] as string | undefined;
    this.profile =
      profileForRole(fromRoute) ??
      profileFromRoles(roles) ??
      this.profile;
    const routed = this.route.snapshot.data['responsableTab'] as ResponsableView | undefined;
    this.view = routed === 'courriers' ? 'courriers' : 'activites';
    this.loadAll();
  }

  get pageTitle(): string {
    return `Espace ${this.profile.title}`;
  }

  setTab(t: Tab): void {
    this.tab = t;
  }

  setCourrierTab(t: CourrierTab): void {
    this.courrierTab = t;
  }

  loadAll(): void {
    this.loading = true;
    forkJoin({
      attente: this.global.get('activite/responsable-entite/en-attente'),
      transmises: this.global.get('activite/responsable-entite/transmises-directeur'),
      courriersDelegues: this.global.getCourriersDeleguesResponsableEntite(),
      courriersArchives: this.global.getCourriersArchivesResponsableEntite(),
    }).subscribe({
      next: ({ attente, transmises, courriersDelegues, courriersArchives }) => {
        this.activites = Array.isArray(attente) ? attente : [];
        this.activitesTransmises = Array.isArray(transmises) ? transmises : [];
        this.courriersDelegues = Array.isArray(courriersDelegues) ? courriersDelegues : [];
        this.courriersArchives = Array.isArray(courriersArchives) ? courriersArchives : [];
      },
      error: () => {
        this.activites = [];
        this.activitesTransmises = [];
        this.courriersDelegues = [];
        this.courriersArchives = [];
        this.loading = false;
        this.toast.error('Impossible de charger les données.');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  fichiersActivite(row: { activitevalidation?: { id?: number; fichierjoint?: string }[] }): {
    id?: number;
    fichierjoint?: string;
  }[] {
    const list = row?.activitevalidation;
    if (!Array.isArray(list)) {
      return [];
    }
    return list.filter((v) => v?.fichierjoint);
  }

  telechargerFichierActivite(validationId: number, nom?: string): void {
    this.global.getValidationFileResponse(validationId).subscribe({
      next: (resp) => {
        const blob = resp.body ?? new Blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = nom || `piece_jointe_${validationId}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => window.URL.revokeObjectURL(url), 15000);
      },
      error: () => this.toast.error('Téléchargement du fichier joint impossible.'),
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
        const contentDisposition = resp.headers.get('content-disposition');
        let filename = `courrier_${id}.pdf`;
        if (contentDisposition) {
          const matches = /filename="([^"]*)"/.exec(contentDisposition);
          if (matches && matches[1]) {
            filename = matches[1];
          }
        }
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => window.URL.revokeObjectURL(url), 15000);
      },
      error: () => this.toast.error('Téléchargement impossible.'),
    });
  }

  telechargerFichierArchive(row: any): void {
    const id = row?.id;
    if (id == null) {
      return;
    }
    this.global.openCourrierFichierArchive(Number(id)).subscribe({
      next: (resp) => {
        const blob = resp.body ?? new Blob();
        const url = window.URL.createObjectURL(blob);
        const contentDisposition = resp.headers.get('content-disposition');
        let filename = `archive_${id}.pdf`;
        if (contentDisposition) {
          const matches = /filename="([^"]*)"/.exec(contentDisposition);
          if (matches && matches[1]) {
            filename = matches[1];
          }
        }
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => window.URL.revokeObjectURL(url), 15000);
      },
      error: () => this.toast.error('Téléchargement du fichier d\'archive impossible.'),
    });
  }

  // ─── Archivage courrier avec fichier ───────────────────────────────
  archiveOuverte: any = null;
  archiveFichier: File | null = null;
  archiveLoading = false;

  ouvrirArchivage(courrier: any): void {
    this.archiveOuverte = courrier;
    this.archiveFichier = null;
  }

  annulerArchivage(): void {
    this.archiveOuverte = null;
    this.archiveFichier = null;
  }

  onArchiveFichier(event: any): void {
    const file = event?.target?.files?.[0];
    if (file) {
      this.archiveFichier = file;
    }
  }

  confirmerArchivage(): void {
    const id = this.archiveOuverte?.id;
    if (id == null) {
      return;
    }
    if (!this.archiveFichier) {
      this.toast.warning('Veuillez sélectionner un fichier pour l\'archivage.');
      return;
    }
    this.archiveLoading = true;
    this.global.patchCourrierArchiverResponsableEntite(Number(id), this.archiveFichier).subscribe({
      next: () => {
        this.archiveLoading = false;
        this.toast.success('Courrier archivé avec succès.');
        this.annulerArchivage();
        this.loadAll();
      },
      error: (e: { error?: { message?: string } }) => {
        this.archiveLoading = false;
        this.toast.error(e?.error?.message || 'Archivage impossible.');
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
    this.global.delete('activite/responsable-entite', id).subscribe({
      next: () => {
        this.toast.success('Activité supprimée.');
        this.loadAll();
      },
      error: (e: { error?: { message?: string } }) => {
        this.toast.error(e?.error?.message || 'Suppression impossible.');
      },
    });
  }

  // ─── Réponse à un courrier délégué ───────────────────────────────

  ouvrirReponse(courrier: any): void {
    this.reponseOuverte = courrier;
    const user = this.auth.getCurrentUserFromStorage() as { email?: string } | null;
    this.reponseEmail = user?.email || '';
    this.reponseObjet = `Re: ${courrier.objet || ''}`;
    this.reponseMessage = '';
    this.reponseFichier = null;
  }

  annulerReponse(): void {
    this.reponseOuverte = null;
    this.reponseEmail = '';
    this.reponseObjet = '';
    this.reponseMessage = '';
    this.reponseFichier = null;
  }

  onReponseFichier(event: any): void {
    const file = event?.target?.files?.[0];
    if (file) {
      this.reponseFichier = file;
    }
  }

  envoyerReponse(): void {
    if (!this.reponseOuverte?.id) {
      return;
    }
    if (!this.reponseEmail.trim() || !this.reponseObjet.trim() || !this.reponseMessage.trim()) {
      this.toast.warning('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    this.reponseLoading = true;
    const fd = new FormData();
    fd.append('courrierId', String(this.reponseOuverte.id));
    fd.append('email', this.reponseEmail.trim());
    fd.append('objet', this.reponseObjet.trim());
    fd.append('message', this.reponseMessage.trim());
    if (this.reponseFichier) {
      fd.append('file', this.reponseFichier);
    }
    this.global.postCourrierReponseMultipart(fd).subscribe({
      next: () => {
        this.reponseLoading = false;
        this.toast.success('Réponse envoyée avec succès.');
        this.annulerReponse();
        this.loadAll();
      },
      error: (e: { error?: { message?: string } }) => {
        this.reponseLoading = false;
        this.toast.error(e?.error?.message || 'Échec de l\'envoi de la réponse.');
      },
    });
  }
}
