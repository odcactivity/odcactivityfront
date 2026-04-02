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
  GlobalService
} from "./chunk-WEK6BSLY.js";
import {
  ActivatedRoute,
  Router
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EQOE5FII.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/admin/entite-detail/entite-detail.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function EntiteDetailComponent_div_8_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2, " Direction parente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "i", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getParentDirectionName(), " ");
  }
}
function EntiteDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275element(3, "img", 11)(4, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "h2", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15)(9, "div", 16);
    \u0275\u0275text(10, " Type d'entit\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16);
    \u0275\u0275text(15, " Responsable ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275element(17, "i", 18);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16);
    \u0275\u0275text(21, " Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, EntiteDetailComponent_div_8_Conditional_24_Template, 6, 1, "div", 15);
    \u0275\u0275elementStart(25, "div", 20)(26, "div", 16);
    \u0275\u0275text(27, " Date de cr\xE9ation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275element(29, "i", 21);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", ctx_r1.entite.nom);
    \u0275\u0275property("src", ctx_r1.entite.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.entite.nom, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.entite.type === "DIRECTION" ? "Direction" : "Service", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" Mr/Mme ", ctx_r1.selectedUtilisateur == null ? null : ctx_r1.selectedUtilisateur.nom, " ", ctx_r1.selectedUtilisateur == null ? null : ctx_r1.selectedUtilisateur.prenom, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.entite.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.entite.type === "SERVICE" && ctx_r1.entite.parentId ? 24 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 9, ctx_r1.entite.createdAt, "dd/MM/yyyy HH:mm"), " ");
  }
}
function EntiteDetailComponent_ng_template_9_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", u_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", u_r5.nom, " ", u_r5.prenom, " ");
  }
}
function EntiteDetailComponent_ng_template_9_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6.type, " ");
  }
}
function EntiteDetailComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h4", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function EntiteDetailComponent_ng_template_9_Template_button_click_3_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.dismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 26)(5, "form", 27);
    \u0275\u0275listener("ngSubmit", function EntiteDetailComponent_ng_template_9_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditSave(ctx_r1.editForm));
    });
    \u0275\u0275elementStart(6, "div", 15)(7, "label", 28);
    \u0275\u0275text(8, " Nom ");
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 15)(13, "label", 28);
    \u0275\u0275text(14, " Description ");
    \u0275\u0275elementStart(15, "span", 29);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "textarea", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15)(19, "label", 28);
    \u0275\u0275text(20, "Logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 32);
    \u0275\u0275listener("change", function EntiteDetailComponent_ng_template_9_Template_input_change_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15)(23, "label", 28);
    \u0275\u0275text(24, " Responsable ");
    \u0275\u0275elementStart(25, "span", 29);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 33)(28, "option", 34);
    \u0275\u0275text(29, "-- S\xE9lectionnez --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, EntiteDetailComponent_ng_template_9_option_30_Template, 2, 3, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 36)(32, "label", 28);
    \u0275\u0275text(33, " Type Activit\xE9 ");
    \u0275\u0275elementStart(34, "span", 29);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 37);
    \u0275\u0275template(37, EntiteDetailComponent_ng_template_9_option_37_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "small", 19);
    \u0275\u0275text(39, " Maintenez Ctrl (ou Cmd) pour s\xE9lection multiple ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 38)(41, "button", 39);
    \u0275\u0275listener("click", function EntiteDetailComponent_ng_template_9_Template_button_click_41_listener() {
      const modal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(modal_r4.close());
    });
    \u0275\u0275text(42, " Fermer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 40);
    \u0275\u0275text(44, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedRowData.nom, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.allTypeActivite);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.editForm.valid);
  }
}
var EntiteDetailComponent = class _EntiteDetailComponent {
  constructor(fb, modalService, toastr, glogalService, router, route, encryptionService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.router = router;
    this.route = route;
    this.encryptionService = encryptionService;
    this.entite = null;
    this.selectedUtilisateurId = null;
    this.users = [];
    this.selectedUtilisateur = null;
    this.entites = [];
    this.allTypeActivite = [];
    this.loadingIndicator = true;
    this.selectedFile = null;
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      description: new UntypedFormControl(),
      logo: new UntypedFormControl(),
      responsable: new UntypedFormControl(),
      allTypeActivite: new UntypedFormControl(),
      typeActivite: new UntypedFormControl()
      // ✅ Ajoutez cette ligne
    });
  }
  ngOnInit() {
    this.getAllTypeActivite();
    this.getEntiteById();
    this.register = this.fb.group({
      id: [""],
      nom: ["", [Validators.required]],
      description: ["", [Validators.required]],
      logo: [""],
      responsable: [null, [Validators.required]],
      typeActivite: [null, [Validators.required]],
      // Ajoutez ce FormControl pour correspondre à formControlName
      selectedTypeActivites: [null]
      // Vous utilisez déjà selectedTypeActivites pour stocker les IDs
    });
  }
  back() {
    this.router.navigate(["/entite"]);
  }
  getEntiteById() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        try {
          const decryptedId = this.encryptionService.decrypt(id);
          this.loadEntiteData(parseInt(decryptedId));
        } catch (error) {
          console.error("Erreur de d\xE9cryptage de l'ID:", error);
          this.loadEntiteData(parseInt(id));
        }
      } else {
        const state = history.state;
        const stateId = state?.entiteId;
        if (stateId) {
          this.loadEntiteData(stateId);
        } else {
          console.error("Aucun ID d'entit\xE9 trouv\xE9 dans les param\xE8tres ou l'\xE9tat");
          this.toastr.error("Impossible de charger les d\xE9tails de l'entit\xE9");
          this.back();
        }
      }
    });
  }
  loadEntiteData(id) {
    this.glogalService.getById("entite", id.toString()).subscribe({
      next: (data) => {
        this.entite = data;
        const respon = data.responsable;
        this.selectedUtilisateurId = data.responsable;
        this.getResponsableByEntite(respon);
        this.getAllUtilisateur();
      },
      error: (err) => {
        console.error("Erreur lors du chargement de l\u2019entit\xE9 :", err);
        this.toastr.error("Erreur lors du chargement des d\xE9tails");
      }
    });
  }
  getResponsableByEntite(respon) {
    this.glogalService.get("utilisateur").subscribe({
      next: (users) => {
        if (respon) {
          this.selectedUtilisateur = users.find((u) => u.id === respon);
          if (this.selectedUtilisateur) {
            console.log("\u2705 Responsable trouv\xE9 :", this.selectedUtilisateur);
          } else {
            console.warn("\u26A0\uFE0F Aucun utilisateur ne correspond \xE0 cet ID :", this.selectedUtilisateurId);
          }
        }
      },
      error: (err) => {
        console.error("\u274C Erreur lors du chargement des utilisateurs :", err);
      }
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  getAllUtilisateur() {
    this.glogalService.get("utilisateur").subscribe({
      next: (value) => {
        this.users = value;
        console.log("Users", this.users);
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
  editRow(row, content) {
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg"
    });
    this.editForm.setValue({
      id: row.id,
      nom: row.nom,
      description: row.description,
      logo: "",
      // à vérifier
      responsable: row.responsable,
      allTypeActivite: row.typeActivite || [],
      typeActivite: row.typeActivitesIds || []
    });
    this.selectedRowData = row;
  }
  onEditSave(form) {
    if (!form.value?.id) {
      console.error("\u274C Pas d'ID dans le formulaire");
      return;
    }
    this.loadingIndicator = true;
    const updatedEntite = {
      id: form.value.id,
      nom: form.value.nom,
      description: form.value.description,
      responsable: form.value.responsable || null,
      typeActiviteIds: form.value.typeActivite || []
    };
    console.log("\u{1F50D} Objet updatedEntite envoy\xE9:", JSON.stringify(updatedEntite, null, 2));
    const formData = new FormData();
    try {
      const entiteBlob = new Blob([JSON.stringify(updatedEntite)], { type: "application/json" });
      formData.append("entite", entiteBlob);
    } catch (err) {
      console.error("\u274C Erreur JSON.stringify :", err);
    }
    if (this.selectedFile) {
      formData.append("logo", this.selectedFile);
    } else {
      console.log("\u26A0\uFE0F Aucun logo s\xE9lectionn\xE9");
    }
    this.glogalService.updateEntity("entite", form.value.id, formData).subscribe({
      next: () => {
        this.modalService.dismissAll();
        this.editRecordSuccess();
        this.getEntiteById();
        this.loadingIndicator = false;
      },
      error: (err) => {
        console.error("\u274C Erreur API :", err);
        this.loadingIndicator = false;
      }
    });
  }
  /** ✅ Message de succès création */
  creationSuccess() {
    import_sweetalert2.default.fire({
      icon: "success",
      title: "Succ\xE8s",
      text: "Entit\xE9 cr\xE9\xE9e avec succ\xE8s !"
    });
  }
  /** ✅ Message de succès édition */
  editRecordSuccessN() {
    import_sweetalert2.default.fire({
      icon: "success",
      title: "Succ\xE8s",
      text: "Entit\xE9 mise \xE0 jour avec succ\xE8s !"
    });
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
    this.glogalService.delete("entite", row.id).subscribe({
      next: (response) => {
        this.users = response;
        console.log(response);
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.back();
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
  editRecordSuccess() {
    this.toastr.success("Modification op\xE9r\xE9", "");
  }
  deleteRecordSuccess(count) {
    this.toastr.success("Eradication diligente pleinement consomm\xE9e.", "");
  }
  getParentDirectionName() {
    if (this.entite?.type === "SERVICE" && this.entite.parentId) {
      const parentDirection = this.entites.find((e) => e.id === this.entite.parentId);
      return parentDirection ? parentDirection.nom : "Direction non trouv\xE9e";
    }
    return "";
  }
  static {
    this.\u0275fac = function EntiteDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EntiteDetailComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EncryptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntiteDetailComponent, selectors: [["app-entite-detail"]], decls: 11, vars: 1, consts: [["editRecord", ""], [1, "main-content", "py-5", "d-flex", "flex-column", "align-items-center"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between", "mb-4", "px-3", "px-md-4", "px-lg-5"], [1, "d-flex", "align-items-center", "gap-2", "fs-5", "fw-bold"], [1, "bg-warning", "rounded-pill", "px-3", "py-1"], [1, "bg-dark", "text-white", "px-3", "py-1", "rounded-pill", "d-inline-block"], [1, "btn", "btn-warning", "text-white", "fw-bold", "px-4", "py-2", "rounded-pill", "shadow-sm", 3, "click"], ["class", "w-100 d-flex justify-content-center px-3", 4, "ngIf"], [1, "w-100", "d-flex", "justify-content-center", "px-3"], [1, "card", "shadow-lg", "border-0", "w-100", 2, "max-width", "720px", "border-radius", "18px", "overflow", "hidden"], [1, "position-relative"], [1, "w-100", 2, "height", "420px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "top-0", "start-0", "w-100", "h-100", 2, "background", "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))"], [1, "card-body", "bg-dark", "text-white", "p-4", "p-md-5"], [1, "fw-bold", "mb-3", 2, "font-size", "1.6rem"], [1, "mb-3"], [1, "fw-semibold", "small", "text-uppercase", "text-secondary", "mb-1"], [1, "badge", "bg-warning", "text-dark", "px-3", "py-2", "rounded-pill", "fw-semibold"], [1, "fas", "fa-user", "me-2"], [1, "text-secondary"], [1, "mb-1"], [1, "fas", "fa-calendar", "me-2"], [1, "fas", "fa-building", "me-2"], [1, "modal-header"], [1, "modal-title", "fw-bold"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["rows", "3", "formControlName", "description", 1, "form-control"], ["type", "file", "formControlName", "logo", 1, "form-control", 3, "change"], ["formControlName", "responsable", 1, "form-select"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "mb-4"], ["multiple", "", "formControlName", "typeActivite", 1, "form-select"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [3, "ngValue"]], template: function EntiteDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
        \u0275\u0275text(5, " D\xE9tails Entit\xE9 ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "button", 6);
        \u0275\u0275listener("click", function EntiteDetailComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.back());
        });
        \u0275\u0275text(7, " Retour ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, EntiteDetailComponent_div_8_Template, 32, 12, "div", 7)(9, EntiteDetailComponent_ng_template_9_Template, 45, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.entite);
      }
    }, dependencies: [
      NgIf,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      SelectMultipleControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgForOf,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntiteDetailComponent, [{
    type: Component,
    args: [{ selector: "app-entite-detail", imports: [
      NgIf,
      FormsModule,
      NgForOf,
      ReactiveFormsModule
    ], template: `<section class="main-content py-5 d-flex flex-column align-items-center">\r
\r
  <!-- HEADER -->\r
  <div class="w-100 d-flex align-items-center justify-content-between mb-4 px-3 px-md-4 px-lg-5">\r
\r
    <!-- Titre -->\r
    <div class="d-flex align-items-center gap-2 fs-5 fw-bold">\r
      <div class="bg-warning rounded-pill px-3 py-1">\r
        <span class="bg-dark text-white px-3 py-1 rounded-pill d-inline-block">\r
          D\xE9tails Entit\xE9\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Bouton retour -->\r
    <button\r
      class="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill shadow-sm"\r
      (click)="back()"\r
    >\r
      Retour\r
    </button>\r
\r
  </div>\r
\r
  <!-- CONTENU -->\r
  <div *ngIf="entite" class="w-100 d-flex justify-content-center px-3">\r
\r
    <div class="card shadow-lg border-0 w-100" style="max-width: 720px; border-radius: 18px; overflow: hidden;">\r
\r
      <!-- IMAGE -->\r
      <div class="position-relative">\r
        <img\r
          [src]="entite.logo"\r
          alt="{{ entite.nom }}"\r
          class="w-100"\r
          style="height: 420px; object-fit: cover;"\r
        />\r
        <div class="position-absolute top-0 start-0 w-100 h-100"\r
             style="background: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0));">\r
        </div>\r
      </div>\r
\r
      <!-- BODY -->\r
      <div class="card-body bg-dark text-white p-4 p-md-5">\r
\r
        <!-- NOM -->\r
        <h2 class="fw-bold mb-3" style="font-size: 1.6rem;">\r
          {{ entite.nom }}\r
        </h2>\r
\r
        <!-- TYPE -->\r
        <div class="mb-3">\r
          <div class="fw-semibold small text-uppercase text-secondary mb-1">\r
            Type d'entit\xE9\r
          </div>\r
          <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-semibold">\r
            {{ entite.type === 'DIRECTION' ? 'Direction' : 'Service' }}\r
          </span>\r
        </div>\r
\r
        <!-- RESPONSABLE -->\r
        <div class="mb-3">\r
          <div class="fw-semibold small text-uppercase text-secondary mb-1">\r
            Responsable\r
          </div>\r
          <div>\r
            <i class="fas fa-user me-2"></i>\r
            Mr/Mme {{ selectedUtilisateur?.nom }} {{ selectedUtilisateur?.prenom }}\r
          </div>\r
        </div>\r
\r
        <!-- DESCRIPTION -->\r
        <div class="mb-3">\r
          <div class="fw-semibold small text-uppercase text-secondary mb-1">\r
            Description\r
          </div>\r
          <div class="text-secondary">\r
            {{ entite.description }}\r
          </div>\r
        </div>\r
\r
        <!-- PARENT -->\r
        @if (entite.type === 'SERVICE' && entite.parentId) {\r
          <div class="mb-3">\r
            <div class="fw-semibold small text-uppercase text-secondary mb-1">\r
              Direction parente\r
            </div>\r
            <div>\r
              <i class="fas fa-building me-2"></i>\r
              {{ getParentDirectionName() }}\r
            </div>\r
          </div>\r
        }\r
\r
        <!-- DATE -->\r
        <div class="mb-1">\r
          <div class="fw-semibold small text-uppercase text-secondary mb-1">\r
            Date de cr\xE9ation\r
          </div>\r
          <div>\r
            <i class="fas fa-calendar me-2"></i>\r
            {{ entite.createdAt | date:'dd/MM/yyyy HH:mm' }}\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- MODAL EDIT -->\r
  <ng-template #editRecord let-modal>\r
    <div class="modal-header">\r
      <h4 class="modal-title fw-bold">\r
        {{ selectedRowData!.nom }}\r
      </h4>\r
      <button type="button" class="btn-close" (click)="modal.dismiss()"></button>\r
    </div>\r
\r
    <div class="modal-body">\r
      <form [formGroup]="editForm" (ngSubmit)="onEditSave(editForm)">\r
\r
        <!-- NOM -->\r
        <div class="mb-3">\r
          <label class="form-label fw-semibold">\r
            Nom <span class="text-danger">*</span>\r
          </label>\r
          <input type="text" class="form-control" formControlName="nom" />\r
        </div>\r
\r
        <!-- DESCRIPTION -->\r
        <div class="mb-3">\r
          <label class="form-label fw-semibold">\r
            Description <span class="text-danger">*</span>\r
          </label>\r
          <textarea class="form-control" rows="3" formControlName="description"></textarea>\r
        </div>\r
\r
        <!-- LOGO -->\r
        <div class="mb-3">\r
          <label class="form-label fw-semibold">Logo</label>\r
          <input type="file" class="form-control" (change)="onFileChange($event)" formControlName="logo">\r
        </div>\r
\r
        <!-- RESPONSABLE -->\r
        <div class="mb-3">\r
          <label class="form-label fw-semibold">\r
            Responsable <span class="text-danger">*</span>\r
          </label>\r
          <select class="form-select" formControlName="responsable">\r
            <option [ngValue]="null" disabled>-- S\xE9lectionnez --</option>\r
            <option *ngFor="let u of users" [ngValue]="u.id">\r
              {{ u.nom }} {{ u.prenom }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- TYPE ACTIVITE -->\r
        <div class="mb-4">\r
          <label class="form-label fw-semibold">\r
            Type Activit\xE9 <span class="text-danger">*</span>\r
          </label>\r
          <select class="form-select" multiple formControlName="typeActivite">\r
            <option *ngFor="let t of allTypeActivite" [ngValue]="t.id">\r
              {{ t.type }}\r
            </option>\r
          </select>\r
          <small class="text-secondary">\r
            Maintenez Ctrl (ou Cmd) pour s\xE9lection multiple\r
          </small>\r
        </div>\r
\r
        <!-- ACTIONS -->\r
        <div class="d-flex justify-content-end gap-2">\r
          <button type="button" class="btn btn-dark" (click)="modal.close()">\r
            Fermer\r
          </button>\r
          <button type="submit" class="btn btn-warning" [disabled]="!editForm.valid">\r
            Enregistrer\r
          </button>\r
        </div>\r
\r
      </form>\r
    </div>\r
  </ng-template>\r
\r
</section>\r
` }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: Router }, { type: ActivatedRoute }, { type: EncryptionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntiteDetailComponent, { className: "EntiteDetailComponent", filePath: "src/app/admin/entite-detail/entite-detail.component.ts", lineNumber: 34 });
})();
export {
  EntiteDetailComponent
};
//# sourceMappingURL=entite-detail.component-LNZGB5FT.js.map
