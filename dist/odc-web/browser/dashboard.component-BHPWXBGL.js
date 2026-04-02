import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-VFVDFCIY.js";
import {
  NgxDatatableModule
} from "./chunk-ANWRCOCX.js";
import {
  GlobalService
} from "./chunk-WEK6BSLY.js";
import {
  RouterLink
} from "./chunk-ODGAOHOC.js";
import {
  Component,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  forkJoin,
  setClassMetadata,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EQOE5FII.js";
import "./chunk-KBUIKKCC.js";

// src/app/personnels/dashboard/dashboard.component.ts
function DashboardComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "option", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", e_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.nom);
  }
}
function DashboardComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "option", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", a_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2.nom);
  }
}
function DashboardComponent_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "option", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", e_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r3.nom);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(globalService, fb) {
    this.globalService = globalService;
    this.fb = fb;
    this.nombreActivite = 0;
    this.nombreActiviteEncours = 0;
    this.nombreActiviteEnAttente = 0;
    this.nombreActiviteTerminer = 0;
    this.nombreGenre = [];
    this.participants = [];
    this.totalHommes = 0;
    this.totalFemmes = 0;
    this.currentUserId = this.getCurrentUserId();
    this.selectedActivite = 0;
    this.selectedEntite = 0;
    this.selectedEtape = 0;
    this.dateDebut = null;
    this.dateFin = null;
    this.activites = [];
    this.entites = [];
    this.etapes = [];
    this.filteredActivites = [];
    this.filteredEtapes = [];
    this.formCriteres = this.fb.group({
      selectedActivite: new UntypedFormControl(""),
      selectedEntite: new UntypedFormControl(""),
      selectedEtape: new UntypedFormControl(""),
      dateDebut: new UntypedFormControl(""),
      dateFin: new UntypedFormControl("")
    });
  }
  ngOnInit() {
    this.getParticipants();
    this.getNombreActivite();
    this.getNombreActiviteEncours();
    this.getNombreActiviteEnAttente();
    this.getNombreActiviteTerminer();
    this.fetchGenreData();
    this.getActivites();
    this.getEtapes();
    this.onEntiteChange();
    this.getEntites();
    this.applyFilters();
    this.chart2();
  }
  getActivites() {
    this.globalService.get("activite").subscribe({
      next: (data) => {
        this.activites = data;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des activit\xE9s", err);
      }
    });
  }
  getEtapes() {
    this.globalService.get("etape").subscribe({
      next: (data) => {
        this.etapes = data;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des etapes", err);
      }
    });
  }
  getEntites() {
    this.globalService.get("entite").subscribe({
      next: (data) => {
        this.entites = data;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des entit\xE9s", err);
      }
    });
  }
  getCurrentUserId() {
    const raw = localStorage.getItem("bearerid");
    if (!raw)
      return null;
    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed === "number")
        return parsed;
      if (typeof parsed === "string")
        return parseInt(parsed, 10);
      if (parsed)
        return Number(parsed);
      return null;
    } catch {
      const val = parseInt(raw, 10);
      return isNaN(val) ? null : val;
    }
  }
  // Récupérer la liste des participants
  getParticipants() {
    this.globalService.get("participant").subscribe({
      next: (data) => {
        this.applyFilters();
        console.log("Participants charg\xE9s :", data);
        console.log("mes critere=====", this.selectedActivite);
        this.participants = data;
        this.totalFemmes = this.participants.filter((p) => p.genre === "Femme" || p.activite?.id === this.selectedActivite).length;
        this.totalHommes = this.participants.filter((p) => p.genre === "Homme").length;
        this.chart2();
      },
      error: (err) => {
        console.error("Erreur lors du chargement des participants", err);
      }
    });
  }
  countParticipants() {
    console.log("Nombre total de participants :", this.participants);
    this.totalHommes = this.participants.filter((p) => p.phone === "Homme").length;
    this.totalFemmes = this.participants.filter((p) => p.phone === "Femme").length;
  }
  // getNombreUitlisateur() {
  //   this.globalService.get("utilisateur/nombre").subscribe({
  //     next: (count) => this.nombreUtilisateurs = count,
  //     error: err => console.log(err),
  //   });
  // }
  getNombreActivite() {
    this.globalService.getId("activite/nombre", this.currentUserId).subscribe({
      next: (count) => this.nombreActivite = count,
      error: (err) => console.log(err)
    });
  }
  getNombreActiviteEncours() {
    this.globalService.getId("activite/nombreActivitesEncours", this.currentUserId).subscribe({
      next: (count) => this.nombreActiviteEncours = count,
      error: (err) => console.log(err)
    });
  }
  getNombreActiviteEnAttente() {
    this.globalService.getId("activite/nombreActivitesEnAttente", this.currentUserId).subscribe({
      next: (count) => this.nombreActiviteEnAttente = count,
      error: (err) => console.log(err)
    });
  }
  getNombreActiviteTerminer() {
    this.globalService.getId("activite/nombreActivitesTerminer", this.currentUserId).subscribe({
      next: (count) => this.nombreActiviteTerminer = count,
      error: (err) => console.log(err)
    });
  }
  fetchGenreData() {
    this.globalService.get("reporting/participants-par-genre").subscribe({
      next: (data) => {
        this.nombreGenre = data;
        this.chart2();
      },
      error: (err) => console.error("Erreur lors de la r\xE9cup\xE9ration des donn\xE9es de genre :", err)
    });
  }
  chart2() {
    console.log("Total Hommes :", this.totalHommes);
    console.log("Total Femmes :", this.totalFemmes);
    this.barChartOptions = {
      series: [
        {
          name: "Hommes",
          data: [this.totalFemmes]
        },
        {
          name: "Femmes",
          data: [this.totalHommes]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        foreColor: "#000"
      },
      colors: ["#f1a535", "#000"],
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: "80%",
          columnWidth: "30%",
          borderRadius: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
        borderColor: "#9aa0ac"
      },
      yaxis: {
        min: 0,
        // max: 5,
        title: {
          text: "Participants"
        }
      },
      tooltip: {
        shared: false,
        theme: "dark",
        x: {
          formatter: function(val) {
            return val.toString();
          }
        },
        y: {
          formatter: function(val) {
            return val.toString();
          }
        }
      },
      xaxis: {
        categories: [
          "Hommes et Femmes"
        ],
        title: {
          text: "Genres"
        },
        labels: {
          formatter: (val) => Math.abs(Math.round(parseInt(val, 10))).toString()
        }
      }
    };
  }
  applyFilters() {
    this.dateDebut = this.formCriteres.get("dateDebut")?.value;
    this.dateFin = this.formCriteres.get("dateFin")?.value;
    this.selectedActivite = this.formCriteres.get("selectedActivite")?.value;
    this.selectedEntite = this.formCriteres.get("selectedEntite")?.value;
    this.selectedEtape = this.formCriteres.get("selectedEtape")?.value;
    forkJoin({
      stats: this.globalService.getStatsFiltres(this.dateDebut, this.dateFin, this.selectedActivite, this.selectedEntite, this.selectedEtape),
      blacklist: this.globalService.get("blacklist")
      // Récupérer la blacklist
    }).subscribe(({ stats, blacklist }) => {
      const statsFiltrees = stats.filter((participant) => !blacklist.some((b) => b.email === participant.email));
      this.updateChart(statsFiltrees);
      this.chart2();
    });
  }
  updateChart(data) {
    this.participants = data;
    this.totalFemmes = this.participants.filter((p) => p.genre === "Femme").length;
    this.totalHommes = this.participants.filter((p) => p.genre === "Homme").length;
    this.barChartOptions.series = [
      {
        name: "Participants",
        data: data.series
        // ← liste des valeurs
      }
    ];
    this.barChartOptions.xaxis = {
      categories: data.labels
      // ← catégories mises à jour
    };
  }
  onEntiteChange() {
    const entiteId = this.formCriteres.get("selectedEntite")?.value;
    if (!entiteId) {
      this.filteredActivites = this.activites;
    } else {
      this.filteredActivites = this.activites.filter((a) => a.entite.id == entiteId);
    }
    this.formCriteres.get("selectedActivite")?.setValue("");
    this.applyFilters();
  }
  onActiviteChange() {
    const activiteId = this.formCriteres.get("selectedActivite")?.value;
    console.log("activite s\xE9lectionn\xE9e :", activiteId);
    if (!activiteId) {
      this.filteredEtapes = this.etapes;
    } else {
      this.filteredEtapes = this.etapes.filter((a) => a.activite?.id == activiteId);
    }
    this.formCriteres.get("selectedEtape")?.setValue("");
    this.applyFilters();
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 108, vars: 19, consts: [[1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home", "font-17"], [1, "section-body"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card"], [1, "card-statistic-4"], [1, "align-items-center", "justify-content-between"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "left-grid-spacing"], [1, "card-content"], [1, "mb-3", "font-18"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "right-grid-spacing"], [1, "banner-img"], ["src", "assets/images/activitetotal.png", "alt", ""], ["src", "assets/images/activiteencours.png", "alt", ""], ["src", "assets/images/activiteattente.png", "alt", ""], ["src", "assets/images/activiteterminer.png", "alt", ""], [3, "formGroup"], [1, "row", "g-3", "mb-4"], [1, "col-md-3"], ["for", "entite", 1, "form-label"], ["id", "entite", "formControlName", "selectedEntite", 1, "form-select", "form-control", 3, "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["for", "activite", 1, "form-label"], ["id", "activite", "formControlName", "selectedActivite", 1, "form-select", "form-control", 3, "change"], ["for", "etape", 1, "form-label"], ["id", "etape", "formControlName", "selectedEtape", 1, "form-select", "form-control", 3, "change"], [1, "form-label"], ["type", "date", "formControlName", "dateDebut", 1, "form-control", 3, "change"], ["type", "date", "formControlName", "dateFin", 1, "form-control", 3, "change"], [1, "col-md-12", "col-lg-6", "col-xl-6"], [1, "card-header"], [1, "card-body"], [3, "series", "chart", "dataLabels", "stroke", "colors", "title", "grid", "tooltip", "plotOptions", "yaxis", "xaxis"], [3, "value"]], template: function DashboardComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 8)(17, "div", 13)(18, "div", 14)(19, "h6");
        \u0275\u0275text(20, "Activit\xE9 Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h2", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 16)(24, "div", 17);
        \u0275\u0275element(25, "img", 18);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(26, "div", 9)(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "div", 8)(31, "div", 13)(32, "div", 14)(33, "h6");
        \u0275\u0275text(34, " Activit\xE9 en cours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "h2", 15);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 16)(38, "div", 17);
        \u0275\u0275element(39, "img", 19);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(40, "div", 9)(41, "div", 10)(42, "div", 11)(43, "div", 12)(44, "div", 8)(45, "div", 13)(46, "div", 14)(47, "h6");
        \u0275\u0275text(48, "Activit\xE9 en attente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h2", 15);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 16)(52, "div", 17);
        \u0275\u0275element(53, "img", 20);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(54, "div", 9)(55, "div", 10)(56, "div", 11)(57, "div", 12)(58, "div", 8)(59, "div", 13)(60, "div", 14)(61, "h6");
        \u0275\u0275text(62, "Actitiv\xE9 terminer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "h2", 15);
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 16)(66, "div", 17);
        \u0275\u0275element(67, "img", 21);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(68, "div")(69, "form", 22)(70, "div", 23)(71, "div", 24)(72, "label", 25);
        \u0275\u0275text(73, "Entit\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "select", 26);
        \u0275\u0275listener("change", function DashboardComponent_Template_select_change_74_listener() {
          return ctx.onEntiteChange();
        });
        \u0275\u0275elementStart(75, "option", 27);
        \u0275\u0275text(76, "Toutes les entit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275template(77, DashboardComponent_ng_container_77_Template, 3, 2, "ng-container", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 24)(79, "label", 29);
        \u0275\u0275text(80, "Activit\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "select", 30);
        \u0275\u0275listener("change", function DashboardComponent_Template_select_change_81_listener() {
          return ctx.onActiviteChange();
        });
        \u0275\u0275elementStart(82, "option", 27);
        \u0275\u0275text(83, "Toutes les activit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275template(84, DashboardComponent_ng_container_84_Template, 3, 2, "ng-container", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 24)(86, "label", 31);
        \u0275\u0275text(87, "Etape");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "select", 32);
        \u0275\u0275listener("change", function DashboardComponent_Template_select_change_88_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(89, "option", 27);
        \u0275\u0275text(90, "Toutes les etapes");
        \u0275\u0275elementEnd();
        \u0275\u0275template(91, DashboardComponent_ng_container_91_Template, 3, 2, "ng-container", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 24)(93, "label", 33);
        \u0275\u0275text(94, "Date d\xE9but");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "input", 34);
        \u0275\u0275listener("change", function DashboardComponent_Template_input_change_95_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 24)(97, "label", 33);
        \u0275\u0275text(98, "Date fin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "input", 35);
        \u0275\u0275listener("change", function DashboardComponent_Template_input_change_99_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(100, "div", 8)(101, "div", 36)(102, "div", 10)(103, "div", 37)(104, "h4");
        \u0275\u0275text(105, "Statistique des participants");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 38);
        \u0275\u0275element(107, "apx-chart", 39);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(ctx.nombreActivite);
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.nombreActiviteEncours);
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.nombreActiviteEnAttente);
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.nombreActiviteTerminer);
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.formCriteres);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.entites);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.filteredActivites);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.filteredEtapes);
        \u0275\u0275advance(16);
        \u0275\u0275property("series", ctx.barChartOptions.series)("chart", ctx.barChartOptions.chart)("dataLabels", ctx.barChartOptions.dataLabels)("stroke", ctx.barChartOptions.stroke)("colors", ctx.barChartOptions.colors)("title", ctx.barChartOptions.title)("grid", ctx.barChartOptions.grid)("tooltip", ctx.barChartOptions.tooltip)("plotOptions", ctx.barChartOptions.plotOptions)("yaxis", ctx.barChartOptions.yaxis)("xaxis", ctx.barChartOptions.xaxis);
      }
    }, dependencies: [
      RouterLink,
      NgApexchartsModule,
      ChartComponent,
      NgForOf,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      NgxDatatableModule
    ], styles: ["\n\n.card[_ngcontent-%COMP%]   .card-statistic-4[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: right;\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [
      RouterLink,
      NgApexchartsModule,
      NgForOf,
      FormsModule,
      ReactiveFormsModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      RouterLink
    ], template: '<section class="main-content">\r\n  <ul class="breadcrumb breadcrumb-style ">\r\n    <li class="breadcrumb-item">\r\n      <h5 class="page-title m-b-0">Dashboard</h5>\r\n    </li>\r\n    <li class="breadcrumb-item bcrumb-1">\r\n      <a routerLink="/dashboard/main">\r\n        <i class="fas fa-home font-17"></i></a>\r\n    </li>\r\n    <li class="breadcrumb-item">Tableau de Bord</li>\r\n  </ul>\r\n  <div class="section-body">\r\n    <div class="row ">\r\n      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">\r\n        <div class="card">\r\n          <div class="card-statistic-4">\r\n            <div class="align-items-center justify-content-between">\r\n              <div class="row ">\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 left-grid-spacing">\r\n                  <div class="card-content">\r\n                    <h6>Activit\xE9 Total</h6>\r\n                    <h2 class="mb-3 font-18">{{ nombreActivite }}</h2>\r\n<!--                    <p class="mb-0"><span class="col-green">42%</span></p>-->\r\n                  </div>\r\n<!--                  <ngb-progressbar type="success" [value]="42" height=".3rem"></ngb-progressbar>-->\r\n                </div>\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 right-grid-spacing">\r\n                  <div class="banner-img">\r\n                    <img src="assets/images/activitetotal.png" alt="">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">\r\n        <div class="card">\r\n          <div class="card-statistic-4">\r\n            <div class="align-items-center justify-content-between">\r\n              <div class="row ">\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 left-grid-spacing">\r\n                  <div class="card-content">\r\n                    <h6> Activit\xE9 en cours</h6>\r\n                    <h2 class="mb-3 font-18">{{ nombreActiviteEncours }}</h2>\r\n<!--                    <p class="mb-0"><span class="col-orange">33%</span></p>-->\r\n                  </div>\r\n<!--                  <ngb-progressbar type="warning" [value]="33" height=".3rem"></ngb-progressbar>-->\r\n                </div>\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 right-grid-spacing">\r\n                  <div class="banner-img">\r\n                    <img src="assets/images/activiteencours.png" alt="">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">\r\n        <div class="card">\r\n          <div class="card-statistic-4">\r\n            <div class="align-items-center justify-content-between">\r\n              <div class="row ">\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 left-grid-spacing">\r\n                  <div class="card-content">\r\n                    <h6>Activit\xE9 en attente</h6>\r\n                    <h2 class="mb-3 font-18">{{ nombreActiviteEnAttente }}</h2>\r\n<!--                    <p class="mb-0"><span class="col-blue">25%</span>-->\r\n<!--                    </p>-->\r\n                  </div>\r\n<!--                  <ngb-progressbar type="info" [value]="25" height=".3rem"></ngb-progressbar>-->\r\n                </div>\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 right-grid-spacing">\r\n                  <div class="banner-img">\r\n                    <img src="assets/images/activiteattente.png" alt="">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">\r\n        <div class="card">\r\n          <div class="card-statistic-4">\r\n            <div class="align-items-center justify-content-between">\r\n              <div class="row ">\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 left-grid-spacing">\r\n                  <div class="card-content">\r\n                    <h6>Actitiv\xE9 terminer</h6>\r\n                    <h2 class="mb-3 font-18">{{ nombreActiviteTerminer }}</h2>\r\n<!--                    <p class="mb-0"><span class="col-red">65%</span></p>-->\r\n                  </div>\r\n<!--                  <ngb-progressbar type="danger" [value]="65" height=".3rem"></ngb-progressbar>-->\r\n                </div>\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 right-grid-spacing">\r\n                  <div class="banner-img">\r\n                    <img src="assets/images/activiteterminer.png" alt="">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">\r\n        <div class="card">\r\n          <div class="card-statistic-4">\r\n            <div class="align-items-center justify-content-between">\r\n              <div class="row ">\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 left-grid-spacing">\r\n                  <div class="card-content">\r\n                    <h6>Nombre personnels</h6>\r\n                    <h2 class="mb-3 font-18">{{ nombreUtilisateurs }}</h2>\r\n                  </div>\r\n                </div>\r\n                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 right-grid-spacing">\r\n                  <div class="banner-img">\r\n                    <img src="assets/images/usertotal.png" alt="">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n   \r\n    <div>  \r\n   <form [formGroup]="formCriteres">\r\n    <div class="row g-3 mb-4"> \r\n  <!-- Filtre par Entit\xE9 -->\r\n  <div class="col-md-3">\r\n    <label for="entite" class="form-label">Entit\xE9</label>\r\n    <!-- (change)="applyFilters()" -->\r\n    <select id="entite" class="form-select form-control" formControlName="selectedEntite"(change)="onEntiteChange()" >\r\n      <option value="">Toutes les entit\xE9s</option>\r\n      <ng-container *ngFor="let e of entites">\r\n        <option [value]="e.id">{{ e.nom }}</option>\r\n      </ng-container>\r\n    </select>\r\n  </div>\r\n<!-- Filtre par Activit\xE9 -->\r\n    <div class="col-md-3">\r\n    <label for="activite" class="form-label">Activit\xE9</label>\r\n    <select id="activite" class="form-select form-control" formControlName="selectedActivite" (change)="onActiviteChange()">\r\n      <option value="">Toutes les activit\xE9s</option>\r\n      <ng-container *ngFor="let a of filteredActivites">\r\n        <option [value]="a.id">{{ a.nom }}</option>\r\n      </ng-container>\r\n     </select>\r\n    <!-- <select class="form-select form-control" formControlName="selectedActivite" (change)="applyFilters()" >\r\n    <option value="" [ngValue]="null" disabled>-- Toutes les activit\xE9s --</option>\r\n    <option *ngFor="let activite of activites"  [value]="activite.id">{{activite.nom}}</option>\r\n    </select>  -->\r\n  </div>\r\n\r\n  <!-- Filtre par Etape -->\r\n    <div class="col-md-3">\r\n    <label for="etape" class="form-label">Etape</label>\r\n    <select id="etape" class="form-select form-control" formControlName="selectedEtape" (change)="applyFilters()">\r\n      <option value="">Toutes les etapes</option>\r\n      <ng-container *ngFor="let e of filteredEtapes">\r\n        <option [value]="e.id">{{ e.nom }}</option>\r\n      </ng-container>\r\n     </select>\r\n   \r\n  </div>\r\n  <!-- Filtre Date d\xE9but -->\r\n  <div class="col-md-3">\r\n    <label class="form-label">Date d\xE9but</label>\r\n    <input type="date" class="form-control" formControlName="dateDebut" (change)="applyFilters()" />\r\n  </div>\r\n\r\n  <!-- Filtre Date fin -->\r\n  <div class="col-md-3">\r\n    <label class="form-label">Date fin</label>\r\n    <input type="date" class="form-control" formControlName="dateFin" (change)="applyFilters()" />\r\n  </div>\r\n </div> \r\n  </form>\r\n</div>\r\n\r\n<!-- CHART -->\r\n<div class="row">\r\n  <div class="col-md-12 col-lg-6 col-xl-6">\r\n    <div class="card">\r\n      <div class="card-header">\r\n        <h4>Statistique des participants</h4>\r\n      </div>\r\n\r\n      <div class="card-body">\r\n        <apx-chart\r\n          [series]="barChartOptions.series!"\r\n          [chart]="barChartOptions.chart!"\r\n          [dataLabels]="barChartOptions.dataLabels!"\r\n          [stroke]="barChartOptions.stroke!"\r\n          [colors]="barChartOptions.colors!"\r\n          [title]="barChartOptions.title!"\r\n          [grid]="barChartOptions.grid!"\r\n          [tooltip]="barChartOptions.tooltip!"\r\n          [plotOptions]="barChartOptions.plotOptions!"\r\n          [yaxis]="barChartOptions.yaxis!"\r\n          [xaxis]="barChartOptions.xaxis!"\r\n        >\r\n        </apx-chart>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  </div>\r\n</section>\r\n\r\n', styles: ["/* src/app/personnels/dashboard/dashboard.component.scss */\n.card .card-statistic-4 .banner-img img {\n  float: right;\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: GlobalService }, { type: UntypedFormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/personnels/dashboard/dashboard.component.ts", lineNumber: 53 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-BHPWXBGL.js.map
