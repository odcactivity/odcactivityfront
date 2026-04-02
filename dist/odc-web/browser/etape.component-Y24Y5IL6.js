import {
  AuthService
} from "./chunk-U5TEKHL2.js";
import {
  require_sweetalert2_all
} from "./chunk-Z35HYVNV.js";
import {
  ToastrService
} from "./chunk-V4K7YDLP.js";
import {
  NgbModal
} from "./chunk-YHX3XJBE.js";
import {
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DatatableComponent,
  NgxDatatableModule,
  SelectionType
} from "./chunk-ANWRCOCX.js";
import {
  GlobalService
} from "./chunk-WEK6BSLY.js";
import {
  Router,
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
  NgForm,
  NgIf,
  NgSelectOption,
  NgZone,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-EQOE5FII.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/etape/etape.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/personnels/etape/liste-globale/liste-globale.component.ts
var ListeGlobaleComponent = class _ListeGlobaleComponent {
  constructor(modalService, router) {
    this.modalService = modalService;
    this.router = router;
  }
  filterByDebut() {
    this.router.navigate(["/listeGlobale"], { queryParams: { filter: "debut" } });
    this.modalService.dismissAll();
  }
  filterByResultat() {
    this.router.navigate(["/listeGlobale"], { queryParams: { filter: "resultat" } });
    this.modalService.dismissAll();
  }
  filterByAll() {
    this.router.navigate(["/listeGlobale"], { queryParams: { filter: "all" } });
    this.modalService.dismissAll();
  }
  static {
    this.\u0275fac = function ListeGlobaleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListeGlobaleComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListeGlobaleComponent, selectors: [["app-liste-globale"]], decls: 15, vars: 0, consts: [[1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "material-icons"], [1, "modal-body"], ["type", "submit", 1, "btn", "btn-warning", "mr-3", 3, "click"], ["type", "submit", 1, "btn", "btn-dark", 2, "margin-left", "7px", 3, "click"]], template: function ListeGlobaleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, " Les listes des participants. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275listener("click", function ListeGlobaleComponent_Template_button_click_6_listener() {
          return ctx.modalService.dismissAll("Cross click");
        });
        \u0275\u0275elementStart(7, "span", 6)(8, "i", 7);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
        \u0275\u0275listener("click", function ListeGlobaleComponent_Template_button_click_11_listener() {
          return ctx.filterByDebut();
        });
        \u0275\u0275text(12, " Liste d\xE9but ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function ListeGlobaleComponent_Template_button_click_13_listener() {
          return ctx.filterByResultat();
        });
        \u0275\u0275text(14, " Liste r\xE9sultat ");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListeGlobaleComponent, [{
    type: Component,
    args: [{ selector: "app-liste-globale", imports: [], template: `<div class="modal-header editRowModal">\r
  <h4 class="modal-title" id="modal-basic-title">\r
    <div class="table-modal-header">\r
      <div class="modal-about">\r
        <div class="fw-bold p-t-10 font-17">\r
          Les listes des participants.\r
        </div>\r
      </div>\r
    </div>\r
  </h4>\r
  <button type="button" class="close" aria-label="Close" (click)="modalService.dismissAll('Cross click')">\r
    <span aria-hidden="true"><i class="material-icons">close</i></span>\r
  </button>\r
</div>\r
<div class="modal-body">\r
  <button type="submit" class="btn btn-warning mr-3" (click)='filterByDebut()'>\r
    Liste d\xE9but\r
  </button>\r
\r
  <button type="submit" class="btn btn-dark" style="margin-left: 7px" (click)='filterByResultat()'>\r
    Liste r\xE9sultat\r
  </button>\r
</div>\r
` }]
  }], () => [{ type: NgbModal }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListeGlobaleComponent, { className: "ListeGlobaleComponent", filePath: "src/app/personnels/etape/liste-globale/liste-globale.component.ts", lineNumber: 11 });
})();

// src/app/personnels/etape/etape.component.ts
var _c0 = ["listeModal"];
function EtapeComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function EtapeComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const addRecord_r4 = \u0275\u0275reference(50);
      return \u0275\u0275resetView(ctx_r2.addRow(addRecord_r4));
    });
    \u0275\u0275elementStart(1, "i", 35);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function EtapeComponent_ngx_datatable_column_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ngx-datatable-column", 43);
  }
  if (rf & 2) {
    \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", false);
  }
}
function EtapeComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.nom);
  }
}
function EtapeComponent_ng_template_46_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r6.statut, " ");
  }
}
function EtapeComponent_ng_template_46_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r6.statut, " ");
  }
}
function EtapeComponent_ng_template_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r6.statut, " ");
  }
}
function EtapeComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EtapeComponent_ng_template_46_Conditional_0_Template, 2, 1, "div", 45)(1, EtapeComponent_ng_template_46_Conditional_1_Template, 2, 1, "div", 46)(2, EtapeComponent_ng_template_46_Conditional_2_Template, 2, 1, "div", 47);
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275conditional(row_r6.statut === "En_Cours" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.statut === "Termine" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.statut === "En_Attente" ? 2 : -1);
  }
}
function EtapeComponent_ng_template_48_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_48_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r8 = \u0275\u0275nextContext();
      const row_r10 = ctx_r8.row;
      const rowIndex_r11 = ctx_r8.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const editRecord_r12 = \u0275\u0275reference(52);
      return \u0275\u0275resetView(ctx_r2.editRow(row_r10, rowIndex_r11, editRecord_r12));
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_48_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_48_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      const infoModal_r16 = \u0275\u0275reference(56);
      return \u0275\u0275resetView(ctx_r2.fileUpload(infoModal_r16, row_r10.id, row_r10.nom));
    });
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_48_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_48_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSingleRow(row_r10));
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_48_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_48_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openListeDebut(row_r10));
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_48_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_48_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByResultat(row_r10));
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, EtapeComponent_ng_template_48_button_1_Template, 2, 0, "button", 48);
    \u0275\u0275elementStart(2, "button", 49);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_48_Template_button_click_2_listener() {
      const ctx_r12 = \u0275\u0275restoreView(_r7);
      const row_r10 = ctx_r12.row;
      const rowIndex_r11 = ctx_r12.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const detailRecord_r14 = \u0275\u0275reference(54);
      return \u0275\u0275resetView(ctx_r2.detailRow(row_r10, rowIndex_r11, detailRecord_r14));
    });
    \u0275\u0275element(3, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EtapeComponent_ng_template_48_button_4_Template, 2, 0, "button", 51)(5, EtapeComponent_ng_template_48_button_5_Template, 2, 0, "button", 52)(6, EtapeComponent_ng_template_48_button_6_Template, 2, 0, "button", 53)(7, EtapeComponent_ng_template_48_button_7_Template, 2, 0, "button", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.useRole.includes("PERSONNEL") && ctx_r2.currentUserId === row_r10.created_by.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.useRole.includes("PERSONNEL") && ctx_r2.currentUserId === row_r10.created_by.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.useRole.includes("PERSONNEL") && ctx_r2.currentUserId === row_r10.created_by.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasListeDebut(row_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasListeResultat(row_r10));
  }
}
function EtapeComponent_ng_template_49_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275text(1, " Nom etape est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_49_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275text(1, " Date est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_49_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275text(1, " Date Fin est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_49_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activite_r22 = ctx.$implicit;
    \u0275\u0275property("value", activite_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activite_r22.nom);
  }
}
function EtapeComponent_ng_template_49_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "input", 89);
    \u0275\u0275listener("change", function EtapeComponent_ng_template_49_div_45_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCheckboxChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const criteres_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", criteres_r24.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(criteres_r24.libelle);
  }
}
function EtapeComponent_ng_template_49_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function EtapeComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h4")(2, "div", 64);
    \u0275\u0275text(3, " Ajouter une \xC9tape ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_49_Template_button_click_4_listener() {
      const modal_r21 = \u0275\u0275restoreView(_r20).$implicit;
      return \u0275\u0275resetView(modal_r21.dismiss());
    });
    \u0275\u0275elementStart(5, "span", 66)(6, "i", 35);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 67)(9, "form", 68);
    \u0275\u0275listener("ngSubmit", function EtapeComponent_ng_template_49_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAddRowSave(ctx_r2.register));
    });
    \u0275\u0275elementStart(10, "div", 18)(11, "div", 69)(12, "label");
    \u0275\u0275text(13, "Nom ");
    \u0275\u0275elementStart(14, "span", 70);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 71);
    \u0275\u0275template(17, EtapeComponent_ng_template_49_Conditional_17_Template, 2, 0, "small", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "div", 73)(20, "label");
    \u0275\u0275text(21, "Date D\xE9but ");
    \u0275\u0275elementStart(22, "span", 70);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 74);
    \u0275\u0275listener("change", function EtapeComponent_ng_template_49_Template_input_change_24_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateDebutChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, EtapeComponent_ng_template_49_Conditional_25_Template, 2, 0, "small", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 73)(27, "label");
    \u0275\u0275text(28, "Date Fin ");
    \u0275\u0275elementStart(29, "span", 70);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 75);
    \u0275\u0275template(32, EtapeComponent_ng_template_49_Conditional_32_Template, 2, 0, "small", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 76)(34, "label");
    \u0275\u0275text(35, "Activit\xE9...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 77)(37, "option", 78);
    \u0275\u0275text(38, "-- S\xE9lectionnez une activit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, EtapeComponent_ng_template_49_option_39_Template, 2, 2, "option", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 80)(41, "label", 81);
    \u0275\u0275text(42, "Critere ");
    \u0275\u0275elementStart(43, "span", 70);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, EtapeComponent_ng_template_49_div_45_Template, 4, 2, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 83)(47, "button", 84);
    \u0275\u0275template(48, EtapeComponent_ng_template_49_span_48_Template, 1, 0, "span", 85);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 86);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_49_Template_button_click_50_listener() {
      const modal_r21 = \u0275\u0275restoreView(_r20).$implicit;
      return \u0275\u0275resetView(modal_r21.close("Close click"));
    });
    \u0275\u0275text(51, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r2.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r2.register.get("nom")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r2.register.get("nom")) == null ? null : tmp_8_0.touched) ? 17 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r2.register.get("dateDebut")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r2.register.get("dateDebut")) == null ? null : tmp_9_0.touched) ? 25 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("min", ctx_r2.minDateFin);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_11_0.touched) ? 32 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.activites);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.critere);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.register.valid || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function EtapeComponent_ng_template_51_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275text(1, " Nom etape est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_51_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275text(1, " Date est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_51_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275text(1, " Date Fin est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EtapeComponent_ng_template_51_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activite_r27 = ctx.$implicit;
    \u0275\u0275property("value", activite_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activite_r27.nom);
  }
}
function EtapeComponent_ng_template_51_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "input", 99);
    \u0275\u0275listener("change", function EtapeComponent_ng_template_51_div_48_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCheckboxChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const criteres_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isCritereSelected(criteres_r29.id))("value", criteres_r29.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(criteres_r29.libelle);
  }
}
function EtapeComponent_ng_template_51_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function EtapeComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h4", 92);
    \u0275\u0275text(2, " Modification de l'etape: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 65);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_51_Template_button_click_5_listener() {
      const modal_r26 = \u0275\u0275restoreView(_r25).$implicit;
      return \u0275\u0275resetView(modal_r26.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(6, "span", 66)(7, "i", 35);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 67)(10, "form", 94);
    \u0275\u0275listener("ngSubmit", function EtapeComponent_ng_template_51_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditSave(ctx_r2.editForm));
    });
    \u0275\u0275elementStart(11, "div", 95);
    \u0275\u0275element(12, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "div", 69)(15, "label");
    \u0275\u0275text(16, "Nom ");
    \u0275\u0275elementStart(17, "span", 70);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 71);
    \u0275\u0275template(20, EtapeComponent_ng_template_51_Conditional_20_Template, 2, 0, "small", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 73)(23, "label");
    \u0275\u0275text(24, "Date D\xE9but ");
    \u0275\u0275elementStart(25, "span", 70);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 97);
    \u0275\u0275template(28, EtapeComponent_ng_template_51_Conditional_28_Template, 2, 0, "small", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 73)(30, "label");
    \u0275\u0275text(31, "Date Fin ");
    \u0275\u0275elementStart(32, "span", 70);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 98);
    \u0275\u0275template(35, EtapeComponent_ng_template_51_Conditional_35_Template, 2, 0, "small", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 76)(37, "label");
    \u0275\u0275text(38, "Activit\xE9...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 77)(40, "option", 78);
    \u0275\u0275text(41, "-- S\xE9lectionnez une activit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, EtapeComponent_ng_template_51_option_42_Template, 2, 2, "option", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 80)(44, "label", 81);
    \u0275\u0275text(45, "Critere ");
    \u0275\u0275elementStart(46, "span", 70);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, EtapeComponent_ng_template_51_div_48_Template, 4, 3, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 83)(50, "button", 84);
    \u0275\u0275template(51, EtapeComponent_ng_template_51_span_51_Template, 1, 0, "span", 85);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 86);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_51_Template_button_click_53_listener() {
      const modal_r26 = \u0275\u0275restoreView(_r25).$implicit;
      return \u0275\u0275resetView(modal_r26.close());
    });
    \u0275\u0275text(54, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedRowData.nom, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r2.register.get("nom")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r2.register.get("nom")) == null ? null : tmp_9_0.touched) ? 20 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_10_0 = ctx_r2.register.get("dateDebut")) == null ? null : tmp_10_0.valid) && ((tmp_10_0 = ctx_r2.register.get("dateDebut")) == null ? null : tmp_10_0.touched) ? 28 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_11_0.touched) ? 35 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.activites);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.critere);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.editForm.valid || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function EtapeComponent_ng_template_53_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activite_r32 = ctx.$implicit;
    \u0275\u0275property("value", activite_r32.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activite_r32.nom);
  }
}
function EtapeComponent_ng_template_53_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "input", 105);
    \u0275\u0275listener("change", function EtapeComponent_ng_template_53_div_37_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCheckboxChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const criteres_r34 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isCritereSelected(criteres_r34.id))("value", criteres_r34.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(criteres_r34.libelle);
  }
}
function EtapeComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h4", 92);
    \u0275\u0275text(2, " D\xE9tails de l'etape: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 65);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_53_Template_button_click_5_listener() {
      const modal_r31 = \u0275\u0275restoreView(_r30).$implicit;
      return \u0275\u0275resetView(modal_r31.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(6, "span", 66)(7, "i", 35);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 67)(10, "form", 100)(11, "div", 95);
    \u0275\u0275element(12, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "div", 69)(15, "label");
    \u0275\u0275text(16, "Nom ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "div", 73)(20, "label");
    \u0275\u0275text(21, "Date D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 73)(24, "label");
    \u0275\u0275text(25, "Date Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 76)(28, "label");
    \u0275\u0275text(29, "Activit\xE9...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 104)(31, "option", 78);
    \u0275\u0275text(32, "-- S\xE9lectionnez une activit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, EtapeComponent_ng_template_53_option_33_Template, 2, 2, "option", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 80)(35, "label", 81);
    \u0275\u0275text(36, "Critere");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, EtapeComponent_ng_template_53_div_37_Template, 4, 3, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 83)(39, "button", 86);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_53_Template_button_click_39_listener() {
      const modal_r31 = \u0275\u0275restoreView(_r30).$implicit;
      return \u0275\u0275resetView(modal_r31.close());
    });
    \u0275\u0275text(40, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedRowData.nom, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.editForm);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.activites);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.critere);
  }
}
function EtapeComponent_ng_template_55_div_17_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r37 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r37.name);
  }
}
function EtapeComponent_ng_template_55_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " Fichiers s\xE9lectionn\xE9s : ");
    \u0275\u0275elementStart(2, "ul");
    \u0275\u0275template(3, EtapeComponent_ng_template_55_div_17_li_3_Template, 2, 1, "li", 113);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.selectedFile);
  }
}
function EtapeComponent_ng_template_55_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function EtapeComponent_ng_template_55_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function EtapeComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h4", 93)(2, "div", 64)(3, "div", 106)(4, "div", 107);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "button", 65);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_55_Template_button_click_6_listener() {
      const modal_r36 = \u0275\u0275restoreView(_r35).$implicit;
      return \u0275\u0275resetView(modal_r36.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 66)(8, "i", 35);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 67)(11, "form")(12, "div", 18)(13, "div", 80)(14, "label");
    \u0275\u0275text(15, "S\xE9lectionnez un ou plusieurs fichiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 108);
    \u0275\u0275listener("change", function EtapeComponent_ng_template_55_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, EtapeComponent_ng_template_55_div_17_Template, 4, 1, "div", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 83)(19, "button", 110);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_55_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.uploadFiles(true));
    });
    \u0275\u0275template(20, EtapeComponent_ng_template_55_span_20_Template, 1, 0, "span", 85);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 111);
    \u0275\u0275listener("click", function EtapeComponent_ng_template_55_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.uploadFiles(false));
    });
    \u0275\u0275template(23, EtapeComponent_ng_template_55_span_23_Template, 1, 0, "span", 85);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Importer des Participants pour l'\xC9tape ", ctx_r2.currentEtapeNom, " ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.selectedFile && ctx_r2.selectedFile.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedFile || ctx_r2.selectedFile.length === 0 || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "importer liste d\xE9but", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedFile || ctx_r2.selectedFile.length === 0 || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "importer liste r\xE9sultat", " ");
  }
}
var EtapeComponent = class _EtapeComponent {
  constructor(fb, modalService, toastr, glogalService, ngZone, router, authService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.ngZone = ngZone;
    this.router = router;
    this.authService = authService;
    this.rows = [];
    this.etape = [];
    this.critere = [];
    this.activites = [];
    this.selectedCriteres = [];
    this.selectedFile = [];
    this.uploading = false;
    this.selectedEtapeId = null;
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.currentUserId = this.getCurrentUserId();
    this.minDateFin = null;
    this.columns = [
      { prop: "nom" },
      { prop: "dateDebut" },
      { prop: "dateFin" }
    ];
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      dateDebut: new UntypedFormControl(),
      dateFin: new UntypedFormControl(),
      critere: new UntypedFormControl(),
      activite: new UntypedFormControl()
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
    this.selection = SelectionType.checkbox;
    this.useRole = this.authService.getCurrentUserFromStorage().roles;
  }
  // select record using check box
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    if (this.selected.length === 0) {
      this.isRowSelected = false;
    } else {
      this.isRowSelected = true;
    }
  }
  deleteSelected() {
    import_sweetalert2.default.fire({
      title: "Voulez vous vraiment supprimer?",
      showCancelButton: true,
      confirmButtonColor: "#8963ff",
      cancelButtonColor: "#fb7823",
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
    }).then((result) => {
      if (result.value) {
        this.selected.forEach((row) => {
          this.deleteRecord(row);
        });
        this.deleteRecordSuccess(this.selected.length);
        this.selected = [];
        this.isRowSelected = false;
      }
    });
  }
  ngOnInit() {
    this.getAllEtape();
    this.getAllCritere();
    this.getAllActivite();
    this.register = this.fb.group({
      id: [""],
      nom: ["", [Validators.required]],
      dateDebut: ["", [Validators.required]],
      dateFin: ["", [Validators.required]],
      critere: this.fb.array([], [Validators.required]),
      activite: [null]
    });
  }
  // fetch data
  getAllCritere() {
    this.loadingIndicator = true;
    this.glogalService.get("critere").subscribe({
      next: (value) => {
        this.critere = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  onCheckboxChange(event) {
    const checkbox = event.target;
    const critereArray = this.register.get("critere");
    if (checkbox.checked) {
      critereArray.push(this.fb.control(checkbox.value));
    } else {
      const index = critereArray.controls.findIndex((control) => control.value === checkbox.value);
      critereArray.removeAt(index);
    }
  }
  getAllEtape() {
    this.loadingIndicator = true;
    this.glogalService.getByActivite("etape", "sansactivite").subscribe({
      next: (value) => {
        this.etape = value;
        console.log("etape========CONTENU", this.etape);
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllActivite() {
    this.loadingIndicator = true;
    this.glogalService.get("activite").subscribe({
      next: (value) => {
        this.activites = value.filter((a) => a.createdBy?.id === this.currentUserId);
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllActiviteAll() {
    this.loadingIndicator = true;
    this.glogalService.get("activite").subscribe({
      next: (value) => {
        this.activites = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
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
  onAddRowSave(form) {
    this.loadingIndicator = true;
    this.glogalService.postId("etape", this.currentUserId, form.value).subscribe({
      next: (response) => {
        if (Array.isArray(response) && response.length > 0) {
          this.etape.push(response[0]);
          this.etape = [...this.etape];
        } else if (response) {
          this.etape.push(response);
          this.etape = [...this.etape];
        }
        form.reset();
        this.modalService.dismissAll();
        this.getAllEtape();
        this.addRecordSuccess();
      },
      error: (err) => {
        console.error("Erreur re\xE7ue:", err);
        let message = "Une erreur est survenue. Veuillez r\xE9essayer.";
        let title = '<span class="text-red-500">\xC9chec</span>';
        if (err.error?.message) {
          message = err.error.message;
        } else if (err.message) {
          message = err.message;
        }
        import_sweetalert2.default.fire({
          icon: "error",
          title,
          text: message,
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: "bg-red-500 text-white hover:bg-red-600"
          }
        });
      },
      complete: () => {
        this.loadingIndicator = false;
      }
    });
  }
  // add new record
  addRow(content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
  }
  // edit record
  editRow(row, rowIndex, content) {
    this.getAllActivite();
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    this.editForm.patchValue({
      id: row.id,
      nom: row.nom,
      dateDebut: row.dateDebut,
      dateFin: row.dateFin,
      activite: row.activiteid
    });
    this.selectedCriteres = [];
    if (row.critere && Array.isArray(row.critere)) {
      this.selectedCriteres = row.critere.map((critere) => Number(critere.id));
    }
    const critereArray = this.register.get("critere");
    critereArray.clear();
    this.selectedRowData = row;
  }
  detailRow(row, rowIndex, content) {
    this.getAllActiviteAll();
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    this.editForm.patchValue({
      id: row.id,
      nom: row.nom,
      dateDebut: row.dateDebut,
      dateFin: row.dateFin,
      activite: row.activiteid
    });
    this.selectedCriteres = [];
    if (row.critere && Array.isArray(row.critere)) {
      this.selectedCriteres = row.critere.map((critere) => Number(critere.id));
    }
    const critereArray = this.register.get("critere");
    critereArray.clear();
    this.selectedRowData = row;
  }
  isCritereSelected(critereId) {
    return this.selectedCriteres.includes(critereId);
  }
  // delete single row
  deleteSingleRow(row) {
    import_sweetalert2.default.fire({
      title: "Voulez vous vraiment supprimer?",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#fb7823",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler"
    }).then((result) => {
      if (result.value) {
        this.deleteRecord(row);
        this.deleteRecordSuccess(1);
      }
    });
  }
  deleteRecord(row) {
    this.glogalService.delete("etape", row.id).subscribe({
      next: (response) => {
        this.etape = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllEtape();
      },
      error: (err) => {
        console.error("Erreur re\xE7ue:", err);
        let message = "Une erreur est survenue. Veuillez r\xE9essayer.";
        let title = '<span class="text-red-500">\xC9chec</span>';
        if (err.error?.message) {
          message = err.error.message;
        } else if (err.message) {
          message = err.message;
        }
        import_sweetalert2.default.fire({
          icon: "error",
          title,
          text: message,
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: "bg-red-500 text-white hover:bg-red-600"
          }
        });
      }
    });
  }
  onEditSave(form) {
    if (form?.value?.id) {
      const critereControl = this.register.get("critere");
      const updatedEtape = __spreadProps(__spreadValues({}, form.value), {
        critere: critereControl ? critereControl.value : []
        // Utiliser un tableau vide par défaut si le contrôle est null
      });
      console.log("Objet updatedEtape envoy\xE9 au backend:", updatedEtape);
      this.glogalService.updateId("etape", updatedEtape.id, this.currentUserId, updatedEtape).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllEtape();
        },
        error: (err) => {
          console.error("Erreur lors de la mise \xE0 jour :", err);
          let message = "Une erreur est survenue. Veuillez r\xE9essayer.";
          let title = '<span class="text-red-500">\xC9chec</span>';
          if (err.error?.message) {
            message = err.error.message;
          } else if (err.message) {
            message = err.message;
          }
          import_sweetalert2.default.fire({
            icon: "error",
            title,
            text: message,
            confirmButtonText: "Ok",
            customClass: {
              confirmButton: "bg-red-500 text-white hover:bg-red-600"
            }
          });
        }
      });
    }
  }
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    this.etape = this.filteredData.filter((item) => {
      return Object.values(item).some((field) => field?.toString().toLowerCase().includes(val));
    });
    this.table.offset = 0;
  }
  addRecordSuccess() {
    this.toastr.success("Adjout r\xE9alis\xE9 avec succ\xE8s", "");
  }
  editRecordSuccess() {
    this.toastr.success("Modification faite avec succ\xE8s", "");
  }
  deleteRecordSuccess(count) {
    this.toastr.success(count + "Suppression fait avec succ\xE8s", "");
  }
  fileUploadSuccess() {
    this.toastr.success("Fichier importer avec succ\xE8s");
  }
  fileUpload(content, etapeId, etapeNom) {
    this.selectedEtapeId = etapeId;
    this.currentEtapeNom = etapeNom;
    console.log("ID stock\xE9:", this.selectedEtapeId, "Nom stock\xE9:", this.currentEtapeNom);
    this.modalService.open(content, {
      ariaLabelledBy: "modal-info-title",
      size: "md"
    });
  }
  onFileSelected(event) {
    this.selectedFile = Array.from(event.target.files);
  }
  /*uploadFiles(toListeDebut: boolean): void {
      if (this.selectedEtapeId === null) {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'L\'ID de l\'étape n\'est pas défini.',
          confirmButtonText: 'Ok',
          customClass: { confirmButton: 'bg-red-500 text-white hover:bg-red-600' }
        });
        return;
      }
      if (this.selectedFile.length > 0) {
        this.loadingIndicator = true;
        const uploadPromises = this.selectedFile.map((file) =>
          firstValueFrom(this.glogalService.uploadParticipants(this.selectedEtapeId!, file, toListeDebut))
        );
  
        Promise.all(uploadPromises)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'Tous les fichiers ont été téléchargés avec succès.'
            });
            // Peut-être recharger les données ou fermer le modal ici
            this.modalService.dismissAll();
            this.selectedFile = [];
            this.loadingIndicator = false;
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Échec',
              text: 'Une erreur est survenue lors du téléchargement des fichiers.'
            });
            this.loadingIndicator = false;
          });
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Info',
          text: 'Veuillez sélectionner au moins un fichier avant de télécharger.',
          confirmButtonText: 'Ok',
          customClass: { confirmButton: 'bg-red-500 text-white hover:bg-red-600' }
        });
      }
    }*/
  uploadFiles(toListeDebut) {
    if (this.selectedEtapeId === null) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: "Erreur",
        text: "L'ID de l'\xE9tape n'est pas d\xE9fini.",
        confirmButtonText: "Ok",
        customClass: { confirmButton: "bg-red-500 text-white hover:bg-red-600" }
      });
      return;
    }
    if (this.selectedFile.length > 0) {
      this.loadingIndicator = true;
      const uploadPromises = this.selectedFile.map((file) => firstValueFrom(this.glogalService.uploadParticipants(this.selectedEtapeId, file, toListeDebut)));
      Promise.all(uploadPromises).then((responses) => {
        const res = responses[0];
        import_sweetalert2.default.fire({
          icon: "success",
          title: "Succ\xE8s",
          text: res.message || "Tous les fichiers ont \xE9t\xE9 t\xE9l\xE9charg\xE9s avec succ\xE8s."
        });
        this.modalService.dismissAll();
        this.selectedFile = [];
        this.loadingIndicator = false;
      }).catch((error) => {
        this.loadingIndicator = false;
        const errorMessage = error.message || "Une erreur est survenue lors du t\xE9l\xE9chargement des fichiers.";
        let iconType = "error";
        if (error.status === 403) {
          iconType = "warning";
        }
        import_sweetalert2.default.fire({
          icon: iconType,
          title: error.status === 403 ? "Action interdite" : "\xC9chec",
          text: errorMessage,
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: error.status === 403 ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-red-500 text-white hover:bg-red-600"
          }
        });
      });
    } else {
      import_sweetalert2.default.fire({
        icon: "info",
        title: "Info",
        text: "Veuillez s\xE9lectionner au moins un fichier avant de t\xE9l\xE9charger.",
        confirmButtonText: "Ok",
        customClass: { confirmButton: "bg-blue-500 text-white hover:bg-blue-600" }
      });
    }
  }
  liste() {
    this.modalService.open(ListeGlobaleComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "md"
    });
  }
  filterByDebut(row) {
    console.log("Navigating to listeGlobale with debut filter ID", row);
    this.router.navigate(["/listeGlobale"], { queryParams: { filter: "debut" } });
    this.modalService.dismissAll();
  }
  filterByResultat(row) {
    this.router.navigate(["/listeGlobale"], { queryParams: { filter: "resultat" } });
    this.modalService.dismissAll();
  }
  // openListeDebut(row: any) {
  //   console.log("Ouverture de la liste de début pour l'étape:", row.listeDebut[0].liste.id);
  //     sessionStorage.setItem('listeDebut', JSON.stringify(row.listeDebut[0].liste));
  //     this.router.navigate(['/listeDebut']);
  //   }
  openListeDebut(row) {
    const listeDebut = row.listes?.find((l) => l.listeDebut === true);
    if (!listeDebut) {
      console.error("Aucune liste de d\xE9but trouv\xE9e !");
      return;
    }
    console.log("Ouverture de la liste de d\xE9but, ID:", listeDebut.id);
    sessionStorage.setItem("listeDebut", JSON.stringify(listeDebut));
    this.router.navigate(["/listeDebut"]);
  }
  openListeResultat(row) {
    sessionStorage.setItem("listeResultat", JSON.stringify(row));
    this.router.navigate(["/listeResultat"]);
  }
  onDateDebutChange() {
    const dateDebutValue = this.register.get("dateDebut")?.value;
    if (dateDebutValue) {
      this.minDateFin = dateDebutValue;
      const dateFinValue = this.register.get("dateFin")?.value;
      if (dateFinValue && dateFinValue < dateDebutValue) {
        this.register.get("dateFin")?.setValue("");
      }
    } else {
      this.minDateFin = null;
    }
  }
  // filterByDebut(row:any): void {
  //    console.log("Filtrage par liste de début pour l'étape ID :", row.id);
  //     this.listeModalComponent?.filterByDebut();
  // }
  // filterByResultat(row:any): void {
  //     this.listeModalComponent?.filterByDebut();
  // } 
  hasListeDebut(row) {
    return row.listes?.some((l) => l.listeDebut) ?? false;
  }
  hasListeResultat(row) {
    return row.listes?.some((l) => l.listeResultat) ?? false;
  }
  static {
    this.\u0275fac = function EtapeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EtapeComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EtapeComponent, selectors: [["app-etape"]], viewQuery: function EtapeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listeModalComponent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 57, vars: 15, consts: [["table", ""], ["addRecord", ""], ["editRecord", ""], ["detailRecord", ""], ["infoModal", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], ["class", "btn btn-icon icon-left bg-warning text-white rounded-button", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", 3, "click"], [1, "fas", "fa-file"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], [1, "material-icons"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable", 4, "ngIf"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Statut", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], [1, "name-col-style"], [1, "badge-outline", "col-green"], [1, "badge-outline", "col-red"], [1, "badge-outline", "col-indigo"], ["class", "btn btn-tbl-edit h-auto", 3, "click", 4, "ngIf"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-eye"], ["class", "btn btn-tbl-edit h-auto", "title", "Importer des participants", 3, "click", 4, "ngIf"], ["class", "btn btn-tbl-delete h-auto", 3, "click", 4, "ngIf"], ["title", "Voir Liste de debut", "class", "btn btn-warning mr-3", 3, "click", 4, "ngIf"], ["title", "Voir liste de sortie", "class", "btn btn-dark", "style", "margin-left: 7px", 3, "click", 4, "ngIf"], [1, "fas", "fa-pen"], ["title", "Importer des participants", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-upload"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], ["title", "Voir Liste de debut", 1, "btn", "btn-warning", "mr-3", 3, "click"], [1, "far", "fa-file"], ["title", "Voir liste de sortie", 1, "btn", "btn-dark", 2, "margin-left", "7px", 3, "click"], [1, "modal-header", "editRowModal"], [1, "table-modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-12", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Nom etape", "formControlName", "nom", "required", "", 1, "form-control"], [1, "form-text", "text-danger"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["type", "date", "placeholder", "Date debut", "formControlName", "dateDebut", "required", "", 1, "form-control", 3, "change"], ["type", "date", "placeholder", "Date fin", "formControlName", "dateFin", "required", "", 1, "form-control", 3, "min"], [1, "col-xl-6", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "activite", 1, "form-select", "form-control"], ["value", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], [1, "d-block"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], [3, "value"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 3, "change", "value"], [1, "form-check-label"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "modal-basic-title1"], ["id", "modal-basic-title", 1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["type", "date", "placeholder", "Date debut", "formControlName", "dateDebut", "required", "", 1, "form-control"], ["type", "date", "placeholder", "Date fin", "formControlName", "dateFin", "required", "", 1, "form-control"], ["type", "checkbox", 3, "change", "checked", "value"], [3, "formGroup"], ["readonly", "", "type", "text", "placeholder", "Nom etape", "formControlName", "nom", 1, "form-control"], ["type", "date", "placeholder", "Date debut", "formControlName", "dateDebut", "readonly", "", 1, "form-control"], ["type", "date", "placeholder", "Date fin", "formControlName", "dateFin", "readonly", "", 1, "form-control"], ["formControlName", "activite", 1, "form-select", "form-control", "readonly-select"], ["type", "checkbox", 1, "readonly-select", 3, "change", "checked", "value"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], ["accept", ".csv, .xlsx", "multiple", "", "type", "file", 1, "form-control", 3, "change"], ["class", "mt-2 text-gray-600", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-warning", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-dark", 3, "click", "disabled"], [1, "mt-2", "text-gray-600"], ["class", "font-semibold", 4, "ngFor", "ngForOf"], [1, "font-semibold"]], template: function EtapeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 5)(1, "ul", 6)(2, "li", 7)(3, "h5", 8);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 9)(6, "a", 10);
        \u0275\u0275element(7, "i", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 7);
        \u0275\u0275text(9, "Etape");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 12);
        \u0275\u0275text(11, "G\xE9rez les \xE9tapes et suivez l\u2019avancement des activit\xE9s.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "div", 17)(17, "div", 18)(18, "div", 19)(19, "div", 20)(20, "div", 21)(21, "div", 22);
        \u0275\u0275element(22, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 24)(24, "div", 22)(25, "div", 25)(26, "div")(27, "label", 26)(28, "i", 27);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 28);
        \u0275\u0275listener("keyup", function EtapeComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 29)(32, "div", 30);
        \u0275\u0275template(33, EtapeComponent_button_33_Template, 3, 0, "button", 31);
        \u0275\u0275elementStart(34, "button", 32);
        \u0275\u0275listener("click", function EtapeComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.liste());
        });
        \u0275\u0275element(35, "i", 33);
        \u0275\u0275text(36, " Liste Globale ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 34);
        \u0275\u0275listener("click", function EtapeComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(38, "i", 35);
        \u0275\u0275text(39, "delete");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(40, "ngx-datatable", 36, 0);
        \u0275\u0275listener("select", function EtapeComponent_Template_ngx_datatable_select_40_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275template(42, EtapeComponent_ngx_datatable_column_42_Template, 1, 7, "ngx-datatable-column", 37);
        \u0275\u0275elementStart(43, "ngx-datatable-column", 38);
        \u0275\u0275template(44, EtapeComponent_ng_template_44_Template, 3, 1, "ng-template", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "ngx-datatable-column", 40);
        \u0275\u0275template(46, EtapeComponent_ng_template_46_Template, 3, 3, "ng-template", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ngx-datatable-column", 41);
        \u0275\u0275template(48, EtapeComponent_ng_template_48_Template, 8, 5, "ng-template", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(49, EtapeComponent_ng_template_49_Template, 52, 11, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(51, EtapeComponent_ng_template_51_Template, 55, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(53, EtapeComponent_ng_template_53_Template, 41, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(55, EtapeComponent_ng_template_55_Template, 25, 8, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275property("ngIf", ctx.useRole.includes("PERSONNEL"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275property("rows", ctx.etape)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.useRole.includes("PERSONNEL"));
        \u0275\u0275advance();
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("sortable", false);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgForm,
      NgForOf,
      NgIf,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnCellDirective,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterLink
    ], styles: ["\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#modal-basic-title[_ngcontent-%COMP%] {\n  color: orange;\n}\n.readonly-select[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  pointer-events: none;\n}\n/*# sourceMappingURL=etape.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EtapeComponent, [{
    type: Component,
    args: [{ selector: "app-etape", imports: [
      FormsModule,
      NgForOf,
      NgIf,
      NgxDatatableModule,
      ReactiveFormsModule,
      RouterLink
    ], standalone: true, template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style ">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-home font-17"></i></a>
    </li>
    <li class="breadcrumb-item">Etape</li>
  </ul>
  <p class="odl-page-subtitle">G\xE9rez les \xE9tapes et suivez l\u2019avancement des activit\xE9s.</p>
  <div class="section-body">
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="p-10">
            <div class="row">
              <div class="col-lg-6">
                <div class="row m-0">
                  <div class="col-auto p-0">
                    <div class="ngxTableHeader">
                      <div class="table-title">
                        <!--                        <h2><strong>Advance Table</strong></h2>-->
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8 p-0">
                    <div class="ngxTableHeader">
                      <div class="table-search-area">
                        <div>
                          <label for="search-input"><i class="material-icons search-icon">search</i></label>
                          <input placeholder="Recherche" type="text" class="browser-default search-field"
                                 (keyup)='filterDatatable($event)' aria-label="Search box">
                        </div>
                      </div>
                      <div class="header-buttons-left">
                        <div class="tbl-btn-style">
                          <button
                            *ngIf="useRole.includes('PERSONNEL')"
                            class="btn btn-icon icon-left bg-warning text-white rounded-button" (click)='addRow(addRecord)'>
                            <i class="material-icons">add</i>
                          </button>
                          <button class="btn btn-dark" (click)="liste()">
                            <i class="fas fa-file"></i>
                            Liste Globale
                          </button>
                          <button [hidden]=!isRowSelected class="btn btn-icon icon-left btn-danger rounded-button"
                                  (click)='deleteSelected()'>
                            <i class="material-icons">delete</i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ngx-datatable #table class="material" [rows]="etape" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
              <ngx-datatable-column *ngIf="useRole.includes('PERSONNEL')" [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="false">
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Nom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Statut">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  @if (row.statut === 'En_Cours') {
                    <div class="badge-outline col-green">{{row.statut}}
                    </div>
                  }
                  @if (row.statut === 'Termine') {
                    <div class="badge-outline col-red">{{row.statut}}
                    </div>
                  }
                  @if (row.statut === 'En_Attente') {
                    <div class="badge-outline col-indigo">{{row.statut}}
                    </div>
                  }
                </ng-template>
              </ngx-datatable-column>

              <!--              <ngx-datatable-column [width]="200" name="Date D\xE9but">-->
              <!--                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>-->
              <!--                  <div class="name-col-style">-->
              <!--                    <div>{{row.dateDebut}}</div>-->
              <!--                  </div>-->
              <!--                </ng-template>-->
              <!--              </ngx-datatable-column>-->
              <ngx-datatable-column name="Actions" [sortable]="false">
                <ng-template let-value="value" let-row="row" let-rowNom let-rowIndex="rowIndex" ngx-datatable-cell-template>
                  <span>
                    <button *ngIf="useRole.includes('PERSONNEL') && currentUserId===row.created_by.id" class="btn btn-tbl-edit h-auto" (click)='editRow(row, rowIndex, editRecord)'>
                      <i class="fas fa-pen"></i>
                    </button>
                        <button  class="btn btn-tbl-edit h-auto" (click)='detailRow(row, rowIndex, detailRecord)'>
                      <i class="fas fa-eye"></i>
                    </button>
                    <button
                      *ngIf="useRole.includes('PERSONNEL') && currentUserId===row.created_by.id"
                      class="btn btn-tbl-edit h-auto" (click)='fileUpload(infoModal, row.id, row.nom)'
                            title="Importer des participants">
                      <i class="fas fa-upload"></i>
                    </button>
                    <button *ngIf="useRole.includes('PERSONNEL') && currentUserId===row.created_by.id" class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>
                      <i class="far fa-trash-alt"></i>
                    </button>

               
  <button *ngIf="hasListeDebut(row)" title="Voir Liste de debut" class="btn btn-warning mr-3" (click)='openListeDebut(row)'>
     <i class="far fa-file"></i>
  </button>

  <button *ngIf="hasListeResultat(row)"  title="Voir liste de sortie" class="btn btn-dark" style="margin-left: 7px" (click)='filterByResultat(row)'>
     <i class="far fa-file"></i>
  </button>

                  </span>
                </ng-template>
              </ngx-datatable-column>
            </ngx-datatable>



            <!-- Add Record Modal Window -->
            <ng-template #addRecord let-modal>
              <div class="modal-header editRowModal">
              <h4> <div class="table-modal-header">
                        Ajouter une \xC9tape
                      </div></h4>              
             
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
                  <span aria-hidden="true"><i class="material-icons">close</i></span>
                </button>
              </div>
              <div class="modal-body">
                <form class="register-form" [formGroup]="register" (ngSubmit)="onAddRowSave(register)">
                  <div class="row">
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Nom etape" formControlName="nom"
                             required>
                      @if (!register.get('nom')?.valid && register.get('nom')?.touched) {
                        <small class="form-text text-danger"> Nom etape est obligatoire</small>
                      }
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date D\xE9but <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date debut" formControlName="dateDebut"
                           (change)="onDateDebutChange()" required>
                      @if (!register.get('dateDebut')?.valid && register.get('dateDebut')?.touched) {
                        <small class="form-text text-danger"> Date est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date Fin <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date fin" formControlName="dateFin"
                            [min]="minDateFin" required>
                      @if (!register.get('dateFin')?.valid && register.get('dateFin')?.touched) {
                        <small class="form-text text-danger"> Date Fin est obligatoire</small>
                      }
                    </div>
                  </div>
<!-- AJOUT ACTIVITE -->
<div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Activit\xE9...</label>
                      <select class="form-select form-control" formControlName="activite" >
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une activit\xE9 --</option>
                        <option *ngFor="let activite of activites"  [value]="activite.id">{{activite.nom}}</option>
                      </select>
                    </div>

<!--                  <div class="row">-->
                    <div class="form-group">
                      <label class="d-block">Critere <span class="text-danger">*</span></label>
                      <div *ngFor="let criteres of critere" class="form-check form-check-inline">
                        <input  type="checkbox" [value]="criteres.id" (change)="onCheckboxChange($event)">
                        <label class="form-check-label">{{ criteres.libelle }}</label>
                      </div>
                    </div>
<!--                  </div>-->

                  <div class="modal-footer">
                    <button type="submit" class="btn btn-warning" [disabled]="!register.valid || loadingIndicator">
                      <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      {{ loadingIndicator ? 'Chargement...' : 'Enregistre' }}
                    </button>

                    <button type="button" class="btn btn-dark text-white" (click)="modal.close('Close click')">Fermer</button>
                  </div>
                </form>
              </div>
            </ng-template>
            <!-- Edit Record Modal Window -->
            <ng-template #editRecord let-modal>
              <div class="modal-header editRowModal">
                <h4  id="modal-basic-title1">
                  Modification de l'etape:
                     
                </h4>
                <h4 class="modal-title" id="modal-basic-title">
                  <!-- <div class="table-modal-header"> -->
                    <!-- <div class="modal-about"> -->
                     <!-- <div class="fw-bold p-t-10 font-17"> -->
                       {{selectedRowData!.nom}}
                      <!-- </div> -->
                    <!-- </div> -->
                  <!-- </div> -->
                </h4>
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                  <span aria-hidden="true"><i class="material-icons">close</i></span>
                </button>
                
              </div>
              <div class="modal-body">
                <form [formGroup]="editForm" (ngSubmit)="onEditSave(editForm)">
                  <div class="input-field col s12 d-none">
                    <input formControlName="id" class="form-control" type="hidden">
                  </div>
                  <div class="row">
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Nom etape" formControlName="nom"
                             required>
                      @if (!register.get('nom')?.valid && register.get('nom')?.touched) {
                        <small class="form-text text-danger"> Nom etape est obligatoire</small>
                      }
                    </div>
                                                        
                  </div>

                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date D\xE9but <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date debut" formControlName="dateDebut"
                             required>
                      @if (!register.get('dateDebut')?.valid && register.get('dateDebut')?.touched) {
                        <small class="form-text text-danger"> Date est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date Fin <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date fin" formControlName="dateFin"
                             required>
                      @if (!register.get('dateFin')?.valid && register.get('dateFin')?.touched) {
                        <small class="form-text text-danger"> Date Fin est obligatoire</small>
                      }
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Activit\xE9...</label>
                      <select class="form-select form-control" formControlName="activite" >
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une activit\xE9 --</option>
                        <option *ngFor="let activite of activites"  [value]="activite.id">{{activite.nom}}</option>
                      </select>
                    </div>
                  <div class="form-group">
                    <label class="d-block">Critere <span class="text-danger">*</span></label>
                    <div *ngFor="let criteres of critere" class="form-check form-check-inline">
                      <input [checked]="isCritereSelected(criteres.id)"  type="checkbox" [value]="criteres.id" (change)="onCheckboxChange($event)">
                      <label class="form-check-label">{{ criteres.libelle }}</label>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <!-- [disabled]="!register.valid || loadingIndicator" a mettre dans bouton -->
                    <button type="submit" class="btn btn-warning" [disabled]="!editForm.valid || loadingIndicator">
                      <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      {{ loadingIndicator ? 'Chargement...' : 'Enregistre' }}
                    </button>
                    <button type="button" class="btn btn-dark text-white" (click)="modal.close()">Fermer</button>
                  </div>
                </form>
              </div>
            </ng-template>

             <!-- Detail Record Modal Window -->
            <ng-template #detailRecord let-modal>
              <div class="modal-header editRowModal">
                <h4  id="modal-basic-title1">
                  D\xE9tails de l'etape:                     
                </h4>
                <h4 class="modal-title" id="modal-basic-title">
                  <!-- <div class="table-modal-header"> -->
                    <!-- <div class="modal-about"> -->
                     <!-- <div class="fw-bold p-t-10 font-17"> -->
                       {{selectedRowData!.nom}}
                      <!-- </div> -->
                    <!-- </div> -->
                  <!-- </div> -->
                </h4>
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                  <span aria-hidden="true"><i class="material-icons">close</i></span>
                </button>
                
              </div>
              <div class="modal-body">
                <form [formGroup]="editForm" >
                  <div class="input-field col s12 d-none">
                    <input formControlName="id" class="form-control" type="hidden">
                  </div>
                  <div class="row">
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom </label>
                      <input readonly type="text" class="form-control" placeholder="Nom etape" formControlName="nom"
>                     
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date D\xE9but</label>
                      <input type="date" class="form-control" placeholder="Date debut" formControlName="dateDebut"
                             readonly>
                     
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date Fin</label>
                      <input type="date" class="form-control" placeholder="Date fin" formControlName="dateFin"
                             readonly>
                     
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Activit\xE9...</label>
                      <select class="form-select form-control readonly-select" formControlName="activite" >
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une activit\xE9 --</option>
                        <option *ngFor="let activite of activites"  [value]="activite.id">{{activite.nom}}</option>
                      </select>
                    </div>

                  <div class="form-group">
                    <label class="d-block">Critere</label>
                    <div *ngFor="let criteres of critere" class="form-check form-check-inline">
                      <input class="readonly-select" [checked]="isCritereSelected(criteres.id)"  type="checkbox" [value]="criteres.id" (change)="onCheckboxChange($event)">
                      <label class="form-check-label">{{ criteres.libelle }}</label>
                    </div>
                  </div>
                  <div class="modal-footer">                              
                    <button type="button" class="btn btn-dark text-white" (click)="modal.close()">Fermer</button>
                  </div>
                </form>
              </div>
            </ng-template>

            <ng-template #infoModal let-modal>
              <div class="modal-header editRowModal">
                <h4 class="modal-title" id="modal-basic-title">
                  <div class="table-modal-header">
                    <div class="modal-about">
                      <div class="fw-bold p-t-10 font-17">
                        Importer des Participants pour l'\xC9tape {{ currentEtapeNom }}
                      </div>
                    </div>
                  </div>
                </h4>
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                  <span aria-hidden="true"><i class="material-icons">close</i></span>
                </button>
              </div>
              <div class="modal-body">
                <form>
<!--                  <div class="input-field col s12 d-none">-->
<!--                    <input formControlName="id" class="form-control" type="hidden">-->
<!--                  </div>-->
                  <div class="row">
                    <div class="form-group">
                      <label>S\xE9lectionnez un ou plusieurs fichiers</label>
                      <input accept=".csv, .xlsx" multiple type="file" (change)="onFileSelected($event)" class="form-control">
                    </div>
                    <div *ngIf="selectedFile && selectedFile.length > 0" class="mt-2 text-gray-600">
                      Fichiers s\xE9lectionn\xE9s :
                      <ul>
                        <li *ngFor="let file of selectedFile" class="font-semibold">{{ file.name }}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="modal-footer">

                    <button type="submit" class="btn btn-warning" [disabled]="!selectedFile || selectedFile.length === 0 || loadingIndicator" (click)="uploadFiles(true)">
                      <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      {{ loadingIndicator ? 'Chargement...' : 'importer liste d\xE9but' }}
                    </button>

                    <button type="submit" class="btn btn-dark" [disabled]="!selectedFile || selectedFile.length === 0 || loadingIndicator" (click)="uploadFiles(false)">
                      <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      {{ loadingIndicator ? 'Chargement...' : 'importer liste r\xE9sultat' }}
                    </button>

<!--                    <button type="button" class="btn btn-dark text-white" (click)="modal.close()">Fermer</button>-->
                  </div>
                </form>
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  <app-liste-globale></app-liste-globale>-->
</section>

`, styles: ["/* src/app/personnels/etape/etape.component.scss */\n.material-icons {\n  font-size: 16px;\n}\n#modal-basic-title {\n  color: orange;\n}\n.readonly-select {\n  background-color: #e9ecef;\n  pointer-events: none;\n}\n/*# sourceMappingURL=etape.component.css.map */\n"] }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: NgZone }, { type: Router }, { type: AuthService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], listeModalComponent: [{
    type: ViewChild,
    args: ["listeModal"]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EtapeComponent, { className: "EtapeComponent", filePath: "src/app/personnels/etape/etape.component.ts", lineNumber: 44 });
})();
export {
  EtapeComponent
};
//# sourceMappingURL=etape.component-Y24Y5IL6.js.map
