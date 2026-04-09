import {
  ToastrService
} from "./chunk-ZAPBGQMS.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZBB7M2N.js";
import "./chunk-KBUIKKCC.js";

// src/app/directeur-odc/validation-courriers-directeur/validation-courriers-directeur.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ValidationCourriersDirecteurComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ValidationCourriersDirecteurComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Aucun courrier \xE0 traiter.");
    \u0275\u0275elementEnd();
  }
}
function ValidationCourriersDirecteurComponent_Conditional_7_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "code", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "button", 9);
    \u0275\u0275listener("click", function ValidationCourriersDirecteurComponent_Conditional_7_For_13_Template_button_click_9_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectRow(r_r2));
    });
    \u0275\u0275text(10, "S\xE9lectionner");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-active", (ctx_r2.selected == null ? null : ctx_r2.selected.id) === r_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.objet);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.statut);
  }
}
function ValidationCourriersDirecteurComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "N\xB0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Objet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, ValidationCourriersDirecteurComponent_Conditional_7_For_13_Template, 11, 5, "tr", 7, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.rows);
  }
}
function ValidationCourriersDirecteurComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "strong");
    \u0275\u0275text(2, "Destinataire pr\xE9vu :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selected.destinataireOdc, "");
  }
}
function ValidationCourriersDirecteurComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13)(1, "strong");
    \u0275\u0275text(2, "Pr\xE9cision :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selected.externePrecision, "");
  }
}
function ValidationCourriersDirecteurComponent_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Derni\xE8re suggestion enregistr\xE9e : ", ctx_r2.selected.suggestionDirecteur, "");
  }
}
function ValidationCourriersDirecteurComponent_Conditional_8_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ValidationCourriersDirecteurComponent_Conditional_8_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.validerVersDcire());
    });
    \u0275\u0275text(1, "Valider le contenu");
    \u0275\u0275elementEnd();
  }
}
function ValidationCourriersDirecteurComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h6", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "p", 12)(5, "strong");
    \u0275\u0275text(6, "Objet :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12)(9, "strong");
    \u0275\u0275text(10, "Exp\xE9diteur (libell\xE9) :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ValidationCourriersDirecteurComponent_Conditional_8_Conditional_12_Template, 4, 1, "p", 12)(13, ValidationCourriersDirecteurComponent_Conditional_8_Conditional_13_Template, 4, 1, "p", 13);
    \u0275\u0275elementStart(14, "button", 14);
    \u0275\u0275listener("click", function ValidationCourriersDirecteurComponent_Conditional_8_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.telechargerPieceValidation());
    });
    \u0275\u0275text(15, " T\xE9l\xE9charger / consulter la pi\xE8ce jointe ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 15);
    \u0275\u0275text(17, " Consultez le contenu du courrier avant d\u2019envoyer des suggestions ou de valider la transmission. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ValidationCourriersDirecteurComponent_Conditional_8_Conditional_18_Template, 2, 1, "p", 16);
    \u0275\u0275elementStart(19, "label", 17);
    \u0275\u0275text(20, "Suggestions / remarques pour l\u2019admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ValidationCourriersDirecteurComponent_Conditional_8_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.suggestionText, $event) || (ctx_r2.suggestionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19)(23, "button", 20);
    \u0275\u0275listener("click", function ValidationCourriersDirecteurComponent_Conditional_8_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.envoyerSuggestion());
    });
    \u0275\u0275text(24, "Envoyer les suggestions \xE0 l\u2019admin");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ValidationCourriersDirecteurComponent_Conditional_8_Conditional_25_Template, 2, 0, "button", 21);
    \u0275\u0275elementStart(26, "button", 22);
    \u0275\u0275listener("click", function ValidationCourriersDirecteurComponent_Conditional_8_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.annuler());
    });
    \u0275\u0275text(27, "Archiver / annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Courrier ", ctx_r2.selected.numero, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selected.objet || "\u2014", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selected.expediteur || "\u2014", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selected.destinataireOdc ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selected.externePrecision ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.selected.suggestionDirecteur ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.suggestionText);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.peutValiderDcire(ctx_r2.selected) ? 25 : -1);
  }
}
var ValidationCourriersDirecteurComponent = class _ValidationCourriersDirecteurComponent {
  constructor(global, toast) {
    this.global = global;
    this.toast = toast;
    this.rows = [];
    this.loading = false;
    this.selected = null;
    this.suggestionText = "";
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.selected = null;
    this.suggestionText = "";
    this.global.getCourriersValidationDirecteurOdc().subscribe({
      next: (d) => {
        this.rows = Array.isArray(d) ? d : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error("Impossible de charger les courriers.");
      }
    });
  }
  selectRow(row) {
    this.selected = row;
    this.suggestionText = row?.suggestionDirecteur || "";
  }
  envoyerSuggestion() {
    if (!this.selected?.id) {
      return;
    }
    const t = (this.suggestionText || "").trim();
    if (!t) {
      this.toast.warning("Saisissez vos suggestions pour l\u2019admin.");
      return;
    }
    this.global.postCourrierSuggestionDirecteurOdc(this.selected.id, t).subscribe({
      next: () => {
        this.toast.success("Suggestions envoy\xE9es \xE0 l\u2019administrateur.");
        this.load();
      },
      error: () => this.toast.error("Envoi impossible.")
    });
  }
  validerVersDcire() {
    if (!this.selected?.id) {
      return;
    }
    this.global.postCourrierValiderTransmissionDcire(this.selected.id).subscribe({
      next: () => {
        this.toast.success("Courrier valid\xE9.");
        this.load();
      },
      error: () => this.toast.error("Validation impossible.")
    });
  }
  annuler() {
    if (!this.selected?.id) {
      return;
    }
    this.global.postCourrierAnnulerDirecteurOdc(this.selected.id).subscribe({
      next: () => {
        this.toast.success("Courrier archiv\xE9.");
        this.load();
      },
      error: () => this.toast.error("Action impossible.")
    });
  }
  peutValiderDcire(row) {
    const s = row?.statut;
    return s === "ATTENTE_VALIDATION_DIRECTEUR_ODC" || s === "ATTENTE_VALIDATION_ODC";
  }
  telechargerPieceValidation() {
    const id = this.selected?.id;
    if (id == null || !Number.isFinite(Number(id))) {
      return;
    }
    const numero = this.selected?.numero ?? "courrier";
    this.global.getCourrierFichierValidationDirecteurOdc(Number(id)).subscribe({
      next: (value) => {
        const blob = value.body;
        if (!blob) {
          return;
        }
        let filename = String(numero);
        const cd = value.headers?.get("content-disposition");
        if (cd) {
          const match = cd.match(/filename="(.+)"/);
          if (match?.[1]) {
            filename = match[1];
          }
        }
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => this.toast.error("T\xE9l\xE9chargement impossible (fichier absent ou \xE9tape non autoris\xE9e).")
    });
  }
  static {
    this.\u0275fac = function ValidationCourriersDirecteurComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ValidationCourriersDirecteurComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValidationCourriersDirecteurComponent, selectors: [["app-validation-courriers-directeur"]], decls: 9, vars: 2, consts: [[1, "main-content", "p-4"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "text-muted"], [1, "table-responsive", "mb-4"], [1, "card", "p-3"], [1, "table", "table-hover", "align-middle"], [3, "table-active"], [1, "small"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "mb-2"], [1, "border", "rounded", "p-3", "mb-3", "bg-light"], [1, "small", "mb-1"], [1, "small", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "mt-2", 3, "click"], [1, "small", "text-muted", "mt-2", "mb-0"], [1, "small", "text-muted", "mb-2"], [1, "form-label"], ["rows", "4", "placeholder", "D\xE9crivez les changements souhait\xE9s\u2026", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function ValidationCourriersDirecteurComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h4", 1);
        \u0275\u0275text(2, "Validation des courriers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, " Proposez des corrections ou validez le contenu avant envoi au destinataire. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ValidationCourriersDirecteurComponent_Conditional_5_Template, 2, 0, "p")(6, ValidationCourriersDirecteurComponent_Conditional_6_Template, 2, 0, "p", 3)(7, ValidationCourriersDirecteurComponent_Conditional_7_Template, 14, 0, "div", 4)(8, ValidationCourriersDirecteurComponent_Conditional_8_Template, 28, 8, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.loading ? 5 : ctx.rows.length === 0 ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected ? 8 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=validation-courriers-directeur.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationCourriersDirecteurComponent, [{
    type: Component,
    args: [{ selector: "app-validation-courriers-directeur", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="main-content p-4">\r
  <h4 class="mb-3">Validation des courriers</h4>\r
  <p class="text-muted mb-4">\r
    Proposez des corrections ou validez le contenu avant envoi au destinataire.\r
  </p>\r
\r
  @if (loading) {\r
    <p>Chargement\u2026</p>\r
  } @else if (rows.length === 0) {\r
    <p class="text-muted">Aucun courrier \xE0 traiter.</p>\r
  } @else {\r
    <div class="table-responsive mb-4">\r
      <table class="table table-hover align-middle">\r
        <thead>\r
          <tr>\r
            <th>N\xB0</th>\r
            <th>Objet</th>\r
            <th>Statut</th>\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (r of rows; track r.id) {\r
            <tr [class.table-active]="selected?.id === r.id">\r
              <td>{{ r.numero }}</td>\r
              <td>{{ r.objet }}</td>\r
              <td><code class="small">{{ r.statut }}</code></td>\r
              <td>\r
                <button type="button" class="btn btn-sm btn-outline-primary" (click)="selectRow(r)">S\xE9lectionner</button>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
\r
  @if (selected) {\r
    <div class="card p-3">\r
      <h6 class="mb-2">Courrier {{ selected.numero }}</h6>\r
      <div class="border rounded p-3 mb-3 bg-light">\r
        <p class="small mb-1"><strong>Objet :</strong> {{ selected.objet || '\u2014' }}</p>\r
        <p class="small mb-1"><strong>Exp\xE9diteur (libell\xE9) :</strong> {{ selected.expediteur || '\u2014' }}</p>\r
        @if (selected.destinataireOdc) {\r
          <p class="small mb-1"><strong>Destinataire pr\xE9vu :</strong> {{ selected.destinataireOdc }}</p>\r
        }\r
        @if (selected.externePrecision) {\r
          <p class="small mb-0"><strong>Pr\xE9cision :</strong> {{ selected.externePrecision }}</p>\r
        }\r
        <button type="button" class="btn btn-sm btn-outline-primary mt-2" (click)="telechargerPieceValidation()">\r
          T\xE9l\xE9charger / consulter la pi\xE8ce jointe\r
        </button>\r
        <p class="small text-muted mt-2 mb-0">\r
          Consultez le contenu du courrier avant d\u2019envoyer des suggestions ou de valider la transmission.\r
        </p>\r
      </div>\r
      @if (selected.suggestionDirecteur) {\r
        <p class="small text-muted mb-2">Derni\xE8re suggestion enregistr\xE9e : {{ selected.suggestionDirecteur }}</p>\r
      }\r
      <label class="form-label">Suggestions / remarques pour l\u2019admin</label>\r
      <textarea class="form-control mb-3" rows="4" [(ngModel)]="suggestionText" placeholder="D\xE9crivez les changements souhait\xE9s\u2026"></textarea>\r
      <div class="d-flex flex-wrap gap-2">\r
        <button type="button" class="btn btn-warning" (click)="envoyerSuggestion()">Envoyer les suggestions \xE0 l\u2019admin</button>\r
        @if (peutValiderDcire(selected)) {\r
          <button type="button" class="btn btn-success" (click)="validerVersDcire()">Valider le contenu</button>\r
        }\r
        <button type="button" class="btn btn-outline-secondary" (click)="annuler()">Archiver / annuler</button>\r
      </div>\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/directeur-odc/validation-courriers-directeur/validation-courriers-directeur.component.scss */\n/*# sourceMappingURL=validation-courriers-directeur.component.css.map */\n"] }]
  }], () => [{ type: GlobalService }, { type: ToastrService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValidationCourriersDirecteurComponent, { className: "ValidationCourriersDirecteurComponent", filePath: "src/app/directeur-odc/validation-courriers-directeur/validation-courriers-directeur.component.ts", lineNumber: 14 });
})();
export {
  ValidationCourriersDirecteurComponent
};
//# sourceMappingURL=validation-courriers-directeur.component-YNOL2EZ4.js.map
