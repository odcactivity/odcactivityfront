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
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-EQOE5FII.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/courriers/courriers.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["repondreCourrierModal"];
function CourriersComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dir_r3 = ctx.$implicit;
    \u0275\u0275property("value", dir_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dir_r3.nom);
  }
}
function CourriersComponent_Conditional_47_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r6 = ctx.$implicit;
    \u0275\u0275property("value", service_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r6.nom);
  }
}
function CourriersComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label", 34);
    \u0275\u0275text(2, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 50);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_Conditional_47_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.idService, $event) || (ctx_r4.idService = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CourriersComponent_Conditional_47_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.getCourrierByService());
    });
    \u0275\u0275elementStart(4, "option", 51);
    \u0275\u0275text(5, "-- Tous les services --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CourriersComponent_Conditional_47_option_6_Template, 2, 2, "option", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.idService);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.servicesOfDirection);
  }
}
function CourriersComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 30)(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4, "Affichage :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handleList("actifs"));
    });
    \u0275\u0275element(6, "i", 55);
    \u0275\u0275text(7, " ACTIFS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 54);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_48_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handleList("archives"));
    });
    \u0275\u0275element(9, "i", 56);
    \u0275\u0275text(10, " ARCHIVES ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 54);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_48_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handleList("envoyes"));
    });
    \u0275\u0275element(12, "i", 57);
    \u0275\u0275text(13, " REPONDUS ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r4.typeliste === "actifs" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r4.typeliste === "archives" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r4.typeliste === "envoyes" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
  }
}
function CourriersComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.numero);
  }
}
function CourriersComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.expediteur);
  }
}
function CourriersComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.objet);
  }
}
function CourriersComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, row_r11.dateReception, "dd/MM/yyyy"));
  }
}
function CourriersComponent_ng_template_62_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2, "R\xE9pondu ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_62_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2, "Archiv\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_62_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, "En attente ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_62_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2, "Imput\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_62_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, "En cours ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_62_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r12.statut, " ");
  }
}
function CourriersComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, CourriersComponent_ng_template_62_Conditional_1_Template, 3, 0, "span", 59)(2, CourriersComponent_ng_template_62_Conditional_2_Template, 3, 0, "span", 60)(3, CourriersComponent_ng_template_62_Conditional_3_Template, 3, 0, "span", 61)(4, CourriersComponent_ng_template_62_Conditional_4_Template, 3, 0, "span", 62)(5, CourriersComponent_ng_template_62_Conditional_5_Template, 3, 0, "span", 63)(6, CourriersComponent_ng_template_62_Conditional_6_Template, 3, 1, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r12.statut === "REPONDU" ? 1 : row_r12.statut === "ARCHIVER" ? 2 : row_r12.statut === "ENVOYER" ? 3 : row_r12.statut === "IMPUTER" ? 4 : row_r12.statut === "EN_COURS" ? 5 : 6);
  }
}
function CourriersComponent_ng_template_64_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_64_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r14 = \u0275\u0275nextContext();
      const row_r16 = ctx_r14.row;
      const rowIndex_r17 = ctx_r14.rowIndex;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.ImputeModal(row_r16, rowIndex_r17, "repondre"));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 75);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_64_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r14 = \u0275\u0275nextContext();
      const row_r16 = ctx_r14.row;
      const rowIndex_r17 = ctx_r14.rowIndex;
      const ctx_r4 = \u0275\u0275nextContext();
      const entiteCibleModal_r18 = \u0275\u0275reference(68);
      return \u0275\u0275resetView(ctx_r4.ImputeModal(row_r16, rowIndex_r17, entiteCibleModal_r18));
    });
    \u0275\u0275element(3, "i", 76);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_64_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_64_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r16 = \u0275\u0275nextContext().row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.download(row_r16));
    });
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_64_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_64_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r16 = \u0275\u0275nextContext().row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.archiveCourrier(row_r16));
    });
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, CourriersComponent_ng_template_64_Conditional_1_Template, 4, 0)(2, CourriersComponent_ng_template_64_Conditional_2_Template, 2, 0, "button", 69)(3, CourriersComponent_ng_template_64_Conditional_3_Template, 2, 0, "button", 70);
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_64_Template_button_click_4_listener() {
      const ctx_r20 = \u0275\u0275restoreView(_r13);
      const row_r16 = ctx_r20.row;
      const rowIndex_r17 = ctx_r20.rowIndex;
      const ctx_r4 = \u0275\u0275nextContext();
      const history_r22 = \u0275\u0275reference(72);
      return \u0275\u0275resetView(ctx_r4.historiqueCourrier(row_r16, rowIndex_r17, history_r22));
    });
    \u0275\u0275element(5, "i", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r16.statut !== "ARCHIVER" && row_r16.statut !== "REPONDU" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r16.statut !== "ARCHIVER" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r16.statut !== "ARCHIVER" && row_r16.statut !== "REPONDU" ? 3 : -1);
  }
}
function CourriersComponent_ng_template_65_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 101);
  }
}
function CourriersComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div")(2, "h5", 82);
    \u0275\u0275element(3, "i", 83);
    \u0275\u0275text(4, " R\xE9pondre au courrier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 84);
    \u0275\u0275text(6, "Formulaire de r\xE9ponse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 85);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_65_Template_button_click_7_listener() {
      const modal_r24 = \u0275\u0275restoreView(_r23).$implicit;
      return \u0275\u0275resetView(modal_r24.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 86)(9, "div", 87)(10, "div", 88)(11, "div")(12, "b");
    \u0275\u0275text(13, "R\xE9f\xE9rence :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "b");
    \u0275\u0275text(17, "Objet :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "b");
    \u0275\u0275text(21, "Exp\xE9diteur :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "b");
    \u0275\u0275text(25, "Date :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 89)(29, "div", 90)(30, "label");
    \u0275\u0275text(31, "Email exp\xE9diteur ");
    \u0275\u0275elementStart(32, "span", 35);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_65_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.reponse.emailExpediteur, $event) || (ctx_r4.reponse.emailExpediteur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 90)(36, "label");
    \u0275\u0275text(37, "Objet de la r\xE9ponse ");
    \u0275\u0275elementStart(38, "span", 35);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_65_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.reponse.objet, $event) || (ctx_r4.reponse.objet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 90)(42, "label");
    \u0275\u0275text(43, "Message / commentaires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "textarea", 93);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_65_Template_textarea_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.reponse.message, $event) || (ctx_r4.reponse.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 90)(46, "label");
    \u0275\u0275text(47, "Fichier de r\xE9ponse (PDF, DOCX)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 94);
    \u0275\u0275listener("change", function CourriersComponent_ng_template_65_Template_input_change_48_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "small", 84);
    \u0275\u0275text(50, " Taille max : 10 MB \u2013 Formats autoris\xE9s : PDF, DOC, DOCX ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 95)(52, "label");
    \u0275\u0275text(53, "Pi\xE8ces jointes (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 96);
    \u0275\u0275listener("change", function CourriersComponent_ng_template_65_Template_input_change_54_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onAttachmentsSelected($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 97)(56, "button", 98);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_65_Template_button_click_56_listener() {
      const modal_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.envoyerReponse(modal_r24));
    });
    \u0275\u0275template(57, CourriersComponent_ng_template_65_span_57_Template, 1, 0, "span", 99);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 100);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_65_Template_button_click_59_listener() {
      const modal_r24 = \u0275\u0275restoreView(_r23).$implicit;
      return \u0275\u0275resetView(modal_r24.dismiss());
    });
    \u0275\u0275text(60, " Annuler ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", ctx_r4.selectedCourrier == null ? null : ctx_r4.selectedCourrier.reference, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r4.selectedCourrier == null ? null : ctx_r4.selectedCourrier.objet, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r4.selectedCourrier == null ? null : ctx_r4.selectedCourrier.expediteur, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 10, ctx_r4.selectedCourrier == null ? null : ctx_r4.selectedCourrier.dateReception, "dd/MM/yyyy"), "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.reponse.emailExpediteur);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.reponse.objet);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.reponse.message);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", !ctx_r4.reponse.emailExpediteur || !ctx_r4.reponse.objet);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.loading ? "Envoi..." : "Envoyer la r\xE9ponse", " ");
  }
}
function CourriersComponent_ng_template_67_Conditional_17_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const serv_r28 = ctx.$implicit;
    \u0275\u0275property("value", serv_r28.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(serv_r28.nom);
  }
}
function CourriersComponent_ng_template_67_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 116);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_67_Conditional_17_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.entiteCible, $event) || (ctx_r4.entiteCible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 37);
    \u0275\u0275text(2, "-- S\xE9lectionnez une entit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CourriersComponent_ng_template_67_Conditional_17_option_3_Template, 2, 2, "option", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.entiteCible);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.servicesOfDirection);
  }
}
function CourriersComponent_ng_template_67_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275text(2, " Aucun service disponible pour cette direction. ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_67_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2, " Veuillez d'abord s\xE9lectionner une direction pour voir ses services. ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_67_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perso_r29 = ctx.$implicit;
    \u0275\u0275property("value", perso_r29.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", perso_r29.prenom, " ", perso_r29.nom, "");
  }
}
function CourriersComponent_ng_template_67_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 119);
  }
}
function CourriersComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "h5", 82);
    \u0275\u0275text(3, "Assigner un courrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 104);
    \u0275\u0275text(5, "Formulaire d'envoi des courrier");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 105);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_67_Template_button_click_6_listener() {
      const modal_r26 = \u0275\u0275restoreView(_r25).$implicit;
      return \u0275\u0275resetView(modal_r26.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 106)(8, "i", 28);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 86)(11, "div", 89)(12, "div", 107)(13, "label");
    \u0275\u0275text(14, "Entit\xE9 cible ");
    \u0275\u0275elementStart(15, "span", 35);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CourriersComponent_ng_template_67_Conditional_17_Template, 4, 3, "select", 108)(18, CourriersComponent_ng_template_67_Conditional_18_Template, 3, 0, "div", 109)(19, CourriersComponent_ng_template_67_Conditional_19_Template, 3, 0, "div", 110);
    \u0275\u0275elementStart(20, "small", 111);
    \u0275\u0275text(21, "L'entit\xE9 cible est obligatoire");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 107)(23, "label");
    \u0275\u0275text(24, "Personnel ");
    \u0275\u0275element(25, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 112);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_67_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.personnel, $event) || (ctx_r4.personnel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 37);
    \u0275\u0275text(28, "-- S\xE9lectionnez un personnel --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, CourriersComponent_ng_template_67_option_29_Template, 2, 3, "option", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 97)(31, "button", 113);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_67_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.imputCourrier());
    });
    \u0275\u0275template(32, CourriersComponent_ng_template_67_span_32_Template, 1, 0, "span", 114);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 115);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_67_Template_button_click_34_listener() {
      const modal_r26 = \u0275\u0275restoreView(_r25).$implicit;
      return \u0275\u0275resetView(modal_r26.close("Close click"));
    });
    \u0275\u0275text(35, "Fermer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx_r4.selectedDirection && ctx_r4.servicesOfDirection.length > 0 ? 17 : ctx_r4.selectedDirection && ctx_r4.servicesOfDirection.length === 0 ? 18 : 19);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.personnel);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.Utilisateurs);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r4.entiteCible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.loadingIndicator ? "Chargement..." : "Imputer", " ");
  }
}
function CourriersComponent_ng_template_69_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 111);
    \u0275\u0275text(1, "Le nom de l'exp\xE9diteur est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_69_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 111);
    \u0275\u0275text(1, "L'objet est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_69_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 111);
    \u0275\u0275text(1, "Le num\xE9ro est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_69_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dir_r32 = ctx.$implicit;
    \u0275\u0275property("value", dir_r32.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dir_r32.nom);
  }
}
function CourriersComponent_ng_template_69_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 111);
    \u0275\u0275text(1, "L'entit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_69_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 119);
  }
}
function CourriersComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 103)(2, "h5", 82);
    \u0275\u0275text(3, "Nouveau courrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 104);
    \u0275\u0275text(5, "Formulaire d'enregistrement d'un nouveau courrier");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 105);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_69_Template_button_click_6_listener() {
      const modal_r31 = \u0275\u0275restoreView(_r30).$implicit;
      return \u0275\u0275resetView(modal_r31.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 106)(8, "i", 28);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 86)(11, "form", 121);
    \u0275\u0275listener("ngSubmit", function CourriersComponent_ng_template_69_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onAddRowSave(ctx_r4.register));
    });
    \u0275\u0275elementStart(12, "div", 89)(13, "div", 107)(14, "label", 122);
    \u0275\u0275text(15, "Nom de l'exp\xE9diteur ");
    \u0275\u0275elementStart(16, "span", 35);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 123);
    \u0275\u0275template(20, CourriersComponent_ng_template_69_Conditional_20_Template, 2, 0, "small", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 107)(22, "label", 124);
    \u0275\u0275text(23, "Objet ");
    \u0275\u0275elementStart(24, "span", 35);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 125);
    \u0275\u0275template(28, CourriersComponent_ng_template_69_Conditional_28_Template, 2, 0, "small", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 107)(30, "label", 126);
    \u0275\u0275text(31, "Num\xE9ro ");
    \u0275\u0275elementStart(32, "span", 35);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 127);
    \u0275\u0275template(36, CourriersComponent_ng_template_69_Conditional_36_Template, 2, 0, "small", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 107)(38, "label");
    \u0275\u0275text(39, "Entit\xE9 ");
    \u0275\u0275elementStart(40, "span", 35);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "select", 128)(43, "option", 37);
    \u0275\u0275text(44, "-- S\xE9lectionnez une entit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, CourriersComponent_ng_template_69_option_45_Template, 2, 2, "option", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, CourriersComponent_ng_template_69_Conditional_46_Template, 2, 0, "small", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 107)(48, "label", 129);
    \u0275\u0275text(49, "Fichier joint ");
    \u0275\u0275element(50, "span", 35);
    \u0275\u0275text(51, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 130);
    \u0275\u0275listener("change", function CourriersComponent_ng_template_69_Template_input_change_52_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFileSelectedCreation($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 97)(54, "button", 131);
    \u0275\u0275template(55, CourriersComponent_ng_template_69_span_55_Template, 1, 0, "span", 114);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 115);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_69_Template_button_click_57_listener() {
      const modal_r31 = \u0275\u0275restoreView(_r30).$implicit;
      return \u0275\u0275resetView(modal_r31.close("Close click"));
    });
    \u0275\u0275text(58, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r4.register);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r4.register.get("expediteur")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r4.register.get("expediteur")) == null ? null : tmp_8_0.touched) ? 20 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r4.register.get("objet")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r4.register.get("objet")) == null ? null : tmp_9_0.touched) ? 28 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_10_0 = ctx_r4.register.get("numero")) == null ? null : tmp_10_0.valid) && ((tmp_10_0 = ctx_r4.register.get("numero")) == null ? null : tmp_10_0.touched) ? 36 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.directions);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_13_0 = ctx_r4.register.get("entite")) == null ? null : tmp_13_0.valid) && ((tmp_13_0 = ctx_r4.register.get("entite")) == null ? null : tmp_13_0.touched) ? 46 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r4.register.valid || ctx_r4.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function CourriersComponent_ng_template_71_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 137);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 137);
    \u0275\u0275element(5, "i", 138);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 139);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 139);
    \u0275\u0275element(10, "i", 140);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, item_r35.dateAction, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r35.statut, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Entit\xE9: ", item_r35.entite, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r35.utilisateur, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r35.commentaire);
  }
}
function CourriersComponent_ng_template_71_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CourriersComponent_ng_template_71_Conditional_13_For_1_Template, 14, 8, "div", 136, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r4.Historiques);
  }
}
function CourriersComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120)(1, "h4", 132)(2, "div", 133)(3, "div", 134);
    \u0275\u0275element(4, "div", 135);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "button", 105);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_71_Template_button_click_5_listener() {
      const modal_r34 = \u0275\u0275restoreView(_r33).$implicit;
      return \u0275\u0275resetView(modal_r34.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(6, "span", 106)(7, "i", 28);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 86)(10, "h6");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275template(13, CourriersComponent_ng_template_71_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("historique du courrier ", ctx_r4.selectedRowData ? ctx_r4.selectedRowData.numero : "-", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.Historiques.length > 0 ? 13 : -1);
  }
}
var CourriersComponent = class _CourriersComponent {
  constructor(fb, modalService, toastr, glogalService, authService, supportactivityService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.authService = authService;
    this.supportactivityService = supportactivityService;
    this.reponse = {
      emailExpediteur: "",
      objet: "",
      message: "",
      fichier: null,
      attachments: []
    };
    this.loading = false;
    this.entites = [];
    this.directions = [];
    this.services = [];
    this.servicesOfDirection = [];
    this.selectedDirection = null;
    this.personnel = void 0;
    this.entiteCible = void 0;
    this.Historiques = [];
    this.rows = [];
    this.salles = [];
    this.Activitys = [];
    this.ActivitySupport = [];
    this.Courriers = [];
    this.typeliste = "actifs";
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
    this.courriersRepondusLocalement = [];
    this.taille = "";
    this.columns = [
      { prop: "nom" },
      { prop: "capacite" }
    ];
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
    this.getUtilisateur();
    this.register = this.fb.group({
      entite: ["", [Validators.required]],
      numero: ["", [Validators.required]],
      objet: ["", [Validators.required]],
      expediteur: ["", [Validators.required]],
      fichier: [""]
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
  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get("entite").subscribe({
      next: (value) => {
        console.log("DATA BRUTE API:", value);
        value.forEach((e) => {
          console.log("ENTITE:", e.nom, " | TYPE:", e.type);
        });
        this.entites = value;
        this.directions = value.filter((e) => e.type === "DIRECTION");
        this.services = value.filter((e) => e.type === "SERVICE");
        console.log("ALL:", this.entites.map((e) => e.nom));
        console.log("DIRECTIONS:", this.directions.map((e) => e.nom));
        console.log("SERVICES:", this.services.map((e) => e.nom));
        this.loadingIndicator = false;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getCourrierByEntite() {
    console.log("=== getCourrierByEntite appel\xE9 ===");
    console.log("idEntite:", this.idEntite);
    console.log("directions disponibles:", this.directions.map((d) => `${d.id}: ${d.nom}`));
    console.log("services disponibles:", this.services.map((s) => `${s.id}: ${s.nom} (parentId: ${s.parentId})`));
    if (!this.idEntite) {
      console.log("idEntite est null, retour sans traitement");
      return;
    }
    this.idService = null;
    const idEntiteNumber = Number(this.idEntite);
    console.log("idEntite converti en nombre:", idEntiteNumber);
    this.selectedDirection = this.directions.find((dir) => dir.id === idEntiteNumber);
    console.log("Direction trouv\xE9e:", this.selectedDirection ? this.selectedDirection.nom : "NULL");
    if (this.selectedDirection) {
      this.servicesOfDirection = this.services.filter((service) => service.parentId === this.selectedDirection.id);
      console.log(`Chargement des courriers - Direction: ${this.selectedDirection.nom}`);
      console.log("Services de cette direction:", this.servicesOfDirection.map((s) => s.nom));
      console.log("Nombre de services trouv\xE9s:", this.servicesOfDirection.length);
    } else {
      this.servicesOfDirection = [];
      console.log("Aucune direction trouv\xE9e pour idEntite:", idEntiteNumber);
    }
    let backendType;
    switch (this.typeliste) {
      case "actifs":
        backendType = "ENVOYER";
        break;
      case "archives":
        backendType = "ARCHIVER";
        break;
      case "envoyes":
        backendType = "REPONDU";
        break;
      default:
        backendType = "ENVOYER";
    }
    this.loadingIndicator = true;
    this.glogalService.get(`api/courriers/${backendType}/${this.idEntite}`).subscribe({
      next: (value) => {
        this.Courriers = value;
        console.log("Courriers charg\xE9s:", value.length, "courriers");
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getCourrierByService() {
    console.log("=== getCourrierByService appel\xE9 ===");
    console.log("idService:", this.idService);
    console.log("servicesOfDirection disponibles:", this.servicesOfDirection.map((s) => `${s.id}: ${s.nom}`));
    if (!this.idService) {
      console.log("idService est null, on retourne aux courriers de la direction");
      this.getCourrierByEntite();
      return;
    }
    const selectedService = this.servicesOfDirection.find((service) => service.id === Number(this.idService));
    console.log("Service s\xE9lectionn\xE9:", selectedService ? selectedService.nom : "NULL");
    console.log("Service ID compar\xE9:", Number(this.idService));
    if (!selectedService) {
      console.log("Service non trouv\xE9 dans servicesOfDirection, on retourne aux courriers de la direction");
      this.getCourrierByEntite();
      return;
    }
    let backendType;
    switch (this.typeliste) {
      case "actifs":
        backendType = "ENVOYER";
        break;
      case "archives":
        backendType = "ARCHIVER";
        break;
      case "envoyes":
        backendType = "REPONDU";
        break;
      default:
        backendType = "ENVOYER";
    }
    this.loadingIndicator = true;
    console.log(`Appel API: api/courriers/${backendType}/${this.idService}`);
    this.glogalService.get(`api/courriers/${backendType}/${this.idService}`).subscribe({
      next: (value) => {
        this.Courriers = value;
        console.log(`Courriers du service ${selectedService.nom}:`, value.length, "courriers");
        console.log("D\xE9tails des courriers:", value);
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des courriers du service:", err);
        console.log("Retour aux courriers de la direction en cas d'erreur");
        this.getCourrierByEntite();
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
    let backendType;
    switch (type) {
      case "actifs":
        backendType = "ENVOYER";
        break;
      case "archives":
        backendType = "ARCHIVER";
        break;
      case "envoyes":
        backendType = "REPONDU";
        break;
      default:
        backendType = "ENVOYER";
    }
    console.log(`\u{1F504} handleList: ${type} -> ${backendType}`);
    this.glogalService.get(`api/courriers/${backendType}/${this.idEntite}`).subscribe({
      next: (value) => {
        if (type === "envoyes" && value.length === 0) {
          console.log("\u{1F50D} Backend retourne 0 REPONDUS, recherche des courriers r\xE9pondus localement...");
          this.glogalService.get(`api/courriers/ENVOYER/${this.idEntite}`).subscribe({
            next: (envoyers) => {
              const repondusLocalement = envoyers.filter((courrier) => (
                // Filtrer les courriers qui ont été marqués comme répondus dans le frontend
                this.courriersRepondusLocalement?.includes(courrier.id)
              ));
              console.log(`\u{1F4CA} Courriers r\xE9pondus localement: ${repondusLocalement.length}`);
              this.Courriers = repondusLocalement;
              this.typeliste = type;
              this.filteredData = [...repondusLocalement];
              setTimeout(() => {
                this.loadingIndicator = false;
              }, 500);
            },
            error: (err) => {
              console.error("\u274C Erreur lors de la recherche des courriers r\xE9pondus localement:", err);
              this.Courriers = value;
              this.typeliste = type;
              this.filteredData = [...value];
              setTimeout(() => {
                this.loadingIndicator = false;
              }, 500);
            }
          });
        } else {
          this.Courriers = value;
          this.typeliste = type;
          this.filteredData = [...value];
          console.log(`\u2705 Courriers charg\xE9s pour ${backendType}:`, value.length, "courriers");
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
        }
      },
      error: (err) => {
        console.error(`\u274C Erreur lors du chargement des courriers ${backendType}:`, err);
        this.loadingIndicator = false;
        this.toastr.error(`Erreur lors du chargement des courriers: ${err.message || "Erreur serveur"}`);
      }
    });
  }
  archiveCourrier(row) {
    this.glogalService.update("api/courriers/archiver", row.id, {}).subscribe({
      next: (resp) => {
        this.getCourrierByEntite();
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
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
  download(row) {
    this.loadingIndicator = true;
    this.supportactivityService.downloadCourrierFile(row.id).subscribe({
      next: (value) => {
        const blob = value.body;
        const contentDisposition = value.headers.get("content-disposition");
        let filename = `${row.numero}`;
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
  // Méthode pour le fichier de création de courrier
  onFileSelectedCreation(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.register.patchValue({ fichier: file });
      this.register.get("fichier")?.updateValueAndValidity();
    }
  }
  // Méthode pour le fichier de réponse (gardée séparément)
  onFileSelected(event) {
    if (this.reponse) {
      const file = event.target.files[0];
      if (file) {
        const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        if (!allowedTypes.includes(file.type)) {
          this.toastr.error("Format non autoris\xE9. Veuillez utiliser PDF, DOC ou DOCX");
          return;
        }
        if (file.size > 10 * 1024 * 1024) {
          this.toastr.error("Fichier trop volumineux (max 10MB)");
          return;
        }
        this.reponse.fichier = file;
      }
    }
  }
  ImputeModal(row, rowIndex, content) {
    if (content === "repondre") {
      this.selectedCourrier = row;
      this.reponse = {
        emailExpediteur: row.expediteurEmail || "",
        objet: `Re: ${row.objet || ""}`,
        message: "",
        fichier: null,
        attachments: []
      };
      this.modalService.open(this.repondreCourrierModal, {
        ariaLabelledBy: "repondreCourrierModal",
        size: "lg"
      });
      return;
    }
    if (!this.selectedDirection && this.idEntite) {
      const idEntiteNumber = Number(this.idEntite);
      this.selectedDirection = this.directions.find((dir) => dir.id === idEntiteNumber);
      if (this.selectedDirection) {
        this.servicesOfDirection = this.services.filter((service) => service.parentId === this.selectedDirection.id);
        console.log(`Direction r\xE9cup\xE9r\xE9e dans ImputeModal: ${this.selectedDirection.nom}`);
        console.log("Services de cette direction:", this.servicesOfDirection.map((s) => s.nom));
      }
    }
    if (this.selectedDirection) {
      console.log(`Modale d'imputation - Direction: ${this.selectedDirection.nom}`);
      console.log("Services disponibles:", this.servicesOfDirection.map((s) => s.nom));
    } else {
      console.log("Aucune direction s\xE9lectionn\xE9e pour l'imputation");
      console.log("idEntite:", this.idEntite);
      console.log("directions disponibles:", this.directions.map((d) => d.nom));
    }
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "meduim"
    });
    this.selectedRowData = row;
  }
  imputCourrier() {
    if (!this.entiteCible)
      return;
    const fd = new FormData();
    fd.append("entiteCibleId", this.entiteCible);
    if (this.personnel) {
      fd.append("utilisateurCible", this.personnel);
    }
    this.supportactivityService.imputerCourrier(this.selectedRowData.id, fd).subscribe({
      next: (response) => {
        this.entiteCible = null;
        this.selectedFile = null;
        this.getCourrierByEntite();
        this.modalService.dismissAll();
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
  onAddRowSave(form) {
    this.loadingIndicator = true;
    const fd = new FormData();
    fd.append("numero", form.value.numero);
    fd.append("objet", form.value.objet);
    fd.append("expediteur", form.value.expediteur);
    fd.append("directionId", form.value.entite);
    fd.append("fichier", form.value.fichier);
    this.glogalService.post("api/courriers/reception", fd).subscribe({
      next: (response) => {
        console.log("\u2705 Courrier cr\xE9\xE9 avec succ\xE8s:", response);
        form.reset();
        this.selectedFile = null;
        const fileInput = document.getElementById("fichier");
        if (fileInput) {
          fileInput.value = "";
        }
        this.modalService.dismissAll();
        this.loadingIndicator = false;
        this.addRecordSuccess();
        this.getCourrierByEntite();
      },
      error: (err) => {
        console.error("Erreur lors de la cr\xE9ation du courrier:", err);
        this.loadingIndicator = false;
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
  addRow(content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "medium"
    });
  }
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
  historiqueCourrier(row, rowIndex, content) {
    this.selectedRowData = row;
    this.glogalService.get(`api/historique/courrier/${row.id}`).subscribe({
      next: (value) => {
        this.Historiques = value;
        this.modalService.open(content, {
          ariaLabelledBy: "modal-basic-title",
          size: "meduim"
        });
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  displayFile(row) {
    window.open(`${row.url}`, "_blank");
  }
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
  onAttachmentsSelected(event) {
    const files = Array.from(event.target.files);
    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
    const validFiles = files.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        this.toastr.warning(`Le fichier ${file.name} n'a pas un format autoris\xE9`);
        return false;
      }
      if (file.size > maxSize) {
        this.toastr.warning(`Le fichier ${file.name} est trop volumineux (max 5MB)`);
        return false;
      }
      return true;
    });
    this.reponse.attachments = [...this.reponse.attachments, ...validFiles];
    if (validFiles.length < files.length) {
      this.toastr.warning("Certains fichiers n'ont pas \xE9t\xE9 ajout\xE9s en raison de leur format ou taille");
    }
  }
  envoyerReponse(modal) {
    if (!this.reponse.emailExpediteur || !this.reponse.objet || !this.reponse.message) {
      this.toastr.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.reponse.emailExpediteur)) {
      this.toastr.error("Veuillez entrer une adresse email valide");
      return;
    }
    this.loading = true;
    const formData = new FormData();
    formData.append("courrierId", this.selectedCourrier.id);
    formData.append("email", this.reponse.emailExpediteur);
    formData.append("objet", this.reponse.objet);
    formData.append("message", this.reponse.message);
    if (this.reponse.fichier) {
      formData.append("file", this.reponse.fichier);
    }
    this.reponse.attachments.forEach((file, index) => {
      formData.append(`attachment${index}`, file);
    });
    this.glogalService.post("api/courriers/reponse", formData).subscribe({
      next: (response) => {
        this.loading = false;
        modal.close();
        this.toastr.success("R\xE9ponse envoy\xE9e avec succ\xE8s");
        console.log("\u{1F4DD} R\xE9ponse backend:", response);
        if (this.selectedCourrier?.id && !this.courriersRepondusLocalement.includes(this.selectedCourrier.id)) {
          this.courriersRepondusLocalement.push(this.selectedCourrier.id);
          console.log("\u{1F4CB} Courriers r\xE9pondus localement:", this.courriersRepondusLocalement);
        }
        this.selectedCourrier.statut = "REPONDU";
        this.reponse = {
          emailExpediteur: "",
          objet: "",
          message: "",
          fichier: null,
          attachments: []
        };
        console.log("\u{1F504} Basculement vers la vue R\xC9PONDUS...");
        this.typeliste = "envoyes";
        setTimeout(() => {
          this.handleList("envoyes");
        }, 500);
      },
      error: (err) => {
        this.loading = false;
        console.error("Erreur lors de l'envoi de la r\xE9ponse:", err);
        const errorMessage = err?.error?.message || "Erreur lors de l'envoi de la r\xE9ponse";
        this.toastr.error(errorMessage);
      }
    });
  }
  deleteRecord(row) {
    this.glogalService.delete("api/courriers/delete", row.id).subscribe({
      next: (response) => {
        this.salles = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
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
  deleteRecordSuccess(count) {
    this.toastr.success(`${count} Record(s) deleted successfully`, "Success");
  }
  addRecordSuccess() {
    this.toastr.success("Record added successfully", "Success");
  }
  filterDatatable(event) {
    if (!event || !event.target) {
      return;
    }
    if (!this.Courriers || this.Courriers.length === 0) {
      return;
    }
    const val = event.target.value.toLowerCase();
    const colsAmount = this.columns.length;
    const keys = Object.keys(this.Courriers[0]);
    this.Courriers = this.filteredData.filter((item) => {
      for (let i = 0; i < colsAmount; i++) {
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
          return true;
        }
      }
      return false;
    });
    this.table.offset = 0;
  }
  static {
    this.\u0275fac = function CourriersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CourriersComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SupportactivityService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourriersComponent, selectors: [["app-courriers"]], viewQuery: function CourriersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.repondreCourrierModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 73, vars: 28, consts: [["table", ""], ["repondreCourrierModal", ""], ["entiteCibleModal", ""], ["addRecord", ""], ["history", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style", "mb-4"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-paper-plane"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-4"], [1, "row", "mb-4"], [1, "col-lg-12"], [1, "ngxTableHeader"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "d-flex", "gap-2"], ["title", "Ajouter un nouveau courrier", 1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [1, "material-icons"], ["title", "Supprimer les courriers s\xE9lectionn\xE9s", 1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], [1, "col-12"], [1, "d-flex", "flex-wrap", "gap-3", "align-items-start"], [1, "d-flex", "flex-wrap", "gap-3", "align-items-center", "flex-grow-1"], [1, "d-flex", "flex-column"], [1, "mb-1", "fw-semibold"], [1, "text-danger"], ["name", "idEntite", 1, "form-select", "readonly-select", "customselect", 2, "min-width", "200px", 3, "ngModelChange", "change", "ngModel"], ["value", "", "disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-4"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Num Courrier", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Exp\xE9diteur", 3, "width"], ["name", "Objet", 3, "width"], ["name", "Date reception", 3, "width"], ["name", "Statut", 3, "width"], ["name", "Actions", 3, "sortable"], [3, "value"], ["name", "idService", 1, "form-select", "readonly-select", "customselect", 2, "min-width", "180px", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center"], [1, "me-2", "fw-semibold", "text-muted"], [2, "min-width", "100px", 3, "click"], [1, "fas", "fa-file", "me-1"], [1, "fas", "fa-archive", "me-1"], [1, "fas", "fa-paper-plane", "me-1"], [1, "name-col-style"], [1, "badge", "bg-success"], [1, "badge", "bg-secondary"], [1, "badge", "bg-warning"], [1, "badge", "bg-info"], [1, "badge", "bg-primary"], [1, "fas", "fa-check", "me-1"], [1, "fas", "fa-clock", "me-1"], [1, "fas", "fa-share", "me-1"], [1, "fas", "fa-spinner", "me-1"], [1, "fas", "fa-question", "me-1"], ["title", "T\xE9l\xE9charger le courrier", 1, "btn", "btn-tbl-edit", "h-auto"], ["title", "Archiver le courrier", 1, "btn", "btn-tbl-edit", "h-auto"], ["title", "Voir l'historique du courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-history"], ["title", "r\xE9pondre ce courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-reply", "me-1"], ["title", "Imputer le courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-edit"], ["title", "T\xE9l\xE9charger le courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-download"], ["title", "Archiver le courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-archive"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "fas", "fa-reply", "me-2"], [1, "text-muted"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "card", "border", "mb-3"], [1, "card-body", "p-2"], [1, "row"], [1, "col-md-12", "mb-3"], ["type", "email", "placeholder", "exemple@mail.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Objet de la r\xE9ponse", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "R\xE9diger la r\xE9ponse...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".pdf,.doc,.docx", 1, "form-control", 3, "change"], [1, "col-md-12", "mb-2"], ["type", "file", "multiple", "", 1, "form-control", 3, "change"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-header", "entiteCibleModal"], [1, "modal-title-container"], [1, "modal-subtitle"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["name", "entiteCible", 1, "form-select", "form-control", "readonly-select", 3, "ngModel"], [1, "alert", "alert-warning"], [1, "alert", "alert-info"], [1, "form-text", "text-danger"], ["name", "personnel", 1, "form-select", "form-control", "readonly-select", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], ["name", "entiteCible", 1, "form-select", "form-control", "readonly-select", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "fas", "fa-info-circle", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-header", "editRowModal"], [1, "register-form", 3, "ngSubmit", "formGroup"], ["for", "expediteur"], ["type", "text", "id", "expediteur", "formControlName", "expediteur", "required", "", 1, "form-control"], ["for", "objet"], ["type", "text", "id", "objet", "formControlName", "objet", "required", "", 1, "form-control"], ["for", "numero"], ["type", "text", "id", "numero", "formControlName", "numero", "required", "", 1, "form-control"], ["formControlName", "entite", 1, "form-select", "form-control", "readonly-select"], ["for", "fichier"], ["type", "file", "id", "fichier", "accept", ".pdf,.png,.jpg,.jpeg,.docx,.mp4,.csv,.xlsx,.xlsx", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], [1, "shadow-sm", "mb-3", 2, "border-left", "1.5px solid orange", "border-radius", "5px", "padding-left", "5px"], [2, "font-size", "12px"], [1, "text-warning", "fa", "fa-square"], [1, "text-warning", 2, "font-size", "12px"], [1, "fa", "fa-user"]], template: function CourriersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 5)(1, "ul", 6)(2, "li", 7)(3, "h5", 8);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 9)(6, "a", 10);
        \u0275\u0275element(7, "i", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 7);
        \u0275\u0275text(9, "Gestion Des Courriers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 12);
        \u0275\u0275text(11, "Enregistrez, suivez et traitez les courriers li\xE9s aux activit\xE9s.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "div", 17)(17, "div", 18)(18, "div", 19)(19, "div", 20)(20, "div", 21)(21, "div", 22)(22, "div")(23, "label", 23)(24, "i", 24);
        \u0275\u0275text(25, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "input", 25);
        \u0275\u0275listener("keyup", function CourriersComponent_Template_input_keyup_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 26)(28, "button", 27);
        \u0275\u0275listener("click", function CourriersComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          const addRecord_r2 = \u0275\u0275reference(70);
          return \u0275\u0275resetView(ctx.addRow(addRecord_r2));
        });
        \u0275\u0275elementStart(29, "i", 28);
        \u0275\u0275text(30, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 29);
        \u0275\u0275listener("click", function CourriersComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(32, "i", 28);
        \u0275\u0275text(33, "delete");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(34, "div", 18)(35, "div", 30)(36, "div", 31)(37, "div", 32)(38, "div", 33)(39, "label", 34);
        \u0275\u0275text(40, "Entit\xE9 ");
        \u0275\u0275elementStart(41, "span", 35);
        \u0275\u0275text(42, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "select", 36);
        \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_Template_select_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.idEntite, $event) || (ctx.idEntite = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function CourriersComponent_Template_select_change_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.getCourrierByEntite());
        });
        \u0275\u0275elementStart(44, "option", 37);
        \u0275\u0275text(45, "-- S\xE9lectionnez une entit\xE9 --");
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, CourriersComponent_option_46_Template, 2, 2, "option", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(47, CourriersComponent_Conditional_47_Template, 7, 3, "div", 33);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(48, CourriersComponent_Conditional_48_Template, 14, 6, "div", 18);
        \u0275\u0275elementStart(49, "div", 39)(50, "ngx-datatable", 40, 0);
        \u0275\u0275listener("select", function CourriersComponent_Template_ngx_datatable_select_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275element(52, "ngx-datatable-column", 41);
        \u0275\u0275elementStart(53, "ngx-datatable-column", 42);
        \u0275\u0275template(54, CourriersComponent_ng_template_54_Template, 3, 1, "ng-template", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "ngx-datatable-column", 44);
        \u0275\u0275template(56, CourriersComponent_ng_template_56_Template, 3, 1, "ng-template", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ngx-datatable-column", 45);
        \u0275\u0275template(58, CourriersComponent_ng_template_58_Template, 3, 1, "ng-template", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "ngx-datatable-column", 46);
        \u0275\u0275template(60, CourriersComponent_ng_template_60_Template, 4, 4, "ng-template", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ngx-datatable-column", 47);
        \u0275\u0275template(62, CourriersComponent_ng_template_62_Template, 7, 1, "ng-template", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "ngx-datatable-column", 48);
        \u0275\u0275template(64, CourriersComponent_ng_template_64_Template, 6, 3, "ng-template", 43);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275template(65, CourriersComponent_ng_template_65_Template, 61, 13, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(67, CourriersComponent_ng_template_67_Template, 36, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(69, CourriersComponent_ng_template_69_Template, 59, 10, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(71, CourriersComponent_ng_template_71_Template, 14, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(31);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.idEntite);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.directions);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.idEntite ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.idEntite ? 48 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("rows", ctx.Courriers)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
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
        \u0275\u0275property("width", 120);
        \u0275\u0275advance(2);
        \u0275\u0275property("sortable", false);
      }
    }, dependencies: [NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnCellDirective, CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormsModule, NgModel], styles: ["\n\n  .modal-header.editRowModal {\n  border-bottom: none;\n  justify-content: space-between;\n  background-color: orange;\n  padding: 1rem;\n}\n  .modal-header.entiteCibleModal {\n  border-bottom: none;\n  justify-content: space-between;\n  background-color: orange;\n}\n  .modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n}\n  .modal-subtitle {\n  font-size: 0.875rem;\n  font-weight: 400;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=courriers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourriersComponent, [{
    type: Component,
    args: [{ selector: "app-courriers", imports: [NgxDatatableModule, CommonModule, ReactiveFormsModule, FormsModule], template: `<section class="main-content">
  <!-- Breadcrumb -->
  <ul class="breadcrumb breadcrumb-style mb-4">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-paper-plane"></i>
      </a>
    </li>
    <li class="breadcrumb-item">Gestion Des Courriers</li>
  </ul>

  <p class="odl-page-subtitle">Enregistrez, suivez et traitez les courriers li\xE9s aux activit\xE9s.</p>

  <div class="section-body">
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="p-4">
            <!-- En-t\xEAte avec recherche et boutons d'action -->
            <div class="row mb-4">
              <div class="col-lg-12">
                <div class="ngxTableHeader">
                  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <!-- Zone de recherche (gard\xE9e exactement comme avant) -->
                    <div class="table-search-area">
                      <div>
                        <label for="search-input"><i class="material-icons search-icon">search</i></label>
                        <input placeholder="Recherche" type="text" class="browser-default search-field"
                               (keyup)='filterDatatable($event)' aria-label="Search box">
                      </div>
                    </div>

                    <!-- Boutons d'action principaux (gard\xE9s exactement comme avant) -->
                    <div class="d-flex gap-2">
                      <button class="btn btn-icon icon-left bg-warning text-white rounded-button" 
                              (click)='addRow(addRecord)' title="Ajouter un nouveau courrier">
                        <i class="material-icons">add</i>
                      </button>
                      <button [hidden]=!isRowSelected class="btn btn-icon icon-left btn-danger rounded-button"
                              (click)='deleteSelected()' title="Supprimer les courriers s\xE9lectionn\xE9s">
                        <i class="material-icons">delete</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Filtres (Entit\xE9 et Service) -->
            <div class="row mb-4">
              <div class="col-12">
                <div class="d-flex flex-wrap gap-3 align-items-start">
                  <!-- Champs de s\xE9lection -->
                  <div class="d-flex flex-wrap gap-3 align-items-center flex-grow-1">
                    <!-- Champ Entit\xE9 -->
                    <div class="d-flex flex-column">
                      <label class="mb-1 fw-semibold">Entit\xE9 <span class="text-danger">*</span></label>
                      <select class="form-select readonly-select customselect" name="idEntite" 
                              [(ngModel)]="idEntite" (change)="getCourrierByEntite()" style="min-width: 200px;">
                        <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une entit\xE9 --</option>
                        <option *ngFor="let dir of directions" [value]="dir.id">{{dir.nom}}</option>
                      </select>
                    </div>

                    <!-- Champ Service (conditionnel) -->
                    @if(idEntite) {
                      <div class="d-flex flex-column">
                        <label class="mb-1 fw-semibold">Service</label>
                        <select class="form-select readonly-select customselect" name="idService" 
                                [(ngModel)]="idService" (change)="getCourrierByService()" style="min-width: 180px;">
                          <option [ngValue]="null">-- Tous les services --</option>
                          <option *ngFor="let service of servicesOfDirection" [value]="service.id">{{service.nom}}</option>
                        </select>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Boutons de filtre (Actifs/Archives/Envoy\xE9s) -->
            @if(idEntite) {
              <div class="row mb-4">
                <div class="col-12">
                  <div class="d-flex flex-wrap gap-2 align-items-center">
                    <span class="me-2 fw-semibold text-muted">Affichage :</span>
                    
                    <button [class]="typeliste ==='actifs' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'" 
                            (click)="handleList('actifs')" style="min-width: 100px;">
                      <i class="fas fa-file me-1"></i>
                      ACTIFS
                    </button>
        
                    <button [class]="typeliste ==='archives' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'" 
                            (click)="handleList('archives')" style="min-width: 100px;">
                      <i class="fas fa-archive me-1"></i>
                      ARCHIVES
                    </button>

                    <button [class]="typeliste ==='envoyes' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'" 
                            (click)="handleList('envoyes')" style="min-width: 100px;">
                      <i class="fas fa-paper-plane me-1"></i>
                      REPONDUS
                    </button>
                  </div>
                </div>
              </div>
            }

            <!-- Tableau des courriers -->
            <div class="mt-4">
              <ngx-datatable #table class="material" [rows]="Courriers" [loadingIndicator]="loadingIndicator"
                             columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                             [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                             [selectionType]="selection" (select)='onSelect($event)'>
                <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                      [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">
                </ngx-datatable-column>
                <ngx-datatable-column [width]="200" name="Num Courrier">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.numero}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column>
                <ngx-datatable-column [width]="200" name="Exp\xE9diteur">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.expediteur}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column>
                <ngx-datatable-column [width]="200" name="Objet">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.objet}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column>
                <ngx-datatable-column [width]="200" name="Date reception">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      <div>{{row.dateReception | date: 'dd/MM/yyyy'}}</div>
                    </div>
                  </ng-template>
                </ngx-datatable-column>
                <ngx-datatable-column [width]="120" name="Statut">
                  <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                    <div class="name-col-style">
                      @if(row.statut === 'REPONDU') {
                        <span class="badge bg-success">
                          <i class="fas fa-check me-1"></i>R\xE9pondu
                        </span>
                      } @else if(row.statut === 'ARCHIVER') {
                        <span class="badge bg-secondary">
                          <i class="fas fa-archive me-1"></i>Archiv\xE9
                        </span>
                      } @else if(row.statut === 'ENVOYER') {
                        <span class="badge bg-warning">
                          <i class="fas fa-clock me-1"></i>En attente
                        </span>
                      } @else if(row.statut === 'IMPUTER') {
                        <span class="badge bg-info">
                          <i class="fas fa-share me-1"></i>Imput\xE9
                        </span>
                      } @else if(row.statut === 'EN_COURS') {
                        <span class="badge bg-primary">
                          <i class="fas fa-spinner me-1"></i>En cours
                        </span>
                      } @else {
                        <span class="badge bg-info">
                          <i class="fas fa-question me-1"></i>{{row.statut}}
                        </span>
                      }
                    </div>
                  </ng-template>
                </ngx-datatable-column>
                <ngx-datatable-column name="Actions" [sortable]="false">
                  <ng-template let-value="value" let-row="row" let-rowIndex="rowIndex" ngx-datatable-cell-template>
                    <span>
                      @if(row.statut !== 'ARCHIVER' && row.statut !== 'REPONDU') {
                        <button class="btn btn-tbl-edit h-auto" (click)='ImputeModal(row, rowIndex, "repondre")' title="r\xE9pondre ce courrier">
                          <i class="fas fa-reply me-1"></i>
                        </button>
                        <button class="btn btn-tbl-edit h-auto" (click)='ImputeModal(row, rowIndex, entiteCibleModal)' title="Imputer le courrier">
                          <i class="fas fa-edit"></i>
                        </button>
                      }
                      @if(row.statut !== 'ARCHIVER') {
                        <button class="btn btn-tbl-edit h-auto" (click)='download(row)' title="T\xE9l\xE9charger le courrier">
                          <i class="fas fa-download"></i>
                        </button>
                      }
                      @if(row.statut !== 'ARCHIVER' && row.statut !== 'REPONDU') {
                        <button class="btn btn-tbl-edit h-auto" (click)='archiveCourrier(row)' title="Archiver le courrier">
                          <i class="fas fa-archive"></i>
                        </button>
                      }
                      <button class="btn btn-tbl-edit h-auto" (click)='historiqueCourrier(row, rowIndex, history)' title="Voir l'historique du courrier">
                        <i class="fas fa-history"></i>
                      </button>
                    </span>
                  </ng-template>
                </ngx-datatable-column>
              </ngx-datatable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal R\xE9ponse Courrier -->
<ng-template #repondreCourrierModal let-modal>
  <div class="modal-header">
    <div>
      <h5 class="modal-title fw-bold">
        <i class="fas fa-reply me-2"></i> R\xE9pondre au courrier
      </h5>
      <small class="text-muted">Formulaire de r\xE9ponse</small>
    </div>
    <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
  </div>

  <div class="modal-body">

    <!-- Infos courrier s\xE9lectionn\xE9 -->
    <div class="card border mb-3">
      <div class="card-body p-2">
        <div><b>R\xE9f\xE9rence :</b> {{ selectedCourrier?.reference }}</div>
        <div><b>Objet :</b> {{ selectedCourrier?.objet }}</div>
        <div><b>Exp\xE9diteur :</b> {{ selectedCourrier?.expediteur }}</div>
        <div><b>Date :</b> {{ selectedCourrier?.dateReception | date:'dd/MM/yyyy' }}</div>
      </div>
    </div>

    <div class="row">

      <!-- Email exp\xE9diteur -->
      <div class="col-md-12 mb-3">
        <label>Email exp\xE9diteur <span class="text-danger">*</span></label>
        <input
          type="email"
          class="form-control"
          [(ngModel)]="reponse.emailExpediteur"
          placeholder="exemple@mail.com"
        />
      </div>

      <!-- Objet r\xE9ponse -->
      <div class="col-md-12 mb-3">
        <label>Objet de la r\xE9ponse <span class="text-danger">*</span></label>
        <input
          type="text"
          class="form-control"
          [(ngModel)]="reponse.objet"
          placeholder="Objet de la r\xE9ponse"
        />
      </div>

      <!-- Message / commentaire -->
      <div class="col-md-12 mb-3">
        <label>Message / commentaires</label>
        <textarea
          rows="4"
          class="form-control"
          [(ngModel)]="reponse.message"
          placeholder="R\xE9diger la r\xE9ponse..."
        ></textarea>
      </div>

      <!-- Fichier r\xE9ponse -->
      <div class="col-md-12 mb-3">
        <label>Fichier de r\xE9ponse (PDF, DOCX)</label>
        <input
          type="file"
          class="form-control"
          (change)="onFileSelected($event)"
          accept=".pdf,.doc,.docx"
        />
        <small class="text-muted">
          Taille max : 10 MB \u2013 Formats autoris\xE9s : PDF, DOC, DOCX
        </small>
      </div>

      <!-- Pi\xE8ces jointes optionnelles -->
      <div class="col-md-12 mb-2">
        <label>Pi\xE8ces jointes (optionnel)</label>
        <input
          type="file"
          class="form-control"
          (change)="onAttachmentsSelected($event)"
          multiple
        />
      </div>

    </div>
  </div>

  <div class="modal-footer">
    <button
      class="btn btn-primary"
      [disabled]="!reponse.emailExpediteur || !reponse.objet"
      (click)="envoyerReponse(modal)"
    >
      <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
      {{ loading ? 'Envoi...' : 'Envoyer la r\xE9ponse' }}
    </button>

    <button class="btn btn-secondary" (click)="modal.dismiss()">
      Annuler
    </button>
  </div>
</ng-template>


  <!-- Imputation Modal Window -->
  <ng-template #entiteCibleModal let-modal>
    <div class="modal-header entiteCibleModal">
      <div class="modal-title-container">
        <h5 class="modal-title fw-bold">Assigner un courrier</h5>
        <small class="modal-subtitle">Formulaire d'envoi des courrier</small>
      </div>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
        <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
    </div>
    <div class="modal-body">
      <div class="row">
        <!-- Choisir le service qui doit traiter -->
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
          <label>Entit\xE9 cible <span class="text-danger">*</span></label>
          @if (selectedDirection && servicesOfDirection.length > 0) {
            <select class="form-select form-control readonly-select" name="entiteCible" [(ngModel)]="entiteCible">
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une entit\xE9 --</option>
              <option *ngFor="let serv of servicesOfDirection" [value]="serv.id">{{serv.nom}}</option>
            </select>
          } @else if (selectedDirection && servicesOfDirection.length === 0) {
            <div class="alert alert-warning">
              <i class="fas fa-exclamation-triangle me-2"></i>
              Aucun service disponible pour cette direction.
            </div>
          } @else {
            <div class="alert alert-info">
              <i class="fas fa-info-circle me-2"></i>
              Veuillez d'abord s\xE9lectionner une direction pour voir ses services.
            </div>
          }
          <small class="form-text text-danger">L'entit\xE9 cible est obligatoire</small>
        </div>

        <!-- Choisir la personne qui doit traiter le courrier -->
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
          <label>Personnel <span class="text-danger"></span></label>
          <select class="form-select form-control readonly-select" name="personnel" [(ngModel)]="personnel">
            <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un personnel --</option>
            <option *ngFor="let perso of Utilisateurs" [value]="perso.id">{{perso.prenom}} {{perso.nom}}</option>
          </select>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" [disabled]="!entiteCible" (click)="imputCourrier()">
          <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
          {{ loadingIndicator ? 'Chargement...' : 'Imputer' }}
        </button>
        <button type="button" class="btn btn-dark text-white" (click)="modal.close('Close click')">Fermer</button>
      </div>
    </div>
  </ng-template>

  <!-- Add Record Modal Window -->
  <ng-template #addRecord let-modal>
    <div class="modal-header editRowModal">
      <div class="modal-title-container">
        <h5 class="modal-title fw-bold">Nouveau courrier</h5>
        <small class="modal-subtitle">Formulaire d'enregistrement d'un nouveau courrier</small>
      </div>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
        <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
    </div>

    <div class="modal-body">
      <form class="register-form" [formGroup]="register" (ngSubmit)="onAddRowSave(register)">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
            <label for="expediteur">Nom de l'exp\xE9diteur <span class="text-danger">*</span>:</label>
            <input type="text" id="expediteur" formControlName="expediteur" class="form-control" required />
            @if (!register.get('expediteur')?.valid && register.get('expediteur')?.touched) {
              <small class="form-text text-danger">Le nom de l'exp\xE9diteur est obligatoire</small>
            }
          </div>

          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
            <label for="objet">Objet <span class="text-danger">*</span>:</label>
            <input type="text" id="objet" formControlName="objet" class="form-control" required />
            @if (!register.get('objet')?.valid && register.get('objet')?.touched) {
              <small class="form-text text-danger">L'objet est obligatoire</small>
            }
          </div>

          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
            <label for="numero">Num\xE9ro <span class="text-danger">*</span>:</label>
            <input type="text" id="numero" formControlName="numero" class="form-control" required />
            @if (!register.get('numero')?.valid && register.get('numero')?.touched) {
              <small class="form-text text-danger">Le num\xE9ro est obligatoire</small>
            }
          </div>

          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
            <label>Entit\xE9 <span class="text-danger">*</span></label>
            <select class="form-select form-control readonly-select" formControlName="entite">
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une entit\xE9 --</option>
              <option *ngFor="let dir of directions" [value]="dir.id">{{dir.nom}}</option>
            </select>
            @if (!register.get('entite')?.valid && register.get('entite')?.touched) {
              <small class="form-text text-danger">L'entit\xE9 est obligatoire</small>
            }
          </div>
          
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
            <label for="fichier">Fichier joint <span class="text-danger"></span>:</label>
            <input type="file" id="fichier" (change)="onFileSelectedCreation($event)" 
                   accept=".pdf,.png,.jpg,.jpeg,.docx,.mp4,.csv,.xlsx,.xlsx" class="form-control" />
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

  <!-- History Modal -->
  <ng-template #history let-modal>
    <div class="modal-header editRowModal">
      <h4 class="modal-title" id="modal-basic-title">
        <div class="table-modal-header">
          <div class="modal-about">
            <div class="fw-bold p-t-10 font-17"></div>
          </div>
        </div>
      </h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
    </div>
    <div class="modal-body">
      <h6>historique du courrier {{selectedRowData ? selectedRowData.numero : '-'}}</h6>
      <div>
        @if(Historiques.length > 0) {
          @for (item of Historiques; track item) {
            <div class="shadow-sm mb-3" style="border-left: 1.5px solid orange; border-radius: 5px; padding-left: 5px;">
              <div style="font-size: 12px;">{{item.dateAction | date: 'dd/MM/yyyy'}}</div>
              <span style="font-size: 12px;"><i class="text-warning fa fa-square"></i> {{item.statut}}</span>
              <div class="text-warning" style="font-size: 12px;">Entit\xE9: {{item.entite}}</div>
              <div class="text-warning" style="font-size: 12px;"><i class="fa fa-user"></i> {{item.utilisateur}}</div>
              <p>{{item.commentaire}}</p>
            </div>
          }
        }
      </div>
    </div>
  </ng-template>
</section>`, styles: ["/* src/app/personnels/courriers/courriers.component.scss */\n::ng-deep .modal-header.editRowModal {\n  border-bottom: none;\n  justify-content: space-between;\n  background-color: orange;\n  padding: 1rem;\n}\n::ng-deep .modal-header.entiteCibleModal {\n  border-bottom: none;\n  justify-content: space-between;\n  background-color: orange;\n}\n::ng-deep .modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n}\n::ng-deep .modal-subtitle {\n  font-size: 0.875rem;\n  font-weight: 400;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=courriers.component.css.map */\n"] }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: AuthService }, { type: SupportactivityService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], repondreCourrierModal: [{
    type: ViewChild,
    args: ["repondreCourrierModal"]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourriersComponent, { className: "CourriersComponent", filePath: "src/app/personnels/courriers/courriers.component.ts", lineNumber: 34 });
})();
export {
  CourriersComponent
};
//# sourceMappingURL=courriers.component-NIQC7577.js.map
