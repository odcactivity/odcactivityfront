import {
  ToastrService
} from "./chunk-ZAPBGQMS.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import "./chunk-OFRCR7EK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-FZBB7M2N.js";
import "./chunk-KBUIKKCC.js";

// src/app/directeur-odc/validation-activites/validation-activites.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ValidationActivitesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ValidationActivitesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Aucune activit\xE9 en attente.");
    \u0275\u0275elementEnd();
  }
}
function ValidationActivitesComponent_Conditional_7_For_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", a_r2.createdBy == null ? null : a_r2.createdBy.prenom, " ", a_r2.createdBy == null ? null : a_r2.createdBy.nom, " ");
  }
}
function ValidationActivitesComponent_Conditional_7_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ValidationActivitesComponent_Conditional_7_For_15_Conditional_10_Template, 1, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 6)(12, "button", 7);
    \u0275\u0275listener("click", function ValidationActivitesComponent_Conditional_7_For_15_Template_button_click_12_listener() {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.valider(a_r2.id));
    });
    \u0275\u0275text(13, "Valider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 8);
    \u0275\u0275listener("click", function ValidationActivitesComponent_Conditional_7_For_15_Template_button_click_14_listener() {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejeter(a_r2.id));
    });
    \u0275\u0275text(15, "Refuser");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(5, 5, a_r2.dateDebut, "dd/MM/yyyy"), " \u2013 ", \u0275\u0275pipeBind2(6, 8, a_r2.dateFin, "dd/MM/yyyy"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r2.lieu);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r2.createdBy ? 10 : -1);
  }
}
function ValidationActivitesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 5)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Cr\xE9ateur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ValidationActivitesComponent_Conditional_7_For_15_Template, 16, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.rows);
  }
}
var ValidationActivitesComponent = class _ValidationActivitesComponent {
  constructor(global, toast) {
    this.global = global;
    this.toast = toast;
    this.rows = [];
    this.loading = false;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.global.get("activite/en-attente-validation-directeur-odc").subscribe({
      next: (d) => {
        this.rows = Array.isArray(d) ? d : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error("Impossible de charger les activit\xE9s en attente.");
      }
    });
  }
  valider(id) {
    if (id == null) {
      return;
    }
    this.global.post(`activite/${id}/valider-directeur-odc`, {}).subscribe({
      next: () => {
        this.toast.success("Activit\xE9 valid\xE9e. Les personnels ont \xE9t\xE9 notifi\xE9s.");
        this.load();
      },
      error: () => this.toast.error("Validation impossible.")
    });
  }
  rejeter(id) {
    if (id == null) {
      return;
    }
    this.global.post(`activite/${id}/rejeter-directeur-odc`, {}).subscribe({
      next: () => {
        this.toast.success("Activit\xE9 refus\xE9e. Le cr\xE9ateur a \xE9t\xE9 inform\xE9.");
        this.load();
      },
      error: () => this.toast.error("Refus impossible.")
    });
  }
  static {
    this.\u0275fac = function ValidationActivitesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ValidationActivitesComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValidationActivitesComponent, selectors: [["app-validation-activites"]], decls: 8, vars: 1, consts: [[1, "main-content", "p-4"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "text-muted"], [1, "table-responsive"], [1, "table", "table-striped", "align-middle"], [1, "text-end"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"]], template: function ValidationActivitesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h4", 1);
        \u0275\u0275text(2, "Validation des activit\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, " Validez ou refusez les activit\xE9s soumises. Un e-mail de notification est envoy\xE9 aux personnels concern\xE9s. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ValidationActivitesComponent_Conditional_5_Template, 2, 0, "p")(6, ValidationActivitesComponent_Conditional_6_Template, 2, 0, "p", 3)(7, ValidationActivitesComponent_Conditional_7_Template, 16, 0, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.loading ? 5 : ctx.rows.length === 0 ? 6 : 7);
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n\n/*# sourceMappingURL=validation-activites.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationActivitesComponent, [{
    type: Component,
    args: [{ selector: "app-validation-activites", standalone: true, imports: [CommonModule], template: `<section class="main-content p-4">\r
  <h4 class="mb-3">Validation des activit\xE9s</h4>\r
  <p class="text-muted mb-4">\r
    Validez ou refusez les activit\xE9s soumises. Un e-mail de notification est envoy\xE9 aux personnels concern\xE9s.\r
  </p>\r
\r
  @if (loading) {\r
    <p>Chargement\u2026</p>\r
  } @else if (rows.length === 0) {\r
    <p class="text-muted">Aucune activit\xE9 en attente.</p>\r
  } @else {\r
    <div class="table-responsive">\r
      <table class="table table-striped align-middle">\r
        <thead>\r
          <tr>\r
            <th>Nom</th>\r
            <th>Dates</th>\r
            <th>Lieu</th>\r
            <th>Cr\xE9ateur</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (a of rows; track a.id) {\r
            <tr>\r
              <td>{{ a.nom }}</td>\r
              <td>{{ a.dateDebut | date: 'dd/MM/yyyy' }} \u2013 {{ a.dateFin | date: 'dd/MM/yyyy' }}</td>\r
              <td>{{ a.lieu }}</td>\r
              <td>\r
                @if (a.createdBy) {\r
                  {{ a.createdBy?.prenom }} {{ a.createdBy?.nom }}\r
                }\r
              </td>\r
              <td class="text-end">\r
                <button type="button" class="btn btn-success btn-sm me-1" (click)="valider(a.id)">Valider</button>\r
                <button type="button" class="btn btn-outline-danger btn-sm" (click)="rejeter(a.id)">Refuser</button>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/directeur-odc/validation-activites/validation-activites.component.scss */\n/*# sourceMappingURL=validation-activites.component.css.map */\n"] }]
  }], () => [{ type: GlobalService }, { type: ToastrService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValidationActivitesComponent, { className: "ValidationActivitesComponent", filePath: "src/app/directeur-odc/validation-activites/validation-activites.component.ts", lineNumber: 13 });
})();
export {
  ValidationActivitesComponent
};
//# sourceMappingURL=validation-activites.component-XN4O5TVO.js.map
