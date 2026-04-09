import {
  ActivityValidation
} from "./chunk-LH7JV6GF.js";
import {
  FullCalendarModule
} from "./chunk-N2JNPUUS.js";
import {
  filterEntitesOdcPiliers
} from "./chunk-WPI52N3A.js";
import "./chunk-MDA6RONO.js";
import {
  AuthService
} from "./chunk-Y5HKWOK4.js";
import {
  require_sweetalert2_all
} from "./chunk-Z35HYVNV.js";
import {
  ToastrService
} from "./chunk-ZAPBGQMS.js";
import {
  NgbModal
} from "./chunk-OTYE7C6R.js";
import {
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DatatableComponent,
  NgxDatatableModule,
  SelectionType
} from "./chunk-SZISJO2U.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import {
  RouterLink
} from "./chunk-M24KWC6L.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  SelectMultipleControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  ChangeDetectorRef,
  Component,
  NgForOf,
  NgIf,
  NgZone,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-FZBB7M2N.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/activity/activity.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ActivityComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ActivityComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const addRecord_r4 = \u0275\u0275reference(58);
      return \u0275\u0275resetView(ctx_r2.addRow(addRecord_r4));
    });
    \u0275\u0275elementStart(1, "i", 32);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function ActivityComponent_ng_template_40_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 46);
    \u0275\u0275listener("change", function ActivityComponent_ng_template_40_input_0_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const row_r6 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSelection(row_r6, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r2.isSelected(row_r6));
  }
}
function ActivityComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActivityComponent_ng_template_40_input_0_Template, 1, 1, "input", 45);
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (row_r6.createdBy == null ? null : row_r6.createdBy.id) === ctx_r2.currentUserId);
  }
}
function ActivityComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.nom);
  }
}
function ActivityComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.lieu);
  }
}
function ActivityComponent_ng_template_46_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r9.statut, " ");
  }
}
function ActivityComponent_ng_template_46_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r9.statut, " ");
  }
}
function ActivityComponent_ng_template_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r9.statut, " ");
  }
}
function ActivityComponent_ng_template_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.statut);
  }
}
function ActivityComponent_ng_template_46_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.statut);
  }
}
function ActivityComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActivityComponent_ng_template_46_Conditional_0_Template, 2, 1, "div", 48)(1, ActivityComponent_ng_template_46_Conditional_1_Template, 2, 1, "div", 49)(2, ActivityComponent_ng_template_46_Conditional_2_Template, 2, 1, "div", 50)(3, ActivityComponent_ng_template_46_Conditional_3_Template, 2, 1, "div", 51)(4, ActivityComponent_ng_template_46_Conditional_4_Template, 2, 1, "div", 49);
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    \u0275\u0275conditional(row_r9.statut === "En_Cours" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.statut === "Termine" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.statut === "En_Attente" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.statut === "En_Validation_Directeur_ODC" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.statut === "Rejetee" ? 4 : -1);
  }
}
function ActivityComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.objectifParticipation);
  }
}
function ActivityComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.entite == null ? null : row_r11.entite.nom);
  }
}
function ActivityComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.salleId == null ? null : row_r12.salleId.nom);
  }
}
function ActivityComponent_ng_template_54_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, " Moi ");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_54_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", row_r13.createdBy == null ? null : row_r13.createdBy.nom, " ", row_r13.createdBy == null ? null : row_r13.createdBy.prenom, " ");
  }
}
function ActivityComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActivityComponent_ng_template_54_span_0_Template, 2, 0, "span", 52)(1, ActivityComponent_ng_template_54_span_1_Template, 2, 2, "span", 53);
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (row_r13.createdBy == null ? null : row_r13.createdBy.id) === ctx_r2.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (row_r13.createdBy == null ? null : row_r13.createdBy.id) !== ctx_r2.currentUserId);
  }
}
function ActivityComponent_ng_template_56_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_56_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r19 = \u0275\u0275nextContext();
      const row_r16 = ctx_r19.row;
      const rowIndex_r17 = ctx_r19.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const editRecord_r21 = \u0275\u0275reference(60);
      return \u0275\u0275resetView(ctx_r2.editRow(row_r16, rowIndex_r17, editRecord_r21));
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_56_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_56_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r16 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSingleRow(row_r16));
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_56_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Activit\xE9 n'a pas d'\xE9tapes. ");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 54);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_56_Template_button_click_1_listener() {
      const ctx_r14 = \u0275\u0275restoreView(_r14);
      const row_r16 = ctx_r14.row;
      const rowIndex_r17 = ctx_r14.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const detailRecord_r18 = \u0275\u0275reference(62);
      return \u0275\u0275resetView(ctx_r2.detailRow(row_r16, rowIndex_r17, detailRecord_r18));
    });
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ActivityComponent_ng_template_56_button_3_Template, 2, 0, "button", 56)(4, ActivityComponent_ng_template_56_button_4_Template, 2, 0, "button", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ActivityComponent_ng_template_56_div_5_Template, 2, 0, "div", 58);
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.useRole.includes("PERSONNEL") && row_r16.createdBy.id === ctx_r2.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.useRole.includes("PERSONNEL") && row_r16.createdBy.id === ctx_r2.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r16.etapes || row_r16.etapes.length === 0);
  }
}
function ActivityComponent_ng_template_57_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Nom activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Titre activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Lieu activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Description est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Objectif est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Date est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Date Fin est obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " La date fin ne peut pas \xEAtre ant\xE9rieure \xE0 la date d\xE9but.");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_57_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entite_r25 = ctx.$implicit;
    \u0275\u0275property("value", entite_r25.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entite_r25.nom);
  }
}
function ActivityComponent_ng_template_57_option_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const salles_r26 = ctx.$implicit;
    \u0275\u0275property("value", salles_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(salles_r26.nom);
  }
}
function ActivityComponent_ng_template_57_option_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const typeActivite_r27 = ctx.$implicit;
    \u0275\u0275property("value", typeActivite_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(typeActivite_r27.type);
  }
}
function ActivityComponent_ng_template_57_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Fichier s\xE9lectionn\xE9 : ", ctx_r2.selectedFile.name, "");
  }
}
function ActivityComponent_ng_template_57_span_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 95);
  }
}
function ActivityComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "button", 64);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_57_Template_button_click_1_listener() {
      const modal_r24 = \u0275\u0275restoreView(_r23).$implicit;
      return \u0275\u0275resetView(modal_r24.dismiss());
    });
    \u0275\u0275elementStart(2, "span", 65)(3, "i", 32);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "div", 66)(6, "h4");
    \u0275\u0275text(7, "Nouvelle Activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "form", 67);
    \u0275\u0275listener("ngSubmit", function ActivityComponent_ng_template_57_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAddRowSave(ctx_r2.register));
    });
    \u0275\u0275elementStart(9, "div", 17)(10, "div", 68)(11, "label");
    \u0275\u0275text(12, "Nom ");
    \u0275\u0275elementStart(13, "span", 69);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 70);
    \u0275\u0275template(16, ActivityComponent_ng_template_57_Conditional_16_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 68)(18, "label");
    \u0275\u0275text(19, "Titre ");
    \u0275\u0275elementStart(20, "span", 69);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 72);
    \u0275\u0275template(23, ActivityComponent_ng_template_57_Conditional_23_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "div", 68)(26, "label");
    \u0275\u0275text(27, "Lieu ");
    \u0275\u0275elementStart(28, "span", 69);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 73);
    \u0275\u0275template(31, ActivityComponent_ng_template_57_Conditional_31_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 68)(33, "label");
    \u0275\u0275text(34, "Description ");
    \u0275\u0275elementStart(35, "span", 69);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 74);
    \u0275\u0275template(38, ActivityComponent_ng_template_57_Conditional_38_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 75)(40, "label");
    \u0275\u0275text(41, "Objectif Participant ");
    \u0275\u0275elementStart(42, "span", 69);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "input", 76);
    \u0275\u0275template(45, ActivityComponent_ng_template_57_Conditional_45_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 17)(47, "div", 68)(48, "label");
    \u0275\u0275text(49, "Date D\xE9but ");
    \u0275\u0275elementStart(50, "span", 69);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(52, "input", 77);
    \u0275\u0275template(53, ActivityComponent_ng_template_57_Conditional_53_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 68)(55, "label");
    \u0275\u0275text(56, "Date Fin ");
    \u0275\u0275elementStart(57, "span", 69);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "input", 78);
    \u0275\u0275template(60, ActivityComponent_ng_template_57_Conditional_60_Template, 2, 0, "small", 71)(61, ActivityComponent_ng_template_57_Conditional_61_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 17)(63, "div", 68)(64, "label");
    \u0275\u0275text(65, "Entite ");
    \u0275\u0275elementStart(66, "span", 69);
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "select", 79)(69, "option", 80);
    \u0275\u0275text(70, "-- S\xE9lectionnez une entite --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, ActivityComponent_ng_template_57_option_71_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 82)(73, "label");
    \u0275\u0275text(74, "Salle");
    \u0275\u0275elementStart(75, "span", 69);
    \u0275\u0275text(76, " * ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "select", 83)(78, "option", 80);
    \u0275\u0275text(79, "-- S\xE9lectionnez une salle --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, ActivityComponent_ng_template_57_option_80_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 82)(82, "label");
    \u0275\u0275text(83, "Type d'activit\xE9");
    \u0275\u0275elementStart(84, "span", 69);
    \u0275\u0275text(85, " * ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "select", 84)(87, "option", 80);
    \u0275\u0275text(88, "-- S\xE9lectionnez un type --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, ActivityComponent_ng_template_57_option_89_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "div", 17)(91, "div", 85)(92, "label", 86);
    \u0275\u0275text(93, "Fichier joint :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "input", 87);
    \u0275\u0275listener("change", function ActivityComponent_ng_template_57_Template_input_change_94_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(95, ActivityComponent_ng_template_57_div_95_Template, 3, 1, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 89)(97, "button", 90);
    \u0275\u0275template(98, ActivityComponent_ng_template_57_span_98_Template, 1, 0, "span", 91);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "button", 92);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_57_Template_button_click_100_listener() {
      const modal_r24 = \u0275\u0275restoreView(_r23).$implicit;
      return \u0275\u0275resetView(modal_r24.close("Close click"));
    });
    \u0275\u0275text(101, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r2.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r2.register.get("nom")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r2.register.get("nom")) == null ? null : tmp_7_0.touched) ? 16 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r2.register.get("titre")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r2.register.get("titre")) == null ? null : tmp_8_0.touched) ? 23 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r2.register.get("lieu")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r2.register.get("lieu")) == null ? null : tmp_9_0.touched) ? 31 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_10_0 = ctx_r2.register.get("description")) == null ? null : tmp_10_0.valid) && ((tmp_10_0 = ctx_r2.register.get("description")) == null ? null : tmp_10_0.touched) ? 38 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r2.register.get("objectifParticipation")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r2.register.get("objectifParticipation")) == null ? null : tmp_11_0.touched) ? 45 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_12_0 = ctx_r2.register.get("dateDebut")) == null ? null : tmp_12_0.valid) && ((tmp_12_0 = ctx_r2.register.get("dateDebut")) == null ? null : tmp_12_0.touched) ? 53 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_13_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_13_0.hasError("required")) && ((tmp_13_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_13_0.touched) ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_14_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_14_0.hasError("dateInvalide")) && !((tmp_14_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_14_0.hasError("required")) && ((tmp_14_0 = ctx_r2.register.get("dateFin")) == null ? null : tmp_14_0.touched) ? 61 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.entite);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.salleId);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.typeActivites);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.selectedFile);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.register.valid || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function ActivityComponent_ng_template_59_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Nom activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Titre activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Lieu activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Description est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Objectif est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Date est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " Date Fin est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_option_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entite_r30 = ctx.$implicit;
    \u0275\u0275property("value", entite_r30.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entite_r30.nom);
  }
}
function ActivityComponent_ng_template_59_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " entite est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_option_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const salles_r31 = ctx.$implicit;
    \u0275\u0275property("value", salles_r31.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(salles_r31.nom);
  }
}
function ActivityComponent_ng_template_59_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " sallw est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_option_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const typeActivites_r32 = ctx.$implicit;
    \u0275\u0275property("value", typeActivites_r32.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(typeActivites_r32.type);
  }
}
function ActivityComponent_ng_template_59_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " type est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_option_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const etapes_r33 = ctx.$implicit;
    \u0275\u0275property("ngValue", etapes_r33.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(etapes_r33.nom);
  }
}
function ActivityComponent_ng_template_59_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " etape est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivityComponent_ng_template_59_span_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 95);
  }
}
function ActivityComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h4", 96)(2, "div", 97)(3, "div", 98)(4, "div", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "button", 64);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_59_Template_button_click_6_listener() {
      const modal_r29 = \u0275\u0275restoreView(_r28).$implicit;
      return \u0275\u0275resetView(modal_r29.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 65)(8, "i", 32);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 66)(11, "form", 100);
    \u0275\u0275listener("ngSubmit", function ActivityComponent_ng_template_59_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditSave(ctx_r2.editForm));
    });
    \u0275\u0275elementStart(12, "div", 101);
    \u0275\u0275element(13, "input", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "div", 68)(16, "label");
    \u0275\u0275text(17, "Nom ");
    \u0275\u0275elementStart(18, "span", 69);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 70);
    \u0275\u0275template(21, ActivityComponent_ng_template_59_Conditional_21_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 68)(23, "label");
    \u0275\u0275text(24, "Titre ");
    \u0275\u0275elementStart(25, "span", 69);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 72);
    \u0275\u0275template(28, ActivityComponent_ng_template_59_Conditional_28_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 17)(30, "div", 68)(31, "label");
    \u0275\u0275text(32, "Lieu ");
    \u0275\u0275elementStart(33, "span", 69);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 73);
    \u0275\u0275template(36, ActivityComponent_ng_template_59_Conditional_36_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 68)(38, "label");
    \u0275\u0275text(39, "Description ");
    \u0275\u0275elementStart(40, "span", 69);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "input", 74);
    \u0275\u0275template(43, ActivityComponent_ng_template_59_Conditional_43_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 75)(45, "label");
    \u0275\u0275text(46, "Objectif Participant ");
    \u0275\u0275elementStart(47, "span", 69);
    \u0275\u0275text(48, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "input", 76);
    \u0275\u0275template(50, ActivityComponent_ng_template_59_Conditional_50_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 17)(52, "div", 68)(53, "label");
    \u0275\u0275text(54, "Date D\xE9but ");
    \u0275\u0275elementStart(55, "span", 69);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "input", 77);
    \u0275\u0275template(58, ActivityComponent_ng_template_59_Conditional_58_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 68)(60, "label");
    \u0275\u0275text(61, "Date Fin ");
    \u0275\u0275elementStart(62, "span", 69);
    \u0275\u0275text(63, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(64, "input", 78);
    \u0275\u0275template(65, ActivityComponent_ng_template_59_Conditional_65_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 17)(67, "div", 68)(68, "label");
    \u0275\u0275text(69, "Entite ");
    \u0275\u0275elementStart(70, "span", 69);
    \u0275\u0275text(71, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "select", 79)(73, "option", 80);
    \u0275\u0275text(74, "-- S\xE9lectionnez une entite --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, ActivityComponent_ng_template_59_option_75_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(76, ActivityComponent_ng_template_59_Conditional_76_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 82)(78, "label");
    \u0275\u0275text(79, "Salle");
    \u0275\u0275elementStart(80, "span", 69);
    \u0275\u0275text(81, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "select", 83)(83, "option", 80);
    \u0275\u0275text(84, "-- S\xE9lectionnez une salle --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, ActivityComponent_ng_template_59_option_85_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(86, ActivityComponent_ng_template_59_Conditional_86_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 82)(88, "label");
    \u0275\u0275text(89, "Type d'activite");
    \u0275\u0275elementStart(90, "span", 69);
    \u0275\u0275text(91, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "select", 84)(93, "option", 80);
    \u0275\u0275text(94, "-- S\xE9lectionnez un type --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(95, ActivityComponent_ng_template_59_option_95_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, ActivityComponent_ng_template_59_Conditional_96_Template, 2, 0, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 75)(98, "label");
    \u0275\u0275text(99, "Etape ");
    \u0275\u0275elementStart(100, "span", 69);
    \u0275\u0275text(101, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "select", 103);
    \u0275\u0275listener("ngModelChange", function ActivityComponent_ng_template_59_Template_select_ngModelChange_102_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEtapesChange($event));
    });
    \u0275\u0275elementStart(103, "option", 80);
    \u0275\u0275text(104, "-- S\xE9lectionnez un ou plusieurs Etape --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(105, ActivityComponent_ng_template_59_option_105_Template, 2, 2, "option", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275template(106, ActivityComponent_ng_template_59_Conditional_106_Template, 2, 0, "small", 71);
    \u0275\u0275elementStart(107, "div", 105);
    \u0275\u0275text(108, "Maintenez Ctrl (ou Cmd sur Mac) pour s\xE9lectionner plusieurs options.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 89)(110, "button", 90);
    \u0275\u0275template(111, ActivityComponent_ng_template_59_span_111_Template, 1, 0, "span", 91);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "button", 92);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_59_Template_button_click_113_listener() {
      const modal_r29 = \u0275\u0275restoreView(_r28).$implicit;
      return \u0275\u0275resetView(modal_r29.close("Close click"));
    });
    \u0275\u0275text(114, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_17_0;
    let tmp_20_0;
    let tmp_23_0;
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedRowData.nom, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r2.editForm.get("nom")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r2.editForm.get("nom")) == null ? null : tmp_8_0.touched) ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r2.editForm.get("titre")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r2.editForm.get("titre")) == null ? null : tmp_9_0.touched) ? 28 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_10_0 = ctx_r2.editForm.get("lieu")) == null ? null : tmp_10_0.valid) && ((tmp_10_0 = ctx_r2.editForm.get("lieu")) == null ? null : tmp_10_0.touched) ? 36 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r2.editForm.get("description")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r2.editForm.get("description")) == null ? null : tmp_11_0.touched) ? 43 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_12_0 = ctx_r2.editForm.get("objectifParticipation")) == null ? null : tmp_12_0.valid) && ((tmp_12_0 = ctx_r2.editForm.get("objectifParticipation")) == null ? null : tmp_12_0.touched) ? 50 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_13_0 = ctx_r2.editForm.get("dateDebut")) == null ? null : tmp_13_0.valid) && ((tmp_13_0 = ctx_r2.editForm.get("dateDebut")) == null ? null : tmp_13_0.touched) ? 58 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_14_0 = ctx_r2.editForm.get("dateFin")) == null ? null : tmp_14_0.valid) && ((tmp_14_0 = ctx_r2.editForm.get("dateFin")) == null ? null : tmp_14_0.touched) ? 65 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.entite);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_17_0 = ctx_r2.editForm.get("entite")) == null ? null : tmp_17_0.valid) && ((tmp_17_0 = ctx_r2.editForm.get("entite")) == null ? null : tmp_17_0.touched) ? 76 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.salleId);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_20_0 = ctx_r2.editForm.get("salle")) == null ? null : tmp_20_0.valid) && ((tmp_20_0 = ctx_r2.editForm.get("salle")) == null ? null : tmp_20_0.touched) ? 86 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.typeActivites);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_23_0 = ctx_r2.editForm.get("typeActivite")) == null ? null : tmp_23_0.valid) && ((tmp_23_0 = ctx_r2.editForm.get("typeActivite")) == null ? null : tmp_23_0.touched) ? 96 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.etape);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_26_0 = ctx_r2.editForm.get("etape")) == null ? null : tmp_26_0.valid) && ((tmp_26_0 = ctx_r2.editForm.get("etape")) == null ? null : tmp_26_0.touched) ? 106 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.editForm.valid || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function ActivityComponent_ng_template_61_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entite_r36 = ctx.$implicit;
    \u0275\u0275property("value", entite_r36.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entite_r36.nom);
  }
}
function ActivityComponent_ng_template_61_option_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const salles_r37 = ctx.$implicit;
    \u0275\u0275property("value", salles_r37.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(salles_r37.nom);
  }
}
function ActivityComponent_ng_template_61_option_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const typeActivites_r38 = ctx.$implicit;
    \u0275\u0275property("value", typeActivites_r38.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(typeActivites_r38.type);
  }
}
function ActivityComponent_ng_template_61_option_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const etapes_r39 = ctx.$implicit;
    \u0275\u0275property("ngValue", etapes_r39.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(etapes_r39.nom);
  }
}
function ActivityComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "h4", 96)(2, "div", 97)(3, "div", 98)(4, "div", 99)(5, "h3", 107);
    \u0275\u0275text(6, "D\xE9tails de l'activite:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "button", 64);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_61_Template_button_click_8_listener() {
      const modal_r35 = \u0275\u0275restoreView(_r34).$implicit;
      return \u0275\u0275resetView(modal_r35.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(9, "span", 65)(10, "i", 32);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 66)(13, "form", 108)(14, "div", 101);
    \u0275\u0275element(15, "input", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 68)(18, "label");
    \u0275\u0275text(19, "Nom ");
    \u0275\u0275elementStart(20, "span", 69);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 68)(24, "label");
    \u0275\u0275text(25, "Titre ");
    \u0275\u0275elementStart(26, "span", 69);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "input", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 17)(30, "div", 68)(31, "label");
    \u0275\u0275text(32, "Lieu ");
    \u0275\u0275elementStart(33, "span", 69);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 68)(37, "label");
    \u0275\u0275text(38, "Description ");
    \u0275\u0275elementStart(39, "span", 69);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "input", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 75)(43, "label");
    \u0275\u0275text(44, "Objectif Participant ");
    \u0275\u0275elementStart(45, "span", 69);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(47, "input", 113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 17)(49, "div", 68)(50, "label");
    \u0275\u0275text(51, "Date D\xE9but ");
    \u0275\u0275elementStart(52, "span", 69);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(54, "input", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 68)(56, "label");
    \u0275\u0275text(57, "Date Fin ");
    \u0275\u0275elementStart(58, "span", 69);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(60, "input", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 17)(62, "div", 68)(63, "label");
    \u0275\u0275text(64, "Entite ");
    \u0275\u0275elementStart(65, "span", 69);
    \u0275\u0275text(66, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "select", 116)(68, "option", 80);
    \u0275\u0275text(69, "-- S\xE9lectionnez une entite --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, ActivityComponent_ng_template_61_option_70_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 82)(72, "label");
    \u0275\u0275text(73, "Salle");
    \u0275\u0275elementStart(74, "span", 69);
    \u0275\u0275text(75, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "select", 117)(77, "option", 80);
    \u0275\u0275text(78, "-- S\xE9lectionnez une salle --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, ActivityComponent_ng_template_61_option_79_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 82)(81, "label");
    \u0275\u0275text(82, "Type d'activite");
    \u0275\u0275elementStart(83, "span", 69);
    \u0275\u0275text(84, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "select", 118)(86, "option", 80);
    \u0275\u0275text(87, "-- S\xE9lectionnez un type --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(88, ActivityComponent_ng_template_61_option_88_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 75)(90, "label");
    \u0275\u0275text(91, "Etape ");
    \u0275\u0275elementStart(92, "span", 69);
    \u0275\u0275text(93, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "select", 119);
    \u0275\u0275listener("ngModelChange", function ActivityComponent_ng_template_61_Template_select_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEtapesChange($event));
    });
    \u0275\u0275elementStart(95, "option", 80);
    \u0275\u0275text(96, "-- S\xE9lectionnez un ou plusieurs Etape --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(97, ActivityComponent_ng_template_61_option_97_Template, 2, 2, "option", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 89)(99, "button", 92);
    \u0275\u0275listener("click", function ActivityComponent_ng_template_61_Template_button_click_99_listener() {
      const modal_r35 = \u0275\u0275restoreView(_r34).$implicit;
      return \u0275\u0275resetView(modal_r35.close("Close click"));
    });
    \u0275\u0275text(100, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedRowData.nom, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.detailForm);
    \u0275\u0275advance(55);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.entite);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.salleId);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.typeActivites);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.etape);
  }
}
var ActivityComponent = class _ActivityComponent {
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
    this.entite = [];
    this.etape = [];
    this.salleId = [];
    this.typeActivites = [];
    this.selectedEtapes = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.validation = new ActivityValidation();
    this.selectedFile = null;
    this.currentUserId = this.getCurrentUserId();
    this.activityValidation = new ActivityValidation();
    this.columns = [
      { prop: "nom" },
      { prop: "titre" },
      { prop: "lieu" },
      { prop: "description" },
      { prop: "dateDebut" },
      { prop: "dateFin" },
      { prop: "objectifParticipation" }
    ];
    this.selectedEtapeIds = [];
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      titre: new UntypedFormControl(),
      lieu: new UntypedFormControl(),
      description: new UntypedFormControl(),
      dateDebut: new UntypedFormControl(),
      dateFin: new UntypedFormControl(),
      objectifParticipation: new UntypedFormControl(),
      entite: new UntypedFormControl(),
      salleId: new UntypedFormControl(),
      //typeId: new UntypedFormControl(),
      typeActivite: new UntypedFormControl(),
      etape: new UntypedFormControl(),
      selectedEtapeIds: new UntypedFormControl(),
      commentaire: new UntypedFormControl(),
      superviseurId: new UntypedFormControl(),
      fichier: new UntypedFormControl(),
      fichierjoint: new UntypedFormControl()
    });
    this.detailForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      titre: new UntypedFormControl(),
      lieu: new UntypedFormControl(),
      description: new UntypedFormControl(),
      dateDebut: new UntypedFormControl(),
      dateFin: new UntypedFormControl(),
      objectifParticipation: new UntypedFormControl(),
      entite: new UntypedFormControl(),
      salleId: new UntypedFormControl(),
      //typeId: new UntypedFormControl(),
      typeActivite: new UntypedFormControl(),
      etape: new UntypedFormControl(),
      selectedEtapeIds: new UntypedFormControl(),
      commentaire: new UntypedFormControl(),
      superviseurId: new UntypedFormControl(),
      fichier: new UntypedFormControl(),
      fichierjoint: new UntypedFormControl()
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
    console;
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
    this.getAllEtapeALL();
    this.getAllEntite();
    this.getAllActivite();
    this.getAllTypeActivite();
    this.getAllSalle();
    this.register = this.fb.group({
      id: [""],
      nom: ["", [Validators.required]],
      titre: ["", [Validators.required]],
      lieu: ["", [Validators.required]],
      description: ["", [Validators.required]],
      dateDebut: ["", [Validators.required]],
      dateFin: ["", [Validators.required]],
      objectifParticipation: [null, [Validators.required]],
      entite: [null, [Validators.required]],
      //etape: [null, [Validators.required]],
      salleId: [null, [Validators.required]],
      //typeId: [null, [Validators.required]],
      typeActivite: [null, [Validators.required]],
      superviseurId: [null],
      commentaire: [""],
      fichier: [null],
      fichierjoint: [""]
    });
    const checkDates = () => {
      const dateDebut = this.register.get("dateDebut")?.value;
      const dateFin = this.register.get("dateFin")?.value;
      if (dateDebut && dateFin && new Date(dateFin) < new Date(dateDebut)) {
        this.register.get("dateFin")?.setErrors({ dateInvalide: true });
      } else {
        this.register.get("dateFin")?.setErrors(null);
      }
    };
    this.register.get("dateDebut")?.valueChanges.subscribe(() => checkDates());
    this.register.get("dateFin")?.valueChanges.subscribe(() => checkDates());
    this.detailForm = this.fb.group({
      id: [""],
      nom: [{ value: "", disabled: true }, [Validators.required]],
      titre: ["", [Validators.required]],
      lieu: ["", [Validators.required]],
      description: ["", [Validators.required]],
      dateDebut: ["", [Validators.required]],
      dateFin: ["", [Validators.required]],
      objectifParticipation: [null, [Validators.required]],
      entite: [null, [Validators.required]],
      etape: [null, [Validators.required]],
      salleId: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
      typeActivite: [null, [Validators.required]],
      superviseurId: [null],
      commentaire: [""],
      fichier: [null],
      fichierjoint: [""]
    });
  }
  ngOnChanges() {
    if (this.selectedRowData) {
      this.detailForm.patchValue({
        nom: this.selectedRowData.nom,
        titre: this.selectedRowData.titre,
        lieu: this.selectedRowData.lieu,
        description: this.selectedRowData.description,
        dateDebut: this.selectedRowData.dateDebut,
        dateFin: this.selectedRowData.dateFin,
        objectifParticipation: this.selectedRowData.objectifParticipation,
        entite: this.selectedRowData.entite,
        etape: this.selectedRowData.etapes,
        salleId: this.selectedRowData.salleId,
        typeActivite: this.selectedRowData.typeActivite
      });
    }
  }
  // fetch data
  getAllActivite() {
    this.loadingIndicator = true;
    this.glogalService.get("activite").subscribe({
      next: (value) => {
        console.log("Activites ETAPE :", value);
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
        const raw = Array.isArray(value) ? value : [];
        this.entite = filterEntitesOdcPiliers(raw);
        this.filteredData = [...this.entite];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  /** Garde l’entité d’une ligne existante dans la liste déroulante même si elle n’est pas un pilier ODC. */
  ensureEntiteOptionPresent(e) {
    if (!e?.id)
      return;
    if (!this.entite.some((x) => x.id === e.id)) {
      this.entite = [...this.entite, e];
    }
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
  getAllEtape() {
    this.loadingIndicator = true;
    this.glogalService.getByActivite("etape", "sansactivite").subscribe({
      next: (value) => {
        console.log("Etape :=================avant", value);
        this.etape = value.filter((etape) => etape.created_by?.id === this.currentUserId && etape.activiteid === null);
        this.filteredData = [...this.etape];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllEtapeSansFiltre() {
    this.loadingIndicator = true;
    this.glogalService.getByActivite("etape", "sansactivite").subscribe({
      next: (value) => {
        this.etape = value;
        this.filteredData = [...this.etape];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllEtapeALL() {
    this.loadingIndicator = true;
    this.glogalService.get("etape").subscribe({
      next: (value) => {
        console.log("Etape :=================", value);
        this.etape = value;
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
        console.log("Type Activite :", this.typeActivites);
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  //   async onAddRowSave(form: UntypedFormGroup) {
  //     this.loadingIndicator = true;    
  //        console.log('Response ajout activite',form.value)
  //       await this.glogalService.post('activite', form.value).subscribe({
  //       next: (response) => {
  //         // Ajouter la nouvelle activite
  //        this.activite.push(response);
  //         console.log("Activite crée======",response)
  //          this.onAddRowSaveValidation(form,response);
  //         // Réinitialiser le formulaire
  //         form.reset();
  //         // Fermer les modales si nécessaire
  //         this.modalService.dismissAll();   
  //         // Afficher un toast de succès
  //       //  this.addRecordSuccess();
  //         this.addSuccessMessage(3000);
  //          // Recharger directement la liste complète des activités depuis le backend
  //         this.reloadActivities();
  //       },
  //       error: (err: { status: number; error: any; message?: string }) => {
  //         console.error('Erreur reçue:', err);
  //         let message = 'Une erreur est survenue. Veuillez réessayer.';
  //         let title = '<span class="text-red-500">Échec</span>';
  //         if (err.error?.message) {
  //           message = err.error.message;
  //         } else if (err.message) {
  //           message = err.message;
  //         }
  //         Swal.fire({
  //           icon: 'error',
  //           title: title,
  //           text: message,
  //           confirmButtonText: 'Ok',
  //           customClass: {
  //             confirmButton: 'bg-red-500 text-white hover:bg-red-600',
  //           },
  //         });
  //       },
  //       complete: () => {
  //         this.loadingIndicator = false;
  //       }
  //     });
  //   }
  //   onAddRowSaveValidation(form: UntypedFormGroup,value:ActivityValidation) {
  //   this.glogalService.createValidation(value).subscribe({
  //     next: (activite) => {
  //       console.log("Activitevalidtaion crée ", activite);
  //       }});
  //       error: (err:any) => {
  //       console.error('Erreur Activitevalidtaion', err);
  //       this.loadingIndicator = false;}
  // }
  getCurrentUserId() {
    const raw = localStorage.getItem("bearerid");
    console.log("Raw currentUser from localStorage:", raw);
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
  // CREATION NOVELLE ACTIVITE AVEC OU SANS VALIDATION
  onAddRowSave(form) {
    return __async(this, null, function* () {
      if (form.invalid)
        return;
      this.loadingIndicator = true;
      this.glogalService.post("activite", form.value).subscribe({
        next: (activite) => {
          console.log("Activit\xE9 cr\xE9\xE9e :", activite);
          this.addRecordSuccess();
          this.modalService.dismissAll();
          this.reloadActivities();
          form.reset();
          this.loadingIndicator = false;
        },
        error: (err) => {
          const msg = err instanceof Error ? err.message : this.glogalService.extractMessageFromError(err);
          this.toastr.error(msg, "Cr\xE9ation d\u2019activit\xE9");
          console.error("Erreur activit\xE9 :", err);
          this.loadingIndicator = false;
        }
      });
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
  reloadActivities() {
    this.glogalService.get("activite").subscribe({
      next: (data) => {
        this.activite = Array.isArray(data) ? data : [];
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
    this.register.reset();
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
  }
  detailRow(row, rowIndex, content) {
    this.ngOnChanges();
    this.getAllEtapeSansFiltre();
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    const etapes = Array.isArray(row.etapes) ? row.etapes : row.etapes ? [row.etapes] : [];
    this.selectedEtapeIds = etapes.map((e) => e.id);
    this.ensureEntiteOptionPresent(row.entite);
    this.detailForm.patchValue({
      id: row.id,
      nom: row.nom,
      titre: row.titre,
      lieu: row.lieu,
      description: row.description,
      dateDebut: row.dateDebut,
      dateFin: row.dateFin,
      objectifParticipation: row.objectifParticipation,
      entite: row.entite?.id,
      etape: this.selectedEtapeIds,
      // Utiliser directement selectedEtapeIds
      salleId: row.salleId?.id,
      typeActivite: row.typeActivite?.id
    });
    this.selectedRowData = row;
  }
  editRow(row, rowIndex, content) {
    this.ngOnChanges();
    this.getAllEtape();
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    const etapes = Array.isArray(row.etapes) ? row.etapes : row.etapes ? [row.etapes] : [];
    this.selectedEtapeIds = etapes.map((e) => e.id);
    this.ensureEntiteOptionPresent(row.entite);
    this.editForm.patchValue({
      id: row.id,
      nom: row.nom,
      titre: row.titre,
      lieu: row.lieu,
      description: row.description,
      dateDebut: row.dateDebut,
      dateFin: row.dateFin,
      objectifParticipation: row.objectifParticipation,
      entite: row.entite?.id,
      etape: this.selectedEtapeIds,
      // Utiliser directement selectedEtapeIds
      salleId: row.salleId?.id,
      typeActivite: row.typeActivite?.id
    });
    this.selectedRowData = row;
  }
  onEditSave(form) {
    if (form?.value?.id) {
      const etapesObjects = (this.selectedEtapeIds || []).map((id) => ({ id }));
      const updatedActivite = __spreadProps(__spreadValues({}, form.value), {
        etapes: etapesObjects
      });
      this.glogalService.updateP("activite", updatedActivite.id, updatedActivite.etape, updatedActivite).subscribe({
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
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.register.patchValue({ fichier: file });
      this.register.get("fichier")?.updateValueAndValidity();
      console.log("Fichier s\xE9lectionn\xE9 :", file.name);
    }
  }
  // VERSION CORRIGÉE - Ne pas mettre à jour le formulaire dans onEtapesChange
  onEtapesChange(selectedIds) {
    console.log("Etapes s\xE9lectionn\xE9es ont chang\xE9:", selectedIds);
    this.selectedEtapeIds = selectedIds;
    const filteredEtapes = this.etape.filter((etape) => etape && selectedIds.includes(etape.id));
    console.log("Etapes filtr\xE9es:", filteredEtapes);
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
  deleteRecord(row) {
    this.loadingIndicator = true;
    this.glogalService.delete("activite", row.id).subscribe({
      // this.glogalService.delete("activite", row!).subscribe({
      next: (response) => {
        console.log("R\xE9ponse de suppression:", response);
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
        console.log("Il ya d\xE9j\xE0 des participants li\xE9s:", err);
        const msg = this.glogalService.extractMessageFromError(err);
        this.loadingIndicator = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Il ya d\xE9j\xE0 des participants li\xE9s",
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
  //News fonctions pour la gestion du select
  // isSelected(row: any): boolean {
  //   this.isRowSelected = this.selected.length > 0;
  //    return this.selected.some(r => r === row.id);
  //   //  this.selected.splice(0, this.selected.length);
  //   //   this.selected.push(...this.selected);
  //   //   if (this.selected.length === 0) {
  //   //     this.isRowSelected = false;
  //   //   } else {
  //   //     this.isRowSelected = true;
  //   //   }
  //   //   return this.selected.includes(row.id);
  // }
  // toggleSelection(row: any, event: any) {
  //   if (event.target.checked) {
  //     this.isRowSelected = true;
  //     this.selected.push(row);
  //   } else {
  //     this.selected = this.selected.filter(r => r !== row.id);
  //   }
  //   this.isRowSelected = this.selected.length > 0;
  // }
  toggleSelection(row, event) {
    const checked = event.target.checked;
    if (checked) {
      console.log("Ajout de l'ID s\xE9lectionn\xE9 :", row.id);
      if (!this.selected.includes(row.id)) {
        this.selected.push(row.id);
        console.log("Liste des IDs s\xE9lectionn\xE9s :", this.selected);
      }
    } else {
      this.selected = this.selected.filter((id) => id !== row.id);
      console.log("Liste des IDs apr\xE8s suppression :", this.selected);
    }
    this.isRowSelected = this.selected.length > 0;
  }
  isSelected(row) {
    return this.selected.includes(row.id);
  }
  onRowCheckboxChange(row, event) {
    if (event.target.checked) {
      this.isRowSelected = true;
      this.selected = [...this.selected, row];
    } else {
      this.isRowSelected = false;
      this.selected = this.selected.filter((r) => r.toFixed !== row.id);
    }
  }
  static {
    this.\u0275fac = function ActivityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivityComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivityComponent, selectors: [["app-activity"]], viewQuery: function ActivityComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, features: [\u0275\u0275NgOnChangesFeature], decls: 63, vars: 26, consts: [["table", ""], ["addRecord", ""], ["editRecord", ""], ["detailRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Rechercher", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], ["class", "btn btn-icon icon-left bg-warning text-white rounded-button", 3, "click", 4, "ngIf"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], [1, "material-icons"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["ngx-datatable-cell-template", ""], ["name", "Nom", 3, "width"], ["name", "Lieu", 3, "width"], ["name", "Statut", 3, "width"], ["name", "Objectif", 3, "width"], ["name", "Entite", 3, "width"], ["name", "Salle", 3, "width"], ["name", "Cr\xE9\xE9 par", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], ["type", "checkbox", 3, "checked", "change", 4, "ngIf"], ["type", "checkbox", 3, "change", "checked"], [1, "name-col-style"], [1, "badge-outline", "col-green"], [1, "badge-outline", "col-red"], [1, "badge-outline", "col-indigo"], [1, "badge-outline", "col-orange"], ["class", "badge-outline col-green", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-eye"], ["class", "btn btn-tbl-edit h-auto", 3, "click", 4, "ngIf"], ["class", "btn btn-tbl-delete h-auto", 3, "click", 4, "ngIf"], ["colspan", "7", "class", "text-danger", 4, "ngIf"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], ["colspan", "7", 1, "text-danger"], [1, "modal-header", "editRowModal"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["enctype", "multipart/form-data", 1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Nom activit\xE9", "formControlName", "nom", "required", "", 1, "form-control"], [1, "form-text", "text-danger"], ["type", "text", "placeholder", "Titre activit\xE9", "formControlName", "titre", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Lieu activit\xE9", "formControlName", "lieu", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Description activit\xE9", "formControlName", "description", "required", "", 1, "form-control"], [1, "col-xl-12", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["type", "number", "placeholder", "Objectif activit\xE9", "formControlName", "objectifParticipation", "required", "", 1, "form-control"], ["type", "date", "placeholder", "Date debut", "formControlName", "dateDebut", "required", "", 1, "form-control"], ["type", "date", "placeholder", "Date fin", "formControlName", "dateFin", "required", "", 1, "form-control"], ["formControlName", "entite", "required", "", 1, "form-select", "form-control"], ["value", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "salleId", "required", "", 1, "form-select", "form-control"], ["formControlName", "typeActivite", "required", "", 1, "form-select", "form-control"], [1, "col-12", "mb-2"], ["for", "fichier"], ["type", "file", "id", "fichier", "accept", ".pdf,.png,.jpg,.jpeg,.docx", 1, "form-control", 3, "change"], ["class", "col-12 mt-2 text-success", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], [3, "value"], [1, "col-12", "mt-2", "text-success"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["multiple", "", "formControlName", "etape", 1, "form-control", "h-100", 3, "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "mt-1", "text-gray-500", "mt-3", "text-sm"], [3, "ngValue"], [1, "detail"], [3, "formGroup"], ["type", "text", "placeholder", "Nom activit\xE9", "formControlName", "nom", "readonly", "", 1, "form-control"], ["type", "text", "placeholder", "Titre activit\xE9", "formControlName", "titre", "readonly", "", 1, "form-control"], ["type", "text", "placeholder", "Lieu activit\xE9", "formControlName", "lieu", "readonly", "", 1, "form-control"], ["type", "text", "placeholder", "Description activit\xE9", "formControlName", "description", "readonly", "", 1, "form-control"], ["type", "number", "placeholder", "Objectif activit\xE9", "formControlName", "objectifParticipation", "readonly", "", 1, "form-control"], ["type", "date", "placeholder", "Date debut", "formControlName", "dateDebut", "readonly", "", 1, "form-control"], ["type", "date", "placeholder", "Date fin", "formControlName", "dateFin", "readonly", "", 1, "form-control"], ["formControlName", "entite", "readonly", "", 1, "form-select", "form-control", "readonly-select"], ["formControlName", "salleId", "readonly", "", 1, "form-select", "form-control", "readonly-select"], ["formControlName", "typeActivite", "readonly", "", 1, "form-select", "form-control", "readonly-select"], ["multiple", "", "formControlName", "etape", 1, "form-control", "h-100", "readonly-select", 3, "ngModelChange"]], template: function ActivityComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 4)(1, "ul", 5)(2, "li", 6)(3, "h5", 7);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 8)(6, "a", 9);
        \u0275\u0275element(7, "i", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 6);
        \u0275\u0275text(9, "Activit\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 11);
        \u0275\u0275text(11, "Consultez et g\xE9rez les informations de cette section.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "div", 20)(21, "div", 21);
        \u0275\u0275element(22, "div", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 23)(24, "div", 21)(25, "div", 24)(26, "div")(27, "label", 25)(28, "i", 26);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 27);
        \u0275\u0275listener("keyup", function ActivityComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 28)(32, "div", 29);
        \u0275\u0275template(33, ActivityComponent_button_33_Template, 3, 0, "button", 30);
        \u0275\u0275elementStart(34, "button", 31);
        \u0275\u0275listener("click", function ActivityComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(35, "i", 32);
        \u0275\u0275text(36, "delete");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(37, "ngx-datatable", 33, 0);
        \u0275\u0275listener("select", function ActivityComponent_Template_ngx_datatable_select_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275elementStart(39, "ngx-datatable-column", 34);
        \u0275\u0275template(40, ActivityComponent_ng_template_40_Template, 1, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "ngx-datatable-column", 36);
        \u0275\u0275template(42, ActivityComponent_ng_template_42_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "ngx-datatable-column", 37);
        \u0275\u0275template(44, ActivityComponent_ng_template_44_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "ngx-datatable-column", 38);
        \u0275\u0275template(46, ActivityComponent_ng_template_46_Template, 5, 5, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ngx-datatable-column", 39);
        \u0275\u0275template(48, ActivityComponent_ng_template_48_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "ngx-datatable-column", 40);
        \u0275\u0275template(50, ActivityComponent_ng_template_50_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "ngx-datatable-column", 41);
        \u0275\u0275template(52, ActivityComponent_ng_template_52_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "ngx-datatable-column", 42);
        \u0275\u0275template(54, ActivityComponent_ng_template_54_Template, 2, 2, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "ngx-datatable-column", 43);
        \u0275\u0275template(56, ActivityComponent_ng_template_56_Template, 6, 3, "ng-template", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, ActivityComponent_ng_template_57_Template, 102, 19, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(59, ActivityComponent_ng_template_59_Template, 115, 24, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(61, ActivityComponent_ng_template_61_Template, 101, 10, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275property("ngIf", ctx.useRole.includes("PERSONNEL"));
        \u0275\u0275advance();
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275property("rows", ctx.activite)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", false);
        \u0275\u0275advance(2);
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
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 180);
        \u0275\u0275advance(2);
        \u0275\u0275property("sortable", false);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      SelectMultipleControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FullCalendarModule,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      NgIf,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnCellDirective,
      RouterLink,
      NgForOf
    ], styles: ["\n\n.readonly-select[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  pointer-events: none;\n}\n.detail[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ff7900;\n  font-weight: bold;\n}\n/*# sourceMappingURL=activity.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityComponent, [{
    type: Component,
    args: [{ selector: "app-activity", imports: [
      FormsModule,
      FullCalendarModule,
      ReactiveFormsModule,
      NgIf,
      NgxDatatableModule,
      RouterLink,
      NgForOf
    ], template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style ">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-home font-17"></i></a>
    </li>
    <li class="breadcrumb-item">Activit\xE9</li>
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
                          <button
                            *ngIf="useRole.includes('PERSONNEL')"
                            class="btn btn-icon icon-left bg-warning text-white rounded-button"
                            (click)='addRow(addRecord)'>
                            <i class="material-icons">add</i>
                          </button>
                          <!-- pour afficher le bouton de suppression multiple -->
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
            <ngx-datatable #table class="material" [rows]="activite" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
              <ngx-datatable-column   [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="false">
              
              <ng-template ngx-datatable-cell-template let-row="row">
                      <input *ngIf="row.createdBy?.id === currentUserId"
                        type="checkbox"
                        [checked]="isSelected(row)"
                        (change)="toggleSelection(row, $event)"
                      />
              </ng-template>
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
<!--              <ngx-datatable-column [width]="200" name="Date D\xE9but">-->
<!--                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>-->
<!--                  <div class="name-col-style">-->
<!--                    <div>{{row.dateDebut}}</div>-->
<!--                  </div>-->
<!--                </ng-template>-->
<!--              </ngx-datatable-column>-->
              <ngx-datatable-column [width]="150" name="Statut">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
<!--                  <div class="name-col-style">-->
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
                    @if (row.statut === 'En_Validation_Directeur_ODC') {
                      <div class="badge-outline col-orange">{{row.statut}}</div>
                    }
                    @if (row.statut === 'Rejetee') {
                      <div class="badge-outline col-red">{{row.statut}}</div>
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
              
              <ngx-datatable-column [width]="150" name="Salle">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.salleId?.nom}}</div>
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

              <ngx-datatable-column name="Actions" [sortable]="false">
                <ng-template let-value="value" let-row="row" let-rowIndex="rowIndex" ngx-datatable-cell-template>
                  <span>
                    <button
                      class="btn btn-tbl-edit h-auto" (click)='detailRow(row, rowIndex, detailRecord)'>
                      <i class="fas fa-eye"></i>
                    </button>
                    <button
                      *ngIf="useRole.includes('PERSONNEL') && row.createdBy.id === currentUserId" 
                      class="btn btn-tbl-edit h-auto" (click)='editRow(row, rowIndex, editRecord)'>
                      <i class="fas fa-pen"></i>
                    </button>
                    <button
                      *ngIf="useRole.includes('PERSONNEL') && row.createdBy.id === currentUserId"
                      class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </span>
                  <!-- Message si aucune \xE9tape n'est disponible pour l'activit\xE9 -->
                  <div *ngIf="!row.etapes || row.etapes.length === 0" colspan="7" class="text-danger">
                    Activit\xE9 n'a pas d'\xE9tapes.
                  </div>
                </ng-template>
              </ngx-datatable-column>
            </ngx-datatable>

            <!-- Add Record Modal Window -->
            <ng-template #addRecord let-modal>
              <div class="modal-header editRowModal">
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
                  <span aria-hidden="true"><i class="material-icons">close</i></span>
                </button>
              </div>
              <div class="modal-body">
               <h4>Nouvelle Activit\xE9</h4> 
                <form class="register-form" [formGroup]="register" (ngSubmit)="onAddRowSave(register)" enctype="multipart/form-data">
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Nom activit\xE9" formControlName="nom"
                             required>
                      @if (!register.get('nom')?.valid && register.get('nom')?.touched) {
                        <small class="form-text text-danger"> Nom activit\xE9 est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Titre <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Titre activit\xE9" formControlName="titre"
                             required>
                      @if (!register.get('titre')?.valid && register.get('titre')?.touched) {
                        <small class="form-text text-danger"> Titre activit\xE9 est obligatoire</small>
                      }
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Lieu <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Lieu activit\xE9" formControlName="lieu"
                             required>
                      @if (!register.get('lieu')?.valid && register.get('lieu')?.touched) {
                        <small class="form-text text-danger"> Lieu activit\xE9 est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Description <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Description activit\xE9" formControlName="description"
                             required>
                      @if (!register.get('description')?.valid && register.get('description')?.touched) {
                        <small class="form-text text-danger"> Description est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Objectif Participant <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" placeholder="Objectif activit\xE9" formControlName="objectifParticipation"
                             required>
                      @if (!register.get('objectifParticipation')?.valid && register.get('objectifParticipation')?.touched) {
                        <small class="form-text text-danger"> Objectif est obligatoire</small>
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
                      <!-- @if (!register.get('dateFin')?.valid && register.get('dateFin')?.touched) {
                        <small class="form-text text-danger"> Date Fin est obligatoire </small>
                      } -->
                      <!-- @if (register.get('dateFin')?.hasError('dateInvalide')) {
                      <small class="form-text text-danger"> La date fin ne peut pas \xEAtre ant\xE9rieure \xE0 la date d\xE9but.</small>
} -->
                      @if (register.get('dateFin')?.hasError('required') && register.get('dateFin')?.touched) {
                      <small class="form-text text-danger"> Date Fin est obligatoire </small>
}
@if (register.get('dateFin')?.hasError('dateInvalide') 
     && !register.get('dateFin')?.hasError('required') 
     && register.get('dateFin')?.touched) 
{
  <small class="form-text text-danger"> La date fin ne peut pas \xEAtre ant\xE9rieure \xE0 la date d\xE9but.</small>
}

                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Entite <span class="text-danger">*</span></label>
                      <select class="form-select form-control" formControlName="entite" required>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une entite --</option>
                        <option *ngFor="let entite of entite"  [value]="entite.id">{{entite.nom}}</option>
                      </select>
                    </div>
                    <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Salle<span class="text-danger"> * </span></label>
                      <select class="form-select form-control" formControlName="salleId" required>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une salle --</option>
                        <option *ngFor="let salles of salleId"  [value]="salles.id">{{salles.nom}}</option>
                      </select>
                    </div>

                     <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Type d'activit\xE9<span class="text-danger"> * </span></label>
                      <select class="form-select form-control" formControlName="typeActivite" required>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un type --</option>
                        <option *ngFor="let typeActivite of typeActivites"  [value]="typeActivite.id">{{typeActivite.type}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mb-2">
                      <label for="fichier">Fichier joint :</label>
                      <input
                        type="file"
                        id="fichier"
                        (change)="onFileSelected($event)"
                        accept=".pdf,.png,.jpg,.jpeg,.docx"
                        class="form-control"
                      />
                    </div>
                    <div *ngIf="selectedFile" class="col-12 mt-2 text-success">
                      <small>Fichier s\xE9lectionn\xE9 : {{ selectedFile.name }}</small>
                    </div>
                  </div>

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
                <h4 class="modal-title" id="modal-basic-title">
                  <div class="table-modal-header">
                    <div class="modal-about">
                      <div class="fw-bold p-t-10 font-17">
                        {{selectedRowData!.nom}}
                      </div>
                    </div>
                  </div>
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
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Nom activit\xE9" formControlName="nom"
                             required>
                      @if (!editForm.get('nom')?.valid && editForm.get('nom')?.touched) {
                        <small class="form-text text-danger"> Nom activit\xE9 est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Titre <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Titre activit\xE9" formControlName="titre"
                             required>
                      @if (!editForm.get('titre')?.valid && editForm.get('titre')?.touched) {
                        <small class="form-text text-danger"> Titre activit\xE9 est obligatoire</small>
                      }
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Lieu <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Lieu activit\xE9" formControlName="lieu"
                             required>
                      @if (!editForm.get('lieu')?.valid && editForm.get('lieu')?.touched) {
                        <small class="form-text text-danger"> Lieu activit\xE9 est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Description <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Description activit\xE9" formControlName="description"
                             required>
                      @if (!editForm.get('description')?.valid && editForm.get('description')?.touched) {
                        <small class="form-text text-danger"> Description est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Objectif Participant <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" placeholder="Objectif activit\xE9" formControlName="objectifParticipation"
                             required>
                      @if (!editForm.get('objectifParticipation')?.valid && editForm.get('objectifParticipation')?.touched) {
                        <small class="form-text text-danger"> Objectif est obligatoire</small>
                      }
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date D\xE9but <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date debut" formControlName="dateDebut"
                             required>
                      @if (!editForm.get('dateDebut')?.valid && editForm.get('dateDebut')?.touched) {
                        <small class="form-text text-danger"> Date est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date Fin <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date fin" formControlName="dateFin"
                             required>
                      @if (!editForm.get('dateFin')?.valid && editForm.get('dateFin')?.touched) {
                        <small class="form-text text-danger"> Date Fin est obligatoire</small>
                      }
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Entite <span class="text-danger">*</span></label>
                      <select class="form-select form-control" formControlName="entite" required>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une entite --</option>
                        <option *ngFor="let entite of entite"  [value]="entite.id">{{entite.nom}}</option>
                      </select>
                      @if (!editForm.get('entite')?.valid && editForm.get('entite')?.touched) {
                        <small class="form-text text-danger"> entite est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Salle<span class="text-danger">*</span></label>
                      <select class="form-select form-control" formControlName="salleId" required>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une salle --</option>
                        <option *ngFor="let salles of salleId"  [value]="salles.id">{{salles.nom}}</option>
                      </select>
                      @if (!editForm.get('salle')?.valid && editForm.get('salle')?.touched) {
                        <small class="form-text text-danger"> sallw est obligatoire</small>
                      }
                    </div>
                     <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Type d'activite<span class="text-danger">*</span></label>
                      <select class="form-select form-control" formControlName="typeActivite" required>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un type --</option>
                        <option *ngFor="let typeActivites of typeActivites"  [value]="typeActivites.id">{{typeActivites.type}}</option>
                      </select>
                      @if (!editForm.get('typeActivite')?.valid && editForm.get('typeActivite')?.touched) {
                        <small class="form-text text-danger"> type est obligatoire</small>
                      }
                    </div>
                    <!--<div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Etape<span class="text-danger">*</span></label>
                      <select class="form-select form-control" formControlName="etape" required>
                        <option value="" [ngValue]="null" disabled>&#45;&#45; S\xE9lectionnez une etape &#45;&#45;</option>
                        <option *ngFor="let etapes of etape"  [value]="etapes.id">{{etapes.nom}}</option>
                      </select>
                    </div>-->
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Etape <span class="text-danger">*</span></label>
                      <select  class="form-control h-100" multiple="" (ngModelChange)="onEtapesChange($event)" formControlName="etape">
                        <option value="" [ngValue]="null" disabled>&#45;&#45; S\xE9lectionnez un ou plusieurs Etape &#45;&#45;</option>
                        <option *ngFor="let etapes of etape" [ngValue]="etapes.id">{{etapes.nom}}</option>
                      </select>
                      @if (!editForm.get('etape')?.valid && editForm.get('etape')?.touched) {
                        <small class="form-text text-danger"> etape est obligatoire</small>
                      }
                      <div class="mt-1 text-gray-500 mt-3 text-sm">Maintenez Ctrl (ou Cmd sur Mac) pour s\xE9lectionner plusieurs options.</div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-warning" [disabled]="!editForm.valid || loadingIndicator">
                      <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      {{ loadingIndicator ? 'Chargement...' : 'Enregistre' }}
                    </button>

                    <button type="button" class="btn btn-dark text-white" (click)="modal.close('Close click')">Fermer</button>
                  </div>
                </form>
              </div>
            </ng-template>
             <!-- Details Record Modal Window -->
            <ng-template #detailRecord let-modal>
              <div class="modal-header editRowModal">
                <h4 class="modal-title" id="modal-basic-title">
                  <div class="table-modal-header">
                    <div class="modal-about">
                      <div class="fw-bold p-t-10 font-17">
                       <h3 class="detail">D\xE9tails de l'activite:</h3> {{selectedRowData!.nom}}
                      </div>
                    </div>
                  </div>
                </h4>
                <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                  <span aria-hidden="true"><i class="material-icons">close</i></span>
                </button>
              </div>
              <div class="modal-body">
                <form [formGroup]="detailForm" >
                  <div class="input-field col s12 d-none">
                    <input formControlName="id" class="form-control" type="hidden">
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Nom activit\xE9" formControlName="nom"
                              readonly>
                     
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Titre <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Titre activit\xE9" formControlName="titre"
                             readonly>
                      
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Lieu <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Lieu activit\xE9" formControlName="lieu"
                             readonly>
                      
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Description <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Description activit\xE9" formControlName="description"
                             readonly>
                     
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Objectif Participant <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" placeholder="Objectif activit\xE9" formControlName="objectifParticipation"
                             readonly>
                     
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date D\xE9but <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date debut" formControlName="dateDebut"
                             readonly>
                      
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Date Fin <span class="text-danger">*</span></label>
                      <input type="date" class="form-control" placeholder="Date fin" formControlName="dateFin"
                             readonly>
                      
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Entite <span class="text-danger">*</span></label>
                      <select class="form-select form-control readonly-select" formControlName="entite" readonly>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une entite --</option>
                        <option *ngFor="let entite of entite"  [value]="entite.id">{{entite.nom}}</option>
                      </select>
                      
                    </div>
                    <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Salle<span class="text-danger">*</span></label>
                      <select class="form-select form-control readonly-select" formControlName="salleId" readonly>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une salle --</option>
                        <option *ngFor="let salles of salleId"  [value]="salles.id">{{salles.nom}}</option>
                      </select>
                      
                    </div>
                     <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 mb-2">
                      <label>Type d'activite<span class="text-danger">*</span></label>
                      <select class="form-select form-control readonly-select" formControlName="typeActivite" readonly>
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un type --</option>
                        <option *ngFor="let typeActivites of typeActivites"  [value]="typeActivites.id">{{typeActivites.type}}</option>
                      </select>
                      
                    </div>
                
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Etape <span class="text-danger">*</span></label>
                      <select  class="form-control h-100 readonly-select" multiple="" (ngModelChange)="onEtapesChange($event)" formControlName="etape">
                        <option value="" [ngValue]="null" disabled>&#45;&#45; S\xE9lectionnez un ou plusieurs Etape &#45;&#45;</option>
                        <option *ngFor="let etapes of etape" [ngValue]="etapes.id">{{etapes.nom}}</option>
                      </select>
                     
                    </div>
                  </div>
                  <div class="modal-footer">
                    <!-- <button type="submit" class="btn btn-warning" [disabled]="!editForm.valid || loadingIndicator">
                      <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      {{ loadingIndicator ? 'Chargement...' : 'Enregistre' }}
                    </button> -->

                    <button type="button" class="btn btn-dark text-white" (click)="modal.close('Close click')">Fermer</button>
                  </div>
                </form>
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`, styles: ["/* src/app/personnels/activity/activity.component.scss */\n.readonly-select {\n  background-color: #e9ecef;\n  pointer-events: none;\n}\n.detail {\n  font-size: 20px;\n  color: #ff7900;\n  font-weight: bold;\n}\n/*# sourceMappingURL=activity.component.css.map */\n"] }]
  }], () => [{ type: NgZone }, { type: ChangeDetectorRef }, { type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: AuthService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivityComponent, { className: "ActivityComponent", filePath: "src/app/personnels/activity/activity.component.ts", lineNumber: 44 });
})();
export {
  ActivityComponent
};
//# sourceMappingURL=activity.component-QQSXE6H2.js.map
