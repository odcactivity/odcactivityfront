import {
  Page404Component
} from "./chunk-5275BRXF.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-VFVDFCIY.js";
import {
  GlobalService
} from "./chunk-WEK6BSLY.js";
import {
  RouterLink
} from "./chunk-ODGAOHOC.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EQOE5FII.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/dashboard/main/main.component.ts
var MainComponent = class _MainComponent {
  static {
    this.WEEKDAY_LABELS = ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."];
  }
  static {
    this.MONTH_LABELS = [
      "janv.",
      "f\xE9vr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juil.",
      "ao\xFBt",
      "sept.",
      "oct.",
      "nov.",
      "d\xE9c."
    ];
  }
  constructor(globalService) {
    this.globalService = globalService;
    this.nombreActivite = 0;
    this.nombreActiviteEncours = 0;
    this.nombreActiviteEnAttente = 0;
    this.nombreActiviteTerminer = 0;
    this.selectedPeriod = "semaine";
    this.entitySlots = [
      { labelShort: "Kalanso", labelFull: "Orange Digital Kalanso" },
      { labelShort: "FabLab", labelFull: "Orange FabLab" },
      { labelShort: "Orange Fab", labelFull: "Orange Fab" },
      { labelShort: "Multimedia", labelFull: "Multimedia" }
    ];
    this.cellStats = [];
    this.allActivities = [];
    this.safeParticipants = [];
    this.entiteById = /* @__PURE__ */ new Map();
    this.entiteIdToSlot = /* @__PURE__ */ new Map();
  }
  ngOnInit() {
    this.getNombreUitlisateur();
    this.getNombreActivite();
    this.getNombreActiviteEncours();
    this.getNombreActiviteEnAttente();
    this.getNombreActiviteTerminer();
    this.initEmptyCharts();
    this.loadDashboardData();
  }
  setPeriod(period) {
    this.selectedPeriod = period;
    this.buildEntityChart();
  }
  escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  getNombreUitlisateur() {
    this.globalService.get("utilisateur/nombre").subscribe({
      next: (count) => this.nombreUtilisateurs = count,
      error: (err) => console.log(err)
    });
  }
  getNombreActivite() {
    this.globalService.get("activite/nombre").subscribe({
      next: (count) => this.nombreActivite = count,
      error: (err) => console.log(err)
    });
  }
  getNombreActiviteEncours() {
    this.globalService.get("activite/nombreActivitesEncours").subscribe({
      next: (count) => this.nombreActiviteEncours = count,
      error: (err) => console.log(err)
    });
  }
  getNombreActiviteEnAttente() {
    this.globalService.get("activite/nombreActivitesEnAttente").subscribe({
      next: (count) => this.nombreActiviteEnAttente = count,
      error: (err) => console.log(err)
    });
  }
  getNombreActiviteTerminer() {
    this.globalService.get("activite/nombreActivitesTerminer").subscribe({
      next: (count) => this.nombreActiviteTerminer = count,
      error: (err) => console.log(err)
    });
  }
  loadDashboardData() {
    forkJoin({
      activities: this.globalService.get("activite").pipe(catchError(() => of([]))),
      participants: this.globalService.get("participant").pipe(catchError(() => of([]))),
      entites: this.globalService.get("entite").pipe(catchError(() => of([]))),
      blacklist: this.globalService.get("blacklist").pipe(catchError(() => of([])))
    }).subscribe(({ activities, participants, entites, blacklist }) => {
      this.allActivities = Array.isArray(activities) ? activities : [];
      const allParticipants = Array.isArray(participants) ? participants : [];
      const entiteList = Array.isArray(entites) ? entites : [];
      this.entiteById = new Map(entiteList.filter((e) => e.id != null).map((e) => [e.id, e]));
      this.entiteIdToSlot = /* @__PURE__ */ new Map();
      for (const e of entiteList) {
        if (e.id == null) {
          continue;
        }
        const slot = this.matchEntitySlotFromNom(e.nom);
        if (slot >= 0) {
          this.entiteIdToSlot.set(e.id, slot);
        }
      }
      const blacklistedEmails = new Set((Array.isArray(blacklist) ? blacklist : []).map((b) => String(b?.email || "").toLowerCase()).filter(Boolean));
      this.safeParticipants = allParticipants.filter((p) => !blacklistedEmails.has(String(p.email || "").toLowerCase()));
      this.buildStatusChart();
      this.buildEntityChart();
    });
  }
  initEmptyCharts() {
    this.statusChartOptions = {
      series: [0, 0, 0],
      chart: { type: "pie", height: 360, toolbar: { show: false } },
      labels: ["En cours", "Termin\xE9es", "En attente"],
      colors: ["#1E88E5", "#14B8A6", "#F5B427"],
      plotOptions: {
        pie: {
          offsetY: 6,
          dataLabels: { offset: 20 }
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
        labels: { colors: "#1f2937" },
        markers: { width: 10, height: 10, radius: 12 }
      },
      dataLabels: {
        enabled: true,
        formatter: (value, opts) => {
          const label = opts?.w?.globals?.labels?.[opts.seriesIndex] ?? "";
          return `${label.toUpperCase()} ${Math.round(value)}%`;
        },
        style: { fontSize: "14px", fontWeight: "500" }
      },
      stroke: { width: 1, colors: ["#ffffff"] }
    };
    const xLen = 7;
    this.entityChartOptions = {
      series: this.entitySlots.map((s) => ({ name: s.labelShort, data: new Array(xLen).fill(0) })),
      chart: { type: "area", height: 360, toolbar: { show: false } },
      xaxis: { categories: _MainComponent.WEEKDAY_LABELS },
      yaxis: { min: 0, title: { text: "Nombre d'inscrits" } },
      stroke: { curve: "smooth", width: 2 },
      fill: { type: "gradient", gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
      colors: ["#3B82F6", "#14B8A6", "#F59E0B", "#8B5CF6"],
      dataLabels: { enabled: false },
      legend: { position: "top", horizontalAlign: "right", fontSize: "13px" },
      grid: { borderColor: "#e5e7eb", strokeDashArray: 3 },
      markers: { size: 4, strokeWidth: 2, hover: { size: 6 } }
    };
  }
  buildStatusChart() {
    const inProgress = this.allActivities.filter((a) => this.resolveStatus(a) === "encours").length;
    const done = this.allActivities.filter((a) => this.resolveStatus(a) === "terminee").length;
    const waiting = this.allActivities.filter((a) => this.resolveStatus(a) === "attente").length;
    this.statusChartOptions = __spreadProps(__spreadValues({}, this.statusChartOptions), {
      series: [inProgress, done, waiting],
      tooltip: {
        y: {
          formatter: (value) => `${value} activit\xE9(s)`
        }
      }
    });
  }
  buildEntityChart() {
    const { categories, activityInBucket } = this.buildTimeBuckets(this.selectedPeriod);
    const nEnt = this.entitySlots.length;
    const nX = categories.length;
    this.cellStats = Array.from({ length: nEnt }, (_, ei) => Array.from({ length: nX }, (_2, xi) => this.emptyStat(ei, categories[xi])));
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
        type: "area",
        height: 380,
        toolbar: { show: false }
      },
      xaxis: {
        categories,
        labels: {
          style: { fontSize: this.selectedPeriod === "mois" ? "10px" : "12px", colors: "#6b7280" },
          rotate: this.selectedPeriod === "mois" ? -45 : 0,
          rotateAlways: this.selectedPeriod === "mois",
          hideOverlappingLabels: false
        }
      },
      yaxis: {
        min: 0,
        tickAmount: void 0,
        decimalsInFloat: 0,
        title: { text: "Nombre d'inscrits", style: { color: "#6b7280", fontSize: "12px" } },
        labels: { style: { colors: "#6b7280" } }
      },
      stroke: { curve: "smooth", width: 2 },
      fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.4, opacityTo: 0.06 }
      },
      colors: ["#3B82F6", "#14B8A6", "#F59E0B", "#8B5CF6"],
      dataLabels: { enabled: false },
      legend: { position: "top", horizontalAlign: "right", fontSize: "13px" },
      grid: { borderColor: "#e5e7eb", strokeDashArray: 3 },
      markers: {
        size: 4,
        strokeWidth: 2,
        strokeColors: "#fff",
        hover: { size: 6 }
      },
      tooltip: {
        custom: ({ seriesIndex, dataPointIndex }) => {
          const stat = that.cellStats[seriesIndex]?.[dataPointIndex];
          if (!stat) {
            return "";
          }
          const lines = stat.breakdown.length > 0 ? stat.breakdown.map((row) => `<div class="odl-tooltip-row"><span class="odl-tooltip-titre">${that.escapeHtml(row.titre)}</span> \u2014 H: ${row.hommes}, F: ${row.femmes}, Total: ${row.total}</div>`).join("") : '<div class="odl-tooltip-row">Aucune activit\xE9 sur ce cr\xE9neau pour cette entit\xE9.</div>';
          return `<div class="odl-tooltip">
            <div class="odl-tooltip-head"><strong>${stat.entiteFull}</strong> \xB7 ${stat.bucketLabel}</div>
            <div class="odl-tooltip-sub">Total inscrits (entit\xE9) : ${stat.total} \u2014 H: ${stat.hommes}, F: ${stat.femmes}</div>
            <div class="odl-tooltip-list">${lines}</div>
          </div>`;
        }
      }
    };
  }
  buildTimeBuckets(period) {
    const now = /* @__PURE__ */ new Date();
    if (period === "semaine") {
      const start = this.startOfWeekMonday(now);
      const activityInBucket2 = [];
      for (let i = 0; i < 7; i++) {
        const day = new Date(start);
        day.setDate(start.getDate() + i);
        activityInBucket2.push((a) => this.activityOverlapsCalendarDay(a, day));
      }
      return { categories: [..._MainComponent.WEEKDAY_LABELS], activityInBucket: activityInBucket2 };
    }
    if (period === "mois") {
      const y2 = now.getFullYear();
      const m = now.getMonth();
      const lastDay = new Date(y2, m + 1, 0).getDate();
      const categories2 = [];
      const activityInBucket2 = [];
      for (let day = 1; day <= lastDay; day++) {
        categories2.push(String(day));
        const d = new Date(y2, m, day);
        activityInBucket2.push((a) => this.activityOverlapsCalendarDay(a, d));
      }
      return { categories: categories2, activityInBucket: activityInBucket2 };
    }
    const y = now.getFullYear();
    const categories = [..._MainComponent.MONTH_LABELS];
    const activityInBucket = [];
    for (let month = 0; month < 12; month++) {
      activityInBucket.push((a) => this.activityOverlapsMonth(a, y, month));
    }
    return { categories, activityInBucket };
  }
  startOfWeekMonday(ref) {
    const d = new Date(ref);
    d.setHours(0, 0, 0, 0);
    const day = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - day);
    return d;
  }
  /** Plage temporelle de l’activité (début → fin ; si pas de début, seule la date de fin). */
  activityDateRange(a) {
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
  activityOverlapsCalendarDay(a, day) {
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
  activityOverlapsMonth(a, year, month) {
    const r = this.activityDateRange(a);
    if (!r) {
      return false;
    }
    const m0 = new Date(year, month, 1, 0, 0, 0, 0);
    const m1 = new Date(year, month + 1, 0, 23, 59, 59, 999);
    return r.start <= m1 && r.end >= m0;
  }
  emptyStat(entityIndex, bucketLabel) {
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
  aggregateBucket(entityIndex, activityMatchesBucket, bucketLabel) {
    const slot = this.entitySlots[entityIndex];
    const actsInBucket = this.allActivities.filter((a) => this.activityEntityIndex(a) === entityIndex && activityMatchesBucket(a));
    const activityIds = new Set(actsInBucket.map((a) => a.id).filter((id) => id != null));
    const participantsForActs = this.safeParticipants.filter((p) => {
      const act = this.resolveActivityForParticipant(p);
      const pid = act?.id;
      return pid != null && activityIds.has(pid);
    });
    const hommes = participantsForActs.filter((p) => this.normalizeGenre(p.genre) === "HOMME").length;
    const femmes = participantsForActs.filter((p) => this.normalizeGenre(p.genre) === "FEMME").length;
    const breakdown = [];
    for (const act of actsInBucket) {
      if (act.id == null) {
        continue;
      }
      const titre = String(act.titre || act.nom || "Activit\xE9 sans titre");
      const parts = participantsForActs.filter((p) => this.resolveActivityForParticipant(p)?.id === act.id);
      const h = parts.filter((p) => this.normalizeGenre(p.genre) === "HOMME").length;
      const f = parts.filter((p) => this.normalizeGenre(p.genre) === "FEMME").length;
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
  activityEntityIndex(activity) {
    const e = activity.entite;
    let entiteId;
    if (typeof e === "number") {
      entiteId = e;
    } else if (e && typeof e === "object" && e.id != null) {
      entiteId = e.id;
    }
    if (entiteId != null && this.entiteIdToSlot.has(entiteId)) {
      return this.entiteIdToSlot.get(entiteId);
    }
    return this.matchEntitySlotFromNom(this.resolveEntiteNom(activity));
  }
  /** Activité complète (fusion liste `activite` si l’API ne renvoie qu’un id sur le participant). */
  resolveActivityForParticipant(p) {
    const raw = p.activite;
    if (!raw) {
      return null;
    }
    const id = raw.id;
    if (id != null) {
      const full = this.allActivities.find((a) => a.id === id);
      if (full) {
        return __spreadValues(__spreadValues({}, raw), full);
      }
    }
    return raw;
  }
  resolveEntiteNom(activity) {
    const e = activity.entite;
    if (e == null) {
      return "";
    }
    if (typeof e === "number") {
      return this.entiteById.get(e)?.nom ?? "";
    }
    if (typeof e === "object") {
      if (e.nom) {
        return e.nom;
      }
      if (e.id != null) {
        return this.entiteById.get(e.id)?.nom ?? "";
      }
    }
    return "";
  }
  /**
   * 0 Kalanso, 1 FabLab, 2 Orange Fab, 3 Multimedia.
   * FabLab est toujours testé avant Orange Fab (même chaîne « Orange FabLab »).
   */
  matchEntitySlotFromNom(nom) {
    const raw = String(nom || "").trim();
    if (!raw) {
      return -1;
    }
    const n = raw.replace(/\s+/g, " ");
    const up = n.toUpperCase().replace(/\s+/g, "");
    if (/\bFAB[\s-]*LAB\b/i.test(n) || up.includes("FABLAB") || /\bFABLAB\b/i.test(n)) {
      return 1;
    }
    if (up.includes("KALANSO") || n.toUpperCase().includes("ORANGE") && n.toUpperCase().includes("DIGITAL")) {
      return 0;
    }
    if (up.includes("MULTIMEDIA") || n.toUpperCase().includes("MULTIM\xC9DIA")) {
      return 3;
    }
    if (/\bORANGE\s+FAB\b/i.test(n)) {
      const idx = n.toUpperCase().search(/\bORANGE\s+FAB\b/);
      if (idx >= 0) {
        const after = n.slice(idx + "ORANGE FAB".length).trim();
        if (!/^LAB\b/i.test(after)) {
          return 2;
        }
      }
    }
    if (/\bFAB\b/i.test(n) && !/\bFAB[\s-]*LAB\b/i.test(n) && !up.includes("FABLAB")) {
      return 2;
    }
    return -1;
  }
  resolveStatus(activity) {
    const status = String(activity.statut || "").trim().toUpperCase();
    if (status.includes("COURS")) {
      return "encours";
    }
    if (status.includes("TERM")) {
      return "terminee";
    }
    return "attente";
  }
  normalizeGenre(genre) {
    const g = String(genre || "").trim().toUpperCase();
    if (g === "H" || g.startsWith("HOM")) {
      return "HOMME";
    }
    if (g === "F" || g.startsWith("FEM")) {
      return "FEMME";
    }
    return g;
  }
  static {
    this.\u0275fac = function MainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MainComponent)(\u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main"]], decls: 101, vars: 32, consts: [[1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home", "font-17"], [1, "section-body"], [1, "card", "mb-4", "odl-dashboard-card"], [1, "card-header"], [1, "mb-1"], [1, "odl-dashboard-subtitle", "mb-0"], [1, "card-body"], [1, "row", "g-3"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6"], [1, "odl-stat-card"], [1, "odl-stat-icon", "odl-stat-icon-primary"], [1, "fas", "fa-cogs"], [1, "odl-stat-content"], [1, "odl-stat-label"], [1, "odl-stat-value"], [1, "odl-stat-icon", "odl-stat-icon-info"], [1, "fas", "fa-play-circle"], [1, "odl-stat-icon", "odl-stat-icon-warning"], [1, "fas", "fa-clock"], [1, "odl-stat-icon", "odl-stat-icon-success"], [1, "fas", "fa-check-circle"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "odl-stat-icon", "odl-stat-icon-neutral"], [1, "fas", "fa-users"], [1, "row", "justify-content-center"], [1, "col-12", "col-xl-10"], [3, "series", "chart", "labels", "colors", "legend", "plotOptions", "dataLabels", "tooltip", "stroke"], [1, "card", "odl-dashboard-card"], [1, "odl-graph-header"], [1, "odl-period-switch"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "row"], [1, "col-12"], [3, "series", "chart", "dataLabels", "stroke", "fill", "markers", "colors", "grid", "tooltip", "legend", "yaxis", "xaxis"]], template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "ul", 1)(2, "li", 2)(3, "h5", 3);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 4)(6, "a", 5);
        \u0275\u0275element(7, "i", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 2);
        \u0275\u0275text(9, "Tableau de Bord");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h4", 10);
        \u0275\u0275text(14, "Vue d\u2019ensemble des activit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 11);
        \u0275\u0275text(16, " Suivi rapide du volume et de l\u2019\xE9tat des activit\xE9s dans ODC Activit\xE9. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
        \u0275\u0275element(22, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 18)(24, "p", 19);
        \u0275\u0275text(25, "Activit\xE9s totales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 20);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 14)(29, "div", 15)(30, "div", 21);
        \u0275\u0275element(31, "i", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 18)(33, "p", 19);
        \u0275\u0275text(34, "Activit\xE9s en cours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p", 20);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 14)(38, "div", 15)(39, "div", 23);
        \u0275\u0275element(40, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 18)(42, "p", 19);
        \u0275\u0275text(43, "Activit\xE9s en attente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p", 20);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div", 14)(47, "div", 15)(48, "div", 25);
        \u0275\u0275element(49, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 18)(51, "p", 19);
        \u0275\u0275text(52, "Activit\xE9s termin\xE9es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 20);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(55, "div", 8)(56, "div", 9)(57, "h4", 10);
        \u0275\u0275text(58, "Vue d\u2019ensemble des personnels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 11);
        \u0275\u0275text(60, " Nombre total de personnels impliqu\xE9s dans les activit\xE9s. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 12)(62, "div", 13)(63, "div", 27)(64, "div", 15)(65, "div", 28);
        \u0275\u0275element(66, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 18)(68, "p", 19);
        \u0275\u0275text(69, "Nombre de personnels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p", 20);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(72, "div", 8)(73, "div", 9)(74, "h4", 10);
        \u0275\u0275text(75, "R\xE9partition des activit\xE9s par statut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p", 11);
        \u0275\u0275text(77, " Activit\xE9s en cours, termin\xE9es et en attente. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 12)(79, "div", 30)(80, "div", 31);
        \u0275\u0275element(81, "apx-chart", 32);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(82, "div", 33)(83, "div", 9)(84, "div", 34)(85, "div")(86, "h4", 10);
        \u0275\u0275text(87, "Statistique globale des activit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "p", 11);
        \u0275\u0275text(89, " Suivez votre \xE9volution dans le temps \u2014 survolez le graphe pour le d\xE9tail par entit\xE9 et par activit\xE9. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 35)(91, "button", 36);
        \u0275\u0275listener("click", function MainComponent_Template_button_click_91_listener() {
          return ctx.setPeriod("semaine");
        });
        \u0275\u0275text(92, "Semaine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "button", 36);
        \u0275\u0275listener("click", function MainComponent_Template_button_click_93_listener() {
          return ctx.setPeriod("mois");
        });
        \u0275\u0275text(94, "Mois");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "button", 36);
        \u0275\u0275listener("click", function MainComponent_Template_button_click_95_listener() {
          return ctx.setPeriod("annee");
        });
        \u0275\u0275text(96, "Ann\xE9e");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(97, "div", 12)(98, "div", 37)(99, "div", 38);
        \u0275\u0275element(100, "apx-chart", 39);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.nombreActivite);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.nombreActiviteEncours);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.nombreActiviteEnAttente);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.nombreActiviteTerminer);
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.nombreUtilisateurs);
        \u0275\u0275advance(10);
        \u0275\u0275property("series", ctx.statusChartOptions.series)("chart", ctx.statusChartOptions.chart)("labels", ctx.statusChartOptions.labels)("colors", ctx.statusChartOptions.colors)("legend", ctx.statusChartOptions.legend)("plotOptions", ctx.statusChartOptions.plotOptions)("dataLabels", ctx.statusChartOptions.dataLabels)("tooltip", ctx.statusChartOptions.tooltip)("stroke", ctx.statusChartOptions.stroke);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.selectedPeriod === "semaine");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedPeriod === "mois");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedPeriod === "annee");
        \u0275\u0275advance(5);
        \u0275\u0275property("series", ctx.entityChartOptions.series)("chart", ctx.entityChartOptions.chart)("dataLabels", ctx.entityChartOptions.dataLabels)("stroke", ctx.entityChartOptions.stroke)("fill", ctx.entityChartOptions.fill)("markers", ctx.entityChartOptions.markers)("colors", ctx.entityChartOptions.colors)("grid", ctx.entityChartOptions.grid)("tooltip", ctx.entityChartOptions.tooltip)("legend", ctx.entityChartOptions.legend)("yaxis", ctx.entityChartOptions.yaxis)("xaxis", ctx.entityChartOptions.xaxis);
      }
    }, dependencies: [RouterLink, NgApexchartsModule, ChartComponent], styles: ["\n\n.odl-dashboard-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 2px 6px rgba(17, 24, 39, 0.04);\n}\n.odl-dashboard-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.odl-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  background-color: #fff;\n}\n.odl-stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.odl-stat-icon-primary[_ngcontent-%COMP%] {\n  background-color: rgba(255, 121, 0, 0.1);\n  color: #ff7900;\n}\n.odl-stat-icon-info[_ngcontent-%COMP%] {\n  background-color: rgba(59, 130, 246, 0.08);\n  color: #2563eb;\n}\n.odl-stat-icon-warning[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.08);\n  color: #d97706;\n}\n.odl-stat-icon-success[_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.08);\n  color: #16a34a;\n}\n.odl-stat-icon-neutral[_ngcontent-%COMP%] {\n  background-color: rgba(107, 114, 128, 0.08);\n  color: #4b5563;\n}\n.odl-stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.odl-stat-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.odl-stat-value[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #111827;\n}\n.odl-graph-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .odl-graph-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]     .odl-tooltip {\n  padding: 8px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  max-width: 360px;\n}\n[_nghost-%COMP%]     .odl-tooltip-head {\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]     .odl-tooltip-sub {\n  color: #6b7280;\n  font-size: 11px;\n  margin-bottom: 8px;\n}\n[_nghost-%COMP%]     .odl-tooltip-list {\n  border-top: 1px solid #f3f4f6;\n  padding-top: 6px;\n}\n[_nghost-%COMP%]     .odl-tooltip-row {\n  font-size: 11px;\n  margin-bottom: 4px;\n  color: #374151;\n}\n[_nghost-%COMP%]     .odl-tooltip-titre {\n  font-weight: 600;\n  color: #111827;\n}\n[_nghost-%COMP%]     .apexcharts-legend {\n  padding-top: 4px !important;\n}\n[_nghost-%COMP%]     .apexcharts-pie-label {\n  font-weight: 500 !important;\n  fill: #1f2937 !important;\n}\n[_nghost-%COMP%]     .apexcharts-xaxistooltip, \n[_nghost-%COMP%]     .apexcharts-yaxistooltip {\n  display: none !important;\n}\n/*# sourceMappingURL=main.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainComponent, [{
    type: Component,
    args: [{ selector: "app-main", imports: [RouterLink, NgApexchartsModule], template: `<section class="main-content">\r
  <ul class="breadcrumb breadcrumb-style ">\r
    <li class="breadcrumb-item">\r
      <h5 class="page-title m-b-0">Dashboard</h5>\r
    </li>\r
    <li class="breadcrumb-item bcrumb-1">\r
      <a routerLink="/dashboard/main">\r
        <i class="fas fa-home font-17"></i></a>\r
    </li>\r
    <li class="breadcrumb-item">Tableau de Bord</li>\r
  </ul>\r
  <div class="section-body">\r
\r
    <!-- Carte r\xE9cap des activit\xE9s (style ODL, regroup\xE9e) -->\r
    <div class="card mb-4 odl-dashboard-card">\r
      <div class="card-header">\r
        <h4 class="mb-1">Vue d\u2019ensemble des activit\xE9s</h4>\r
        <p class="odl-dashboard-subtitle mb-0">\r
          Suivi rapide du volume et de l\u2019\xE9tat des activit\xE9s dans ODC Activit\xE9.\r
        </p>\r
      </div>\r
      <div class="card-body">\r
        <div class="row g-3">\r
          <!-- Activit\xE9s totales -->\r
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">\r
            <div class="odl-stat-card">\r
              <div class="odl-stat-icon odl-stat-icon-primary">\r
                <i class="fas fa-cogs"></i>\r
              </div>\r
              <div class="odl-stat-content">\r
                <p class="odl-stat-label">Activit\xE9s totales</p>\r
                <p class="odl-stat-value">{{ nombreActivite }}</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Activit\xE9s en cours -->\r
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">\r
            <div class="odl-stat-card">\r
              <div class="odl-stat-icon odl-stat-icon-info">\r
                <i class="fas fa-play-circle"></i>\r
              </div>\r
              <div class="odl-stat-content">\r
                <p class="odl-stat-label">Activit\xE9s en cours</p>\r
                <p class="odl-stat-value">{{ nombreActiviteEncours }}</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Activit\xE9s en attente -->\r
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">\r
            <div class="odl-stat-card">\r
              <div class="odl-stat-icon odl-stat-icon-warning">\r
                <i class="fas fa-clock"></i>\r
              </div>\r
              <div class="odl-stat-content">\r
                <p class="odl-stat-label">Activit\xE9s en attente</p>\r
                <p class="odl-stat-value">{{ nombreActiviteEnAttente }}</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Activit\xE9s termin\xE9es -->\r
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">\r
            <div class="odl-stat-card">\r
              <div class="odl-stat-icon odl-stat-icon-success">\r
                <i class="fas fa-check-circle"></i>\r
              </div>\r
              <div class="odl-stat-content">\r
                <p class="odl-stat-label">Activit\xE9s termin\xE9es</p>\r
                <p class="odl-stat-value">{{ nombreActiviteTerminer }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Carte personnels (regroup\xE9) -->\r
    <div class="card mb-4 odl-dashboard-card">\r
      <div class="card-header">\r
        <h4 class="mb-1">Vue d\u2019ensemble des personnels</h4>\r
        <p class="odl-dashboard-subtitle mb-0">\r
          Nombre total de personnels impliqu\xE9s dans les activit\xE9s.\r
        </p>\r
      </div>\r
      <div class="card-body">\r
        <div class="row g-3">\r
          <div class="col-sm-6 col-md-4 col-lg-3">\r
            <div class="odl-stat-card">\r
              <div class="odl-stat-icon odl-stat-icon-neutral">\r
                <i class="fas fa-users"></i>\r
              </div>\r
              <div class="odl-stat-content">\r
                <p class="odl-stat-label">Nombre de personnels</p>\r
                <p class="odl-stat-value">{{ nombreUtilisateurs }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Graphe 1: r\xE9partition des activit\xE9s -->\r
    <div class="card mb-4 odl-dashboard-card">\r
      <div class="card-header">\r
        <h4 class="mb-1">R\xE9partition des activit\xE9s par statut</h4>\r
        <p class="odl-dashboard-subtitle mb-0">\r
          Activit\xE9s en cours, termin\xE9es et en attente.\r
        </p>\r
      </div>\r
      <div class="card-body">\r
        <div class="row justify-content-center">\r
          <div class="col-12 col-xl-10">\r
            <apx-chart\r
              [series]="statusChartOptions.series"\r
              [chart]="statusChartOptions.chart"\r
              [labels]="statusChartOptions.labels"\r
              [colors]="statusChartOptions.colors"\r
              [legend]="statusChartOptions.legend"\r
              [plotOptions]="statusChartOptions.plotOptions"\r
              [dataLabels]="statusChartOptions.dataLabels"\r
              [tooltip]="statusChartOptions.tooltip"\r
              [stroke]="statusChartOptions.stroke"\r
            ></apx-chart>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Graphe 2: statistique globale des activit\xE9s dans le temps \u2014 une courbe par entit\xE9 -->\r
    <div class="card odl-dashboard-card">\r
      <div class="card-header">\r
        <div class="odl-graph-header">\r
          <div>\r
            <h4 class="mb-1">Statistique globale des activit\xE9s</h4>\r
            <p class="odl-dashboard-subtitle mb-0">\r
              Suivez votre \xE9volution dans le temps \u2014 survolez le graphe pour le d\xE9tail par entit\xE9 et par activit\xE9.\r
            </p>\r
          </div>\r
          <div class="odl-period-switch">\r
            <button type="button" class="btn btn-light" [class.active]="selectedPeriod === 'semaine'" (click)="setPeriod('semaine')">Semaine</button>\r
            <button type="button" class="btn btn-light" [class.active]="selectedPeriod === 'mois'" (click)="setPeriod('mois')">Mois</button>\r
            <button type="button" class="btn btn-light" [class.active]="selectedPeriod === 'annee'" (click)="setPeriod('annee')">Ann\xE9e</button>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="card-body">\r
        <div class="row">\r
          <div class="col-12">\r
            <apx-chart\r
              [series]="entityChartOptions.series"\r
              [chart]="entityChartOptions.chart"\r
              [dataLabels]="entityChartOptions.dataLabels"\r
              [stroke]="entityChartOptions.stroke"\r
              [fill]="entityChartOptions.fill"\r
              [markers]="entityChartOptions.markers"\r
              [colors]="entityChartOptions.colors"\r
              [grid]="entityChartOptions.grid"\r
              [tooltip]="entityChartOptions.tooltip"\r
              [legend]="entityChartOptions.legend"\r
              [yaxis]="entityChartOptions.yaxis"\r
              [xaxis]="entityChartOptions.xaxis"\r
            ></apx-chart>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/dashboard/main/main.component.scss */\n.odl-dashboard-card {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 2px 6px rgba(17, 24, 39, 0.04);\n}\n.odl-dashboard-subtitle {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.odl-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  border-radius: 10px;\n  border: 1px solid #e5e5e5;\n  background-color: #fff;\n}\n.odl-stat-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.odl-stat-icon-primary {\n  background-color: rgba(255, 121, 0, 0.1);\n  color: #ff7900;\n}\n.odl-stat-icon-info {\n  background-color: rgba(59, 130, 246, 0.08);\n  color: #2563eb;\n}\n.odl-stat-icon-warning {\n  background-color: rgba(245, 158, 11, 0.08);\n  color: #d97706;\n}\n.odl-stat-icon-success {\n  background-color: rgba(34, 197, 94, 0.08);\n  color: #16a34a;\n}\n.odl-stat-icon-neutral {\n  background-color: rgba(107, 114, 128, 0.08);\n  color: #4b5563;\n}\n.odl-stat-content {\n  display: flex;\n  flex-direction: column;\n}\n.odl-stat-label {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.odl-stat-value {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #111827;\n}\n.odl-graph-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .odl-graph-header {\n    flex-direction: column;\n  }\n}\n:host ::ng-deep .odl-tooltip {\n  padding: 8px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  max-width: 360px;\n}\n:host ::ng-deep .odl-tooltip-head {\n  margin-bottom: 4px;\n}\n:host ::ng-deep .odl-tooltip-sub {\n  color: #6b7280;\n  font-size: 11px;\n  margin-bottom: 8px;\n}\n:host ::ng-deep .odl-tooltip-list {\n  border-top: 1px solid #f3f4f6;\n  padding-top: 6px;\n}\n:host ::ng-deep .odl-tooltip-row {\n  font-size: 11px;\n  margin-bottom: 4px;\n  color: #374151;\n}\n:host ::ng-deep .odl-tooltip-titre {\n  font-weight: 600;\n  color: #111827;\n}\n:host ::ng-deep .apexcharts-legend {\n  padding-top: 4px !important;\n}\n:host ::ng-deep .apexcharts-pie-label {\n  font-weight: 500 !important;\n  fill: #1f2937 !important;\n}\n:host ::ng-deep .apexcharts-xaxistooltip,\n:host ::ng-deep .apexcharts-yaxistooltip {\n  display: none !important;\n}\n/*# sourceMappingURL=main.component.css.map */\n"] }]
  }], () => [{ type: GlobalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src/app/dashboard/main/main.component.ts", lineNumber: 43 });
})();

// src/app/dashboard/dashboard.routes.ts
var DASHBOARD_ROUTE = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "main",
    component: MainComponent
  },
  // {
  //   path: 'dashboard2',
  //   component: Dashboard2Component,
  // },
  { path: "**", component: Page404Component }
];
export {
  DASHBOARD_ROUTE
};
//# sourceMappingURL=dashboard.routes-BA5WBMDB.js.map
