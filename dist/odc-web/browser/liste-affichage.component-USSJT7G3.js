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
  NgxDatatableModule
} from "./chunk-SZISJO2U.js";
import {
  GlobalService
} from "./chunk-MSIIP23R.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-M24KWC6L.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  Component,
  DatePipe,
  NgIf,
  NgZone,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-FZBB7M2N.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/etape/liste-affichage/liste-affichage.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ListeAffichageComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.etape.nom);
  }
}
function ListeAffichageComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, row_r3.dateHeure, "dd/MM/yyyy HH:mm"));
  }
}
function ListeAffichageComponent_ng_template_43_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ListeAffichageComponent_ng_template_43_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const row_r6 = \u0275\u0275nextContext().row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.openListeResultat(row_r6));
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, " Voir liste ");
    \u0275\u0275elementEnd();
  }
}
function ListeAffichageComponent_ng_template_43_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ListeAffichageComponent_ng_template_43_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r6 = \u0275\u0275nextContext().row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.openListeDebut(row_r6));
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, " Voir liste ");
    \u0275\u0275elementEnd();
  }
}
function ListeAffichageComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, ListeAffichageComponent_ng_template_43_button_1_Template, 3, 0, "button", 35)(2, ListeAffichageComponent_ng_template_43_button_2_Template, 3, 0, "button", 35);
    \u0275\u0275elementStart(3, "button", 36);
    \u0275\u0275listener("click", function ListeAffichageComponent_ng_template_43_Template_button_click_3_listener() {
      const row_r6 = \u0275\u0275restoreView(_r4).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.deleteSingleRow(row_r6));
    });
    \u0275\u0275element(4, "i", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.listeResultat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.listeDebut);
  }
}
var ListeAffichageComponent = class _ListeAffichageComponent {
  constructor(globalService, ngZone, modalService, toastr, route, router, glogalService) {
    this.globalService = globalService;
    this.ngZone = ngZone;
    this.modalService = modalService;
    this.toastr = toastr;
    this.route = route;
    this.router = router;
    this.glogalService = glogalService;
    this.listes = [];
    this.filteredListes = [];
    this.rows = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.columns = [
      { prop: "etape" },
      { prop: "dateHeure" }
    ];
  }
  retour() {
    this.router.navigate(["/etape"]);
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
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    this.listes = this.filteredData.filter((item) => {
      return Object.values(item).some((field) => field?.toString().toLowerCase().includes(val));
    });
    this.table.offset = 0;
  }
  ngOnInit() {
    this.getAllListe();
    this.route.queryParams.subscribe((params) => {
      if (params["filter"]) {
        this.applyFilter(params["filter"]);
      }
    });
  }
  getAllListe() {
    this.globalService.get("liste").subscribe({
      next: (value) => {
        this.ngZone.run(() => {
          this.listes = value;
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          const currentFilter = this.route.snapshot.queryParams["filter"] || "all";
          this.applyFilter(currentFilter);
        });
      },
      error: (err) => {
        console.error("Erreur lors de la r\xE9cup\xE9ration des donn\xE9es:", err);
      }
    });
  }
  applyFilter(filter) {
    switch (filter) {
      case "debut":
        this.filteredListes = this.listes.filter((liste) => liste.listeDebut);
        break;
      case "resultat":
        this.filteredListes = this.listes.filter((liste) => liste.listeResultat);
        break;
      case "all":
      default:
        this.filteredListes = [...this.listes];
        break;
    }
  }
  openListeDebut(row) {
    sessionStorage.setItem("listeDebut", JSON.stringify(row));
    this.router.navigate(["/listeDebut"]);
  }
  openListeResultat(row) {
    sessionStorage.setItem("listeResultat", JSON.stringify(row));
    this.router.navigate(["/listeResultat"]);
  }
  deleteSelected() {
    import_sweetalert2.default.fire({
      title: "Voulez vous vraiment supprimer?",
      showCancelButton: true,
      confirmButtonColor: "#8963ff",
      cancelButtonColor: "#fb7823",
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
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
    this.glogalService.delete("liste", row.id).subscribe({
      next: (response) => {
        this.listes = response;
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        this.getAllListe();
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
    this.toastr.success(count + "Eradication diligente pleinement consomm\xE9e.", "");
  }
  static {
    this.\u0275fac = function ListeAffichageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListeAffichageComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(GlobalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListeAffichageComponent, selectors: [["app-liste-affichage"]], viewQuery: function ListeAffichageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 44, vars: 12, consts: [["table", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], [1, "btn", "btn-dark", 3, "click"], [1, "fas", "fa-arrow-left"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Date Heure", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "name-col-style"], ["class", "btn btn-dark h-auto", 3, "click", 4, "ngIf"], [1, "btn", "btn-tbl-delete", "h-auto", 3, "click"], [1, "far", "fa-trash-alt"], [1, "btn", "btn-dark", "h-auto", 3, "click"], [1, "fas", "fa-eye"]], template: function ListeAffichageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 1)(1, "ul", 2)(2, "li", 3)(3, "h5", 4);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 5)(6, "a", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3);
        \u0275\u0275text(9, "Liste");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, "Visualisez les listes et les affichages configur\xE9s pour les \xE9tapes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18);
        \u0275\u0275element(22, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 20)(24, "div", 18)(25, "div", 21)(26, "div")(27, "label", 22)(28, "i", 23);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 24);
        \u0275\u0275listener("keyup", function ListeAffichageComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 25)(32, "div", 26)(33, "button", 27);
        \u0275\u0275listener("click", function ListeAffichageComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.retour());
        });
        \u0275\u0275element(34, "i", 28);
        \u0275\u0275text(35, " Retour ");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(36, "ngx-datatable", 29, 0);
        \u0275\u0275listener("select", function ListeAffichageComponent_Template_ngx_datatable_select_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275elementStart(38, "ngx-datatable-column", 30);
        \u0275\u0275template(39, ListeAffichageComponent_ng_template_39_Template, 3, 1, "ng-template", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "ngx-datatable-column", 32);
        \u0275\u0275template(41, ListeAffichageComponent_ng_template_41_Template, 4, 4, "ng-template", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "ngx-datatable-column", 33);
        \u0275\u0275template(43, ListeAffichageComponent_ng_template_43_Template, 5, 2, "ng-template", 31);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275property("rows", ctx.filteredListes)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("sortable", false);
      }
    }, dependencies: [
      FormsModule,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnCellDirective,
      ReactiveFormsModule,
      RouterLink,
      DatePipe,
      NgIf
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListeAffichageComponent, [{
    type: Component,
    args: [{ selector: "app-liste-affichage", imports: [
      FormsModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      RouterLink,
      DatePipe,
      NgIf
    ], template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style ">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-home font-17"></i></a>
    </li>
    <li class="breadcrumb-item">Liste</li>
  </ul>
  <p class="odl-page-subtitle">Visualisez les listes et les affichages configur\xE9s pour les \xE9tapes.</p>
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
<!--                          <button class="btn btn-icon icon-left bg-warning text-white rounded-button" (click)='addRow(addRecord)'>-->
<!--                            <i class="material-icons">add</i>-->
<!--                          </button>-->
                          <button class="btn btn-dark" (click)="retour()">
                            <i class="fas fa-arrow-left"></i>
                            Retour
                          </button>
                          <!--<button [hidden]=!isRowSelected class="btn btn-icon icon-left btn-danger rounded-button"
                                  (click)='retour()'>
                            <i class="material-icons">delete</i>
                          </button>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ngx-datatable #table class="material" [rows]="filteredListes" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
<!--              <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"-->
<!--                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">-->
<!--              </ngx-datatable-column>-->
              <ngx-datatable-column [width]="200" name="Nom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.etape.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Date Heure">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{ row.dateHeure | date:'dd/MM/yyyy HH:mm' }}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>

              <ngx-datatable-column name="Actions" [sortable]="false">
                <ng-template let-value="value" let-row="row" let-rowNom let-rowIndex="rowIndex" ngx-datatable-cell-template>
                  <span>

<!--                     <button *ngIf="row.listeResultat" [routerLink]="['/listeReslustat', row.id]" class="btn btn-dark h-auto">-->
                    <button *ngIf="row.listeResultat" (click)="openListeResultat(row)" class="btn btn-dark h-auto">

                        <i class="fas fa-eye"></i>
                        Voir liste
                    </button>

                    <button *ngIf="row.listeDebut" (click)="openListeDebut(row)" class="btn btn-dark h-auto">
                      <i class="fas fa-eye"></i>
                      Voir liste
                    </button>

                    <button class="btn btn-tbl-delete h-auto" (click)='deleteSingleRow(row)'>
                      <i class="far fa-trash-alt"></i>
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
  <!--  <app-liste-globale></app-liste-globale>-->
</section>

` }]
  }], () => [{ type: GlobalService }, { type: NgZone }, { type: NgbModal }, { type: ToastrService }, { type: ActivatedRoute }, { type: Router }, { type: GlobalService }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListeAffichageComponent, { className: "ListeAffichageComponent", filePath: "src/app/personnels/etape/liste-affichage/liste-affichage.component.ts", lineNumber: 26 });
})();
export {
  ListeAffichageComponent
};
//# sourceMappingURL=liste-affichage.component-USSJT7G3.js.map
