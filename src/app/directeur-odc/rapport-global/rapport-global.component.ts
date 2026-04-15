import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Entite } from '@core/models/Entite';
import { GlobalService } from '@core/service/global.service';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';

function normaliserNomEntite(n: string | undefined): string {
  return (n || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

/** Structures sœurs hors périmètre activités ODC dans ce filtre. */
function estEntiteExclueRapportOdc(nom: string | undefined): boolean {
  const n = normaliserNomEntite(nom);
  if (!n) {
    return false;
  }
  const exclus = ['orange digital center', 'dci', 'rse', 'fondation'];
  return exclus.some(
    (ex) =>
      n === ex ||
      n.startsWith(ex + ' ') ||
      n.endsWith(' ' + ex) ||
      n.includes(' ' + ex + ' ')
  );
}

export interface RapportApercuLigne {
  id: number;
  nom: string;
  titre: string;
  dateDebut: string;
  dateFin: string;
  statut: string;
  entiteNom: string;
  lieu: string;
}

@Component({
  selector: 'app-rapport-global',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport-global.component.html',
  styleUrl: './rapport-global.component.scss'
})
export class RapportGlobalComponent implements OnInit {
  entites: Entite[] = [];
  activites: { id: number; nom: string }[] = [];

  entiteId: number | null = null;
  activiteId: number | null = null;
  annee = new Date().getFullYear();
  mois: number | null = 1;

  periodeMode: 'annee' | 'mois' = 'annee';

  apercuLignes: RapportApercuLigne[] = [];
  apercuLoading = false;
  apercuCharge = false;

  constructor(
    private readonly http: HttpClient,
    private readonly global: GlobalService,
    private readonly toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.global.get('entite').subscribe({
      next: (list: Entite[]) => {
        const raw = Array.isArray(list) ? list : [];
        this.entites = raw.filter((e) => !estEntiteExclueRapportOdc(e?.nom));
      },
      error: () => this.toast.error('Impossible de charger les entités.')
    });
    this.global.get('activite').subscribe({
      next: (list: any[]) => {
        this.activites = (Array.isArray(list) ? list : [])
          .map((a) => ({ id: a.id, nom: a.nom || 'Sans nom' }))
          .filter((a) => a.id != null);
      },
      error: () => {}
    });
  }

  libelleFiltresResume(): string {
    const parts: string[] = [];
    if (this.entiteId != null) {
      const e = this.entites.find((x) => x.id === this.entiteId);
      parts.push(`Entité : ${e?.nom ?? '—'}`);
    } else {
      parts.push('Entité : toutes (périmètre ODC)');
    }
    if (this.activiteId != null) {
      const a = this.activites.find((x) => x.id === this.activiteId);
      parts.push(`Activité : ${a?.nom ?? '—'}`);
    } else {
      parts.push('Activité : toutes');
    }
    parts.push(`Année : ${this.annee}`);
    if (this.periodeMode === 'mois' && this.mois != null) {
      const moisNoms = [
        '', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
      ];
      parts.push(`Mois : ${moisNoms[this.mois] ?? this.mois}`);
    } else {
      parts.push('Période : année complète');
    }
    return parts.join(' · ');
  }

  chargerApercu(): void {
    const url = `${environment.apiUrl}/api/rapport-global/activites-apercu`;
    this.apercuLoading = true;
    this.apercuCharge = false;
    this.http.get<RapportApercuLigne[]>(url, { params: this.buildParams() }).subscribe({
      next: (rows) => {
        this.apercuLignes = Array.isArray(rows) ? rows : [];
        this.apercuLoading = false;
        this.apercuCharge = true;
      },
      error: () => {
        this.apercuLoading = false;
        this.toast.error('Impossible de charger l’aperçu.');
      }
    });
  }

  private buildParams(): HttpParams {
    let p = new HttpParams().set('annee', String(this.annee));
    if (this.periodeMode === 'mois' && this.mois != null && this.mois >= 1 && this.mois <= 12) {
      p = p.set('mois', String(this.mois));
    }
    if (this.entiteId != null) {
      p = p.set('entiteId', String(this.entiteId));
    }
    if (this.activiteId != null) {
      p = p.set('activiteId', String(this.activiteId));
    }
    return p;
  }

  private triggerDownload(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  downloadCsv(): void {
    const url = `${environment.apiUrl}/api/rapport-global/activites.csv`;
    this.http.get(url, { params: this.buildParams(), responseType: 'blob' }).subscribe({
      next: (blob) => this.triggerDownload(blob, 'rapport_activites.csv'),
      error: () => this.toast.error('Export CSV impossible.')
    });
  }

  downloadPdf(): void {
    const url = `${environment.apiUrl}/api/rapport-global/activites.pdf`;
    this.http.get(url, { params: this.buildParams(), responseType: 'blob' }).subscribe({
      next: (blob) => this.triggerDownload(blob, 'rapport_activites.pdf'),
      error: () => this.toast.error('Export PDF impossible.')
    });
  }
}
