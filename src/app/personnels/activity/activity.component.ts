import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup, ValidationErrors, ValidatorFn, Validators
} from "@angular/forms";
import { FullCalendarModule } from "@fullcalendar/angular";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { TypeActivite } from "@core/models/TypeActivite";
import { Activity } from "@core/models/Activity";
import { Entite } from "@core/models/Entite";
import { Salle } from "@core/models/Salle";
import { Etape } from "@core/models/Etape";
import { DatatableComponent, NgxDatatableModule, SelectionType } from "@swimlane/ngx-datatable";
import { GlobalService } from "@core/service/global.service";
import Swal from "sweetalert2";
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AuthService } from "@core";
import { filterEntitesOdcPiliers } from '@core/utils/odc-entite';
import { canonicalizeAppRoles } from '@core/utils/app-roles';
import { timer } from 'rxjs';

import { ActivityValidation } from '@core/models/ActivityValidation';

@Component({
  selector: 'app-activity',
  imports: [
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    NgIf,
    NgxDatatableModule,
    RouterLink,
    NgForOf,
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
  rows = [];
  activite: Activity[] = [];
  entite: Entite[] = [];
  etape: Etape[] = [];
  salleId: Salle[] = [];
  typeActivites: TypeActivite[] = [];
  selectedEtapes: Etape[] = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData!: selectActiviteInterface;
  filteredData: any[] = [];
  editForm: UntypedFormGroup;
  detailForm: UntypedFormGroup;
  register!: UntypedFormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  reorderable = true;
  public selected: number[] = [];
  useRole: string[];
  validation: ActivityValidation = new ActivityValidation();
  selectedFile: File | null = null;
  isEditMode = false;
  editingActiviteId: number | null = null;
  editNoteResponsable = '';
  editSuggestionDirecteur = '';
  existingFichierNom: string | null = null;
  isPersonnelRole = false;
  currentUserId: number | null = this.getCurrentUserId();
  activityValidation: ActivityValidation = new ActivityValidation();
  envoyeurMap: { [key: number]: string } = {};
  superviseurMap: { [key: number]: string } = {};
  columns = [
    { prop: 'nom' },
    { prop: 'titre' },
    { prop: 'lieu' },
    { prop: 'description' },
    { prop: 'dateDebut' },
    { prop: 'dateFin' },
    { prop: 'objectifParticipation' },
  ];

  @ViewChild(DatatableComponent, { static: false }) table2!: DatatableComponent;
  selection!: SelectionType;
  constructor(private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private glogalService: GlobalService,
    private authService: AuthService
  ) {
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      titre: new UntypedFormControl(),
      lieu: new UntypedFormControl(),
      description: new UntypedFormControl(),
      dateDebut: new UntypedFormControl(),
      dateFin: new UntypedFormControl(),
      objectifParticipation: new UntypedFormControl(),
      entite: new UntypedFormControl(),
      salleId: new UntypedFormControl(),
      //typeId: new UntypedFormControl(),
      typeActivite: new UntypedFormControl(),
      etape: new UntypedFormControl(),
      selectedEtapeIds: new UntypedFormControl(),
      commentaire: new UntypedFormControl(),
      superviseurId: new UntypedFormControl(),
      fichier: new UntypedFormControl(),
      fichierjoint: new UntypedFormControl(),
    });
    this.detailForm = this.fb.group({
      id: [''],
      nom: [{ value: '', disabled: true }, [Validators.required]],
      titre: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
      objectifParticipation: [null, [Validators.required]],
      entite: [null, [Validators.required]],
      etape: [null, [Validators.required]],
      salleId: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
      typeActivite: [null, [Validators.required]],
      superviseurId: [null],
      commentaire: [''],
      fichier: [null],
      fichierjoint: [''],
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
    this.selection = SelectionType.checkbox;

    this.useRole = this.authService.getCurrentUserFromStorage().roles;
    this.isPersonnelRole = canonicalizeAppRoles(this.useRole).includes('PERSONNEL');
  }

  // select record using check box
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
    console
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
    this.getAllEtapeALL();
    this.getAllEntite();
    this.getAllActivite();
    this.getAllTypeActivite();
    this.getAllSalle();
    this.getMapEnvoyeur();
    // initialize form creation
    this.register = this.fb.group({
      id: [''],
      nom: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
      objectifParticipation: [null, [Validators.required]],
      entite: [null, [Validators.required]],
      //etape: [null, [Validators.required]],
      salleId: [null, [Validators.required]],
      //typeId: [null, [Validators.required]],
      typeActivite: [null, [Validators.required]],
      superviseurId: [null],
      commentaire: [''],
      fichier: [null],
      fichierjoint: [''],
    });

    //   this.register.get('dateFin')?.valueChanges.subscribe(dateFin => {
    //   const dateDebut = this.register.get('dateDebut')?.value;
    //   if (dateDebut && dateFin && new Date(dateFin) < new Date(dateDebut)) {

    //     // On met une erreur seulement sur dateFin
    //     this.register.get('dateFin')?.setErrors({ dateInvalide: true });

    //   } else {
    //     // On enlève l'erreur si tout est correct
    //     this.register.get('dateFin')?.setErrors(null);
    //   }
    // });

    // Fonction de vérification
    const checkDates = () => {
      const dateDebut = this.register.get('dateDebut')?.value;
      const dateFin = this.register.get('dateFin')?.value;

      if (dateDebut && dateFin && new Date(dateFin) < new Date(dateDebut)) {
        this.register.get('dateFin')?.setErrors({ dateInvalide: true });
      } else {
        this.register.get('dateFin')?.setErrors(null);
      }
    };

    // On écoute les deux champs
    this.register.get('dateDebut')?.valueChanges.subscribe(() => checkDates());
    this.register.get('dateFin')?.valueChanges.subscribe(() => checkDates());
    // initialize detail form group
    // console.log("selectedRowData au niveau composant constructeur :", this.selectedRowData);


    // Initialise d’abord un formulaire vide
    this.detailForm = this.fb.group({
      id: [''],
      nom: [{ value: '', disabled: true }, [Validators.required]],
      titre: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
      objectifParticipation: [null, [Validators.required]],
      entite: [null, [Validators.required]],
      etape: [null, [Validators.required]],
      salleId: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
      typeActivite: [null, [Validators.required]],
      superviseurId: [null],
      commentaire: [''],
      fichier: [null],
      fichierjoint: [''],
    });
  }
  ngOnChanges() {
    if (this.selectedRowData) {
      // console.log("selectedRowData reçu :", this.selectedRowData);

      this.detailForm.patchValue({
        nom: this.selectedRowData.nom,
        titre: this.selectedRowData.titre,
        lieu: this.selectedRowData.lieu,
        description: this.selectedRowData.description,
        dateDebut: this.selectedRowData.dateDebut,
        dateFin: this.selectedRowData.dateFin,
        objectifParticipation: this.selectedRowData.objectifParticipation,
        entite: this.selectedRowData.entite,
        etape: this.selectedRowData.etapes,
        salleId: this.selectedRowData.salleId,
        typeActivite: this.selectedRowData.typeActivite,
      });
    }
  }
  // fetch data
  getAllActivite() {
    this.loadingIndicator = true;
    this.glogalService.get('activite').subscribe({
      next: (value: Activity[]) => {
        console.log("Activites ETAPE :", value)
        this.activite = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get('entite').subscribe({
      next: (value: Entite[]) => {
        const raw = Array.isArray(value) ? value : [];
        this.entite = filterEntitesOdcPiliers(raw);
        this.filteredData = [...this.entite];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  /** Garde l’entité d’une ligne existante dans la liste déroulante même si elle n’est pas un pilier ODC. */
  private ensureEntiteOptionPresent(e: Entite | undefined | null) {
    if (!e?.id) return;
    if (!this.entite.some((x) => x.id === e.id)) {
      this.entite = [...this.entite, e];
    }
  }

  getAllSalle() {
    this.loadingIndicator = true;
    this.glogalService.get('salle').subscribe({
      next: (value: Salle[]) => {
        this.salleId = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  getAllEtape() {
    this.loadingIndicator = true;
    this.glogalService.getByActivite('etape', 'sansactivite').subscribe({
      next: (value: Etape[]) => {
        console.log("Etape :=================avant", value)
        this.etape = value.filter(etape => etape.created_by?.id === this.currentUserId && etape.activiteid === null);
        // console.log("Etape :=================apres", this.etape)
        // Si tu utilises un tableau filtré ailleurs
        this.filteredData = [...this.etape];
        // this.etape = value;
        // this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }
  getAllEtapeSansFiltre() {
    this.loadingIndicator = true;
    this.glogalService.getByActivite('etape', 'sansactivite').subscribe({
      next: (value: Etape[]) => {
        // console.log("Etape :=================avant", value)
        this.etape = value;
        // console.log("Etape :=================apres", this.etape)
        // Si tu utilises un tableau filtré ailleurs
        this.filteredData = [...this.etape];
        // this.etape = value;
        // this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }
  getAllEtapeALL() {
    this.loadingIndicator = true;
    this.glogalService.get('etape').subscribe({
      next: (value: Etape[]) => {
        console.log("Etape :=================", value)
        //   this.etape = value.filter(etape => etape.created_by?.id === this.currentUserId);
        // // Si tu utilises un tableau filtré ailleurs
        // this.filteredData = [...this.etape];
        this.etape = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  getAllTypeActivite() {
    this.loadingIndicator = true;
    this.glogalService.get('typeActivite').subscribe({
      next: (value: TypeActivite[]) => {
        this.typeActivites = value;
        console.log("Type Activite :", this.typeActivites)
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  getCurrentUserId(): number | null {
    const raw = localStorage.getItem('bearerid');
    console.log('Raw currentUser from localStorage:', raw);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      // si le stockage est juste un id string, parsed sera une string
      if (typeof parsed === 'number') return parsed;
      if (typeof parsed === 'string') return parseInt(parsed, 10);
      // sinon on cherche parsed.id
      if (parsed) return Number(parsed);
      return null;
    } catch {
      // raw n'était pas JSON (peut être un id en string)
      const val = parseInt(raw, 10);
      return isNaN(val) ? null : val;
    }
  }
  // CREATION ou MODIFICATION activité (même formulaire)
  onRegisterSubmit(form: UntypedFormGroup) {
    if (this.isEditMode) {
      this.saveEditActivite(form);
    } else {
      this.onAddRowSave(form);
    }
  }

  async onAddRowSave(form: UntypedFormGroup) {
    if (form.invalid) return;
    this.loadingIndicator = true;
    // Étape 1 : Création de l'activité
    const fichier = this.selectedFile ?? form.value.fichier;
    const userId = this.getCurrentUserId();
    this.glogalService.post('activite', form.value).subscribe({
      next: (activite: Activity) => {
        const finish = () => {
          this.addRecordSuccess();
          this.modalService.dismissAll();
          this.reloadActivities();
          form.reset();
          this.selectedFile = null;
          this.loadingIndicator = false;
        };
        if (!fichier || !activite?.id || userId == null) {
          finish();
          return;
        }
        const validation = {
          commentaire: 'Pièce jointe à la création de l’activité',
          date: new Date(),
          statut: 0,
          envoyeurId: userId,
          activiteId: activite.id,
          utilisateurId: userId,
        };
        this.glogalService.createValidation(validation as any, fichier, 'create').subscribe({
          next: () => finish(),
          error: () => {
            this.toastr.warning('Activité créée, mais le fichier joint n’a pas pu être enregistré.');
            finish();
          },
        });
      }, error: (err: unknown) => {
        const msg = err instanceof Error ? err.message : this.glogalService.extractMessageFromError(err);
        this.toastr.error(msg, 'Création d’activité');
        console.error('Erreur activité :', err);
        this.loadingIndicator = false;
      }
    });
  }

  addSuccessMessage(duration: number = 3000) {
    Swal.fire({
      icon: 'success',
      title: 'Succès',
      text: 'L’activité a été ajoutée avec succès !',
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true,
    });
  }
  reloadActivities() {
    this.glogalService.get('activite').subscribe({
      next: (data) => {
        this.activite = Array.isArray(data) ? data : [];
        this.loadingIndicator = false;
        this.cdr.detectChanges(); // force Angular à rafraîchir l'affichage
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error('Erreur lors du rechargement des activités :', err);
      },
    });
  }
  // add new record
  addRow(content: any) {
    this.isEditMode = false;
    this.editingActiviteId = null;
    this.editNoteResponsable = '';
    this.editSuggestionDirecteur = '';
    this.existingFichierNom = null;
    this.selectedFile = null;
    this.register.reset();
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });

  }

  selectedEtapeIds: number[] = [];

  detailRow(row: any, rowIndex: number, content: any) {
    this.ngOnChanges();
    this.getAllEtapeSansFiltre();
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    // Préparer les IDs d'étapes sélectionnées
    // this.selectedEtapeIds = row.etapes?.map((e: any) => e.id) || []; // Notez: 'etapes' au lieu de 'etape'
    //code fatou, pour verifier si l'etape est un tableau ou un objet et si c'est null
    const etapes = Array.isArray(row.etapes)
      ? row.etapes
      : row.etapes
        ? [row.etapes]
        : [];

    this.selectedEtapeIds = etapes.map((e: any) => e.id);
    this.ensureEntiteOptionPresent(row.entite);
    this.detailForm.patchValue({
      id: row.id,
      nom: row.nom,
      titre: row.titre,
      lieu: row.lieu,
      description: row.description,
      dateDebut: row.dateDebut,
      dateFin: row.dateFin,
      objectifParticipation: row.objectifParticipation,
      entite: row.entite?.id,
      etape: this.selectedEtapeIds, // Utiliser directement selectedEtapeIds
      salleId: row.salleId?.id,
      typeActivite: row.typeActivite?.id,
    });
    // console.log("selectedEtapeIds au niveau composant :", this.selectedEtapeIds);

    this.selectedRowData = row;
  }
  peutModifierActivite(row: any): boolean {
    if (!this.isPersonnelRole || row?.createdBy?.id == null || this.currentUserId == null) {
      return false;
    }
    if (Number(row.createdBy.id) !== Number(this.currentUserId)) {
      return false;
    }
    if (row.statut === 'En_Validation_Directeur_ODC') {
      return false;
    }
    if (row.statut === 'En_Validation_Responsable_ODK') {
      return false;
    }
    return true;
  }

  fichiersActiviteRow(row: any): { id?: number; fichierjoint?: string }[] {
    const list = row?.activitevalidation;
    if (!Array.isArray(list)) {
      return [];
    }
    const withFile = list.filter((v: { fichierjoint?: string }) => v?.fichierjoint);
    if (withFile.length === 0) {
      return [];
    }
    const latest = [...withFile].sort(
      (a: { id?: number }, b: { id?: number }) => Number(b.id ?? 0) - Number(a.id ?? 0)
    )[0];
    return latest ? [latest] : [];
  }

  editRow(row: any, rowIndex: number, content: any) {
    this.isEditMode = true;
    this.editingActiviteId = row?.id != null ? Number(row.id) : null;
    this.editNoteResponsable = row?.noteResponsableOdk || '';
    this.editSuggestionDirecteur = row?.suggestionDirecteurOdc || '';
    const fichiers = this.fichiersActiviteRow(row);
    this.existingFichierNom =
      fichiers.length > 0 ? (fichiers[fichiers.length - 1].fichierjoint ?? null) : null;
    this.selectedFile = null;

    const etapes = Array.isArray(row.etapes) ? row.etapes : row.etapes ? [row.etapes] : [];
    this.selectedEtapeIds = etapes.map((e: any) => e.id);
    this.ensureEntiteOptionPresent(row.entite);

    this.register.patchValue({
      id: row.id,
      nom: row.nom,
      titre: row.titre,
      lieu: row.lieu,
      description: row.description,
      dateDebut: row.dateDebut,
      dateFin: row.dateFin,
      objectifParticipation: row.objectifParticipation,
      entite: row.entite?.id,
      salleId: row.salleId?.id,
      typeActivite: row.typeActivite?.id,
    });

    this.selectedRowData = row;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  saveEditActivite(form: UntypedFormGroup) {
    if (form.invalid || this.editingActiviteId == null) {
      return;
    }
    const etapeIds = this.selectedEtapeIds || [];
    const updatedActivite = {
      ...form.value,
      id: this.editingActiviteId,
      etapes: etapeIds.map((id: number) => ({ id })),
    };
    const activiteId = this.editingActiviteId;
    const file = this.selectedFile;

    this.loadingIndicator = true;

    const finish = () => {
      this.modalService.dismissAll();
      this.editRecordSuccess();
      this.isEditMode = false;
      this.editingActiviteId = null;
      this.existingFichierNom = null;
      this.selectedFile = null;
      this.loadingIndicator = false;
      this.getAllActivite();
    };

    const saveActivite = () => {
      this.glogalService.updateP('activite', activiteId, etapeIds, updatedActivite).subscribe({
        next: () => finish(),
        error: (err: unknown) => {
          this.loadingIndicator = false;
          Swal.fire({
            icon: 'error',
            title: 'Échec',
            text: this.glogalService.extractMessageFromError(err) || 'Modification impossible.',
            confirmButtonText: 'Ok',
          });
        },
      });
    };

    if (file) {
      this.glogalService.uploadActivitePieceJointe(activiteId, file).subscribe({
        next: () => saveActivite(),
        error: (err: unknown) => {
          const msg = this.glogalService.extractMessageFromError(err);
          this.toastr.error(msg || 'La pièce jointe n’a pas pu être mise à jour.');
          this.loadingIndicator = false;
        },
      });
    } else {
      saveActivite();
    }
  }

  getMapEnvoyeur() {
    this.glogalService.get("utilisateur").subscribe({
      next: (users: any[]) => {
        this.envoyeurMap = Object.fromEntries(users.map(u => [u.id, u.nom + " - " + u.prenom]));
        this.superviseurMap = Object.fromEntries(users.map(u => [u.id, u.nom + " - " + u.prenom]));
      },
      error: err => {
        console.error("Erreur lors du chargement des envoyeurs :", err);
      }
    });
  }

  downloadOrOpenFile(validationId: number) {
    this.glogalService.getValidationFileResponse(validationId).subscribe({
      next: (res) => {
        try {
          this.glogalService.triggerFileDownloadFromResponse(res, `piece_jointe_${validationId}`);
        } catch (e) {
          this.toastr.error(e instanceof Error ? e.message : 'Téléchargement impossible.');
        }
      },
      error: () => this.toastr.error('Téléchargement impossible.'),
    });
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      if (this.isEditMode) {
        return;
      }
      this.register.patchValue({ fichier: file });
      this.register.get('fichier')?.updateValueAndValidity();
    }
  }

  // VERSION CORRIGÉE - Ne pas mettre à jour le formulaire dans onEtapesChange
  onEtapesChange(selectedIds: number[]) {
    console.log('Etapes sélectionnées ont changé:', selectedIds);
    // Seulement mettre à jour la variable, PAS le formulaire
    this.selectedEtapeIds = selectedIds;

    // Si vous avez besoin de faire quelque chose d'autre avec les étapes filtrées
    const filteredEtapes = this.etape.filter(etape =>
      etape && selectedIds.includes(etape.id!)
    );

    console.log('Etapes filtrées:', filteredEtapes);

    // NE PAS FAIRE CECI - cela cause la récursion infinie :
    // this.editForm.patchValue({ etape: selectedIds });
  }


  // delete single row
  deleteSingleRow(row: any) {
    Swal.fire({
      title: 'Voulez vous vraiment supprimer?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.deleteRecord(row);
        this.deleteRecordSuccess(1);
      }
    });
  }
  deleteRecord(row: any) {
    // Activer le loading pendant la suppression
    this.loadingIndicator = true;

    this.glogalService.delete("activite", row.id!).subscribe({
      // this.glogalService.delete("activite", row!).subscribe({
      next: (response: any) => {
        console.log('Réponse de suppression:', response);
        // Succès de la suppression
        Swal.fire({
          icon: 'success',
          title: 'Supprimé !',
          text: 'L’activité a été supprimée avec succès.',
          timer: 2000,
          showConfirmButton: false
        });

        // Recharger la liste des activités
        this.getAllActivite();

        // Désactiver le loading après un délai
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err) => {
        console.log('Il ya déjà des participants liés:', err);

        // Extraire le message d'erreur
        const msg = this.glogalService.extractMessageFromError(err);

        // Désactiver le loading en cas d'erreur
        this.loadingIndicator = false;

        // Afficher l'erreur
        Swal.fire({
          icon: 'error',
          title: 'Il ya déjà des participants liés',
          text: msg,
          confirmButtonText: 'OK'
        });
      }
    });
  }
  filterDatatable(event: any) {
    const val = event.target.value.toLowerCase();

    this.activite = this.filteredData.filter((item) => {
      return Object.values(item).some((field: any) =>
        field?.toString().toLowerCase().includes(val)
      );
    });

    this.table.offset = 0;
  }

  addRecordSuccess() {
    this.toastr.success('Adjout réalisé avec succès.', '');
  }
  editRecordSuccess() {
    this.toastr.success('Modification opéré', '');
  }
  deleteRecordSuccess(count: number) {
    this.toastr.error(count + 'Suppresion faite avec succès.', '');
  }

  //News fonctions pour la gestion du select
  // isSelected(row: any): boolean {
  //   this.isRowSelected = this.selected.length > 0;
  //    return this.selected.some(r => r === row.id);
  //   //  this.selected.splice(0, this.selected.length);
  //   //   this.selected.push(...this.selected);

  //   //   if (this.selected.length === 0) {
  //   //     this.isRowSelected = false;
  //   //   } else {
  //   //     this.isRowSelected = true;
  //   //   }
  //   //   return this.selected.includes(row.id);
  // }
  // toggleSelection(row: any, event: any) {
  //   if (event.target.checked) {
  //     this.isRowSelected = true;
  //     this.selected.push(row);
  //   } else {
  //     this.selected = this.selected.filter(r => r !== row.id);
  //   }
  //   this.isRowSelected = this.selected.length > 0;
  // }
  toggleSelection(row: any, event: any) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      console.log("Ajout de l'ID sélectionné :", row.id);
      if (!this.selected.includes(row.id)) {
        this.selected.push(row.id);
        console.log("Liste des IDs sélectionnés :", this.selected);
      }
    } else {
      this.selected = this.selected.filter(id => id !== row.id);
      console.log("Liste des IDs après suppression :", this.selected);
    }

    this.isRowSelected = this.selected.length > 0;
  }

  isSelected(row: any): boolean {
    return this.selected.includes(row.id);
  }
  onRowCheckboxChange(row: any, event: any) {
    if (event.target.checked) {
      this.isRowSelected = true;
      this.selected = [...this.selected, row];
    } else {
      this.isRowSelected = false;
      this.selected = this.selected.filter((r) => r.toFixed !== row.id);

    }
  }
}
export interface selectActiviteInterface {
  nom: string;
  titre: string;
  lieu: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  objectifParticipation: number;
  entite: Entite;
  salleId: Salle;
  typeActivite: TypeActivite;
  etapes: Etape[];
  activitevalidation?: any[];
}