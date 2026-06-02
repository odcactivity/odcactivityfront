import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GlobalService } from '@core/service/global.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

type TabKey = 'attente' | 'validees' | 'refusees';

@Component({
  selector: 'app-validation-activites',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModalModule],
  templateUrl: './validation-activites.component.html',
  styleUrl: './validation-activites.component.scss'
})
export class ValidationActivitesComponent implements OnInit {
  @ViewChild('detailTpl') detailTpl!: TemplateRef<unknown>;

  rows: any[] = [];
  historiqueValidees: any[] = [];
  historiqueRefusees: any[] = [];
  loading = false;
  loadingHistorique = false;
  tab: TabKey = 'attente';

  detail: any | null = null;
  detailLoading = false;
  detailForRow: any | null = null;
  suggestionTexte = '';

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService,
    private readonly modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.load();
    this.loadHistorique();
  }

  load(): void {
    this.loading = true;
    this.global.get('activite/en-attente-validation-directeur-odc').subscribe({
      next: (d) => {
        this.rows = Array.isArray(d) ? d : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Impossible de charger les activités en attente.');
      }
    });
  }

  loadHistorique(): void {
    this.loadingHistorique = true;
    this.global.get('activite/directeur-odc/historique-validees').subscribe({
      next: (d) => {
        this.historiqueValidees = Array.isArray(d) ? d : [];
        this.loadingHistorique = false;
      },
      error: () => {
        this.loadingHistorique = false;
        this.toast.error('Impossible de charger l’historique des validations.');
      }
    });
    this.global.get('activite/directeur-odc/historique-refusees').subscribe({
      next: (d) => {
        this.historiqueRefusees = Array.isArray(d) ? d : [];
      },
      error: () => {
        this.toast.error('Impossible de charger l’historique des refus.');
      }
    });
  }

  setTab(t: TabKey): void {
    this.tab = t;
  }

  openDetail(row: any): void {
    this.detailForRow = row;
    this.detail = null;
    this.detailLoading = true;
    this.modal.open(this.detailTpl, { size: 'lg', scrollable: true });
    this.global.getId('activite', row.id).subscribe({
      next: (d) => {
        this.detail = d;
        this.detailLoading = false;
      },
      error: () => {
        this.detailLoading = false;
        this.toast.error('Impossible de charger le détail de l’activité.');
      }
    });
  }

  closeModal(): void {
    this.modal.dismissAll();
    this.detail = null;
    this.detailForRow = null;
  }

  validerFromModal(): void {
    const id = this.detail?.id ?? this.detailForRow?.id;
    if (id == null) {
      return;
    }
    this.valider(id, true);
  }

  rejeterFromModal(): void {
    const id = this.detail?.id ?? this.detailForRow?.id;
    if (id == null) {
      return;
    }
    this.rejeter(id, true);
  }

  valider(id: number | undefined, fromModal = false): void {
    if (id == null) {
      return;
    }
    this.global.post(`activite/${id}/valider-directeur-odc`, {}).subscribe({
      next: () => {
        this.toast.success('Activité validée. Les personnels ont été notifiés.');
        if (fromModal) {
          this.closeModal();
        }
        this.load();
        this.loadHistorique();
      },
      error: () => this.toast.error('Validation impossible.')
    });
  }

  suggerer(id: number | undefined, texte: string): void {
    if (id == null || !texte?.trim()) {
      this.toast.warning('Saisissez une suggestion.');
      return;
    }
    this.global
      .post(`activite/${id}/suggestion-directeur-odc?suggestion=${encodeURIComponent(texte.trim())}`, {})
      .subscribe({
        next: () => {
          this.toast.success('Suggestion envoyée au responsable ODK.');
          this.load();
        },
        error: () => this.toast.error('Envoi impossible.'),
      });
  }

  rejeter(id: number | undefined, fromModal = false): void {
    if (id == null) {
      return;
    }
    this.global.post(`activite/${id}/rejeter-directeur-odc`, {}).subscribe({
      next: () => {
        this.toast.success('Activité refusée. Le créateur a été informé.');
        if (fromModal) {
          this.closeModal();
        }
        this.load();
        this.loadHistorique();
      },
      error: () => this.toast.error('Refus impossible.')
    });
  }

  supprimer(row: any, fromModal = false): void {
    const id = row?.id;
    if (id == null) {
      return;
    }
    if (!confirm(`Supprimer définitivement l'activité « ${row.nom} » ?`)) {
      return;
    }
    this.global.delete('activite/directeur-odc', id).subscribe({
      next: () => {
        this.toast.success('Activité supprimée.');
        if (fromModal) {
          this.closeModal();
        }
        this.load();
        this.loadHistorique();
      },
      error: (e: { error?: { message?: string } }) => {
        this.toast.error(e?.error?.message || 'Suppression impossible.');
      },
    });
  }
}
