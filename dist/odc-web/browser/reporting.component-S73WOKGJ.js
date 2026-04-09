import {
  utils,
  writeFileSync
} from "./chunk-3G37RPPK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-E4RPKPFV.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZBB7M2N.js";
import "./chunk-KBUIKKCC.js";

// src/app/personnels/reporting/services/reporting.service.ts
var ReportingService = class _ReportingService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/reporting`;
    this.entiteUrl = `${environment.apiUrl}/entite`;
    console.log("Base URL :", this.baseUrl);
    console.log("Entite URL :", this.entiteUrl);
  }
  // 🔹 Tous les participants (optionnel pour le premier affichage)
  getAllParticipants() {
    return this.http.get(this.baseUrl);
  }
  // 🔹 Participants filtrés côté backend
  getFilteredParticipants(entiteId, activiteId, annee) {
    let params = new HttpParams();
    if (entiteId)
      params = params.set("entiteId", entiteId);
    if (activiteId)
      params = params.set("activiteId", activiteId);
    if (annee)
      params = params.set("annee", annee);
    return this.http.get(this.baseUrl, { params });
  }
  // 🔹 Services
  getAllServices() {
    return this.http.get(`${this.entiteUrl}/services`);
  }
  // 🔹 Activités d’un service
  getActivitesByService(serviceId) {
    return this.http.get(`${this.entiteUrl}/activites/service/${serviceId}`);
  }
  static {
    this.\u0275fac = function ReportingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportingService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportingService, factory: _ReportingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/personnels/reporting/reporting.component.ts
function ReportingComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entite_r1 = ctx.$implicit;
    \u0275\u0275property("value", entite_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entite_r1);
  }
}
function ReportingComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activite_r2 = ctx.$implicit;
    \u0275\u0275property("value", activite_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activite_r2);
  }
}
function ReportingComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    \u0275\u0275property("value", year_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r3);
  }
}
function ReportingComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, " Chargement des participants... ");
    \u0275\u0275elementEnd();
  }
}
function ReportingComponent_div_41_table_2_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r4.prenom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r4.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r4.genre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r4.entiteNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r4.activiteNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 9, participant_r4.dateDebut, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 12, participant_r4.dateFin, "dd/MM/yyyy"));
  }
}
function ReportingComponent_div_41_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead", 27)(2, "tr")(3, "th");
    \u0275\u0275text(4, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Entit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Date fin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, ReportingComponent_div_41_table_2_tr_22_Template, 21, 15, "tr", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r4.filteredParticipants);
  }
}
function ReportingComponent_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Aucun participant trouv\xE9. ");
    \u0275\u0275elementEnd();
  }
}
function ReportingComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275template(2, ReportingComponent_div_41_table_2_Template, 23, 1, "table", 24)(3, ReportingComponent_div_41_div_3_Template, 2, 0, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.filteredParticipants.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loading && ctx_r4.filteredParticipants.length === 0);
  }
}
var ReportingComponent = class _ReportingComponent {
  constructor(reportingService) {
    this.reportingService = reportingService;
    this.participants = [];
    this.filteredParticipants = [];
    this.entites = [];
    this.activites = [];
    this.years = [];
    this.selectedEntite = "";
    this.selectedActivite = "";
    this.selectedYear = "";
    this.searchText = "";
    this.loading = false;
  }
  ngOnInit() {
    this.loadParticipants();
  }
  loadParticipants() {
    this.loading = true;
    this.reportingService.getAllParticipants().subscribe((data) => {
      this.participants = data;
      this.filteredParticipants = [...data];
      this.entites = Array.from(new Set(data.map((p) => p.entiteNom))).filter(Boolean);
      this.activites = Array.from(new Set(data.map((p) => p.activiteNom))).filter(Boolean);
      this.years = Array.from(new Set(data.map((p) => new Date(p.dateDebut || "").getFullYear()))).filter(Boolean);
      this.loading = false;
      console.log(data);
    }, (err) => this.loading = false);
  }
  onEntiteChange() {
    this.activites = Array.from(new Set(this.participants.filter((p) => !this.selectedEntite || p.entiteNom === this.selectedEntite).map((p) => p.activiteNom).filter(Boolean)));
    this.selectedActivite = "";
    this.applyFilters();
  }
  applyFilters() {
    this.filteredParticipants = this.participants.filter((p) => (!this.selectedEntite || p.entiteNom === this.selectedEntite) && (!this.selectedActivite || p.activiteNom === this.selectedActivite) && (!this.selectedYear || p.dateDebut && new Date(p.dateDebut).getFullYear().toString() === this.selectedYear) && (!this.searchText || p.nom.toLowerCase().includes(this.searchText.toLowerCase()) || p.prenom.toLowerCase().includes(this.searchText.toLowerCase()) || p.email.toLowerCase().includes(this.searchText.toLowerCase())));
  }
  resetFilters() {
    this.selectedEntite = "";
    this.selectedActivite = "";
    this.selectedYear = "";
    this.searchText = "";
    this.applyFilters();
  }
  downloadExcel() {
    const dataForExcel = this.filteredParticipants.map((p) => ({
      Nom: p.nom,
      Pr\u00E9nom: p.prenom,
      Email: p.email,
      T\u00E9l\u00E9phone: p.phone,
      Genre: p.genre,
      Entit\u00E9: p.entiteNom,
      Activit\u00E9: p.activiteNom,
      "Date d\xE9but": p.dateDebut ? new Date(p.dateDebut).toLocaleDateString("fr-FR") : "",
      "Date fin": p.dateFin ? new Date(p.dateFin).toLocaleDateString("fr-FR") : ""
    }));
    const worksheet = utils.json_to_sheet(dataForExcel);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Reporting");
    writeFileSync(workbook, "reporting.xlsx");
  }
  static {
    this.\u0275fac = function ReportingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportingComponent)(\u0275\u0275directiveInject(ReportingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportingComponent, selectors: [["app-reporting"]], decls: 42, vars: 9, consts: [[1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "odl-page-subtitle"], [1, "container", "mt-4"], [1, "card", "mb-3"], [1, "card-body", "row", "g-3"], [1, "col-md-3"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Nom, pr\xE9nom ou email", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "col-12", "d-flex", "gap-2", "mt-2"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["class", "text-center p-3", 4, "ngIf"], ["class", "card", 4, "ngIf"], [3, "value"], [1, "text-center", "p-3"], [1, "fas", "fa-spinner", "fa-spin"], [1, "card"], [1, "card-body", "p-0"], ["class", "table text-center", 4, "ngIf"], ["class", "p-3 text-center", 4, "ngIf"], [1, "table", "text-center"], [1, "sticky-top"], [4, "ngFor", "ngForOf"], [1, "p-3", "text-center"]], template: function ReportingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "ul", 1)(2, "li", 2)(3, "h5", 3);
        \u0275\u0275text(4, "Reporting");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Analysez les indicateurs et exportez vos reporting.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ReportingComponent_Template_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedEntite, $event) || (ctx.selectedEntite = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ReportingComponent_Template_select_change_13_listener() {
          return ctx.onEntiteChange();
        });
        \u0275\u0275elementStart(14, "option", 11);
        \u0275\u0275text(15, "Toutes les entit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, ReportingComponent_option_16_Template, 2, 2, "option", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "label", 9);
        \u0275\u0275text(19, "Activit\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ReportingComponent_Template_select_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedActivite, $event) || (ctx.selectedActivite = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ReportingComponent_Template_select_change_20_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(21, "option", 11);
        \u0275\u0275text(22, "Toutes les activit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, ReportingComponent_option_23_Template, 2, 2, "option", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 8)(25, "label", 9);
        \u0275\u0275text(26, "Ann\xE9e");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ReportingComponent_Template_select_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ReportingComponent_Template_select_change_27_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(28, "option", 11);
        \u0275\u0275text(29, "Toutes les ann\xE9es");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, ReportingComponent_option_30_Template, 2, 2, "option", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 8)(32, "label", 9);
        \u0275\u0275text(33, "Rechercher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ReportingComponent_Template_input_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("input", function ReportingComponent_Template_input_input_34_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 14)(36, "button", 15);
        \u0275\u0275listener("click", function ReportingComponent_Template_button_click_36_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275text(37, "R\xE9initialiser");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 16);
        \u0275\u0275listener("click", function ReportingComponent_Template_button_click_38_listener() {
          return ctx.downloadExcel();
        });
        \u0275\u0275text(39, "T\xE9l\xE9charger Excel");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(40, ReportingComponent_div_40_Template, 3, 0, "div", 17)(41, ReportingComponent_div_41_Template, 4, 2, "div", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedEntite);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.entites);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedActivite);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.activites);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.years);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #000;\n}\n/*# sourceMappingURL=reporting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportingComponent, [{
    type: Component,
    args: [{ selector: "app-reporting", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Reporting</h5>
    </li>
  </ul>

  <p class="odl-page-subtitle">Analysez les indicateurs et exportez vos reporting.</p>

  <div class="container mt-4">

    <!-- Filtres -->
    <div class="card mb-3">
      <div class="card-body row g-3">

        <div class="col-md-3">
          <label class="form-label">Service</label>
          <select class="form-select" [(ngModel)]="selectedEntite" (change)="onEntiteChange()">
            <option value="">Toutes les entit\xE9s</option>
            <option *ngFor="let entite of entites" [value]="entite">{{ entite }}</option>
          </select>
        </div>

        <div class="col-md-3">
          <label class="form-label">Activit\xE9</label>
          <select class="form-select" [(ngModel)]="selectedActivite" (change)="applyFilters()">
            <option value="">Toutes les activit\xE9s</option>
            <option *ngFor="let activite of activites" [value]="activite">{{ activite }}</option>
          </select>
        </div>

        <div class="col-md-3">
          <label class="form-label">Ann\xE9e</label>
          <select class="form-select" [(ngModel)]="selectedYear" (change)="applyFilters()">
            <option value="">Toutes les ann\xE9es</option>
            <option *ngFor="let year of years" [value]="year">{{ year }}</option>
          </select>
        </div>

        <div class="col-md-3">
          <label class="form-label">Rechercher</label>
          <input type="text" class="form-control" [(ngModel)]="searchText" (input)="applyFilters()" placeholder="Nom, pr\xE9nom ou email">
        </div>

        <div class="col-12 d-flex gap-2 mt-2">
          <button class="btn btn-danger" (click)="resetFilters()">R\xE9initialiser</button>
          <button class="btn btn-primary" (click)="downloadExcel()">T\xE9l\xE9charger Excel</button>
        </div>

      </div>
    </div>

    <!-- Loader -->
    <div *ngIf="loading" class="text-center p-3">
      <i class="fas fa-spinner fa-spin"></i> Chargement des participants...
    </div>

    <!-- Tableau -->
    <div *ngIf="!loading" class="card">
      <div class="card-body p-0">

        <table *ngIf="filteredParticipants.length > 0" class="table text-center">
          <thead class="sticky-top">
            <tr>
              <th>Nom</th>
              <th>Pr\xE9nom</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Genre</th>
              <th>Entit\xE9</th>
              <th>Activit\xE9</th>
              <th>Date d\xE9but</th>
              <th>Date fin</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let participant of filteredParticipants">
              <td>{{ participant.nom }}</td>
              <td>{{ participant.prenom }}</td>
              <td>{{ participant.email }}</td>
              <td>{{ participant.phone }}</td>
              <td>{{ participant.genre }}</td>
              <td>{{ participant.entiteNom }}</td>
              <td>{{ participant.activiteNom }}</td>
              <td>{{ participant.dateDebut | date:'dd/MM/yyyy' }}</td>
              <td>{{ participant.dateFin | date:'dd/MM/yyyy' }}</td>
            </tr>
          </tbody>
        </table>

        <div *ngIf="!loading && filteredParticipants.length === 0" class="p-3 text-center">
          Aucun participant trouv\xE9.
        </div>

      </div>
    </div>

  </div>
</section>`, styles: ["/* src/app/personnels/reporting/reporting.component.scss */\n.table thead {\n  background-color: #ffffff;\n  color: #000;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n"] }]
  }], () => [{ type: ReportingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportingComponent, { className: "ReportingComponent", filePath: "src/app/personnels/reporting/reporting.component.ts", lineNumber: 14 });
})();
export {
  ReportingComponent
};
//# sourceMappingURL=reporting.component-S73WOKGJ.js.map
