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
  NgIf,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ViewChild,
  setClassMetadata,
  ɵNgNoValidate,
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
} from "./chunk-EQOE5FII.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/type-activite/type-activite.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function TypeActiviteComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function TypeActiviteComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const addRecord_r4 = \u0275\u0275reference(45);
      return \u0275\u0275resetView(ctx_r2.addRow(addRecord_r4));
    });
    \u0275\u0275elementStart(1, "i", 31);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function TypeActiviteComponent_ngx_datatable_column_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ngx-datatable-column", 38);
  }
  if (rf & 2) {
    \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", true);
  }
}
function TypeActiviteComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.type);
  }
}
function TypeActiviteComponent_ng_template_43_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function TypeActiviteComponent_ng_template_43_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      const row_r8 = ctx_r6.row;
      const rowIndex_r9 = ctx_r6.rowIndex;
      const ctx_r2 = \u0275\u0275nextContext();
      const editRecord_r10 = \u0275\u0275reference(47);
      return \u0275\u0275resetView(ctx_r2.editRow(row_r8, rowIndex_r9, editRecord_r10));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function TypeActiviteComponent_ng_template_43_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function TypeActiviteComponent_ng_template_43_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const row_r8 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSingleRow(row_r8));
    });
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementEnd();
  }
}
function TypeActiviteComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, TypeActiviteComponent_ng_template_43_button_1_Template, 2, 0, "button", 40)(2, TypeActiviteComponent_ng_template_43_button_2_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentUserId === row_r8.created_by.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentUserId === row_r8.created_by.id);
  }
}
function TypeActiviteComponent_ng_template_44_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 54);
    \u0275\u0275text(1, " Type activit\xE9 est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function TypeActiviteComponent_ng_template_44_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 59);
  }
}
function TypeActiviteComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 47);
    \u0275\u0275listener("click", function TypeActiviteComponent_ng_template_44_Template_button_click_1_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss());
    });
    \u0275\u0275elementStart(2, "span", 48)(3, "i", 31);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "div", 49)(6, "form", 50);
    \u0275\u0275listener("ngSubmit", function TypeActiviteComponent_ng_template_44_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAddRowSave(ctx_r2.register));
    });
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 51)(9, "label");
    \u0275\u0275text(10, "Type ");
    \u0275\u0275elementStart(11, "span", 52);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 53);
    \u0275\u0275template(14, TypeActiviteComponent_ng_template_44_Conditional_14_Template, 2, 0, "small", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 55)(16, "button", 56);
    \u0275\u0275template(17, TypeActiviteComponent_ng_template_44_span_17_Template, 1, 0, "span", 57);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 58);
    \u0275\u0275listener("click", function TypeActiviteComponent_ng_template_44_Template_button_click_19_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.close("Close click"));
    });
    \u0275\u0275text(20, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r2.register.get("type")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r2.register.get("type")) == null ? null : tmp_6_0.touched) ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.register.valid || ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function TypeActiviteComponent_ng_template_46_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 54);
    \u0275\u0275text(1, " Le nom et obligatoire");
    \u0275\u0275elementEnd();
  }
}
function TypeActiviteComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "h4", 60)(2, "div", 61)(3, "div", 62)(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "button", 47);
    \u0275\u0275listener("click", function TypeActiviteComponent_ng_template_46_Template_button_click_6_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 48)(8, "i", 31);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 49)(11, "form", 64);
    \u0275\u0275listener("ngSubmit", function TypeActiviteComponent_ng_template_46_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditSave(ctx_r2.editForm));
    });
    \u0275\u0275elementStart(12, "div", 65);
    \u0275\u0275element(13, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16)(15, "div", 51)(16, "label");
    \u0275\u0275text(17, "Type ");
    \u0275\u0275elementStart(18, "span", 52);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 53);
    \u0275\u0275template(21, TypeActiviteComponent_ng_template_46_Conditional_21_Template, 2, 0, "small", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 55)(23, "button", 56);
    \u0275\u0275text(24, "Enregistre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 58);
    \u0275\u0275listener("click", function TypeActiviteComponent_ng_template_46_Template_button_click_25_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.close());
    });
    \u0275\u0275text(26, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedRowData.type, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r2.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r2.editForm.get("type")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r2.editForm.get("type")) == null ? null : tmp_7_0.touched) ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.editForm.valid);
  }
}
var TypeActiviteComponent = class _TypeActiviteComponent {
  constructor(fb, modalService, toastr, glogalService, authService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.authService = authService;
    this.rows = [];
    this.typeActivites = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.currentUserId = this.getCurrentUserId();
    this.selected = [];
    this.useRole = [];
    this.columns = [
      { prop: "type" }
    ];
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      type: new UntypedFormControl()
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
    this.getAllTypeActivite();
    this.register = this.fb.group({
      id: [""],
      type: ["", [Validators.required]]
    });
  }
  // fetch data
  getAllTypeActivite() {
    this.loadingIndicator = true;
    this.glogalService.get("typeActivite").subscribe({
      next: (value) => {
        this.typeActivites = value;
        console.log("typeActivites", this.typeActivites);
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  getCurrentUserId() {
    const raw = localStorage.getItem("bearerid");
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
  onAddRowSave(form) {
    this.loadingIndicator = true;
    this.glogalService.postId("typeActivite", this.currentUserId, form.value).subscribe({
      next: (response) => {
        this.typeActivites.push(response);
        console.log(this.typeActivites);
        this.typeActivites = [...this.typeActivites];
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
      type: row.type
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
    this.glogalService.delete("typeActivite", row.id).subscribe({
      next: (response) => {
        this.typeActivites = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllTypeActivite();
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
      const updatedTypeActivite = form.value;
      this.glogalService.updateId("typeActivite", updatedTypeActivite.id, this.currentUserId, updatedTypeActivite).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllTypeActivite();
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
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    this.typeActivites = this.filteredData.filter((item) => {
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
    this.toastr.error(count + "l'operation effectu\xE9e avec succ\xE8s", "");
  }
  static {
    this.\u0275fac = function TypeActiviteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypeActiviteComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypeActiviteComponent, selectors: [["app-type-activite"]], viewQuery: function TypeActiviteComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 48, vars: 14, consts: [["table", ""], ["addRecord", ""], ["editRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], ["class", "btn btn-icon icon-left bg-warning text-white rounded-button", 3, "click", 4, "ngIf"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], [1, "material-icons"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable", 4, "ngIf"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Actions", 3, "sortable"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], [1, "name-col-style"], ["class", "btn btn-tbl-edit h-auto", 3, "click", 4, "ngIf"], ["class", "btn btn-tbl-delete h-auto", 3, "click", 4, "ngIf"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], [1, "modal-header", "editRowModal"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-12", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Type activit\xE9", "formControlName", "type", "required", "", 1, "form-control"], [1, "form-text", "text-danger"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"]], template: function TypeActiviteComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 3)(1, "ul", 4)(2, "li", 5)(3, "h5", 6);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 7)(6, "a", 8);
        \u0275\u0275element(7, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 5);
        \u0275\u0275text(9, "Type Activit\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11, "G\xE9rez les types d\u2019activit\xE9s utilis\xE9s pour organiser et classifier les activit\xE9s.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20);
        \u0275\u0275element(22, "div", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 22)(24, "div", 20)(25, "div", 23)(26, "div")(27, "label", 24)(28, "i", 25);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 26);
        \u0275\u0275listener("keyup", function TypeActiviteComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 27)(32, "div", 28);
        \u0275\u0275template(33, TypeActiviteComponent_button_33_Template, 3, 0, "button", 29);
        \u0275\u0275elementStart(34, "button", 30);
        \u0275\u0275listener("click", function TypeActiviteComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(35, "i", 31);
        \u0275\u0275text(36, "delete");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(37, "ngx-datatable", 32, 0);
        \u0275\u0275listener("select", function TypeActiviteComponent_Template_ngx_datatable_select_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275template(39, TypeActiviteComponent_ngx_datatable_column_39_Template, 1, 7, "ngx-datatable-column", 33);
        \u0275\u0275elementStart(40, "ngx-datatable-column", 34);
        \u0275\u0275template(41, TypeActiviteComponent_ng_template_41_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "ngx-datatable-column", 36);
        \u0275\u0275template(43, TypeActiviteComponent_ng_template_43_Template, 3, 2, "ng-template", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(44, TypeActiviteComponent_ng_template_44_Template, 21, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(46, TypeActiviteComponent_ng_template_46_Template, 27, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275property("ngIf", ctx.useRole.includes("PERSONNEL"));
        \u0275\u0275advance();
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275property("rows", ctx.typeActivites)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 0)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.useRole.includes("SUPERADMIN"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypeActiviteComponent, [{
    type: Component,
    args: [{ selector: "app-type-activite", imports: [
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
    <li class="breadcrumb-item">Type Activit\xE9</li>
  </ul>
  <p class="odl-page-subtitle">G\xE9rez les types d\u2019activit\xE9s utilis\xE9s pour organiser et classifier les activit\xE9s.</p>
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
                          <button *ngIf="useRole.includes('PERSONNEL')" class="btn btn-icon icon-left bg-warning text-white rounded-button" (click)='addRow(addRecord)'>
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
            <ngx-datatable #table class="material" [rows]="typeActivites" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="0" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
              <ngx-datatable-column *ngIf="useRole.includes('SUPERADMIN')" [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Nom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.type}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column name="Actions" [sortable]="false">
                <ng-template let-value="value" let-row="row" let-rowIndex="rowIndex" ngx-datatable-cell-template>
                  <span>
                    <button *ngIf="currentUserId===row.created_by.id" class="btn btn-tbl-edit h-auto" (click)='editRow(row, rowIndex, editRecord)'>
                      <i class="fas fa-pen"></i>
                    </button>
                    <button *ngIf="currentUserId===row.created_by.id"  class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>
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
                      <label>Type <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Type activit\xE9" formControlName="type"
                             required>
                      @if (!register.get('type')?.valid && register.get('type')?.touched) {
                        <small class="form-text text-danger"> Type activit\xE9 est obligatoire</small>
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
                        {{selectedRowData!.type}}
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
                      <label>Type <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Type activit\xE9" formControlName="type"
                             required>
                      @if (!editForm.get('type')?.valid && editForm.get('type')?.touched) {
                        <small class="form-text text-danger"> Le nom et
                          obligatoire</small>
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
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: AuthService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypeActiviteComponent, { className: "TypeActiviteComponent", filePath: "src/app/personnels/type-activite/type-activite.component.ts", lineNumber: 33 });
})();
export {
  TypeActiviteComponent
};
//# sourceMappingURL=type-activite.component-PSRDNRLU.js.map
