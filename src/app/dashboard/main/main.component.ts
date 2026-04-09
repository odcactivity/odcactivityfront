import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterLink } from '@angular/router';
import { GlobalService } from '@core/service/global.service';
import { AuthService } from '@core';
import { Participant } from '@core/models/Participant';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Activity } from '@core/models/Activity';
import { Entite } from '@core/models/Entite';
import { canonicalizeAppRoles } from '@core/utils/app-roles';
import { filterEntitesOdcPiliers, isOdcPillarEntiteName } from '@core/utils/odc-entite';

type PeriodKey = 'semaine' | 'mois' | 'annee';

interface EntitySlot {
  labelShort: string;
  labelFull: string;
}

interface ActivityBreakdownRow {
  titre: string;
  hommes: number;
  femmes: number;
  total: number;
}

interface CellStat {
  entiteShort: string;
  entiteFull: string;
  bucketLabel: string;
  total: number;
  hommes: number;
  femmes: number;
  titres: string[];
  /** Détail par activité (stats globales sur la période / créneau) */
  breakdown: ActivityBreakdownRow[];
}

interface CourrierDashboardDetailRow {
  categorie: string;
  libelle: string;
  structure: string;
  date: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [CommonModule, RouterLink, NgApexchartsModule, FormsModule]
})
export class MainComponent implements OnInit {
  public statusChartOptions: any;
  public entityChartOptions: any;
  public courrierPieOptions: any;
  public courrierLineOptions: any;

  /** Courriers : cartes + graphes (rôles avec accès API dashboard). */
  showCourrierDashboard = false;
  courrierEmis = 0;
  courrierRepondu = 0;
  courrierEnAttente = 0;
  courrierRecu = 0;
  courrierValide = 0;
  selectedCourrierPeriod: PeriodKey = 'semaine';
  selectedCourrierStructureId: number | null = null;
  structureOptionsCourrier: { id: number; nom: string }[] = [];

  private static readonly COURRIER_CAT_KEYS = ['emis', 'repondu', 'enAttente', 'recu', 'valide'] as const;
  private static readonly COURRIER_CHART_LABELS = ['Émis', 'Répondu', 'En attente', 'Reçu', 'Validé'];
  private static readonly COURRIER_COLORS = ['#0d9488', '#16a34a', '#d97706', '#2563eb', '#7c3aed'];
  /** Buckets série courriers (copie pour l’infobulle — évite décalage série / détail). */
  private courrierLineBuckets: any[] = [];
  /** Dernière erreur de chargement de la série « évolution des courriers » (si applicable). */
  private lastCourrierSerieLoadError: string | null = null;

  nombreUtilisateurs: number | undefined;
  nombreActivite: number = 0;
  nombreActiviteEncours: number = 0;
  nombreActiviteEnAttente: number = 0;
  nombreActiviteTerminer: number = 0;

  /** Vue temps : Semaine = jours lun–dim, Mois = jours 1–n, Année = mois janv.–déc. */
  selectedPeriod: PeriodKey = 'semaine';

  readonly entitySlots: EntitySlot[] = [
    { labelShort: 'Kalanso', labelFull: 'Orange Digital Kalanso' },
    { labelShort: 'FabLab', labelFull: 'Orange FabLab' },
    { labelShort: 'Orange Fab', labelFull: 'Orange Fab' },
    { labelShort: 'Multimedia', labelFull: 'Multimedia' }
  ];

  private static readonly WEEKDAY_LABELS = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];

  private static readonly MONTH_LABELS = [
    'janv.',
    'févr.',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juil.',
    'août',
    'sept.',
    'oct.',
    'nov.',
    'déc.'
  ];

  /** [entityIndex][xBucketIndex] — rempli selon selectedPeriod */
  private cellStats: CellStat[][] = [];

  allActivities: Activity[] = [];
  safeParticipants: Participant[] = [];
  private entiteById = new Map<number, Entite>();
  /** id entité API → index 0..3 (prioritaire sur le matching par nom) */
  private entiteIdToSlot = new Map<number, number>();
  private currentRoles: string[] = [];

  constructor(private globalService: GlobalService, private authService: AuthService) {}

  ngOnInit() {
    this.currentRoles = canonicalizeAppRoles(this.authService.getCurrentUserFromStorage()?.roles || []);
    this.getNombreUitlisateur();
    this.getNombreActivite();
    this.getNombreActiviteEncours();
    this.getNombreActiviteEnAttente();
    this.getNombreActiviteTerminer();
    this.initEmptyCharts();
    this.initCourrierCharts();
    this.loadDashboardData();
  }

  setCourrierPeriod(period: PeriodKey): void {
    this.selectedCourrierPeriod = period;
    this.loadCourrierSerie();
  }

  onCourrierStructureChange(): void {
    this.loadCourrierTotaux();
    this.loadCourrierSerie();
  }

  setPeriod(period: PeriodKey): void {
    this.selectedPeriod = period;
    this.buildEntityChart();
  }

  private escapeHtml(s: string): string {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  getNombreUitlisateur() {
    this.globalService.get('utilisateur/nombre').subscribe({
      next: (count) => (this.nombreUtilisateurs = count),
      error: (err) => console.log(err)
    });
  }

  getNombreActivite() {
    this.globalService.get('activite/nombre').subscribe({
      next: (count) => (this.nombreActivite = count),
      error: (err) => console.log(err)
    });
  }

  getNombreActiviteEncours() {
    this.globalService.get('activite/nombreActivitesEncours').subscribe({
      next: (count) => (this.nombreActiviteEncours = count),
      error: (err) => console.log(err)
    });
  }

  getNombreActiviteEnAttente() {
    this.globalService.get('activite/nombreActivitesEnAttente').subscribe({
      next: (count) => (this.nombreActiviteEnAttente = count),
      error: (err) => console.log(err)
    });
  }

  getNombreActiviteTerminer() {
    this.globalService.get('activite/nombreActivitesTerminer').subscribe({
      next: (count) => (this.nombreActiviteTerminer = count),
      error: (err) => console.log(err)
    });
  }

  private loadDashboardData(): void {
    forkJoin({
      activities: this.globalService.get('activite').pipe(catchError(() => of([]))),
      participants: this.globalService.get('participant').pipe(catchError(() => of([]))),
      entites: this.globalService.get('entite').pipe(catchError(() => of([]))),
      blacklist: this.globalService.get('blacklist').pipe(catchError(() => of([])))
    }).subscribe(({ activities, participants, entites, blacklist }: any) => {
      const rawActivities: Activity[] = Array.isArray(activities) ? activities : [];
      const allParticipants = Array.isArray(participants) ? participants : [];
      const rawEntites: Entite[] = Array.isArray(entites) ? entites : [];
      const entiteList = this.filterEntitesByScope(rawEntites);
      this.entiteById = new Map(
        entiteList.filter((e) => e.id != null).map((e) => [e.id as number, e])
      );

      this.entiteIdToSlot = new Map();
      for (const e of entiteList) {
        if (e.id == null) {
          continue;
        }
        const slot = this.matchEntitySlotFromNom(e.nom);
        if (slot >= 0) {
          this.entiteIdToSlot.set(e.id, slot);
        }
      }
      const allowedEntiteIds = new Set<number>(
        entiteList.filter((e) => e.id != null).map((e) => e.id as number)
      );
      this.allActivities = rawActivities.filter((a) => this.isActivityAllowedByScope(a, allowedEntiteIds));

      const blacklistedEmails = new Set(
        (Array.isArray(blacklist) ? blacklist : [])
          .map((b: any) => String(b?.email || '').toLowerCase())
          .filter(Boolean)
      );

      this.safeParticipants = allParticipants.filter(
        (p) => !blacklistedEmails.has(String(p.email || '').toLowerCase())
      );

      this.buildStatusChart();
      this.buildEntityChart();

      this.structureOptionsCourrier = entiteList
        .filter((e) => String(e.type || '').toUpperCase() === 'DIRECTION' && e.id != null)
        .map((e) => ({ id: e.id as number, nom: String(e.nom || '—') }))
        .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
      this.loadCourrierDashboardBlock();
    });
  }

  private loadCourrierDashboardBlock(): void {
    if (!this.isDcireScope()) {
      this.showCourrierDashboard = false;
      return;
    }
    this.showCourrierDashboard = true;
    this.loadCourrierTotaux();
    this.loadCourrierSerie();
  }

  private loadCourrierTotaux(): void {
    if (!this.showCourrierDashboard) {
      return;
    }
    this.globalService
      .getCourrierDashboardTotaux(this.selectedCourrierStructureId)
      .subscribe({
        next: (t: Record<string, number>) => {
          this.courrierEmis = Number(t?.['emis']) || 0;
          this.courrierRepondu = Number(t?.['repondu']) || 0;
          this.courrierEnAttente = Number(t?.['enAttente']) || 0;
          this.courrierRecu = Number(t?.['recu']) || 0;
          this.courrierValide = Number(t?.['valide']) || 0;
          this.buildCourrierPieChart();
        },
        error: () => {
          this.courrierEmis = 0;
          this.courrierRepondu = 0;
          this.courrierEnAttente = 0;
          this.courrierRecu = 0;
          this.courrierValide = 0;
        }
      });
  }

  private loadCourrierSerie(): void {
    if (!this.showCourrierDashboard) {
      return;
    }
    this.globalService
      .getCourrierDashboardSerie(this.selectedCourrierPeriod, this.selectedCourrierStructureId)
      .subscribe({
        next: (r: any) => {
          this.lastCourrierSerieLoadError = null;
          this.buildCourrierLineChart(r);
        },
        error: (err: any) => {
          const msg = String(err?.error?.message || err?.message || '').trim();
          this.lastCourrierSerieLoadError = msg || 'Erreur de chargement de la série.';
          this.buildCourrierLineChart({ buckets: [] });
        }
      });
  }

  private initCourrierCharts(): void {
    this.courrierPieOptions = {
      series: [0, 0, 0, 0, 0],
      chart: { type: 'donut', height: 320, toolbar: { show: false } },
      labels: [...MainComponent.COURRIER_CHART_LABELS],
      colors: [...MainComponent.COURRIER_COLORS],
      legend: { position: 'bottom', fontSize: '13px' },
      plotOptions: { pie: { donut: { size: '58%' } } },
      dataLabels: { enabled: true },
      stroke: { width: 1, colors: ['#fff'] }
    };
    this.courrierLineOptions = {
      series: MainComponent.COURRIER_CHART_LABELS.map((name) => ({ name, data: [] })),
      chart: { type: 'area', height: 340, toolbar: { show: false }, zoom: { enabled: false } },
      xaxis: { categories: [] },
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
      colors: [...MainComponent.COURRIER_COLORS],
      dataLabels: { enabled: false },
      legend: { position: 'top', horizontalAlign: 'right', fontSize: '13px' },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 3 },
      yaxis: { min: 0, decimalsInFloat: 0, title: { text: 'Nombre de courriers' } },
      markers: { size: 4, strokeWidth: 2, hover: { size: 6 } }
    };
  }

  private buildCourrierPieChart(): void {
    const s = [
      this.courrierEmis,
      this.courrierRepondu,
      this.courrierEnAttente,
      this.courrierRecu,
      this.courrierValide
    ];
    this.courrierPieOptions = {
      ...this.courrierPieOptions,
      series: s,
      tooltip: {
        y: {
          formatter: (val: number) => `${val} courrier(s)`
        }
      }
    };
  }

  /** Libellés axe X si l’API ne renvoie pas de buckets (erreur réseau / réponse vide). */

  /** Index du créneau (colonne) : indices Apex, puis position souris sur la grille. */
  private resolveCourrierApexDataPointIndex(opts: any): number {
    const nb = this.courrierLineBuckets.length;
    const g = opts?.w?.globals;
    const candidates = [opts?.dataPointIndex, opts?.j, g?.capturedDataPointIndex];
    for (const raw of candidates) {
      if (raw === undefined || raw === null || raw === '') {
        continue;
      }
      const n = Number(raw);
      if (Number.isInteger(n) && n >= 0) {
        return nb > 0 ? Math.min(nb - 1, n) : n;
      }
    }
    return this.inferCourrierBucketIndexFromHover(opts);
  }

  /** Quand Apex ne fournit pas dataPointIndex, déduit le bucket depuis la souris (grille). */
  private inferCourrierBucketIndexFromHover(opts: any): number {
    const w = opts?.w?.globals;
    const nBuckets = this.courrierLineBuckets.length;
    if (!w || nBuckets <= 0) {
      return -1;
    }
    const clientX = w.clientX;
    const gridW = w.gridWidth;
    if (clientX == null || gridW == null || !(gridW > 0)) {
      return -1;
    }
    const elGrid = w.dom?.elGrid as HTMLElement | undefined;
    if (!elGrid?.getBoundingClientRect) {
      return -1;
    }
    const pad = Number(w.barPadForNumericAxis) || 0;
    const bound = elGrid.getBoundingClientRect();
    const hoverX = clientX - bound.left - pad;
    if (hoverX < 0 || hoverX > gridW) {
      return -1;
    }
    const slotW = gridW / nBuckets;
    const j = Math.min(nBuckets - 1, Math.max(0, Math.floor(hoverX / slotW)));
    return j;
  }

  /** Extrait la clé de catégorie renvoyée par l’API (camelCase, snake_case ou wrapper JSON). */
  private categorieCleFromDetail(d: CourrierDashboardDetailRow | Record<string, unknown>): string {
    const o = d as Record<string, unknown>;
    const raw = o['categorie'] ?? o['Categorie'];
    if (raw == null) {
      return '';
    }
    if (typeof raw === 'object' && raw !== null && 'name' in raw) {
      return String((raw as { name: string }).name ?? '').trim();
    }
    return String(raw).trim();
  }

  private detailMatchesCourrierSeries(
    d: CourrierDashboardDetailRow | Record<string, unknown>,
    key: string,
    libelleAttendu: string
  ): boolean {
    const cat = this.categorieCleFromDetail(d);
    if (cat && (cat === key || cat.toLowerCase() === key.toLowerCase())) {
      return true;
    }
    const snake = cat.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
    if (snake && (snake === key.toLowerCase() || snake.replace(/_/g, '') === key.toLowerCase())) {
      return true;
    }
    const lib = String((d as CourrierDashboardDetailRow).libelle ?? '').trim();
    if (lib && libelleAttendu && lib === libelleAttendu) {
      return true;
    }
    return false;
  }

  private defaultCourrierCategories(): string[] {
    const p = this.selectedCourrierPeriod;
    if (p === 'mois') {
      const now = new Date();
      const last = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      return Array.from({ length: last }, (_, i) => String(i + 1));
    }
    if (p === 'annee') {
      return [...MainComponent.MONTH_LABELS];
    }
    return [...MainComponent.WEEKDAY_LABELS];
  }

  private buildCourrierLineChart(r: any): void {
    const rawBuckets: any[] = Array.isArray(r?.buckets) ? r.buckets : [];
    const fallbackCats = this.defaultCourrierCategories();
    const hasBuckets = rawBuckets.length > 0;
    const categories = hasBuckets ? rawBuckets.map((b) => String(b.label ?? '')) : fallbackCats;
    const keys = MainComponent.COURRIER_CAT_KEYS;
    const labels = MainComponent.COURRIER_CHART_LABELS;

    this.courrierLineBuckets = hasBuckets
      ? rawBuckets.map((b) => ({
          ...b,
          details: Array.isArray(b.details) ? b.details : []
        }))
      : [];

    const series = keys.map((key, si) => ({
      name: labels[si],
      data: hasBuckets
        ? rawBuckets.map((b) => Number(b[key]) || 0)
        : new Array(categories.length).fill(0)
    }));

    const that = this;
    this.courrierLineOptions = {
      ...this.courrierLineOptions,
      series,
      xaxis: {
        categories,
        labels: {
          style: {
            fontSize: this.selectedCourrierPeriod === 'mois' ? '10px' : '12px',
            colors: '#6b7280'
          },
          rotate: this.selectedCourrierPeriod === 'mois' ? -45 : 0,
          rotateAlways: this.selectedCourrierPeriod === 'mois',
          hideOverlappingLabels: false
        }
      },
      tooltip: {
        /* Évite que le tooltip natif (shared + printLabels) masque le HTML custom quand y > 0. */
        shared: false,
        intersect: false,
        hideEmptySeries: false,
        followCursor: false,
        x: { show: false },
        custom: (opts: any) => {
          const si = Number(opts?.seriesIndex);
          if (!Number.isInteger(si) || si < 0 || si >= keys.length) {
            return '<div class="odl-tooltip"><div class="odl-tooltip-list text-muted">—</div></div>';
          }
          const catLabel = labels[si] ?? '';
          if (!hasBuckets || that.courrierLineBuckets.length === 0) {
            const errMsg = that.lastCourrierSerieLoadError;
            const hint = errMsg
              ? `Chargement impossible : ${that.escapeHtml(errMsg)}`
              : 'Aucune donnée pour cette période (dates de réception manquantes ou hors période).';
            return `<div class="odl-tooltip"><div class="odl-tooltip-head"><strong>${that.escapeHtml(catLabel)}</strong></div><div class="odl-tooltip-list text-muted">${hint}</div></div>`;
          }
          const j = that.resolveCourrierApexDataPointIndex(opts);
          if (j < 0 || j >= that.courrierLineBuckets.length) {
            return `<div class="odl-tooltip"><div class="odl-tooltip-head"><strong>${that.escapeHtml(catLabel)}</strong></div><div class="odl-tooltip-list text-muted">Survolez un créneau du graphique (axe des dates).</div></div>`;
          }
          const key = keys[si];
          const b = that.courrierLineBuckets[j];
          const details = Array.isArray(b?.details) ? b.details : [];
          let rows = details.filter((d: CourrierDashboardDetailRow) =>
            that.detailMatchesCourrierSeries(d, key, catLabel)
          );
          const countBucket = Number(b?.[key]) || 0;
          const ySerie = opts.w?.globals?.series?.[si]?.[j];
          const countChart = typeof ySerie === 'number' && !Number.isNaN(ySerie) ? ySerie : countBucket;
          if (rows.length === 0 && countChart > 0 && details.length > 0) {
            rows = details.filter((d: CourrierDashboardDetailRow) =>
              that.categorieCleFromDetail(d) === key || String(d.libelle ?? '').trim() === catLabel
            );
          }
          const plageRaw =
            b && String(b.debut || '').trim() && String(b.fin || '').trim()
              ? `${that.escapeHtml(String(b.debut))} → ${that.escapeHtml(String(b.fin))}`
              : '';
          const headPlage = plageRaw ? ` · ${plageRaw}` : '';
          let lines: string;
          if (rows.length > 0) {
            lines = rows
              .map(
                (row) =>
                  `<div class="odl-tooltip-row"><strong>${that.escapeHtml(row.structure)}</strong> · ${that.escapeHtml(row.libelle)} · <span class="text-muted">${that.escapeHtml(row.date)}</span></div>`
              )
              .join('');
          } else if (countChart > 0) {
            lines = `<div class="odl-tooltip-row text-muted">${countChart} courrier(s) « ${that.escapeHtml(catLabel)} » sur ce créneau.</div>`;
          } else {
            lines = `<div class="odl-tooltip-row text-muted">Aucun courrier pour « ${that.escapeHtml(catLabel)} » sur ce créneau.</div>`;
          }
          return `<div class="odl-tooltip">
            <div class="odl-tooltip-head"><strong>${that.escapeHtml(catLabel)}</strong>${headPlage}</div>
            <div class="odl-tooltip-list">${lines}</div>
          </div>`;
        }
      }
    };
  }

  private initEmptyCharts(): void {
    this.statusChartOptions = {
      series: [0, 0, 0],
      chart: {
        type: 'pie',
        height: 320,
        toolbar: { show: false },
        zoom: { enabled: false },
        pan: { enabled: false }
      },
      labels: ['En cours', 'Terminées', 'En attente'],
      colors: ['#1E88E5', '#14B8A6', '#F5B427'],
      plotOptions: {
        pie: {
          offsetY: 6,
          dataLabels: { offset: 20 }
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        labels: { colors: '#1f2937' },
        markers: { width: 10, height: 10, radius: 12 }
      },
      dataLabels: {
        enabled: true,
        formatter: (value: number, opts: any) => {
          const label = opts?.w?.globals?.labels?.[opts.seriesIndex] ?? '';
          return `${label.toUpperCase()} ${Math.round(value)}%`;
        },
        style: { fontSize: '14px', fontWeight: '500' }
      },
      stroke: { width: 1, colors: ['#ffffff'] }
    };

    const xLen = 7;
    this.entityChartOptions = {
      series: this.entitySlots.map((s) => ({ name: s.labelShort, data: new Array(xLen).fill(0) })),
      chart: {
        type: 'area',
        height: 320,
        toolbar: { show: false },
        zoom: { enabled: false },
        pan: { enabled: false }
      },
      xaxis: { categories: MainComponent.WEEKDAY_LABELS },
      yaxis: { min: 0, title: { text: "Nombre d'inscrits" } },
      stroke: { curve: 'smooth', width: 2 },
      fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
      colors: ['#3B82F6', '#14B8A6', '#F59E0B', '#8B5CF6'],
      dataLabels: { enabled: false },
      legend: { position: 'top', horizontalAlign: 'right', fontSize: '13px' },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 3 },
      markers: { size: 4, strokeWidth: 2, hover: { size: 6 } }
    };
  }

  private buildStatusChart(): void {
    const inProgress = this.allActivities.filter((a) => this.resolveStatus(a) === 'encours').length;
    const done = this.allActivities.filter((a) => this.resolveStatus(a) === 'terminee').length;
    const waiting = this.allActivities.filter((a) => this.resolveStatus(a) === 'attente').length;

    this.statusChartOptions = {
      ...this.statusChartOptions,
      series: [inProgress, done, waiting],
      tooltip: {
        y: {
          formatter: (value: number) => `${value} activité(s)`
        }
      }
    };
  }

  private buildEntityChart(): void {
    const { categories, activityInBucket } = this.buildTimeBuckets(this.selectedPeriod);
    const nEnt = this.entitySlots.length;
    const nX = categories.length;

    this.cellStats = Array.from({ length: nEnt }, (_, ei) =>
      Array.from({ length: nX }, (_, xi) => this.emptyStat(ei, categories[xi]))
    );

    for (let ei = 0; ei < nEnt; ei++) {
      for (let xi = 0; xi < nX; xi++) {
        this.cellStats[ei][xi] = this.aggregateBucket(ei, activityInBucket[xi], categories[xi]);
      }
    }

    const series = this.entitySlots.map((slot, ei) => ({
      name: slot.labelShort,
      data: categories.map((_, xi) => this.cellStats[ei][xi].total)
    }));

    const that = this;
    this.entityChartOptions = {
      series,
      chart: {
        type: 'area',
        height: 320,
        toolbar: { show: false },
        zoom: { enabled: false },
        pan: { enabled: false }
      },
      xaxis: {
        categories,
        labels: {
          style: { fontSize: this.selectedPeriod === 'mois' ? '10px' : '12px', colors: '#6b7280' },
          rotate: this.selectedPeriod === 'mois' ? -45 : 0,
          rotateAlways: this.selectedPeriod === 'mois',
          hideOverlappingLabels: false
        }
      },
      yaxis: {
        min: 0,
        tickAmount: undefined,
        decimalsInFloat: 0,
        title: { text: "Nombre d'inscrits", style: { color: '#6b7280', fontSize: '12px' } },
        labels: { style: { colors: '#6b7280' } }
      },
      stroke: { curve: 'smooth', width: 2 },
      fill: {
        type: 'gradient',
        gradient: { opacityFrom: 0.4, opacityTo: 0.06 }
      },
      colors: ['#3B82F6', '#14B8A6', '#F59E0B', '#8B5CF6'],
      dataLabels: { enabled: false },
      legend: { position: 'top', horizontalAlign: 'right', fontSize: '13px' },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 3 },
      markers: {
        size: 4,
        strokeWidth: 2,
        strokeColors: '#fff',
        hover: { size: 6 }
      },
      tooltip: {
        custom: ({
          seriesIndex,
          dataPointIndex
        }: {
          seriesIndex: number;
          dataPointIndex: number;
        }) => {
          const stat = that.cellStats[seriesIndex]?.[dataPointIndex];
          if (!stat) {
            return '';
          }
          const lines =
            stat.breakdown.length > 0
              ? stat.breakdown
                  .map(
                    (row) =>
                      `<div class="odl-tooltip-row"><span class="odl-tooltip-titre">${that.escapeHtml(row.titre)}</span> — H: ${row.hommes}, F: ${row.femmes}, Total: ${row.total}</div>`
                  )
                  .join('')
              : '<div class="odl-tooltip-row">Aucune activité sur ce créneau pour cette entité.</div>';
          return `<div class="odl-tooltip">
            <div class="odl-tooltip-head"><strong>${stat.entiteFull}</strong> · ${stat.bucketLabel}</div>
            <div class="odl-tooltip-sub">Total inscrits (entité) : ${stat.total} — H: ${stat.hommes}, F: ${stat.femmes}</div>
            <div class="odl-tooltip-list">${lines}</div>
          </div>`;
        }
      }
    };
  }

  private buildTimeBuckets(period: PeriodKey): {
    categories: string[];
    activityInBucket: ((a: Activity) => boolean)[];
  } {
    const now = new Date();

    if (period === 'semaine') {
      const start = this.startOfWeekMonday(now);
      const activityInBucket: ((a: Activity) => boolean)[] = [];
      for (let i = 0; i < 7; i++) {
        const day = new Date(start);
        day.setDate(start.getDate() + i);
        activityInBucket.push((a) => this.activityOverlapsCalendarDay(a, day));
      }
      return { categories: [...MainComponent.WEEKDAY_LABELS], activityInBucket };
    }

    if (period === 'mois') {
      const y = now.getFullYear();
      const m = now.getMonth();
      const lastDay = new Date(y, m + 1, 0).getDate();
      const categories: string[] = [];
      const activityInBucket: ((a: Activity) => boolean)[] = [];
      for (let day = 1; day <= lastDay; day++) {
        categories.push(String(day));
        const d = new Date(y, m, day);
        activityInBucket.push((a) => this.activityOverlapsCalendarDay(a, d));
      }
      return { categories, activityInBucket };
    }

    const y = now.getFullYear();
    const categories = [...MainComponent.MONTH_LABELS];
    const activityInBucket: ((a: Activity) => boolean)[] = [];
    for (let month = 0; month < 12; month++) {
      activityInBucket.push((a) => this.activityOverlapsMonth(a, y, month));
    }
    return { categories, activityInBucket };
  }

  private startOfWeekMonday(ref: Date): Date {
    const d = new Date(ref);
    d.setHours(0, 0, 0, 0);
    const day = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - day);
    return d;
  }

  /** Plage temporelle de l’activité (début → fin ; si pas de début, seule la date de fin). */
  private activityDateRange(a: Activity): { start: Date; end: Date } | null {
    const startRaw = a.dateDebut ?? a.dateFin;
    if (!startRaw) {
      return null;
    }
    const start = new Date(startRaw);
    if (Number.isNaN(start.getTime())) {
      return null;
    }
    const endRaw = a.dateFin ? new Date(a.dateFin) : new Date(start);
    if (Number.isNaN(endRaw.getTime())) {
      return null;
    }
    const s = new Date(start);
    s.setHours(0, 0, 0, 0);
    const e = new Date(endRaw);
    e.setHours(23, 59, 59, 999);
    if (e < s) {
      return { start: s, end: s };
    }
    return { start: s, end: e };
  }

  /** L’activité a au moins un jour en commun avec le jour calendaire `day`. */
  private activityOverlapsCalendarDay(a: Activity, day: Date): boolean {
    const r = this.activityDateRange(a);
    if (!r) {
      return false;
    }
    const d0 = new Date(day);
    d0.setHours(0, 0, 0, 0);
    const d1 = new Date(day);
    d1.setHours(23, 59, 59, 999);
    return r.start <= d1 && r.end >= d0;
  }

  private activityOverlapsMonth(a: Activity, year: number, month: number): boolean {
    const r = this.activityDateRange(a);
    if (!r) {
      return false;
    }
    const m0 = new Date(year, month, 1, 0, 0, 0, 0);
    const m1 = new Date(year, month + 1, 0, 23, 59, 59, 999);
    return r.start <= m1 && r.end >= m0;
  }

  private emptyStat(entityIndex: number, bucketLabel: string): CellStat {
    const slot = this.entitySlots[entityIndex] ?? this.entitySlots[0];
    return {
      entiteShort: slot.labelShort,
      entiteFull: slot.labelFull,
      bucketLabel,
      total: 0,
      hommes: 0,
      femmes: 0,
      titres: [],
      breakdown: []
    };
  }

  private aggregateBucket(
    entityIndex: number,
    activityMatchesBucket: (a: Activity) => boolean,
    bucketLabel: string
  ): CellStat {
    const slot = this.entitySlots[entityIndex];

    const actsInBucket = this.allActivities.filter(
      (a) => this.activityEntityIndex(a) === entityIndex && activityMatchesBucket(a)
    );

    const activityIds = new Set(
      actsInBucket.map((a) => a.id).filter((id): id is number => id != null)
    );

    const participantsForActs = this.safeParticipants.filter((p) => {
      const act = this.resolveActivityForParticipant(p);
      const pid = act?.id;
      return pid != null && activityIds.has(pid);
    });

    const hommes = participantsForActs.filter(
      (p) => this.normalizeGenre(p.genre) === 'HOMME'
    ).length;
    const femmes = participantsForActs.filter(
      (p) => this.normalizeGenre(p.genre) === 'FEMME'
    ).length;

    const breakdown: ActivityBreakdownRow[] = [];
    for (const act of actsInBucket) {
      if (act.id == null) {
        continue;
      }
      const titre = String(act.titre || act.nom || 'Activité sans titre');
      const parts = participantsForActs.filter((p) => this.resolveActivityForParticipant(p)?.id === act.id);
      const h = parts.filter((p) => this.normalizeGenre(p.genre) === 'HOMME').length;
      const f = parts.filter((p) => this.normalizeGenre(p.genre) === 'FEMME').length;
      breakdown.push({ titre, hommes: h, femmes: f, total: parts.length });
    }

    breakdown.sort((a, b) => b.total - a.total);

    const titres = breakdown.map((b) => b.titre);

    return {
      entiteShort: slot.labelShort,
      entiteFull: slot.labelFull,
      bucketLabel,
      total: participantsForActs.length,
      hommes,
      femmes,
      titres,
      breakdown
    };
  }

  private activityEntityIndex(activity: Activity): number {
    const e = activity.entite as Entite | number | undefined | null;
    let entiteId: number | undefined;
    if (typeof e === 'number') {
      entiteId = e;
    } else if (e && typeof e === 'object' && e.id != null) {
      entiteId = e.id;
    }
    if (entiteId != null && this.entiteIdToSlot.has(entiteId)) {
      return this.entiteIdToSlot.get(entiteId)!;
    }
    return this.matchEntitySlotFromNom(this.resolveEntiteNom(activity));
  }

  /** Activité complète (fusion liste `activite` si l’API ne renvoie qu’un id sur le participant). */
  private resolveActivityForParticipant(p: Participant): Activity | null {
    const raw = p.activite as Activity | undefined;
    if (!raw) {
      return null;
    }
    const id = raw.id;
    if (id != null) {
      const full = this.allActivities.find((a) => a.id === id);
      if (full) {
        return { ...raw, ...full };
      }
    }
    return raw;
  }

  private resolveEntiteNom(activity: Activity): string {
    const e = activity.entite as Entite | number | undefined | null;
    if (e == null) {
      return '';
    }
    if (typeof e === 'number') {
      return this.entiteById.get(e)?.nom ?? '';
    }
    if (typeof e === 'object') {
      if (e.nom) {
        return e.nom;
      }
      if (e.id != null) {
        return this.entiteById.get(e.id)?.nom ?? '';
      }
    }
    return '';
  }

  /**
   * 0 Kalanso, 1 FabLab, 2 Orange Fab, 3 Multimedia.
   * FabLab est toujours testé avant Orange Fab (même chaîne « Orange FabLab »).
   */
  private matchEntitySlotFromNom(nom: string | undefined): number {
    const raw = String(nom || '').trim();
    if (!raw) {
      return -1;
    }
    const n = raw.replace(/\s+/g, ' ');
    const up = n.toUpperCase().replace(/\s+/g, '');

    if (/\bFAB[\s-]*LAB\b/i.test(n) || up.includes('FABLAB') || /\bFABLAB\b/i.test(n)) {
      return 1;
    }

    if (up.includes('KALANSO') || (n.toUpperCase().includes('ORANGE') && n.toUpperCase().includes('DIGITAL'))) {
      return 0;
    }

    if (up.includes('MULTIMEDIA') || n.toUpperCase().includes('MULTIMÉDIA')) {
      return 3;
    }

    if (/\bORANGE\s+FAB\b/i.test(n)) {
      const idx = n.toUpperCase().search(/\bORANGE\s+FAB\b/);
      if (idx >= 0) {
        const after = n.slice(idx + 'ORANGE FAB'.length).trim();
        if (!/^LAB\b/i.test(after)) {
          return 2;
        }
      }
    }

    if (/\bFAB\b/i.test(n) && !/\bFAB[\s-]*LAB\b/i.test(n) && !up.includes('FABLAB')) {
      return 2;
    }

    return -1;
  }

  /** Vue complète (toutes entités / activités) : admin, DCIRE, directeur ODC produit. */
  private isDcireScope(): boolean {
    return (
      this.currentRoles.includes('DIRECTEUR') ||
      this.currentRoles.includes('DCIRE') ||
      this.currentRoles.includes('SUPERADMIN') ||
      this.currentRoles.includes('ADMIN') ||
      this.currentRoles.includes('DIRECTEUR_ODC')
    );
  }

  private filterEntitesByScope(entites: Entite[]): Entite[] {
    if (this.isDcireScope()) {
      return entites;
    }
    return filterEntitesOdcPiliers(entites);
  }

  private isActivityAllowedByScope(activity: Activity, allowedEntiteIds: Set<number>): boolean {
    if (this.isDcireScope()) {
      return true;
    }
    const e = activity.entite as Entite | number | undefined | null;
    if (typeof e === 'number') {
      return allowedEntiteIds.has(e);
    }
    if (e && typeof e === 'object') {
      if (e.id != null && allowedEntiteIds.has(e.id)) {
        return true;
      }
      return isOdcPillarEntiteName(e.nom);
    }
    return false;
  }

  private resolveStatus(activity: Activity): 'encours' | 'terminee' | 'attente' {
    const status = String(activity.statut || '')
      .trim()
      .toUpperCase();
    if (status.includes('VALIDATION_DIRECTEUR') || status.includes('REJET')) {
      return 'attente';
    }
    if (status.includes('COURS')) {
      return 'encours';
    }
    if (status.includes('TERM')) {
      return 'terminee';
    }
    return 'attente';
  }

  private normalizeGenre(genre: string | undefined): string {
    const g = String(genre || '')
      .trim()
      .toUpperCase();
    if (g === 'H' || g.startsWith('HOM')) {
      return 'HOMME';
    }
    if (g === 'F' || g.startsWith('FEM')) {
      return 'FEMME';
    }
    return g;
  }
}
