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
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ɵNgNoValidate
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  Component,
  NgIf,
  ViewChild,
  setClassMetadata,
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
} from "./chunk-FZBB7M2N.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/salle/salle.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function SalleComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.nom);
  }
}
function SalleComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.capacite);
  }
}
function SalleComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 39);
    \u0275\u0275listener("click", function SalleComponent_ng_template_47_Template_button_click_1_listener() {
      const ctx_r5 = \u0275\u0275restoreView(_r5);
      const row_r7 = ctx_r5.row;
      const rowIndex_r8 = ctx_r5.rowIndex;
      const ctx_r8 = \u0275\u0275nextContext();
      const editRecord_r10 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(ctx_r8.editRow(row_r7, rowIndex_r8, editRecord_r10));
    });
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 41);
    \u0275\u0275listener("click", function SalleComponent_ng_template_47_Template_button_click_3_listener() {
      const row_r7 = \u0275\u0275restoreView(_r5).row;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.deleteSingleRow(row_r7));
    });
    \u0275\u0275element(4, "i", 42);
    \u0275\u0275elementEnd()();
  }
}
function SalleComponent_ng_template_48_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 51);
    \u0275\u0275text(1, " nom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function SalleComponent_ng_template_48_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 51);
    \u0275\u0275text(1, " Capacite est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function SalleComponent_ng_template_48_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 57);
  }
}
function SalleComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function SalleComponent_ng_template_48_Template_button_click_1_listener() {
      const modal_r12 = \u0275\u0275restoreView(_r11).$implicit;
      return \u0275\u0275resetView(modal_r12.dismiss());
    });
    \u0275\u0275elementStart(2, "span", 45)(3, "i", 30);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "div", 46)(6, "form", 47);
    \u0275\u0275listener("ngSubmit", function SalleComponent_ng_template_48_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onAddRowSave(ctx_r8.register));
    });
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 48)(9, "label");
    \u0275\u0275text(10, "Nom ");
    \u0275\u0275elementStart(11, "span", 49);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 50);
    \u0275\u0275template(14, SalleComponent_ng_template_48_Conditional_14_Template, 2, 0, "small", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 48)(16, "label");
    \u0275\u0275text(17, "Capacite ");
    \u0275\u0275elementStart(18, "span", 49);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 52);
    \u0275\u0275template(21, SalleComponent_ng_template_48_Conditional_21_Template, 2, 0, "small", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 53)(23, "button", 54);
    \u0275\u0275template(24, SalleComponent_ng_template_48_span_24_Template, 1, 0, "span", 55);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 56);
    \u0275\u0275listener("click", function SalleComponent_ng_template_48_Template_button_click_26_listener() {
      const modal_r12 = \u0275\u0275restoreView(_r11).$implicit;
      return \u0275\u0275resetView(modal_r12.close("Close click"));
    });
    \u0275\u0275text(27, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r8.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r8.register.get("nom")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r8.register.get("nom")) == null ? null : tmp_6_0.touched) ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r8.register.get("capacite")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r8.register.get("capacite")) == null ? null : tmp_7_0.touched) ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r8.register.valid || ctx_r8.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r8.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r8.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function SalleComponent_ng_template_50_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 51);
    \u0275\u0275text(1, " Le nom et obligatoire");
    \u0275\u0275elementEnd();
  }
}
function SalleComponent_ng_template_50_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 51);
    \u0275\u0275text(1, " Capacite est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function SalleComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "h4", 58)(2, "div", 59)(3, "div", 60)(4, "div", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "button", 44);
    \u0275\u0275listener("click", function SalleComponent_ng_template_50_Template_button_click_6_listener() {
      const modal_r14 = \u0275\u0275restoreView(_r13).$implicit;
      return \u0275\u0275resetView(modal_r14.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 45)(8, "i", 30);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 46)(11, "form", 62);
    \u0275\u0275listener("ngSubmit", function SalleComponent_ng_template_50_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onEditSave(ctx_r8.editForm));
    });
    \u0275\u0275elementStart(12, "div", 63);
    \u0275\u0275element(13, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16)(15, "div", 48)(16, "label");
    \u0275\u0275text(17, "Nom ");
    \u0275\u0275elementStart(18, "span", 49);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 65);
    \u0275\u0275template(21, SalleComponent_ng_template_50_Conditional_21_Template, 2, 0, "small", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 48)(23, "label");
    \u0275\u0275text(24, "Capacite ");
    \u0275\u0275elementStart(25, "span", 49);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 52);
    \u0275\u0275template(28, SalleComponent_ng_template_50_Conditional_28_Template, 2, 0, "small", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 53)(30, "button", 54);
    \u0275\u0275text(31, "Enregistre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 56);
    \u0275\u0275listener("click", function SalleComponent_ng_template_50_Template_button_click_32_listener() {
      const modal_r14 = \u0275\u0275restoreView(_r13).$implicit;
      return \u0275\u0275resetView(modal_r14.close());
    });
    \u0275\u0275text(33, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r8.selectedRowData.nom, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r8.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r8.editForm.get("nom")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r8.editForm.get("nom")) == null ? null : tmp_7_0.touched) ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r8.register.get("capacite")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r8.register.get("capacite")) == null ? null : tmp_8_0.touched) ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r8.editForm.valid);
  }
}
var SalleComponent = class _SalleComponent {
  constructor(fb, modalService, toastr, glogalService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.rows = [];
    this.salles = [];
    this.activites = [];
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
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      capacite: new UntypedFormControl()
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
    this.getAllSalle();
    this.register = this.fb.group({
      id: [""],
      nom: ["", [Validators.required]],
      capacite: [null, [Validators.required]]
    });
  }
  // fetch data
  getAllActivite() {
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
  getAllSalle() {
    this.loadingIndicator = true;
    this.glogalService.get("salle").subscribe({
      next: (value) => {
        this.salles = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  onAddRowSave(form) {
    this.loadingIndicator = true;
    this.glogalService.post("salle", form.value).subscribe({
      next: (response) => {
        this.salles.push(response);
        console.log(this.salles);
        this.salles = [...this.salles];
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
      nom: row.nom,
      capacite: row.capacite
    });
    this.selectedRowData = row;
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
    this.glogalService.delete("salle", row.id).subscribe({
      next: (response) => {
        this.salles = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllSalle();
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
      const updatedSalle = form.value;
      this.glogalService.update("salle", updatedSalle.id, updatedSalle).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllSalle();
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
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    this.salles = this.filteredData.filter((item) => {
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
    this.\u0275fac = function SalleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalleComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalleComponent, selectors: [["app-salle"]], viewQuery: function SalleComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 52, vars: 20, consts: [["table", ""], ["addRecord", ""], ["editRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [1, "material-icons"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Capacite", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "name-col-style"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], [1, "modal-header", "editRowModal"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-12", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Nom du salle", "formControlName", "nom", "required", "", 1, "form-control"], [1, "form-text", "text-danger"], ["type", "number", "placeholder", "Capacite", "formControlName", "capacite", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["type", "text", "placeholder", "Nom du role", "formControlName", "nom", "required", "", 1, "form-control"]], template: function SalleComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 3)(1, "ul", 4)(2, "li", 5)(3, "h5", 6);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 7)(6, "a", 8);
        \u0275\u0275element(7, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 5);
        \u0275\u0275text(9, "Salle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11, "G\xE9rez les salles et leurs capacit\xE9s pour planifier les activit\xE9s.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20);
        \u0275\u0275element(22, "div", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 22)(24, "div", 20)(25, "div", 23)(26, "div")(27, "label", 24)(28, "i", 25);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 26);
        \u0275\u0275listener("keyup", function SalleComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 27)(32, "div", 28)(33, "button", 29);
        \u0275\u0275listener("click", function SalleComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          const addRecord_r2 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(ctx.addRow(addRecord_r2));
        });
        \u0275\u0275elementStart(34, "i", 30);
        \u0275\u0275text(35, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 31);
        \u0275\u0275listener("click", function SalleComponent_Template_button_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(37, "i", 30);
        \u0275\u0275text(38, "delete");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(39, "ngx-datatable", 32, 0);
        \u0275\u0275listener("select", function SalleComponent_Template_ngx_datatable_select_39_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275element(41, "ngx-datatable-column", 33);
        \u0275\u0275elementStart(42, "ngx-datatable-column", 34);
        \u0275\u0275template(43, SalleComponent_ng_template_43_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "ngx-datatable-column", 36);
        \u0275\u0275template(45, SalleComponent_ng_template_45_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "ngx-datatable-column", 37);
        \u0275\u0275template(47, SalleComponent_ng_template_47_Template, 5, 0, "ng-template", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, SalleComponent_ng_template_48_Template, 28, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(50, SalleComponent_ng_template_50_Template, 34, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275property("rows", ctx.salles)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", true);
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
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgIf,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnCellDirective,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterLink
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalleComponent, [{
    type: Component,
    args: [{ selector: "app-salle", imports: [
      FormsModule,
      NgIf,
      NgxDatatableModule,
      ReactiveFormsModule,
      RouterLink
    ], template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style ">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-home font-17"></i></a>
    </li>
    <li class="breadcrumb-item">Salle</li>
  </ul>
  <p class="odl-page-subtitle">G\xE9rez les salles et leurs capacit\xE9s pour planifier les activit\xE9s.</p>
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
                          <button class="btn btn-icon icon-left bg-warning text-white rounded-button" (click)='addRow(addRecord)'>
                            <i class="material-icons">add</i>
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
            <ngx-datatable #table class="material" [rows]="salles" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
              <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Nom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Capacite">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.capacite}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column name="Actions" [sortable]="false">
                <ng-template let-value="value" let-row="row" let-rowIndex="rowIndex" ngx-datatable-cell-template>
                  <span>
                    <button class="btn btn-tbl-edit h-auto" (click)='editRow(row, rowIndex, editRecord)'>
                      <i class="fas fa-pen"></i>
                    </button>
                    <button class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>
                      <i class="far fa-trash-alt"></i>
                    </button>
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
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Nom du salle" formControlName="nom"
                             required>
                      @if (!register.get('nom')?.valid && register.get('nom')?.touched) {
                        <small class="form-text text-danger"> nom est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Capacite <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" placeholder="Capacite" formControlName="capacite"
                             required>
                      @if (!register.get('capacite')?.valid && register.get('capacite')?.touched) {
                        <small class="form-text text-danger"> Capacite est obligatoire</small>
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
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Nom <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Nom du role" formControlName="nom"
                             required>
                      @if (!editForm.get('nom')?.valid && editForm.get('nom')?.touched) {
                        <small class="form-text text-danger"> Le nom et
                          obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Capacite <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" placeholder="Capacite" formControlName="capacite"
                             required>
                      @if (!register.get('capacite')?.valid && register.get('capacite')?.touched) {
                        <small class="form-text text-danger"> Capacite est obligatoire</small>
                      }
                    </div>
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
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalleComponent, { className: "SalleComponent", filePath: "src/app/personnels/salle/salle.component.ts", lineNumber: 33 });
})();
export {
  SalleComponent
};
//# sourceMappingURL=salle.component-GYAPUULL.js.map
