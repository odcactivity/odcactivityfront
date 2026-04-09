import {
  SupportactivityService
} from "./chunk-JRCUF3LI.js";
import {
  AuthService,
  canonicalizeAppRoles
} from "./chunk-Y5HKWOK4.js";
import {
  ToastrService
} from "./chunk-ZAPBGQMS.js";
import {
  NgbModal,
  NgbModalModule
} from "./chunk-OTYE7C6R.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import {
  ActivatedRoute
} from "./chunk-M24KWC6L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  catchError,
  forkJoin,
  of,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZBB7M2N.js";
import "./chunk-KBUIKKCC.js";

// src/app/structure/structure-courriers/structure-courriers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StructureCourriersComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function StructureCourriersComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Aucun courrier dans cette cat\xE9gorie pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function StructureCourriersComponent_Conditional_71_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Statut");
    \u0275\u0275elementEnd();
  }
}
function StructureCourriersComponent_Conditional_71_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "code", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.statut);
  }
}
function StructureCourriersComponent_Conditional_71_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function StructureCourriersComponent_Conditional_71_For_14_Conditional_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      const editCourrierTpl_r7 = \u0275\u0275reference(77);
      ctx_r4.openEditCourrierModal(editCourrierTpl_r7, r_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, " Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 34);
    \u0275\u0275listener("click", function StructureCourriersComponent_Conditional_71_For_14_Conditional_11_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.supprimerCourrierStructure(r_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(3, " Supprimer ");
    \u0275\u0275elementEnd();
  }
}
function StructureCourriersComponent_Conditional_71_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("click", function StructureCourriersComponent_Conditional_71_For_14_Template_tr_click_0_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.selectRow(r_r4));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StructureCourriersComponent_Conditional_71_For_14_Conditional_7_Template, 3, 1, "td");
    \u0275\u0275elementStart(8, "td")(9, "button", 31);
    \u0275\u0275listener("click", function StructureCourriersComponent_Conditional_71_For_14_Template_button_click_9_listener($event) {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.openPiece(r_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(10, " Pi\xE8ce jointe ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StructureCourriersComponent_Conditional_71_For_14_Conditional_11_Template, 4, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-active", ctx_r4.selected && r_r4.id === ctx_r4.selected["id"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.objet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.libelleEtapeCourrier(r_r4));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.onglet === "emis" || ctx_r4.onglet === "tout" ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r4.peutModifierOuSupprimerCourrier(r_r4) ? 11 : -1);
  }
}
function StructureCourriersComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 28)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "N\xB0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Objet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\xC9tape");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, StructureCourriersComponent_Conditional_71_Conditional_10_Template, 2, 0, "th");
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, StructureCourriersComponent_Conditional_71_For_14_Template, 12, 7, "tr", 29, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r4.onglet === "emis" || ctx_r4.onglet === "tout" ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.rowsCourants());
  }
}
function StructureCourriersComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "h6", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 36);
    \u0275\u0275text(4, " Apr\xE8s validation, le courrier sera ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "re\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " sur votre structure. Vous pourrez ensuite accuser r\xE9ception op\xE9rationnelle ou r\xE9pondre. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 37);
    \u0275\u0275listener("click", function StructureCourriersComponent_Conditional_72_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.validerReception());
    });
    \u0275\u0275text(9, "Valider la r\xE9ception");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Courrier ", ctx_r4.selected.numero, "");
  }
}
function StructureCourriersComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "h6", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 38);
    \u0275\u0275text(4, " Confirmez la prise en charge : le statut passe en ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "EN COURS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " et reste visible pour l\u2019exp\xE9diteur. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function StructureCourriersComponent_Conditional_73_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.accuserReceptionOp());
    });
    \u0275\u0275text(9, "Accuser r\xE9ception / prise en charge");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Prise en charge \u2014 ", ctx_r4.selected.numero, "");
  }
}
function StructureCourriersComponent_Conditional_74_For_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44)(1, "span", 22);
    \u0275\u0275text(2, "Pi\xE8ce :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rep_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", rep_r10.fichierJoint, "");
  }
}
function StructureCourriersComponent_Conditional_74_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "p", 41)(2, "strong");
    \u0275\u0275text(3, "Objet :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 42);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, StructureCourriersComponent_Conditional_74_For_4_Conditional_10_Template, 4, 1, "p", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rep_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", rep_r10.objet, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("De : ", rep_r10.email, " \u2014 ", \u0275\u0275pipeBind2(7, 5, rep_r10.dateReponse, "short"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rep_r10.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(rep_r10.fichierJoint ? 10 : -1);
  }
}
function StructureCourriersComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h6", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, StructureCourriersComponent_Conditional_74_For_4_Template, 11, 8, "div", 40, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("R\xE9ponses enregistr\xE9es \u2014 ", ctx_r4.selected.numero, "");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.reponsesCourrier);
  }
}
function StructureCourriersComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "h6", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 36);
    \u0275\u0275text(4, "Votre e-mail de compte est utilis\xE9 comme exp\xE9diteur de la r\xE9ponse.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35)(6, "label", 45);
    \u0275\u0275text(7, "Objet de la r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_Conditional_75_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.replyObjet, $event) || (ctx_r4.replyObjet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35)(10, "label", 45);
    \u0275\u0275text(11, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 47);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_Conditional_75_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.replyMessage, $event) || (ctx_r4.replyMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "label", 45);
    \u0275\u0275text(15, "Pi\xE8ce jointe (facultatif)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 49);
    \u0275\u0275listener("change", function StructureCourriersComponent_Conditional_75_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onReplyFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 37);
    \u0275\u0275listener("click", function StructureCourriersComponent_Conditional_75_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.envoyerReponse());
    });
    \u0275\u0275text(18, "Envoyer la r\xE9ponse");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("R\xE9pondre au courrier ", ctx_r4.selected.numero, "");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.replyObjet);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.replyMessage);
  }
}
function StructureCourriersComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "h5", 51);
    \u0275\u0275text(2, "Modifier le courrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function StructureCourriersComponent_ng_template_76_Template_button_click_3_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53)(5, "p", 54);
    \u0275\u0275text(6, "Seuls le num\xE9ro, l\u2019objet et le libell\xE9 exp\xE9diteur peuvent \xEAtre modifi\xE9s (pas le fichier).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "label", 45);
    \u0275\u0275text(9, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_ng_template_76_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.editCourrier.numero, $event) || (ctx_r4.editCourrier.numero = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 35)(12, "label", 45);
    \u0275\u0275text(13, "Objet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_ng_template_76_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.editCourrier.objet, $event) || (ctx_r4.editCourrier.objet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "label", 45);
    \u0275\u0275text(17, "Exp\xE9diteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_ng_template_76_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.editCourrier.expediteur, $event) || (ctx_r4.editCourrier.expediteur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 58)(20, "button", 39);
    \u0275\u0275listener("click", function StructureCourriersComponent_ng_template_76_Template_button_click_20_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.saveEditCourrier(modal_r13));
    });
    \u0275\u0275text(21, "Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 59);
    \u0275\u0275listener("click", function StructureCourriersComponent_ng_template_76_Template_button_click_22_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss());
    });
    \u0275\u0275text(23, "Annuler");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.editCourrier.numero);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.editCourrier.objet);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.editCourrier.expediteur);
  }
}
function StructureCourriersComponent_ng_template_78_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, "Aucune direction cible disponible (v\xE9rifiez les entit\xE9s en base).");
    \u0275\u0275elementEnd();
  }
}
function StructureCourriersComponent_ng_template_78_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.nom);
  }
}
function StructureCourriersComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "h5", 51);
    \u0275\u0275text(2, "Courrier interne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function StructureCourriersComponent_ng_template_78_Template_button_click_3_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53)(5, "p", 54);
    \u0275\u0275text(6, " Envoi vers une autre direction interne. M\xEAmes r\xE8gles que l\u2019\xE9cran d\u2019administration courrier interne. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StructureCourriersComponent_ng_template_78_Conditional_7_Template, 2, 0, "div", 60);
    \u0275\u0275elementStart(8, "div", 35)(9, "label", 45);
    \u0275\u0275text(10, "Direction cible ");
    \u0275\u0275elementStart(11, "span", 61);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_ng_template_78_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.interne.cibleDirectionId, $event) || (ctx_r4.interne.cibleDirectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 63);
    \u0275\u0275text(15, "Choisir\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, StructureCourriersComponent_ng_template_78_For_17_Template, 2, 2, "option", 64, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 35)(19, "label", 45);
    \u0275\u0275text(20, "Num\xE9ro ");
    \u0275\u0275elementStart(21, "span", 61);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_ng_template_78_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.interne.numero, $event) || (ctx_r4.interne.numero = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 35)(25, "label", 45);
    \u0275\u0275text(26, "Objet ");
    \u0275\u0275elementStart(27, "span", 61);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_ng_template_78_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.interne.objet, $event) || (ctx_r4.interne.objet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 35)(31, "label", 45);
    \u0275\u0275text(32, "Exp\xE9diteur (libell\xE9) ");
    \u0275\u0275elementStart(33, "span", 61);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function StructureCourriersComponent_ng_template_78_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.interne.expediteur, $event) || (ctx_r4.interne.expediteur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 35)(37, "label", 45);
    \u0275\u0275text(38, "Fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 49);
    \u0275\u0275listener("change", function StructureCourriersComponent_ng_template_78_Template_input_change_39_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onInterneFile($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 58)(41, "button", 39);
    \u0275\u0275listener("click", function StructureCourriersComponent_ng_template_78_Template_button_click_41_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.saveInterne(modal_r15));
    });
    \u0275\u0275text(42, "Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 59);
    \u0275\u0275listener("click", function StructureCourriersComponent_ng_template_78_Template_button_click_43_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss());
    });
    \u0275\u0275text(44, "Annuler");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r4.ciblesInternes.length === 0 ? 7 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.interne.cibleDirectionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.ciblesInternes);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.interne.numero);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.interne.objet);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.interne.expediteur);
  }
}
var StructureCourriersComponent = class _StructureCourriersComponent {
  constructor(route, auth, global, supportactivityService, toast, modalService) {
    this.route = route;
    this.auth = auth;
    this.global = global;
    this.supportactivityService = supportactivityService;
    this.toast = toast;
    this.modalService = modalService;
    this.onglet = "tout";
    this.loading = false;
    this.tout = [];
    this.enAttente = [];
    this.recus = [];
    this.emis = [];
    this.ciblesInternes = [];
    this.selected = null;
    this.structureLabel = "Structure";
    this.interne = {
      cibleDirectionId: null,
      numero: "",
      objet: "",
      expediteur: "",
      fichier: null
    };
    this.replyObjet = "";
    this.replyMessage = "";
    this.replyFichier = null;
    this.reponsesCourrier = [];
    this.editCourrier = { numero: "", objet: "", expediteur: "" };
  }
  ngOnInit() {
    this.dataSub = this.route.data.subscribe((d) => {
      this.structureLabel = d["structureLabel"] != null && String(d["structureLabel"]).trim() !== "" ? String(d["structureLabel"]) : this.labelFromRoles();
      this.load();
    });
  }
  ngOnDestroy() {
    this.dataSub?.unsubscribe();
  }
  labelFromRoles() {
    const r = canonicalizeAppRoles(this.auth.getCurrentUserFromStorage()?.roles || []);
    if (r.includes("DIRECTEUR_FONDATION")) {
      return "Fondation";
    }
    if (r.includes("DIRECTEUR_RSE")) {
      return "RSE";
    }
    if (r.includes("DIRECTEUR_DCI")) {
      return "DCI";
    }
    return "Structure";
  }
  userEmail() {
    const u = this.auth.getCurrentUserFromStorage();
    return (u?.email || "").trim();
  }
  load() {
    this.loading = true;
    this.selected = null;
    forkJoin({
      tab: this.global.getStructureCourriersTableau(),
      cibles: this.global.getStructureCiblesInternes().pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ tab, cibles }) => {
        const t = tab;
        this.tout = Array.isArray(t?.tout) ? t.tout : [];
        this.enAttente = Array.isArray(t?.enAttenteValidation) ? t.enAttenteValidation : [];
        this.recus = Array.isArray(t?.recus) ? t.recus : [];
        this.emis = Array.isArray(t?.emis) ? t.emis : [];
        this.ciblesInternes = Array.isArray(cibles) ? cibles : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error("Impossible de charger les courriers.");
      }
    });
  }
  setOnglet(t) {
    this.onglet = t;
    this.selected = null;
    this.replyObjet = "";
    this.replyMessage = "";
    this.replyFichier = null;
  }
  rowsCourants() {
    switch (this.onglet) {
      case "tout":
        return this.tout;
      case "attente":
        return this.enAttente;
      case "recus":
        return this.recus;
      default:
        return this.emis;
    }
  }
  selectRow(row) {
    this.selected = row && typeof row === "object" ? row : null;
    this.replyObjet = "";
    this.replyMessage = "";
    this.replyFichier = null;
    this.reponsesCourrier = [];
    const rawId = this.selected?.["id"];
    const id = typeof rawId === "number" ? rawId : Number(rawId);
    if (this.selected && Number.isFinite(id)) {
      this.global.getCourrierReponses(id).subscribe({
        next: (r) => {
          this.reponsesCourrier = Array.isArray(r) ? r : [];
        },
        error: () => {
          this.reponsesCourrier = [];
        }
      });
    }
  }
  libelleEtapeCourrier(row) {
    const s = row["statut"] != null ? String(row["statut"]) : "";
    const map = {
      ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE: "En attente de votre validation",
      ATTENTE_VALIDATION_DIRECTEUR_ODC: "En validation directeur ODC",
      ATTENTE_VALIDATION_ODC: "En validation ODC",
      EN_REVISION_ADMIN_COURRIER: "R\xE9vision admin",
      ENVOYER: "Re\xE7u sur votre structure \u2014 \xE0 traiter",
      IMPUTER: "Transmis \xE0 un service",
      EN_COURS: "Pris en charge / en traitement",
      REPONDU: "R\xE9pondu",
      TRANSMIS_DCIRE: "Transmis (sortant)",
      ARCHIVER: "Archiv\xE9"
    };
    return map[s] || s || "\u2014";
  }
  peutAccuserReception(row) {
    if (!row) {
      return false;
    }
    return String(row["statut"] || "") === "ENVOYER";
  }
  peutRepondre(row) {
    if (!row) {
      return false;
    }
    const s = String(row["statut"] || "");
    if (s === "REPONDU" || s === "ARCHIVER" || s === "ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE") {
      return false;
    }
    return s === "ENVOYER" || s === "EN_COURS" || s === "IMPUTER";
  }
  accuserReceptionOp() {
    const raw = this.selected?.["id"];
    const id = typeof raw === "number" ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id) || !this.peutAccuserReception(this.selected)) {
      return;
    }
    this.global.postStructureAccuserReceptionCourrier(id).subscribe({
      next: () => {
        this.toast.success("Accus\xE9 de r\xE9ception enregistr\xE9 \u2014 statut mis \xE0 jour (visible c\xF4t\xE9 exp\xE9diteur).");
        this.load();
      },
      error: () => this.toast.error("Action impossible.")
    });
  }
  envoyerReponse() {
    const raw = this.selected?.["id"];
    const id = typeof raw === "number" ? raw : Number(raw);
    const email = this.userEmail();
    if (raw == null || !Number.isFinite(id) || !email) {
      this.toast.warning("S\xE9lectionnez un courrier et v\xE9rifiez votre profil (e-mail).");
      return;
    }
    const obj = (this.replyObjet || "").trim();
    const msg = (this.replyMessage || "").trim();
    if (!obj || !msg) {
      this.toast.warning("Objet et message sont obligatoires pour une r\xE9ponse.");
      return;
    }
    const fd = new FormData();
    fd.append("courrierId", String(id));
    fd.append("email", email);
    fd.append("objet", obj);
    fd.append("message", msg);
    if (this.replyFichier) {
      fd.append("file", this.replyFichier);
    }
    this.global.postCourrierReponseMultipart(fd).subscribe({
      next: () => {
        this.toast.success("R\xE9ponse enregistr\xE9e \u2014 le courrier est marqu\xE9 comme r\xE9pondu.");
        this.replyObjet = "";
        this.replyMessage = "";
        this.replyFichier = null;
        this.load();
      },
      error: () => this.toast.error("Envoi de la r\xE9ponse impossible.")
    });
  }
  onReplyFile(ev) {
    const input = ev.target;
    this.replyFichier = input.files?.[0] ?? null;
  }
  onInterneFile(ev) {
    const input = ev.target;
    this.interne.fichier = input.files?.[0] ?? null;
  }
  openInterneModal(tpl) {
    this.interne = {
      cibleDirectionId: null,
      numero: "",
      objet: "",
      expediteur: "",
      fichier: null
    };
    this.modalService.open(tpl, { size: "lg", scrollable: true });
  }
  saveInterne(modal) {
    if (this.interne.cibleDirectionId == null || !this.interne.numero?.trim() || !this.interne.objet?.trim() || !this.interne.expediteur?.trim()) {
      this.toast.warning("Renseignez la direction cible, le num\xE9ro, l\u2019objet et l\u2019exp\xE9diteur.");
      return;
    }
    const fd = new FormData();
    fd.append("cibleDirectionId", String(this.interne.cibleDirectionId));
    fd.append("numero", this.interne.numero.trim());
    fd.append("objet", this.interne.objet.trim());
    fd.append("expediteur", this.interne.expediteur.trim());
    if (this.interne.fichier) {
      fd.append("fichier", this.interne.fichier);
    }
    this.global.postMultipart("api/courriers/structure-directeur/courrier-interne", fd).subscribe({
      next: () => {
        this.toast.success("Courrier interne enregistr\xE9.");
        modal.close();
        this.load();
      },
      error: () => this.toast.error("Enregistrement impossible.")
    });
  }
  validerReception() {
    const raw = this.selected?.["id"];
    const id = typeof raw === "number" ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    this.global.postStructureValiderReceptionCourrier(id).subscribe({
      next: () => {
        this.toast.success("Courrier valid\xE9 \u2014 disponible pour traitement dans votre structure.");
        this.load();
      },
      error: () => this.toast.error("Validation impossible.")
    });
  }
  peutModifierOuSupprimerCourrier(row) {
    const s = String(row["statut"] || "");
    return s !== "ARCHIVER";
  }
  openEditCourrierModal(tpl, row) {
    this.selected = row;
    this.editCourrier = {
      numero: String(row["numero"] ?? ""),
      objet: String(row["objet"] ?? ""),
      expediteur: String(row["expediteur"] ?? "")
    };
    this.modalService.open(tpl, { size: "lg", scrollable: true });
  }
  saveEditCourrier(modal) {
    const raw = this.selected?.["id"];
    const id = typeof raw === "number" ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    const { numero, objet, expediteur } = this.editCourrier;
    if (!numero?.trim() || !objet?.trim() || !expediteur?.trim()) {
      this.toast.warning("Num\xE9ro, objet et exp\xE9diteur sont obligatoires.");
      return;
    }
    this.global.patchCourrierMetadonnees(id, {
      numero: numero.trim(),
      objet: objet.trim(),
      expediteur: expediteur.trim()
    }).subscribe({
      next: () => {
        this.toast.success("Courrier mis \xE0 jour.");
        modal.close();
        this.load();
      },
      error: () => this.toast.error("Modification impossible.")
    });
  }
  supprimerCourrierStructure(row) {
    const raw = row["id"];
    const id = typeof raw === "number" ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    if (!window.confirm("Supprimer d\xE9finitivement ce courrier et son historique ?")) {
      return;
    }
    this.global.deleteStructureDirecteurCourrier(id).subscribe({
      next: () => {
        this.toast.success("Courrier supprim\xE9.");
        this.selected = null;
        this.load();
      },
      error: () => this.toast.error("Suppression impossible.")
    });
  }
  openPiece(row) {
    const raw = row["id"];
    const id = typeof raw === "number" ? raw : Number(raw);
    const numero = row["numero"];
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    this.supportactivityService.downloadCourrierFile(id).subscribe({
      next: (value) => {
        const blob = value.body;
        if (!blob) {
          return;
        }
        let filename = String(numero ?? "courrier");
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
      error: () => this.toast.error("T\xE9l\xE9chargement impossible.")
    });
  }
  static {
    this.\u0275fac = function StructureCourriersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StructureCourriersComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(SupportactivityService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StructureCourriersComponent, selectors: [["app-structure-courriers"]], decls: 80, vars: 30, consts: [["editCourrierTpl", ""], ["interneTpl", ""], [1, "main-content", "p-4", "structure-courriers-dash"], [1, "d-flex", "flex-wrap", "align-items-start", "justify-content-between", "gap-2", "mb-3"], [1, "mb-1"], [1, "text-muted", "mb-0", "small"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click", "disabled"], [1, "row", "g-3", "mb-4"], [1, "col-md-3"], ["type", "button", 1, "structure-dash-card", "w-100", "text-start", "border-0", 3, "click"], [1, "structure-dash-card__kpi", "text-dark"], [1, "structure-dash-card__title"], [1, "structure-dash-card__hint"], [1, "structure-dash-card__kpi", "text-warning"], [1, "structure-dash-card__kpi", "text-primary"], [1, "structure-dash-card__kpi", "text-success"], [1, "nav", "nav-tabs", "mb-3", "flex-wrap"], [1, "nav-item"], ["type", "button", 1, "nav-link", 3, "click"], [1, "badge", "bg-secondary", "ms-1"], [1, "text-muted"], [1, "table-responsive", "mb-4"], [1, "card", "p-3", "border-warning", "mb-3"], [1, "card", "p-3", "border-primary", "mb-3"], [1, "card", "p-3", "border-info", "mb-3"], [1, "card", "p-3", "border-success", "mb-3"], [1, "table", "table-hover", "align-middle"], [3, "table-active"], [3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "me-1", 3, "click"], [1, "small"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "mb-2"], [1, "small", "text-muted", "mb-3"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "small", "text-muted", "mb-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "border-bottom", "pb-2", "mb-2"], [1, "small", "mb-1"], [1, "small", "mb-1", "text-muted"], [1, "small", "mb-1", 2, "white-space", "pre-wrap"], [1, "small", "mb-0"], [1, "form-label"], ["name", "replyObjet", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "name", "replyMessage", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-3"], ["type", "file", 1, "form-control", 3, "change"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "small", "text-muted"], ["name", "editNumero", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editObjet", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editExp", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "alert", "alert-warning"], [1, "text-danger"], ["name", "cibleInterne", 1, "form-select", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["name", "numeroInterne", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "objetInterne", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "expInterne", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function StructureCourriersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 2)(1, "div", 3)(2, "div")(3, "h4", 4);
        \u0275\u0275text(4, "Tableau de bord courriers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 5);
        \u0275\u0275text(6, " R\xE9ception, envoi et suivi des courriers. L\u2019onglet ");
        \u0275\u0275elementStart(7, "strong");
        \u0275\u0275text(8, "Tout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " affiche l\u2019historique complet. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          const interneTpl_r2 = \u0275\u0275reference(79);
          return \u0275\u0275resetView(ctx.openInterneModal(interneTpl_r2));
        });
        \u0275\u0275text(12, " Nouveau courrier interne ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.load());
        });
        \u0275\u0275text(14, " Actualiser ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "button", 11);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("tout"));
        });
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13);
        \u0275\u0275text(21, "Tout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 14);
        \u0275\u0275text(23, "Vue compl\xE8te \u2014 rien n\u2019est masqu\xE9");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 10)(25, "button", 11);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("attente"));
        });
        \u0275\u0275elementStart(26, "div", 15);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 13);
        \u0275\u0275text(29, "En attente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 14);
        \u0275\u0275text(31, "\xC0 valider par vous avant circulation");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 10)(33, "button", 11);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("recus"));
        });
        \u0275\u0275elementStart(34, "div", 16);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 13);
        \u0275\u0275text(37, "Re\xE7us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 14);
        \u0275\u0275text(39, "En traitement sur votre direction");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 10)(41, "button", 11);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("emis"));
        });
        \u0275\u0275elementStart(42, "div", 17);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 13);
        \u0275\u0275text(45, "\xC9mis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 14);
        \u0275\u0275text(47, "Partis de votre structure");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "ul", 18)(49, "li", 19)(50, "button", 20);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("tout"));
        });
        \u0275\u0275text(51, " Tout ");
        \u0275\u0275elementStart(52, "span", 21);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "li", 19)(55, "button", 20);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("attente"));
        });
        \u0275\u0275text(56, " En attente ");
        \u0275\u0275elementStart(57, "span", 21);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "li", 19)(60, "button", 20);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_60_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("recus"));
        });
        \u0275\u0275text(61, " Re\xE7us ");
        \u0275\u0275elementStart(62, "span", 21);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "li", 19)(65, "button", 20);
        \u0275\u0275listener("click", function StructureCourriersComponent_Template_button_click_65_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOnglet("emis"));
        });
        \u0275\u0275text(66, " \xC9mis ");
        \u0275\u0275elementStart(67, "span", 21);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(69, StructureCourriersComponent_Conditional_69_Template, 2, 0, "p")(70, StructureCourriersComponent_Conditional_70_Template, 2, 0, "p", 22)(71, StructureCourriersComponent_Conditional_71_Template, 15, 1, "div", 23)(72, StructureCourriersComponent_Conditional_72_Template, 10, 1, "div", 24)(73, StructureCourriersComponent_Conditional_73_Template, 10, 1, "div", 25)(74, StructureCourriersComponent_Conditional_74_Template, 5, 1, "div", 26)(75, StructureCourriersComponent_Conditional_75_Template, 19, 3, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(76, StructureCourriersComponent_ng_template_76_Template, 24, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(78, StructureCourriersComponent_ng_template_78_Template, 45, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("structure-dash-card--active", ctx.onglet === "tout");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.tout.length);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("structure-dash-card--active", ctx.onglet === "attente");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.enAttente.length);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("structure-dash-card--active", ctx.onglet === "recus");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.recus.length);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("structure-dash-card--active", ctx.onglet === "emis");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.emis.length);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.onglet === "tout");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.tout.length);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.onglet === "attente");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.enAttente.length);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.onglet === "recus");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.recus.length);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.onglet === "emis");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.emis.length);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 69 : ctx.rowsCourants().length === 0 ? 70 : 71);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected && ctx.onglet === "attente" && ctx.selected.statut === "ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE" ? 72 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected && (ctx.onglet === "recus" || ctx.onglet === "tout") && ctx.peutAccuserReception(ctx.selected) ? 73 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected && ctx.reponsesCourrier.length > 0 ? 74 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected && (ctx.onglet === "recus" || ctx.onglet === "tout") && ctx.peutRepondre(ctx.selected) ? 75 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, NgbModalModule], styles: ["\n\n.structure-courriers-dash[_ngcontent-%COMP%]   .structure-dash-card[_ngcontent-%COMP%] {\n  display: block;\n  background: #fff;\n  border-radius: 10px;\n  padding: 1rem 1.1rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n  cursor: pointer;\n  color: inherit;\n}\n.structure-courriers-dash[_ngcontent-%COMP%]   .structure-dash-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n.structure-courriers-dash[_ngcontent-%COMP%]   .structure-dash-card--active[_ngcontent-%COMP%] {\n  outline: 2px solid rgba(255, 152, 0, 0.55);\n  box-shadow: 0 4px 16px rgba(255, 152, 0, 0.18);\n}\n.structure-courriers-dash[_ngcontent-%COMP%]   .structure-dash-card__kpi[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.1;\n}\n.structure-courriers-dash[_ngcontent-%COMP%]   .structure-dash-card__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 0.25rem;\n}\n.structure-courriers-dash[_ngcontent-%COMP%]   .structure-dash-card__hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-top: 0.35rem;\n  line-height: 1.35;\n}\n.structure-courriers-dash[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.structure-courriers-dash[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=structure-courriers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StructureCourriersComponent, [{
    type: Component,
    args: [{ selector: "app-structure-courriers", standalone: true, imports: [CommonModule, FormsModule, NgbModalModule], template: `<section class="main-content p-4 structure-courriers-dash">\r
  <div class="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">\r
    <div>\r
      <h4 class="mb-1">Tableau de bord courriers</h4>\r
      <p class="text-muted mb-0 small">\r
        R\xE9ception, envoi et suivi des courriers. L\u2019onglet <strong>Tout</strong> affiche l\u2019historique complet.\r
      </p>\r
    </div>\r
    <div class="d-flex flex-wrap gap-2">\r
      <button type="button" class="btn btn-outline-primary btn-sm" (click)="openInterneModal(interneTpl)">\r
        Nouveau courrier interne\r
      </button>\r
      <button type="button" class="btn btn-outline-secondary btn-sm" (click)="load()" [disabled]="loading">\r
        Actualiser\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="row g-3 mb-4">\r
    <div class="col-md-3">\r
      <button\r
        type="button"\r
        class="structure-dash-card w-100 text-start border-0"\r
        [class.structure-dash-card--active]="onglet === 'tout'"\r
        (click)="setOnglet('tout')">\r
        <div class="structure-dash-card__kpi text-dark">{{ tout.length }}</div>\r
        <div class="structure-dash-card__title">Tout</div>\r
        <div class="structure-dash-card__hint">Vue compl\xE8te \u2014 rien n\u2019est masqu\xE9</div>\r
      </button>\r
    </div>\r
    <div class="col-md-3">\r
      <button\r
        type="button"\r
        class="structure-dash-card w-100 text-start border-0"\r
        [class.structure-dash-card--active]="onglet === 'attente'"\r
        (click)="setOnglet('attente')">\r
        <div class="structure-dash-card__kpi text-warning">{{ enAttente.length }}</div>\r
        <div class="structure-dash-card__title">En attente</div>\r
        <div class="structure-dash-card__hint">\xC0 valider par vous avant circulation</div>\r
      </button>\r
    </div>\r
    <div class="col-md-3">\r
      <button\r
        type="button"\r
        class="structure-dash-card w-100 text-start border-0"\r
        [class.structure-dash-card--active]="onglet === 'recus'"\r
        (click)="setOnglet('recus')">\r
        <div class="structure-dash-card__kpi text-primary">{{ recus.length }}</div>\r
        <div class="structure-dash-card__title">Re\xE7us</div>\r
        <div class="structure-dash-card__hint">En traitement sur votre direction</div>\r
      </button>\r
    </div>\r
    <div class="col-md-3">\r
      <button\r
        type="button"\r
        class="structure-dash-card w-100 text-start border-0"\r
        [class.structure-dash-card--active]="onglet === 'emis'"\r
        (click)="setOnglet('emis')">\r
        <div class="structure-dash-card__kpi text-success">{{ emis.length }}</div>\r
        <div class="structure-dash-card__title">\xC9mis</div>\r
        <div class="structure-dash-card__hint">Partis de votre structure</div>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <ul class="nav nav-tabs mb-3 flex-wrap">\r
    <li class="nav-item">\r
      <button type="button" class="nav-link" [class.active]="onglet === 'tout'" (click)="setOnglet('tout')">\r
        Tout <span class="badge bg-secondary ms-1">{{ tout.length }}</span>\r
      </button>\r
    </li>\r
    <li class="nav-item">\r
      <button type="button" class="nav-link" [class.active]="onglet === 'attente'" (click)="setOnglet('attente')">\r
        En attente <span class="badge bg-secondary ms-1">{{ enAttente.length }}</span>\r
      </button>\r
    </li>\r
    <li class="nav-item">\r
      <button type="button" class="nav-link" [class.active]="onglet === 'recus'" (click)="setOnglet('recus')">\r
        Re\xE7us <span class="badge bg-secondary ms-1">{{ recus.length }}</span>\r
      </button>\r
    </li>\r
    <li class="nav-item">\r
      <button type="button" class="nav-link" [class.active]="onglet === 'emis'" (click)="setOnglet('emis')">\r
        \xC9mis <span class="badge bg-secondary ms-1">{{ emis.length }}</span>\r
      </button>\r
    </li>\r
  </ul>\r
\r
  @if (loading) {\r
    <p>Chargement\u2026</p>\r
  } @else if (rowsCourants().length === 0) {\r
    <p class="text-muted">Aucun courrier dans cette cat\xE9gorie pour le moment.</p>\r
  } @else {\r
    <div class="table-responsive mb-4">\r
      <table class="table table-hover align-middle">\r
        <thead>\r
          <tr>\r
            <th>N\xB0</th>\r
            <th>Objet</th>\r
            <th>\xC9tape</th>\r
            @if (onglet === 'emis' || onglet === 'tout') {\r
              <th>Statut</th>\r
            }\r
            <th></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (r of rowsCourants(); track $any(r).id) {\r
            <tr\r
              [class.table-active]="selected && $any(r).id === selected['id']"\r
              (click)="selectRow(r)">\r
              <td>{{ $any(r).numero }}</td>\r
              <td>{{ $any(r).objet }}</td>\r
              <td>{{ libelleEtapeCourrier($any(r)) }}</td>\r
              @if (onglet === 'emis' || onglet === 'tout') {\r
                <td><code class="small">{{ $any(r).statut }}</code></td>\r
              }\r
              <td>\r
                <button type="button" class="btn btn-sm btn-outline-secondary me-1" (click)="openPiece($any(r)); $event.stopPropagation()">\r
                  Pi\xE8ce jointe\r
                </button>\r
                @if (peutModifierOuSupprimerCourrier($any(r))) {\r
                  <button type="button" class="btn btn-sm btn-outline-primary me-1" (click)="openEditCourrierModal(editCourrierTpl, $any(r)); $event.stopPropagation()">\r
                    Modifier\r
                  </button>\r
                  <button type="button" class="btn btn-sm btn-outline-danger" (click)="supprimerCourrierStructure($any(r)); $event.stopPropagation()">\r
                    Supprimer\r
                  </button>\r
                }\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
\r
  @if (selected && onglet === 'attente' && $any(selected).statut === 'ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE') {\r
    <div class="card p-3 border-warning mb-3">\r
      <h6 class="mb-2">Courrier {{ $any(selected).numero }}</h6>\r
      <p class="small text-muted mb-3">\r
        Apr\xE8s validation, le courrier sera <strong>re\xE7u</strong> sur votre structure. Vous pourrez ensuite accuser r\xE9ception op\xE9rationnelle ou r\xE9pondre.\r
      </p>\r
      <button type="button" class="btn btn-success" (click)="validerReception()">Valider la r\xE9ception</button>\r
    </div>\r
  }\r
\r
  @if (selected && (onglet === 'recus' || onglet === 'tout') && peutAccuserReception(selected)) {\r
    <div class="card p-3 border-primary mb-3">\r
      <h6 class="mb-2">Prise en charge \u2014 {{ $any(selected).numero }}</h6>\r
      <p class="small text-muted mb-2">\r
        Confirmez la prise en charge : le statut passe en <strong>EN COURS</strong> et reste visible pour l\u2019exp\xE9diteur.\r
      </p>\r
      <button type="button" class="btn btn-primary" (click)="accuserReceptionOp()">Accuser r\xE9ception / prise en charge</button>\r
    </div>\r
  }\r
\r
  @if (selected && reponsesCourrier.length > 0) {\r
    <div class="card p-3 border-info mb-3">\r
      <h6 class="mb-2">R\xE9ponses enregistr\xE9es \u2014 {{ $any(selected).numero }}</h6>\r
      @for (rep of reponsesCourrier; track $any(rep).id) {\r
        <div class="border-bottom pb-2 mb-2">\r
          <p class="small mb-1"><strong>Objet :</strong> {{ $any(rep).objet }}</p>\r
          <p class="small mb-1 text-muted">De : {{ $any(rep).email }} \u2014 {{ $any(rep).dateReponse | date: 'short' }}</p>\r
          <p class="small mb-1" style="white-space: pre-wrap">{{ $any(rep).message }}</p>\r
          @if ($any(rep).fichierJoint) {\r
            <p class="small mb-0"><span class="text-muted">Pi\xE8ce :</span> {{ $any(rep).fichierJoint }}</p>\r
          }\r
        </div>\r
      }\r
    </div>\r
  }\r
\r
  @if (selected && (onglet === 'recus' || onglet === 'tout') && peutRepondre(selected)) {\r
    <div class="card p-3 border-success mb-3">\r
      <h6 class="mb-2">R\xE9pondre au courrier {{ $any(selected).numero }}</h6>\r
      <p class="small text-muted mb-3">Votre e-mail de compte est utilis\xE9 comme exp\xE9diteur de la r\xE9ponse.</p>\r
      <div class="mb-2">\r
        <label class="form-label">Objet de la r\xE9ponse</label>\r
        <input class="form-control" [(ngModel)]="replyObjet" name="replyObjet" />\r
      </div>\r
      <div class="mb-2">\r
        <label class="form-label">Message</label>\r
        <textarea class="form-control" rows="4" [(ngModel)]="replyMessage" name="replyMessage"></textarea>\r
      </div>\r
      <div class="mb-3">\r
        <label class="form-label">Pi\xE8ce jointe (facultatif)</label>\r
        <input type="file" class="form-control" (change)="onReplyFile($event)" />\r
      </div>\r
      <button type="button" class="btn btn-success" (click)="envoyerReponse()">Envoyer la r\xE9ponse</button>\r
    </div>\r
  }\r
</section>\r
\r
<ng-template #editCourrierTpl let-modal>\r
  <div class="modal-header">\r
    <h5 class="modal-title">Modifier le courrier</h5>\r
    <button type="button" class="btn-close" aria-label="Fermer" (click)="modal.dismiss()"></button>\r
  </div>\r
  <div class="modal-body">\r
    <p class="small text-muted">Seuls le num\xE9ro, l\u2019objet et le libell\xE9 exp\xE9diteur peuvent \xEAtre modifi\xE9s (pas le fichier).</p>\r
    <div class="mb-2">\r
      <label class="form-label">Num\xE9ro</label>\r
      <input class="form-control" [(ngModel)]="editCourrier.numero" name="editNumero" />\r
    </div>\r
    <div class="mb-2">\r
      <label class="form-label">Objet</label>\r
      <input class="form-control" [(ngModel)]="editCourrier.objet" name="editObjet" />\r
    </div>\r
    <div class="mb-2">\r
      <label class="form-label">Exp\xE9diteur</label>\r
      <input class="form-control" [(ngModel)]="editCourrier.expediteur" name="editExp" />\r
    </div>\r
  </div>\r
  <div class="modal-footer">\r
    <button type="button" class="btn btn-primary" (click)="saveEditCourrier(modal)">Enregistrer</button>\r
    <button type="button" class="btn btn-secondary" (click)="modal.dismiss()">Annuler</button>\r
  </div>\r
</ng-template>\r
\r
<ng-template #interneTpl let-modal>\r
  <div class="modal-header">\r
    <h5 class="modal-title">Courrier interne</h5>\r
    <button type="button" class="btn-close" aria-label="Fermer" (click)="modal.dismiss()"></button>\r
  </div>\r
  <div class="modal-body">\r
    <p class="small text-muted">\r
      Envoi vers une autre direction interne. M\xEAmes r\xE8gles que l\u2019\xE9cran d\u2019administration courrier interne.\r
    </p>\r
    @if (ciblesInternes.length === 0) {\r
      <div class="alert alert-warning">Aucune direction cible disponible (v\xE9rifiez les entit\xE9s en base).</div>\r
    }\r
    <div class="mb-2">\r
      <label class="form-label">Direction cible <span class="text-danger">*</span></label>\r
      <select class="form-select" [(ngModel)]="interne.cibleDirectionId" name="cibleInterne">\r
        <option [ngValue]="null" disabled>Choisir\u2026</option>\r
        @for (c of ciblesInternes; track c.id) {\r
          <option [ngValue]="c.id">{{ c.nom }}</option>\r
        }\r
      </select>\r
    </div>\r
    <div class="mb-2">\r
      <label class="form-label">Num\xE9ro <span class="text-danger">*</span></label>\r
      <input class="form-control" [(ngModel)]="interne.numero" name="numeroInterne" />\r
    </div>\r
    <div class="mb-2">\r
      <label class="form-label">Objet <span class="text-danger">*</span></label>\r
      <input class="form-control" [(ngModel)]="interne.objet" name="objetInterne" />\r
    </div>\r
    <div class="mb-2">\r
      <label class="form-label">Exp\xE9diteur (libell\xE9) <span class="text-danger">*</span></label>\r
      <input class="form-control" [(ngModel)]="interne.expediteur" name="expInterne" />\r
    </div>\r
    <div class="mb-2">\r
      <label class="form-label">Fichier</label>\r
      <input type="file" class="form-control" (change)="onInterneFile($event)" />\r
    </div>\r
  </div>\r
  <div class="modal-footer">\r
    <button type="button" class="btn btn-primary" (click)="saveInterne(modal)">Enregistrer</button>\r
    <button type="button" class="btn btn-secondary" (click)="modal.dismiss()">Annuler</button>\r
  </div>\r
</ng-template>\r
`, styles: ["/* src/app/structure/structure-courriers/structure-courriers.component.scss */\n.structure-courriers-dash .structure-dash-card {\n  display: block;\n  background: #fff;\n  border-radius: 10px;\n  padding: 1rem 1.1rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n  cursor: pointer;\n  color: inherit;\n}\n.structure-courriers-dash .structure-dash-card:hover {\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n.structure-courriers-dash .structure-dash-card--active {\n  outline: 2px solid rgba(255, 152, 0, 0.55);\n  box-shadow: 0 4px 16px rgba(255, 152, 0, 0.18);\n}\n.structure-courriers-dash .structure-dash-card__kpi {\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.1;\n}\n.structure-courriers-dash .structure-dash-card__title {\n  font-weight: 600;\n  margin-top: 0.25rem;\n}\n.structure-courriers-dash .structure-dash-card__hint {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-top: 0.35rem;\n  line-height: 1.35;\n}\n.structure-courriers-dash .nav-tabs .nav-link {\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.structure-courriers-dash .nav-tabs .nav-link.active {\n  font-weight: 600;\n}\n/*# sourceMappingURL=structure-courriers.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: AuthService }, { type: GlobalService }, { type: SupportactivityService }, { type: ToastrService }, { type: NgbModal }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StructureCourriersComponent, { className: "StructureCourriersComponent", filePath: "src/app/structure/structure-courriers/structure-courriers.component.ts", lineNumber: 33 });
})();
export {
  StructureCourriersComponent
};
//# sourceMappingURL=structure-courriers.component-34U2ELIV.js.map
