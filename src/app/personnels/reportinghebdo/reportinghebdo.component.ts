import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReportingHebdoService } from './services/reportinghebdo.service';
import { ReportingHebdoActiviteDTO } from '@core/models/reportinghebdo.model';
import { EntiteService, Entite } from '@core/service/entite.service';

@Component({
  selector: 'app-reportinghebdo',
  standalone: true,
  templateUrl: './reportinghebdo.component.html',
  styleUrls: ['./reportinghebdo.component.scss'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class ReportinghebdoComponent implements OnInit {

  entites: Entite[] = [];
  selectedEntite: number | null = null;

  dateDebut!: string;
  dateFin!: string;

  activites: ReportingHebdoActiviteDTO[] = [];

  hasSearched = false;

  constructor(
    private reportingService: ReportingHebdoService,
    private entiteService: EntiteService
  ) {}

  ngOnInit(): void {
    this.entiteService.getAllEntites().subscribe({
      next: data => this.entites = data,
      error: err => console.error(err)
    });
  }

  loadActivites(): void {
    if (!this.selectedEntite || !this.dateDebut || !this.dateFin) {
      return;
    }

    this.hasSearched = true;

    this.reportingService
      .getActivites(this.selectedEntite, this.dateDebut, this.dateFin)
      .subscribe({
        next: (data: any) => {
          this.activites = data.content ?? data;
        },
        error: err => {
          console.error('Erreur backend :', err);
          this.activites = [];
        }
      });
  }
}
