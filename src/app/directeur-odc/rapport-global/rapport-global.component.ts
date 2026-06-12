import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Entite } from '@core/models/Entite';
import { Courrier } from '@core/models/Courrier';
import { GlobalService } from '@core/service/global.service';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { isOdcPillarEntiteName } from '@core/utils/odc-entite';

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
  activites: any[] = [];
  courriers: Courrier[] = [];

  reportType: 'activites' | 'courriers' = 'activites';

  entiteId: number | null = null;
  activiteId: number | null = null;
  courrierId: number | null = null;
  annee = new Date().getFullYear();
  mois: number | null = 1;

  periodeMode: 'annee' | 'mois' = 'annee';

  apercuLignes: RapportApercuLigne[] = [];
  apercuCourrierLignes: any[] = [];
  apercuLoading = false;
  apercuCharge = false;

  constructor(
    private readonly http: HttpClient,
    private readonly global: GlobalService,
    private readonly toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.global.get('entite').subscribe({
      next: (list: Entite[]) => {
        const raw = Array.isArray(list) ? list : [];
        this.entites = raw.filter((e) => isOdcPillarEntiteName(e?.nom));
      },
      error: () => this.toast.error('Impossible de charger les entités.')
    });
    this.global.get('activite').subscribe({
      next: (list: any[]) => {
        const raw = Array.isArray(list) ? list : [];
        this.activites = raw.filter((a) => a.id != null);
      },
      error: () => { }
    });
    this.http.get<Courrier[]>(`${environment.apiUrl}/api/courriers/tous`).subscribe({
      next: (list) => {
        const raw = Array.isArray(list) ? list : [];
        this.courriers = raw.filter((c: any) => {
          const isOdc = (e: any) => e && isOdcPillarEntiteName(e.nom);
          return (
            isOdc(c.entite) ||
            isOdc(c.structureOrigine) ||
            isOdc(c.directionInitial) ||
            isOdc(c.cibleInterneDirection) ||
            isOdc(c.serviceOdcAffecte)
          );
        });
      },
      error: () => { }
    });
  }

  setReportType(type: 'activites' | 'courriers'): void {
    this.reportType = type;
    this.entiteId = null;
    this.activiteId = null;
    this.courrierId = null;
    this.apercuLignes = [];
    this.apercuCourrierLignes = [];
    this.apercuCharge = false;
  }

  get filteredActivites(): any[] {
    if (this.entiteId == null) {
      return this.activites;
    }
    return this.activites.filter((a) => {
      const ent = a.entite;
      if (!ent) return false;
      const id = typeof ent === 'number' ? ent : ent.id;
      return id === this.entiteId;
    });
  }

  get filteredCourriers(): any[] {
    if (this.entiteId == null) {
      return this.courriers;
    }
    return this.courriers.filter((c: any) => {
      const checkId = (e: any) => e && e.id === this.entiteId;
      return (
        checkId(c.entite) ||
        checkId(c.structureOrigine) ||
        checkId(c.directionInitial) ||
        checkId(c.cibleInterneDirection) ||
        checkId(c.serviceOdcAffecte)
      );
    });
  }

  libelleFiltresResume(): string {
    const parts: string[] = [];
    parts.push(`Type : ${this.reportType === 'activites' ? 'Activités' : 'Courriers'}`);
    if (this.entiteId != null) {
      const e = this.entites.find((x) => x.id === this.entiteId);
      parts.push(`Entité : ${e?.nom ?? '—'}`);
    } else {
      parts.push('Entité : toutes (périmètre ODC)');
    }
    if (this.reportType === 'activites') {
      if (this.activiteId != null) {
        const a = this.activites.find((x) => x.id === this.activiteId);
        parts.push(`Activité : ${a?.nom ?? '—'}`);
      } else {
        parts.push('Activité : toutes');
      }
      if (this.courrierId != null) {
        const c = this.courriers.find((x) => x.id === this.courrierId);
        parts.push(`Courrier lié : ${c?.numero ?? c?.objet ?? '—'}`);
      }
    } else {
      if (this.courrierId != null) {
        const c = this.courriers.find((x) => x.id === this.courrierId);
        parts.push(`Courrier : ${c?.numero ?? c?.objet ?? '—'}`);
      }
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
    this.apercuLoading = true;
    this.apercuCharge = false;
    this.apercuLignes = [];
    this.apercuCourrierLignes = [];

    if (this.reportType === 'activites') {
      const url = `${environment.apiUrl}/api/rapport-global/activites-apercu`;
      this.http.get<RapportApercuLigne[]>(url, { params: this.buildParams() }).subscribe({
        next: (rows) => {
          this.apercuLignes = Array.isArray(rows) ? rows : [];
          this.apercuLoading = false;
          this.apercuCharge = true;
        },
        error: () => {
          this.apercuLoading = false;
          this.toast.error("Impossible de charger l'aperçu.");
        }
      });
    } else {
      const url = `${environment.apiUrl}/api/rapport-global/courriers-apercu`;
      this.http.get<any[]>(url, { params: this.buildParams() }).subscribe({
        next: (rows) => {
          this.apercuCourrierLignes = Array.isArray(rows) ? rows : [];
          this.apercuLoading = false;
          this.apercuCharge = true;
        },
        error: () => {
          this.apercuLoading = false;
          this.toast.error("Impossible de charger l'aperçu.");
        }
      });
    }
  }

  private buildParams(): HttpParams {
    let p = new HttpParams().set('annee', String(this.annee));
    if (this.periodeMode === 'mois' && this.mois != null && this.mois >= 1 && this.mois <= 12) {
      p = p.set('mois', String(this.mois));
    }
    if (this.entiteId != null) {
      p = p.set('entiteId', String(this.entiteId));
    }
    if (this.reportType === 'activites') {
      if (this.activiteId != null) {
        p = p.set('activiteId', String(this.activiteId));
      }
      if (this.courrierId != null) {
        p = p.set('courrierId', String(this.courrierId));
      }
    } else {
      if (this.courrierId != null) {
        p = p.set('courrierId', String(this.courrierId));
      }
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
    const endpoint = this.reportType === 'activites' ? 'activites.csv' : 'courriers.csv';
    const filename = this.reportType === 'activites' ? 'rapport_activites.csv' : 'rapport_courriers.csv';
    const url = `${environment.apiUrl}/api/rapport-global/${endpoint}`;
    this.http.get(url, { params: this.buildParams(), responseType: 'blob' }).subscribe({
      next: (blob) => this.triggerDownload(blob, filename),
      error: () => this.toast.error('Export CSV impossible.')
    });
  }

  downloadPdf(): void {
    const endpoint = this.reportType === 'activites' ? 'activites.pdf' : 'courriers.pdf';
    const filename = this.reportType === 'activites' ? 'rapport_activites.pdf' : 'rapport_courriers.pdf';
    const url = `${environment.apiUrl}/api/rapport-global/${endpoint}`;
    this.http.get(url, { params: this.buildParams(), responseType: 'blob' }).subscribe({
      next: (blob) => this.triggerDownload(blob, filename),
      error: () => this.toast.error('Export PDF impossible.')
    });
  }
}
