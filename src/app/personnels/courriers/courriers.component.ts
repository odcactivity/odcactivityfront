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
  imports: [NgxDatatableModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './courriers.component.html',
  styleUrl: './courriers.component.scss'
})
export class CourriersComponent {

  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;

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

  /** Rôle DCIRE (JWT = DIRECTEUR) */
  isDcireRole = false;
  /** Direction ODC (validation transmission) */
  isSuperAdminRole = false;
  odcDirections: Entite[] = [];
  /** Fondation, RSE, DCI, etc. — réception à la DCIRE */
  externalDirections: Entite[] = [];
  dcireDirectionId: number | null = null;
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

    this.register = this.fb.group({
      numero: ['', [Validators.required]],
      objet: ['', [Validators.required]],
      expediteur: ['', [Validators.required]],
      fichier: [''],
      odcDirectionId: [null as number | null],
      destinataireOdc: ['EXTERNE'],
      externePrecision: [''],
    });

    this.registerExterne = this.fb.group({
      structureOrigineId: [null, [Validators.required]],
      numero: ['', [Validators.required]],
      objet: ['', [Validators.required]],
      expediteur: ['', [Validators.required]],
      fichier: [''],
    });

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
    this.isDcireRole = roles.includes('DIRECTEUR') || roles.includes('DCIRE');
    this.isSuperAdminRole =
      roles.includes('SUPERADMIN') || roles.includes('ADMIN');
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
        this.externalDirections = this.directions.filter(
          (e) => !this.isOdcDirectionName(e.nom) && !this.isDcireDirectionName(e.nom)
        );
        const dc = this.directions.find((e) => this.isDcireDirectionName(e.nom));
        this.dcireDirectionId = dc?.id ?? null;

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
        this.Courriers = [...byId.values()];
        this.filteredData = [...this.Courriers];
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
  }

  private normalizeNomCourrier(nom: string | undefined): string {
    return String(nom || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  private isDcireDirectionName(nom: string | undefined): boolean {
    return this.normalizeNomCourrier(nom).includes('DCIRE');
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

  private mapTypelisteToVueParam(): string {
    switch (this.typeliste) {
      case 'validation':
        return 'VALIDATION';
      case 'archives':
        return 'ARCHIVES';
      case 'envoyes':
        return 'REPONDUS';
      case 'tous':
        return 'TOUS';
      case 'actifs':
        return 'OPERATIONNEL';
      default:
        return 'OPERATIONNEL';
    }
  }

  private applyDcireTabFilter(bruts: any[]): any[] {
    switch (this.typeliste) {
      case 'tous':
        return [...bruts];
      case 'archives':
        return bruts.filter((c) => c.statut === 'ARCHIVER');
      case 'envoyes':
        return bruts.filter((c) => c.statut === 'REPONDU');
      case 'validation':
        return [];
      case 'actifs':
        return bruts.filter((c) => c.statut !== 'ARCHIVER' && c.statut !== 'REPONDU');
      default:
        return bruts.filter((c) => c.statut !== 'ARCHIVER' && c.statut !== 'REPONDU');
    }
  }

  refreshCourriersDcire(): void {
    if (!this.isDcireRole) {
      return;
    }
    this.loadingIndicator = true;
    this.glogalService.get('api/courriers/dcire').subscribe({
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

  isCourrierPhysiquementADcire(row: any): boolean {
    return this.dcireDirectionId != null && this.rowEntiteId(row) === this.dcireDirectionId;
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
    this.registerExterne.reset({ fichier: '' });
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
    const fd = new FormData();
    fd.append('structureOrigineId', String(form.value.structureOrigineId));
    fd.append('numero', form.value.numero);
    fd.append('objet', form.value.objet);
    fd.append('expediteur', form.value.expediteur);
    if (form.value.fichier) {
      fd.append('fichier', form.value.fichier);
    }
    this.loadingIndicator = true;
    this.glogalService.postMultipart('api/courriers/dcire/reception-externe', fd).subscribe({
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
      this.reponse = {
        emailExpediteur: row.expediteurEmail || '',
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
    this.loadingIndicator = true;
    const fd = new FormData();
    fd.append("numero", form.value.numero);
    fd.append("objet", form.value.objet);
    fd.append("expediteur", form.value.expediteur);
    fd.append("odcDirectionId", String(dirId));
    const dest = (form.value.destinataireOdc || 'EXTERNE').toString().trim().toUpperCase();
    fd.append('destinataireOdc', dest || 'EXTERNE');
    const prec = (form.value.externePrecision || '').toString().trim();
    if (prec) {
      fd.append('externePrecision', prec);
    }
    if (form.value.fichier) {
      fd.append("fichier", form.value.fichier);
    }

    this.glogalService.postMultipart('api/courriers/odc/brouillon', fd).subscribe({
      next: (response) => {
        console.log('✅ Courrier créé avec succès:', response);
        
        // Réinitialiser le formulaire complètement
        form.reset();
        form.patchValue({ destinataireOdc: 'EXTERNE', externePrecision: '' });
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
      this.toastr.success('Réponse envoyée avec succès');
      
      console.log('📝 Réponse backend:', response);
      
      // 🔥 Ajouter le courrier à la liste des répondus localement
      if (this.selectedCourrier?.id && !this.courriersRepondusLocalement.includes(this.selectedCourrier.id)) {
        this.courriersRepondusLocalement.push(this.selectedCourrier.id);
        console.log('📋 Courriers répondus localement:', this.courriersRepondusLocalement);
      }
      
      // Mettre à jour le statut du courrier en local avec la bonne constante
      this.selectedCourrier.statut = 'REPONDU';
      
      // Réinitialiser le formulaire de réponse
      this.reponse = {
        emailExpediteur: '',
        objet: '',
        message: '',
        fichier: null,
        attachments: []
      };
      
      // Forcer le basculement vers la vue "envoyes" et recharger les données
      console.log('🔄 Basculement vers la vue RÉPONDUS...');
      this.typeliste = 'envoyes';
      
      // Forcer le rechargement depuis le backend pour voir si le statut a été mis à jour
      setTimeout(() => {
        if (this.isDcireRole) {
          this.refreshCourriersDcire();
        } else {
          this.handleList('envoyes');
        }
      }, 500);
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
      next: (response) => {
        this.salles = response;
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