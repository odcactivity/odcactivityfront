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
  HttpClientModule,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZBB7M2N.js";
import "./chunk-KBUIKKCC.js";

// src/app/core/service/entite.service.ts
var EntiteService = class _EntiteService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.apiUrl + "/entite";
  }
  /**
   * Récupère toutes les entités
   */
  getAllEntites() {
    return this.http.get(this.baseUrl);
  }
  static {
    this.\u0275fac = function EntiteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EntiteService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntiteService, factory: _EntiteService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntiteService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/personnels/reportinghebdo/services/reportinghebdo.service.ts
var ReportingHebdoService = class _ReportingHebdoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/reportinghebdo/activites`;
  }
  getActivites(entiteId, dateDebut, dateFin) {
    return this.http.get(`${this.apiUrl}?entiteId=${entiteId}&dateDebut=${dateDebut}&dateFin=${dateFin}`);
  }
  static {
    this.\u0275fac = function ReportingHebdoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportingHebdoService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportingHebdoService, factory: _ReportingHebdoService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportingHebdoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/personnels/reportinghebdo/reportinghebdo.component.ts
function ReportinghebdoComponent_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r1.nom, " ");
  }
}
function ReportinghebdoComponent_div_13_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, a_r2.dateDebut, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 11, a_r2.dateFin, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.statut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.lieu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.objectifParticipation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.cible);
  }
}
function ReportinghebdoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Cible");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, ReportinghebdoComponent_div_13_tr_21_Template, 19, 14, "tr", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r2.activites);
  }
}
function ReportinghebdoComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, " Aucune activit\xE9 trouv\xE9e ");
    \u0275\u0275elementEnd();
  }
}
var ReportinghebdoComponent = class _ReportinghebdoComponent {
  constructor(entiteService, reportingService) {
    this.entiteService = entiteService;
    this.reportingService = reportingService;
    this.entites = [];
    this.selectedEntite = null;
    this.activites = [];
    this.hasSearched = false;
  }
  ngOnInit() {
    console.log("azazakzaazlklazkaz");
    this.entiteService.getAllEntites().subscribe({
      next: (data) => {
        this.entites = data;
      },
      error: (err) => console.error("Erreur r\xE9cup\xE9ration entit\xE9s :", err)
    });
  }
  loadActivites() {
    if (!this.selectedEntite || !this.dateDebut || !this.dateFin) {
      return;
    }
    this.reportingService.getActivites(this.selectedEntite, this.dateDebut, this.dateFin).subscribe({
      next: (data) => {
        this.activites = data;
        this.hasSearched = true;
      },
      error: (err) => {
        console.error("Erreur backend :", err);
        this.activites = [];
        this.hasSearched = true;
      }
    });
  }
  static {
    this.\u0275fac = function ReportinghebdoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportinghebdoComponent)(\u0275\u0275directiveInject(EntiteService), \u0275\u0275directiveInject(ReportingHebdoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportinghebdoComponent, selectors: [["app-reportinghebdo"]], decls: 15, vars: 8, consts: [[1, "main-content"], [1, "reportinghebdo-theme"], [1, "title"], [1, "filters"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "table-wrapper", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "table-wrapper"], [1, "table-reporting"], [4, "ngFor", "ngForOf"], [1, "empty"]], template: function ReportinghebdoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275text(3, "Reporting Hebdomadaire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function ReportinghebdoComponent_Template_select_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedEntite, $event) || (ctx.selectedEntite = $event);
          return $event;
        });
        \u0275\u0275elementStart(6, "option", 5);
        \u0275\u0275text(7, "S\xE9lectionner une entit\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ReportinghebdoComponent_option_8_Template, 2, 2, "option", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ReportinghebdoComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateDebut, $event) || (ctx.dateDebut = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ReportinghebdoComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFin, $event) || (ctx.dateFin = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function ReportinghebdoComponent_Template_button_click_11_listener() {
          return ctx.loadActivites();
        });
        \u0275\u0275text(12, " Rechercher ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, ReportinghebdoComponent_div_13_Template, 22, 1, "div", 9)(14, ReportinghebdoComponent_p_14_Template, 2, 0, "p", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedEntite);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.entites);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.dateDebut);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFin);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedEntite || !ctx.dateDebut || !ctx.dateFin);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hasSearched && ctx.activites.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasSearched && ctx.activites.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HttpClientModule], styles: ["\n\n.table-reporting[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n  font-family: Arial, sans-serif;\n}\n.table-reporting[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table-reporting[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px;\n  text-align: left;\n}\n.table-reporting[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  font-weight: bold;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=reportinghebdo.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportinghebdoComponent, [{
    type: Component,
    args: [{ selector: "app-reportinghebdo", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="main-content">\r
  <div class="reportinghebdo-theme">\r
\r
    <h4 class="title">Reporting Hebdomadaire</h4>\r
\r
    <!-- Filtres -->\r
    <div class="filters">\r
\r
      <select class="form-select" [(ngModel)]="selectedEntite">\r
        <option [ngValue]="null">S\xE9lectionner une entit\xE9</option>\r
        <option *ngFor="let e of entites" [ngValue]="e.id">\r
          {{ e.nom }}\r
        </option>\r
      </select>\r
\r
      <input type="date" class="form-control" [(ngModel)]="dateDebut">\r
      <input type="date" class="form-control" [(ngModel)]="dateFin">\r
\r
      <button class="btn btn-primary" [disabled]="!selectedEntite || !dateDebut || !dateFin" (click)="loadActivites()">\r
        Rechercher\r
      </button>\r
\r
    </div>\r
  \r
    <!-- Tableau -->\r
    <div class="table-wrapper" *ngIf="hasSearched && activites.length > 0">\r
      <table class="table-reporting">\r
        <thead>\r
          <tr>\r
            <th>Nom</th>\r
            <th>Titre</th>\r
            <th>Date d\xE9but</th>\r
            <th>Date fin</th>\r
            <th>Statut</th>\r
            <th>Lieu</th>\r
            <th>Participants</th>\r
            <th>Cible</th>\r
          </tr>\r
        </thead>\r
\r
        <tbody>\r
          <tr *ngFor="let a of activites">\r
            <td>{{ a.nom }}</td>\r
            <td>{{ a.titre }}</td>\r
            <td>{{ a.dateDebut | date:'dd/MM/yyyy' }}</td>\r
            <td>{{ a.dateFin | date:'dd/MM/yyyy' }}</td>\r
            <td>{{ a.statut }}</td>\r
            <td>{{ a.lieu }}</td>\r
            <td>{{ a.objectifParticipation }}</td>\r
            <td>{{ a.cible }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Message si aucune activit\xE9 -->\r
    <p class="empty" *ngIf="hasSearched && activites.length === 0">\r
      Aucune activit\xE9 trouv\xE9e\r
    </p>\r
\r
  </div>\r
</div>\r
\r
\r
\r
\r
\r
`, styles: ["/* src/app/personnels/reportinghebdo/reportinghebdo.component.scss */\n.table-reporting {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n  font-family: Arial, sans-serif;\n}\n.table-reporting th,\n.table-reporting td {\n  border: 1px solid #ccc;\n  padding: 8px;\n  text-align: left;\n}\n.table-reporting th {\n  background-color: #f8f8f8;\n  font-weight: bold;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=reportinghebdo.component.css.map */\n"] }]
  }], () => [{ type: EntiteService }, { type: ReportingHebdoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportinghebdoComponent, { className: "ReportinghebdoComponent", filePath: "src/app/personnels/reportinghebdo/reportinghebdo.component.ts", lineNumber: 17 });
})();
export {
  ReportinghebdoComponent
};
//# sourceMappingURL=reportinghebdo.component-E3UBD2DF.js.map
