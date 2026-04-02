import {
  SupportactivityService
} from "./chunk-E7XVZIEE.js";
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
  ReactiveFormsModule,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ViewChild,
  setClassMetadata,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/activitysupport/activitysupport.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ActivitysupportComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" total: ", ctx_r2.taille ? ctx_r2.taille.tailleRapport + " B" : "0 B", " ");
  }
}
function ActivitysupportComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" total: ", ctx_r2.taille ? ctx_r2.taille.tailleImage + " B" : "0 B", " ");
  }
}
function ActivitysupportComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" total: ", ctx_r2.taille ? ctx_r2.taille.tailleVideo + " B" : "0 B", " ");
  }
}
function ActivitysupportComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.nom);
  }
}
function ActivitysupportComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.activiteNom);
  }
}
function ActivitysupportComponent_ng_template_59_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r6.statut, " ");
  }
}
function ActivitysupportComponent_ng_template_59_Conditional_2_Template(rf, ctx) {
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
function ActivitysupportComponent_ng_template_59_Conditional_3_Template(rf, ctx) {
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
function ActivitysupportComponent_ng_template_59_Conditional_4_Template(rf, ctx) {
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
function ActivitysupportComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, ActivitysupportComponent_ng_template_59_Conditional_1_Template, 2, 1, "div", 44)(2, ActivitysupportComponent_ng_template_59_Conditional_2_Template, 2, 1, "div", 45)(3, ActivitysupportComponent_ng_template_59_Conditional_3_Template, 2, 1, "div", 46)(4, ActivitysupportComponent_ng_template_59_Conditional_4_Template, 2, 1, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.statut === "En_ATTENTE" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.statut === "VALIDER" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.statut === "A_CORRIGER" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.statut === "REFUSER" ? 4 : -1);
  }
}
function ActivitysupportComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, row_r7.dateAjout, "dd/MM/yyyy"));
  }
}
function ActivitysupportComponent_ng_template_63_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ActivitysupportComponent_ng_template_63_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.download(row_r9));
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275listener("click", function ActivitysupportComponent_ng_template_63_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r9 = \u0275\u0275nextContext();
      const row_r9 = ctx_r9.row;
      const rowIndex_r11 = ctx_r9.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const editRecord_r12 = \u0275\u0275reference(67);
      return \u0275\u0275resetView(ctx_r2.editRow(row_r9, rowIndex_r11, editRecord_r12));
    });
    \u0275\u0275element(3, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function ActivitysupportComponent_ng_template_63_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSingleRow(row_r9));
    });
    \u0275\u0275element(5, "i", 52);
    \u0275\u0275elementEnd();
  }
}
function ActivitysupportComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, ActivitysupportComponent_ng_template_63_Conditional_1_Template, 6, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currenUserData && row_r9.emailutilisateurAutorise === ctx_r2.currenUserData.email ? 1 : -1);
  }
}
function ActivitysupportComponent_ng_template_64_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activite_r15 = ctx.$implicit;
    \u0275\u0275property("value", activite_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activite_r15.nom);
  }
}
function ActivitysupportComponent_ng_template_64_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, " L'activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivitysupportComponent_ng_template_64_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const utilisateur_r16 = ctx.$implicit;
    \u0275\u0275property("value", utilisateur_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(utilisateur_r16.nom);
  }
}
function ActivitysupportComponent_ng_template_64_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, " L'utilisateur est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivitysupportComponent_ng_template_64_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, " Le fichier est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivitysupportComponent_ng_template_64_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 74);
  }
}
function ActivitysupportComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "button", 54);
    \u0275\u0275listener("click", function ActivitysupportComponent_ng_template_64_Template_button_click_1_listener() {
      const modal_r14 = \u0275\u0275restoreView(_r13).$implicit;
      return \u0275\u0275resetView(modal_r14.dismiss());
    });
    \u0275\u0275elementStart(2, "span", 55)(3, "i", 29);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "div", 56)(6, "form", 57);
    \u0275\u0275listener("ngSubmit", function ActivitysupportComponent_ng_template_64_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAddRowSave(ctx_r2.register));
    });
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 58)(9, "label");
    \u0275\u0275text(10, "Activit\xE9 ");
    \u0275\u0275elementStart(11, "span", 59);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "select", 60)(14, "option", 61);
    \u0275\u0275text(15, "-- S\xE9lectionnez une activit\xE9e --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ActivitysupportComponent_ng_template_64_option_16_Template, 2, 2, "option", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ActivitysupportComponent_ng_template_64_Conditional_17_Template, 2, 0, "small", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 58)(19, "label");
    \u0275\u0275text(20, "Utilisateur ");
    \u0275\u0275elementStart(21, "span", 59);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "select", 64)(24, "option", 61);
    \u0275\u0275text(25, "-- S\xE9lectionnez une utilisateur --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ActivitysupportComponent_ng_template_64_option_26_Template, 2, 2, "option", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ActivitysupportComponent_ng_template_64_Conditional_27_Template, 2, 0, "small", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 65)(29, "label");
    \u0275\u0275text(30, "Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "textarea", 66);
    \u0275\u0275text(32, "\n                        ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 65)(34, "label", 67);
    \u0275\u0275text(35, "Fichier joint ");
    \u0275\u0275elementStart(36, "span", 59);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 68);
    \u0275\u0275listener("change", function ActivitysupportComponent_ng_template_64_Template_input_change_39_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, ActivitysupportComponent_ng_template_64_Conditional_40_Template, 2, 0, "small", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 69)(42, "button", 70);
    \u0275\u0275template(43, ActivitysupportComponent_ng_template_64_span_43_Template, 1, 0, "span", 71);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 72);
    \u0275\u0275listener("click", function ActivitysupportComponent_ng_template_64_Template_button_click_45_listener() {
      const modal_r14 = \u0275\u0275restoreView(_r13).$implicit;
      return \u0275\u0275resetView(modal_r14.close("Close click"));
    });
    \u0275\u0275text(46, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.register);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.Activitys);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r2.editForm.get("idActivite")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r2.editForm.get("idActivite")) == null ? null : tmp_8_0.touched) ? 17 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.Utilisateurs);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r2.editForm.get("idutilisateur")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r2.editForm.get("idutilisateur")) == null ? null : tmp_11_0.touched) ? 27 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(!ctx_r2.selectedFile ? 40 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.register.valid || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function ActivitysupportComponent_ng_template_66_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 85);
    \u0275\u0275element(5, "i", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, item_r19.dateModification, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r19.statut, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.supportNom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.commentaire);
  }
}
function ActivitysupportComponent_ng_template_66_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ActivitysupportComponent_ng_template_66_Conditional_10_For_1_Template, 11, 7, "div", 84, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275element(2, "hr");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.selectedRowData.historiques);
  }
}
function ActivitysupportComponent_ng_template_66_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, " Le statut est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivitysupportComponent_ng_template_66_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, " Le commentaire est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function ActivitysupportComponent_ng_template_66_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "label");
    \u0275\u0275text(2, "Commentaire ");
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "textarea", 88);
    \u0275\u0275text(6, "\n                              ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ActivitysupportComponent_ng_template_66_Conditional_30_Conditional_7_Template, 2, 0, "small", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r2.editForm.get("commentaire")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r2.editForm.get("commentaire")) == null ? null : tmp_6_0.touched) ? 7 : -1);
  }
}
function ActivitysupportComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "h4", 75)(2, "div", 76)(3, "div", 77);
    \u0275\u0275element(4, "div", 78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function ActivitysupportComponent_ng_template_66_Template_button_click_5_listener() {
      const modal_r18 = \u0275\u0275restoreView(_r17).$implicit;
      return \u0275\u0275resetView(modal_r18.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(6, "span", 55)(7, "i", 29);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 56);
    \u0275\u0275template(10, ActivitysupportComponent_ng_template_66_Conditional_10_Template, 3, 0);
    \u0275\u0275elementStart(11, "form", 79);
    \u0275\u0275listener("ngSubmit", function ActivitysupportComponent_ng_template_66_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditSave(ctx_r2.editForm));
    });
    \u0275\u0275elementStart(12, "div", 80);
    \u0275\u0275element(13, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16)(15, "div", 82)(16, "label");
    \u0275\u0275text(17, "Statut du support");
    \u0275\u0275elementStart(18, "span", 59);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "select", 83)(21, "option", 61);
    \u0275\u0275text(22, "-- S\xE9lectionnez le statut --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 73);
    \u0275\u0275text(24, "VALIDER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 73);
    \u0275\u0275text(26, "A CORRIGER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 73);
    \u0275\u0275text(28, "REFUSER");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, ActivitysupportComponent_ng_template_66_Conditional_29_Template, 2, 0, "small", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ActivitysupportComponent_ng_template_66_Conditional_30_Template, 8, 1, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 69)(32, "button", 70);
    \u0275\u0275text(33, "Enregistre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 72);
    \u0275\u0275listener("click", function ActivitysupportComponent_ng_template_66_Template_button_click_34_listener() {
      const modal_r18 = \u0275\u0275restoreView(_r17).$implicit;
      return \u0275\u0275resetView(modal_r18.close());
    });
    \u0275\u0275text(35, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r2.selectedRowData && ctx_r2.selectedRowData.historiques && ctx_r2.selectedRowData.historiques.length > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "VALIDER");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "A_CORRIGER");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "REFUSER");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r2.editForm.get("statut")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r2.editForm.get("statut")) == null ? null : tmp_11_0.touched) ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editForm.value.statut === "A_CORRIGER" ? 30 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.editForm.valid);
  }
}
var ActivitysupportComponent = class _ActivitysupportComponent {
  constructor(fb, modalService, toastr, glogalService, authService, supportactivityService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.authService = authService;
    this.supportactivityService = supportactivityService;
    this.rows = [];
    this.salles = [];
    this.Activitys = [];
    this.ActivitySupport = [];
    this.typeliste = "RAPPORT";
    this.ActivitySupportOnglets = [];
    this.Utilisateurs = [];
    this.selectedFile = null;
    this.listType = "1";
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.columns = [
      { prop: "nom" },
      { prop: "capacite" }
    ];
    this.taille = "";
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      statut: new UntypedFormControl(),
      commentaire: new UntypedFormControl(),
      idutilisateur: new UntypedFormControl()
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
    this.selection = SelectionType.checkbox;
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
    this.getAllActivitys();
    this.getAllSupport();
    this.getUtilisateur();
    this.getAllOnglet();
    this.register = this.fb.group({
      idActivite: ["", [Validators.required]],
      description: [""],
      fichier: ["", [Validators.required]],
      idutilisateur: [0, [Validators.required]]
    });
    const userString = localStorage.getItem("currentUser");
    if (userString) {
      const user = JSON.parse(userString);
      const token = user.bearer;
      if (token) {
        const decoded = this.authService.getDecodedToken(token);
        this.currenUserData = decoded;
      }
    }
  }
  // fetch data
  getAllActivitys() {
    this.loadingIndicator = true;
    this.glogalService.get("activite").subscribe({
      next: (value) => {
        this.Activitys = value;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllSupport() {
    this.loadingIndicator = true;
    this.glogalService.get(`api/supports/type/${this.typeliste}`).subscribe({
      next: (value) => {
        this.ActivitySupport = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllOnglet() {
    this.loadingIndicator = true;
    this.glogalService.get("api/stats/fichiers/par-type").subscribe({
      next: (value) => {
        this.taille = value;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  handleList(type) {
    this.loadingIndicator = true;
    this.glogalService.get(`api/supports/type/${type}`).subscribe({
      next: (value) => {
        this.ActivitySupport = value;
        this.typeliste = type;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  download(row) {
    this.loadingIndicator = true;
    this.supportactivityService.download(row.id).subscribe({
      next: (value) => {
        console.log("value -> ", value);
        const blob = value.body;
        const contentDisposition = value.headers.get("content-disposition");
        let filename = `${row.nom}`;
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="(.+)"/);
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
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err) => {
        console.error("Erreur t\xE9l\xE9chargement", err);
      }
    });
  }
  getUtilisateur() {
    this.loadingIndicator = true;
    this.glogalService.get("utilisateur").subscribe({
      next: (value) => {
        this.Utilisateurs = value;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.register.patchValue({ fichier: file });
      this.register.get("fichier")?.updateValueAndValidity();
    }
  }
  onAddRowSave(form) {
    this.loadingIndicator = true;
    const fd = new FormData();
    fd.append("file", form.value.fichier);
    fd.append("idActivite", form.value.idActivite);
    fd.append("description", form.value.description);
    fd.append("utilisateurId", form.value.idutilisateur);
    this.glogalService.post("api/supports/upload-validated", fd).subscribe({
      next: (response) => {
        form.reset();
        this.selectedFile = null;
        this.modalService.dismissAll();
        this.getAllSupport();
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
      size: "medium"
    });
  }
  // edit record
  editRow(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "meduim"
    });
    this.editForm.setValue({
      id: row.id,
      statut: "",
      idutilisateur: "",
      commentaire: ""
    });
    this.selectedRowData = row;
  }
  displayFile(row) {
    window.open(`${row.url}`, "_blank");
  }
  // delete single row
  deleteSingleRow(row) {
    import_sweetalert2.default.fire({
      title: "Voulez vous vraiment supprimer?",
      showCancelButton: true,
      confirmButtonColor: "#8963ff",
      cancelButtonColor: "#fb7823",
      confirmButtonText: "Oui"
    }).then((result) => {
      if (result.value) {
        this.deleteRecord(row);
        this.deleteRecordSuccess(1);
      }
    });
  }
  deleteRecord(row) {
    this.glogalService.delete("api/supports/delete", row.id).subscribe({
      next: (response) => {
        this.salles = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllSupport();
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
      const updatedSupport = form.value;
      const fd = new FormData();
      fd.append("statut", updatedSupport.statut);
      fd.append("commentaire", updatedSupport.commentaire);
      this.glogalService.update("api/supports/update", updatedSupport.id, fd).subscribe({
        next: (resp) => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllSupport();
        },
        error: (err) => {
          console.error("Erreur lors de la mise \xE0 jour du support activit\xE9:", err);
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
    this.ActivitySupport = this.filteredData.filter((item) => {
      return Object.values(item).some((field) => field?.toString().toLowerCase().includes(val));
    });
    this.table.offset = 0;
  }
  addRecordSuccess() {
    this.toastr.success("Adjonction r\xE9alis\xE9e avec succ\xE8s.", "");
  }
  editRecordSuccess() {
    this.toastr.success("Modification op\xE9r\xE9", "");
  }
  deleteRecordSuccess(count) {
    this.toastr.error(count + "Eradication diligente pleinement consomm\xE9e.", "");
  }
  static {
    this.\u0275fac = function ActivitysupportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivitysupportComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SupportactivityService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivitysupportComponent, selectors: [["app-activitysupport"]], viewQuery: function ActivitysupportComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 68, vars: 31, consts: [["table", ""], ["addRecord", ""], ["editRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-12"], [1, "row", "m-0"], [1, "col-lg-12", "p-0"], [1, "ngxTableHeader"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left", 2, "width", "100%"], [1, "tbl-btn-style", 2, "width", "100%"], [1, "col-sm-12", "col-md-4", "col-lg-4", "pt-2"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [1, "material-icons"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], [1, "col-sm-12", "col-md-8", "col-lg-8"], [3, "click"], [1, "fas", "fa-file"], [2, "font-size", "10px"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Nom fichier", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Activit\xE9", 3, "width"], ["name", "Statut", 3, "width"], ["name", "Date", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "name-col-style"], [1, "badge-outline", "col-indigo"], [1, "badge-outline", "col-green"], [1, "badge-outline", "col-orange"], [1, "badge-outline", "col-red"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-download"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], [1, "modal-header", "editRowModal"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["formControlName", "idActivite", "readonly", "", 1, "form-select", "form-control", "readonly-select"], ["value", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-text", "text-danger"], ["formControlName", "idutilisateur", "readonly", "", 1, "form-select", "form-control", "readonly-select"], [1, "col-xl-12", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["placeholder", "Description ...", "formControlName", "description", 1, "form-control"], ["for", "fichier"], ["type", "file", "id", "fichier", "accept", ".pdf,.png,.jpg,.jpeg,.docx,.mp4,.csv,.xlsx,.xlsx", "required", "", 1, "form-control", 3, "change"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "statut", "readonly", "", 1, "form-select", "form-control", "readonly-select"], [1, "shadow-sm", "mb-3", 2, "border-left", "1.5px solid orange", "border-radius", "5px", "padding-left", "5px"], [2, "font-size", "12px"], [1, "text-warning", "fa", "fa-squard"], [1, "text-warning", 2, "font-size", "12px"], ["placeholder", "Commentaire ...", "formControlName", "commentaire", 1, "form-control"]], template: function ActivitysupportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 3)(1, "ul", 4)(2, "li", 5)(3, "h5", 6);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 7)(6, "a", 8);
        \u0275\u0275element(7, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 5);
        \u0275\u0275text(9, " Support des activit\xE9es");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11, "Consultez et g\xE9rez les informations de cette section.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20)(22, "div", 21)(23, "div")(24, "label", 22)(25, "i", 23);
        \u0275\u0275text(26, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "input", 24);
        \u0275\u0275listener("keyup", function ActivitysupportComponent_Template_input_keyup_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 25)(29, "div", 26)(30, "div", 16)(31, "div", 27)(32, "button", 28);
        \u0275\u0275listener("click", function ActivitysupportComponent_Template_button_click_32_listener() {
          \u0275\u0275restoreView(_r1);
          const addRecord_r2 = \u0275\u0275reference(65);
          return \u0275\u0275resetView(ctx.addRow(addRecord_r2));
        });
        \u0275\u0275elementStart(33, "i", 29);
        \u0275\u0275text(34, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "button", 30);
        \u0275\u0275listener("click", function ActivitysupportComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(36, "i", 29);
        \u0275\u0275text(37, "delete");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 31)(39, "button", 32);
        \u0275\u0275listener("click", function ActivitysupportComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleList("RAPPORT"));
        });
        \u0275\u0275element(40, "i", 33);
        \u0275\u0275text(41, " M\xE9dia documents ");
        \u0275\u0275template(42, ActivitysupportComponent_Conditional_42_Template, 2, 1, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 32);
        \u0275\u0275listener("click", function ActivitysupportComponent_Template_button_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleList("IMAGE"));
        });
        \u0275\u0275element(44, "i", 33);
        \u0275\u0275text(45, " M\xE9dia image ");
        \u0275\u0275template(46, ActivitysupportComponent_Conditional_46_Template, 2, 1, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 32);
        \u0275\u0275listener("click", function ActivitysupportComponent_Template_button_click_47_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleList("VIDEO"));
        });
        \u0275\u0275element(48, "i", 33);
        \u0275\u0275text(49, " M\xE9dia vid\xE9o ");
        \u0275\u0275template(50, ActivitysupportComponent_Conditional_50_Template, 2, 1, "div", 34);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(51, "ngx-datatable", 35, 0);
        \u0275\u0275listener("select", function ActivitysupportComponent_Template_ngx_datatable_select_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275element(53, "ngx-datatable-column", 36);
        \u0275\u0275elementStart(54, "ngx-datatable-column", 37);
        \u0275\u0275template(55, ActivitysupportComponent_ng_template_55_Template, 3, 1, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "ngx-datatable-column", 39);
        \u0275\u0275template(57, ActivitysupportComponent_ng_template_57_Template, 3, 1, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "ngx-datatable-column", 40);
        \u0275\u0275template(59, ActivitysupportComponent_ng_template_59_Template, 5, 4, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "ngx-datatable-column", 41);
        \u0275\u0275template(61, ActivitysupportComponent_ng_template_61_Template, 4, 4, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "ngx-datatable-column", 42);
        \u0275\u0275template(63, ActivitysupportComponent_ng_template_63_Template, 2, 1, "ng-template", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(64, ActivitysupportComponent_ng_template_64_Template, 47, 11, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(66, ActivitysupportComponent_ng_template_66_Template, 36, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(35);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.typeliste === "RAPPORT" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.taille && !!ctx.taille ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.typeliste === "IMAGE" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.taille && !!ctx.taille ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.typeliste === "VIDEO" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.taille && !!ctx.taille ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("rows", ctx.ActivitySupport)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", true);
        \u0275\u0275advance();
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("sortable", false);
      }
    }, dependencies: [NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnCellDirective, CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivitysupportComponent, [{
    type: Component,
    args: [{ selector: "app-activitysupport", imports: [NgxDatatableModule, CommonModule, ReactiveFormsModule, FormsModule], template: `<section class="main-content">
    <ul class="breadcrumb breadcrumb-style ">
      <li class="breadcrumb-item">
        <h5 class="page-title m-b-0">Table</h5>
      </li>
      <li class="breadcrumb-item bcrumb-1">
        <a routerLink="/dashboardActivite">
          <i class="fas fa-home font-17"></i></a>
      </li>
      <li class="breadcrumb-item"> Support des activit\xE9es</li>
  </ul>
  <p class="odl-page-subtitle">Consultez et g\xE9rez les informations de cette section.</p>
  <div class="section-body">
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="p-10">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row m-0">
                   
                    <div class="col-lg-12 p-0">
                      <div class="ngxTableHeader">
                        <div class="table-search-area">
                          <div>
                            <label for="search-input"><i class="material-icons search-icon">search</i></label>
                            <input placeholder="Recherche" type="text" class="browser-default search-field"
                                   (keyup)='filterDatatable($event)' aria-label="Search box">
                          </div>
                        </div>
                        <div class="header-buttons-left" style="width: 100%;">
                          <div class="tbl-btn-style" style="width: 100%;">
                            <div class="row">
                              <div class="col-sm-12 col-md-4 col-lg-4 pt-2">
                                <button class="btn btn-icon icon-left bg-warning text-white rounded-button" (click)='addRow(addRecord)'>
                                  <i class="material-icons">add</i>
                                </button>
                                <button [hidden]=!isRowSelected class="btn btn-icon icon-left btn-danger rounded-button"
                                        (click)='deleteSelected()'>
                                  <i class="material-icons">delete</i>
                                </button>
                             </div>
                              <div class="col-sm-12 col-md-8 col-lg-8">
                                
                                <!-- <button [class]="listType === '1' ? 'btn btn-warning' : 'btn btn shadow-sm'"  (click)="handleList('1')"> -->
                                <button [class]="this.typeliste ==='RAPPORT' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'" (click)="handleList('RAPPORT')">
                                  <i class="fas fa-file"></i>
                                    M\xE9dia documents
                                    @if(this.taille && !!this.taille){
                                      <div style="font-size: 10px;">
                                        total: {{taille ? taille.tailleRapport+ ' B': '0 B'}}
                                      </div>
                                    }
                                </button>

                                <button [class]="this.typeliste ==='IMAGE' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'" (click)="handleList('IMAGE')">
                                  <i class="fas fa-file"></i>
                                    M\xE9dia image
                                    @if(this.taille && !!this.taille){
                                      <div style="font-size: 10px;">
                                        total: {{taille ? taille.tailleImage+ ' B': '0 B'}}
                                      </div>
                                    }
                                </button>

                                <button [class]="this.typeliste ==='VIDEO' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'" (click)="handleList('VIDEO')">
                                  <i class="fas fa-file"></i>
                                    M\xE9dia vid\xE9o
                                    @if(this.taille && !!this.taille){
                                      <div style="font-size: 10px;">
                                        total: {{taille ? taille.tailleVideo+ ' B': '0 B'}}
                                      </div>
                                    }
                                </button>

                                <!-- <button [class]="listType === '2' ? 'btn btn-warning' : 'btn btn shadow-sm'" (click)="handleList('2')">
                                  <i class="fas fa-calendar"></i>
                                    M\xE9dia Planning
                                    <div style="font-size: 10px;">
                                      total: 230
                                    </div>
                                </button> -->
                                <!-- <button [class]="listType === '2' ? 'btn btn-warning' : 'btn shadow-sm'" (click)="handleList('2')"> -->
                            
                                    <!-- <button class="btn btn-warning">
                                  <i class="fas fa-play"></i>
                                    M\xE9dia vid\xE9o/image
                                      <div style="font-size: 10px;">
                                        total: 0
                                      </div>                                    
                                </button> -->
                              </div>
                            </div>



                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ngx-datatable #table class="material" [rows]="ActivitySupport" [loadingIndicator]="loadingIndicator"
                             columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                             [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                             [selectionType]="selection" (select)='onSelect($event)'>
                <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                      [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">
                </ngx-datatable-column>
                <ngx-datatable-column [width]="200" name="Nom fichier">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.nom}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column>
                <ngx-datatable-column [width]="200" name="Activit\xE9">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.activiteNom}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column>

                <ngx-datatable-column [width]="200" name="Statut">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      @if (row.statut === 'En_ATTENTE') {
                        <div class="badge-outline col-indigo">{{row.statut}}
                        </div>
                      }
                      @if (row.statut === 'VALIDER') {
                        <div class="badge-outline col-green">{{row.statut}}
                        </div>
                      }
                      @if (row.statut === 'A_CORRIGER') {
                        <div class="badge-outline col-orange">{{row.statut}}
                        </div>
                      }
                      @if (row.statut === 'REFUSER') {
                        <div class="badge-outline col-red">{{row.statut}}
                        </div>
                      }
                    </div>
                  </ng-template>
                </ngx-datatable-column>

                <!-- <ngx-datatable-column [width]="200" name="Type">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.type}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column> -->
                <ngx-datatable-column [width]="200" name="Date">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.dateAjout | date: 'dd/MM/yyyy'}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column>
                <ngx-datatable-column name="Actions" [sortable]="false">
                  <ng-template let-value="value" let-row="row" let-rowIndex="rowIndex" ngx-datatable-cell-template>
                    <span>
                      <!-- <button class="btn btn-tbl-edit h-auto" (click)='displayFile(row)'>
                        <i class="fas fa-eye"></i>
                      </button> -->
                      @if(this.currenUserData && row.emailutilisateurAutorise === this.currenUserData.email){
                        <button class="btn btn-tbl-edit h-auto" (click)='download(row)'>
                            <i class="fas fa-download"></i>
                          </button>
                        <button class="btn btn-tbl-edit h-auto" (click)='editRow(row, rowIndex, editRecord)'>
                            <i class="fas fa-pen"></i>
                          </button>
                        <button class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>
                            <i class="far fa-trash-alt"></i>
                        </button>
                      }

                    </span>
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
                  <form class="register-form" [formGroup]="register" (ngSubmit)="onAddRowSave(register)">
                    <div class="row">
                      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                        <label>Activit\xE9 <span class="text-danger">*</span></label>
                        <select class="form-select form-control readonly-select" formControlName="idActivite" readonly>
                          <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une activit\xE9e --</option>
                          <option *ngFor="let activite of Activitys"  [value]="activite.id">{{activite.nom}}</option>
                        </select>
                        @if (!editForm.get('idActivite')?.valid && editForm.get('idActivite')?.touched) {

                          <small class="form-text text-danger"> L'activit\xE9 est
                            obligatoire</small>
                        }
                        
                      </div>

                      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                        <label>Utilisateur <span class="text-danger">*</span></label>
                        <select class="form-select form-control readonly-select" formControlName="idutilisateur" readonly>
                          <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une utilisateur --</option>
                          <option *ngFor="let utilisateur of Utilisateurs"  [value]="utilisateur.id">{{utilisateur.nom}}</option>
                        </select>
                        @if (!editForm.get('idutilisateur')?.valid && editForm.get('idutilisateur')?.touched) {

                          <small class="form-text text-danger"> L'utilisateur est
                            obligatoire</small>
                        }
                        
                      </div>

                      <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                        <label>Description </label>
                        <textarea class="form-control" placeholder="Description ..." formControlName="description">

                        </textarea>
                        <!-- @if (!editForm.get('description')?.valid && editForm.get('description')?.touched) {
                          <small class="form-text text-danger"> La description est
                            obligatoire</small>
                        } -->
                      </div>
                      
                      <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                        <label for="fichier">Fichier joint <span class="text-danger">*</span>:</label>
                        <input 
                          type="file"
                          id="fichier"
                          (change)="onFileSelected($event)" 
                          accept=".pdf,.png,.jpg,.jpeg,.docx,.mp4,.csv,.xlsx,.xlsx"
                          class="form-control" required
                        />
                        @if (!this.selectedFile) {
                          <small class="form-text text-danger"> Le fichier est
                            obligatoire</small>
                        }
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
                          <!-- {{selectedRowData!.activiteNom}} -->
                        </div>
                      </div>
                    </div>
                  </h4>
                  <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                    <span aria-hidden="true"><i class="material-icons">close</i></span>
                  </button>
                </div>
                <div class="modal-body">
                  
                  @if (this.selectedRowData && this.selectedRowData.historiques && this.selectedRowData.historiques!.length > 0) {
                    @for (item of this.selectedRowData.historiques; track item) {
                      <div class="shadow-sm mb-3" style="border-left: 1.5px solid orange; border-radius: 5px; padding-left: 5px;">
                          <div style="font-size: 12px;">{{item.dateModification | date: 'dd/MM/yyyy'}}</div>
                          <span style="font-size: 12px;"> <i class="text-warning fa fa-squard" ></i> {{item.statut}}</span>
                          <div class="text-warning" style="font-size: 12px;">{{item.supportNom}}</div>
                          <p>{{item.commentaire}}</p>
                      </div>
                    }
                    <hr>
                  }
                  <form [formGroup]="editForm" (ngSubmit)="onEditSave(editForm)">
                    <div class="input-field col s12 d-none">
                      <input formControlName="id" class="form-control" type="hidden">
                    </div>
                      <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                          <label>Statut du support<span class="text-danger">*</span></label>
                          <select class="form-select form-control readonly-select" formControlName="statut" readonly>
                            <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez le statut --</option>
                            <option  [value]="'VALIDER'">VALIDER</option>
                            <option  [value]="'A_CORRIGER'">A CORRIGER</option>
                            <option  [value]="'REFUSER'">REFUSER</option>
                          </select>
                          @if (!editForm.get('statut')?.valid && editForm.get('statut')?.touched) {
                            <small class="form-text text-danger"> Le statut est
                              obligatoire</small>
                          }
                          
                        </div>
                          @if (this.editForm.value.statut ==='A_CORRIGER') {
                            <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                              <label>Commentaire <span class="text-danger">*</span></label>
                              <textarea class="form-control" placeholder="Commentaire ..." formControlName="commentaire">

                              </textarea>
                              @if (!editForm.get('commentaire')?.valid && editForm.get('commentaire')?.touched) {
                                <small class="form-text text-danger"> Le commentaire est
                                  obligatoire</small>
                              }
                            </div>
                          }
                      </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-warning" [disabled]="!editForm.valid">Enregistre</button>
                      <button type="button" class="btn btn-dark text-white" (click)="modal.close()">Fermer</button>
                    </div>
                  </form>
                </div>
              </ng-template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  ` }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: AuthService }, { type: SupportactivityService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivitysupportComponent, { className: "ActivitysupportComponent", filePath: "src/app/personnels/activitysupport/activitysupport.component.ts", lineNumber: 24 });
})();
export {
  ActivitysupportComponent
};
//# sourceMappingURL=activitysupport.component-MBCYFCTP.js.map
