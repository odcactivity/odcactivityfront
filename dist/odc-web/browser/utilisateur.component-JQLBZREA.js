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
  NgIf,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EQOE5FII.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/admin/utilisateur/utilisateur.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function UtilisateurComponent_div_29_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
}
function UtilisateurComponent_div_29_img_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
  }
}
function UtilisateurComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "div", 29)(4, "div", 30)(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, UtilisateurComponent_div_29_img_9_Template, 1, 0, "img", 33)(10, UtilisateurComponent_div_29_img_10_Template, 1, 0, "img", 34);
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "span", 35)(17, "i", 22);
    \u0275\u0275text(18, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span")(21, "button", 36);
    \u0275\u0275listener("click", function UtilisateurComponent_div_29_Template_button_click_21_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      const editRecord_r6 = \u0275\u0275reference(33);
      return \u0275\u0275resetView(ctx_r4.editRow(row_r4, editRecord_r6));
    });
    \u0275\u0275element(22, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 38);
    \u0275\u0275listener("click", function UtilisateurComponent_div_29_Template_button_click_23_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteSingleRow(row_r4));
    });
    \u0275\u0275element(24, "i", 39);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(row_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.prenom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.genre === "Homme");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.genre === "Femme");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r4.role == null ? null : row_r4.role.nom, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", row_r4.phone, " ");
  }
}
function UtilisateurComponent_ng_template_30_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " Le nom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_30_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " Prenom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_30_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " L'email est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_30_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " Phone est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_30_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r9 = ctx.$implicit;
    \u0275\u0275property("value", status_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r9);
  }
}
function UtilisateurComponent_ng_template_30_option_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entite_r10 = ctx.$implicit;
    \u0275\u0275property("value", entite_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entite_r10.nom);
  }
}
function UtilisateurComponent_ng_template_30_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const roles_r11 = ctx.$implicit;
    \u0275\u0275property("value", roles_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(roles_r11.nom);
  }
}
function UtilisateurComponent_ng_template_30_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 68);
  }
}
function UtilisateurComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "h5", 44);
    \u0275\u0275text(3, "Formulaire d'ajout d'un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 45);
    \u0275\u0275text(5, "Cr\xE9er un nouvel utilisateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function UtilisateurComponent_ng_template_30_Template_button_click_6_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 47)(8, "i", 22);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 48)(11, "form", 49);
    \u0275\u0275listener("ngSubmit", function UtilisateurComponent_ng_template_30_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onAddRowSave(ctx_r4.register));
    });
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 50)(14, "label");
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 51);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 52);
    \u0275\u0275template(19, UtilisateurComponent_ng_template_30_Conditional_19_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 50)(21, "label");
    \u0275\u0275text(22, "Prenom");
    \u0275\u0275elementStart(23, "span", 51);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 54);
    \u0275\u0275template(26, UtilisateurComponent_ng_template_30_Conditional_26_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 10)(28, "div", 50)(29, "label");
    \u0275\u0275text(30, "Email ");
    \u0275\u0275elementStart(31, "span", 51);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 55);
    \u0275\u0275template(34, UtilisateurComponent_ng_template_30_Conditional_34_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 50)(36, "label");
    \u0275\u0275text(37, "Phone");
    \u0275\u0275elementStart(38, "span", 51);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(40, "input", 56);
    \u0275\u0275template(41, UtilisateurComponent_ng_template_30_Conditional_41_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 10)(43, "div", 50)(44, "label");
    \u0275\u0275text(45, "Genre ");
    \u0275\u0275elementStart(46, "span", 51);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "select", 57)(49, "option", 58);
    \u0275\u0275text(50, "Selectionner genre");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, UtilisateurComponent_ng_template_30_option_51_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 10)(53, "div", 50)(54, "label");
    \u0275\u0275text(55, "Entite ");
    \u0275\u0275elementStart(56, "span", 51);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "select", 60)(59, "option", 58);
    \u0275\u0275text(60, "Selectionner une entite");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, UtilisateurComponent_ng_template_30_option_61_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 61)(63, "label");
    \u0275\u0275text(64, "Role");
    \u0275\u0275elementStart(65, "span", 51);
    \u0275\u0275text(66, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "select", 62)(68, "option", 58);
    \u0275\u0275text(69, "Selectionner un role");
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, UtilisateurComponent_ng_template_30_option_70_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 63)(72, "button", 64);
    \u0275\u0275template(73, UtilisateurComponent_ng_template_30_span_73_Template, 1, 0, "span", 65);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 66);
    \u0275\u0275listener("click", function UtilisateurComponent_ng_template_30_Template_button_click_75_listener() {
      const modal_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(modal_r8.close("Close click"));
    });
    \u0275\u0275text(76, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r4.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_5_0 = ctx_r4.register.get("nom")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx_r4.register.get("nom")) == null ? null : tmp_5_0.touched) ? 19 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r4.register.get("prenom")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r4.register.get("prenom")) == null ? null : tmp_6_0.touched) ? 26 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r4.register.get("email")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r4.register.get("email")) == null ? null : tmp_7_0.touched) ? 34 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r4.register.get("phone")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r4.register.get("phone")) == null ? null : tmp_8_0.touched) ? 41 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r4.genre);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r4.entite);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r4.register.valid || ctx_r4.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function UtilisateurComponent_ng_template_32_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " Le nom et obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_32_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " Prenom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_32_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " L'email est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_32_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1, " Phone est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function UtilisateurComponent_ng_template_32_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r14 = ctx.$implicit;
    \u0275\u0275property("value", status_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r14);
  }
}
function UtilisateurComponent_ng_template_32_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entite_r15 = ctx.$implicit;
    \u0275\u0275property("value", entite_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entite_r15.nom);
  }
}
function UtilisateurComponent_ng_template_32_option_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const roles_r16 = ctx.$implicit;
    \u0275\u0275property("value", roles_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(roles_r16.nom);
  }
}
function UtilisateurComponent_ng_template_32_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 68);
  }
}
function UtilisateurComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "h5", 44);
    \u0275\u0275text(3, "Modifier un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 45);
    \u0275\u0275text(5, "Formulaire de modification d'un utilisateur existant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function UtilisateurComponent_ng_template_32_Template_button_click_6_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 47)(8, "i", 22);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 48)(11, "form", 69);
    \u0275\u0275listener("ngSubmit", function UtilisateurComponent_ng_template_32_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onEditSave(ctx_r4.editForm));
    });
    \u0275\u0275elementStart(12, "div", 70);
    \u0275\u0275element(13, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 50)(16, "label");
    \u0275\u0275text(17, "Nom ");
    \u0275\u0275elementStart(18, "span", 51);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 72);
    \u0275\u0275template(21, UtilisateurComponent_ng_template_32_Conditional_21_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 50)(23, "label");
    \u0275\u0275text(24, "Prenom");
    \u0275\u0275elementStart(25, "span", 51);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 54);
    \u0275\u0275template(28, UtilisateurComponent_ng_template_32_Conditional_28_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 10)(30, "div", 50)(31, "label");
    \u0275\u0275text(32, "Email ");
    \u0275\u0275elementStart(33, "span", 51);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 55);
    \u0275\u0275template(36, UtilisateurComponent_ng_template_32_Conditional_36_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 50)(38, "label");
    \u0275\u0275text(39, "Phone");
    \u0275\u0275elementStart(40, "span", 51);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "input", 56);
    \u0275\u0275template(43, UtilisateurComponent_ng_template_32_Conditional_43_Template, 2, 0, "small", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 10)(45, "div", 50)(46, "label");
    \u0275\u0275text(47, "Genre ");
    \u0275\u0275elementStart(48, "span", 51);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "select", 57)(51, "option", 58);
    \u0275\u0275text(52, "Selectionner genre");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, UtilisateurComponent_ng_template_32_option_53_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 10)(55, "div", 50)(56, "label");
    \u0275\u0275text(57, "Entite ");
    \u0275\u0275elementStart(58, "span", 51);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "select", 60)(61, "option", 58);
    \u0275\u0275text(62, "Selectionner une entite");
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, UtilisateurComponent_ng_template_32_option_63_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 61)(65, "label");
    \u0275\u0275text(66, "Role");
    \u0275\u0275elementStart(67, "span", 51);
    \u0275\u0275text(68, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "select", 62)(70, "option", 58);
    \u0275\u0275text(71, "Selectionner un role");
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, UtilisateurComponent_ng_template_32_option_72_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 63)(74, "button", 73);
    \u0275\u0275template(75, UtilisateurComponent_ng_template_32_span_75_Template, 1, 0, "span", 65);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 66);
    \u0275\u0275listener("click", function UtilisateurComponent_ng_template_32_Template_button_click_77_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.close());
    });
    \u0275\u0275text(78, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r4.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!((tmp_5_0 = ctx_r4.editForm.get("nom")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx_r4.editForm.get("nom")) == null ? null : tmp_5_0.touched) ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r4.register.get("prenom")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r4.register.get("prenom")) == null ? null : tmp_6_0.touched) ? 28 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r4.register.get("email")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r4.register.get("email")) == null ? null : tmp_7_0.touched) ? 36 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r4.register.get("phone")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r4.register.get("phone")) == null ? null : tmp_8_0.touched) ? 43 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r4.genre);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r4.entite);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r4.register.valid || ctx_r4.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
var UtilisateurComponent = class _UtilisateurComponent {
  constructor(fb, modalService, toastr, glogalService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.rows = [];
    this.users = [];
    this.role = [];
    this.entite = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.columns = [
      { prop: "nom" },
      { prop: "prenom" },
      { prop: "email" },
      { prop: "genre" },
      { prop: "phone" }
    ];
    this.genre = ["Homme", "Femme"];
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      prenom: new UntypedFormControl(),
      email: new UntypedFormControl(),
      genre: new UntypedFormControl(),
      phone: new UntypedFormControl(),
      role: new UntypedFormControl(),
      entite: new UntypedFormControl()
    });
  }
  ngOnInit() {
    this.getAllUtilisateur();
    this.getAllEntite();
    this.getAllRole();
    this.register = this.fb.group({
      id: [""],
      nom: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      prenom: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      genre: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      role: [null, [Validators.required]],
      entite: [null, [Validators.required]]
    });
  }
  getAllUtilisateur() {
    this.loadingIndicator = true;
    this.glogalService.get("utilisateur").subscribe({
      next: (value) => {
        this.users = value;
        console.log("Users", this.users);
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllRole() {
    this.glogalService.get("role").subscribe({
      next: (value) => {
        this.role = value;
        console.log("role", this.role);
      }
    });
  }
  getAllEntite() {
    this.glogalService.get("entite").subscribe({
      next: (value) => {
        this.entite = value;
        console.log("Entite", this.entite);
      }
    });
  }
  onAddRowSave(form) {
    this.loadingIndicator = true;
    console.log("Form value", form.value);
    this.glogalService.post("utilisateur", form.value).subscribe({
      next: (response) => {
        this.users.push(response);
        console.log(response);
        this.users = [...this.users];
        form.reset();
        this.modalService.dismissAll();
        this.getAllUtilisateur();
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
  addRow(content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
  }
  // edit record
  editRow(row, content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    this.editForm.patchValue({
      id: row.id,
      nom: row.nom,
      prenom: row.prenom,
      email: row.email,
      genre: row.genre,
      phone: row.phone,
      role: row.role?.id,
      entite: row.entite?.id
    });
    this.selectedRowData = row;
  }
  onEditSave(form) {
    if (form?.value?.id) {
      const updatedUtilisateur = form.value;
      this.glogalService.update("utilisateur", updatedUtilisateur.id, updatedUtilisateur).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllUtilisateur();
        },
        error: (err) => {
          console.error("Erreur lors de la mise \xE0 jour du r\xF4le :", err);
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
  deleteSingleRow(row) {
    import_sweetalert2.default.fire({
      title: "Voulez vous vraiment supprimer",
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
    this.glogalService.delete("utilisateur", row.id).subscribe({
      next: (response) => {
        this.users = response;
        console.log(response);
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllUtilisateur();
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
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    this.users = this.filteredData.filter((item) => {
      return Object.values(item).some((field) => field?.toString().toLowerCase().includes(val));
    });
  }
  addRecordSuccess() {
    this.toastr.success("Adjonction r\xE9alis\xE9e avec succ\xE8s.", "");
  }
  editRecordSuccess() {
    this.toastr.success("Modification op\xE9r\xE9", "");
  }
  deleteRecordSuccess(count) {
    this.toastr.success("Eradication diligente pleinement consomm\xE9e.", "");
  }
  static {
    this.\u0275fac = function UtilisateurComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtilisateurComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilisateurComponent, selectors: [["app-utilisateur"]], decls: 34, vars: 1, consts: [["addRecord", ""], ["editRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home", "font-17"], [1, "section-body"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "card-header"], [1, "col-lg-8", "p-0"], [1, "ngxTableHeader"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "tbl-btn-style"], [1, "btn", "btn-icon", "icon-left", "rounded-button", "btn-warning", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "material-icons"], [1, "card-body"], [1, "row", "g-6"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "border-apply"], [1, "m-b-10"], [1, "contact-grid"], [1, "profile-header", "l-bg-orange"], [1, "user-name"], [1, "name-center"], ["src", "assets/images/users/userhomme.png", "class", "user-img", "alt", "", 4, "ngIf"], ["src", "assets/images/users/userfemme.png", "class", "user-img", "alt", "", 4, "ngIf"], [1, "phone"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], ["src", "assets/images/users/userhomme.png", "alt", "", 1, "user-img"], ["src", "assets/images/users/userfemme.png", "alt", "", 1, "user-img"], [1, "modal-header", "editRowModal"], [1, "modal-title-container"], [1, "modal-title", "fw-bold"], [1, "modal-subtitle", "text-warning"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Nom", "formControlName", "nom", "required", "", 1, "form-control"], [1, "form-text", "text-danger"], ["type", "text", "placeholder", "Prenom", "formControlName", "prenom", 1, "form-control"], ["type", "mail", "placeholder", "Email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Phone", "formControlName", "phone", 1, "form-control"], ["formControlName", "genre", "required", "", 1, "form-select", "form-control"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "entite", "required", "", 1, "form-select", "form-control"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "role", "required", "", 1, "form-select", "form-control"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", "text-white", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["type", "text", "placeholder", "Nom du role", "formControlName", "nom", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"]], template: function UtilisateurComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 2)(1, "ul", 3)(2, "li", 4)(3, "h5", 5);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 6)(6, "a", 7);
        \u0275\u0275element(7, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 4);
        \u0275\u0275text(9, "Utilisateur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div")(19, "label", 17)(20, "i", 18);
        \u0275\u0275text(21, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "input", 19);
        \u0275\u0275listener("keyup", function UtilisateurComponent_Template_input_keyup_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 20)(24, "button", 21);
        \u0275\u0275listener("click", function UtilisateurComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          const addRecord_r2 = \u0275\u0275reference(31);
          return \u0275\u0275resetView(ctx.addRow(addRecord_r2));
        });
        \u0275\u0275elementStart(25, "i", 22);
        \u0275\u0275text(26, "add");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(27, "div", 23)(28, "div", 24);
        \u0275\u0275template(29, UtilisateurComponent_div_29_Template, 25, 7, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, UtilisateurComponent_ng_template_30_Template, 77, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, UtilisateurComponent_ng_template_32_Template, 79, 11, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275property("ngForOf", ctx.users);
      }
    }, dependencies: [
      RouterLink,
      NgForOf,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      NgIf,
      NgxDatatableModule
    ], styles: ['@charset "UTF-8";\n\n\n\n.user-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin-top: -70px;\n  margin-bottom: 20px;\n  border-radius: 9999px;\n  object-fit: cover;\n  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);\n  border: 3px solid #ffffff;\n}\n[_nghost-%COMP%]     .card.border-apply {\n  border-radius: 1.25rem;\n  border: 1px solid rgba(255, 161, 23, 0.25);\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.02);\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 161, 23, 0.12),\n      #0b1120);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n}\n[_nghost-%COMP%]     .card.border-apply:hover {\n  transform: translateY(-6px) scale(1.01);\n  border-color: rgba(255, 161, 23, 0.5);\n  box-shadow: 0 22px 55px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.03);\n}\n[_nghost-%COMP%]     .contact-grid .profile-header.l-bg-orange {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316,\n      #facc15);\n  padding-top: 1.75rem;\n  padding-bottom: 3.25rem;\n  border-bottom-left-radius: 2.5rem;\n  border-bottom-right-radius: 2.5rem;\n  box-shadow: inset 0 -6px 24px rgba(0, 0, 0, 0.22);\n}\n[_nghost-%COMP%]     .contact-grid .profile-header .user-name {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .contact-grid .profile-header .name-center {\n  font-size: 0.95rem;\n  font-weight: 500;\n  opacity: 0.9;\n}\n[_nghost-%COMP%]     .contact-grid p {\n  font-size: 0.875rem;\n  color: rgba(226, 232, 240, 0.9);\n  margin-bottom: 0.35rem;\n}\n[_nghost-%COMP%]     .contact-grid .phone {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  color: rgba(148, 163, 184, 0.95);\n}\n[_nghost-%COMP%]     .contact-grid .btn-tbl-edit, \n[_nghost-%COMP%]     .contact-grid .btn-tbl-delete {\n  border-radius: 9999px;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    background-color 0.18s ease;\n}\n[_nghost-%COMP%]     .contact-grid .btn-tbl-edit {\n  background-color: rgba(34, 197, 94, 0.12);\n  color: #22c55e;\n}\n[_nghost-%COMP%]     .contact-grid .btn-tbl-delete {\n  background-color: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n[_nghost-%COMP%]     .contact-grid .btn-tbl-edit:hover {\n  background-color: rgba(34, 197, 94, 0.25);\n  box-shadow: 0 10px 24px rgba(34, 197, 94, 0.35);\n  transform: translateY(-1px);\n}\n[_nghost-%COMP%]     .contact-grid .btn-tbl-delete:hover {\n  background-color: rgba(239, 68, 68, 0.25);\n  box-shadow: 0 10px 24px rgba(239, 68, 68, 0.35);\n  transform: translateY(-1px);\n}\n[_nghost-%COMP%]     .contact-grid p br + span, \n[_nghost-%COMP%]     .contact-grid p br + strong {\n  display: inline-block;\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=utilisateur.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilisateurComponent, [{
    type: Component,
    args: [{ selector: "app-utilisateur", imports: [
      RouterLink,
      NgForOf,
      FormsModule,
      ReactiveFormsModule,
      NgIf,
      NgxDatatableModule
    ], template: `<section class="main-content">\r
  <ul class="breadcrumb breadcrumb-style ">\r
    <li class="breadcrumb-item">\r
      <h5 class="page-title m-b-0">Table</h5>\r
    </li>\r
    <li class="breadcrumb-item bcrumb-1">\r
      <a routerLink="/dashboard/main">\r
        <i class="fas fa-home font-17"></i></a>\r
    </li>\r
<!--    <li class="breadcrumb-item">Admin</li>-->\r
    <li class="breadcrumb-item">Utilisateur</li>\r
  </ul>\r
  <div class="section-body">\r
    <div class="row">\r
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\r
        <div class="card">\r
          <div class="card-header">\r
            <div class="col-lg-8 p-0">\r
              <div class="ngxTableHeader">\r
                <div class="table-search-area">\r
                  <div>\r
                    <label for="search-input"><i class="material-icons search-icon">search</i></label>\r
                    <input placeholder="Recherche" type="text" class="browser-default search-field"\r
                           (keyup)='filterDatatable($event)'   aria-label="Search box">\r
                  </div>\r
                </div>\r
<!--                <div class="header-buttons-left">-->\r
                <div class="tbl-btn-style">\r
                  <button class="btn btn-icon icon-left rounded-button btn-warning d-flex align-items-center justify-content-center" (click)="addRow(addRecord)">\r
                    <i class="material-icons">add</i>\r
                  </button>\r
                </div>\r
<!--                </div>-->\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="card-body">\r
            <div class="row g-6">\r
              <div *ngFor="let row of users" class="col-md-4">\r
                <div class="card border-apply">\r
                  <div class="m-b-10">\r
                    <div class="contact-grid">\r
                      <div class="profile-header l-bg-orange">\r
                        <div class="user-name">{{ row.nom }}</div>\r
                        <div class="name-center">{{ row.prenom }}</div>\r
                      </div>\r
                      <img *ngIf="row.genre==='Homme'" src="assets/images/users/userhomme.png" class="user-img" alt="">\r
                      <img *ngIf="row.genre==='Femme'" src="assets/images/users/userfemme.png" class="user-img" alt="">\r
\r
                      <p>\r
                        {{ row.email }}\r
                        <br />{{ row.role?.nom }}\r
                      </p>\r
                      <div>\r
                      <span class="phone">\r
                        <i class="material-icons">phone</i>{{ row.phone }}\r
                      </span>\r
                      </div>\r
\r
                      <span>\r
                        <button class="btn btn-tbl-edit h-auto" (click)='editRow(row,editRecord)'>\r
                          <i class="fas fa-pen"></i>\r
                        </button>\r
                        <button class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>\r
                          <i class="far fa-trash-alt"></i>\r
                        </button>\r
                      </span>\r
\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Add Record Modal Window -->\r
          <ng-template #addRecord let-modal>\r
            <div class="modal-header editRowModal">\r
              <div class="modal-title-container">\r
                <h5 class="modal-title fw-bold">Formulaire d'ajout d'un utilisateur</h5>\r
                <small class="modal-subtitle text-warning">Cr\xE9er un nouvel utilisateur</small>\r
              </div>\r
              <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">\r
                <span aria-hidden="true"><i class="material-icons">close</i></span>\r
              </button>\r
            </div>\r
            <div class="modal-body">\r
              <form class="register-form" [formGroup]="register" (ngSubmit)="onAddRowSave(register)">\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Nom <span class="text-danger">*</span></label>\r
                    <input type="text" class="form-control" placeholder="Nom" formControlName="nom"\r
                           required>\r
                    @if (!register.get('nom')?.valid && register.get('nom')?.touched) {\r
                      <small class="form-text text-danger"> Le nom est obligatoire</small>\r
                    }\r
                  </div>\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Prenom<span class="text-danger">*</span></label>\r
                    <input type="text" class="form-control" placeholder="Prenom" formControlName="prenom">\r
                    @if (!register.get('prenom')?.valid && register.get('prenom')?.touched) {\r
                      <small class="form-text text-danger"> Prenom est obligatoire</small>\r
                    }\r
                  </div>\r
                </div>\r
\r
\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Email <span class="text-danger">*</span></label>\r
                    <input type="mail" class="form-control" placeholder="Email" formControlName="email"\r
                           required>\r
                    @if (!register.get('email')?.valid && register.get('email')?.touched) {\r
                      <small class="form-text text-danger"> L'email est obligatoire</small>\r
                    }\r
                  </div>\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Phone<span class="text-danger">*</span></label>\r
                    <input type="text" class="form-control" placeholder="Phone" formControlName="phone">\r
                    @if (!register.get('phone')?.valid && register.get('phone')?.touched) {\r
                      <small class="form-text text-danger"> Phone est obligatoire</small>\r
                    }\r
                  </div>\r
                </div>\r
\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Genre <span class="text-danger">*</span></label>\r
                    <select class="form-select form-control" formControlName="genre" required>\r
                      <option value="" selected disabled>Selectionner genre</option>\r
                      <option *ngFor="let status of genre" [value]="status">{{status}}</option>\r
                    </select>\r
                  </div>\r
                </div>\r
\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Entite <span class="text-danger">*</span></label>\r
                    <select class="form-select form-control" formControlName="entite" required>\r
                      <option value="" selected disabled>Selectionner une entite</option>\r
                      <option *ngFor="let entite of entite"  [value]="entite.id">{{entite.nom}}</option>\r
                    </select>\r
                  </div>\r
                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-2">\r
                    <label>Role<span class="text-danger">*</span></label>\r
                    <select class="form-select form-control" formControlName="role" required>\r
                      <option value="" selected disabled>Selectionner un role</option>\r
                      <option *ngFor="let roles of role"  [value]="roles.id">{{roles.nom}}</option>\r
                    </select>\r
                  </div>\r
                </div>\r
\r
                <div class="modal-footer">\r
                  <button type="submit" class="btn btn-warning text-white" [disabled]="!register.valid || loadingIndicator">\r
                    <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>\r
                    {{ loadingIndicator ? 'Chargement...' : 'Enregistre' }}\r
                  </button>\r
\r
                  <button type="button" class="btn btn-dark text-white" (click)="modal.close('Close click')">Fermer</button>\r
                </div>\r
              </form>\r
            </div>\r
          </ng-template>\r
\r
\r
          <ng-template #editRecord let-modal>\r
            <div class="modal-header editRowModal">\r
              <div class="modal-title-container">\r
                <h5 class="modal-title fw-bold">Modifier un utilisateur</h5>\r
                <small class="modal-subtitle text-warning">Formulaire de modification d'un utilisateur existant</small>\r
              </div>\r
              <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">\r
                <span aria-hidden="true"><i class="material-icons">close</i></span>\r
              </button>\r
            </div>\r
            <div class="modal-body">\r
              <form [formGroup]="editForm" (ngSubmit)="onEditSave(editForm)">\r
                <div class="input-field col s12 d-none">\r
                  <input formControlName="id" class="form-control" type="hidden">\r
                </div>\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Nom <span class="text-danger">*</span></label>\r
                    <input type="text" class="form-control" placeholder="Nom du role" formControlName="nom"\r
                           required>\r
                    @if (!editForm.get('nom')?.valid && editForm.get('nom')?.touched) {\r
                      <small class="form-text text-danger"> Le nom et\r
                        obligatoire</small>\r
                    }\r
                  </div>\r
\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Prenom<span class="text-danger">*</span></label>\r
                    <input type="text" class="form-control" placeholder="Prenom" formControlName="prenom">\r
                    @if (!register.get('prenom')?.valid && register.get('prenom')?.touched) {\r
                      <small class="form-text text-danger"> Prenom est obligatoire</small>\r
                    }\r
                  </div>\r
                </div>\r
\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Email <span class="text-danger">*</span></label>\r
                    <input type="mail" class="form-control" placeholder="Email" formControlName="email"\r
                           required>\r
                    @if (!register.get('email')?.valid && register.get('email')?.touched) {\r
                      <small class="form-text text-danger"> L'email est obligatoire</small>\r
                    }\r
                  </div>\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Phone<span class="text-danger">*</span></label>\r
                    <input type="text" class="form-control" placeholder="Phone" formControlName="phone">\r
                    @if (!register.get('phone')?.valid && register.get('phone')?.touched) {\r
                      <small class="form-text text-danger"> Phone est obligatoire</small>\r
                    }\r
                  </div>\r
                </div>\r
\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Genre <span class="text-danger">*</span></label>\r
                    <select class="form-select form-control" formControlName="genre" required>\r
                      <option value="" selected disabled>Selectionner genre</option>\r
                      <option *ngFor="let status of genre" [value]="status">{{status}}</option>\r
                    </select>\r
                  </div>\r
                </div>\r
\r
                <div class="row">\r
                  <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">\r
                    <label>Entite <span class="text-danger">*</span></label>\r
                    <select class="form-select form-control" formControlName="entite" required>\r
                      <option value="" selected disabled>Selectionner une entite</option>\r
                      <option *ngFor="let entite of entite"  [value]="entite.id">{{entite.nom}}</option>\r
                    </select>\r
                  </div>\r
                  <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-2">\r
                    <label>Role<span class="text-danger">*</span></label>\r
                    <select class="form-select form-control" formControlName="role" required>\r
                      <option value="" selected disabled>Selectionner un role</option>\r
                      <option *ngFor="let roles of role"  [value]="roles.id">{{roles.nom}}</option>\r
                    </select>\r
                  </div>\r
                </div>\r
\r
                <div class="modal-footer">\r
                  <button type="submit" class="btn btn-warning" [disabled]="register.valid || loadingIndicator">\r
                    <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>\r
                    {{ loadingIndicator ? 'Chargement...' : 'Enregistre' }}\r
                  </button>\r
                  <button type="button" class="btn btn-dark text-white" (click)="modal.close()">Fermer</button>\r
                </div>\r
              </form>\r
            </div>\r
          </ng-template>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/admin/utilisateur/utilisateur.component.scss */\n.user-img {\n  width: 120px;\n  height: 120px;\n  margin-top: -70px;\n  margin-bottom: 20px;\n  border-radius: 9999px;\n  object-fit: cover;\n  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);\n  border: 3px solid #ffffff;\n}\n:host ::ng-deep .card.border-apply {\n  border-radius: 1.25rem;\n  border: 1px solid rgba(255, 161, 23, 0.25);\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.02);\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(255, 161, 23, 0.12),\n      #0b1120);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n}\n:host ::ng-deep .card.border-apply:hover {\n  transform: translateY(-6px) scale(1.01);\n  border-color: rgba(255, 161, 23, 0.5);\n  box-shadow: 0 22px 55px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.03);\n}\n:host ::ng-deep .contact-grid .profile-header.l-bg-orange {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316,\n      #facc15);\n  padding-top: 1.75rem;\n  padding-bottom: 3.25rem;\n  border-bottom-left-radius: 2.5rem;\n  border-bottom-right-radius: 2.5rem;\n  box-shadow: inset 0 -6px 24px rgba(0, 0, 0, 0.22);\n}\n:host ::ng-deep .contact-grid .profile-header .user-name {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n:host ::ng-deep .contact-grid .profile-header .name-center {\n  font-size: 0.95rem;\n  font-weight: 500;\n  opacity: 0.9;\n}\n:host ::ng-deep .contact-grid p {\n  font-size: 0.875rem;\n  color: rgba(226, 232, 240, 0.9);\n  margin-bottom: 0.35rem;\n}\n:host ::ng-deep .contact-grid .phone {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  color: rgba(148, 163, 184, 0.95);\n}\n:host ::ng-deep .contact-grid .btn-tbl-edit,\n:host ::ng-deep .contact-grid .btn-tbl-delete {\n  border-radius: 9999px;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    background-color 0.18s ease;\n}\n:host ::ng-deep .contact-grid .btn-tbl-edit {\n  background-color: rgba(34, 197, 94, 0.12);\n  color: #22c55e;\n}\n:host ::ng-deep .contact-grid .btn-tbl-delete {\n  background-color: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n:host ::ng-deep .contact-grid .btn-tbl-edit:hover {\n  background-color: rgba(34, 197, 94, 0.25);\n  box-shadow: 0 10px 24px rgba(34, 197, 94, 0.35);\n  transform: translateY(-1px);\n}\n:host ::ng-deep .contact-grid .btn-tbl-delete:hover {\n  background-color: rgba(239, 68, 68, 0.25);\n  box-shadow: 0 10px 24px rgba(239, 68, 68, 0.35);\n  transform: translateY(-1px);\n}\n:host ::ng-deep .contact-grid p br + span,\n:host ::ng-deep .contact-grid p br + strong {\n  display: inline-block;\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=utilisateur.component.css.map */\n'] }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilisateurComponent, { className: "UtilisateurComponent", filePath: "src/app/admin/utilisateur/utilisateur.component.ts", lineNumber: 34 });
})();
export {
  UtilisateurComponent
};
//# sourceMappingURL=utilisateur.component-JQLBZREA.js.map
