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

// src/app/admin/role/role.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function RoleComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.nom);
  }
}
function RoleComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 37);
    \u0275\u0275listener("click", function RoleComponent_ng_template_43_Template_button_click_1_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const row_r6 = ctx_r4.row;
      const rowIndex_r7 = ctx_r4.rowIndex;
      const ctx_r7 = \u0275\u0275nextContext();
      const editRecord_r9 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(ctx_r7.editRow(row_r6, rowIndex_r7, editRecord_r9));
    });
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 39);
    \u0275\u0275listener("click", function RoleComponent_ng_template_43_Template_button_click_3_listener() {
      const row_r6 = \u0275\u0275restoreView(_r4).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.deleteSingleRow(row_r6));
    });
    \u0275\u0275element(4, "i", 40);
    \u0275\u0275elementEnd()();
  }
}
function RoleComponent_ng_template_44_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " nom is required");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_ng_template_44_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 57);
  }
}
function RoleComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "h5", 43);
    \u0275\u0275text(3, "Formulaire d'ajout d'un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 44);
    \u0275\u0275text(5, "Cr\xE9er un nouveau r\xF4le");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function RoleComponent_ng_template_44_Template_button_click_6_listener() {
      const modal_r11 = \u0275\u0275restoreView(_r10).$implicit;
      return \u0275\u0275resetView(modal_r11.dismiss());
    });
    \u0275\u0275elementStart(7, "span", 46)(8, "i", 29);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 47)(11, "form", 48);
    \u0275\u0275listener("ngSubmit", function RoleComponent_ng_template_44_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onAddRowSave(ctx_r7.register));
    });
    \u0275\u0275elementStart(12, "div", 15)(13, "div", 49)(14, "label");
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 50);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 51);
    \u0275\u0275template(19, RoleComponent_ng_template_44_Conditional_19_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 53)(21, "button", 54);
    \u0275\u0275template(22, RoleComponent_ng_template_44_span_22_Template, 1, 0, "span", 55);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 56);
    \u0275\u0275listener("click", function RoleComponent_ng_template_44_Template_button_click_24_listener() {
      const modal_r11 = \u0275\u0275restoreView(_r10).$implicit;
      return \u0275\u0275resetView(modal_r11.close("Close click"));
    });
    \u0275\u0275text(25, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r7.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r7.register.get("nom")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r7.register.get("nom")) == null ? null : tmp_6_0.touched) ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r7.register.valid || ctx_r7.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r7.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function RoleComponent_ng_template_46_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " Le nom et obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "h5", 43);
    \u0275\u0275text(3, "Modifier un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 44);
    \u0275\u0275text(5, "Formulaire de modification d'un r\xF4le existant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function RoleComponent_ng_template_46_Template_button_click_6_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 46)(8, "i", 29);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 47)(11, "form", 58);
    \u0275\u0275listener("ngSubmit", function RoleComponent_ng_template_46_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onEditSave(ctx_r7.editForm));
    });
    \u0275\u0275elementStart(12, "div", 59);
    \u0275\u0275element(13, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15)(15, "div", 49)(16, "label");
    \u0275\u0275text(17, "Nom ");
    \u0275\u0275elementStart(18, "span", 50);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 51);
    \u0275\u0275template(21, RoleComponent_ng_template_46_Conditional_21_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 53)(23, "button", 54);
    \u0275\u0275text(24, "Enregistre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 56);
    \u0275\u0275listener("click", function RoleComponent_ng_template_46_Template_button_click_25_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.close());
    });
    \u0275\u0275text(26, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r7.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r7.editForm.get("nom")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r7.editForm.get("nom")) == null ? null : tmp_6_0.touched) ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r7.editForm.valid);
  }
}
var RoleComponent = class _RoleComponent {
  constructor(fb, modalService, toastr, glogalService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.rows = [];
    this.roles = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.columns = [
      { prop: "nom" }
    ];
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl()
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
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#8963ff",
      cancelButtonColor: "#fb7823",
      confirmButtonText: "Yes"
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
    this.getAllRole();
    this.register = this.fb.group({
      id: [""],
      nom: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]]
    });
  }
  // fetch data
  getAllRole() {
    this.loadingIndicator = true;
    this.glogalService.get("role").subscribe({
      next: (value) => {
        this.roles = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  // save add new record
  onAddRowSave(form) {
    this.loadingIndicator = true;
    this.glogalService.post("role", form.value).subscribe({
      next: (response) => {
        this.roles.push(response);
        console.log(this.roles);
        this.roles = [...this.roles];
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
      nom: row.nom
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
    this.glogalService.delete("role", row.id).subscribe({
      next: (response) => {
        this.roles = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllRole();
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
      const updatedRole = form.value;
      this.glogalService.update("role", updatedRole.id, updatedRole).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllRole();
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
    this.roles = this.filteredData.filter((item) => {
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
    this.\u0275fac = function RoleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoleComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleComponent, selectors: [["app-role"]], viewQuery: function RoleComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 48, vars: 19, consts: [["table", ""], ["addRecord", ""], ["editRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home", "font-17"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [1, "material-icons"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Actions", 3, "sortable"], [1, "name-col-style"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], [1, "modal-header", "editRowModal"], [1, "modal-title-container"], [1, "modal-title", "fw-bold"], [1, "modal-subtitle", "text-warning"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Nom du role", "formControlName", "nom", "required", "", 1, "form-control"], [1, "form-text", "text-danger"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"]], template: function RoleComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 3)(1, "ul", 4)(2, "li", 5)(3, "h5", 6);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 7)(6, "a", 8);
        \u0275\u0275element(7, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 5);
        \u0275\u0275text(9, "Role");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "div", 17)(18, "div", 18)(19, "div", 19);
        \u0275\u0275element(20, "div", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 21)(22, "div", 19)(23, "div", 22)(24, "div")(25, "label", 23)(26, "i", 24);
        \u0275\u0275text(27, "Recherche");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "input", 25);
        \u0275\u0275listener("keyup", function RoleComponent_Template_input_keyup_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 26)(30, "div", 27)(31, "button", 28);
        \u0275\u0275listener("click", function RoleComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          const addRecord_r2 = \u0275\u0275reference(45);
          return \u0275\u0275resetView(ctx.addRow(addRecord_r2));
        });
        \u0275\u0275elementStart(32, "i", 29);
        \u0275\u0275text(33, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 30);
        \u0275\u0275listener("click", function RoleComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(35, "i", 29);
        \u0275\u0275text(36, "delete");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(37, "ngx-datatable", 31, 0);
        \u0275\u0275listener("select", function RoleComponent_Template_ngx_datatable_select_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275element(39, "ngx-datatable-column", 32);
        \u0275\u0275elementStart(40, "ngx-datatable-column", 33);
        \u0275\u0275template(41, RoleComponent_ng_template_41_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "ngx-datatable-column", 35);
        \u0275\u0275template(43, RoleComponent_ng_template_43_Template, 5, 0, "ng-template", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(44, RoleComponent_ng_template_44_Template, 26, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(46, RoleComponent_ng_template_46_Template, 27, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(34);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275property("rows", ctx.roles)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", true);
        \u0275\u0275advance();
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("sortable", false);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnCellDirective,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterLink,
      NgIf
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%]     ngx-datatable.material {\n  border-radius: 0.75rem;\n  background: #fff !important;\n  border: 1px solid #E5E5E5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .datatable-header-cell {\n  background: #F5F5F5 !important;\n  color: #374151 !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border-bottom: 2px solid #E5E5E5;\n}\n[_nghost-%COMP%]     .datatable-body-row .datatable-body-cell {\n  background: #fff !important;\n  color: #374151 !important;\n}\n[_nghost-%COMP%]     .datatable-body-row:hover .datatable-body-cell {\n  background: #F5F5F5 !important;\n  color: #374151 !important;\n}\n[_nghost-%COMP%]     .datatable-footer {\n  background: #F5F5F5 !important;\n  border-top: 1px solid #E5E5E5;\n  color: #374151;\n}\n[_nghost-%COMP%]     .btn-tbl-edit, \n[_nghost-%COMP%]     .btn-tbl-delete {\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 1px solid #E5E5E5;\n  transition: background-color 0.2s;\n}\n[_nghost-%COMP%]     .btn-tbl-edit {\n  background-color: #fff;\n  color: #22c55e;\n}\n[_nghost-%COMP%]     .btn-tbl-delete {\n  background-color: #fff;\n  color: #ef4444;\n}\n[_nghost-%COMP%]     .btn-tbl-edit:hover {\n  background-color: rgba(34, 197, 94, 0.1);\n}\n[_nghost-%COMP%]     .btn-tbl-delete:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=role.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleComponent, [{
    type: Component,
    args: [{ selector: "app-role", imports: [
      FormsModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      RouterLink,
      NgIf
    ], template: `<section class="main-content">\r
  <ul class="breadcrumb breadcrumb-style ">\r
    <li class="breadcrumb-item">\r
      <h5 class="page-title m-b-0">Table</h5>\r
    </li>\r
    <li class="breadcrumb-item bcrumb-1">\r
      <a routerLink="/dashboard/main">\r
        <i class="fas fa-home font-17"></i></a>\r
    </li>\r
    <li class="breadcrumb-item">Role</li>\r
  </ul>\r
  <div class="section-body">\r
    <div class="row clearfix">\r
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\r
        <div class="card">\r
          <div class="p-10">\r
            <div class="row">\r
              <div class="col-lg-6">\r
                <div class="row m-0">\r
                  <div class="col-auto p-0">\r
                    <div class="ngxTableHeader">\r
                      <div class="table-title">\r
<!--                        <h2><strong>Advance Table</strong></h2>-->\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="col-lg-8 p-0">\r
                    <div class="ngxTableHeader">\r
                      <div class="table-search-area">\r
                        <div>\r
                          <label for="search-input"><i class="material-icons search-icon">Recherche</i></label>\r
                          <input placeholder="Search" type="text" class="browser-default search-field"\r
                                 (keyup)='filterDatatable($event)' aria-label="Search box">\r
                        </div>\r
                      </div>\r
                      <div class="header-buttons-left">\r
                        <div class="tbl-btn-style">\r
                          <button class="btn btn-icon icon-left bg-warning text-white rounded-button" (click)='addRow(addRecord)'>\r
                            <i class="material-icons">add</i>\r
                          </button>\r
                          <button [hidden]=!isRowSelected class="btn btn-icon icon-left btn-danger rounded-button"\r
                                  (click)='deleteSelected()'>\r
                            <i class="material-icons">delete</i>\r
                          </button>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <ngx-datatable #table class="material" [rows]="roles" [loadingIndicator]="loadingIndicator"\r
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"\r
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"\r
                           [selectionType]="selection" (select)='onSelect($event)'>\r
              <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"\r
                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">\r
              </ngx-datatable-column>\r
              <ngx-datatable-column [width]="200" name="Nom">\r
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>\r
                  <div class="name-col-style">\r
                    <div>{{row.nom}}</div>\r
                  </div>\r
                </ng-template>\r
              </ngx-datatable-column>\r
              <ngx-datatable-column name="Actions" [sortable]="false">\r
                <ng-template let-value="value" let-row="row" let-rowIndex="rowIndex" ngx-datatable-cell-template>\r
                  <span>\r
                    <button class="btn btn-tbl-edit h-auto" (click)='editRow(row, rowIndex, editRecord)'>\r
                      <i class="fas fa-pen"></i>\r
                    </button>\r
                    <button class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>\r
                      <i class="far fa-trash-alt"></i>\r
                    </button>\r
                  </span>\r
                </ng-template>\r
              </ngx-datatable-column>\r
            </ngx-datatable>\r
\r
\r
\r
            <!-- Add Record Modal Window -->\r
            <ng-template #addRecord let-modal>\r
              <div class="modal-header editRowModal">\r
                <div class="modal-title-container">\r
                  <h5 class="modal-title fw-bold">Formulaire d'ajout d'un r\xF4le</h5>\r
                  <small class="modal-subtitle text-warning">Cr\xE9er un nouveau r\xF4le</small>\r
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
                      <input type="text" class="form-control" placeholder="Nom du role" formControlName="nom"\r
                             required>\r
                      @if (!register.get('nom')?.valid && register.get('nom')?.touched) {\r
                        <small class="form-text text-danger"> nom is\r
                          required</small>\r
                      }\r
                    </div>\r
                  </div>\r
                  <div class="modal-footer">\r
                    <button type="submit" class="btn btn-warning" [disabled]="!register.valid || loadingIndicator">\r
                      <span *ngIf="loadingIndicator" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>\r
                      {{ loadingIndicator ? 'Chargement...' : 'Enregistre' }}\r
                    </button>\r
\r
                    <button type="button" class="btn btn-dark text-white" (click)="modal.close('Close click')">Fermer</button>\r
                  </div>\r
                </form>\r
              </div>\r
            </ng-template>\r
            <!-- Edit Record Modal Window -->\r
            <ng-template #editRecord let-modal>\r
              <div class="modal-header editRowModal">\r
                <div class="modal-title-container">\r
                  <h5 class="modal-title fw-bold">Modifier un r\xF4le</h5>\r
                  <small class="modal-subtitle text-warning">Formulaire de modification d'un r\xF4le existant</small>\r
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
                  </div>\r
                  <div class="modal-footer">\r
                    <button type="submit" class="btn btn-warning" [disabled]="!editForm.valid">Enregistre</button>\r
                    <button type="button" class="btn btn-dark text-white" (click)="modal.close()">Fermer</button>\r
                  </div>\r
                </form>\r
              </div>\r
            </ng-template>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/admin/role/role.component.scss */\n:host ::ng-deep ngx-datatable.material {\n  border-radius: 0.75rem;\n  background: #fff !important;\n  border: 1px solid #E5E5E5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n:host ::ng-deep .datatable-header-cell {\n  background: #F5F5F5 !important;\n  color: #374151 !important;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border-bottom: 2px solid #E5E5E5;\n}\n:host ::ng-deep .datatable-body-row .datatable-body-cell {\n  background: #fff !important;\n  color: #374151 !important;\n}\n:host ::ng-deep .datatable-body-row:hover .datatable-body-cell {\n  background: #F5F5F5 !important;\n  color: #374151 !important;\n}\n:host ::ng-deep .datatable-footer {\n  background: #F5F5F5 !important;\n  border-top: 1px solid #E5E5E5;\n  color: #374151;\n}\n:host ::ng-deep .btn-tbl-edit,\n:host ::ng-deep .btn-tbl-delete {\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 1px solid #E5E5E5;\n  transition: background-color 0.2s;\n}\n:host ::ng-deep .btn-tbl-edit {\n  background-color: #fff;\n  color: #22c55e;\n}\n:host ::ng-deep .btn-tbl-delete {\n  background-color: #fff;\n  color: #ef4444;\n}\n:host ::ng-deep .btn-tbl-edit:hover {\n  background-color: rgba(34, 197, 94, 0.1);\n}\n:host ::ng-deep .btn-tbl-delete:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=role.component.css.map */\n'] }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleComponent, { className: "RoleComponent", filePath: "src/app/admin/role/role.component.ts", lineNumber: 29 });
})();
export {
  RoleComponent
};
//# sourceMappingURL=role.component-HNO5X4XN.js.map
