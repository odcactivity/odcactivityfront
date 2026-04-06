import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [RouterLink, NgApexchartsModule]
})
export class MainComponent implements OnInit {
  public statusChartOptions: any;
  public entityChartOptions: any;

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
    this.loadDashboardData();
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
    });
  }

  private initEmptyCharts(): void {
    this.statusChartOptions = {
      series: [0, 0, 0],
      chart: { type: 'pie', height: 360, toolbar: { show: false } },
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
      chart: { type: 'area', height: 360, toolbar: { show: false } },
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
        height: 380,
        toolbar: { show: false }
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

  private normalizeName(value: string | undefined): string {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  private isOdcEntiteName(nom: string | undefined): boolean {
    const n = this.normalizeName(nom);
    if (!n) {
      return false;
    }
    return (
      n.includes('ORANGE DIGITAL KALANSO') ||
      n.includes('ODK') ||
      n.includes('ORANGE DIGITAL MULTIMEDIA') ||
      n.includes('MULTIMEDIA') ||
      n.includes('ORANGE FABLAB') ||
      n.includes('FABLAB') ||
      n.includes('ORANGE FAB')
    );
  }

  private filterEntitesByScope(entites: Entite[]): Entite[] {
    if (this.isDcireScope()) {
      return entites;
    }
    return entites.filter((e) => this.isOdcEntiteName(e?.nom));
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
      return this.isOdcEntiteName(e.nom);
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
