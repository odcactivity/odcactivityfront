import {
  ActivityValidation
} from "./chunk-LH7JV6GF.js";
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
import "./chunk-ODGAOHOC.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgSelectOption,
  NgZone,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  Validators,
  ViewChild,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-EQOE5FII.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/core/models/Activity.ts
var Activity = class {
  constructor(data) {
    if (data) {
      Object.assign(this, data);
      this.etapes = Array.isArray(data.etapes) ? data.etapes : data.etapes ? [data.etapes] : [];
    }
  }
};

// src/app/personnels/activityvalidation/activityvalidation.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["validationModal"];
function ActivityvalidationComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.nom);
  }
}
function ActivityvalidationComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.lieu);
  }
}
function ActivityvalidationComponent_ng_template_44_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r4.statut, " ");
  }
}
function ActivityvalidationComponent_ng_template_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r4.statut, " ");
  }
}
function ActivityvalidationComponent_ng_template_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r4.statut, " ");
  }
}
function ActivityvalidationComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActivityvalidationComponent_ng_template_44_Conditional_0_Template, 2, 1, "div", 43)(1, ActivityvalidationComponent_ng_template_44_Conditional_1_Template, 2, 1, "div", 44)(2, ActivityvalidationComponent_ng_template_44_Conditional_2_Template, 2, 1, "div", 45);
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275conditional(row_r4.statut === "En_Cours" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.statut === "Termine" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.statut === "En_Attente" ? 2 : -1);
  }
}
function ActivityvalidationComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.objectifParticipation);
  }
}
function ActivityvalidationComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.entite == null ? null : row_r6.entite.nom);
  }
}
function ActivityvalidationComponent_ng_template_50_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, " Moi ");
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_50_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", row_r7.createdBy == null ? null : row_r7.createdBy.nom, " ", row_r7.createdBy == null ? null : row_r7.createdBy.prenom, " ");
  }
}
function ActivityvalidationComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActivityvalidationComponent_ng_template_50_span_0_Template, 2, 0, "span", 46)(1, ActivityvalidationComponent_ng_template_50_span_1_Template, 2, 2, "span", 47);
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (row_r7.createdBy == null ? null : row_r7.createdBy.id) === ctx_r7.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (row_r7.createdBy == null ? null : row_r7.createdBy.id) !== ctx_r7.currentUserId);
  }
}
function ActivityvalidationComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.salleId == null ? null : row_r9.salleId.nom);
  }
}
function ActivityvalidationComponent_ng_template_54_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_54_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const row_r11 = \u0275\u0275nextContext().row;
      const ctx_r7 = \u0275\u0275nextContext();
      const validationModal_r12 = \u0275\u0275reference(58);
      return \u0275\u0275resetView(ctx_r7.editRowValidation(row_r11, validationModal_r12));
    });
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_54_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_54_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r11 = \u0275\u0275nextContext().row;
      const ctx_r7 = \u0275\u0275nextContext();
      const editRecord_r14 = \u0275\u0275reference(56);
      return \u0275\u0275resetView(ctx_r7.editRow2(row_r11, editRecord_r14));
    });
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_54_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " Activit\xE9 n'a pas d'\xE9tapes. ");
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, ActivityvalidationComponent_ng_template_54_button_1_Template, 2, 0, "button", 48)(2, ActivityvalidationComponent_ng_template_54_button_2_Template, 2, 0, "button", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ActivityvalidationComponent_ng_template_54_div_3_Template, 2, 0, "div", 50);
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.useRole.includes("PERSONNEL") && ctx_r7.idsuperviseur === ctx_r7.currentUserId && ctx_r7.idsuperviseur !== null && row_r11.statut !== "Termine");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.useRole.includes("PERSONNEL"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r11.activitevalidation || row_r11.activitevalidation.length === 0);
  }
}
function ActivityvalidationComponent_ng_template_55_tr_46_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_55_tr_46_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const val_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.downloadOrOpenFile(val_r18.id));
    });
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_55_tr_46_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2014 ");
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_55_tr_46_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_55_tr_46_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const val_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.deleteValidation(val_r18.id));
    });
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_55_tr_46_Template(rf, ctx) {
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
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ActivityvalidationComponent_ng_template_55_tr_46_button_13_Template, 2, 0, "button", 67)(14, ActivityvalidationComponent_ng_template_55_tr_46_span_14_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, ActivityvalidationComponent_ng_template_55_tr_46_button_16_Template, 2, 0, "button", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const val_r18 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(val_r18.commentaire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(val_r18.statut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(val_r18.envoyeurId ? ctx_r7.envoyeurMap[val_r18.envoyeurId] : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(val_r18.superviseurId ? ctx_r7.superviseurMap[val_r18.superviseurId] : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, val_r18.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", val_r18.fichierjoint);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !val_r18.fichierjoint);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", val_r18.canDelete);
  }
}
function ActivityvalidationComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "h4", 57);
    \u0275\u0275text(2, " D\xE9tails de l\u2019activit\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 58);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_55_Template_button_click_3_listener() {
      const modal_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(modal_r16.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(4, "span", 59)(5, "i", 30);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 60)(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "Lieu :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p")(15, "strong");
    \u0275\u0275text(16, "Description :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p")(19, "strong");
    \u0275\u0275text(20, "Date :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "hr");
    \u0275\u0275elementStart(25, "h4", 61);
    \u0275\u0275text(26, "Validations associ\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 62)(28, "table", 63)(29, "thead")(30, "tr")(31, "th");
    \u0275\u0275text(32, "Commentaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Expediteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Superviseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Fichier joint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "tbody");
    \u0275\u0275template(46, ActivityvalidationComponent_ng_template_55_tr_46_Template, 17, 11, "tr", 64);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 65)(48, "button", 66);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_55_Template_button_click_48_listener() {
      const modal_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(modal_r16.dismiss());
    });
    \u0275\u0275text(49, "Fermer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.lieu, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.description, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(22, 6, ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.dateDebut), " \u2192 ", \u0275\u0275pipeBind1(23, 8, ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.dateFin), "");
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r7.selectedRowData == null ? null : ctx_r7.selectedRowData.activitevalidation);
  }
}
function ActivityvalidationComponent_ng_template_57_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 92);
    \u0275\u0275text(1, " La d\xE9cision est requise ");
    \u0275\u0275elementEnd();
  }
}
function ActivityvalidationComponent_ng_template_57_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r22 = ctx.$implicit;
    \u0275\u0275property("value", user_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r22.nom, " ", user_r22.prenom, " ");
  }
}
function ActivityvalidationComponent_ng_template_57_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "label");
    \u0275\u0275text(2, "Commentaire du superviseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 95);
    \u0275\u0275text(4, "                                  ");
    \u0275\u0275elementEnd()();
  }
}
function ActivityvalidationComponent_ng_template_57_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Fichier s\xE9lectionn\xE9 : ", ctx_r7.selectedFile.name, "");
  }
}
function ActivityvalidationComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "h5", 74);
    \u0275\u0275text(2, "Validation de l\u2019activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 75);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_57_Template_button_click_3_listener() {
      const modal_r21 = \u0275\u0275restoreView(_r20).$implicit;
      return \u0275\u0275resetView(modal_r21.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 76);
    \u0275\u0275listener("ngSubmit", function ActivityvalidationComponent_ng_template_57_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onValidate());
    });
    \u0275\u0275elementStart(5, "div", 60)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 77)(9, "label");
    \u0275\u0275text(10, "Titre :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 77)(14, "label");
    \u0275\u0275text(15, "Description :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 77)(19, "label");
    \u0275\u0275text(20, "Date :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "hr");
    \u0275\u0275elementStart(26, "div", 77)(27, "label");
    \u0275\u0275text(28, "D\xE9cision :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 78)(30, "option", 79);
    \u0275\u0275text(31, "-- Choisir --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 80);
    \u0275\u0275text(33, "Valider");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 81);
    \u0275\u0275text(35, "Rejeter");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, ActivityvalidationComponent_ng_template_57_small_36_Template, 2, 0, "small", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 83)(38, "label");
    \u0275\u0275text(39, "Superviseur / Valideur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 84);
    \u0275\u0275listener("change", function ActivityvalidationComponent_ng_template_57_Template_select_change_40_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onSuperviseurSelectedVal($event));
    });
    \u0275\u0275elementStart(41, "option", 79);
    \u0275\u0275text(42, "-- S\xE9lectionnez un superviseur --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, ActivityvalidationComponent_ng_template_57_option_43_Template, 2, 3, "option", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, ActivityvalidationComponent_ng_template_57_div_44_Template, 5, 0, "div", 86);
    \u0275\u0275elementStart(45, "div", 87)(46, "label", 88);
    \u0275\u0275text(47, "Fichier joint :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 89);
    \u0275\u0275listener("change", function ActivityvalidationComponent_ng_template_57_Template_input_change_48_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onFileSelectedVal($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, ActivityvalidationComponent_ng_template_57_div_49_Template, 3, 1, "div", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 65)(51, "button", 66);
    \u0275\u0275listener("click", function ActivityvalidationComponent_ng_template_57_Template_button_click_51_listener() {
      const modal_r21 = \u0275\u0275restoreView(_r20).$implicit;
      return \u0275\u0275resetView(modal_r21.dismiss());
    });
    \u0275\u0275text(52, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 91);
    \u0275\u0275text(54, " Enregistrer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r7.validationForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.titre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(23, 11, ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.dateDebut, "dd/MM/yyyy"), " -> ", \u0275\u0275pipeBind2(24, 14, ctx_r7.selectedActivite == null ? null : ctx_r7.selectedActivite.dateFin, "dd/MM/yyyy"), "");
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r7.validationForm.get("validation")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx_r7.validationForm.get("validation")) == null ? null : tmp_10_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r7.utilisateursPersonnels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.showCommentaire);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r7.selectedFile);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r7.validationForm.invalid);
  }
}
var ActivityvalidationComponent = class _ActivityvalidationComponent {
  //Constructeur
  constructor(zone, cdr, fb, modalService, toastr, glogalService, authService) {
    this.zone = zone;
    this.cdr = cdr;
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.authService = authService;
    this.rows = [];
    this.activite = [];
    this.activiteval = [];
    this.activitesEnAttente = [];
    this.activitevalidation = [];
    this.superviseurMap = {};
    this.envoyeurMap = {};
    this.entite = [];
    this.etape = [];
    this.salleId = [];
    this.typeActivites = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.validation = new ActivityValidation();
    this.utilisateursPersonnels = [];
    this.showCommentaire = false;
    this.selectedFile = null;
    this.activityValidation = new ActivityValidation();
    this.selectedActivite = new Activity();
    this.currentUserId = this.getCurrentUserId();
    this.canDelete = false;
    this.idsuperviseur = null;
    this.selectedEtapeIds = [];
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
      confirmButtonText: "Oui"
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
    this.getAllEntite();
    this.getAllActivite();
    this.getAllTypeActivite();
    this.getAllSalle();
    this.getAllUtilisateur();
    this.getMapSuperviseur();
    this.getMapEnvoyeur();
    this.getActivitesForSuperviseur();
    this.getCurrentUserId();
    this.reloadActivitieValidations();
    this.reloadActivities();
    currentUserId: this.getCurrentUserId();
  }
  // fetch data
  getAllUtilisateur() {
    this.loadingIndicator = true;
    this.glogalService.get("utilisateur").subscribe({
      next: (value) => {
        this.utilisateursPersonnels = value.filter((s) => s.id !== this.currentUserId);
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getMapSuperviseur() {
    this.glogalService.get("utilisateur").subscribe({
      next: (data) => {
        const filteredData = data;
        console.log("1SuperviseurMap charg\xE9e :", filteredData);
        this.superviseurMap = Object.fromEntries(filteredData.map((s) => [s.id, s.nom + "-" + s.prenom]));
        console.log("3SuperviseurMap charg\xE9e :", this.superviseurMap);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des superviseurs", err);
      }
    });
  }
  getMapEnvoyeur() {
    this.glogalService.get("utilisateur").subscribe({
      next: (data) => {
        this.envoyeurMap = Object.fromEntries(data.map((s) => [s.id, s.nom + "-" + s.prenom]));
      },
      error: (err) => {
        console.error("Erreur lors du chargement des senvoyer", err);
      }
    });
  }
  getAllActivite() {
    this.loadingIndicator = true;
    this.glogalService.get("activite").subscribe({
      next: (value) => {
        console.log("Activity:", value);
        this.activite = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get("entite").subscribe({
      next: (value) => {
        this.entite = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllSalle() {
    this.loadingIndicator = true;
    this.glogalService.get("salle").subscribe({
      next: (value) => {
        this.salleId = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllTypeActivite() {
    this.loadingIndicator = true;
    this.glogalService.get("typeActivite").subscribe({
      next: (value) => {
        this.typeActivites = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  onAddRowSaveValidation(form, value) {
    this.glogalService.createValidation(value).subscribe({
      next: (activite) => {
      }
    });
    error: (err) => {
      console.error("Erreur activit\xE9", err);
      this.loadingIndicator = false;
    };
  }
  onAddRowSave(form) {
    return __async(this, null, function* () {
      if (form.invalid)
        return;
      this.loadingIndicator = true;
      const activiteData = __spreadValues({}, form.value);
      this.glogalService.post("activite", activiteData).subscribe({
        next: (activite) => {
          console.log("Activite cr\xE9e ==", activite);
          if (form.value.fichierjoint) {
            this.activityValidation.fichierjoint = form.value.fichierjoint;
          }
          if (form.value.superviseurId) {
            const validation = {
              activiteId: activite.id,
              superviseurId: form.value.superviseurId,
              commentaire: form.value.commentaire || null,
              // facultatif
              statut: "En_Attente",
              fichierjoint: this.activityValidation.fichierjoint
              // facultatif
            };
            const fichier = form.value.fichier;
            this.glogalService.createValidation(validation, fichier, "DESIGNATION").subscribe({
              next: () => {
                this.addRecordSuccess();
                this.modalService.dismissAll();
                form.reset();
                this.reloadActivities();
              },
              error: (err) => console.error("Erreur validation", err),
              complete: () => this.loadingIndicator = false
            });
          } else {
            this.addRecordSuccess();
            this.modalService.dismissAll();
            form.reset();
            this.reloadActivities();
            this.loadingIndicator = false;
          }
        },
        error: (err) => {
          console.error("Erreur activit\xE9", err);
          this.loadingIndicator = false;
        }
      });
    });
  }
  downloadOrOpenFile(validationId, openInNewTab = false) {
    this.glogalService.getValidationFileResponse(validationId).subscribe({
      next: (resp) => {
        const blobf = resp.body;
        const contentDisp = resp.headers.get("content-disposition") || "";
        const match = /filename="?([^"]+)"?/.exec(contentDisp);
        const filename = match ? match[1] : "fichier.bin";
        const url = window.URL.createObjectURL(blobf);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error("Erreur t\xE9l\xE9chargement :", err)
    });
  }
  addSuccessMessage(duration = 3e3) {
    import_sweetalert2.default.fire({
      icon: "success",
      title: "Succ\xE8s",
      text: "L\u2019activit\xE9 a \xE9t\xE9 ajout\xE9e avec succ\xE8s !",
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true
    });
  }
  editSuccessMessage(duration = 3e3) {
    import_sweetalert2.default.fire({
      icon: "success",
      title: "Succ\xE8s",
      text: "L\u2019activit\xE9 a \xE9t\xE9 modifi\xE9e avec succ\xE8s !",
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true
    });
  }
  reloadActivities() {
    this.glogalService.get("activite").subscribe({
      next: (data) => {
        this.activite = data;
        this.loadingIndicator = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error("Erreur lors du rechargement des activit\xE9s :", err);
      }
    });
  }
  reloadActivitieValidations() {
    this.glogalService.get("activitevalidation").subscribe({
      next: (data) => {
        this.activitevalidation = data;
        this.loadingIndicator = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error("Erreur lors du rechargement des activit\xE9s :", err);
      }
    });
  }
  // add new record
  addRow(content) {
    this.getMapSuperviseur();
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
  }
  editRow(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    const etapes = Array.isArray(row.etapes) ? row.etapes : row.etapes ? [row.etapes] : [];
    this.selectedEtapeIds = etapes.map((e) => e.id);
    this.selectedRowData = row;
  }
  editRow2(row, editRecord) {
    this.selectedActivite = row;
    this.updateDeleteRights(row);
    this.modalService.open(editRecord, {
      ariaLabelledBy: "modal-basic-title"
    });
    this.selectedRowData = row;
    console.log("edit row", row);
  }
  editRowValidation(row, validationRecord) {
    this.selectedActivite = row;
    this.validationForm = this.fb.group({
      statut: ["", Validators.required],
      // Acceptee ou Rejetee
      superviseurId: [""],
      // Optionnel
      commentaire: [""],
      // Optionnel
      fichierjoint: [null]
      // Optionnel
    });
    this.modalService.open(this.validationModal, { size: "lg", centered: true });
  }
  // Save validation by activity
  onValidate() {
    if (this.validationForm.invalid) {
      this.validationForm.markAllAsTouched();
      return;
    }
    const fichierChiffre = this.selectedFile || null;
    const fichierjoint = this.selectedFile?.name || null;
    const validation = {
      envoyeurId: this.getCurrentUserId() || void 0,
      activiteId: this.selectedActivite?.id,
      statut: this.validationForm.value.statut,
      superviseurId: this.validationForm.value.superviseurId || void 0,
      commentaire: this.validationForm.value.commentaire || void 0,
      fichierjoint: fichierjoint || void 0,
      fichierChiffre: fichierChiffre || void 0
    };
    this.glogalService.createValidation(validation, fichierChiffre, "DESIGNATION").subscribe({
      next: () => {
        this.modalService.dismissAll();
        this.activiteval = this.activiteval.filter((act) => act.id !== this.selectedActivite?.id);
        this.activiteval = [...this.activiteval];
        this.editSuccessMessage(3e3);
      },
      error: (err) => console.error("Erreur validation :", err)
    });
  }
  onEditSave(form) {
    if (form?.value?.id) {
      const etapesObjects = (this.selectedEtapeIds || []).map((id) => ({ id }));
      const updatedActivite = __spreadProps(__spreadValues({}, form.value), {
        etapes: etapesObjects
      });
      this.glogalService.update("activite", updatedActivite.id, updatedActivite).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllActivite();
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
  onSuperviseurSelectedVal(event) {
    const superviseurId = event.target.value;
    if (superviseurId) {
      this.validationForm.patchValue({ superviseurId });
      this.showCommentaire = true;
    } else {
      this.showCommentaire = false;
      this.validationForm.patchValue({ superviseurId: null, commentaire: "" });
    }
  }
  onFileSelectedVal(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.validationForm.patchValue({ fichier: file });
      this.validationForm.get("fichier")?.updateValueAndValidity();
      console.log("Fichier s\xE9lectionn\xE9 :", file.name);
    }
  }
  // delete single row
  deleteSingleRow(row) {
    import_sweetalert2.default.fire({
      title: "Voulez vous vraiment supprimer?",
      showCancelButton: true,
      confirmButtonColor: "#8963ff",
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
  canDeleteValidation(validation, activite) {
    if (!this.activitevalidation?.length)
      return false;
    const sorted = [...this.activitevalidation].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const lastValidation = sorted[sorted.length - 1];
    return lastValidation.id === validation.id && validation.envoyeurId === this.getCurrentUserId();
  }
  updateDeleteRights(activite) {
    if (!activite?.activitevalidation?.length) {
      this.canDelete = false;
      return;
    }
    const validations = [...activite.activitevalidation].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const lastValidation = validations[validations.length - 1];
    const currentUserId = this.getCurrentUserId();
    activite.activitevalidation = validations.map((val) => {
      return __spreadProps(__spreadValues({}, val), {
        canDelete: val.id === lastValidation.id && val.envoyeurId === currentUserId
      });
    });
    this.canDelete = lastValidation.envoyeurId === currentUserId;
  }
  reloadModal() {
    this.cdr.detectChanges();
  }
  deleteValidation(valid) {
    import_sweetalert2.default.fire({
      title: "Confirmer la suppression de cette validation ?",
      showCancelButton: true,
      confirmButtonColor: "#8963ff",
      cancelButtonColor: "#fb7823",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler"
    }).then((result) => {
      if (result.value) {
        this.glogalService.delete("activitevalidation", valid).subscribe({
          next: () => {
            this.toastr.success("Validation supprim\xE9e avec succ\xE8s.", "");
            this.selectedRowData.activitevalidation = this.selectedRowData.activitevalidation.filter((v) => v.id !== valid);
            this.selectedRowData = __spreadValues({}, this.selectedRowData);
            this.updateDeleteRights(this.selectedRowData);
            this.cdr.markForCheck();
          }
        });
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
  // 🔹 toutes les activités où je suis superviseur
  getActivitesForSuperviseur() {
    const id = this.getCurrentUserId();
    if (id === null) {
      return;
    }
    this.glogalService.getActivitesBySuperviseur(id).subscribe({
      next: (data) => {
        this.activiteval = data;
        const allValidations = this.activiteval.flatMap((a) => a.activitevalidation);
        const validationForCurrentUser = allValidations.find((v) => v?.superviseurId === this.currentUserId);
        this.idsuperviseur = validationForCurrentUser?.superviseurId || null;
      },
      error: (err) => console.error("Erreur getActivitesBySuperviseur:", err)
    });
  }
  getActivitesEnAttenteForSuperviseur() {
    const id = this.getCurrentUserId();
    if (id === null) {
      console.error("ID utilisateur non trouv\xE9 dans le stockage local.");
      return;
    }
    this.glogalService.getActivitesEnAttenteBySuperviseur(id).subscribe({
      next: (data) => {
        this.activitesEnAttente = data;
        console.log("Activit\xE9s en attente :", data);
      },
      error: (err) => console.error("Erreur getActivitesEnAttenteBySuperviseur:", err)
    });
  }
  deleteRecord(row) {
    console.log("row to delete", row);
    this.loadingIndicator = true;
    console.log("row to delete", row);
    this.glogalService.delete("activite", row.id).subscribe({
      next: (response) => {
        import_sweetalert2.default.fire({
          icon: "success",
          title: "Supprim\xE9 !",
          text: "L'activit\xE9 a \xE9t\xE9 supprim\xE9e avec succ\xE8s.",
          timer: 2e3,
          showConfirmButton: false
        });
        this.getAllActivite();
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err) => {
        console.log("Erreur de suppression:", err);
        const msg = this.glogalService.extractMessageFromError(err);
        this.loadingIndicator = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Erreur de suppression",
          text: msg,
          confirmButtonText: "OK"
        });
      }
    });
  }
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    this.activite = this.filteredData.filter((item) => {
      return Object.values(item).some((field) => field?.toString().toLowerCase().includes(val));
    });
    this.table.offset = 0;
  }
  addRecordSuccess() {
    this.toastr.success("Adjout r\xE9alis\xE9 avec succ\xE8s.", "");
  }
  editRecordSuccess() {
    this.toastr.success("Modification op\xE9r\xE9", "");
  }
  deleteRecordSuccess(count) {
    this.toastr.error(count + "Suppresion faite avec succ\xE8s.", "");
  }
  static {
    this.\u0275fac = function ActivityvalidationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivityvalidationComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivityvalidationComponent, selectors: [["app-activityvalidation"]], viewQuery: function ActivityvalidationComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.validationModal = _t.first);
      }
    }, decls: 59, vars: 25, consts: [["table", ""], ["editRecord", ""], ["validationModal", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Rechercher", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], [1, "material-icons"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Lieu", 3, "width"], ["name", "Statut Demarrage", 3, "width"], ["name", "Objectif", 3, "width"], ["name", "Entite", 3, "width"], ["name", "Cr\xE9\xE9 par", 3, "width"], ["name", "Salle", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "name-col-style"], [1, "badge-outline", "col-green"], [1, "badge-outline", "col-red"], [1, "badge-outline", "col-indigo"], ["class", "badge-outline col-green", 4, "ngIf"], [4, "ngIf"], ["title", "Apporter une validation", "class", "btn btn-tbl-edit h-auto", 3, "click", 4, "ngIf"], ["title", "Voir les d\xE9tails", "class", "btn btn-tbl-edit h-auto", 3, "click", 4, "ngIf"], ["colspan", "7", "class", "text-danger", 4, "ngIf"], ["title", "Apporter une validation", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], ["title", "Voir les d\xE9tails", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-eye"], ["colspan", "7", 1, "text-danger"], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [2, "color", "orange"], [1, "table-responsive"], [1, "table", "table-sm", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["title", "T\xE9l\xE9charger le fichier joint", "class", "btn btn-tbl-dowload h-auto", "target", "_blank", "download", "", 3, "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm", "title", "Supprimer ma validation", 3, "click", 4, "ngIf"], ["title", "T\xE9l\xE9charger le fichier joint", "target", "_blank", "download", "", 1, "btn", "btn-tbl-dowload", "h-auto", 3, "click"], [1, "fas", "fa-download"], ["title", "Supprimer ma validation", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["enctype", "multipart/form-data", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["formControlName", "statut", 1, "form-select"], ["value", ""], ["value", "Valider"], ["value", "Rejeter"], ["class", "text-danger", 4, "ngIf"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "superviseurId", 1, "form-select", "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2", 4, "ngIf"], [1, "form-group", "mt-3"], ["for", "fichier"], ["type", "file", "id", "fichierjoint", "accept", ".pdf,.png,.jpg,.jpeg,.docx", 1, "form-control", 3, "change"], ["class", "mt-2 text-success", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-danger"], [3, "value"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["rows", "3", "placeholder", "Ajouter un commentaire...", "formControlName", "commentaire", 1, "form-control"], [1, "mt-2", "text-success"]], template: function ActivityvalidationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 3)(1, "ul", 4)(2, "li", 5)(3, "h5", 6);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 7)(6, "a", 8);
        \u0275\u0275element(7, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 5);
        \u0275\u0275text(9, "Validation Activit\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11, "Consultez et g\xE9rez les informations de cette section.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20);
        \u0275\u0275element(22, "div", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 22)(24, "div", 20)(25, "div", 23)(26, "div")(27, "label", 24)(28, "i", 25);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 26);
        \u0275\u0275listener("keyup", function ActivityvalidationComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 27)(32, "div", 28)(33, "button", 29);
        \u0275\u0275listener("click", function ActivityvalidationComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(34, "i", 30);
        \u0275\u0275text(35, "delete");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(36, "ngx-datatable", 31, 0);
        \u0275\u0275listener("select", function ActivityvalidationComponent_Template_ngx_datatable_select_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275element(38, "ngx-datatable-column", 32);
        \u0275\u0275elementStart(39, "ngx-datatable-column", 33);
        \u0275\u0275template(40, ActivityvalidationComponent_ng_template_40_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "ngx-datatable-column", 35);
        \u0275\u0275template(42, ActivityvalidationComponent_ng_template_42_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "ngx-datatable-column", 36);
        \u0275\u0275template(44, ActivityvalidationComponent_ng_template_44_Template, 3, 3, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "ngx-datatable-column", 37);
        \u0275\u0275template(46, ActivityvalidationComponent_ng_template_46_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ngx-datatable-column", 38);
        \u0275\u0275template(48, ActivityvalidationComponent_ng_template_48_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "ngx-datatable-column", 39);
        \u0275\u0275template(50, ActivityvalidationComponent_ng_template_50_Template, 2, 2, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "ngx-datatable-column", 40);
        \u0275\u0275template(52, ActivityvalidationComponent_ng_template_52_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "ngx-datatable-column", 41);
        \u0275\u0275template(54, ActivityvalidationComponent_ng_template_54_Template, 4, 3, "ng-template", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(55, ActivityvalidationComponent_ng_template_55_Template, 50, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(57, ActivityvalidationComponent_ng_template_57_Template, 55, 17, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275property("rows", ctx.activiteval)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", true);
        \u0275\u0275advance();
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 180);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("sortable", false);
      }
    }, dependencies: [NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnCellDirective, CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], styles: ['@charset "UTF-8";\n\n\n\n.btn-secondary[_ngcontent-%COMP%], \n.btn-secondary.disabled[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 6px rgb(125.5472103004, 134.8678111588, 143.1527896996);\n  background-color: #ff7900;\n  border-color: #fff;\n  color: #fff;\n}\n.btn-tbl-dowload[_ngcontent-%COMP%] {\n  background-color: #ff7900 !important;\n  height: 40px !important;\n  width: 40px !important;\n  margin: 15px !important;\n  line-height: 30px !important;\n  color: #fff;\n  border-radius: 50%;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  width: 600px !important;\n  background-color: #ff4000;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 120%;\n  background-color: aqua;\n}\n.modal-body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n  .modal-dialog {\n  max-width: 80% !important;\n}\n  .modal-body {\n  overflow-x: auto;\n  padding: 1.5rem;\n}\n  table {\n  width: 100%;\n  table-layout: auto;\n}\n/*# sourceMappingURL=activityvalidation.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityvalidationComponent, [{
    type: Component,
    args: [{ selector: "app-activityvalidation", imports: [NgxDatatableModule, CommonModule, ReactiveFormsModule, FormsModule], template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style ">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-home font-17"></i></a>
    </li>
    <li class="breadcrumb-item">Validation Activit\xE9</li>
  </ul>
  <p class="odl-page-subtitle">Consultez et g\xE9rez les informations de cette section.</p>
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
                          <input placeholder="Rechercher" type="text" class="browser-default search-field"
                                 (keyup)='filterDatatable($event)' aria-label="Search box">
                        </div>
                      </div>
                      <div class="header-buttons-left">
                        <div class="tbl-btn-style">
                          
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
            <ngx-datatable #table class="material" [rows]="activiteval" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
              <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">
              </ngx-datatable-column>
              <ngx-datatable-column [width]="150" name="Nom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
<!--              <ngx-datatable-column [width]="150" name="Titre">-->
<!--                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>-->
<!--                  <div class="name-col-style">-->
<!--                    <div>{{row.titre}}</div>-->
<!--                  </div>-->
<!--                </ng-template>-->
<!--              </ngx-datatable-column>-->
              <ngx-datatable-column [width]="150" name="Lieu">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.lieu}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
             
              <ngx-datatable-column [width]="150" name="Statut Demarrage">
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
<!--                  </div>-->
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="150" name="Objectif">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.objectifParticipation}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="150" name="Entite">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.entite?.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="180" name="Cr\xE9\xE9 par">
  <ng-template let-row="row" ngx-datatable-cell-template>
    <!-- Si c'est l'utilisateur connect\xE9 -->
    <span *ngIf="row.createdBy?.id === currentUserId" class="badge-outline col-green">
      Moi
    </span>

    <!-- Sinon afficher le nom -->
    <span *ngIf="row.createdBy?.id !== currentUserId">
      {{ row.createdBy?.nom }} {{ row.createdBy?.prenom }}
    </span>

  </ng-template>
    </ngx-datatable-column>
              <ngx-datatable-column [width]="150" name="Salle">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.salleId?.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column name="Actions" [sortable]="false">
                <ng-template let-value="value" let-row="row" let-rowIndex="rowIndex" ngx-datatable-cell-template>
                  <span>       
                     <!-- *ngIf="useRole.includes('PERSONNEL') && idsuperviseur===currentUserId && idsuperviseur!==null && row.statut==='En_Cours'"              -->
                    <button title="Apporter une validation"
                      *ngIf="useRole.includes('PERSONNEL') && idsuperviseur===currentUserId && idsuperviseur!==null && row.statut!=='Termine'"
                      class="btn btn-tbl-edit h-auto" (click)='editRowValidation(row,validationModal)'>
                      <i class="fas fa-pen"></i>
                    </button>
                    <button title="Voir les d\xE9tails"
                      *ngIf="useRole.includes('PERSONNEL')"
                      class="btn btn-tbl-edit h-auto" (click)='editRow2(row,editRecord)'>
                      <i class="fas fa-eye" ></i>
                    </button>           
              
                    <!-- <button 
                      *ngIf="useRole.includes('PERSONNEL')"
                      class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>
                      <i class="far fa-trash-alt"></i>
                    </button> -->
                  </span>
                  <!-- Message si aucune \xE9tape n'est disponible pour l'activit\xE9 -->
                  <div *ngIf="!row.activitevalidation || row.activitevalidation.length === 0" colspan="7" class="text-danger">
                    Activit\xE9 n'a pas d'\xE9tapes.
                  </div>
                </ng-template>
              </ngx-datatable-column>
            </ngx-datatable>
         <!-- Modal d\xE9tails -->
            <!-- <div class="modal-content">  -->
          <ng-template #editRecord let-modal >
                       
                <!-- <div class="modal-dialog modal-lg"> -->
                <div class="modal-header editRowModal">
                  <h4 class="modal-title" id="modal-basic-title">
                  D\xE9tails de l\u2019activit\xE9
                  </h4>
                  <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                    <span aria-hidden="true"><i class="material-icons">close</i></span>
                  </button>
                </div>

            <div class="modal-body">
              <h5>{{ selectedActivite?.nom }}</h5>
              <p><strong>Lieu :</strong> {{ selectedActivite?.lieu }}</p>
              <p><strong>Description :</strong> {{ selectedActivite?.description }}</p>
              <p><strong>Date :</strong> {{ selectedActivite?.dateDebut | date }} \u2192 {{ selectedActivite?.dateFin | date }}</p>
              <hr>
              <h4 style="color: orange;">Validations associ\xE9es</h4>
          <div class="table-responsive">   
              <table class="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Commentaire</th>
                    <th>Statut</th>
                    <th>Expediteur</th>
                    <th>Superviseur</th>
                    <th>Date</th>
                    <th>Fichier joint</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let val of selectedRowData?.activitevalidation">
                    <td >{{val.commentaire }}</td>
                    <td>{{ val.statut }}</td>
                    <td>{{ val.envoyeurId ? envoyeurMap[val.envoyeurId] : '\u2014'  }}</td>
                    <td>{{ val.superviseurId ? superviseurMap[val.superviseurId] : '\u2014' }}</td>
                    <td>{{ val.date | date: 'dd/MM/yyyy' }}</td>
                    <td>     
                        <button title="T\xE9l\xE9charger le fichier joint"
                                *ngIf="val.fichierjoint"
                                class="btn btn-tbl-dowload h-auto" (click)="downloadOrOpenFile(val.id!)" target="_blank" download>
                                <i class="fas fa-download" ></i>
                              </button>
                      <span *ngIf="!val.fichierjoint">  \u2014  </span>
                   
                    </td>
                  <td> <button *ngIf="val.canDelete"
                      class="btn btn-danger btn-sm"
                      (click)="deleteValidation(val.id!)"
                      title="Supprimer ma validation">
                      <i class="fas fa-trash"></i>
                    </button></td>
        
      
                    </tr>
                </tbody>
              </table>
              </div>
            </div>
<!-- </div> -->
<!-- </div> -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" (click)="modal.dismiss()">Fermer</button>
            </div>
            </ng-template>
            <!-- </div> -->
             <!-- Modal validation -->
              <ng-template #validationModal let-modal>
                <div class="modal-header">
                  <h5 class="modal-title">Validation de l\u2019activit\xE9</h5>
                  <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss()"></button>
                </div>

                <form [formGroup]="validationForm" (ngSubmit)="onValidate()" enctype="multipart/form-data">
                  <div class="modal-body">
                    <h5>{{ selectedActivite?.nom }}</h5>
                    <!-- D\xE9tails de l'activit\xE9 -->
                    <div class="mb-3">
                      <label>Titre :</label>
                      <div>{{ selectedActivite?.titre }}</div>
                    </div>

                    <div class="mb-3">
                      <label>Description :</label>
                      <div>{{ selectedActivite?.description }}</div>
                    </div>

                    <div class="mb-3">
                      <label>Date :</label>
                      <div>{{ selectedActivite?.dateDebut | date:'dd/MM/yyyy' }} -> {{ selectedActivite?.dateFin | date:'dd/MM/yyyy' }}</div>
                    </div>
                    <hr />

                    <!-- D\xE9cision -->
                    <div class="mb-3">
                      <label>D\xE9cision :</label>
                      <select class="form-select" formControlName="statut">
                        <option value="">-- Choisir --</option>
                        <option value="Valider">Valider</option>
                        <option value="Rejeter">Rejeter</option>
                      </select>
                      <small *ngIf="validationForm.get('validation')?.touched && validationForm.get('validation')?.invalid" class="text-danger">
                        La d\xE9cision est requise
                      </small>
                    </div>

                            <!-- Autre superviseur -->   
                                
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                  <label>Superviseur / Valideur</label>                    
                                  <select class="form-select form-control" formControlName="superviseurId" (change)="onSuperviseurSelectedVal($event)">
                                    <option value="">-- S\xE9lectionnez un superviseur --</option>
                                    <option *ngFor="let user of utilisateursPersonnels" [value]="user.id">
                                      {{ user.nom }} {{ user.prenom }}
                                    </option>
                                  </select>
                                </div>
              <!-- Commentaire -->
                                <div *ngIf="showCommentaire" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                                  <label>Commentaire du superviseur</label>
                                  <textarea class="form-control"
                                            rows="3"
                                            placeholder="Ajouter un commentaire..."
                                            formControlName="commentaire">
                                  </textarea>
                                </div>
                                <!-- file -->
                                <div class="form-group mt-3">
                                  <label for="fichier">Fichier joint :</label>
                                  <input 
                                    type="file"
                                    id="fichierjoint"
                                    (change)="onFileSelectedVal($event)"
                                    accept=".pdf,.png,.jpg,.jpeg,.docx"
                                    class="form-control"
                                  />
                
              </div>

                <div *ngIf="selectedFile" class="mt-2 text-success">
                  <small>Fichier s\xE9lectionn\xE9 : {{ selectedFile.name }}</small>
                </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" (click)="modal.dismiss()">Annuler</button>
                    <button type="submit" class="btn btn-primary" [disabled]="validationForm.invalid">
                      Enregistrer
                    </button>
                  </div>
                </form>
              </ng-template>

         <!-- fin -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

`, styles: ['@charset "UTF-8";\n\n/* src/app/personnels/activityvalidation/activityvalidation.component.scss */\n.btn-secondary,\n.btn-secondary.disabled {\n  box-shadow: 0 2px 6px rgb(125.5472103004, 134.8678111588, 143.1527896996);\n  background-color: #ff7900;\n  border-color: #fff;\n  color: #fff;\n}\n.btn-tbl-dowload {\n  background-color: #ff7900 !important;\n  height: 40px !important;\n  width: 40px !important;\n  margin: 15px !important;\n  line-height: 30px !important;\n  color: #fff;\n  border-radius: 50%;\n}\n.modal-lg {\n  width: 600px !important;\n  background-color: #ff4000;\n}\n.modal-dialog {\n  max-width: 120%;\n  background-color: aqua;\n}\n.modal-body {\n  background-color: #ffffff;\n}\n::ng-deep .modal-dialog {\n  max-width: 80% !important;\n}\n::ng-deep .modal-body {\n  overflow-x: auto;\n  padding: 1.5rem;\n}\n::ng-deep table {\n  width: 100%;\n  table-layout: auto;\n}\n/*# sourceMappingURL=activityvalidation.component.css.map */\n'] }]
  }], () => [{ type: NgZone }, { type: ChangeDetectorRef }, { type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: AuthService }], { table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], validationModal: [{
    type: ViewChild,
    args: ["validationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivityvalidationComponent, { className: "ActivityvalidationComponent", filePath: "src/app/personnels/activityvalidation/activityvalidation.component.ts", lineNumber: 28 });
})();
export {
  ActivityvalidationComponent
};
//# sourceMappingURL=activityvalidation.component-4LXF52OA.js.map
