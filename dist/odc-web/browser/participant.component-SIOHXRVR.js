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
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgIf,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-FZBB7M2N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/participant/participant.component.ts
var _c0 = (a0) => ({ "blacklisted": a0 });
function ParticipantComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, row_r2.isBlacklisted));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.nom, " ");
  }
}
function ParticipantComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.prenom);
  }
}
function ParticipantComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, row_r4.isBlacklisted));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.email);
  }
}
function ParticipantComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, row_r5.isBlacklisted));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.phone);
  }
}
function ParticipantComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, row_r6.isBlacklisted));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.activite == null ? null : row_r6.activite.nom);
  }
}
function ParticipantComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "strong");
    \u0275\u0275text(2, "Cr\xE9ateur de l'activit\xE9 :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r6.createurActivite.nom, " ", ctx_r6.createurActivite.prenom, " ");
  }
}
var ParticipantComponent = class _ParticipantComponent {
  constructor(fb, modalService, toastr, globalService) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.globalService = globalService;
    this.participants = [];
    this.filteredData = [];
    this.filteredParticipants = [];
    this.blacklistedEmails = [];
    this.blacklistedPhones = [];
    this.loadingIndicator = true;
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.reorderable = true;
    this.isRowSelected = false;
    this.selected = [];
    this.getRowClass = (row) => ({
      "blacklisted-row": row.isBlacklisted === true
    });
    this.selection = SelectionType.checkbox;
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }
  ngOnInit() {
    this.initForms();
    this.loadData();
  }
  // =============================
  // INITIALISATION DES FORMULAIRES
  // =============================
  initForms() {
    this.register = this.fb.group({
      id: [""],
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      genre: ["", Validators.required]
    });
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      prenom: new UntypedFormControl(),
      email: new UntypedFormControl(),
      phone: new UntypedFormControl(),
      genre: new UntypedFormControl()
    });
  }
  // =============================
  // CHARGEMENT GLOBAL
  // =============================
  loadData() {
    this.loadingIndicator = true;
    this.globalService.get("blacklist").subscribe({
      next: (blacklist) => {
        this.blacklistedEmails = blacklist.map((item) => item.email?.toLowerCase());
        this.blacklistedPhones = blacklist.map((item) => item.phone);
        this.getAllParticipant();
      },
      error: () => {
        this.toastr.error("Erreur lors du chargement de la blacklist.");
        this.loadingIndicator = false;
      }
    });
  }
  // =============================
  // RÉCUPÉRATION PARTICIPANTS
  // =============================
  getAllParticipant() {
    this.globalService.get("participant").subscribe({
      next: (value) => {
        this.participants = value.map((participant) => __spreadProps(__spreadValues({}, participant), {
          isBlacklisted: this.checkIfBlacklisted(participant)
        }));
        this.filteredData = [...this.participants];
        if (this.participants.length > 0 && this.participants[0].activite?.createdBy) {
          this.createurActivite = {
            nom: this.participants[0].activite.createdBy.nom,
            prenom: this.participants[0].activite.createdBy.prenom
          };
        }
        this.loadingIndicator = false;
      },
      error: () => {
        this.toastr.error("Erreur lors de la r\xE9cup\xE9ration des participants.");
        this.loadingIndicator = false;
      }
    });
  }
  // =============================
  // FILTRE RECHERCHE
  // =============================
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    this.participants = this.filteredData.filter((item) => Object.values(item).some((field) => field?.toString().toLowerCase().includes(val)));
    if (this.table)
      this.table.offset = 0;
  }
  // =============================
  // SÉLECTION TABLEAU
  // =============================
  onSelect({ selected }) {
    this.selected = [...selected];
    this.isRowSelected = this.selected.length > 0;
  }
  // =============================
  // CHECK BLACKLIST
  // =============================
  checkIfBlacklisted(participant) {
    const emailBlacklisted = participant.email && this.blacklistedEmails.includes(participant.email.toLowerCase());
    const phoneBlacklisted = participant.phone && this.blacklistedPhones.includes(participant.phone);
    return !!emailBlacklisted || !!phoneBlacklisted;
  }
  static {
    this.\u0275fac = function ParticipantComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParticipantComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParticipantComponent, selectors: [["app-participant"]], viewQuery: function ParticipantComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
      }
    }, decls: 39, vars: 23, consts: [["table", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row", "mb-3"], [1, "col-lg-6"], [1, "ngxTableHeader"], [1, "table-search-area", "mr-4"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Recherche", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType", "rowClass"], [3, "width", "sortable", "draggable", "resizeable", "canAutoResize", "headerCheckboxable", "checkboxable"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Prenom", 3, "width"], ["name", "Email", 3, "width"], ["name", "Portable", 3, "width"], ["name", "Activit\xE9", 3, "width"], ["class", "mt-3 p-3 bg-light border rounded", 4, "ngIf"], [3, "ngClass"], [1, "mt-3", "p-3", "bg-light", "border", "rounded"]], template: function ParticipantComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 1)(1, "ul", 2)(2, "li", 3)(3, "h5", 4);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 5)(6, "a", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3);
        \u0275\u0275text(9, "Participant");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, "Consultez et g\xE9rez les participants associ\xE9s aux activit\xE9s.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "label", 18)(22, "i", 19);
        \u0275\u0275text(23, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "input", 20);
        \u0275\u0275listener("keyup", function ParticipantComponent_Template_input_keyup_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "ngx-datatable", 21, 0);
        \u0275\u0275listener("select", function ParticipantComponent_Template_ngx_datatable_select_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275element(27, "ngx-datatable-column", 22);
        \u0275\u0275elementStart(28, "ngx-datatable-column", 23);
        \u0275\u0275template(29, ParticipantComponent_ng_template_29_Template, 2, 4, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "ngx-datatable-column", 25);
        \u0275\u0275template(31, ParticipantComponent_ng_template_31_Template, 2, 1, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "ngx-datatable-column", 26);
        \u0275\u0275template(33, ParticipantComponent_ng_template_33_Template, 2, 4, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "ngx-datatable-column", 27);
        \u0275\u0275template(35, ParticipantComponent_ng_template_35_Template, 2, 4, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ngx-datatable-column", 28);
        \u0275\u0275template(37, ParticipantComponent_ng_template_37_Template, 2, 4, "ng-template", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, ParticipantComponent_div_38_Template, 4, 2, "div", 29);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(25);
        \u0275\u0275property("rows", ctx.participants)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 60)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection)("rowClass", ctx.getRowClass);
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
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.createurActivite);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      FormsModule,
      ReactiveFormsModule,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnCellDirective,
      RouterLink
    ], styles: ['@charset "UTF-8";\n\n\n\n.blacklisted[_ngcontent-%COMP%] {\n  background-color: #ffdddd !important;\n  color: #b30000 !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=participant.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParticipantComponent, [{
    type: Component,
    args: [{ selector: "app-participant", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgxDatatableModule,
      RouterLink,
      NgClass
    ], template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-home font-17"></i>
      </a>
    </li>
    <li class="breadcrumb-item">Participant</li>
  </ul>

  <p class="odl-page-subtitle">Consultez et g\xE9rez les participants associ\xE9s aux activit\xE9s.</p>

  <div class="section-body">
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="p-10">

            <!-- Barre de recherche -->
            <div class="row mb-3">
              <div class="col-lg-6">
                <div class="ngxTableHeader">
                  <div class="table-search-area mr-4">
                    <label for="search-input"><i class="material-icons search-icon">search</i></label>
                    <input
                      type="text"
                      placeholder="Recherche"
                      class="browser-default search-field"
                      (keyup)="filterDatatable($event)"
                      aria-label="Search box"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Tableau des participants -->
            <ngx-datatable
              #table
              class="material"
              [rows]="participants"
              [loadingIndicator]="loadingIndicator"
              columnMode="force"
              [headerHeight]="60"
              [footerHeight]="60"
              rowHeight="auto"
              [limit]="10"
              [scrollbarH]="scrollBarHorizontal"
              [reorderable]="reorderable"
              [selected]="selected"
              [selectionType]="selection"
              (select)="onSelect($event)"
              [rowClass]="getRowClass"
            >
              <ngx-datatable-column
                [width]="70"
                [sortable]="false"
                [draggable]="false"
                [resizeable]="false"
                [canAutoResize]="false"
                [headerCheckboxable]="true"
                [checkboxable]="true"
              >
              </ngx-datatable-column>

              <ngx-datatable-column [width]="200" name="Nom">
                <ng-template let-row="row" ngx-datatable-cell-template>
                  <div [ngClass]="{'blacklisted': row.isBlacklisted}">
                    {{ row.nom }}
                  </div>
                </ng-template>
              </ngx-datatable-column>

              <ngx-datatable-column [width]="200" name="Prenom">
                <ng-template let-row="row" ngx-datatable-cell-template>
                  <div>{{ row.prenom }}</div>
                </ng-template>
              </ngx-datatable-column>

              <ngx-datatable-column [width]="200" name="Email">
                <ng-template let-row="row" ngx-datatable-cell-template>
                  <div [ngClass]="{'blacklisted': row.isBlacklisted}">{{ row.email }}</div>
                </ng-template>
              </ngx-datatable-column>

              <ngx-datatable-column [width]="200" name="Portable">
                <ng-template let-row="row" ngx-datatable-cell-template>
                  <div [ngClass]="{'blacklisted': row.isBlacklisted}">{{ row.phone }}</div>
                </ng-template>
              </ngx-datatable-column>

              <ngx-datatable-column [width]="200" name="Activit\xE9">
                <ng-template let-row="row" ngx-datatable-cell-template>
                  <div [ngClass]="{'blacklisted': row.isBlacklisted}">{{ row.activite?.nom }}</div>
                </ng-template>
              </ngx-datatable-column>
              
            </ngx-datatable>

            <!-- Cr\xE9ateur de l'activit\xE9 (footer) -->
            <div class="mt-3 p-3 bg-light border rounded" *ngIf="createurActivite">
              <strong>Cr\xE9ateur de l'activit\xE9 :</strong>
              {{ createurActivite.nom }} {{ createurActivite.prenom }}
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`, styles: ['@charset "UTF-8";\n\n/* src/app/personnels/participant/participant.component.scss */\n.blacklisted {\n  background-color: #ffdddd !important;\n  color: #b30000 !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=participant.component.css.map */\n'] }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParticipantComponent, { className: "ParticipantComponent", filePath: "src/app/personnels/participant/participant.component.ts", lineNumber: 27 });
})();
export {
  ParticipantComponent
};
//# sourceMappingURL=participant.component-SIOHXRVR.js.map
