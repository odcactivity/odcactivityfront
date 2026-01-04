import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportingHebdoService } from './services/reportinghebdo.service';
import { ReportingHebdoActiviteDTO } from '@core/models/reportinghebdo.model';
import { EntiteService, Entite} from '@core/service/entite.service';

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

  constructor(
    private reportingService: ReportingHebdoService,
    private entiteService: EntiteService
  ) {}

  ngOnInit(): void {
    this.entiteService.getAllEntites().subscribe(data => {
      this.entites = data;
    });
  }

  loadActivites(): void {
    if (this.selectedEntite === null || !this.dateDebut || !this.dateFin) {
  console.log('Paramètres manquants');
  return;

    }

    this.reportingService
      .getActivites(this.selectedEntite, this.dateDebut, this.dateFin)
     .subscribe({
  next: data => {
    console.log('Activités reçues :', data);
    this.activites = data;
  },
  error: err => {
    console.error('Erreur backend :', err);
  }

      });
  }
}
