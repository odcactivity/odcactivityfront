import {
  EncryptionService
} from "./chunk-QVW3EB6V.js";
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
  NgIf,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  SelectMultipleControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  environment,
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
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EQOE5FII.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/admin/entite/entite.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function EntiteComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Divisions");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function EntiteComponent_Conditional_23_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.backToDirections());
    });
    \u0275\u0275element(3, "i", 20);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Retour aux divisions");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Services de : ", ctx_r3.selectedDirection == null ? null : ctx_r3.selectedDirection.nom, "");
  }
}
function EntiteComponent_Conditional_24_div_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 37);
    \u0275\u0275listener("error", function EntiteComponent_Conditional_24_div_1_Conditional_3_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const direction_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("alt", direction_r6.nom);
    \u0275\u0275property("src", ctx_r3.getLogoUrl(direction_r6.logo), \u0275\u0275sanitizeUrl);
  }
}
function EntiteComponent_Conditional_24_div_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "p", 40);
    \u0275\u0275text(4, "Pas de logo");
    \u0275\u0275elementEnd()()();
  }
}
function EntiteComponent_Conditional_24_div_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 41);
    \u0275\u0275text(2, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function EntiteComponent_Conditional_24_div_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const direction_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(direction_r6.id ? ctx_r3.activiteCount[direction_r6.id] || 0 : "N/A");
  }
}
function EntiteComponent_Conditional_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function EntiteComponent_Conditional_24_div_1_Template_div_click_0_listener() {
      const direction_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showDirectionServices(direction_r6));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    \u0275\u0275template(3, EntiteComponent_Conditional_24_div_1_Conditional_3_Template, 1, 2, "img", 25)(4, EntiteComponent_Conditional_24_div_1_Conditional_4_Template, 5, 0, "div", 26);
    \u0275\u0275element(5, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "h3", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30)(10, "div", 31);
    \u0275\u0275element(11, "i", 32);
    \u0275\u0275elementStart(12, "span", 33);
    \u0275\u0275text(13, "Activit\xE9s :");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EntiteComponent_Conditional_24_div_1_Conditional_14_Template, 3, 0, "div", 34)(15, EntiteComponent_Conditional_24_div_1_Conditional_15_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275element(17, "i", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const direction_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.getLogoUrl(direction_r6.logo) ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(direction_r6.nom);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(direction_r6.id && ctx_r3.activiteCount[direction_r6.id] === void 0 ? 14 : 15);
  }
}
function EntiteComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, EntiteComponent_Conditional_24_div_1_Template, 18, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.directions);
  }
}
function EntiteComponent_Conditional_25_div_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 37);
    \u0275\u0275listener("error", function EntiteComponent_Conditional_25_div_1_Conditional_3_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("alt", service_r9.nom);
    \u0275\u0275property("src", ctx_r3.getLogoUrl(service_r9.logo), \u0275\u0275sanitizeUrl);
  }
}
function EntiteComponent_Conditional_25_div_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 38);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementStart(3, "p", 40);
    \u0275\u0275text(4, "Pas de logo");
    \u0275\u0275elementEnd()()();
  }
}
function EntiteComponent_Conditional_25_div_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 41);
    \u0275\u0275text(2, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function EntiteComponent_Conditional_25_div_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r9.id ? ctx_r3.activiteCount[service_r9.id] || 0 : "N/A");
  }
}
function EntiteComponent_Conditional_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function EntiteComponent_Conditional_25_div_1_Template_div_click_0_listener() {
      const service_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewEntiteDetails(service_r9));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    \u0275\u0275template(3, EntiteComponent_Conditional_25_div_1_Conditional_3_Template, 1, 2, "img", 25)(4, EntiteComponent_Conditional_25_div_1_Conditional_4_Template, 5, 0, "div", 26);
    \u0275\u0275element(5, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "h3", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30)(10, "div", 31);
    \u0275\u0275element(11, "i", 32);
    \u0275\u0275elementStart(12, "span", 33);
    \u0275\u0275text(13, "Activit\xE9s :");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EntiteComponent_Conditional_25_div_1_Conditional_14_Template, 3, 0, "div", 34)(15, EntiteComponent_Conditional_25_div_1_Conditional_15_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 42)(17, "button", 43);
    \u0275\u0275listener("click", function EntiteComponent_Conditional_25_div_1_Template_button_click_17_listener($event) {
      const service_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      const editRecord_r11 = \u0275\u0275reference(29);
      ctx_r3.editRow(service_r9, editRecord_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(18, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 45);
    \u0275\u0275listener("click", function EntiteComponent_Conditional_25_div_1_Template_button_click_19_listener($event) {
      const service_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.deleteSingleRow(service_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(20, "i", 46);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const service_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.getLogoUrl(service_r9.logo) ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(service_r9.nom);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(service_r9.id && ctx_r3.activiteCount[service_r9.id] === void 0 ? 14 : 15);
  }
}
function EntiteComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, EntiteComponent_Conditional_25_div_1_Template, 21, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.services);
  }
}
function EntiteComponent_ng_template_26_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Le nom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_26_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Le type d'entit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_26_div_33_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const direction_r14 = ctx.$implicit;
    \u0275\u0275property("ngValue", direction_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(direction_r14.nom);
  }
}
function EntiteComponent_ng_template_26_div_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "La division responsable est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_26_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "label");
    \u0275\u0275text(2, "Direction responsable ");
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 85)(6, "option", 62);
    \u0275\u0275text(7, "-- S\xE9lectionnez une direction --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EntiteComponent_ng_template_26_div_33_option_8_Template, 2, 2, "option", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EntiteComponent_ng_template_26_div_33_Conditional_9_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.directions);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r3.register.get("parentId")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r3.register.get("parentId")) == null ? null : tmp_7_0.touched) ? 9 : -1);
  }
}
function EntiteComponent_ng_template_26_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "La description est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_26_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 31);
    \u0275\u0275element(2, "img", 87);
    \u0275\u0275elementStart(3, "div")(4, "p", 88);
    \u0275\u0275text(5, "Aper\xE7u du logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function EntiteComponent_ng_template_26_Conditional_48_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.resetLogoPreview());
    });
    \u0275\u0275element(7, "i", 90);
    \u0275\u0275text(8, " Supprimer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.logoPreview, \u0275\u0275sanitizeUrl);
  }
}
function EntiteComponent_ng_template_26_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Le logo est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_26_option_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const responsable_r16 = ctx.$implicit;
    \u0275\u0275property("ngValue", responsable_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", responsable_r16.nom, " ", responsable_r16.prenom, "");
  }
}
function EntiteComponent_ng_template_26_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Le responsable est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_26_option_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const typeActivite_r17 = ctx.$implicit;
    \u0275\u0275property("ngValue", typeActivite_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(typeActivite_r17.type);
  }
}
function EntiteComponent_ng_template_26_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Le type d'activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_26_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function EntiteComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "h5", 50);
    \u0275\u0275text(3, "Formulaire d'ajout d'une entit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 51);
    \u0275\u0275text(5, "Cr\xE9er une nouvelle division ou service");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 52);
    \u0275\u0275listener("click", function EntiteComponent_ng_template_26_Template_button_click_6_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 53)(8, "i", 15);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 54)(11, "form", 55);
    \u0275\u0275listener("ngSubmit", function EntiteComponent_ng_template_26_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCreateSave(ctx_r3.register));
    });
    \u0275\u0275elementStart(12, "div", 56)(13, "div", 57)(14, "label");
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 58);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 59);
    \u0275\u0275template(19, EntiteComponent_ng_template_26_Conditional_19_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 57)(21, "label");
    \u0275\u0275text(22, "Type d'Entit\xE9 ");
    \u0275\u0275elementStart(23, "span", 58);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 61);
    \u0275\u0275listener("change", function EntiteComponent_ng_template_26_Template_select_change_25_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTypeEntiteChange($event));
    });
    \u0275\u0275elementStart(26, "option", 62);
    \u0275\u0275text(27, "-- S\xE9lectionnez un type d'entit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 63);
    \u0275\u0275text(29, "DIVISION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 64);
    \u0275\u0275text(31, "SERVICE");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, EntiteComponent_ng_template_26_Conditional_32_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, EntiteComponent_ng_template_26_div_33_Template, 10, 3, "div", 65);
    \u0275\u0275elementStart(34, "div", 57)(35, "label");
    \u0275\u0275text(36, "Description ");
    \u0275\u0275elementStart(37, "span", 58);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "textarea", 66);
    \u0275\u0275template(40, EntiteComponent_ng_template_26_Conditional_40_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 56)(42, "div", 56)(43, "div", 67);
    \u0275\u0275text(44, "Logo ");
    \u0275\u0275elementStart(45, "span", 58);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 68);
    \u0275\u0275template(48, EntiteComponent_ng_template_26_Conditional_48_Template, 9, 1, "div", 69);
    \u0275\u0275elementStart(49, "div", 70)(50, "label", 71);
    \u0275\u0275text(51, "S\xE9lectionner un logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 72);
    \u0275\u0275listener("change", function EntiteComponent_ng_template_26_Template_input_change_52_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, EntiteComponent_ng_template_26_Conditional_53_Template, 2, 0, "small", 60);
    \u0275\u0275elementStart(54, "div", 73);
    \u0275\u0275element(55, "i", 74);
    \u0275\u0275text(56, " Formats accept\xE9s: JPG, PNG, GIF. Taille maximale: 5MB. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(57, "div", 56)(58, "div", 57)(59, "label");
    \u0275\u0275text(60, "Responsable ");
    \u0275\u0275elementStart(61, "span", 58);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "select", 75)(64, "option", 62);
    \u0275\u0275text(65, "-- S\xE9lectionnez un utilisateur --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, EntiteComponent_ng_template_26_option_66_Template, 2, 3, "option", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, EntiteComponent_ng_template_26_Conditional_67_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 57)(69, "label");
    \u0275\u0275text(70, "Type Activit\xE9 ");
    \u0275\u0275elementStart(71, "span", 58);
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "select", 77)(74, "option", 62);
    \u0275\u0275text(75, "-- S\xE9lectionnez un ou plusieurs types d'activit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(76, EntiteComponent_ng_template_26_option_76_Template, 2, 2, "option", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, EntiteComponent_ng_template_26_Conditional_77_Template, 2, 0, "small", 60);
    \u0275\u0275elementStart(78, "div", 78);
    \u0275\u0275text(79, "Maintenez Ctrl (ou Cmd sur Mac) pour s\xE9lectionner plusieurs options.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 79)(81, "button", 80);
    \u0275\u0275template(82, EntiteComponent_ng_template_26_span_82_Template, 1, 0, "span", 81);
    \u0275\u0275element(83, "i", 82);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 83);
    \u0275\u0275listener("click", function EntiteComponent_ng_template_26_Template_button_click_85_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.close("Close click"));
    });
    \u0275\u0275element(86, "i", 84);
    \u0275\u0275text(87, "Fermer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_17_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r3.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_5_0 = ctx_r3.register.get("nom")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx_r3.register.get("nom")) == null ? null : tmp_5_0.touched) ? 19 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r3.register.get("type")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r3.register.get("type")) == null ? null : tmp_7_0.touched) ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showParentDirection);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r3.register.get("description")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r3.register.get("description")) == null ? null : tmp_9_0.touched) ? 40 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r3.logoPreview ? 48 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!((tmp_11_0 = ctx_r3.register.get("logo")) == null ? null : tmp_11_0.valid) && ((tmp_11_0 = ctx_r3.register.get("logo")) == null ? null : tmp_11_0.touched) ? 53 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.users);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_14_0 = ctx_r3.register.get("responsable")) == null ? null : tmp_14_0.valid) && ((tmp_14_0 = ctx_r3.register.get("responsable")) == null ? null : tmp_14_0.touched) ? 67 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.allTypeActivite);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_17_0 = ctx_r3.register.get("typeActivite")) == null ? null : tmp_17_0.valid) && ((tmp_17_0 = ctx_r3.register.get("typeActivite")) == null ? null : tmp_17_0.touched) ? 77 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.register.valid || ctx_r3.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loadingIndicator);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.loadingIndicator ? "Chargement..." : "Enregistrer", " ");
  }
}
function EntiteComponent_ng_template_28_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Le nom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_28_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Le type d'entit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_28_div_33_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const direction_r20 = ctx.$implicit;
    \u0275\u0275property("ngValue", direction_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(direction_r20.nom);
  }
}
function EntiteComponent_ng_template_28_div_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "La direction responsable est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_28_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "label");
    \u0275\u0275text(2, "Division responsable ");
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 85)(6, "option", 62);
    \u0275\u0275text(7, "-- S\xE9lectionnez une direction --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EntiteComponent_ng_template_28_div_33_option_8_Template, 2, 2, "option", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EntiteComponent_ng_template_28_div_33_Conditional_9_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.directions);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r3.register.get("parentId")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r3.register.get("parentId")) == null ? null : tmp_7_0.touched) ? 9 : -1);
  }
}
function EntiteComponent_ng_template_28_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "La description est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function EntiteComponent_ng_template_28_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function EntiteComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "h5", 50);
    \u0275\u0275text(3, "Modifier une entit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 51);
    \u0275\u0275text(5, "Formulaire de modification d'une entit\xE9 existante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 52);
    \u0275\u0275listener("click", function EntiteComponent_ng_template_28_Template_button_click_6_listener() {
      const modal_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(modal_r19.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 53)(8, "i", 15);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 54)(11, "form", 55);
    \u0275\u0275listener("ngSubmit", function EntiteComponent_ng_template_28_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onUpdateSave(ctx_r3.register));
    });
    \u0275\u0275elementStart(12, "div", 56)(13, "div", 57)(14, "label");
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 58);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 59);
    \u0275\u0275template(19, EntiteComponent_ng_template_28_Conditional_19_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 57)(21, "label");
    \u0275\u0275text(22, "Type d'Entit\xE9 ");
    \u0275\u0275elementStart(23, "span", 58);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 61);
    \u0275\u0275listener("change", function EntiteComponent_ng_template_28_Template_select_change_25_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTypeEntiteChange($event));
    });
    \u0275\u0275elementStart(26, "option", 62);
    \u0275\u0275text(27, "-- S\xE9lectionnez un type d'entit\xE9 --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 63);
    \u0275\u0275text(29, "DIRECTION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 64);
    \u0275\u0275text(31, "SERVICE");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, EntiteComponent_ng_template_28_Conditional_32_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, EntiteComponent_ng_template_28_div_33_Template, 10, 3, "div", 65);
    \u0275\u0275elementStart(34, "div", 57)(35, "label");
    \u0275\u0275text(36, "Description ");
    \u0275\u0275elementStart(37, "span", 58);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "textarea", 66);
    \u0275\u0275template(40, EntiteComponent_ng_template_28_Conditional_40_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 79)(42, "button", 80);
    \u0275\u0275template(43, EntiteComponent_ng_template_28_span_43_Template, 1, 0, "span", 81);
    \u0275\u0275element(44, "i", 82);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 83);
    \u0275\u0275listener("click", function EntiteComponent_ng_template_28_Template_button_click_46_listener() {
      const modal_r19 = \u0275\u0275restoreView(_r18).$implicit;
      return \u0275\u0275resetView(modal_r19.close("Close click"));
    });
    \u0275\u0275element(47, "i", 84);
    \u0275\u0275text(48, "Fermer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r3.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_5_0 = ctx_r3.register.get("nom")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx_r3.register.get("nom")) == null ? null : tmp_5_0.touched) ? 19 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r3.register.get("type")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r3.register.get("type")) == null ? null : tmp_7_0.touched) ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showParentDirection);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r3.register.get("description")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r3.register.get("description")) == null ? null : tmp_9_0.touched) ? 40 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.register.valid || ctx_r3.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loadingIndicator);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.loadingIndicator ? "Chargement..." : "Mettre \xE0 jour", " ");
  }
}
var EntiteComponent = class _EntiteComponent {
  constructor(fb, modalService, toastr, glogalService, router, encryptionService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.router = router;
    this.encryptionService = encryptionService;
    this.rows = [];
    this.entite = [];
    this.users = [];
    this.directions = [];
    this.services = [];
    this.selectedFile = null;
    this.selectedUtilisateur = null;
    this.logoPreview = null;
    this.backendUrl = "http://localhost:8089";
    this.allTypeActivite = [];
    this.selectedTypeActivites = [];
    this.utilisateursPersonnels = [];
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.activiteCount = {};
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.showParentDirection = false;
    this.selected = [];
    this.columns = [
      { prop: "nom" }
    ];
    this.viewMode = "directions";
    this.selectedDirection = null;
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      description: new UntypedFormControl(),
      logo: new UntypedFormControl(),
      responsable: new UntypedFormControl(),
      allTypeActivite: new UntypedFormControl()
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.logoPreview = e.target.result;
      };
      if (this.selectedFile) {
        reader.readAsDataURL(this.selectedFile);
      }
    }
  }
  // Réinitialiser l'aperçu du logo
  resetLogoPreview() {
    this.logoPreview = null;
    this.selectedFile = null;
  }
  // Construire l'URL complète du logo
  getLogoUrl(logoPath) {
    if (!logoPath || logoPath.trim() === "" || logoPath === "https://drive.google.com/thumbnail?id=") {
      return "assets/images/default-entite.png";
    }
    if (logoPath.startsWith("https://drive.google.com/thumbnail?id=")) {
      return logoPath;
    }
    if (!logoPath.startsWith("http")) {
      const cleanPath = logoPath.replace(/\\/g, "/").replace(/\/+/g, "/");
      const normalizedPath = cleanPath.startsWith("/") ? cleanPath.substring(1) : cleanPath;
      return environment.apiUrl + `/${normalizedPath}`;
    }
    return logoPath;
  }
  // Gérer les erreurs de chargement d'images
  onImageError(event) {
    console.log("Erreur de chargement de l'image:", event.target.src);
  }
  /* viewEntiteDetails(entite: Entite): void {
     const encryptedId = this.encryptionService.encrypt(entite.id ? entite.id.toString() : '');
     this.router.navigate([`admin/entiteDetail/${encryptedId}`]);
   }*/
  viewEntiteDetails(entite) {
    this.router.navigate(["/entiteDetail"], {
      state: { entiteId: entite.id }
    });
    console.log("Entite", entite.id);
  }
  ngOnInit() {
    this.getAllEntite();
    this.getAllUtilisateur();
    this.getAllTypeActivite();
    this.getDirections();
    this.register = this.fb.group({
      id: [""],
      nom: ["", [Validators.required]],
      description: ["", [Validators.required]],
      logo: ["", [Validators.required]],
      // Logo maintenant obligatoire
      type: [null, [Validators.required]],
      // Nouveau champ pour le type d'entité
      parentId: [null],
      // ID de la direction parente pour les services
      responsable: [null],
      // Permet de ne pas forcer la sélection d'un responsable
      typeActivite: [null],
      // typeActivite: [null, [Validators.required]], // Ajoutez ce FormControl pour correspondre à formControlName
      selectedTypeActivites: [null]
      // Vous utilisez déjà selectedTypeActivites pour stocker les IDs
    });
  }
  // Gestion du changement de type d'entité
  onTypeEntiteChange(event) {
    const selectedType = event.target.value;
    this.showParentDirection = selectedType === "SERVICE";
    const parentControl = this.register.get("parentId");
    if (this.showParentDirection) {
      parentControl?.setValidators([Validators.required]);
    } else {
      parentControl?.clearValidators();
      parentControl?.setValue(null);
    }
    parentControl?.updateValueAndValidity();
  }
  // Récupérer uniquement les directions
  getDirections() {
    console.log("Chargement des directions...");
    this.glogalService.get("entite/directions").subscribe({
      next: (data) => {
        console.log("Directions re\xE7ues:", data);
        this.directions = data;
        this.directions.forEach((direction) => {
          if (direction.id) {
            this.activiteCount[direction.id] = 0;
          }
        });
        this.loadActivitiesForEntities(this.directions);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des directions", err);
      }
    });
  }
  // Afficher les services d'une direction sélectionnée
  showDirectionServices(direction) {
    console.log("Direction s\xE9lectionn\xE9e:", direction);
    this.selectedDirection = direction;
    this.viewMode = "services";
    console.log(`Chargement des services pour la direction ${direction.id}...`);
    this.glogalService.get(`entite/parent/${direction.id}`).subscribe({
      next: (data) => {
        console.log("Services re\xE7us:", data);
        this.services = data;
        this.services.forEach((service) => {
          if (service.id) {
            this.activiteCount[service.id] = 0;
          }
        });
        this.loadActivitiesForEntities(this.services);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des services", err);
      }
    });
  }
  // Revenir à la liste des directions
  backToDirections() {
    this.viewMode = "directions";
    this.selectedDirection = null;
    this.services = [];
  }
  // Charger les activités pour des entités spécifiques (optimisé)
  loadActivitiesForEntities(entities) {
    this.glogalService.get("activite").subscribe({
      next: (activites) => {
        activites.forEach((activite) => {
          if (activite.entite && activite.entite.id && this.activiteCount.hasOwnProperty(activite.entite.id)) {
            this.activiteCount[activite.entite.id]++;
          }
        });
      },
      error: (err) => {
        console.error("Erreur lors du chargement des activit\xE9s", err);
      }
    });
  }
  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get("entite").subscribe({
      next: (value) => {
        this.entite = value;
        this.filteredData = [...value];
        this.loadActiviteCountFromAllActivites();
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getAllUtilisateur() {
    this.glogalService.get("utilisateur").subscribe({
      next: (value) => {
        this.users = value;
      }
    });
  }
  getAllTypeActivite() {
    this.glogalService.get("typeActivite").subscribe({
      next: (data) => {
        this.allTypeActivite = data;
      },
      error: (err) => {
        console.error("Erreur lors de la r\xE9cup\xE9ration des types d'activit\xE9s", err);
      }
    });
  }
  onAddRowSave(form) {
    this.loadingIndicator = true;
    const formData = new FormData();
    formData.append("entiteOdc", new Blob([JSON.stringify(form.value)], { type: "application/json" }));
    if (this.selectedFile) {
      formData.append("logo", this.selectedFile);
    }
    const selectedActivityIds = this.register.get("typeActivite")?.value || [];
    selectedActivityIds.forEach((typeId) => {
      formData.append("typeActiviteIds", typeId.toString());
    });
    const selectedUserId = this.register.get("responsable")?.value;
    if (!selectedUserId) {
      this.loadingIndicator = false;
      import_sweetalert2.default.fire({
        icon: "info",
        title: '<span class="text-orange-500">Info</span>',
        text: "Aucun utilisateur s\xE9lectionn\xE9 ou ID non disponible.",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "bg-red-500 text-white hover:bg-red-600"
        }
      });
      return;
    }
    formData.append("utilisateurId", selectedUserId.toString());
    this.glogalService.post("entite", formData).subscribe({
      next: (response) => {
        console.log(response);
        this.entite.push(response);
        this.entite = [...this.entite];
        form.reset();
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
  onCreateSave(form) {
    if (!form.valid)
      return;
    this.loadingIndicator = true;
    const formData = new FormData();
    const newEntite = {
      nom: form.value.nom,
      description: form.value.description,
      type: form.value.type,
      // Ajout du type d'entité
      parentId: form.value.parentId || null,
      responsable: form.value.responsable || null,
      // Envoyer l'objet responsable complet
      typeActiviteIds: form.value.typeActivite || []
    };
    console.log("\u{1F50D} Objet newEntite envoy\xE9:", JSON.stringify(newEntite, null, 2));
    if (form.value.type === "SERVICE" && form.value.parentId) {
      newEntite.parentId = form.value.parentId;
    }
    formData.append("entite", new Blob([JSON.stringify(newEntite)], { type: "application/json" }));
    if (this.selectedFile) {
      formData.append("fichier", this.selectedFile, this.selectedFile.name);
    }
    this.glogalService.post("entite", formData).subscribe({
      next: (response) => {
        this.loadingIndicator = false;
        this.modalService.dismissAll();
        this.addRecordSuccess();
        const createdType = form.value.type;
        if (createdType === "DIRECTION") {
          console.log("Cr\xE9ation d'une direction - rafra\xEEchissement des directions...");
          this.getDirections();
          this.viewMode = "directions";
        } else if (createdType === "SERVICE") {
          if (this.selectedDirection) {
            console.log("Cr\xE9ation d'un service - rafra\xEEchissement des services de la direction:", this.selectedDirection.nom);
            this.showDirectionServices(this.selectedDirection);
          } else {
            console.log("Cr\xE9ation d'un service sans direction s\xE9lectionn\xE9e - retour aux directions");
            this.getDirections();
            this.viewMode = "directions";
          }
        }
        if (response && response.id) {
          this.activiteCount[response.id] = 0;
        }
        this.resetForm();
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error("Erreur cr\xE9ation :", err);
        import_sweetalert2.default.fire({
          icon: "error",
          title: "Erreur",
          text: err?.error?.message || "Erreur lors de la cr\xE9ation de l\u2019entit\xE9."
        });
      }
    });
  }
  // Réinitialiser le formulaire
  resetForm() {
    this.register.reset();
    this.showParentDirection = false;
    this.resetLogoPreview();
  }
  // Afficher un message de succès
  addRecordSuccess() {
    import_sweetalert2.default.fire({
      icon: "success",
      title: "Succ\xE8s",
      text: "Entit\xE9 cr\xE9\xE9e avec succ\xE8s !",
      timer: 2e3,
      showConfirmButton: false
    });
  }
  // add new record
  addRow(content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
  }
  deleteRecordSuccess(count) {
    this.toastr.error(count + "Eradication diligente pleinement consomm\xE9e.", "");
  }
  /**
   * Alternative : Récupère toutes les activités et compte côté client
   */
  loadActiviteCountFromAllActivites() {
    this.glogalService.get("activite").subscribe({
      next: (activites) => {
        this.entite.forEach((entite) => {
          if (entite.id) {
            this.activiteCount[entite.id] = 0;
          }
        });
        activites.forEach((activite) => {
          if (activite.entite.id && this.activiteCount.hasOwnProperty(activite.entite.id)) {
            this.activiteCount[activite.entite.id]++;
          }
        });
      },
      error: (err) => {
        console.error("Erreur lors du chargement des activit\xE9s", err);
        this.entite.forEach((entite) => {
          if (entite.id) {
            this.activiteCount[entite.id] = 0;
          }
        });
      }
    });
  }
  // edit record
  editRow(row, content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    this.selectedRowData = row;
    this.register.patchValue({
      nom: row.nom,
      description: row.description,
      type: row.type,
      parentId: row.parentId,
      responsable: row.responsable || null
      // Ajouter le responsable
    });
  }
  // update record
  onUpdateSave(form) {
    this.loadingIndicator = true;
    const formData = new FormData();
    formData.append("nom", form.value.nom);
    formData.append("description", form.value.description);
    formData.append("type", form.value.type);
    if (form.value.parentId) {
      formData.append("parentId", form.value.parentId.toString());
    }
    if (this.selectedFile) {
      formData.append("fichier", this.selectedFile, this.selectedFile.name);
    }
    const selectedActivityIds = form.value.typeActivite || [];
    selectedActivityIds.forEach((typeId) => {
      formData.append("typeActiviteIds", typeId.toString());
    });
    if (form.value.responsable) {
      if (typeof form.value.responsable === "object" && form.value.responsable.id) {
        formData.append("utilisateurId", form.value.responsable.id.toString());
      } else if (typeof form.value.responsable === "number") {
        formData.append("utilisateurId", form.value.responsable.toString());
      }
    }
    this.glogalService.updateEntity("entite", this.selectedRowData.id, formData).subscribe({
      next: (response) => {
        this.loadingIndicator = false;
        this.modalService.dismissAll();
        this.toastr.success("Entit\xE9 mise \xE0 jour avec succ\xE8s!");
        if (this.viewMode === "directions") {
          this.getDirections();
        } else {
          this.showDirectionServices(this.selectedDirection);
        }
        this.resetForm();
      },
      error: (err) => {
        this.loadingIndicator = false;
        this.toastr.error("Erreur lors de la mise \xE0 jour");
        console.error("Erreur mise \xE0 jour:", err);
      }
    });
  }
  // delete single row
  deleteSingleRow(row) {
    import_sweetalert2.default.fire({
      title: "Voulez vous vraiment supprimer cette entit\xE9?",
      text: row.nom,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.glogalService.delete("entite", row.id).subscribe({
          next: () => {
            this.toastr.success("Entit\xE9 supprim\xE9e avec succ\xE8s");
            if (this.viewMode === "directions") {
              this.getDirections();
            } else {
              this.showDirectionServices(this.selectedDirection);
            }
          },
          error: (err) => {
            this.toastr.error("Erreur lors de la suppression");
            console.error("Erreur suppression:", err);
          }
        });
      }
    });
  }
  static {
    this.\u0275fac = function EntiteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EntiteComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EncryptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntiteComponent, selectors: [["app-entite"]], decls: 30, vars: 2, consts: [["addRecord", ""], ["editRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home", "font-17"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "mb-1", "text-dark"], [1, "mb-0", "text-muted", "small"], [1, "header-buttons-left"], [1, "tbl-btn-style"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [1, "material-icons"], [1, "fs-6", "fw-semibold", "text-muted", "mt-2", "d-flex", "justify-content-between", "align-items-center"], [1, "row", "row-cols-1", "row-cols-md-2", "row-cols-lg-3", "g-3", "mt-4"], [1, "text-warning"], [1, "btn", "btn-sm", "bg-warning", "text-white", "border-0", "px-3", "py-1", "rounded-pill", "shadow-sm", "d-flex", "align-items-center", "gap-2", 2, "transition", "all 0.2s ease", 3, "click"], [1, "fas", "fa-arrow-left"], ["class", "col", 3, "click", 4, "ngFor", "ngForOf"], [1, "col", 3, "click"], [1, "card", "shadow-sm", "border-0", "card-hover", "cursor-pointer"], [1, "position-relative", "overflow-hidden", "rounded-top", "entite-card-image-wrapper"], [1, "card-img-top", "w-100", 2, "height", "16rem", "object-fit", "cover", 3, "src", "alt"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center", "bg-gradient-to-br", "from-orange-400", "to-orange-600", 2, "height", "16rem"], [1, "position-absolute", "inset-0", "entite-card-image-overlay"], [1, "card-body", "entite-card-body", "text-white", "p-3"], [1, "card-title", "fs-6", "fw-bold", "text-white", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-tasks", "text-warning", "me-2"], [1, "text-white-50", "small"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-warning", "ms-2"], [1, "ms-2", "text-warning", "fw-bold"], [1, "fas", "fa-arrow-right"], [1, "card-img-top", "w-100", 2, "height", "16rem", "object-fit", "cover", 3, "error", "src", "alt"], [1, "text-center", "text-white"], [1, "fas", "fa-building", "fa-4x", "mb-3", "opacity-90"], [1, "mb-0", "fw-semibold"], [1, "visually-hidden"], [1, "d-flex", "gap-2"], ["title", "Modifier le service", 1, "btn", "btn-sm", "btn-warning", "text-white", 3, "click"], [1, "fas", "fa-edit"], ["title", "Supprimer le service", 1, "btn", "btn-sm", "btn-danger", "text-white", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-cogs", "fa-4x", "mb-3", "opacity-90"], [1, "modal-header", "editRowModal"], [1, "modal-title-container"], [1, "modal-title", "fw-bold"], [1, "modal-subtitle", "text-warning"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Nom", "formControlName", "nom", 1, "form-control"], [1, "form-text", "text-danger"], ["formControlName", "type", 1, "form-select", "form-control", 3, "change"], ["value", "", "disabled", "", 3, "ngValue"], ["value", "DIRECTION"], ["value", "SERVICE"], ["class", "col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2", 4, "ngIf"], ["placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "section-title", "text-dark", "fw-bold"], [1, "mb-3"], [1, "mb-3", "p-3", "bg-light", "rounded", "border", "border-warning"], [1, "form-group"], ["for", "customFile", 1, "form-label", "text-dark", "fw-semibold"], ["type", "file", "id", "customFile", "accept", "image/*", "formControlName", "logo", 1, "form-control", "border-warning", 3, "change"], [1, "mt-2", "text-muted", "small"], [1, "fas", "fa-info-circle", "me-1"], ["formControlName", "responsable", 1, "form-select", "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["multiple", "", "formControlName", "typeActivite", 1, "form-control", "h-100"], [1, "mt-1", "text-gray-500", "text-sm"], [1, "modal-footer", "mt-4", "bg-light", "p-3"], ["type", "submit", 1, "btn", "btn-warning", "text-dark", "fw-bold", "px-4", "py-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "fas", "fa-save", "me-2"], ["type", "button", 1, "btn", "btn-dark", "text-white", "fw-bold", "px-4", "py-2", 3, "click"], [1, "fas", "fa-times", "me-2"], ["formControlName", "parentId", 1, "form-select", "form-control"], [3, "ngValue"], ["alt", "Aper\xE7u du logo", 1, "img-thumbnail", "me-3", 2, "max-height", "120px", "max-width", "120px", 3, "src"], [1, "mb-1", "fw-semibold", "text-dark"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash", "me-1"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function EntiteComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 2)(1, "ul", 3)(2, "li", 4)(3, "h5", 5);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 6)(6, "a", 7);
        \u0275\u0275element(7, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 4);
        \u0275\u0275text(9, "Entit\xE9 DCIRE");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "div")(12, "h4", 10);
        \u0275\u0275text(13, "Entit\xE9s DCIRE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 11);
        \u0275\u0275text(15, " Divisions et services du DCIRE. S\xE9lectionnez une entit\xE9 pour voir ses activit\xE9s. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "button", 14);
        \u0275\u0275listener("click", function EntiteComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          const addRecord_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.addRow(addRecord_r2));
        });
        \u0275\u0275elementStart(19, "i", 15);
        \u0275\u0275text(20, "add");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "div", 16);
        \u0275\u0275template(22, EntiteComponent_Conditional_22_Template, 2, 0, "span")(23, EntiteComponent_Conditional_23_Template, 6, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, EntiteComponent_Conditional_24_Template, 2, 1, "div", 17)(25, EntiteComponent_Conditional_25_Template, 2, 1, "div", 17)(26, EntiteComponent_ng_template_26_Template, 88, 17, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(28, EntiteComponent_ng_template_28_Template, 49, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275conditional(ctx.viewMode === "directions" ? 22 : 23);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.viewMode === "directions" ? 24 : 25);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      SelectMultipleControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgxDatatableModule,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterLink,
      NgForOf,
      NgIf
    ], styles: ['@charset "UTF-8";\n\n\n\n.card-hover[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n  overflow: hidden;\n  cursor: pointer;\n  border: 1px solid #E5E5E5;\n  background: #FFFFFF;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.25);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n}\n.card-hover[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.01);\n  border-color: rgba(0, 0, 0, 0.08);\n  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.35);\n}\n.card-img-top[_ngcontent-%COMP%] {\n  transition: transform 0.4s ease;\n  border: 1px solid #E5E5E5;\n  border-radius: 4px;\n}\n.card-hover[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.card-body[_ngcontent-%COMP%] {\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.entite-card-body[_ngcontent-%COMP%] {\n  background: #111827;\n}\n.card-hover[_ngcontent-%COMP%]:hover   .entite-card-body[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      #030712,\n      #111827);\n}\n.entite-card-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.entite-card-image-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.7),\n      transparent);\n}\n.card-body[_ngcontent-%COMP%]   h3.card-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.card-body[_ngcontent-%COMP%]   .text-white-50[_ngcontent-%COMP%] {\n  color: rgba(148, 163, 184, 0.9) !important;\n}\n.card-body[_ngcontent-%COMP%]   .text-warning[_ngcontent-%COMP%] {\n  color: #f97316 !important;\n}\n.btn-retour-divisions[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  padding-inline: 0.95rem;\n  padding-block: 0.35rem;\n  background: rgba(249, 115, 22, 0.12);\n  color: #f97316;\n  border: 1px solid rgba(249, 115, 22, 0.35);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition:\n    background 0.2s ease,\n    transform 0.15s ease,\n    box-shadow 0.2s ease;\n}\n.btn-retour-divisions[_ngcontent-%COMP%]:hover {\n  background: rgba(249, 115, 22, 0.2);\n  transform: translateY(-1px);\n  box-shadow: 0 10px 24px rgba(249, 115, 22, 0.35);\n}\n/*# sourceMappingURL=entite.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntiteComponent, [{
    type: Component,
    args: [{ selector: "app-entite", imports: [
      FormsModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      RouterLink,
      NgForOf,
      NgIf
    ], template: `<section class="main-content">\r
  <ul class="breadcrumb breadcrumb-style">\r
    <li class="breadcrumb-item">\r
      <h5 class="page-title m-b-0">Table</h5>\r
    </li>\r
    <li class="breadcrumb-item bcrumb-1">\r
      <a routerLink="/dashboard/main">\r
        <i class="fas fa-home font-17"></i>\r
      </a>\r
    </li>\r
    <li class="breadcrumb-item">Entit\xE9 DCIRE</li>\r
  </ul>\r
\r
  <div class="d-flex justify-content-between align-items-center mb-2">\r
    <div>\r
      <h4 class="mb-1 text-dark">Entit\xE9s DCIRE</h4>\r
      <p class="mb-0 text-muted small">\r
        Divisions et services du DCIRE. S\xE9lectionnez une entit\xE9 pour voir ses activit\xE9s.\r
      </p>\r
    </div>\r
    <div class="header-buttons-left">\r
      <div class="tbl-btn-style">\r
        <button class="btn btn-icon icon-left bg-warning text-white rounded-button" (click)="addRow(addRecord)">\r
          <i class="material-icons">add</i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="fs-6 fw-semibold text-muted mt-2 d-flex justify-content-between align-items-center">\r
    @if (viewMode === 'directions') {\r
      <span>Divisions</span>\r
    } @else {\r
      <span class="text-warning">Services de : {{ selectedDirection?.nom }}</span>\r
      <button class="btn btn-sm bg-warning text-white border-0 px-3 py-1 rounded-pill shadow-sm d-flex align-items-center gap-2" \r
        (click)="backToDirections()"\r
        style="transition: all 0.2s ease;">\r
  <i class="fas fa-arrow-left"></i>\r
  <span>Retour aux divisions</span>\r
</button>\r
    }\r
  </div>\r
\r
  <!-- Inclusion du template hi\xE9rarchique -->\r
  @if (viewMode === 'directions') {\r
    <!-- Affichage des directions -->\r
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-4">\r
      <div\r
        *ngFor="let direction of directions"\r
        (click)="showDirectionServices(direction)"\r
        class="col"\r
      >\r
        <div class="card shadow-sm border-0 card-hover cursor-pointer">\r
          <div class="position-relative overflow-hidden rounded-top entite-card-image-wrapper">\r
            @if (getLogoUrl(direction.logo)) {\r
              <img [src]="getLogoUrl(direction.logo)"\r
                   alt="{{ direction.nom }}"\r
                   class="card-img-top w-100"\r
                   style="height: 16rem; object-fit: cover;"\r
                   (error)="onImageError($event)"\r
              />\r
            } @else {\r
              <div class="w-100 d-flex align-items-center justify-content-center bg-gradient-to-br from-orange-400 to-orange-600"\r
                   style="height: 16rem;">\r
                <div class="text-center text-white">\r
                  <i class="fas fa-building fa-4x mb-3 opacity-90"></i>\r
                  <p class="mb-0 fw-semibold">Pas de logo</p>\r
                </div>\r
              </div>\r
            }\r
            <div class="position-absolute inset-0 entite-card-image-overlay"></div>\r
          </div>\r
          <div class="card-body entite-card-body text-white p-3">\r
            <h3 class="card-title fs-6 fw-bold text-white mb-2">{{ direction.nom }}</h3>\r
            <div class="d-flex align-items-center justify-content-between">\r
              <div class="d-flex align-items-center">\r
                <i class="fas fa-tasks text-warning me-2"></i>\r
                <span class="text-white-50 small">Activit\xE9s :</span>\r
                @if (direction.id && activiteCount[direction.id] === undefined) {\r
                  <div class="spinner-border spinner-border-sm text-warning ms-2" role="status">\r
                    <span class="visually-hidden">Chargement...</span>\r
                  </div>\r
                } @else {\r
                  <span class="ms-2 text-warning fw-bold">{{ direction.id ? (activiteCount[direction.id] || 0) : 'N/A' }}</span>\r
                }\r
              </div>\r
              <div class="text-warning">\r
                <i class="fas fa-arrow-right"></i>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  } @else {\r
    <!-- Affichage des services de la direction s\xE9lectionn\xE9e -->\r
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-4">\r
      <div\r
        *ngFor="let service of services"\r
        (click)="viewEntiteDetails(service)"\r
        class="col"\r
      >\r
        <div class="card shadow-sm border-0 card-hover cursor-pointer">\r
          <div class="position-relative overflow-hidden rounded-top entite-card-image-wrapper">\r
            @if (getLogoUrl(service.logo)) {\r
              <img [src]="getLogoUrl(service.logo)"\r
                   alt="{{ service.nom }}"\r
                   class="card-img-top w-100"\r
                   style="height: 16rem; object-fit: cover;"\r
                   (error)="onImageError($event)"\r
              />\r
            } @else {\r
              <div class="w-100 d-flex align-items-center justify-content-center bg-gradient-to-br from-orange-400 to-orange-600"\r
                   style="height: 16rem;">\r
                <div class="text-center text-white">\r
                  <i class="fas fa-cogs fa-4x mb-3 opacity-90"></i>\r
                  <p class="mb-0 fw-semibold">Pas de logo</p>\r
                </div>\r
              </div>\r
            }\r
            <div class="position-absolute inset-0 entite-card-image-overlay"></div>\r
          </div>\r
          <div class="card-body entite-card-body text-white p-3">\r
            <h3 class="card-title fs-6 fw-bold text-white mb-2">{{ service.nom }}</h3>\r
            <div class="d-flex align-items-center justify-content-between">\r
              <div class="d-flex align-items-center">\r
                <i class="fas fa-tasks text-warning me-2"></i>\r
                <span class="text-white-50 small">Activit\xE9s :</span>\r
                @if (service.id && activiteCount[service.id] === undefined) {\r
                  <div class="spinner-border spinner-border-sm text-warning ms-2" role="status">\r
                    <span class="visually-hidden">Chargement...</span>\r
                  </div>\r
                } @else {\r
                  <span class="ms-2 text-warning fw-bold">{{ service.id ? (activiteCount[service.id] || 0) : 'N/A' }}</span>\r
                }\r
              </div>\r
              <div class="d-flex gap-2">\r
                <button class="btn btn-sm btn-warning text-white" \r
                        (click)="editRow(service, editRecord); $event.stopPropagation()" \r
                        title="Modifier le service">\r
                  <i class="fas fa-edit"></i>\r
                </button>\r
                <button class="btn btn-sm btn-danger text-white" \r
                        (click)="deleteSingleRow(service); $event.stopPropagation()" \r
                        title="Supprimer le service">\r
                  <i class="fas fa-trash"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Template du formulaire d'ajout -->\r
  <ng-template #addRecord let-modal>\r
    <div class="modal-header editRowModal">\r
      <div class="modal-title-container">\r
        <h5 class="modal-title fw-bold">Formulaire d'ajout d'une entit\xE9</h5>\r
        <small class="modal-subtitle text-warning">Cr\xE9er une nouvelle division ou service</small>\r
      </div>\r
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">\r
        <span aria-hidden="true"><i class="material-icons">close</i></span>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <form class="register-form" [formGroup]="register" (ngSubmit)="onCreateSave(register)">\r
        <div class="row">\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Nom <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control" placeholder="Nom" formControlName="nom">\r
            @if (!register.get('nom')?.valid && register.get('nom')?.touched) {\r
              <small class="form-text text-danger">Le nom est obligatoire</small>\r
            }\r
          </div>\r
\r
          <!-- Type d'Entit\xE9 -->\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Type d'Entit\xE9 <span class="text-danger">*</span></label>\r
            <select class="form-select form-control" formControlName="type" (change)="onTypeEntiteChange($event)">\r
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un type d'entit\xE9 --</option>\r
              <option value="DIRECTION">DIVISION</option>\r
              <option value="SERVICE">SERVICE</option>\r
            </select>\r
            @if (!register.get('type')?.valid && register.get('type')?.touched) {\r
              <small class="form-text text-danger">Le type d'entit\xE9 est obligatoire</small>\r
            }\r
          </div>\r
\r
          <!-- S\xE9lection de la direction parente (visible uniquement pour SERVICE) -->\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2" *ngIf="showParentDirection">\r
            <label>Direction responsable <span class="text-danger">*</span></label>\r
            <select class="form-select form-control" formControlName="parentId">\r
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une direction --</option>\r
              <option *ngFor="let direction of directions" [ngValue]="direction.id">{{direction.nom}}</option>\r
            </select>\r
            @if (!register.get('parentId')?.valid && register.get('parentId')?.touched) {\r
              <small class="form-text text-danger">La division responsable est obligatoire</small>\r
            }\r
          </div>\r
\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Description <span class="text-danger">*</span></label>\r
            <textarea class="form-control" placeholder="Description" formControlName="description"></textarea>\r
            @if (!register.get('description')?.valid && register.get('description')?.touched) {\r
              <small class="form-text text-danger">La description est obligatoire</small>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <div class="row">\r
            <div class="section-title text-dark fw-bold">Logo <span class="text-danger">*</span></div>\r
            <div class="mb-3">\r
              @if (logoPreview) {\r
                <div class="mb-3 p-3 bg-light rounded border border-warning">\r
                  <div class="d-flex align-items-center">\r
                    <img [src]="logoPreview" alt="Aper\xE7u du logo" class="img-thumbnail me-3" style="max-height: 120px; max-width: 120px;">\r
                    <div>\r
                      <p class="mb-1 fw-semibold text-dark">Aper\xE7u du logo</p>\r
                      <button type="button" class="btn btn-sm btn-outline-danger" (click)="resetLogoPreview()">\r
                        <i class="fas fa-trash me-1"></i> Supprimer\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              }\r
              <div class="form-group">\r
                <label for="customFile" class="form-label text-dark fw-semibold">S\xE9lectionner un logo</label>\r
                <input type="file" (change)="onFileChange($event)" class="form-control border-warning" id="customFile" accept="image/*" formControlName="logo">\r
                @if (!register.get('logo')?.valid && register.get('logo')?.touched) {\r
                  <small class="form-text text-danger">Le logo est obligatoire</small>\r
                }\r
                <div class="mt-2 text-muted small">\r
                  <i class="fas fa-info-circle me-1"></i>\r
                  Formats accept\xE9s: JPG, PNG, GIF. Taille maximale: 5MB.\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Responsable <span class="text-danger">*</span></label>\r
            <select class="form-select form-control" formControlName="responsable">\r
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un utilisateur --</option>\r
              <option *ngFor="let responsable of users" [ngValue]="responsable">{{responsable.nom}} {{responsable.prenom}}</option>\r
            </select>\r
            @if (!register.get('responsable')?.valid && register.get('responsable')?.touched) {\r
              <small class="form-text text-danger">Le responsable est obligatoire</small>\r
            }\r
          </div>\r
\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Type Activit\xE9 <span class="text-danger">*</span></label>\r
            <select class="form-control h-100" multiple formControlName="typeActivite">\r
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un ou plusieurs types d'activit\xE9 --</option>\r
              <option *ngFor="let typeActivite of allTypeActivite" [ngValue]="typeActivite.id">{{typeActivite.type}}</option>\r
            </select>\r
            @if (!register.get('typeActivite')?.valid && register.get('typeActivite')?.touched) {\r
              <small class="form-text text-danger">Le type d'activit\xE9 est obligatoire</small>\r
            }\r
            <div class="mt-1 text-gray-500 text-sm">Maintenez Ctrl (ou Cmd sur Mac) pour s\xE9lectionner plusieurs options.</div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer mt-4 bg-light p-3">\r
          <button type="submit" class="btn btn-warning text-dark fw-bold px-4 py-2" [disabled]="!register.valid || loadingIndicator">\r
            <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
            <i class="fas fa-save me-2"></i>\r
            {{ loadingIndicator ? 'Chargement...' : 'Enregistrer' }}\r
          </button>\r
          <button type="button" class="btn btn-dark text-white fw-bold px-4 py-2" (click)="modal.close('Close click')">\r
            <i class="fas fa-times me-2"></i>Fermer\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </ng-template>\r
\r
  <!-- Edit Record Modal Window -->\r
  <ng-template #editRecord let-modal>\r
    <div class="modal-header editRowModal">\r
      <div class="modal-title-container">\r
        <h5 class="modal-title fw-bold">Modifier une entit\xE9</h5>\r
        <small class="modal-subtitle text-warning">Formulaire de modification d'une entit\xE9 existante</small>\r
      </div>\r
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">\r
        <span aria-hidden="true"><i class="material-icons">close</i></span>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <form class="register-form" [formGroup]="register" (ngSubmit)="onUpdateSave(register)">\r
        <div class="row">\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Nom <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control" placeholder="Nom" formControlName="nom">\r
            @if (!register.get('nom')?.valid && register.get('nom')?.touched) {\r
              <small class="form-text text-danger">Le nom est obligatoire</small>\r
            }\r
          </div>\r
\r
          <!-- Type d'Entit\xE9 -->\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Type d'Entit\xE9 <span class="text-danger">*</span></label>\r
            <select class="form-select form-control" formControlName="type" (change)="onTypeEntiteChange($event)">\r
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez un type d'entit\xE9 --</option>\r
              <option value="DIRECTION">DIRECTION</option>\r
              <option value="SERVICE">SERVICE</option>\r
            </select>\r
            @if (!register.get('type')?.valid && register.get('type')?.touched) {\r
              <small class="form-text text-danger">Le type d'entit\xE9 est obligatoire</small>\r
            }\r
          </div>\r
\r
          <!-- S\xE9lection de la direction parente (visible uniquement pour SERVICE) -->\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2" *ngIf="showParentDirection">\r
            <label>Division responsable <span class="text-danger">*</span></label>\r
            <select class="form-select form-control" formControlName="parentId">\r
              <option value="" [ngValue]="null" disabled>-- S\xE9lectionnez une direction --</option>\r
              <option *ngFor="let direction of directions" [ngValue]="direction.id">{{direction.nom}}</option>\r
            </select>\r
            @if (!register.get('parentId')?.valid && register.get('parentId')?.touched) {\r
              <small class="form-text text-danger">La direction responsable est obligatoire</small>\r
            }\r
          </div>\r
\r
          <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">\r
            <label>Description <span class="text-danger">*</span></label>\r
            <textarea class="form-control" placeholder="Description" formControlName="description"></textarea>\r
            @if (!register.get('description')?.valid && register.get('description')?.touched) {\r
              <small class="form-text text-danger">La description est obligatoire</small>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer mt-4 bg-light p-3">\r
          <button type="submit" class="btn btn-warning text-dark fw-bold px-4 py-2" [disabled]="!register.valid || loadingIndicator">\r
            <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
            <i class="fas fa-save me-2"></i>\r
            {{ loadingIndicator ? 'Chargement...' : 'Mettre \xE0 jour' }}\r
          </button>\r
          <button type="button" class="btn btn-dark text-white fw-bold px-4 py-2" (click)="modal.close('Close click')">\r
            <i class="fas fa-times me-2"></i>Fermer\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </ng-template>\r
</section>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/admin/entite/entite.component.scss */\n.card-hover {\n  border-radius: 1.25rem;\n  overflow: hidden;\n  cursor: pointer;\n  border: 1px solid #E5E5E5;\n  background: #FFFFFF;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.25);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n}\n.card-hover:hover {\n  transform: translateY(-4px) scale(1.01);\n  border-color: rgba(0, 0, 0, 0.08);\n  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.35);\n}\n.card-img-top {\n  transition: transform 0.4s ease;\n  border: 1px solid #E5E5E5;\n  border-radius: 4px;\n}\n.card-hover:hover .card-img-top {\n  transform: scale(1.03);\n}\n.card-body {\n  transition: background 0.3s ease, color 0.3s ease;\n}\n.entite-card-body {\n  background: #111827;\n}\n.card-hover:hover .entite-card-body {\n  background:\n    linear-gradient(\n      to bottom,\n      #030712,\n      #111827);\n}\n.entite-card-image-wrapper {\n  position: relative;\n}\n.entite-card-image-overlay {\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.7),\n      transparent);\n}\n.card-body h3.card-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.card-body .text-white-50 {\n  color: rgba(148, 163, 184, 0.9) !important;\n}\n.card-body .text-warning {\n  color: #f97316 !important;\n}\n.btn-retour-divisions {\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  padding-inline: 0.95rem;\n  padding-block: 0.35rem;\n  background: rgba(249, 115, 22, 0.12);\n  color: #f97316;\n  border: 1px solid rgba(249, 115, 22, 0.35);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition:\n    background 0.2s ease,\n    transform 0.15s ease,\n    box-shadow 0.2s ease;\n}\n.btn-retour-divisions:hover {\n  background: rgba(249, 115, 22, 0.2);\n  transform: translateY(-1px);\n  box-shadow: 0 10px 24px rgba(249, 115, 22, 0.35);\n}\n/*# sourceMappingURL=entite.component.css.map */\n'] }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: Router }, { type: EncryptionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntiteComponent, { className: "EntiteComponent", filePath: "src/app/admin/entite/entite.component.ts", lineNumber: 36 });
})();
export {
  EntiteComponent
};
//# sourceMappingURL=entite.component-OU45Y4TZ.js.map
