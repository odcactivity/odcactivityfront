import {
  SupportactivityService
} from "./chunk-JRCUF3LI.js";
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
  Router
} from "./chunk-M24KWC6L.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  ViewChild,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
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
} from "./chunk-FZBB7M2N.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/courriers/courriers.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["repondreCourrierModal"];
var _c1 = ["transmitOdcModal"];
var _c2 = ["addDcireExterne"];
var _c3 = ["editCourrierMetaTpl"];
var _forTrack0 = ($index, $item) => $item.id;
function CourriersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Liste des courriers enregistr\xE9s sur votre p\xE9rim\xE8tre (r\xE9ception et transmission). ");
  }
}
function CourriersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cr\xE9ation, validation et suivi des courriers de votre p\xE9rim\xE8tre. ");
  }
}
function CourriersComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDcireExterneModal());
    });
    \u0275\u0275elementStart(1, "i", 33);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function CourriersComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      const addRecord_r5 = \u0275\u0275reference(59);
      return \u0275\u0275resetView(ctx_r2.addRow(addRecord_r5));
    });
    \u0275\u0275elementStart(1, "i", 33);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function CourriersComponent_Conditional_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_34_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.handleList("validation"));
    });
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2, " \xC0 VALIDER ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.typeliste === "validation" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
  }
}
function CourriersComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 47)(2, "div", 48)(3, "span", 49);
    \u0275\u0275text(4, "Affichage :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleList("tous"));
    });
    \u0275\u0275element(6, "i", 51);
    \u0275\u0275text(7, " TOUT ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleList("actifs"));
    });
    \u0275\u0275element(9, "i", 52);
    \u0275\u0275text(10, " ACTIFS ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CourriersComponent_Conditional_34_Conditional_11_Template, 3, 2, "button", 53);
    \u0275\u0275elementStart(12, "button", 50);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_34_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleList("archives"));
    });
    \u0275\u0275element(13, "i", 54);
    \u0275\u0275text(14, " ARCHIVES ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 50);
    \u0275\u0275listener("click", function CourriersComponent_Conditional_34_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleList("envoyes"));
    });
    \u0275\u0275element(16, "i", 55);
    \u0275\u0275text(17, " REPONDUS ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.typeliste === "tous" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.typeliste === "actifs" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.isDcireRole && ctx_r2.isSuperAdminRole ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.typeliste === "archives" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.typeliste === "envoyes" ? "btn btn-warning" : "btn btn shadow-sm btn-dark");
  }
}
function CourriersComponent_ng_template_40_Template(rf, ctx) {
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
function CourriersComponent_ng_template_42_Template(rf, ctx) {
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
function CourriersComponent_ng_template_44_Template(rf, ctx) {
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
function CourriersComponent_ng_template_46_Template(rf, ctx) {
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
function CourriersComponent_ng_template_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2, "R\xE9pondu ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2, "Archiv\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, "Attente validation ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, "R\xE9vision admin ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2, "Transmis ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, "En attente ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2, "Transmis au service ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, "En cours ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_48_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r12.statut, " ");
  }
}
function CourriersComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, CourriersComponent_ng_template_48_Conditional_1_Template, 3, 0, "span", 59)(2, CourriersComponent_ng_template_48_Conditional_2_Template, 3, 0, "span", 60)(3, CourriersComponent_ng_template_48_Conditional_3_Template, 3, 0, "span", 60)(4, CourriersComponent_ng_template_48_Conditional_4_Template, 3, 0, "span", 61)(5, CourriersComponent_ng_template_48_Conditional_5_Template, 3, 0, "span", 62)(6, CourriersComponent_ng_template_48_Conditional_6_Template, 3, 0, "span", 63)(7, CourriersComponent_ng_template_48_Conditional_7_Template, 3, 0, "span", 64)(8, CourriersComponent_ng_template_48_Conditional_8_Template, 3, 0, "span", 65)(9, CourriersComponent_ng_template_48_Conditional_9_Template, 3, 1, "span", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r12.statut === "REPONDU" ? 1 : row_r12.statut === "ARCHIVER" ? 2 : row_r12.statut === "ATTENTE_VALIDATION_ODC" || row_r12.statut === "ATTENTE_VALIDATION_DIRECTEUR_ODC" ? 3 : row_r12.statut === "EN_REVISION_ADMIN_COURRIER" ? 4 : row_r12.statut === "TRANSMIS_DCIRE" ? 5 : row_r12.statut === "ENVOYER" ? 6 : row_r12.statut === "IMPUTER" ? 7 : row_r12.statut === "EN_COURS" ? 8 : 9);
  }
}
function CourriersComponent_ng_template_50_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resoumettreRevision(row_r15));
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2, "Renvoyer pour validation ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_50_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTransmitToOdc(row_r15));
    });
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2, "Transmettre ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_50_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r17 = \u0275\u0275nextContext();
      const row_r15 = ctx_r17.row;
      const rowIndex_r19 = ctx_r17.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ImputeModal(row_r15, rowIndex_r19, "repondre"));
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 84);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r17 = \u0275\u0275nextContext();
      const row_r15 = ctx_r17.row;
      const rowIndex_r19 = ctx_r17.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const entiteCibleModal_r20 = \u0275\u0275reference(57);
      return \u0275\u0275resetView(ctx_r2.ImputeModal(row_r15, rowIndex_r19, entiteCibleModal_r20));
    });
    \u0275\u0275element(3, "i", 85);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_50_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditCourrierMetaModal(row_r15));
    });
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_50_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.download(row_r15));
    });
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_50_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.archiveCourrier(row_r15));
    });
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, CourriersComponent_ng_template_50_Conditional_1_Template, 3, 0, "button", 73)(2, CourriersComponent_ng_template_50_Conditional_2_Template, 3, 0, "button", 74)(3, CourriersComponent_ng_template_50_Conditional_3_Template, 4, 0)(4, CourriersComponent_ng_template_50_Conditional_4_Template, 2, 0, "button", 75)(5, CourriersComponent_ng_template_50_Conditional_5_Template, 2, 0, "button", 76)(6, CourriersComponent_ng_template_50_Conditional_6_Template, 2, 0, "button", 77);
    \u0275\u0275elementStart(7, "button", 78);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_50_Template_button_click_7_listener() {
      const ctx_r23 = \u0275\u0275restoreView(_r13);
      const row_r15 = ctx_r23.row;
      const rowIndex_r19 = ctx_r23.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const history_r25 = \u0275\u0275reference(61);
      return \u0275\u0275resetView(ctx_r2.historiqueCourrier(row_r15, rowIndex_r19, history_r25));
    });
    \u0275\u0275element(8, "i", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSuperAdminRole && row_r15.statut === "EN_REVISION_ADMIN_COURRIER" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isDcireRole && ctx_r2.isCourrierPhysiquementADcire(row_r15) && row_r15.statut !== "ARCHIVER" && row_r15.statut !== "REPONDU" && row_r15.statut !== "ATTENTE_VALIDATION_ODC" && row_r15.statut !== "ATTENTE_VALIDATION_DIRECTEUR_ODC" && row_r15.statut !== "EN_REVISION_ADMIN_COURRIER" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r15.statut !== "ARCHIVER" && row_r15.statut !== "REPONDU" && row_r15.statut !== "ATTENTE_VALIDATION_ODC" && row_r15.statut !== "ATTENTE_VALIDATION_DIRECTEUR_ODC" && row_r15.statut !== "EN_REVISION_ADMIN_COURRIER" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.peutModifierMetadonneesCourrier(row_r15) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r15.statut !== "ARCHIVER" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r15.statut !== "ARCHIVER" && row_r15.statut !== "REPONDU" ? 6 : -1);
  }
}
function CourriersComponent_Conditional_51_For_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rep_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pi\xE8ce : ", rep_r26.fichierJoint, "");
  }
}
function CourriersComponent_Conditional_51_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "p", 94)(2, "strong");
    \u0275\u0275text(3, "Objet :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 95);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 96);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CourriersComponent_Conditional_51_For_4_Conditional_10_Template, 2, 1, "p", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rep_r26 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", rep_r26.objet, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("De : ", rep_r26.email, " \u2014 ", \u0275\u0275pipeBind2(7, 5, rep_r26.dateReponse, "short"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rep_r26.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(rep_r26.fichierJoint ? 10 : -1);
  }
}
function CourriersComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h6", 92);
    \u0275\u0275text(2, "R\xE9ponses enregistr\xE9es (cliquez sur une ligne du tableau pour afficher l\u2019historique)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CourriersComponent_Conditional_51_For_4_Template, 11, 8, "div", 93, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.courrierReponsesDetail);
  }
}
function CourriersComponent_ng_template_52_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 119);
  }
}
function CourriersComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div")(2, "h5", 99);
    \u0275\u0275element(3, "i", 100);
    \u0275\u0275text(4, " R\xE9pondre au courrier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 101);
    \u0275\u0275text(6, "Formulaire de r\xE9ponse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 102);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_52_Template_button_click_7_listener() {
      const modal_r28 = \u0275\u0275restoreView(_r27).$implicit;
      return \u0275\u0275resetView(modal_r28.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 103)(9, "div", 104)(10, "div", 105)(11, "div")(12, "b");
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
    \u0275\u0275elementStart(28, "div", 106)(29, "div", 107)(30, "label");
    \u0275\u0275text(31, "Email exp\xE9diteur ");
    \u0275\u0275elementStart(32, "span", 108);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_52_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.reponse.emailExpediteur, $event) || (ctx_r2.reponse.emailExpediteur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 107)(36, "label");
    \u0275\u0275text(37, "Objet de la r\xE9ponse ");
    \u0275\u0275elementStart(38, "span", 108);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_52_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.reponse.objet, $event) || (ctx_r2.reponse.objet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 107)(42, "label");
    \u0275\u0275text(43, "Message / commentaires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "textarea", 111);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_52_Template_textarea_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.reponse.message, $event) || (ctx_r2.reponse.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 107)(46, "label");
    \u0275\u0275text(47, "Fichier de r\xE9ponse (PDF, DOCX)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 112);
    \u0275\u0275listener("change", function CourriersComponent_ng_template_52_Template_input_change_48_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "small", 101);
    \u0275\u0275text(50, " Taille max : 10 MB \u2013 Formats autoris\xE9s : PDF, DOC, DOCX ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 113)(52, "label");
    \u0275\u0275text(53, "Pi\xE8ces jointes (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 114);
    \u0275\u0275listener("change", function CourriersComponent_ng_template_52_Template_input_change_54_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttachmentsSelected($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 115)(56, "button", 116);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_52_Template_button_click_56_listener() {
      const modal_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.envoyerReponse(modal_r28));
    });
    \u0275\u0275template(57, CourriersComponent_ng_template_52_span_57_Template, 1, 0, "span", 117);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 118);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_52_Template_button_click_59_listener() {
      const modal_r28 = \u0275\u0275restoreView(_r27).$implicit;
      return \u0275\u0275resetView(modal_r28.dismiss());
    });
    \u0275\u0275text(60, " Annuler ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedCourrier == null ? null : ctx_r2.selectedCourrier.reference, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedCourrier == null ? null : ctx_r2.selectedCourrier.objet, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedCourrier == null ? null : ctx_r2.selectedCourrier.expediteur, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 10, ctx_r2.selectedCourrier == null ? null : ctx_r2.selectedCourrier.dateReception, "dd/MM/yyyy"), "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.reponse.emailExpediteur);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.reponse.objet);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.reponse.message);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", !ctx_r2.reponse.emailExpediteur || !ctx_r2.reponse.objet);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "Envoi..." : "Envoyer la r\xE9ponse", " ");
  }
}
function CourriersComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "h5", 120);
    \u0275\u0275text(2, "Modifier le courrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 121);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_54_Template_button_click_3_listener() {
      const modal_r30 = \u0275\u0275restoreView(_r29).$implicit;
      return \u0275\u0275resetView(modal_r30.dismiss());
    });
    \u0275\u0275elementStart(4, "span", 122)(5, "i", 33);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 103)(8, "p", 123);
    \u0275\u0275text(9, "Mise \xE0 jour des m\xE9tadonn\xE9es uniquement (le fichier joint n\u2019est pas modifiable ici).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 92)(11, "label", 124);
    \u0275\u0275text(12, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_54_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editCourrierMeta.numero, $event) || (ctx_r2.editCourrierMeta.numero = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 92)(15, "label", 124);
    \u0275\u0275text(16, "Objet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_54_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editCourrierMeta.objet, $event) || (ctx_r2.editCourrierMeta.objet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 92)(19, "label", 124);
    \u0275\u0275text(20, "Exp\xE9diteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_54_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editCourrierMeta.expediteur, $event) || (ctx_r2.editCourrierMeta.expediteur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 115)(23, "button", 128);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_54_Template_button_click_23_listener() {
      const modal_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCourrierMeta(modal_r30));
    });
    \u0275\u0275text(24, "Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 129);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_54_Template_button_click_25_listener() {
      const modal_r30 = \u0275\u0275restoreView(_r29).$implicit;
      return \u0275\u0275resetView(modal_r30.dismiss());
    });
    \u0275\u0275text(26, "Annuler");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCourrierMeta.numero);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCourrierMeta.objet);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCourrierMeta.expediteur);
  }
}
function CourriersComponent_ng_template_56_Conditional_19_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 148);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const serv_r34 = ctx.$implicit;
    \u0275\u0275property("value", serv_r34.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(serv_r34.nom);
  }
}
function CourriersComponent_ng_template_56_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 146);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_56_Conditional_19_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.entiteCible, $event) || (ctx_r2.entiteCible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 147);
    \u0275\u0275text(2, "-- S\xE9lectionnez une entit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CourriersComponent_ng_template_56_Conditional_19_option_3_Template, 2, 2, "option", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.entiteCible);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.servicesOfDirection);
  }
}
function CourriersComponent_ng_template_56_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275element(1, "i", 149);
    \u0275\u0275text(2, " Aucun service disponible pour cette direction. ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_56_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275element(1, "i", 150);
    \u0275\u0275text(2, " Veuillez d'abord s\xE9lectionner une direction pour voir ses services. ");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_56_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 148);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perso_r35 = ctx.$implicit;
    \u0275\u0275property("value", perso_r35.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", perso_r35.prenom, " ", perso_r35.nom, "");
  }
}
function CourriersComponent_ng_template_56_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 151);
  }
}
function CourriersComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131)(2, "h5", 99);
    \u0275\u0275text(3, "Assigner un courrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 132);
    \u0275\u0275text(5, "Formulaire d'envoi des courrier");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 133);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_56_Template_button_click_6_listener() {
      const modal_r32 = \u0275\u0275restoreView(_r31).$implicit;
      return \u0275\u0275resetView(modal_r32.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 122)(8, "i", 33);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 103)(11, "p", 134);
    \u0275\u0275text(12, " Choisissez le service charg\xE9 du traitement et, si besoin, un collaborateur. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 106)(14, "div", 135)(15, "label");
    \u0275\u0275text(16, "Entit\xE9 cible ");
    \u0275\u0275elementStart(17, "span", 108);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, CourriersComponent_ng_template_56_Conditional_19_Template, 4, 3, "select", 136)(20, CourriersComponent_ng_template_56_Conditional_20_Template, 3, 0, "div", 137)(21, CourriersComponent_ng_template_56_Conditional_21_Template, 3, 0, "div", 138);
    \u0275\u0275elementStart(22, "small", 139);
    \u0275\u0275text(23, "L'entit\xE9 cible est obligatoire");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 135)(25, "label");
    \u0275\u0275text(26, "Collaborateur charg\xE9 du traitement (facultatif)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 140);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_56_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personnel, $event) || (ctx_r2.personnel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "option", 141);
    \u0275\u0275text(29, "-- Aucun \u2014 imputation au service seul --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, CourriersComponent_ng_template_56_option_30_Template, 2, 3, "option", 142);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 115)(32, "button", 143);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_56_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.imputCourrier());
    });
    \u0275\u0275template(33, CourriersComponent_ng_template_56_span_33_Template, 1, 0, "span", 144);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 145);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_56_Template_button_click_35_listener() {
      const modal_r32 = \u0275\u0275restoreView(_r31).$implicit;
      return \u0275\u0275resetView(modal_r32.close("Close click"));
    });
    \u0275\u0275text(36, "Fermer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx_r2.selectedDirection && ctx_r2.servicesOfDirection.length > 0 ? 19 : ctx_r2.selectedDirection && ctx_r2.servicesOfDirection.length === 0 ? 20 : 21);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personnel);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.Utilisateurs);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.entiteCible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Transmettre au service", " ");
  }
}
function CourriersComponent_ng_template_58_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 139);
    \u0275\u0275text(1, "Le nom de l'exp\xE9diteur est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_58_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 139);
    \u0275\u0275text(1, "L'objet est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_58_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 139);
    \u0275\u0275text(1, "Le num\xE9ro est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_58_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 170);
    \u0275\u0275text(2, " Aucune direction d\u2019\xE9mission reconnue. V\xE9rifiez la configuration des entit\xE9s ou contactez l\u2019administrateur. ");
    \u0275\u0275elementEnd()();
  }
}
function CourriersComponent_ng_template_58_Conditional_38_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r38 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r38.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r38.nom);
  }
}
function CourriersComponent_ng_template_58_Conditional_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 139);
    \u0275\u0275text(1, "La direction d\u2019\xE9mission est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_58_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "label", 171);
    \u0275\u0275text(2, "Direction d\u2019\xE9mission ");
    \u0275\u0275elementStart(3, "span", 108);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 172)(6, "option", 173);
    \u0275\u0275text(7, "Choisir une direction");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CourriersComponent_ng_template_58_Conditional_38_option_8_Template, 2, 2, "option", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CourriersComponent_ng_template_58_Conditional_38_Conditional_9_Template, 2, 0, "small", 139);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.odcDirections);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r2.register.get("odcDirectionId")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx_r2.register.get("odcDirectionId")) == null ? null : tmp_13_0.invalid) ? 9 : -1);
  }
}
function CourriersComponent_ng_template_58_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "label", 176);
    \u0275\u0275text(2, "Pr\xE9cision destinataire externe (facultatif)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 177);
    \u0275\u0275elementEnd();
  }
}
function CourriersComponent_ng_template_58_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 151);
  }
}
function CourriersComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 131)(2, "h5", 99);
    \u0275\u0275text(3, "Nouveau courrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 132);
    \u0275\u0275text(5, "Brouillon soumis pour validation avant envoi.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 133);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_58_Template_button_click_6_listener() {
      const modal_r37 = \u0275\u0275restoreView(_r36).$implicit;
      return \u0275\u0275resetView(modal_r37.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 122)(8, "i", 33);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 103)(11, "form", 153);
    \u0275\u0275listener("ngSubmit", function CourriersComponent_ng_template_58_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAddRowSave(ctx_r2.register));
    });
    \u0275\u0275elementStart(12, "div", 106)(13, "div", 135)(14, "label", 154);
    \u0275\u0275text(15, "Nom de l'exp\xE9diteur ");
    \u0275\u0275elementStart(16, "span", 108);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 155);
    \u0275\u0275template(20, CourriersComponent_ng_template_58_Conditional_20_Template, 2, 0, "small", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 135)(22, "label", 156);
    \u0275\u0275text(23, "Objet ");
    \u0275\u0275elementStart(24, "span", 108);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 157);
    \u0275\u0275template(28, CourriersComponent_ng_template_58_Conditional_28_Template, 2, 0, "small", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 135)(30, "label", 158);
    \u0275\u0275text(31, "Num\xE9ro ");
    \u0275\u0275elementStart(32, "span", 108);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 159);
    \u0275\u0275template(36, CourriersComponent_ng_template_58_Conditional_36_Template, 2, 0, "small", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, CourriersComponent_ng_template_58_Conditional_37_Template, 3, 0, "div", 160)(38, CourriersComponent_ng_template_58_Conditional_38_Template, 10, 3, "div", 135);
    \u0275\u0275elementStart(39, "div", 135)(40, "label", 161);
    \u0275\u0275text(41, "Destinataire (apr\xE8s validation)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 162)(43, "option", 163);
    \u0275\u0275text(44, "Externe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 164);
    \u0275\u0275text(46, "Interne \u2014 correspondance A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 165);
    \u0275\u0275text(48, "Interne \u2014 correspondance B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 166);
    \u0275\u0275text(50, "Interne \u2014 correspondance C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "small", 101);
    \u0275\u0275text(52, "Pour les cibles internes, l\u2019entit\xE9 correspondante doit exister en base.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, CourriersComponent_ng_template_58_Conditional_53_Template, 4, 0, "div", 135);
    \u0275\u0275elementStart(54, "div", 135)(55, "label", 167);
    \u0275\u0275text(56, "Fichier joint ");
    \u0275\u0275element(57, "span", 108);
    \u0275\u0275text(58, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 168);
    \u0275\u0275listener("change", function CourriersComponent_ng_template_58_Template_input_change_59_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelectedCreation($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 115)(61, "button", 169);
    \u0275\u0275template(62, CourriersComponent_ng_template_58_span_62_Template, 1, 0, "span", 144);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 145);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_58_Template_button_click_64_listener() {
      const modal_r37 = \u0275\u0275restoreView(_r36).$implicit;
      return \u0275\u0275resetView(modal_r37.close("Close click"));
    });
    \u0275\u0275text(65, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r2.register);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r2.register.get("expediteur")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r2.register.get("expediteur")) == null ? null : tmp_11_0.touched) ? 20 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_12_0 = ctx_r2.register.get("objet")) == null ? null : tmp_12_0.valid) && ((tmp_12_0 = ctx_r2.register.get("objet")) == null ? null : tmp_12_0.touched) ? 28 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_13_0 = ctx_r2.register.get("numero")) == null ? null : tmp_13_0.valid) && ((tmp_13_0 = ctx_r2.register.get("numero")) == null ? null : tmp_13_0.touched) ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.odcDirections.length === 0 ? 37 : 38);
    \u0275\u0275advance(16);
    \u0275\u0275conditional((((tmp_15_0 = ctx_r2.register.get("destinataireOdc")) == null ? null : tmp_15_0.value) || "EXTERNE") === "EXTERNE" ? 53 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r2.register.valid || ctx_r2.loadingIndicator || ctx_r2.odcDirections.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function CourriersComponent_ng_template_60_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 183);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 183);
    \u0275\u0275element(5, "i", 184);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 185);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 185);
    \u0275\u0275element(10, "i", 186);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r41 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, item_r41.dateAction, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r41.statut, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Entit\xE9: ", item_r41.entite, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r41.utilisateur, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r41.commentaire);
  }
}
function CourriersComponent_ng_template_60_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CourriersComponent_ng_template_60_Conditional_13_For_1_Template, 14, 8, "div", 182, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.Historiques);
  }
}
function CourriersComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152)(1, "h4", 178)(2, "div", 179)(3, "div", 180);
    \u0275\u0275element(4, "div", 181);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "button", 133);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_60_Template_button_click_5_listener() {
      const modal_r40 = \u0275\u0275restoreView(_r39).$implicit;
      return \u0275\u0275resetView(modal_r40.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(6, "span", 122)(7, "i", 33);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 103)(10, "h6");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275template(13, CourriersComponent_ng_template_60_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("historique du courrier ", ctx_r2.selectedRowData ? ctx_r2.selectedRowData.numero : "-", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.Historiques.length > 0 ? 13 : -1);
  }
}
function CourriersComponent_ng_template_62_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r44 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r44.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r44.nom);
  }
}
function CourriersComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "h5", 120);
    \u0275\u0275text(2, "Transmettre \xE0 une direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 102);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_62_Template_button_click_3_listener() {
      const modal_r43 = \u0275\u0275restoreView(_r42).$implicit;
      return \u0275\u0275resetView(modal_r43.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 103)(5, "p", 123);
    \u0275\u0275text(6, "Choisissez la direction qui prendra le relais.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 124);
    \u0275\u0275text(8, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 187);
    \u0275\u0275twoWayListener("ngModelChange", function CourriersComponent_ng_template_62_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.transmitOdcDirectionId, $event) || (ctx_r2.transmitOdcDirectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 173);
    \u0275\u0275text(11, "-- Direction --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CourriersComponent_ng_template_62_option_12_Template, 2, 2, "option", 174);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 115)(14, "button", 188);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_62_Template_button_click_14_listener() {
      const modal_r43 = \u0275\u0275restoreView(_r42).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmTransmitToOdc(modal_r43));
    });
    \u0275\u0275text(15, "Transmettre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 118);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_62_Template_button_click_16_listener() {
      const modal_r43 = \u0275\u0275restoreView(_r42).$implicit;
      return \u0275\u0275resetView(modal_r43.dismiss());
    });
    \u0275\u0275text(17, "Annuler");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.transmitOdcDirectionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.odcDirections);
  }
}
function CourriersComponent_ng_template_64_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r47 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r47.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r47.nom);
  }
}
function CourriersComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "h5", 120);
    \u0275\u0275text(2, "R\xE9ception d\u2019un courrier externe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 102);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_64_Template_button_click_3_listener() {
      const modal_r46 = \u0275\u0275restoreView(_r45).$implicit;
      return \u0275\u0275resetView(modal_r46.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 103)(5, "form", 189);
    \u0275\u0275listener("ngSubmit", function CourriersComponent_ng_template_64_Template_form_ngSubmit_5_listener() {
      const modal_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDcireExterne(ctx_r2.registerExterne, modal_r46));
    });
    \u0275\u0275elementStart(6, "div", 92)(7, "label");
    \u0275\u0275text(8, "Structure d\u2019origine ");
    \u0275\u0275elementStart(9, "span", 108);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 190)(12, "option", 173);
    \u0275\u0275text(13, "\u2014 Choisir une structure \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CourriersComponent_ng_template_64_option_14_Template, 2, 2, "option", 174);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 92)(16, "label");
    \u0275\u0275text(17, "Num\xE9ro ");
    \u0275\u0275elementStart(18, "span", 108);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 92)(22, "label");
    \u0275\u0275text(23, "Objet ");
    \u0275\u0275elementStart(24, "span", 108);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "input", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 92)(28, "label");
    \u0275\u0275text(29, "Exp\xE9diteur (contact) ");
    \u0275\u0275elementStart(30, "span", 108);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "input", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 92)(34, "label");
    \u0275\u0275text(35, "Fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 194);
    \u0275\u0275listener("change", function CourriersComponent_ng_template_64_Template_input_change_36_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelectedExterne($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 195)(38, "button", 169);
    \u0275\u0275text(39, "Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 145);
    \u0275\u0275listener("click", function CourriersComponent_ng_template_64_Template_button_click_40_listener() {
      const modal_r46 = \u0275\u0275restoreView(_r45).$implicit;
      return \u0275\u0275resetView(modal_r46.dismiss());
    });
    \u0275\u0275text(41, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.registerExterne);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.externalDirections);
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", !ctx_r2.registerExterne.valid);
  }
}
var CourriersComponent = class _CourriersComponent {
  constructor(fb, modalService, toastr, glogalService, authService, supportactivityService, router) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.authService = authService;
    this.supportactivityService = supportactivityService;
    this.router = router;
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
    this.typeliste = "tous";
    this.ActivitySupportOnglets = [];
    this.Utilisateurs = [];
    this.selectedFile = null;
    this.listType = "1";
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.courrierReponsesDetail = [];
    this.lastDetailCourrierId = null;
    this.editCourrierMeta = { numero: "", objet: "", expediteur: "" };
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.courriersRepondusLocalement = [];
    this.taille = "";
    this.isDcireRole = false;
    this.isSuperAdminRole = false;
    this.odcDirections = [];
    this.externalDirections = [];
    this.dcireDirectionId = null;
    this.courriersDcireBruts = [];
    this.transmitOdcDirectionId = null;
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
  onCourrierActivate(ev) {
    if (ev?.type !== "click" || ev.row?.id == null) {
      return;
    }
    const id = Number(ev.row.id);
    if (!Number.isFinite(id)) {
      return;
    }
    this.lastDetailCourrierId = id;
    this.glogalService.getCourrierReponses(id).subscribe({
      next: (r) => {
        this.courrierReponsesDetail = Array.isArray(r) ? r : [];
      },
      error: () => {
        this.courrierReponsesDetail = [];
      }
    });
  }
  peutModifierMetadonneesCourrier(row) {
    if (!row || row.statut === "ARCHIVER") {
      return false;
    }
    return this.isSuperAdminRole || this.isDcireRole;
  }
  openEditCourrierMetaModal(row) {
    this.selectedRowData = row;
    this.editCourrierMeta = {
      numero: String(row.numero ?? ""),
      objet: String(row.objet ?? ""),
      expediteur: String(row.expediteur ?? "")
    };
    this.modalService.open(this.editCourrierMetaTpl, { size: "lg", scrollable: true });
  }
  saveCourrierMeta(modal) {
    if (!this.selectedRowData?.id) {
      return;
    }
    const b = this.editCourrierMeta;
    if (!b.numero?.trim() || !b.objet?.trim() || !b.expediteur?.trim()) {
      this.toastr.warning("Renseignez num\xE9ro, objet et exp\xE9diteur.");
      return;
    }
    this.glogalService.patchCourrierMetadonnees(this.selectedRowData.id, {
      numero: b.numero.trim(),
      objet: b.objet.trim(),
      expediteur: b.expediteur.trim()
    }).subscribe({
      next: () => {
        this.toastr.success("Courrier mis \xE0 jour.");
        modal.close();
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else {
          this.getCourrierByEntite();
        }
      },
      error: () => this.toastr.error("Modification impossible.")
    });
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
    const r = (this.authService.getCurrentUserFromStorage()?.roles || []).map((x) => String(x).trim().toUpperCase());
    if (r.includes("PERSONNEL")) {
      this.router.navigate(["/dashboardActivite"], { replaceUrl: true });
      return;
    }
    this.register = this.fb.group({
      numero: ["", [Validators.required]],
      objet: ["", [Validators.required]],
      expediteur: ["", [Validators.required]],
      fichier: [""],
      odcDirectionId: [null],
      destinataireOdc: ["EXTERNE"],
      externePrecision: [""]
    });
    this.registerExterne = this.fb.group({
      structureOrigineId: [null, [Validators.required]],
      numero: ["", [Validators.required]],
      objet: ["", [Validators.required]],
      expediteur: ["", [Validators.required]],
      fichier: [""]
    });
    this.getAllEntite();
    this.getUtilisateur();
    const userString = localStorage.getItem("currentUser");
    if (userString) {
      const user = JSON.parse(userString);
      const token = user.bearer;
      if (token) {
        const decoded = this.authService.getDecodedToken(token);
        this.currenUserData = decoded;
      }
    }
    const rawRoles = this.authService.getCurrentUserFromStorage()?.roles || [];
    const roles = rawRoles.map((r2) => String(r2).trim().toUpperCase());
    this.isDcireRole = roles.includes("DIRECTEUR") || roles.includes("DCIRE");
    this.isSuperAdminRole = roles.includes("SUPERADMIN") || roles.includes("ADMIN");
  }
  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get("entite").subscribe({
      next: (value) => {
        this.entites = value;
        this.directions = value.filter((e) => this.isDirectionEntiteType(e.type));
        this.services = value.filter((e) => this.isServiceEntiteType(e.type));
        this.odcDirections = this.directions.filter((e) => this.isOdcDirectionName(e.nom) && !this.isDcireDirectionName(e.nom));
        this.externalDirections = this.directions.filter((e) => !this.isOdcDirectionName(e.nom) && !this.isDcireDirectionName(e.nom));
        const dc = this.directions.find((e) => this.isDcireDirectionName(e.nom));
        this.dcireDirectionId = dc?.id ?? null;
        const finishEntiteLoad = () => {
          this.patchRegisterOdcDirectionDefaults();
          this.loadingIndicator = false;
          if (this.isDcireRole) {
            this.refreshCourriersDcire();
          } else {
            this.loadOdcCourriersMerged();
          }
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
        };
        this.glogalService.get("api/courriers/odc/directions-emission").pipe(catchError(() => of([]))).subscribe((list) => {
          if (Array.isArray(list) && list.length > 0) {
            this.odcDirections = list;
          }
          finishEntiteLoad();
        });
      }
    });
  }
  /** Liste admin : fusion de toutes les directions ODC (sans filtre manuel). */
  loadOdcCourriersMerged() {
    if (this.isDcireRole) {
      this.refreshCourriersDcire();
      return;
    }
    if (!this.odcDirections?.length) {
      this.Courriers = [];
      this.filteredData = [];
      return;
    }
    const vue = this.mapTypelisteToVueParam();
    this.loadingIndicator = true;
    const reqs = this.odcDirections.map((d) => this.glogalService.get(`api/courriers/odc/${d.id}?vue=${vue}`).pipe(catchError(() => of([]))));
    forkJoin(reqs).subscribe({
      next: (arrays) => {
        const byId = /* @__PURE__ */ new Map();
        for (const arr of arrays) {
          for (const c of arr || []) {
            if (c?.id != null) {
              byId.set(Number(c.id), c);
            }
          }
        }
        this.Courriers = [...byId.values()];
        this.filteredData = [...this.Courriers];
        this.loadingIndicator = false;
      },
      error: () => {
        this.Courriers = [];
        this.filteredData = [];
        this.loadingIndicator = false;
      }
    });
  }
  /** JSON enum Spring peut être une chaîne ou { name: "DIRECTION" }. */
  entiteTypeString(type) {
    if (typeof type === "string") {
      return type.trim().toUpperCase();
    }
    if (type != null && typeof type === "object" && "name" in type) {
      return String(type.name ?? "").trim().toUpperCase();
    }
    return String(type ?? "").trim().toUpperCase();
  }
  isDirectionEntiteType(type) {
    return this.entiteTypeString(type) === "DIRECTION";
  }
  isServiceEntiteType(type) {
    return this.entiteTypeString(type) === "SERVICE";
  }
  /** Règle alignée avec le backend (CourrierService.estDirectionOdc). */
  patchRegisterOdcDirectionDefaults() {
    if (!this.register) {
      return;
    }
    const ctrl = this.register.get("odcDirectionId");
    if (!ctrl) {
      return;
    }
    if (this.odcDirections.length === 0) {
      ctrl.clearValidators();
      ctrl.setValue(null);
    } else {
      ctrl.setValidators([Validators.required]);
      if (this.odcDirections.length === 1) {
        ctrl.setValue(this.odcDirections[0].id ?? null);
      } else if (!this.odcDirections.some((d) => d.id === ctrl.value)) {
        ctrl.setValue(null);
      }
    }
    ctrl.updateValueAndValidity({ emitEvent: false });
  }
  normalizeNomCourrier(nom) {
    return String(nom || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/\s+/g, " ").trim();
  }
  isDcireDirectionName(nom) {
    return this.normalizeNomCourrier(nom).includes("DCIRE");
  }
  isOdcDirectionName(nom) {
    const n = this.normalizeNomCourrier(nom);
    if (!n) {
      return false;
    }
    return n.includes("ORANGE DIGITAL KALANSO") || n.includes("ODK") || n.includes("ORANGE DIGITAL MULTIMEDIA") || n.includes("MULTIMEDIA") || n.includes("ORANGE FABLAB") || n.includes("FABLAB") || n.includes("ORANGE FAB") || n.includes("ORANGE DIGITAL CENTER") || n.includes("DIGITAL CENTER") || n.includes("ODC");
  }
  mapTypelisteToVueParam() {
    switch (this.typeliste) {
      case "validation":
        return "VALIDATION";
      case "archives":
        return "ARCHIVES";
      case "envoyes":
        return "REPONDUS";
      case "tous":
        return "TOUS";
      case "actifs":
        return "OPERATIONNEL";
      default:
        return "OPERATIONNEL";
    }
  }
  applyDcireTabFilter(bruts) {
    switch (this.typeliste) {
      case "tous":
        return [...bruts];
      case "archives":
        return bruts.filter((c) => c.statut === "ARCHIVER");
      case "envoyes":
        return bruts.filter((c) => c.statut === "REPONDU");
      case "validation":
        return [];
      case "actifs":
        return bruts.filter((c) => c.statut !== "ARCHIVER" && c.statut !== "REPONDU");
      default:
        return bruts.filter((c) => c.statut !== "ARCHIVER" && c.statut !== "REPONDU");
    }
  }
  refreshCourriersDcire() {
    if (!this.isDcireRole) {
      return;
    }
    this.loadingIndicator = true;
    this.glogalService.get("api/courriers/dcire").subscribe({
      next: (rows) => {
        this.courriersDcireBruts = Array.isArray(rows) ? rows : [];
        this.Courriers = this.applyDcireTabFilter(this.courriersDcireBruts);
        this.filteredData = [...this.Courriers];
        this.loadingIndicator = false;
      },
      error: () => {
        this.loadingIndicator = false;
      }
    });
  }
  rowEntiteId(row) {
    const e = row?.entite;
    if (e == null) {
      return null;
    }
    if (typeof e === "object" && e.id != null) {
      return Number(e.id);
    }
    if (typeof e === "number") {
      return e;
    }
    return null;
  }
  isCourrierPhysiquementADcire(row) {
    return this.dcireDirectionId != null && this.rowEntiteId(row) === this.dcireDirectionId;
  }
  validerTransmissionVersDcire(row) {
    if (!row?.id) {
      return;
    }
    this.glogalService.postCourrierValiderTransmissionDcire(row.id).subscribe({
      next: () => {
        this.toastr.success("Courrier valid\xE9 : transmission effectu\xE9e.");
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else {
          this.getCourrierByEntite();
        }
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || "Validation impossible.");
      }
    });
  }
  resoumettreRevision(row) {
    if (!row?.id) {
      return;
    }
    this.glogalService.postCourrierResoumettreRevision(row.id).subscribe({
      next: () => {
        this.toastr.success("Courrier renvoy\xE9 au directeur ODC pour validation.");
        this.getCourrierByEntite();
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || "Renvoi impossible.");
      }
    });
  }
  openTransmitToOdc(row) {
    this.selectedRowData = row;
    this.transmitOdcDirectionId = this.odcDirections[0]?.id ?? null;
    this.modalService.open(this.transmitOdcModal, { size: "md" });
  }
  confirmTransmitToOdc(modal) {
    if (!this.selectedRowData?.id || !this.transmitOdcDirectionId) {
      this.toastr.error("Choisissez une direction ODC cible.");
      return;
    }
    this.glogalService.postCourrierTransmettreVersOdc(this.selectedRowData.id, this.transmitOdcDirectionId).subscribe({
      next: () => {
        this.toastr.success("Courrier transmis \xE0 l\u2019ODC.");
        modal.close();
        this.refreshCourriersDcire();
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || "Transmission impossible.");
      }
    });
  }
  openDcireExterneModal() {
    this.registerExterne.reset({ fichier: "" });
    this.modalService.open(this.addDcireExterne, { size: "lg" });
  }
  onFileSelectedExterne(event) {
    const file = event.target.files?.[0];
    if (file) {
      this.registerExterne.patchValue({ fichier: file });
    }
  }
  saveDcireExterne(form, modal) {
    if (form.invalid) {
      return;
    }
    const fd = new FormData();
    fd.append("structureOrigineId", String(form.value.structureOrigineId));
    fd.append("numero", form.value.numero);
    fd.append("objet", form.value.objet);
    fd.append("expediteur", form.value.expediteur);
    if (form.value.fichier) {
      fd.append("fichier", form.value.fichier);
    }
    this.loadingIndicator = true;
    this.glogalService.postMultipart("api/courriers/dcire/reception-externe", fd).subscribe({
      next: () => {
        this.toastr.success("Courrier enregistr\xE9.");
        modal.close();
        this.refreshCourriersDcire();
        this.loadingIndicator = false;
      },
      error: (err) => {
        this.loadingIndicator = false;
        this.toastr.error(err?.error?.message || "Enregistrement impossible.");
      }
    });
  }
  getCourrierByEntite() {
    if (this.isDcireRole) {
      this.refreshCourriersDcire();
      return;
    }
    this.idService = null;
    this.loadOdcCourriersMerged();
  }
  getCourrierByService() {
    this.getCourrierByEntite();
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
    this.typeliste = type;
    if (this.isDcireRole) {
      this.Courriers = this.applyDcireTabFilter(this.courriersDcireBruts);
      this.filteredData = [...this.Courriers];
      return;
    }
    this.getCourrierByEntite();
  }
  archiveCourrier(row) {
    this.glogalService.update("api/courriers/archiver", row.id, {}).subscribe({
      next: (resp) => {
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else {
          this.getCourrierByEntite();
        }
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
    if (this.isDcireRole && this.dcireDirectionId && content !== "repondre") {
      const dir = this.directions.find((d) => d.id === this.dcireDirectionId);
      this.selectedDirection = dir ?? null;
      if (this.selectedDirection) {
        this.servicesOfDirection = this.services.filter((s) => s.parentId === this.selectedDirection.id);
      }
    }
    if (!this.isDcireRole && content !== "repondre") {
      const ent = row?.entite ?? row?.directionInitial;
      const dirId = ent && typeof ent === "object" && ent.id != null ? Number(ent.id) : ent != null && typeof ent === "number" ? ent : null;
      if (dirId != null) {
        this.selectedDirection = this.directions.find((d) => d.id === dirId) ?? null;
        if (this.selectedDirection) {
          this.servicesOfDirection = this.services.filter((s) => s.parentId === this.selectedDirection.id);
        }
      }
    }
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
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else {
          this.getCourrierByEntite();
        }
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
    const dirId = form.value.odcDirectionId != null ? Number(form.value.odcDirectionId) : this.odcDirections[0]?.id;
    if (dirId == null || Number.isNaN(dirId)) {
      this.toastr.error("Aucune direction ODC disponible : v\xE9rifiez les entit\xE9s (type Direction, nom reconnu ODC) ou contactez l\u2019administrateur.");
      return;
    }
    this.loadingIndicator = true;
    const fd = new FormData();
    fd.append("numero", form.value.numero);
    fd.append("objet", form.value.objet);
    fd.append("expediteur", form.value.expediteur);
    fd.append("odcDirectionId", String(dirId));
    const dest = (form.value.destinataireOdc || "EXTERNE").toString().trim().toUpperCase();
    fd.append("destinataireOdc", dest || "EXTERNE");
    const prec = (form.value.externePrecision || "").toString().trim();
    if (prec) {
      fd.append("externePrecision", prec);
    }
    if (form.value.fichier) {
      fd.append("fichier", form.value.fichier);
    }
    this.glogalService.postMultipart("api/courriers/odc/brouillon", fd).subscribe({
      next: (response) => {
        console.log("\u2705 Courrier cr\xE9\xE9 avec succ\xE8s:", response);
        form.reset();
        form.patchValue({ destinataireOdc: "EXTERNE", externePrecision: "" });
        this.patchRegisterOdcDirectionDefaults();
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
    this.patchRegisterOdcDirectionDefaults();
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
          if (this.isDcireRole) {
            this.refreshCourriersDcire();
          } else {
            this.handleList("envoyes");
          }
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
      return new (__ngFactoryType__ || _CourriersComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SupportactivityService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourriersComponent, selectors: [["app-courriers"]], viewQuery: function CourriersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.repondreCourrierModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.transmitOdcModal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addDcireExterne = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editCourrierMetaTpl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 66, vars: 27, consts: [["table", ""], ["repondreCourrierModal", ""], ["editCourrierMetaTpl", ""], ["entiteCibleModal", ""], ["addRecord", ""], ["history", ""], ["transmitOdcModal", ""], ["addDcireExterne", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style", "mb-4"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-paper-plane"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-4"], [1, "row", "mb-4"], [1, "col-lg-12"], [1, "ngxTableHeader"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "d-flex", "gap-2"], ["title", "R\xE9ception courrier externe", 1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button"], ["title", "Nouveau courrier (brouillon)", 1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button"], ["title", "Supprimer les courriers s\xE9lectionn\xE9s", 1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], [1, "material-icons"], [1, "mt-4"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "activate", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Num Courrier", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Exp\xE9diteur", 3, "width"], ["name", "Objet", 3, "width"], ["name", "Date reception", 3, "width"], ["name", "Statut", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "card", "mt-3", "p-3"], ["title", "R\xE9ception courrier externe", 1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], ["title", "Nouveau courrier (brouillon)", 1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [1, "col-12"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center"], [1, "me-2", "fw-semibold", "text-muted"], [2, "min-width", "100px", 3, "click"], [1, "fas", "fa-list", "me-1"], [1, "fas", "fa-file", "me-1"], [2, "min-width", "120px", 3, "class"], [1, "fas", "fa-archive", "me-1"], [1, "fas", "fa-paper-plane", "me-1"], [2, "min-width", "120px", 3, "click"], [1, "fas", "fa-user-check", "me-1"], [1, "name-col-style"], [1, "badge", "bg-success"], [1, "badge", "bg-secondary"], [1, "badge", "bg-warning", "text-dark"], [1, "badge", "bg-dark"], [1, "badge", "bg-warning"], [1, "badge", "bg-info"], [1, "badge", "bg-primary"], [1, "fas", "fa-check", "me-1"], [1, "fas", "fa-hourglass-half", "me-1"], [1, "fas", "fa-edit", "me-1"], [1, "fas", "fa-clock", "me-1"], [1, "fas", "fa-share", "me-1"], [1, "fas", "fa-spinner", "me-1"], [1, "fas", "fa-question", "me-1"], ["title", "Renvoyer pour validation apr\xE8s corrections", 1, "btn", "btn-sm", "btn-primary", "h-auto", "me-1"], ["title", "Transmettre \xE0 une direction", 1, "btn", "btn-sm", "btn-primary", "h-auto", "me-1"], ["title", "Modifier num\xE9ro, objet ou exp\xE9diteur", 1, "btn", "btn-tbl-edit", "h-auto"], ["title", "T\xE9l\xE9charger le courrier", 1, "btn", "btn-tbl-edit", "h-auto"], ["title", "Archiver le courrier", 1, "btn", "btn-tbl-edit", "h-auto"], ["title", "Voir l'historique du courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-history"], ["title", "Renvoyer pour validation apr\xE8s corrections", 1, "btn", "btn-sm", "btn-primary", "h-auto", "me-1", 3, "click"], ["title", "Transmettre \xE0 une direction", 1, "btn", "btn-sm", "btn-primary", "h-auto", "me-1", 3, "click"], ["title", "r\xE9pondre ce courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-reply", "me-1"], ["title", "Transmettre le courrier \xE0 un service", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-edit"], ["title", "Modifier num\xE9ro, objet ou exp\xE9diteur", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], ["title", "T\xE9l\xE9charger le courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-download"], ["title", "Archiver le courrier", 1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-archive"], [1, "mb-2"], [1, "border-bottom", "pb-2", "mb-2"], [1, "small", "mb-1"], [1, "small", "mb-1", "text-muted"], [1, "small", "mb-1", 2, "white-space", "pre-wrap"], [1, "small", "mb-0", "text-muted"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "fas", "fa-reply", "me-2"], [1, "text-muted"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "card", "border", "mb-3"], [1, "card-body", "p-2"], [1, "row"], [1, "col-md-12", "mb-3"], [1, "text-danger"], ["type", "email", "placeholder", "exemple@mail.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Objet de la r\xE9ponse", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "R\xE9diger la r\xE9ponse...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".pdf,.doc,.docx", 1, "form-control", 3, "change"], [1, "col-md-12", "mb-2"], ["type", "file", "multiple", "", 1, "form-control", 3, "change"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-title"], ["type", "button", "aria-label", "Fermer", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "small", "text-muted"], [1, "form-label"], ["name", "metaNumero", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "metaObjet", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "metaExp", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-header", "entiteCibleModal"], [1, "modal-title-container"], [1, "modal-subtitle"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "small", "text-muted", "mb-3"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["name", "entiteCible", 1, "form-select", "form-control", "readonly-select", 3, "ngModel"], [1, "alert", "alert-warning"], [1, "alert", "alert-info"], [1, "form-text", "text-danger"], ["name", "personnel", 1, "form-select", "form-control", "readonly-select", 3, "ngModelChange", "ngModel"], ["value", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], ["name", "entiteCible", 1, "form-select", "form-control", "readonly-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", 3, "ngValue"], [3, "value"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "fas", "fa-info-circle", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-header", "editRowModal"], [1, "register-form", 3, "ngSubmit", "formGroup"], ["for", "expediteur"], ["type", "text", "id", "expediteur", "formControlName", "expediteur", "required", "", 1, "form-control"], ["for", "objet"], ["type", "text", "id", "objet", "formControlName", "objet", "required", "", 1, "form-control"], ["for", "numero"], ["type", "text", "id", "numero", "formControlName", "numero", "required", "", 1, "form-control"], [1, "col-12", "mb-2"], ["for", "destinataireOdc"], ["id", "destinataireOdc", "formControlName", "destinataireOdc", 1, "form-select"], ["value", "EXTERNE"], ["value", "FONDATION"], ["value", "RSE"], ["value", "DCI"], ["for", "fichier"], ["type", "file", "id", "fichier", "accept", ".pdf,.png,.jpg,.jpeg,.docx,.mp4,.csv,.xlsx,.xlsx", 1, "form-control", 3, "change"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "alert", "alert-warning", "mb-0"], ["for", "odcDirectionId"], ["id", "odcDirectionId", "formControlName", "odcDirectionId", 1, "form-select"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["for", "externePrecision"], ["type", "text", "id", "externePrecision", "formControlName", "externePrecision", "placeholder", "Structure, contact, r\xE9f\xE9rence\u2026", 1, "form-control"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], [1, "shadow-sm", "mb-3", 2, "border-left", "1.5px solid orange", "border-radius", "5px", "padding-left", "5px"], [2, "font-size", "12px"], [1, "text-warning", "fa", "fa-square"], [1, "text-warning", 2, "font-size", "12px"], [1, "fa", "fa-user"], [1, "form-select", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSubmit", "formGroup"], ["formControlName", "structureOrigineId", 1, "form-select"], ["formControlName", "numero", 1, "form-control"], ["formControlName", "objet", 1, "form-control"], ["formControlName", "expediteur", 1, "form-control"], ["type", "file", 1, "form-control", 3, "change"], [1, "modal-footer", "px-0"]], template: function CourriersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 8)(1, "ul", 9)(2, "li", 10)(3, "h5", 11);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 12)(6, "a", 13);
        \u0275\u0275element(7, "i", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 10);
        \u0275\u0275text(9, "Gestion Des Courriers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 15);
        \u0275\u0275template(11, CourriersComponent_Conditional_11_Template, 1, 0)(12, CourriersComponent_Conditional_12_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 16)(14, "div", 17)(15, "div", 18)(16, "div", 19)(17, "div", 20)(18, "div", 21)(19, "div", 22)(20, "div", 23)(21, "div", 24)(22, "div", 25)(23, "div")(24, "label", 26)(25, "i", 27);
        \u0275\u0275text(26, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "input", 28);
        \u0275\u0275listener("keyup", function CourriersComponent_Template_input_keyup_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 29);
        \u0275\u0275template(29, CourriersComponent_Conditional_29_Template, 3, 0, "button", 30)(30, CourriersComponent_Conditional_30_Template, 3, 0, "button", 31);
        \u0275\u0275elementStart(31, "button", 32);
        \u0275\u0275listener("click", function CourriersComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(32, "i", 33);
        \u0275\u0275text(33, "delete");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(34, CourriersComponent_Conditional_34_Template, 18, 9, "div", 21);
        \u0275\u0275elementStart(35, "div", 34)(36, "ngx-datatable", 35, 0);
        \u0275\u0275listener("select", function CourriersComponent_Template_ngx_datatable_select_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        })("activate", function CourriersComponent_Template_ngx_datatable_activate_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCourrierActivate($event));
        });
        \u0275\u0275element(38, "ngx-datatable-column", 36);
        \u0275\u0275elementStart(39, "ngx-datatable-column", 37);
        \u0275\u0275template(40, CourriersComponent_ng_template_40_Template, 3, 1, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "ngx-datatable-column", 39);
        \u0275\u0275template(42, CourriersComponent_ng_template_42_Template, 3, 1, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "ngx-datatable-column", 40);
        \u0275\u0275template(44, CourriersComponent_ng_template_44_Template, 3, 1, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "ngx-datatable-column", 41);
        \u0275\u0275template(46, CourriersComponent_ng_template_46_Template, 4, 4, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ngx-datatable-column", 42);
        \u0275\u0275template(48, CourriersComponent_ng_template_48_Template, 10, 1, "ng-template", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "ngx-datatable-column", 43);
        \u0275\u0275template(50, CourriersComponent_ng_template_50_Template, 9, 6, "ng-template", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(51, CourriersComponent_Conditional_51_Template, 5, 0, "div", 44);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(52, CourriersComponent_ng_template_52_Template, 61, 13, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(54, CourriersComponent_ng_template_54_Template, 27, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(56, CourriersComponent_ng_template_56_Template, 37, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(58, CourriersComponent_ng_template_58_Template, 66, 9, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(60, CourriersComponent_ng_template_60_Template, 14, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(62, CourriersComponent_ng_template_62_Template, 18, 3, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(64, CourriersComponent_ng_template_64_Template, 42, 4, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.isDcireRole ? 11 : 12);
        \u0275\u0275advance(18);
        \u0275\u0275conditional(ctx.isDcireRole ? 29 : 30);
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isDcireRole || ctx.idEntite || ctx.isSuperAdminRole ? 34 : -1);
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
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.courrierReponsesDetail.length > 0 && ctx.lastDetailCourrierId ? 51 : -1);
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

  <p class="odl-page-subtitle">
    @if (isDcireRole) {
      Liste des courriers enregistr\xE9s sur votre p\xE9rim\xE8tre (r\xE9ception et transmission).
    } @else {
      Cr\xE9ation, validation et suivi des courriers de votre p\xE9rim\xE8tre.
    }
  </p>

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
                      @if (isDcireRole) {
                        <button class="btn btn-icon icon-left bg-warning text-white rounded-button"
                                (click)="openDcireExterneModal()" title="R\xE9ception courrier externe">
                          <i class="material-icons">add</i>
                        </button>
                      } @else {
                        <button class="btn btn-icon icon-left bg-warning text-white rounded-button"
                                (click)='addRow(addRecord)' title="Nouveau courrier (brouillon)">
                          <i class="material-icons">add</i>
                        </button>
                      }
                      <button [hidden]=!isRowSelected class="btn btn-icon icon-left btn-danger rounded-button"
                              (click)='deleteSelected()' title="Supprimer les courriers s\xE9lectionn\xE9s">
                        <i class="material-icons">delete</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Boutons de filtre (Actifs/Archives/Envoy\xE9s) -->
            @if(isDcireRole || idEntite || isSuperAdminRole) {
              <div class="row mb-4">
                <div class="col-12">
                  <div class="d-flex flex-wrap gap-2 align-items-center">
                    <span class="me-2 fw-semibold text-muted">Affichage :</span>

                    <button [class]="typeliste ==='tous' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'"
                            (click)="handleList('tous')" style="min-width: 100px;">
                      <i class="fas fa-list me-1"></i>
                      TOUT
                    </button>

                    <button [class]="typeliste ==='actifs' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'"
                            (click)="handleList('actifs')" style="min-width: 100px;">
                      <i class="fas fa-file me-1"></i>
                      ACTIFS
                    </button>

                    @if (!isDcireRole && isSuperAdminRole) {
                      <button [class]="typeliste ==='validation' ? 'btn btn-warning' : 'btn btn shadow-sm btn-dark'"
                              (click)="handleList('validation')" style="min-width: 120px;">
                        <i class="fas fa-user-check me-1"></i>
                        \xC0 VALIDER
                      </button>
                    }

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
                             [selectionType]="selection" (select)='onSelect($event)' (activate)="onCourrierActivate($event)">
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
                      } @else if(row.statut === 'ATTENTE_VALIDATION_ODC' || row.statut === 'ATTENTE_VALIDATION_DIRECTEUR_ODC') {
                        <span class="badge bg-secondary">
                          <i class="fas fa-hourglass-half me-1"></i>Attente validation
                        </span>
                      } @else if(row.statut === 'EN_REVISION_ADMIN_COURRIER') {
                        <span class="badge bg-warning text-dark">
                          <i class="fas fa-edit me-1"></i>R\xE9vision admin
                        </span>
                      } @else if(row.statut === 'TRANSMIS_DCIRE') {
                        <span class="badge bg-dark">
                          <i class="fas fa-paper-plane me-1"></i>Transmis
                        </span>
                      } @else if(row.statut === 'ENVOYER') {
                        <span class="badge bg-warning">
                          <i class="fas fa-clock me-1"></i>En attente
                        </span>
                      } @else if(row.statut === 'IMPUTER') {
                        <span class="badge bg-info">
                          <i class="fas fa-share me-1"></i>Transmis au service
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
                      @if(isSuperAdminRole && row.statut === 'EN_REVISION_ADMIN_COURRIER') {
                        <button class="btn btn-sm btn-primary h-auto me-1" (click)="resoumettreRevision(row)"
                                title="Renvoyer pour validation apr\xE8s corrections">
                          <i class="fas fa-paper-plane me-1"></i>Renvoyer pour validation
                        </button>
                      }
                      @if(isDcireRole && isCourrierPhysiquementADcire(row) && row.statut !== 'ARCHIVER' && row.statut !== 'REPONDU' && row.statut !== 'ATTENTE_VALIDATION_ODC' && row.statut !== 'ATTENTE_VALIDATION_DIRECTEUR_ODC' && row.statut !== 'EN_REVISION_ADMIN_COURRIER') {
                        <button class="btn btn-sm btn-primary h-auto me-1" (click)="openTransmitToOdc(row)"
                                title="Transmettre \xE0 une direction">
                          <i class="fas fa-share me-1"></i>Transmettre
                        </button>
                      }
                      @if(row.statut !== 'ARCHIVER' && row.statut !== 'REPONDU' && row.statut !== 'ATTENTE_VALIDATION_ODC' && row.statut !== 'ATTENTE_VALIDATION_DIRECTEUR_ODC' && row.statut !== 'EN_REVISION_ADMIN_COURRIER') {
                        <button class="btn btn-tbl-edit h-auto" (click)='ImputeModal(row, rowIndex, "repondre")' title="r\xE9pondre ce courrier">
                          <i class="fas fa-reply me-1"></i>
                        </button>
                        <button class="btn btn-tbl-edit h-auto" (click)='ImputeModal(row, rowIndex, entiteCibleModal)' title="Transmettre le courrier \xE0 un service">
                          <i class="fas fa-edit"></i>
                        </button>
                      }
                      @if(peutModifierMetadonneesCourrier(row)) {
                        <button class="btn btn-tbl-edit h-auto" (click)="openEditCourrierMetaModal(row)" title="Modifier num\xE9ro, objet ou exp\xE9diteur">
                          <i class="fas fa-pen"></i>
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
            @if (courrierReponsesDetail.length > 0 && lastDetailCourrierId) {
              <div class="card mt-3 p-3">
                <h6 class="mb-2">R\xE9ponses enregistr\xE9es (cliquez sur une ligne du tableau pour afficher l\u2019historique)</h6>
                @for (rep of courrierReponsesDetail; track rep.id) {
                  <div class="border-bottom pb-2 mb-2">
                    <p class="small mb-1"><strong>Objet :</strong> {{ rep.objet }}</p>
                    <p class="small mb-1 text-muted">De : {{ rep.email }} \u2014 {{ rep.dateReponse | date: 'short' }}</p>
                    <p class="small mb-1" style="white-space: pre-wrap">{{ rep.message }}</p>
                    @if (rep.fichierJoint) {
                      <p class="small mb-0 text-muted">Pi\xE8ce : {{ rep.fichierJoint }}</p>
                    }
                  </div>
                }
              </div>
            }
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


  <ng-template #editCourrierMetaTpl let-modal>
    <div class="modal-header">
      <h5 class="modal-title">Modifier le courrier</h5>
      <button type="button" class="close" aria-label="Fermer" (click)="modal.dismiss()">
        <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
    </div>
    <div class="modal-body">
      <p class="small text-muted">Mise \xE0 jour des m\xE9tadonn\xE9es uniquement (le fichier joint n\u2019est pas modifiable ici).</p>
      <div class="mb-2">
        <label class="form-label">Num\xE9ro</label>
        <input class="form-control" [(ngModel)]="editCourrierMeta.numero" name="metaNumero" />
      </div>
      <div class="mb-2">
        <label class="form-label">Objet</label>
        <input class="form-control" [(ngModel)]="editCourrierMeta.objet" name="metaObjet" />
      </div>
      <div class="mb-2">
        <label class="form-label">Exp\xE9diteur</label>
        <input class="form-control" [(ngModel)]="editCourrierMeta.expediteur" name="metaExp" />
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="saveCourrierMeta(modal)">Enregistrer</button>
      <button type="button" class="btn btn-secondary" (click)="modal.dismiss()">Annuler</button>
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
      <p class="small text-muted mb-3">
        Choisissez le service charg\xE9 du traitement et, si besoin, un collaborateur.
      </p>
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
          <label>Collaborateur charg\xE9 du traitement (facultatif)</label>
          <select class="form-select form-control readonly-select" name="personnel" [(ngModel)]="personnel">
            <option value="" [ngValue]="null">-- Aucun \u2014 imputation au service seul --</option>
            <option *ngFor="let perso of Utilisateurs" [value]="perso.id">{{perso.prenom}} {{perso.nom}}</option>
          </select>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" [disabled]="!entiteCible" (click)="imputCourrier()">
          <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
          {{ loadingIndicator ? 'Chargement...' : 'Transmettre au service' }}
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
        <small class="modal-subtitle">Brouillon soumis pour validation avant envoi.</small>
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

          @if (odcDirections.length === 0) {
            <div class="col-12 mb-2">
              <div class="alert alert-warning mb-0">
                Aucune direction d\u2019\xE9mission reconnue. V\xE9rifiez la configuration des entit\xE9s ou contactez l\u2019administrateur.
              </div>
            </div>
          } @else {
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
              <label for="odcDirectionId">Direction d\u2019\xE9mission <span class="text-danger">*</span></label>
              <select id="odcDirectionId" class="form-select" formControlName="odcDirectionId">
                <option [ngValue]="null" disabled>Choisir une direction</option>
                <option *ngFor="let d of odcDirections" [ngValue]="d.id">{{ d.nom }}</option>
              </select>
              @if (register.get('odcDirectionId')?.touched && register.get('odcDirectionId')?.invalid) {
                <small class="form-text text-danger">La direction d\u2019\xE9mission est obligatoire</small>
              }
            </div>
          }

          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
            <label for="destinataireOdc">Destinataire (apr\xE8s validation)</label>
            <select id="destinataireOdc" class="form-select" formControlName="destinataireOdc">
              <option value="EXTERNE">Externe</option>
              <option value="FONDATION">Interne \u2014 correspondance A</option>
              <option value="RSE">Interne \u2014 correspondance B</option>
              <option value="DCI">Interne \u2014 correspondance C</option>
            </select>
            <small class="text-muted">Pour les cibles internes, l\u2019entit\xE9 correspondante doit exister en base.</small>
          </div>

          @if ((register.get('destinataireOdc')?.value || 'EXTERNE') === 'EXTERNE') {
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
              <label for="externePrecision">Pr\xE9cision destinataire externe (facultatif)</label>
              <input type="text" id="externePrecision" class="form-control" formControlName="externePrecision"
                     placeholder="Structure, contact, r\xE9f\xE9rence\u2026" />
            </div>
          }

          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
            <label for="fichier">Fichier joint <span class="text-danger"></span>:</label>
            <input type="file" id="fichier" (change)="onFileSelectedCreation($event)" 
                   accept=".pdf,.png,.jpg,.jpeg,.docx,.mp4,.csv,.xlsx,.xlsx" class="form-control" />
          </div>
        </div>

        <div class="modal-footer">
          <button type="submit" class="btn btn-warning" [disabled]="!register.valid || loadingIndicator || odcDirections.length === 0">
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

  <!-- Transmettre vers ODC -->
  <ng-template #transmitOdcModal let-modal>
    <div class="modal-header">
      <h5 class="modal-title">Transmettre \xE0 une direction</h5>
      <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <p class="small text-muted">Choisissez la direction qui prendra le relais.</p>
      <label class="form-label">Direction</label>
      <select class="form-select" [(ngModel)]="transmitOdcDirectionId">
        <option [ngValue]="null" disabled>-- Direction --</option>
        <option *ngFor="let d of odcDirections" [ngValue]="d.id">{{ d.nom }}</option>
      </select>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" (click)="confirmTransmitToOdc(modal)">Transmettre</button>
      <button class="btn btn-secondary" (click)="modal.dismiss()">Annuler</button>
    </div>
  </ng-template>

  <!-- R\xE9ception courrier hors p\xE9rim\xE8tre ODC -->
  <ng-template #addDcireExterne let-modal>
    <div class="modal-header">
      <h5 class="modal-title">R\xE9ception d\u2019un courrier externe</h5>
      <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <form [formGroup]="registerExterne" (ngSubmit)="saveDcireExterne(registerExterne, modal)">
        <div class="mb-2">
          <label>Structure d\u2019origine <span class="text-danger">*</span></label>
          <select class="form-select" formControlName="structureOrigineId">
            <option [ngValue]="null" disabled>\u2014 Choisir une structure \u2014</option>
            <option *ngFor="let d of externalDirections" [ngValue]="d.id">{{ d.nom }}</option>
          </select>
        </div>
        <div class="mb-2">
          <label>Num\xE9ro <span class="text-danger">*</span></label>
          <input class="form-control" formControlName="numero" />
        </div>
        <div class="mb-2">
          <label>Objet <span class="text-danger">*</span></label>
          <input class="form-control" formControlName="objet" />
        </div>
        <div class="mb-2">
          <label>Exp\xE9diteur (contact) <span class="text-danger">*</span></label>
          <input class="form-control" formControlName="expediteur" />
        </div>
        <div class="mb-2">
          <label>Fichier</label>
          <input type="file" class="form-control" (change)="onFileSelectedExterne($event)" />
        </div>
        <div class="modal-footer px-0">
          <button type="submit" class="btn btn-warning" [disabled]="!registerExterne.valid">Enregistrer</button>
          <button type="button" class="btn btn-dark text-white" (click)="modal.dismiss()">Fermer</button>
        </div>
      </form>
    </div>
  </ng-template>
</section>`, styles: ["/* src/app/personnels/courriers/courriers.component.scss */\n::ng-deep .modal-header.editRowModal {\n  border-bottom: none;\n  justify-content: space-between;\n  background-color: orange;\n  padding: 1rem;\n}\n::ng-deep .modal-header.entiteCibleModal {\n  border-bottom: none;\n  justify-content: space-between;\n  background-color: orange;\n}\n::ng-deep .modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n}\n::ng-deep .modal-subtitle {\n  font-size: 0.875rem;\n  font-weight: 400;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=courriers.component.css.map */\n"] }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: AuthService }, { type: SupportactivityService }, { type: Router }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], repondreCourrierModal: [{
    type: ViewChild,
    args: ["repondreCourrierModal"]
  }], transmitOdcModal: [{
    type: ViewChild,
    args: ["transmitOdcModal"]
  }], addDcireExterne: [{
    type: ViewChild,
    args: ["addDcireExterne"]
  }], editCourrierMetaTpl: [{
    type: ViewChild,
    args: ["editCourrierMetaTpl"]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourriersComponent, { className: "CourriersComponent", filePath: "src/app/personnels/courriers/courriers.component.ts", lineNumber: 37 });
})();
export {
  CourriersComponent
};
//# sourceMappingURL=courriers.component-VHMIAA4Q.js.map
