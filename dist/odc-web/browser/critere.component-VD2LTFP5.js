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

// src/app/personnels/critere/critere.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function CritereComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.libelle);
  }
}
function CritereComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.intutile);
  }
}
function CritereComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.point);
  }
}
function CritereComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 40);
    \u0275\u0275listener("click", function CritereComponent_ng_template_49_Template_button_click_1_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r6);
      const row_r8 = ctx_r6.row;
      const rowIndex_r9 = ctx_r6.rowIndex;
      const ctx_r9 = \u0275\u0275nextContext();
      const editRecord_r11 = \u0275\u0275reference(53);
      return \u0275\u0275resetView(ctx_r9.editRow(row_r8, rowIndex_r9, editRecord_r11));
    });
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function CritereComponent_ng_template_49_Template_button_click_3_listener() {
      const row_r8 = \u0275\u0275restoreView(_r6).row;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.deleteSingleRow(row_r8));
    });
    \u0275\u0275element(4, "i", 43);
    \u0275\u0275elementEnd()();
  }
}
function CritereComponent_ng_template_50_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " Libelle est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CritereComponent_ng_template_50_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " Intutile est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CritereComponent_ng_template_50_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " Point est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CritereComponent_ng_template_50_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 59);
  }
}
function CritereComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function CritereComponent_ng_template_50_Template_button_click_1_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.dismiss());
    });
    \u0275\u0275elementStart(2, "span", 46)(3, "i", 30);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "div", 47)(6, "form", 48);
    \u0275\u0275listener("ngSubmit", function CritereComponent_ng_template_50_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onAddRowSave(ctx_r9.register));
    });
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 49)(9, "label");
    \u0275\u0275text(10, "Libelle ");
    \u0275\u0275elementStart(11, "span", 50);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 51);
    \u0275\u0275template(14, CritereComponent_ng_template_50_Conditional_14_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 49)(16, "label");
    \u0275\u0275text(17, "Intutile ");
    \u0275\u0275elementStart(18, "span", 50);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 53);
    \u0275\u0275template(21, CritereComponent_ng_template_50_Conditional_21_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 49)(23, "label");
    \u0275\u0275text(24, "Point ");
    \u0275\u0275elementStart(25, "span", 50);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 54);
    \u0275\u0275template(28, CritereComponent_ng_template_50_Conditional_28_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 55)(30, "button", 56);
    \u0275\u0275template(31, CritereComponent_ng_template_50_span_31_Template, 1, 0, "span", 57);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 58);
    \u0275\u0275listener("click", function CritereComponent_ng_template_50_Template_button_click_33_listener() {
      const modal_r13 = \u0275\u0275restoreView(_r12).$implicit;
      return \u0275\u0275resetView(modal_r13.close("Close click"));
    });
    \u0275\u0275text(34, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r9.register);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r9.register.get("libelle")) == null ? null : tmp_6_0.valid) && ((tmp_6_0 = ctx_r9.register.get("libelle")) == null ? null : tmp_6_0.touched) ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r9.register.get("intutile")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r9.register.get("intutile")) == null ? null : tmp_7_0.touched) ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r9.register.get("point")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r9.register.get("point")) == null ? null : tmp_8_0.touched) ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r9.register.valid || ctx_r9.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r9.loadingIndicator);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r9.loadingIndicator ? "Chargement..." : "Enregistre", " ");
  }
}
function CritereComponent_ng_template_52_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " Libelle est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CritereComponent_ng_template_52_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " Intutile est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CritereComponent_ng_template_52_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1, " Point est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CritereComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "h4", 60)(2, "div", 61)(3, "div", 62)(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function CritereComponent_ng_template_52_Template_button_click_6_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.dismiss("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 46)(8, "i", 30);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 47)(11, "form", 64);
    \u0275\u0275listener("ngSubmit", function CritereComponent_ng_template_52_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onEditSave(ctx_r9.editForm));
    });
    \u0275\u0275elementStart(12, "div", 65);
    \u0275\u0275element(13, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16)(15, "div", 49)(16, "label");
    \u0275\u0275text(17, "Libelle ");
    \u0275\u0275elementStart(18, "span", 50);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 51);
    \u0275\u0275template(21, CritereComponent_ng_template_52_Conditional_21_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 49)(23, "label");
    \u0275\u0275text(24, "Intutile ");
    \u0275\u0275elementStart(25, "span", 50);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 53);
    \u0275\u0275template(28, CritereComponent_ng_template_52_Conditional_28_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 49)(30, "label");
    \u0275\u0275text(31, "Point ");
    \u0275\u0275elementStart(32, "span", 50);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 54);
    \u0275\u0275template(35, CritereComponent_ng_template_52_Conditional_35_Template, 2, 0, "small", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 55)(37, "button", 56);
    \u0275\u0275text(38, "Enregistre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 58);
    \u0275\u0275listener("click", function CritereComponent_ng_template_52_Template_button_click_39_listener() {
      const modal_r15 = \u0275\u0275restoreView(_r14).$implicit;
      return \u0275\u0275resetView(modal_r15.close());
    });
    \u0275\u0275text(40, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r9.selectedRowData.libelle, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r9.editForm);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!((tmp_7_0 = ctx_r9.register.get("libelle")) == null ? null : tmp_7_0.valid) && ((tmp_7_0 = ctx_r9.register.get("libelle")) == null ? null : tmp_7_0.touched) ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_8_0 = ctx_r9.register.get("intutile")) == null ? null : tmp_8_0.valid) && ((tmp_8_0 = ctx_r9.register.get("intutile")) == null ? null : tmp_8_0.touched) ? 28 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_9_0 = ctx_r9.register.get("point")) == null ? null : tmp_9_0.valid) && ((tmp_9_0 = ctx_r9.register.get("point")) == null ? null : tmp_9_0.touched) ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r9.editForm.valid);
  }
}
var CritereComponent = class _CritereComponent {
  constructor(fb, modalService, toastr, glogalService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.rows = [];
    this.criteres = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.columns = [
      { prop: "libelle" },
      { prop: "intutile" },
      { prop: "point" }
    ];
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      libelle: new UntypedFormControl(),
      intutile: new UntypedFormControl(),
      point: new UntypedFormControl()
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
    this.getAllCritere();
    this.register = this.fb.group({
      id: [""],
      libelle: ["", [Validators.required]],
      intutile: ["", [Validators.required]],
      point: [null, [Validators.required]]
    });
  }
  // fetch data
  getAllCritere() {
    this.loadingIndicator = true;
    this.glogalService.get("critere").subscribe({
      next: (value) => {
        this.criteres = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    });
  }
  onAddRowSave(form) {
    this.loadingIndicator = true;
    this.glogalService.post("critere", form.value).subscribe({
      next: (response) => {
        this.criteres.push(response);
        console.log(this.criteres);
        this.criteres = [...this.criteres];
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
      libelle: row.libelle,
      intutile: row.intutile,
      point: row.point
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
    this.glogalService.delete("critere", row.id).subscribe({
      next: (response) => {
        this.criteres = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllCritere();
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
      const updatedCritere = form.value;
      this.glogalService.update("critere", updatedCritere.id, updatedCritere).subscribe({
        next: (value) => {
          console.log(value);
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllCritere();
        },
        error: (err) => {
          console.error("Erreur lors de la mise \xE0 jour  :", err);
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
    this.criteres = this.filteredData.filter((item) => {
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
    this.\u0275fac = function CritereComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CritereComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CritereComponent, selectors: [["app-critere"]], viewQuery: function CritereComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 54, vars: 21, consts: [["table", ""], ["addRecord", ""], ["editRecord", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", "rounded-button", 3, "click"], [1, "material-icons"], [1, "btn", "btn-icon", "icon-left", "btn-danger", "rounded-button", 3, "click", "hidden"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Intutile", 3, "width"], ["name", "Point", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "name-col-style"], [1, "btn", "btn-tbl-edit", "h-auto", 3, "click"], [1, "fas", "fa-pen"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], [1, "modal-header", "editRowModal"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "col-xl-12", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "text-danger"], ["type", "text", "placeholder", "Libelle", "formControlName", "libelle", "required", "", 1, "form-control"], [1, "form-text", "text-danger"], ["type", "text", "placeholder", "Intutile", "formControlName", "intutile", "required", "", 1, "form-control"], ["type", "number", "placeholder", "Point", "formControlName", "point", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", "text-white", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "modal-basic-title", 1, "modal-title"], [1, "table-modal-header"], [1, "modal-about"], [1, "fw-bold", "p-t-10", "font-17"], [3, "ngSubmit", "formGroup"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"]], template: function CritereComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 3)(1, "ul", 4)(2, "li", 5)(3, "h5", 6);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 7)(6, "a", 8);
        \u0275\u0275element(7, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 5);
        \u0275\u0275text(9, "Critere");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11, "D\xE9finissez les crit\xE8res et r\xE8gles utilis\xE9s dans le suivi des activit\xE9s.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20);
        \u0275\u0275element(22, "div", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 22)(24, "div", 20)(25, "div", 23)(26, "div")(27, "label", 24)(28, "i", 25);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 26);
        \u0275\u0275listener("keyup", function CritereComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 27)(32, "div", 28)(33, "button", 29);
        \u0275\u0275listener("click", function CritereComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          const addRecord_r2 = \u0275\u0275reference(51);
          return \u0275\u0275resetView(ctx.addRow(addRecord_r2));
        });
        \u0275\u0275elementStart(34, "i", 30);
        \u0275\u0275text(35, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 31);
        \u0275\u0275listener("click", function CritereComponent_Template_button_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteSelected());
        });
        \u0275\u0275elementStart(37, "i", 30);
        \u0275\u0275text(38, "delete");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(39, "ngx-datatable", 32, 0);
        \u0275\u0275listener("select", function CritereComponent_Template_ngx_datatable_select_39_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275element(41, "ngx-datatable-column", 33);
        \u0275\u0275elementStart(42, "ngx-datatable-column", 34);
        \u0275\u0275template(43, CritereComponent_ng_template_43_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "ngx-datatable-column", 36);
        \u0275\u0275template(45, CritereComponent_ng_template_45_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "ngx-datatable-column", 37);
        \u0275\u0275template(47, CritereComponent_ng_template_47_Template, 3, 1, "ng-template", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "ngx-datatable-column", 38);
        \u0275\u0275template(49, CritereComponent_ng_template_49_Template, 5, 0, "ng-template", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(50, CritereComponent_ng_template_50_Template, 35, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(52, CritereComponent_ng_template_52_Template, 41, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275property("hidden", !ctx.isRowSelected);
        \u0275\u0275advance(3);
        \u0275\u0275property("rows", ctx.criteres)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 70)("sortable", false)("draggable", false)("resizeable", false)("canAutoResize", false)("headerCheckboxable", true)("checkboxable", true);
        \u0275\u0275advance();
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CritereComponent, [{
    type: Component,
    args: [{ selector: "app-critere", imports: [
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
    <li class="breadcrumb-item">Critere</li>
  </ul>
  <p class="odl-page-subtitle">D\xE9finissez les crit\xE8res et r\xE8gles utilis\xE9s dans le suivi des activit\xE9s.</p>
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
                          <input placeholder="Search" type="text" class="browser-default search-field"
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
            <ngx-datatable #table class="material" [rows]="criteres" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
              <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"
                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Nom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.libelle}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Intutile">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.intutile}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Point">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.point}}</div>
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
                      <label>Libelle <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Libelle" formControlName="libelle"
                             required>
                      @if (!register.get('libelle')?.valid && register.get('libelle')?.touched) {
                        <small class="form-text text-danger"> Libelle est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Intutile <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Intutile" formControlName="intutile"
                             required>
                      @if (!register.get('intutile')?.valid && register.get('intutile')?.touched) {
                        <small class="form-text text-danger"> Intutile est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Point <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" placeholder="Point" formControlName="point"
                             required>
                      @if (!register.get('point')?.valid && register.get('point')?.touched) {
                        <small class="form-text text-danger"> Point est obligatoire</small>
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
                        {{selectedRowData!.libelle}}
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
                      <label>Libelle <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Libelle" formControlName="libelle"
                             required>
                      @if (!register.get('libelle')?.valid && register.get('libelle')?.touched) {
                        <small class="form-text text-danger"> Libelle est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Intutile <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Intutile" formControlName="intutile"
                             required>
                      @if (!register.get('intutile')?.valid && register.get('intutile')?.touched) {
                        <small class="form-text text-danger"> Intutile est obligatoire</small>
                      }
                    </div>
                    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12 mb-2">
                      <label>Point <span class="text-danger">*</span></label>
                      <input type="number" class="form-control" placeholder="Point" formControlName="point"
                             required>
                      @if (!register.get('point')?.valid && register.get('point')?.touched) {
                        <small class="form-text text-danger"> Point est obligatoire</small>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CritereComponent, { className: "CritereComponent", filePath: "src/app/personnels/critere/critere.component.ts", lineNumber: 31 });
})();
export {
  CritereComponent
};
//# sourceMappingURL=critere.component-VD2LTFP5.js.map
