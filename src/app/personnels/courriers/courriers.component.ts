import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core';
import { Activity } from '@core/models/Activity';
import { ActivitySupports } from '@core/models/ActivitySupports';
import { Entite } from '@core/models/Entite';
import { Salle } from '@core/models/Salle';
import { Utilisateur } from '@core/models/Utilisateur.model';
import { GlobalService } from '@core/service/global.service';
import { SupportactivityService } from '@core/service/supportactivity.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ValidationCourriersDirecteurComponent } from '../../directeur-odc/validation-courriers-directeur/validation-courriers-directeur.component';
import { structureCourriersPathForRoles } from '@core/utils/app-roles';
import { activitesPathForRoles } from '@core/utils/responsable-entite-config';

interface selectActivitySupportInterface {
  id: number;
  numero: string;
  objet: string;
  expediteur: string;
  dateReception: Date;
  dateLimite: Date;
  url?: string;
  statut?: string;
}

@Component({
  selector: 'app-courriers',
  imports: [NgxDatatableModule, CommonModule, ReactiveFormsModule, FormsModule, ValidationCourriersDirecteurComponent],
  templateUrl: './courriers.component.html',
  styleUrl: './courriers.component.scss'
})
export class CourriersComponent {

  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
  @ViewChild(ValidationCourriersDirecteurComponent) validationDirecteurOdc?: ValidationCourriersDirecteurComponent;

selectedCourrier: any;

reponse = {
  emailExpediteur: '',
  objet: '',
  message: '',
  fichier: null,
  attachments: []
};

loading = false;

  @ViewChild('repondreCourrierModal') repondreCourrierModal!: TemplateRef<any>;
  @ViewChild('transmitOdcModal') transmitOdcModal!: TemplateRef<any>;
  @ViewChild('addDcireExterne') addDcireExterne!: TemplateRef<any>;
  
  entites: Entite[] = [];
  directions: Entite[] = [];
  services: Entite[] = [];
  servicesOfDirection: Entite[] = [];
  selectedDirection: Entite | null = null;
  personnel: any = undefined;
  entiteCible: any = undefined;
  Historiques: any[] = [];
  
  rows = [];
  salles: Salle[] = [];
  Activitys: Activity[] = [];
  ActivitySupport: ActivitySupports[] = [];
  Courriers: any[] = [];
  typeliste: string = 'tous';
  ActivitySupportOnglets: any[] = [];
  Utilisateurs: Utilisateur[] = [];
  selectedFile: File | null = null;
  listType: string = '1';
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData!: selectActivitySupportInterface;
  @ViewChild('editCourrierMetaTpl') editCourrierMetaTpl!: TemplateRef<unknown>;
  editCourrierMeta = { numero: '', objet: '', expediteur: '' };
  filteredData: any[] = [];
  editForm: UntypedFormGroup;
  register!: UntypedFormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  reorderable = true;
  public selected: number[] = [];
  
  // Solution temporaire : suivre les courriers répondus localement
  courriersRepondusLocalement: number[] = [];
  currenUserData: any;
  taille: any = "";

  /** Hub DCIRE : même rôle JWT « DIRECTEUR » que les autres directions ; le périmètre courrier suit la logique DCIRE côté API / entités. */
  isDcireRole = false;
  /** Admin courrier (onglet validation, pas le directeur ODC seul). */
  isAdminCourrierRole = false;
  /** Direction ODC (validation transmission) — admin + directeur ODC */
  isSuperAdminRole = false;
  /** Directeur produit ODC : bloc validation intégré sur cette page */
  isDirecteurOdcRole = false;
  /** Admin + directeur ODC : mêmes onglets courrier (reçus / non répondus / répondus). */
  isOdcProductCourrierRole = false;
  odcDirections: Entite[] = [];
  /** Fondation, RSE, DCI, etc. — réception à la DCIRE */
  externalDirections: Entite[] = [];
  /** Cibles internes division pour brouillon ODC (sans hub DCIRE). */
  ciblesInternesBrouillon: Entite[] = [];
  ciblesEmissionDcire: Entite[] = [];
  dcireDirectionId: number | null = null;
  /** Filtre DCIRE par entité (direction ou service ODC). */
  dcireEntiteFilterId: number | null = null;
  dcireEntiteOptions: { id: number; nom: string }[] = [];
  /** Liste brute côté DCIRE (filtrée par onglet) */
  private courriersDcireBruts: any[] = [];
  transmitOdcDirectionId: number | null = null;
  registerExterne!: UntypedFormGroup;
  
  columns = [
    { prop: 'nom' },
    { prop: 'capacite' },
  ];

  @ViewChild(DatatableComponent, { static: false }) table2!: DatatableComponent;
  selection!: SelectionType;
  
  constructor(
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private glogalService: GlobalService,
    private authService: AuthService,
    private supportactivityService: SupportactivityService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      statut: new UntypedFormControl(),
      commentaire: new UntypedFormControl(),
      idutilisateur: new UntypedFormControl(),
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
    this.selection = SelectionType.checkbox;
  }

  

  onSelect({ selected }: { selected: any }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if (this.selected.length === 0) {
      this.isRowSelected = false;
    } else {
      this.isRowSelected = true;
    }
  }

  peutModifierMetadonneesCourrier(row: { statut?: string }): boolean {
    if (!row || row.statut === 'ARCHIVER') {
      return false;
    }
    return this.isSuperAdminRole || this.isDcireRole;
  }

  openEditCourrierMetaModal(row: selectActivitySupportInterface): void {
    this.selectedRowData = row;
    this.editCourrierMeta = {
      numero: String(row.numero ?? ''),
      objet: String(row.objet ?? ''),
      expediteur: String(row.expediteur ?? ''),
    };
    this.modalService.open(this.editCourrierMetaTpl, { size: 'lg', scrollable: true });
  }

  saveCourrierMeta(modal: { close: () => void }): void {
    if (!this.selectedRowData?.id) {
      return;
    }
    const b = this.editCourrierMeta;
    if (!b.numero?.trim() || !b.objet?.trim() || !b.expediteur?.trim()) {
      this.toastr.warning('Renseignez numéro, objet et expéditeur.');
      return;
    }
    this.glogalService
      .patchCourrierMetadonnees(this.selectedRowData.id, {
        numero: b.numero.trim(),
        objet: b.objet.trim(),
        expediteur: b.expediteur.trim(),
      })
      .subscribe({
        next: () => {
          this.toastr.success('Courrier mis à jour.');
          modal.close();
          if (this.isDcireRole) {
            this.refreshCourriersDcire();
          } else {
            this.getCourrierByEntite();
          }
        },
        error: () => this.toastr.error('Modification impossible.'),
      });
  }

  deleteSelected() {
    Swal.fire({
      title: 'Voulez vous vraiment supprimer?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Oui',
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
    const r = (this.authService.getCurrentUserFromStorage()?.roles || []).map((x) =>
      String(x).trim().toUpperCase()
    );
    if (r.includes('PERSONNEL')) {
      this.router.navigate(['/dashboardActivite'], { replaceUrl: true });
      return;
    }
    const responsableActivites = activitesPathForRoles(r);
    if (responsableActivites) {
      this.router.navigate([responsableActivites], { replaceUrl: true });
      return;
    }
    if (r.includes('SUPERADMIN') || r.includes('ADMIN')) {
      this.router.navigate(['/dashboard/main'], { replaceUrl: true });
      return;
    }
    const structurePath = structureCourriersPathForRoles(r);
    if (structurePath) {
      this.router.navigate([structurePath], { replaceUrl: true });
      return;
    }

    if (this.isDcireRole) {
      this.typeliste = 'emis';
    } else {
      this.typeliste = 'recus';
    }

    this.register = this.fb.group({
      numero: ['', [Validators.required]],
      objet: ['', [Validators.required]],
      expediteur: ['', [Validators.required]],
      fichier: [''],
      odcDirectionId: [null as number | null],
      fluxVers: ['interne', [Validators.required]],
      cibleInterneDirectionId: [null as number | null, [Validators.required]],
      externePrecision: [''],
    });

    /** Expéditeur officiel des courriers sortants DCIRE (figé). */
    this.registerExterne = this.fb.group({
      cibleDirectionId: [null, [Validators.required]],
      objet: ['', [Validators.required]],
      expediteur: [{ value: 'KEÏTA DCIRE', disabled: false }],
      fichier: [''],
    });

    this.register.get('odcDirectionId')?.valueChanges.subscribe((v) => {
      this.refreshCiblesInternesBrouillon(v);
      this.register.patchValue({ cibleInterneDirectionId: null }, { emitEvent: false });
    });
    this.register.get('fluxVers')?.valueChanges.subscribe((v) => {
      const c = this.register.get('cibleInterneDirectionId');
      if (c) {
        if (v === 'externe') {
          c.clearValidators();
          this.register.patchValue({ cibleInterneDirectionId: null }, { emitEvent: false });
        } else {
          c.setValidators([Validators.required]);
        }
        c.updateValueAndValidity({ emitEvent: false });
      }
    });
    this.applyFluxValidatorsForRegister();

    this.getAllEntite();
    this.getUtilisateur();

    const userString = localStorage.getItem('currentUser');
    if (userString) {
      const user = JSON.parse(userString);
      const token = user.bearer;
      if (token) {
        const decoded = this.authService.getDecodedToken(token);
        this.currenUserData = decoded;
      }
    }

    const rawRoles = this.authService.getCurrentUserFromStorage()?.roles || [];
    const roles = rawRoles.map((r: string) => String(r).trim().toUpperCase());
    this.isDcireRole = roles.includes('DIRECTEUR');
    this.isAdminCourrierRole = roles.includes('SUPERADMIN') || roles.includes('ADMIN');
    this.isSuperAdminRole =
      this.isAdminCourrierRole || roles.includes('DIRECTEUR_ODC');
    this.isDirecteurOdcRole = roles.includes('DIRECTEUR_ODC');
    this.isOdcProductCourrierRole =
      this.isAdminCourrierRole || this.isDirecteurOdcRole;
  }

  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get('entite').subscribe({
      next: (value: Entite[]) => {
        this.entites = value;
        this.directions = value.filter((e) => this.isDirectionEntiteType(e.type));
        this.services = value.filter((e) => this.isServiceEntiteType(e.type));

        this.odcDirections = this.directions.filter(
          (e) => this.isOdcDirectionName(e.nom) && !this.isDcireDirectionName(e.nom)
        );
        /** Hub DCIRE : seules les divisions DCIRE (Fondation, RSE, DCI, Orange Digital Center), pas les autres piliers ODC. */
        this.externalDirections = this.directions.filter(
          (e) => this.isStructureOrigineHubDcireDivision(e.nom) && !this.isDcireDirectionName(e.nom)
        );
        const dc = this.directions.find((e) => this.isDcireDirectionName(e.nom));
        this.dcireDirectionId = dc?.id ?? null;
        if (this.isDcireRole) {
          this.dcireEntiteOptions = value
            .filter((e) => e.id != null)
            .map((e) => ({ id: e.id as number, nom: String(e.nom || '—') }))
            .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
        }

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

        this.glogalService
          .get('api/courriers/odc/directions-emission')
          .pipe(catchError(() => of([])))
          .subscribe((list: Entite[]) => {
            if (Array.isArray(list) && list.length > 0) {
              this.odcDirections = list;
            }
            finishEntiteLoad();
          });
      }
    });
  }

  /** Liste admin : fusion de toutes les directions ODC (sans filtre manuel). */
  loadOdcCourriersMerged(): void {
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
    const reqs = this.odcDirections.map((d) =>
      this.glogalService.get(`api/courriers/odc/${d.id}?vue=${vue}`).pipe(catchError(() => of([])))
    );
    forkJoin(reqs).subscribe({
      next: (arrays: unknown[]) => {
        const byId = new Map<number, any>();
        for (const arr of arrays as any[][]) {
          for (const c of arr || []) {
            if (c?.id != null) {
              byId.set(Number(c.id), c);
            }
          }
        }
        let merged = [...byId.values()];
        if (this.isOdcProductCourrierRole) {
          merged = this.applyDirecteurOdcTabFilter(merged);
        } else if (this.typeliste === 'recus') {
          merged = merged.filter((c) => this.estCourrierRecuSurPilierOdc(c));
        }
        this.Courriers = merged;
        this.filteredData = [...merged];
        this.loadingIndicator = false;
      },
      error: () => {
        this.Courriers = [];
        this.filteredData = [];
        this.loadingIndicator = false;
      },
    });
  }

  /** JSON enum Spring peut être une chaîne ou { name: "DIRECTION" }. */
  private entiteTypeString(type: unknown): string {
    if (typeof type === 'string') {
      return type.trim().toUpperCase();
    }
    if (type != null && typeof type === 'object' && 'name' in (type as object)) {
      return String((type as { name?: string }).name ?? '').trim().toUpperCase();
    }
    return String(type ?? '').trim().toUpperCase();
  }

  private isDirectionEntiteType(type: unknown): boolean {
    return this.entiteTypeString(type) === 'DIRECTION';
  }

  private isServiceEntiteType(type: unknown): boolean {
    return this.entiteTypeString(type) === 'SERVICE';
  }

  /** Règle alignée avec le backend (CourrierService.estDirectionOdc). */
  private patchRegisterOdcDirectionDefaults(): void {
    if (!this.register) {
      return;
    }
    const ctrl = this.register.get('odcDirectionId');
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
    this.refreshCiblesInternesBrouillon(ctrl.value);
  }

  private refreshCiblesInternesBrouillon(origineDirectionId: number | null | undefined): void {
    const id = origineDirectionId != null ? Number(origineDirectionId) : NaN;
    if (Number.isNaN(id)) {
      this.ciblesInternesBrouillon = [];
      return;
    }
    this.glogalService.get(`api/courriers/odc/cibles-internes?origineDirectionId=${id}`).subscribe({
      next: (rows: Entite[]) => {
        this.ciblesInternesBrouillon = Array.isArray(rows) ? rows : [];
      },
      error: () => {
        this.ciblesInternesBrouillon = [];
      },
    });
  }

  private applyFluxValidatorsForRegister(): void {
    const flux = this.register.get('fluxVers')?.value;
    const c = this.register.get('cibleInterneDirectionId');
    if (!c) {
      return;
    }
    if (flux === 'externe') {
      c.clearValidators();
    } else {
      c.setValidators([Validators.required]);
    }
    c.updateValueAndValidity({ emitEvent: false });
  }

  private normalizeNomCourrier(nom: string | undefined): string {
    return String(nom || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  /** Aligné avec le backend : « DCIRE » ou variante « DCI RE » (espace / tiret). */
  private isDcireDirectionName(nom: string | undefined): boolean {
    const n = this.normalizeNomCourrier(nom);
    if (n.includes('DCIRE')) {
      return true;
    }
    return n.replace(/-/g, ' ').includes('DCI RE');
  }

  private isOdcDirectionName(nom: string | undefined): boolean {
    const n = this.normalizeNomCourrier(nom);
    if (!n) {
      return false;
    }
    return (
      n.includes('ORANGE DIGITAL KALANSO') ||
      n.includes('ODK') ||
      n.includes('ORANGE DIGITAL MULTIMEDIA') ||
      n.includes('MULTIMEDIA') ||
      n.includes('ORANGE FABLAB') ||
      n.includes('FABLAB') ||
      n.includes('ORANGE FAB') ||
      n.includes('ORANGE DIGITAL CENTER') ||
      n.includes('DIGITAL CENTER') ||
      n.includes('ODC')
    );
  }

  /**
   * Structures autorisées comme « structure d'origine » sur le formulaire hub DCIRE :
   * Fondation, RSE, DCI (hors DCIRE), Orange Digital Center — pas Kalanso, Multimedia, FabLab, etc.
   */
  private isStructureOrigineHubDcireDivision(nom: string | undefined): boolean {
    const n = this.normalizeNomCourrier(nom);
    if (!n) {
      return false;
    }
    if (n.includes('FONDATION')) {
      return true;
    }
    if (n.includes('RSE')) {
      return true;
    }
    if (n.includes('DCI') && !n.includes('DCIRE')) {
      return true;
    }
    return n.includes('ORANGE DIGITAL CENTER') || n.includes('DIGITAL CENTER');
  }

  private mapTypelisteToVueParam(): string {
    if (
      this.isOdcProductCourrierRole &&
      (this.typeliste === 'recus' ||
        this.typeliste === 'nonRepondus' ||
        this.typeliste === 'envoyes' ||
        this.typeliste === 'delegues')
    ) {
      return 'TOUS';
    }
    switch (this.typeliste) {
      case 'validation':
        return 'VALIDATION';
      case 'archives':
        return 'ARCHIVES';
      case 'envoyes':
        return 'REPONDUS';
      case 'delegues':
        return 'TOUS';
      case 'tous':
        return 'TOUS';
      case 'recus':
        return 'OPERATIONNEL';
      case 'actifs':
        return 'OPERATIONNEL';
      default:
        return 'OPERATIONNEL';
    }
  }

  private applyDirecteurOdcTabFilter(rows: any[]): any[] {
    switch (this.typeliste) {
      case 'recus':
        return rows.filter((c) => this.estCourrierRecuTotalDirecteurOdc(c));
      case 'nonRepondus':
        return rows.filter((c) => this.estCourrierNonReponduParDirecteurOdc(c));
      case 'envoyes':
        return rows.filter((c) => this.estCourrierReponduParDirecteurOdc(c));
      case 'delegues':
        return rows.filter((c) => this.estCourrierDelegueParDirecteurOdc(c));
      default:
        return rows;
    }
  }

  /** Tous les courriers DCIRE → ODC reçus sur le pilier (historique complet). */
  estCourrierRecuTotalDirecteurOdc(row: any): boolean {
    return this.estCourrierEmissionDcireVersOdc(row) && row?.statut !== 'ARCHIVER';
  }

  /** En attente de réponse du directeur ODC. */
  estCourrierNonReponduParDirecteurOdc(row: any): boolean {
    if (!this.estCourrierEmissionDcireVersOdc(row) || this.estCourrierReponduParDirecteurOdc(row)) {
      return false;
    }
    return this.estCourrierRecuSurPilierOdc(row);
  }

  /** Courriers ayant reçu une réponse du directeur ODC (trace historique). */
  estCourrierReponduParDirecteurOdc(row: any): boolean {
    if (!this.estCourrierEmissionDcireVersOdc(row)) {
      return false;
    }
    const s = row?.statut;
    return s === 'REPONDU' || s === 'TRANSMIS_DCIRE' || s === 'ARCHIVER';
  }

  estCourrierDelegueParDirecteurOdc(row: any): boolean {
    return row?.delegueResponsableOdk === true || row?.delegueResponsableOdk === 'true';
  }

  /** Courrier émis par le hub DCIRE (KEÏTA) vers une structure de la division. */
  private estCourrierEmisParDcireHub(row: any): boolean {
    if (this.dcireDirectionId == null) {
      return false;
    }
    return this.rowStructureOrigineId(row) === this.dcireDirectionId;
  }

  /** Réponse reçue d’une structure destinataire (courrier émis par le hub). */
  estCourrierReponduParDcireHub(row: any): boolean {
    if (!this.estCourrierEmisParDcireHub(row)) {
      return false;
    }
    const s = row?.statut;
    return s === 'REPONDU' || s === 'TRANSMIS_DCIRE' || s === 'ARCHIVER';
  }

  /** Émis par DCIRE, en attente de réponse de la structure destinataire. */
  estCourrierNonReponduParDcireHub(row: any): boolean {
    if (!this.estCourrierEmisParDcireHub(row) || this.estCourrierReponduParDcireHub(row)) {
      return false;
    }
    const s = row?.statut;
    return s === 'ENVOYER' || s === 'IMPUTER' || s === 'EN_COURS';
  }

  private applyDcireTabFilter(bruts: any[]): any[] {
    switch (this.typeliste) {
      case 'tous':
        return [...bruts];
      case 'emis':
        return bruts.filter(
          (c) => this.estCourrierEmisParDcireHub(c) && c.statut !== 'ARCHIVER'
        );
      case 'nonRepondus':
        return bruts.filter((c) => this.estCourrierNonReponduParDcireHub(c));
      case 'archives':
        return bruts.filter((c) => c.statut === 'ARCHIVER');
      case 'envoyes':
        return bruts.filter((c) => this.estCourrierReponduParDcireHub(c));
      case 'validation':
        return [];
      case 'actifs':
        return bruts.filter((c) => c.statut !== 'ARCHIVER' && c.statut !== 'REPONDU');
      default:
        return bruts.filter((c) => c.statut !== 'ARCHIVER' && c.statut !== 'REPONDU');
    }
  }

  onDcireEntiteFilterChange(): void {
    this.refreshCourriersDcire();
  }

  refreshCourriersDcire(): void {
    if (!this.isDcireRole) {
      return;
    }
    this.loadingIndicator = true;
    this.glogalService.getCourriersDcire(this.dcireEntiteFilterId).subscribe({
      next: (rows: any[]) => {
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

  rowEntiteId(row: any): number | null {
    const e = row?.entite;
    if (e == null) {
      return null;
    }
    if (typeof e === 'object' && e.id != null) {
      return Number(e.id);
    }
    if (typeof e === 'number') {
      return e;
    }
    return null;
  }

  private rowStructureOrigineId(row: any): number | null {
    const so = row?.structureOrigine;
    if (so == null) {
      return null;
    }
    if (typeof so === 'object' && so.id != null) {
      return Number(so.id);
    }
    if (typeof so === 'number') {
      return Number(so);
    }
    return null;
  }

  private rowDirectionInitialId(row: any): number | null {
    const di = row?.directionInitial;
    if (di == null) {
      return null;
    }
    if (typeof di === 'object' && di.id != null) {
      return Number(di.id);
    }
    if (typeof di === 'number') {
      return Number(di);
    }
    return null;
  }

  private rowDetenuSurPilierOdcCharge(row: any): boolean {
    const e = row?.entite;
    if (e == null) {
      return false;
    }
    const entId = typeof e === 'object' && e.id != null ? Number(e.id) : Number(e);
    if (!Number.isFinite(entId)) {
      return false;
    }
    if (this.odcDirections.some((d) => Number(d.id) === entId)) {
      return true;
    }
    const parentId = e?.parent?.id;
    if (parentId != null && this.odcDirections.some((d) => Number(d.id) === Number(parentId))) {
      return true;
    }
    return false;
  }

  /** Émission DCIRE vers un pilier ODC (workflow directeur ODC / admin). */
  private estCourrierEmissionDcireVersOdc(row: any): boolean {
    if (!row || row.statut === 'ARCHIVER') {
      return false;
    }
    const initId = this.rowDirectionInitialId(row);
    if (initId == null || !this.odcDirections.some((d) => Number(d.id) === initId)) {
      return false;
    }
    const origId = this.rowStructureOrigineId(row);
    if (this.dcireDirectionId != null && origId != null && origId === this.dcireDirectionId) {
      return true;
    }
    const exp = String(row.expediteur || '').toUpperCase();
    return exp.includes('KEÏTA') || exp.includes('DCIRE');
  }

  estCourrierRecuSurPilierOdc(row: any): boolean {
    if (this.estCourrierReponduParDirecteurOdc(row)) {
      return false;
    }
    if (this.estCourrierEmissionDcireVersOdc(row)) {
      const s = row?.statut;
      return (
        s === 'ENVOYER' ||
        s === 'IMPUTER' ||
        s === 'EN_COURS' ||
        s === 'ATTENTE_VALIDATION_REPONSE_DIRECTEUR_ODC'
      );
    }
    if (!row || !this.rowDetenuSurPilierOdcCharge(row)) {
      return false;
    }
    const entId = this.rowEntiteId(row);
    const origId = this.rowStructureOrigineId(row);
    if (origId != null && entId != null && origId !== entId) {
      return true;
    }
    const initId = this.rowDirectionInitialId(row);
    if (origId == null && initId != null && entId != null && initId !== entId) {
      return true;
    }
    return false;
  }

  isCourrierPhysiquementADcire(row: any): boolean {
    if (this.dcireDirectionId == null) {
      return false;
    }
    if (row?.statut === 'TRANSMIS_DCIRE') {
      return true;
    }
    return this.rowEntiteId(row) === this.dcireDirectionId;
  }

  /** Externe sortant en attente sur le hub (pas de transmission ODC). */
  estFluxExterneHubEnAttente(row: any): boolean {
    if (row?.statut !== 'TRANSMIS_DCIRE') {
      return false;
    }
    if (row?.cibleInterneDirection != null || row?.cibleInterneDirectionId != null) {
      return false;
    }
    const d = row?.destinataireOdc;
    return d === 'EXTERNE' || d == null;
  }

  /** Courrier externe explicite au hub : pas de transmission ODC. */
  estCourrierExterneSortantAuHub(row: any): boolean {
    if (!this.isCourrierPhysiquementADcire(row)) {
      return false;
    }
    if (row?.cibleInterneDirection != null || row?.cibleInterneDirectionId != null) {
      return false;
    }
    return row?.destinataireOdc === 'EXTERNE';
  }

  /** Réponse ODC validée — en attente décharge / scan à la DCIRE. */
  estCourrierEnAttenteDechargeDcire(row: any): boolean {
    if (!this.isDcireRole || row?.statut !== 'TRANSMIS_DCIRE') {
      return false;
    }
    return this.isCourrierPhysiquementADcire(row) && !this.estCourrierExterneSortantAuHub(row);
  }

  validerDechargeReponseDcire(row: any): void {
    if (!row?.id) {
      return;
    }
    this.glogalService.postCourrierValiderDechargeReponseDcire(row.id).subscribe({
      next: () => {
        this.toastr.success('Décharge validée — courrier renvoyé à l’ODC pour envoi.');
        this.refreshCourriersDcire();
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || 'Validation impossible.');
      },
    });
  }

  onDirecteurOdcWorkflowChanged(): void {
    this.loadOdcCourriersMerged();
  }

  private rowServiceOdcAffecte(row: any): boolean {
    return row?.serviceOdcAffecte != null || row?.serviceOdcAffecteId != null;
  }

  peutDeleguerCourrierOdc(row: any): boolean {
    if (!this.isDirecteurOdcRole || row?.statut !== 'ENVOYER' || this.rowServiceOdcAffecte(row)) {
      return false;
    }
    const entId = this.rowEntiteId(row);
    if (entId == null) {
      return false;
    }
    return this.odcDirections.some((d) => Number(d.id) === entId);
  }

  peutConfirmerEnvoiPhysiqueOdc(row: any): boolean {
    if (!this.isDirecteurOdcRole) {
      return false;
    }
    if (row?.statut === 'REPONDU') {
      return true;
    }
    if (row?.statut !== 'ENVOYER' || this.peutDeleguerCourrierOdc(row)) {
      return false;
    }
    return this.rowServiceOdcAffecte(row);
  }

  openDeleguerCourrierOdc(row: any): void {
    if (!row?.id) {
      return;
    }
    this.validationDirecteurOdc?.openDeleguer(Number(row.id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** Courrier émis par la DCIRE pour le périmètre ODC (réponse réservée au directeur ODC). */
  isCourrierFluxOdc(row: any): boolean {
    const cibleId =
      row?.cibleInterneDirectionId ??
      row?.cibleInterneDirection?.id ??
      row?.directionInitial?.id ??
      row?.directionInitialId;
    if (cibleId != null && this.odcDirections.some((d) => Number(d.id) === Number(cibleId))) {
      return true;
    }
    const entId = this.rowEntiteId(row);
    if (entId != null && this.odcDirections.some((d) => Number(d.id) === entId)) {
      return true;
    }
    return this.rowServiceOdcAffecte(row);
  }

  peutRepondreAuCourrier(row: any): boolean {
    const s = row?.statut;
    if (
      s === 'ARCHIVER' ||
      s === 'REPONDU' ||
      s === 'ATTENTE_VALIDATION_ODC' ||
      s === 'ATTENTE_VALIDATION_DIRECTEUR_ODC' ||
      s === 'EN_REVISION_ADMIN_COURRIER' ||
      s === 'ATTENTE_VALIDATION_REPONSE_DIRECTEUR_ODC'
    ) {
      return false;
    }
    if (this.isDirecteurOdcRole && this.isCourrierFluxOdc(row)) {
      return s === 'ENVOYER' || s === 'IMPUTER';
    }
    if (this.isDcireRole && this.isCourrierPhysiquementADcire(row)) {
      return true;
    }
    if (this.isCourrierFluxOdc(row)) {
      return false;
    }
    return !this.isDirecteurOdcRole;
  }

  confirmerEnvoiPhysiqueOdc(row: any): void {
    if (!row?.id) {
      return;
    }
    this.glogalService.postCourrierConfirmerEnvoiPhysiqueOdc(row.id).subscribe({
      next: () => {
        this.toastr.success('Envoi physique confirmé — courrier archivé.');
        this.loadOdcCourriersMerged();
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || 'Action impossible.');
      },
    });
  }

  validerTransmissionVersDcire(row: any): void {
    if (!row?.id) {
      return;
    }
    this.glogalService.postCourrierValiderTransmissionDcire(row.id).subscribe({
      next: () => {
        this.toastr.success('Courrier validé : transmission effectuée.');
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else {
          this.getCourrierByEntite();
        }
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || 'Validation impossible.');
      }
    });
  }

  resoumettreRevision(row: any): void {
    if (!row?.id) {
      return;
    }
    this.glogalService.postCourrierResoumettreRevision(row.id).subscribe({
      next: () => {
        this.toastr.success('Courrier renvoyé au directeur ODC pour validation.');
        this.getCourrierByEntite();
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || 'Renvoi impossible.');
      }
    });
  }

  openTransmitToOdc(row: any): void {
    this.selectedRowData = row;
    this.transmitOdcDirectionId = this.odcDirections[0]?.id ?? null;
    this.modalService.open(this.transmitOdcModal, { size: 'md' });
  }

  validerExpeditionExterneDcire(row: any): void {
    if (!row?.id) {
      return;
    }
    this.glogalService.postCourrierValiderExpeditionExterneDcire(row.id).subscribe({
      next: () => {
        this.toastr.success('Accusé de réception hub enregistré.');
        this.refreshCourriersDcire();
      },
      error: (err) => {
        this.toastr.error(err?.error?.message || 'Action impossible.');
      },
    });
  }

  confirmTransmitToOdc(modal: any): void {
    if (!this.selectedRowData?.id || !this.transmitOdcDirectionId) {
      this.toastr.error('Choisissez une direction ODC cible.');
      return;
    }
    this.glogalService
      .postCourrierTransmettreVersOdc(this.selectedRowData.id, this.transmitOdcDirectionId)
      .subscribe({
        next: () => {
          this.toastr.success('Courrier transmis à l’ODC.');
          modal.close();
          this.refreshCourriersDcire();
        },
        error: (err) => {
          this.toastr.error(err?.error?.message || 'Transmission impossible.');
        }
      });
  }

  openDcireExterneModal(): void {
    this.registerExterne.reset({ expediteur: 'KEÏTA DCIRE', fichier: '' });
    this.glogalService.get('api/courriers/dcire/cibles-division').subscribe({
      next: (rows: Entite[]) => {
        this.ciblesEmissionDcire = Array.isArray(rows) ? rows : [];
      },
    });
    this.modalService.open(this.addDcireExterne, { size: 'lg' });
  }

  onFileSelectedExterne(event: any): void {
    const file = event.target.files?.[0];
    if (file) {
      this.registerExterne.patchValue({ fichier: file });
    }
  }

  saveDcireExterne(form: UntypedFormGroup, modal: any): void {
    if (form.invalid) {
      return;
    }
    const raw = form.getRawValue();
    const cibleId = raw.cibleDirectionId;
    if (cibleId == null || cibleId === '') {
      this.toastr.warning('Choisissez une structure destinataire.');
      return;
    }
    const fd = new FormData();
    fd.append('cibleDirectionId', String(cibleId));
    fd.append('objet', raw.objet);
    fd.append('expediteur', (raw.expediteur || 'KEÏTA DCIRE').toString().trim());
    if (raw.fichier) {
      fd.append('fichier', raw.fichier);
    }
    this.loadingIndicator = true;
    this.glogalService.postMultipart('api/courriers/dcire/emission', fd).subscribe({
      next: () => {
        this.toastr.success('Courrier enregistré.');
        modal.close();
        this.refreshCourriersDcire();
        this.loadingIndicator = false;
      },
      error: (err) => {
        this.loadingIndicator = false;
        this.toastr.error(err?.error?.message || 'Enregistrement impossible.');
      }
    });
  }

  idEntite: any;
  idService: any;
  
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
    this.glogalService.get('api/stats/fichiers/par-type').subscribe({
      next: (value: any) => {
        this.taille = value;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  handleList(type: string) {
    this.typeliste = type;
    if (this.isDcireRole) {
      this.Courriers = this.applyDcireTabFilter(this.courriersDcireBruts);
      this.filteredData = [...this.Courriers];
      return;
    }
    this.getCourrierByEntite();
  }

  archiveCourrier(row: any) {
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
      error: (err: { status: number; error: any; message?: string }) => {
        console.error('Erreur lors de la mise à jour du support activité:', err);

        let message = 'Une erreur est survenue. Veuillez réessayer.';
        let title = '<span class="text-red-500">Échec</span>';

        if (err.error?.message) {
          message = err.error.message;
        } else if (err.message) {
          message = err.message;
        }

        Swal.fire({
          icon: 'error',
          title: title,
          text: message,
          confirmButtonText: 'Ok',
          customClass: {
            confirmButton: 'bg-red-500 text-white hover:bg-red-600',
          },
        });
      }
    });
  }

  download(row: any) {
    this.loadingIndicator = true;
    this.supportactivityService.downloadCourrierFile(row.id).subscribe({
      next: (value: any) => {
        const blob = value.body!;
        const contentDisposition = value.headers.get('content-disposition');
  
        let filename = `${row.numero}`;
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="(.+)"/);
          if (match?.[1]) {
            filename = match[1];
          }
        }
  
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);

        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err) => {
        console.error('Erreur téléchargement', err);
      }
    })
  }

  getUtilisateur() {
    this.loadingIndicator = true;
    this.glogalService.get('utilisateur').subscribe({
      next: (value: Utilisateur[]) => {
        this.Utilisateurs = value;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  // Méthode pour le fichier de création de courrier
  onFileSelectedCreation(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.register.patchValue({ fichier: file });
      this.register.get('fichier')?.updateValueAndValidity();
    }
  }

  // Méthode pour le fichier de réponse (gardée séparément)
  onFileSelected(event: any): void {
    // Si c'est pour la réponse au courrier
    if (this.reponse) {
      const file = event.target.files[0];
      if (file) {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (!allowedTypes.includes(file.type)) {
          this.toastr.error('Format non autorisé. Veuillez utiliser PDF, DOC ou DOCX');
          return;
        }
        
        if (file.size > 10 * 1024 * 1024) {
          this.toastr.error('Fichier trop volumineux (max 10MB)');
          return;
        }
        
        this.reponse.fichier = file;
      }
    }
  }

  ImputeModal(row: any, rowIndex: number, content: any) {
    if (this.isDcireRole && this.dcireDirectionId && content !== 'repondre') {
      const dir = this.directions.find((d) => d.id === this.dcireDirectionId);
      this.selectedDirection = dir ?? null;
      if (this.selectedDirection) {
        this.servicesOfDirection = this.services.filter(
          (s) => s.parentId === this.selectedDirection!.id
        );
      }
    }

    if (!this.isDcireRole && content !== 'repondre') {
      const ent = row?.entite ?? row?.directionInitial;
      const dirId =
        ent && typeof ent === 'object' && ent.id != null
          ? Number(ent.id)
          : ent != null && typeof ent === 'number'
            ? ent
            : null;
      if (dirId != null) {
        this.selectedDirection = this.directions.find((d) => d.id === dirId) ?? null;
        if (this.selectedDirection) {
          this.servicesOfDirection = this.services.filter(
            (s) => s.parentId === this.selectedDirection!.id
          );
        }
      }
    }

    // Si c'est pour répondre au courrier, ouvrir la modal de réponse
    if (content === 'repondre') {
      this.selectedCourrier = row;
      const user = this.authService.getCurrentUserFromStorage() as { email?: string } | null;
      const email =
        (user?.email || this.currenUserData?.email || row.expediteurEmail || '').toString().trim();
      this.reponse = {
        emailExpediteur: email,
        objet: `Re: ${row.objet || ''}`,
        message: '',
        fichier: null,
        attachments: []
      };
      this.modalService.open(this.repondreCourrierModal, { 
        ariaLabelledBy: 'repondreCourrierModal',
        size: 'lg'
      });
      return;
    }

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'meduim',
    });
    this.selectedRowData = row;
  }

  imputCourrier() {
    if (!this.entiteCible) return;

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
      error: (err: { status: number; error: any; message?: string }) => {
        console.error('Erreur reçue:', err);

        let message = 'Une erreur est survenue. Veuillez réessayer.';
        let title = '<span class="text-red-500">Échec</span>';

        if (err.error?.message) {
          message = err.error.message;
        } else if (err.message) {
          message = err.message;
        }

        Swal.fire({
          icon: 'error',
          title: title,
          text: message,
          confirmButtonText: 'Ok',
          customClass: {
            confirmButton: 'bg-red-500 text-white hover:bg-red-600',
          },
        });
      },
      complete: () => {
        this.loadingIndicator = false;
      }
    });
  }

  onAddRowSave(form: UntypedFormGroup) {
    const dirId =
      form.value.odcDirectionId != null
        ? Number(form.value.odcDirectionId)
        : this.odcDirections[0]?.id;
    if (dirId == null || Number.isNaN(dirId)) {
      this.toastr.error(
        'Aucune direction ODC disponible : vérifiez les entités (type Direction, nom reconnu ODC) ou contactez l’administrateur.'
      );
      return;
    }
    const flux = (form.value.fluxVers || 'externe').toString().toLowerCase();
    if (flux === 'interne') {
      const cible =
        form.value.cibleInterneDirectionId != null ? Number(form.value.cibleInterneDirectionId) : null;
      if (cible == null || Number.isNaN(cible)) {
        this.toastr.error(
          'Sélectionnez une direction de destination pour un courrier interne (échange au sein de la division).'
        );
        return;
      }
      if (cible === dirId) {
        this.toastr.error('La destination interne doit être différente de la direction d’émission.');
        return;
      }
    }
    this.loadingIndicator = true;
    const fd = new FormData();
    fd.append("numero", form.value.numero);
    fd.append("objet", form.value.objet);
    fd.append("expediteur", form.value.expediteur);
    fd.append("odcDirectionId", String(dirId));
    if (flux === 'interne') {
      fd.append('cibleInterneDirectionId', String(Number(form.value.cibleInterneDirectionId)));
    } else {
      fd.append('destinataireOdc', 'EXTERNE');
      const prec = (form.value.externePrecision || '').toString().trim();
      if (prec) {
        fd.append('externePrecision', prec);
      }
    }
    if (form.value.fichier) {
      fd.append("fichier", form.value.fichier);
    }

    this.glogalService.postMultipart('api/courriers/odc/brouillon', fd).subscribe({
      next: (response) => {
        console.log('✅ Courrier créé avec succès:', response);
        
        // Réinitialiser le formulaire complètement
        form.reset({
          numero: '',
          objet: '',
          expediteur: '',
          fichier: '',
          fluxVers: 'interne',
          cibleInterneDirectionId: null,
          externePrecision: '',
          odcDirectionId: null,
        });
        this.applyFluxValidatorsForRegister();
        this.patchRegisterOdcDirectionDefaults();
        this.selectedFile = null;
        
        // Réinitialiser manuellement le champ fichier
        const fileInput = document.getElementById('fichier') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
        
        // Fermer la modal
        this.modalService.dismissAll();
        
        // Arrêter le chargement
        this.loadingIndicator = false;
        
        // Afficher le succès
        this.addRecordSuccess();
        
        // Recharger la liste des courriers
        this.getCourrierByEntite();
      },
      error: (err: { status: number; error: any; message?: string }) => {
        console.error('Erreur lors de la création du courrier:', err);
        
        // Arrêter le chargement même en cas d'erreur
        this.loadingIndicator = false;

        let message = 'Une erreur est survenue. Veuillez réessayer.';
        let title = '<span class="text-red-500">Échec</span>';

        if (err.error?.message) {
          message = err.error.message;
        } else if (err.message) {
          message = err.message;
        }

        Swal.fire({
          icon: 'error',
          title: title,
          text: message,
          confirmButtonText: 'Ok',
          customClass: {
            confirmButton: 'bg-red-500 text-white hover:bg-red-600',
          },
        });
      }
    });
  }

  addRow(content: any) {
    this.patchRegisterOdcDirectionDefaults();
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'medium',
    });
  }

  editRow(row: any, rowIndex: number, content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'meduim',
    });
    this.editForm.setValue({
      id: row.id,
      statut: "",
      idutilisateur: "",
      commentaire: "",
    });
    this.selectedRowData = row;
  }

  historiqueCourrier(row: any, rowIndex: number, content: any) {
    this.selectedRowData = row;
    this.glogalService.get(`api/historique/courrier/${row.id}`).subscribe({
      next: (value: Entite[]) => {
        this.Historiques = value;
        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'meduim',
        });
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  displayFile(row: any) {
    window.open(`${row.url}`, "_blank");
  }

  deleteSingleRow(row: any) {
    Swal.fire({
      title: 'Voulez vous vraiment supprimer?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Oui',
    }).then((result) => {
      if (result.value) {
        this.deleteRecord(row);
        this.deleteRecordSuccess(1);
      }
    });
  }

  onAttachmentsSelected(event: any) {
    const files = Array.from(event.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB max par fichier
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
    
    const validFiles = files.filter((file: any) => {
      if (!allowedTypes.includes(file.type)) {
        this.toastr.warning(`Le fichier ${file.name} n'a pas un format autorisé`);
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
      this.toastr.warning('Certains fichiers n\'ont pas été ajoutés en raison de leur format ou taille');
    }
  }

envoyerReponse(modal: any) {
  // Validation des champs requis
  if (!this.reponse.emailExpediteur || !this.reponse.objet || !this.reponse.message) {
    this.toastr.error('Veuillez remplir tous les champs obligatoires');
    return;
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.reponse.emailExpediteur)) {
    this.toastr.error('Veuillez entrer une adresse email valide');
    return;
  }

  this.loading = true;

  const formData = new FormData();
  formData.append('courrierId', this.selectedCourrier.id);
  formData.append('email', this.reponse.emailExpediteur);
  formData.append('objet', this.reponse.objet);
  formData.append('message', this.reponse.message);

  if (this.reponse.fichier) {
    formData.append('file', this.reponse.fichier);
  }

  // Ajouter les pièces jointes
  this.reponse.attachments.forEach((file: any, index: number) => {
    formData.append(`attachment${index}`, file);
  });

  this.glogalService.post('api/courriers/reponse', formData).subscribe({
    next: (response) => {
      this.loading = false;
      modal.close();
      this.toastr.success(
        this.isDirecteurOdcRole && this.isCourrierFluxOdc(this.selectedCourrier)
          ? 'Réponse enregistrée — transmission DCIRE ou clôture selon le flux.'
          : 'Réponse envoyée avec succès'
      );

      this.reponse = {
        emailExpediteur: '',
        objet: '',
        message: '',
        fichier: null,
        attachments: [],
      };

      setTimeout(() => {
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else if (this.isDirecteurOdcRole) {
          this.onDirecteurOdcWorkflowChanged();
        } else {
          this.handleList('envoyes');
        }
      }, 400);
    },
    error: (err) => {
      this.loading = false;
      console.error('Erreur lors de l\'envoi de la réponse:', err);
      const errorMessage = err?.error?.message || 'Erreur lors de l\'envoi de la réponse';
      this.toastr.error(errorMessage);
    }
  });
}

  deleteRecord(row: any) {
    this.glogalService.delete("api/courriers/delete", row.id!).subscribe({
      next: () => {
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else {
          this.loadOdcCourriersMerged();
        }
        this.loadingIndicator = true;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err: { status: number; error: any; message?: string }) => {
        console.error('Erreur reçue:', err);

        let message = 'Une erreur est survenue. Veuillez réessayer.';
        let title = '<span class="text-red-500">Échec</span>';

        if (err.error?.message) {
          message = err.error.message;
        } else if (err.message) {
          message = err.message;
        }

        Swal.fire({
          icon: 'error',
          title: title,
          text: message,
          confirmButtonText: 'Ok',
          customClass: {
            confirmButton: 'bg-red-500 text-white hover:bg-red-600',
          },
        });
      }
    });
  }

  deleteRecordSuccess(count: number) {
    this.toastr.success(`${count} Record(s) deleted successfully`, 'Success');
  }

  addRecordSuccess() {
    this.toastr.success('Record added successfully', 'Success');
  }

  filterDatatable(event: any) {
    if (!event || !event.target) {
      return;
    }
    
    if (!this.Courriers || this.Courriers.length === 0) {
      return;
    }
    
    const val = event.target.value.toLowerCase();
    const colsAmount = this.columns.length;
    const keys = Object.keys(this.Courriers[0]);

    this.Courriers = this.filteredData.filter((item: any) => {
      for (let i = 0; i < colsAmount; i++) {
        if (
          item[keys[i]]
            .toString()
            .toLowerCase()
            .indexOf(val) !== -1 ||
          !val
        ) {
          return true;
        }
      }
      return false;
    });

    this.table.offset = 0;
  }
}