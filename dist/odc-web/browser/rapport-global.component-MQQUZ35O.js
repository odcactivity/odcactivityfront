import {
  ToastrService
} from "./chunk-ZAPBGQMS.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZBB7M2N.js";
import "./chunk-KBUIKKCC.js";

// src/app/directeur-odc/rapport-global/rapport-global.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RapportGlobalComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.nom);
  }
}
function RapportGlobalComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2.nom);
  }
}
function RapportGlobalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5);
    \u0275\u0275text(2, "Mois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function RapportGlobalComponent_Conditional_34_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.mois, $event) || (ctx_r3.mois = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 7);
    \u0275\u0275text(5, "Janvier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 7);
    \u0275\u0275text(7, "F\xE9vrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 7);
    \u0275\u0275text(9, "Mars");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 7);
    \u0275\u0275text(11, "Avril");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 7);
    \u0275\u0275text(13, "Mai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 7);
    \u0275\u0275text(15, "Juin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 7);
    \u0275\u0275text(17, "Juillet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 7);
    \u0275\u0275text(19, "Ao\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 7);
    \u0275\u0275text(21, "Septembre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 7);
    \u0275\u0275text(23, "Octobre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 7);
    \u0275\u0275text(25, "Novembre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 7);
    \u0275\u0275text(27, "D\xE9cembre");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.mois);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 9);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 11);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 12);
  }
}
var RapportGlobalComponent = class _RapportGlobalComponent {
  constructor(http, global, toast) {
    this.http = http;
    this.global = global;
    this.toast = toast;
    this.entites = [];
    this.activites = [];
    this.entiteId = null;
    this.activiteId = null;
    this.annee = (/* @__PURE__ */ new Date()).getFullYear();
    this.mois = 1;
    this.periodeMode = "annee";
  }
  ngOnInit() {
    this.global.get("entite").subscribe({
      next: (list) => {
        this.entites = Array.isArray(list) ? list : [];
      },
      error: () => this.toast.error("Impossible de charger les entit\xE9s.")
    });
    this.global.get("activite").subscribe({
      next: (list) => {
        this.activites = (Array.isArray(list) ? list : []).map((a) => ({ id: a.id, nom: a.nom || "Sans nom" })).filter((a) => a.id != null);
      },
      error: () => {
      }
    });
  }
  buildParams() {
    let p = new HttpParams().set("annee", String(this.annee));
    if (this.periodeMode === "mois" && this.mois != null && this.mois >= 1 && this.mois <= 12) {
      p = p.set("mois", String(this.mois));
    }
    if (this.entiteId != null) {
      p = p.set("entiteId", String(this.entiteId));
    }
    if (this.activiteId != null) {
      p = p.set("activiteId", String(this.activiteId));
    }
    return p;
  }
  triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
  downloadCsv() {
    const url = `${environment.apiUrl}/api/rapport-global/activites.csv`;
    this.http.get(url, { params: this.buildParams(), responseType: "blob" }).subscribe({
      next: (blob) => this.triggerDownload(blob, "rapport_activites.csv"),
      error: () => this.toast.error("Export CSV impossible.")
    });
  }
  downloadPdf() {
    const url = `${environment.apiUrl}/api/rapport-global/activites.pdf`;
    this.http.get(url, { params: this.buildParams(), responseType: "blob" }).subscribe({
      next: (blob) => this.triggerDownload(blob, "rapport_activites.pdf"),
      error: () => this.toast.error("Export PDF impossible.")
    });
  }
  static {
    this.\u0275fac = function RapportGlobalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RapportGlobalComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RapportGlobalComponent, selectors: [["app-rapport-global"]], decls: 40, vars: 7, consts: [[1, "main-content", "p-4"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "row", "g-3", "mb-4"], [1, "col-md-4"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "number", "min", "2000", "max", "2100", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "annee"], ["value", "mois"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"]], template: function RapportGlobalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h4", 1);
        \u0275\u0275text(2, "Rapport global");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, " Filtrez par entit\xE9, activit\xE9 et p\xE9riode. Les brouillons et les refus sont exclus. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8, "Entit\xE9 (optionnel)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function RapportGlobalComponent_Template_select_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.entiteId, $event) || (ctx.entiteId = $event);
          return $event;
        });
        \u0275\u0275elementStart(10, "option", 7);
        \u0275\u0275text(11, "Toutes");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(12, RapportGlobalComponent_For_13_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 4)(15, "label", 5);
        \u0275\u0275text(16, "Activit\xE9 (optionnel)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function RapportGlobalComponent_Template_select_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.activiteId, $event) || (ctx.activiteId = $event);
          return $event;
        });
        \u0275\u0275elementStart(18, "option", 7);
        \u0275\u0275text(19, "Toutes les activit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(20, RapportGlobalComponent_For_21_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 4)(23, "label", 5);
        \u0275\u0275text(24, "Ann\xE9e");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function RapportGlobalComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.annee, $event) || (ctx.annee = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 4)(27, "label", 5);
        \u0275\u0275text(28, "P\xE9riode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function RapportGlobalComponent_Template_select_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.periodeMode, $event) || (ctx.periodeMode = $event);
          return $event;
        });
        \u0275\u0275elementStart(30, "option", 9);
        \u0275\u0275text(31, "Ann\xE9e compl\xE8te");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 10);
        \u0275\u0275text(33, "Un mois");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(34, RapportGlobalComponent_Conditional_34_Template, 28, 13, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 11)(36, "button", 12);
        \u0275\u0275listener("click", function RapportGlobalComponent_Template_button_click_36_listener() {
          return ctx.downloadCsv();
        });
        \u0275\u0275text(37, "T\xE9l\xE9charger CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 13);
        \u0275\u0275listener("click", function RapportGlobalComponent_Template_button_click_38_listener() {
          return ctx.downloadPdf();
        });
        \u0275\u0275text(39, "T\xE9l\xE9charger PDF");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.entiteId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.entites);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.activiteId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.activites);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.annee);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.periodeMode);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.periodeMode === "mois" ? 34 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n/*# sourceMappingURL=rapport-global.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RapportGlobalComponent, [{
    type: Component,
    args: [{ selector: "app-rapport-global", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="main-content p-4">\r
  <h4 class="mb-3">Rapport global</h4>\r
  <p class="text-muted mb-4">\r
    Filtrez par entit\xE9, activit\xE9 et p\xE9riode. Les brouillons et les refus sont exclus.\r
  </p>\r
\r
  <div class="row g-3 mb-4">\r
    <div class="col-md-4">\r
      <label class="form-label">Entit\xE9 (optionnel)</label>\r
      <select class="form-select" [(ngModel)]="entiteId">\r
        <option [ngValue]="null">Toutes</option>\r
        @for (e of entites; track e.id) {\r
          <option [ngValue]="e.id">{{ e.nom }}</option>\r
        }\r
      </select>\r
    </div>\r
    <div class="col-md-4">\r
      <label class="form-label">Activit\xE9 (optionnel)</label>\r
      <select class="form-select" [(ngModel)]="activiteId">\r
        <option [ngValue]="null">Toutes les activit\xE9s</option>\r
        @for (a of activites; track a.id) {\r
          <option [ngValue]="a.id">{{ a.nom }}</option>\r
        }\r
      </select>\r
    </div>\r
    <div class="col-md-4">\r
      <label class="form-label">Ann\xE9e</label>\r
      <input type="number" class="form-control" [(ngModel)]="annee" min="2000" max="2100" />\r
    </div>\r
    <div class="col-md-4">\r
      <label class="form-label">P\xE9riode</label>\r
      <select class="form-select" [(ngModel)]="periodeMode">\r
        <option value="annee">Ann\xE9e compl\xE8te</option>\r
        <option value="mois">Un mois</option>\r
      </select>\r
    </div>\r
    @if (periodeMode === 'mois') {\r
      <div class="col-md-4">\r
        <label class="form-label">Mois</label>\r
        <select class="form-select" [(ngModel)]="mois">\r
          <option [ngValue]="1">Janvier</option>\r
          <option [ngValue]="2">F\xE9vrier</option>\r
          <option [ngValue]="3">Mars</option>\r
          <option [ngValue]="4">Avril</option>\r
          <option [ngValue]="5">Mai</option>\r
          <option [ngValue]="6">Juin</option>\r
          <option [ngValue]="7">Juillet</option>\r
          <option [ngValue]="8">Ao\xFBt</option>\r
          <option [ngValue]="9">Septembre</option>\r
          <option [ngValue]="10">Octobre</option>\r
          <option [ngValue]="11">Novembre</option>\r
          <option [ngValue]="12">D\xE9cembre</option>\r
        </select>\r
      </div>\r
    }\r
  </div>\r
\r
  <div class="d-flex flex-wrap gap-2">\r
    <button type="button" class="btn btn-outline-primary" (click)="downloadCsv()">T\xE9l\xE9charger CSV</button>\r
    <button type="button" class="btn btn-outline-danger" (click)="downloadPdf()">T\xE9l\xE9charger PDF</button>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/directeur-odc/rapport-global/rapport-global.component.scss */\n/*# sourceMappingURL=rapport-global.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: GlobalService }, { type: ToastrService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RapportGlobalComponent, { className: "RapportGlobalComponent", filePath: "src/app/directeur-odc/rapport-global/rapport-global.component.ts", lineNumber: 17 });
})();
export {
  RapportGlobalComponent
};
//# sourceMappingURL=rapport-global.component-MQQUZ35O.js.map
