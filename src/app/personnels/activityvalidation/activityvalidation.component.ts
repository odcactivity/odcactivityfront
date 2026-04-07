import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder, UntypedFormGroup, FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '@core';
import { canonicalizeAppRoles } from '@core/utils/app-roles';
import { ActivityValidation } from '@core/models/ActivityValidation';
import { GlobalService } from '@core/service/global.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent, SelectionType, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { TypeActivite } from '@core/models/TypeActivite';
import { Salle } from '@core/models/Salle';
import { Etape } from '@core/models/Etape';
import { Entite } from '@core/models/Entite';
import { Activity } from '@core/models/Activity';
import Swal from 'sweetalert2';

import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-activityvalidation',
  imports: [NgxDatatableModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './activityvalidation.component.html',
  styleUrl: './activityvalidation.component.scss'
})
export class ActivityvalidationComponent {
  // Variables
  @ViewChild(DatatableComponent, { static: false }) table2!: DatatableComponent;
  selection!: SelectionType;
  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
  rows = [];
  activite: Activity[] = [];
  activiteval: Activity[] = [];
  activitevalidation: ActivityValidation[] = [];
  superviseurMap: Record<number, string> = {};
  envoyeurMap: Record<number, string> = {};
  entite: Entite[] = [];
  etape: Etape[] = [];
  salleId: Salle[] = [];
  typeActivites: TypeActivite[] = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData!: selectActiviteInterface;
  filteredData: any[] = [];
  editForm?: UntypedFormGroup;
  register!: UntypedFormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  reorderable = true;
  public selected: number[] = [];
  useRole: string[];
  validation: ActivityValidation = new ActivityValidation();
  activityValidation: ActivityValidation = new ActivityValidation();
  selectedActivite?: Activity = new Activity();
  currentUserId: number | null = this.getCurrentUserId()
  canDelete: boolean = false;
  actval?: ActivityValidation[];
  /** Liste complète affichable (avant filtre recherche) */
  private activitevalSource: Activity[] = [];
  //Constructeur
  constructor(private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private glogalService: GlobalService,
    private authService: AuthService) {
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
    this.selection = SelectionType.checkbox;

    this.useRole = canonicalizeAppRoles(this.authService.getCurrentUserFromStorage().roles || []);
    // console.log('Roles utilisateur dans ActivityValidationComponent:', this.useRole);
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
    this.getAllEntite();
    this.getAllActivite();
    this.getAllTypeActivite();
    this.getAllSalle();
    this.getMapEnvoyeur();
    this.reloadActivitieValidations();
  }

  // fetch data
  getMapEnvoyeur(): void {
    this.glogalService.get('utilisateur').subscribe({
      next: (data) => {
        this.envoyeurMap = Object.fromEntries(
          data.map((s: any) => [s.id, s.nom + '-' + s.prenom])
        );
        this.superviseurMap = Object.fromEntries(
          data.map((s: any) => [s.id, s.nom + '-' + s.prenom])
        );
      },
      error: (err) => {
        console.error('Erreur lors du chargement des senvoyer', err);
      }
    });
  }
  getAllActivite() {
    this.loadingIndicator = true;
    this.glogalService.get('activite').subscribe({
      next: (value: Activity[]) => {
        this.activite = value;
        this.activitevalSource = this.filterActivitesForValidationView(value);
        this.activiteval = [...this.activitevalSource];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  /**
   * Personnel : uniquement ses activités (suivi + statut directeur ODC).
   * Superadmin / admin : vue globale.
   */
  private filterActivitesForValidationView(list: Activity[]): Activity[] {
    const roles = canonicalizeAppRoles(this.useRole);
    if (roles.includes('SUPERADMIN') || roles.includes('ADMIN')) {
      return [...list];
    }
    const uid = this.currentUserId;
    if (uid == null) {
      return [];
    }
    return list.filter((a) => a.createdBy?.id === uid);
  }

  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get('entite').subscribe({
      next: (value: Entite[]) => {
        this.entite = value;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
        //  console.log("Entite :", this.entite)
      }
    })
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


  getAllTypeActivite() {
    this.loadingIndicator = true;
    this.glogalService.get('typeActivite').subscribe({
      next: (value: TypeActivite[]) => {
        this.typeActivites = value;
        // console.log("Type Activite :", this.typeActivites)
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  downloadOrOpenFile(validationId: number, openInNewTab = false) {
    this.glogalService.getValidationFileResponse(validationId).subscribe({
      next: (resp) => {
        const blobf = resp.body;
        const contentDisp = resp.headers.get('content-disposition') || '';
        const match = /filename="?([^"]+)"?/.exec(contentDisp);
        const filename = match ? match[1] : 'fichier.bin';

        const url = window.URL.createObjectURL(blobf!);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error('Erreur téléchargement :', err)
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
  editSuccessMessage(duration: number = 3000) {
    Swal.fire({
      icon: 'success',
      title: 'Succès',
      text: 'L’activité a été modifiée avec succès !',
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true,
    });
  }
  reloadActivities() {
    this.glogalService.get('activite').subscribe({
      next: (data) => {
        this.activite = data;
        this.activitevalSource = this.filterActivitesForValidationView(data);
        this.activiteval = [...this.activitevalSource];
        this.loadingIndicator = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error('Erreur lors du rechargement des activités :', err);
      },
    });
  }
  reloadActivitieValidations() {
    this.glogalService.get('activitevalidation').subscribe({
      next: (data) => {
        // this.activitevalidation = Array.isArray(data) ? data : [];
        this.activitevalidation = data;
        // console.log("mes activitesvalidations reload====",this.activitevalidation);
        this.loadingIndicator = false;
        this.cdr.detectChanges(); // force Angular à rafraîchir l'affichage
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error('Erreur lors du rechargement des activités :', err);
      },
    });
  }
  selectedEtapeIds: number[] = [];


  editRow(row: any, rowIndex: number, content: any) {
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
    // this.editForm.patchValue({
    //   id: row.id,
    //   nom: row.nom,
    //   titre: row.titre,
    //   lieu: row.lieu,
    //   description: row.description,
    //   dateDebut: row.dateDebut,
    //   dateFin: row.dateFin,
    //   objectifParticipation: row.objectifParticipation,
    //   entite: row.entite?.id,
    //   etape: this.selectedEtapeIds, // Utiliser directement selectedEtapeIds
    //   salleId: row.salleId?.id,
    //   typeActivite: row.typeActivite?.id,
    // });

    this.selectedRowData = row;
  }
  editRow2(row: any, editRecord: any) {
    this.selectedActivite = row;
    this.updateDeleteRights(row);
    this.modalService.open(editRecord, {
      ariaLabelledBy: 'modal-basic-title',
    });
    this.selectedRowData = row;
    console.log("edit row", row);
  };
  onEditSave(form: UntypedFormGroup) {
    // console.log("modification", form.value);
    if (form?.value?.id) {
      // Utiliser les IDs sélectionnés directement depuis selectedEtapeIds
      const etapesObjects = (this.selectedEtapeIds || []).map((id: number) => ({ id }));
      // Créer l'objet à envoyer au backend
      const updatedActivite = {
        ...form.value,
        etapes: etapesObjects,
      };

      this.glogalService.update("activite", updatedActivite.id, updatedActivite).subscribe({
        next: () => {
          this.modalService.dismissAll();
          this.editRecordSuccess();
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
          this.getAllActivite();
        },
        error: (err: { status: number; error: any; message?: string }) => {
          console.error('Erreur lors de la mise à jour :', err);

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
  }

  // delete single row
  deleteSingleRow(row: any) {
    // console.log("row 1", row);
    Swal.fire({
      title: 'Voulez vous vraiment supprimer?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      // console.log("result to delete", result);
      if (result.value) {
        this.deleteRecord(row);
        this.deleteRecordSuccess(1);
      }
    });
  }

  canDeleteValidation(validation: any, activite: any): boolean {
    // Vérifie qu’il y a au moins une validation
    // console.log('this.activitevalidation?.length :', this.activitevalidation?.length)
    if (!this.activitevalidation?.length) return false;

    // Trie les validations par date (la plus récente en dernier)
    const sorted = [...this.activitevalidation].sort(
      (a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()
    );
    const lastValidation = sorted[sorted.length - 1];

    //  Les deux conditions doivent être vraies :
    //  La validation affichée est la dernière
    //  L’utilisateur courant est l’envoyeur
    return (lastValidation.id === validation.id &&
      validation.envoyeurId === this.getCurrentUserId());
  }
  updateDeleteRights(activite: any) {
    if (!activite?.activitevalidation?.length) {
      this.canDelete = false;
      return;
    }

    const validations = [...activite.activitevalidation].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const lastValidation = validations[validations.length - 1];
    const currentUserId = this.getCurrentUserId();
    // console.log('Last validation:', lastValidation);
    // console.log('Current user ID:', currentUserId);
    //  console.log(this.canDelete = lastValidation.envoyeurId === currentUserId);
    activite.activitevalidation = validations.map((val: any) => {
      return {
        ...val,
        canDelete:
          val.id === lastValidation.id && val.envoyeurId === currentUserId
      };
    });
    //  On met la valeur à true seulement si :
    //  c’est la dernière validation
    //  l’envoyeur est l’utilisateur courant
    this.canDelete = lastValidation.envoyeurId === currentUserId;
  }
  reloadModal() {
    this.cdr.detectChanges();
  }
  deleteValidation(valid: number): void {
    Swal.fire({
      title: 'Confirmer la suppression de cette validation ?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.glogalService.delete('activitevalidation', valid).subscribe({
          next: () => {
            this.toastr.success('Validation supprimée avec succès.', '');

            //  this.modalService.dismissAll();
            this.selectedRowData.activitevalidation = this.selectedRowData.activitevalidation.filter(v => v.id !== valid);
            this.selectedRowData = { ...this.selectedRowData };
            this.updateDeleteRights(this.selectedRowData);
            this.cdr.markForCheck();
            // this.modalService.dismissAll();

          }
        });
      }
    });
  }

  getCurrentUserId(): number | null {
    const raw = localStorage.getItem('bearerid');
    // console.log('Raw currentUser from localStorage:', raw);
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
  deleteRecord(row: any) {
    console.log("row to delete", row);
    // Activer le loading pendant la suppression
    this.loadingIndicator = true;
    console.log("row to delete", row);
    this.glogalService.delete("activite", row.id!).subscribe({
      next: (response: any) => {
        // console.log('Réponse de suppression:', response);

        // Succès de la suppression
        Swal.fire({
          icon: 'success',
          title: 'Supprimé !',
          text: 'L\'activité a été supprimée avec succès.',
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
        console.log('Erreur de suppression:', err);

        // Extraire le message d'erreur
        const msg = this.glogalService.extractMessageFromError(err);

        // Désactiver le loading en cas d'erreur
        this.loadingIndicator = false;

        // Afficher l'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur de suppression',
          text: msg,
          confirmButtonText: 'OK'
        });
      }
    });
  }


  filterDatatable(event: any) {
    const val = event.target.value.toLowerCase().trim();
    if (!val) {
      this.activiteval = [...this.activitevalSource];
    } else {
      this.activiteval = this.activitevalSource.filter((item) =>
        Object.values(item).some((field: any) =>
          field?.toString().toLowerCase().includes(val)
        )
      );
    }
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

}

export interface selectActiviteInterface {
  id?: number | undefined
  nom: string;
  titre: string;
  lieu: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  objectifParticipation: number;
  entite: Entite;
  etape: Etape;
  salleId: Salle;
  typeActivite: TypeActivite;
  activitevalidation: ActivityValidation[];
}


