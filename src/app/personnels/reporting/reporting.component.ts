import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { ReportingService, Participant } from './services/reporting.service';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {

  participants: Participant[] = [];
  filteredParticipants: Participant[] = [];
  entites: string[] = [];
  activites: string[] = [];
  years: number[] = [];

  selectedEntite: string = '';
  selectedActivite: string = '';
  selectedYear: string = '';
  searchText: string = '';

  loading = false;

  constructor(private reportingService: ReportingService) {}

  ngOnInit() {
    this.loadParticipants();
  }

  loadParticipants() {
    this.loading = true;
    this.reportingService.getAllParticipants().subscribe(data => {
      this.participants = data;
      this.filteredParticipants = [...data];
      this.entites = Array.from(new Set(data.map(p => p.entiteNom))).filter(Boolean);
      this.activites = Array.from(new Set(data.map(p => p.activiteNom))).filter(Boolean);
      this.years = Array.from(new Set(data.map(p => new Date(p.dateDebut || '').getFullYear()))).filter(Boolean) as number[];
      this.loading = false;
      console.log(data);
    }, err => this.loading = false);
  }

  onEntiteChange() {
    // Met à jour les activités en fonction de l'entité choisie
    this.activites = Array.from(new Set(
      this.participants
        .filter(p => !this.selectedEntite || p.entiteNom === this.selectedEntite)
        .map(p => p.activiteNom)
        .filter(Boolean)
    ));
    this.selectedActivite = '';
    this.applyFilters();
  }

  applyFilters() {
    this.filteredParticipants = this.participants.filter(p =>
      (!this.selectedEntite || p.entiteNom === this.selectedEntite) &&
      (!this.selectedActivite || p.activiteNom === this.selectedActivite) &&
      (!this.selectedYear || (p.dateDebut && new Date(p.dateDebut).getFullYear().toString() === this.selectedYear)) &&
      (!this.searchText || 
        p.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.prenom.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.email.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

  resetFilters() {
    this.selectedEntite = '';
    this.selectedActivite = '';
    this.selectedYear = '';
    this.searchText = '';
    this.applyFilters();
  }

  downloadExcel() {
    const dataForExcel = this.filteredParticipants.map(p => ({
      Nom: p.nom,
      Prénom: p.prenom,
      Email: p.email,
      Téléphone: p.phone,
      Genre: p.genre,
      Entité: p.entiteNom,
      Activité: p.activiteNom,
      'Date début': p.dateDebut ? new Date(p.dateDebut).toLocaleDateString('fr-FR') : '',
      'Date fin': p.dateFin ? new Date(p.dateFin).toLocaleDateString('fr-FR') : ''
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataForExcel);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporting');
    XLSX.writeFile(workbook, 'reporting.xlsx');
  }
}