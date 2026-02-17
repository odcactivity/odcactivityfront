import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportingService, Participant } from './services/reporting.service';
import * as XLSX from 'xlsx';

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

  loading: boolean = false;
  errorMessage: string = '';

  constructor(private reportingService: ReportingService) {}

  ngOnInit(): void {
    console.log('🔄 Initialisation du reporting component...');
    this.loading = true;
    console.log('📡 Appel à getAllParticipants...');
    this.reportingService.getAllParticipants().subscribe({
      next: (data: Participant[]) => {
        console.log('✅ Données reçues:', data);
        this.participants = data;
        this.filteredParticipants = [...data];

        // Remplir les entités et activités uniques
        this.entites = Array.from(new Set(data.map(p => p.entiteNom).filter(n => n)));
        this.activites = Array.from(new Set(data.map(p => p.activiteNom).filter(n => n)));
        
        console.log('📊 Entités extraites:', this.entites);
        console.log('🏃 Activités extraites:', this.activites);

        // Remplir les années disponibles
       const allDates = data
  .map(p => p.dateDebut)
  .filter((d): d is string => d !== undefined && d !== null) // Type guard
  .map(d => new Date(d).getFullYear());

        this.years = Array.from(new Set(allDates)).sort((a, b) => b - a);
        console.log('📅 Années extraites:', this.years);

        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Erreur lors du chargement des participants:', err);
        this.errorMessage = err?.message || 'Erreur lors du chargement des participants';
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    this.filteredParticipants = this.participants.filter(p => {
      const matchesEntite = !this.selectedEntite || p.entiteNom === this.selectedEntite;
      const matchesActivite = !this.selectedActivite || p.activiteNom === this.selectedActivite;
      const matchesYear = !this.selectedYear || 
        (p.dateDebut && new Date(p.dateDebut).getFullYear().toString() === this.selectedYear);

      const matchesSearch = !this.searchText || 
        p.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.prenom.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.email.toLowerCase().includes(this.searchText.toLowerCase());

      return matchesEntite && matchesActivite && matchesYear && matchesSearch;
    });
  }

  resetFilters(): void {
    this.selectedEntite = '';
    this.selectedActivite = '';
    this.selectedYear = '';
    this.searchText = '';
    this.applyFilters();
  }

  downloadExcel(): void {
    const dataForExcel = this.filteredParticipants.map(p => ({
      Nom: p.nom,
      Prénom: p.prenom,
      Email: p.email,
      Téléphone: p.phone,
      Genre: p.genre,
      Age: p.age,
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
