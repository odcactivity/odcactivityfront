import {
  E,
  autoTable,
  exportToExcel
} from "./chunk-EBP6WBQT.js";
import "./chunk-3G37RPPK.js";
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
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-M24KWC6L.js";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder
} from "./chunk-E4RPKPFV.js";
import "./chunk-OFRCR7EK.js";
import {
  Component,
  NgIf,
  NgZone,
  ViewChild,
  catchError,
  forkJoin,
  map,
  of,
  setClassMetadata,
  switchMap,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FZBB7M2N.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// src/app/personnels/etape/liste-debut/liste-debut.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ListeDebutComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.nom);
  }
}
function ListeDebutComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.prenom);
  }
}
function ListeDebutComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.email);
  }
}
function ListeDebutComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.phone);
  }
}
function ListeDebutComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.genre);
  }
}
function ListeDebutComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.activite.nom);
  }
}
function ListeDebutComponent_ng_template_61_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ListeDebutComponent_ng_template_61_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().row;
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.addToBlacklist(row_r9));
    });
    \u0275\u0275text(1, " Bloquer ");
    \u0275\u0275elementEnd();
  }
}
function ListeDebutComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListeDebutComponent_ng_template_61_button_0_Template, 2, 0, "button", 42);
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", row_r9.activite.createdBy.id == ctx_r9.currentUserId);
  }
}
var ListeDebutComponent = class _ListeDebutComponent {
  constructor(fb, modalService, toastr, glogalService, ngZone, route, router) {
    this.fb = fb;
    this.modalService = modalService;
    this.toastr = toastr;
    this.glogalService = glogalService;
    this.ngZone = ngZone;
    this.route = route;
    this.router = router;
    this.rows = [];
    this.listeDebut = [];
    this.nomEtape = "";
    this.filteredListeDebut = [];
    this.scrollBarHorizontal = window.innerWidth < 1200;
    this.filteredData = [];
    this.loadingIndicator = true;
    this.isRowSelected = false;
    this.reorderable = true;
    this.selected = [];
    this.currentUserId = this.getCurrentUserId();
    this.columns = [
      { prop: "nom" },
      { prop: "prenom" },
      { prop: "email" },
      { prop: "phone" },
      { prop: "genre" },
      { prop: "activite" }
    ];
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
    this.selection = SelectionType.checkbox;
  }
  retour() {
    this.router.navigate(["/etape"]);
  }
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    let liste = navigation?.extras?.state?.["liste"];
    if (!liste) {
      const stored = sessionStorage.getItem("listeDebut");
      liste = stored ? JSON.parse(stored) : null;
    }
    if (!liste) {
      console.warn("\u274C Aucune listeDebut re\xE7ue.");
      this.router.navigate(["/listeGlobale"]);
      return;
    }
    this.afficherParticipantsDepuisListe(liste.id, "debut");
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
  //PERSONNALISER LA FONCTION POUR GERER LES LISTES DEBUT ET RESULTAT 
  //   afficherParticipantsDepuisListe(idListe: number) {
  //   console.log("ID de la liste reçue:", idListe);
  //   this.loadingIndicator = true;
  //   this.glogalService.getId("liste", idListe).pipe(
  //     map((liste: any) => {
  //       console.log("Données liste reçues :", liste);
  //       // Vérification que la liste est bien une "liste début"
  //       if (liste?.listeDebut !== true) {
  //         console.warn("Cette liste n'est pas une liste de début.");
  //         return { participants: [], nomEtape: liste?.etape?.nom ?? "" };
  //       }
  //       // Vérification des participants
  //       if (!liste.participants || liste.participants.length === 0) {
  //         console.warn("Aucun participant dans cette liste.");
  //         return { participants: [], nomEtape: liste?.etape?.nom ?? "" };
  //       }
  //       // Résultat OK
  //       return {
  //         participants: liste.participants,
  //         nomEtape: liste.etape?.nom ?? ""
  //       };
  //     }),
  //     catchError(error => {
  //       console.error("Erreur lors de la récupération de la liste :", error);
  //       return of({ participants: [], nomEtape: "" });
  //     })
  //   )
  //   .subscribe(({ participants, nomEtape }) => {
  //     this.listeDebut = participants;
  //     this.filteredListeDebut = [...participants];
  //     this.filteredData = [...participants];
  //     this.nomEtape = nomEtape;
  //     this.loadingIndicator = false;
  //   });
  // }
  afficherParticipantsDepuisListe(idListe, typeListe) {
    this.loadingIndicator = true;
    this.glogalService.getId("liste", idListe).pipe(switchMap((liste) => {
      const listeFlag = typeListe === "debut" ? liste?.listeDebut : liste?.listeResultat;
      const listeParticipants = liste?.participants;
      if (listeFlag === true && listeParticipants?.length > 0) {
        const participantIds = listeParticipants.map((p) => p.id);
        return forkJoin({
          participants: this.glogalService.get("participant"),
          blacklist: this.glogalService.get("blacklist")
        }).pipe(map(({ participants, blacklist }) => {
          const filtered = participants.filter((p) => participantIds.includes(p.id) && !blacklist.some((b) => b.email === p.email));
          return {
            participants: filtered,
            nomEtape: liste.etape?.nom ?? ""
          };
        }), catchError((error) => {
          console.error("Erreur lors de la r\xE9cup\xE9ration des participants ou blacklist:", error);
          return of({ participants: [], nomEtape: "" });
        }));
      } else {
        console.warn(listeFlag !== true ? "Liste non marqu\xE9e comme active." : "Aucun participant trouv\xE9 pour cette \xE9tape.");
        return of({ participants: [], nomEtape: liste?.etape?.nom ?? "" });
      }
    }), catchError((error) => {
      console.error("Erreur lors de la r\xE9cup\xE9ration de la liste:", error);
      return of({ participants: [], nomEtape: "" });
    })).subscribe(({ participants, nomEtape }) => {
      if (typeListe === "debut") {
        this.listeDebut = participants;
        this.filteredListeDebut = [...participants];
      }
      this.filteredData = [...participants];
      this.nomEtape = nomEtape;
      this.loadingIndicator = false;
    });
  }
  filterDatatable(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.filteredData.filter((item) => {
      return item.nom?.toLowerCase().includes(val) || item.prenom?.toLowerCase().includes(val) || item.email?.toLowerCase().includes(val) || item.phone?.toLowerCase().includes(val) || item.genre?.toLowerCase().includes(val) || item.activite?.nom?.toLowerCase().includes(val);
    });
    this.listeDebut = temp;
    this.table.offset = 0;
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
  addToBlacklist(participant) {
    this.glogalService.post("blacklist", participant).subscribe({
      next: (data) => {
        console.log("Participant ajout\xE9 \xE0 la blacklist:", data);
        this.filteredData = this.filteredData.filter((p) => p.id !== participant.id);
        this.listeDebut = this.listeDebut.filter((p) => p.id !== participant.id);
        this.filteredListeDebut = this.filteredListeDebut.filter((p) => p.id !== participant.id);
        this.showSuccessToast();
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout \xE0 la blacklist:", err);
        this.showErrorToast(err);
      }
    });
  }
  // Fonction pour afficher le toast de succès
  showSuccessToast() {
    const Toast = import_sweetalert2.default.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3e3,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = import_sweetalert2.default.stopTimer;
        toast.onmouseleave = import_sweetalert2.default.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Adjonction r\xE9alis\xE9e avec un succ\xE8s \xE9clatant."
    });
  }
  // Fonction pour afficher un message d'erreur
  showErrorToast(err) {
    let message = "Une erreur est survenue. Veuillez r\xE9essayer.";
    if (err.error?.message) {
      message = err.error.message;
    } else if (err.message) {
      message = err.message;
    }
    import_sweetalert2.default.fire({
      icon: "error",
      title: "\xC9chec",
      text: message,
      confirmButtonText: "Ok",
      customClass: {
        confirmButton: "bg-red-500 text-white hover:bg-red-600"
      }
    });
  }
  exportExcel() {
    const nomActivite = this.listeDebut[0]?.activite?.nom || "Activite_Inconnue";
    const cleanNomActivite = nomActivite.replace(/\s+/g, "_").replace(/[^\w\-]/g, "");
    const cleanNomEtape = this.nomEtape.replace(/\s+/g, "_").replace(/[^\w\-]/g, "");
    const fileName = `Liste_Debut_${cleanNomActivite}_Etape_${cleanNomEtape || "Inconnue"}`;
    exportToExcel(this.listeDebut.map((item) => ({
      Nom: item.nom,
      Prenom: item.prenom,
      Email: item.email,
      Genre: item.genre,
      T\u00E9l\u00E9phone: item.phone,
      Activit\u00E9: item.activite.nom
    })), fileName);
  }
  exportPDF() {
    const doc = new E();
    const title = "Liste debut des Participants";
    doc.setFontSize(16);
    doc.text(title, 14, 15);
    const tableData = this.listeDebut.map((item) => [
      item.nom || "",
      item.prenom || "",
      item.email || "",
      item.genre || "",
      item.phone || "",
      item.activite?.nom || ""
    ]);
    const tableHeaders = ["Nom", "Pr\xE9nom", "Email", "Genre", "T\xE9l\xE9phone", "Activite"];
    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
      // Caster en RowInput pour éviter les erreurs de type
      startY: 20,
      // Positionner le tableau en dessous du titre
      headStyles: {
        fillColor: [255, 165, 0]
        // Couleur de fond de l'en-tête (orange ici)
        // textColor: [255, 255, 255], // Couleur du texte (blanc ici)
        // fontSize: 10, // Taille de la police
        // fontStyle: 'bold' // Style de police (gras ici)
      }
    });
    const cleanNomEtape = this.nomEtape.replace(/\s+/g, "_").replace(/[^\w\-]/g, "");
    const nomActivite = this.listeDebut[0]?.activite?.nom || "Activite_Inconnue";
    const cleanNomActivite = nomActivite.replace(/\s+/g, "_").replace(/[^\w\-]/g, "");
    doc.save(`Liste_Debut_${cleanNomActivite}_Etape_${cleanNomEtape || "Inconnue"}.pdf`);
  }
  static {
    this.\u0275fac = function ListeDebutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListeDebutComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListeDebutComponent, selectors: [["app-liste-debut"]], viewQuery: function ListeDebutComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(DatatableComponent, 5);
        \u0275\u0275viewQuery(DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table2 = _t.first);
      }
    }, decls: 62, vars: 17, consts: [["table", ""], [1, "main-content"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title", "m-b-0"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboardActivite"], [1, "fas", "fa-home", "font-17"], [1, "odl-page-subtitle"], [1, "section-body"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "p-10"], [1, "row"], [1, "col-lg-6"], [1, "row", "m-0"], [1, "col-auto", "p-0"], [1, "ngxTableHeader"], [1, "table-title"], [1, "col-lg-8", "p-0"], [1, "table-search-area"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Recherche", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons-left"], [1, "tbl-btn-style"], [1, "btn", "btn-icon", "icon-left", "bg-dark", "text-white", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "btn", "btn-icon", "icon-left", "bg-warning", "text-white", 3, "click"], [1, "fas", "fa-file-excel"], [1, "fas", "fa-file-pdf"], ["columnMode", "force", "rowHeight", "auto", 1, "material", 3, "select", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "scrollbarH", "reorderable", "selected", "selectionType"], ["name", "Nom", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Prenom", 3, "width"], ["name", "Email", 3, "width"], ["name", "Phone", 3, "width"], ["name", "Genre", 3, "width"], ["name", "Activite", 3, "width"], ["name", "Actions", 3, "sortable"], [1, "name-col-style"], ["class", "btn btn-danger align-items-center", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "align-items-center", 3, "click"]], template: function ListeDebutComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 1)(1, "ul", 2)(2, "li", 3)(3, "h5", 4);
        \u0275\u0275text(4, "Table");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "li", 5)(6, "a", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 3);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, "Suivez les participants au d\xE9but des activit\xE9s selon vos filtres.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "div", 18);
        \u0275\u0275element(22, "div", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 20)(24, "div", 18)(25, "div", 21)(26, "div")(27, "label", 22)(28, "i", 23);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 24);
        \u0275\u0275listener("keyup", function ListeDebutComponent_Template_input_keyup_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterDatatable($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 25)(32, "div", 26)(33, "button", 27);
        \u0275\u0275listener("click", function ListeDebutComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.retour());
        });
        \u0275\u0275element(34, "i", 28);
        \u0275\u0275text(35, " Retour ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 25)(37, "div", 26)(38, "button", 29);
        \u0275\u0275listener("click", function ListeDebutComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportExcel());
        });
        \u0275\u0275element(39, "i", 30);
        \u0275\u0275text(40, " Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 25)(42, "div", 26)(43, "button", 27);
        \u0275\u0275listener("click", function ListeDebutComponent_Template_button_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exportPDF());
        });
        \u0275\u0275element(44, "i", 31);
        \u0275\u0275text(45, " Pdf ");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(46, "ngx-datatable", 32, 0);
        \u0275\u0275listener("select", function ListeDebutComponent_Template_ngx_datatable_select_46_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelect($event));
        });
        \u0275\u0275elementStart(48, "ngx-datatable-column", 33);
        \u0275\u0275template(49, ListeDebutComponent_ng_template_49_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "ngx-datatable-column", 35);
        \u0275\u0275template(51, ListeDebutComponent_ng_template_51_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "ngx-datatable-column", 36);
        \u0275\u0275template(53, ListeDebutComponent_ng_template_53_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "ngx-datatable-column", 37);
        \u0275\u0275template(55, ListeDebutComponent_ng_template_55_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "ngx-datatable-column", 38);
        \u0275\u0275template(57, ListeDebutComponent_ng_template_57_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "ngx-datatable-column", 39);
        \u0275\u0275template(59, ListeDebutComponent_ng_template_59_Template, 3, 1, "ng-template", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "ngx-datatable-column", 40);
        \u0275\u0275template(61, ListeDebutComponent_ng_template_61_Template, 1, 1, "ng-template", 34);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("Liste debut ", ctx.nomEtape, "");
        \u0275\u0275advance(37);
        \u0275\u0275property("rows", ctx.filteredListeDebut)("loadingIndicator", ctx.loadingIndicator)("headerHeight", 60)("footerHeight", 80)("limit", 10)("scrollbarH", ctx.scrollBarHorizontal)("reorderable", ctx.reorderable)("selected", ctx.selected)("selectionType", ctx.selection);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 200);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 150);
        \u0275\u0275advance(2);
        \u0275\u0275property("width", 150);
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
      NgIf
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListeDebutComponent, [{
    type: Component,
    args: [{ selector: "app-liste-debut", imports: [
      FormsModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      RouterLink,
      NgIf
    ], standalone: true, template: `<section class="main-content">
  <ul class="breadcrumb breadcrumb-style ">
    <li class="breadcrumb-item">
      <h5 class="page-title m-b-0">Table</h5>
    </li>
    <li class="breadcrumb-item bcrumb-1">
      <a routerLink="/dashboardActivite">
        <i class="fas fa-home font-17"></i></a>
    </li>
    <li class="breadcrumb-item">Liste debut {{ nomEtape }}</li>
  </ul>
  <p class="odl-page-subtitle">Suivez les participants au d\xE9but des activit\xE9s selon vos filtres.</p>
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
                          <button class="btn btn-icon icon-left bg-dark text-white" (click)='retour()'>
                            <i class="fas fa-arrow-left"></i>
                            Retour
                          </button>
                        </div>
                      </div>
                      <div class="header-buttons-left">
                        <div class="tbl-btn-style">
                          <button class="btn btn-icon icon-left bg-warning text-white" (click)='exportExcel()' >
                            <i class="fas fa-file-excel"></i>
                            Excel
                          </button>
                        </div>
                      </div>
                      <div class="header-buttons-left">
                        <div class="tbl-btn-style">
                          <button class="btn btn-icon icon-left bg-dark text-white" (click)='exportPDF()'>
                            <i class="fas fa-file-pdf"></i>
                            Pdf
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ngx-datatable #table class="material" [rows]="filteredListeDebut" [loadingIndicator]="loadingIndicator"
                           columnMode="force" [headerHeight]="60" [footerHeight]="80" rowHeight="auto" [limit]="10"
                           [scrollbarH]="scrollBarHorizontal" [reorderable]="reorderable" [selected]="selected"
                           [selectionType]="selection" (select)='onSelect($event)'>
<!--              <ngx-datatable-column [width]="70" [sortable]="false" [draggable]="false" [resizeable]="false"-->
<!--                                    [canAutoResize]="false" [headerCheckboxable]="true" [checkboxable]="true">-->
<!--              </ngx-datatable-column>-->
              <ngx-datatable-column [width]="200" name="Nom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Prenom">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.prenom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="150" name="Email">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.email}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="150" name="Phone">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.phone}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Genre">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.genre}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column [width]="200" name="Activite">
                <ng-template let-row="row" let-value="value" let-i="index" ngx-datatable-cell-template>
                  <div class="name-col-style">
                    <div>{{row.activite.nom}}</div>
                  </div>
                </ng-template>
              </ngx-datatable-column>
              <ngx-datatable-column name="Actions" [sortable]="false">
                <ng-template let-value="value" let-row="row" let-rowNom let-rowIndex="rowIndex" ngx-datatable-cell-template>
<!--                  <span>-->
<!--                    <button class="btn btn-tbl-edit h-auto" (click)='editRow(row, rowIndex, editRecord)'>-->
<!--                      <i class="fas fa-pen"></i>-->
<!--                    </button>-->
                  <button *ngIf="row.activite.createdBy.id==currentUserId" class="btn btn-danger align-items-center" (click)="addToBlacklist(row)">
                    Bloquer
                  </button>
<!--                  </span>-->
                </ng-template>
              </ngx-datatable-column>
            </ngx-datatable>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

` }]
  }], () => [{ type: UntypedFormBuilder }, { type: NgbModal }, { type: ToastrService }, { type: GlobalService }, { type: NgZone }, { type: ActivatedRoute }, { type: Router }], { table: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }], table2: [{
    type: ViewChild,
    args: [DatatableComponent, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListeDebutComponent, { className: "ListeDebutComponent", filePath: "src/app/personnels/etape/liste-debut/liste-debut.component.ts", lineNumber: 31 });
})();
export {
  ListeDebutComponent
};
//# sourceMappingURL=liste-debut.component-YGF4U3DO.js.map
