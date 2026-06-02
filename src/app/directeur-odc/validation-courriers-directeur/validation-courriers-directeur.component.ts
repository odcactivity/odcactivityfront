import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation-courriers-directeur',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './validation-courriers-directeur.component.html',
  styleUrl: './validation-courriers-directeur.component.scss',
})
export class ValidationCourriersDirecteurComponent implements OnInit {
  @Input() embedded = false;
  /** Le composant parent peut rafraîchir la liste principale après une action. */
  @Output() workflowChanged = new EventEmitter<void>();

  /** Ancien flux brouillon admin (si encore utilisé). */
  rowsAdmin: any[] = [];
  /** Réponses en attente de validation directeur ODC. */
  rowsReponses: any[] = [];
  loading = false;
  selectedAdmin: any | null = null;
  selectedReponse: any | null = null;
  suggestionText = '';
  suggestionReponseText = '';

  servicesOdc: { id: number; nom: string }[] = [];
  deleguerCourrierId: number | null = null;
  deleguerServiceId: number | null = null;
  deleguerNote = '';

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.load();
    this.global.getServicesOdcPourDirecteur().subscribe({
      next: (list) => {
        this.servicesOdc = Array.isArray(list) ? list : [];
      },
      error: () => {
        this.servicesOdc = [];
      },
    });
  }

  load(): void {
    this.loading = true;
    this.selectedAdmin = null;
    this.selectedReponse = null;
    this.suggestionText = '';
    this.suggestionReponseText = '';
    this.global.getCourriersValidationDirecteurOdc().subscribe({
      next: (d) => {
        this.rowsAdmin = Array.isArray(d) ? d : [];
      },
      error: () => {
        this.rowsAdmin = [];
      },
    });
    this.global.getCourrierReponsesEnAttenteDirecteurOdc().subscribe({
      next: (d) => {
        this.rowsReponses = Array.isArray(d) ? d : [];
        this.loading = false;
      },
      error: () => {
        this.rowsReponses = [];
        this.loading = false;
        this.toast.error('Impossible de charger les réponses en attente.');
      },
    });
  }

  selectAdmin(row: any): void {
    this.selectedAdmin = row;
    this.suggestionText = row?.suggestionDirecteur || '';
  }

  selectReponse(row: any): void {
    this.selectedReponse = row;
    this.suggestionReponseText = row?.suggestionDirecteur || '';
  }

  envoyerSuggestionAdmin(): void {
    if (!this.selectedAdmin?.id) {
      return;
    }
    const t = (this.suggestionText || '').trim();
    if (!t) {
      this.toast.warning('Saisissez vos suggestions pour l’admin.');
      return;
    }
    this.global.postCourrierSuggestionDirecteurOdc(this.selectedAdmin.id, t).subscribe({
      next: () => {
        this.toast.success('Suggestions envoyées à l’administrateur.');
        this.emitChanged();
      },
      error: () => this.toast.error('Envoi impossible.'),
    });
  }

  validerVersDcire(): void {
    if (!this.selectedAdmin?.id) {
      return;
    }
    this.global.postCourrierValiderTransmissionDcire(this.selectedAdmin.id).subscribe({
      next: () => {
        this.toast.success('Courrier validé.');
        this.emitChanged();
      },
      error: () => this.toast.error('Validation impossible.'),
    });
  }

  annulerAdmin(): void {
    if (!this.selectedAdmin?.id) {
      return;
    }
    this.global.postCourrierAnnulerDirecteurOdc(this.selectedAdmin.id).subscribe({
      next: () => {
        this.toast.success('Courrier archivé.');
        this.emitChanged();
      },
      error: () => this.toast.error('Action impossible.'),
    });
  }

  /** Valider une ancienne réponse en attente (données antérieures au flux directeur seul). */
  validerReponseFinale(): void {
    if (!this.selectedReponse?.id) {
      return;
    }
    this.global.postCourrierValiderReponseDirecteurOdc(this.selectedReponse.id).subscribe({
      next: () => {
        this.toast.success('Réponse validée.');
        this.emitChanged();
      },
      error: (err) => this.toast.error(err?.error?.message || 'Validation impossible.'),
    });
  }

  openDeleguer(courrierId: number): void {
    this.deleguerCourrierId = courrierId;
    this.deleguerServiceId = null;
    this.deleguerNote = '';
  }

  confirmerDelegation(): void {
    if (this.deleguerCourrierId == null || this.deleguerServiceId == null) {
      this.toast.warning('Choisissez une entité ODC.');
      return;
    }
    this.global
      .postCourrierDeleguerServiceDirecteurOdc(
        this.deleguerCourrierId,
        this.deleguerServiceId,
        this.deleguerNote
      )
      .subscribe({
        next: () => {
          this.toast.success('Courrier délégué à l’entité.');
          this.deleguerCourrierId = null;
          this.emitChanged();
        },
        error: (err) => this.toast.error(err?.error?.message || 'Délégation impossible.'),
      });
  }

  peutValiderDcire(row: any): boolean {
    const s = row?.statut;
    return s === 'ATTENTE_VALIDATION_DIRECTEUR_ODC' || s === 'ATTENTE_VALIDATION_ODC';
  }

  libelleStatut(statut: string): string {
    const map: Record<string, string> = {
      ATTENTE_VALIDATION_REPONSE_DIRECTEUR_ODC: 'Réponse à valider',
      ATTENTE_TRAITEMENT_RESPONSABLE_ODK: 'Ancien flux responsable ODK',
      ATTENTE_VALIDATION_DIRECTEUR_ODC: 'Brouillon admin',
      EN_REVISION_ADMIN_COURRIER: 'Révision admin',
      ENVOYER: 'Reçu ODC',
      IMPUTER: 'Délégué à une entité',
      TRANSMIS_DCIRE: 'Chez la DCIRE',
      REPONDU: 'Répondu',
    };
    return map[statut] || statut || '—';
  }

  telechargerPiece(courrier: any): void {
    const id = courrier?.id;
    if (id == null || !Number.isFinite(Number(id))) {
      return;
    }
    const numero = courrier?.numero ?? 'courrier';
    this.global.getCourrierFichierValidationDirecteurOdc(Number(id)).subscribe({
      next: (value: { body?: Blob; headers?: { get: (h: string) => string | null } }) => {
        const blob = value.body;
        if (!blob) {
          return;
        }
        let filename = String(numero);
        const cd = value.headers?.get('content-disposition');
        if (cd) {
          const match = cd.match(/filename="(.+)"/);
          if (match?.[1]) {
            filename = match[1];
          }
        }
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => this.toast.error('Téléchargement impossible.'),
    });
  }

  private emitChanged(): void {
    this.load();
    this.workflowChanged.emit();
  }
}
