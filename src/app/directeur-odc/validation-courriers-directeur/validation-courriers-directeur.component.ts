import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation-courriers-directeur',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './validation-courriers-directeur.component.html',
  styleUrl: './validation-courriers-directeur.component.scss'
})
export class ValidationCourriersDirecteurComponent implements OnInit {
  @Input() embedded = false;

  rows: any[] = [];
  loading = false;
  selected: any | null = null;
  suggestionText = '';

  constructor(
    private readonly global: GlobalService,
    private readonly toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.selected = null;
    this.suggestionText = '';
    this.global.getCourriersValidationDirecteurOdc().subscribe({
      next: (d) => {
        this.rows = Array.isArray(d) ? d : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Impossible de charger les courriers.');
      }
    });
  }

  selectRow(row: any): void {
    this.selected = row;
    this.suggestionText = row?.suggestionDirecteur || '';
  }

  envoyerSuggestion(): void {
    if (!this.selected?.id) {
      return;
    }
    const t = (this.suggestionText || '').trim();
    if (!t) {
      this.toast.warning('Saisissez vos suggestions pour l’admin.');
      return;
    }
    this.global.postCourrierSuggestionDirecteurOdc(this.selected.id, t).subscribe({
      next: () => {
        this.toast.success('Suggestions envoyées à l’administrateur.');
        this.load();
      },
      error: () => this.toast.error('Envoi impossible.')
    });
  }

  validerVersDcire(): void {
    if (!this.selected?.id) {
      return;
    }
    this.global.postCourrierValiderTransmissionDcire(this.selected.id).subscribe({
      next: () => {
        this.toast.success('Courrier validé.');
        this.load();
      },
      error: () => this.toast.error('Validation impossible.')
    });
  }

  annuler(): void {
    if (!this.selected?.id) {
      return;
    }
    this.global.postCourrierAnnulerDirecteurOdc(this.selected.id).subscribe({
      next: () => {
        this.toast.success('Courrier archivé.');
        this.load();
      },
      error: () => this.toast.error('Action impossible.')
    });
  }

  peutValiderDcire(row: any): boolean {
    const s = row?.statut;
    return s === 'ATTENTE_VALIDATION_DIRECTEUR_ODC' || s === 'ATTENTE_VALIDATION_ODC';
  }

  telechargerPieceValidation(): void {
    const id = this.selected?.id;
    if (id == null || !Number.isFinite(Number(id))) {
      return;
    }
    const numero = this.selected?.numero ?? 'courrier';
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
      error: () => this.toast.error('Téléchargement impossible (fichier absent ou étape non autorisée).'),
    });
  }
}
