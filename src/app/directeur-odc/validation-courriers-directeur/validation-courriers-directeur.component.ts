import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlobalService } from '@core/service/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation-courriers-directeur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validation-courriers-directeur.component.html',
  styleUrl: './validation-courriers-directeur.component.scss'
})
export class ValidationCourriersDirecteurComponent implements OnInit {
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
        this.toast.success('Courrier transmis à la DCIRE.');
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
}
