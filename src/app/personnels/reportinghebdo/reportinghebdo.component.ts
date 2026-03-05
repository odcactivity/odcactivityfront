import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EntiteService, Entite } from '@core/service/entite.service';
import { ReportingHebdoService } from './services/reportinghebdo.service';
import { ReportingHebdoActiviteDTO } from '@core/models/reportinghebdo.model';

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
    private entiteService: EntiteService,
    private reportingService: ReportingHebdoService
  ) {}

  ngOnInit(): void {
    console.log("azazakzaazlklazkaz")
    this.entiteService.getAllEntites().subscribe({
      next: (data: Entite[]) => {this.entites = data;
      },
      error: (err) => console.error('Erreur récupération entités :', err)
    });
  }

  loadActivites(): void {
    if (!this.selectedEntite || !this.dateDebut || !this.dateFin) {
      return;
    }

    this.reportingService.getActivites(this.selectedEntite, this.dateDebut, this.dateFin)
      .subscribe({
        next: (data: ReportingHebdoActiviteDTO[]) => {
          this.activites = data;
          this.hasSearched = true;
        },
        error: (err) => {
          console.error('Erreur backend :', err);
          this.activites = [];
          this.hasSearched = true;
        }
      });
  }
}