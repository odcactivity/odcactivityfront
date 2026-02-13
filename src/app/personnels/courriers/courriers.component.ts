import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
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
  typeliste: string = "actifs";
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
  currenUserData: any;
  taille: any = "";
  
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
    private supportactivityService: SupportactivityService
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
    this.getAllEntite();
    this.getUtilisateur();
    this.register = this.fb.group({
      entite: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      objet: ['', [Validators.required]],
      expediteur: ['', [Validators.required]],
      fichier: [''],
    });

    const userString = localStorage.getItem('currentUser');
    if (userString) {
      const user = JSON.parse(userString);
      const token = user.bearer;
      if (token) {
        const decoded = this.authService.getDecodedToken(token);
        this.currenUserData = decoded;
      }
    }
  }

  getAllEntite() {
    this.loadingIndicator = true;
    this.glogalService.get('entite').subscribe({
      next: (value: Entite[]) => {
        console.log("DATA BRUTE API:", value);
        value.forEach(e => {
          console.log("ENTITE:", e.nom, " | TYPE:", e.type);
        });
        
        this.entites = value;
        this.directions = value.filter(e => e.type === 'DIRECTION');
        this.services = value.filter(e => e.type === 'SERVICE');

        console.log("ALL:", this.entites.map(e => e.nom));
        console.log("DIRECTIONS:", this.directions.map(e => e.nom));
        console.log("SERVICES:", this.services.map(e => e.nom));

        this.loadingIndicator = false;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  idEntite: any;
  idService: any;
  
  getCourrierByEntite() {
    console.log('=== getCourrierByEntite appelé ===');
    console.log('idEntite:', this.idEntite);
    console.log('directions disponibles:', this.directions.map(d => `${d.id}: ${d.nom}`));
    console.log('services disponibles:', this.services.map(s => `${s.id}: ${s.nom} (parentId: ${s.parentId})`));
    
    if (!this.idEntite) {
      console.log('idEntite est null, retour sans traitement');
      return;
    }
    
    // Réinitialiser le service sélectionné quand on change de direction
    this.idService = null;
    
    const idEntiteNumber = Number(this.idEntite);
    console.log('idEntite converti en nombre:', idEntiteNumber);
    
    this.selectedDirection = this.directions.find(dir => dir.id === idEntiteNumber);
    console.log('Direction trouvée:', this.selectedDirection ? this.selectedDirection.nom : 'NULL');
    
    if (this.selectedDirection) {
      this.servicesOfDirection = this.services.filter(service => service.parentId === this.selectedDirection!.id);
      console.log(`Chargement des courriers - Direction: ${this.selectedDirection.nom}`);
      console.log('Services de cette direction:', this.servicesOfDirection.map(s => s.nom));
      console.log('Nombre de services trouvés:', this.servicesOfDirection.length);
    } else {
      this.servicesOfDirection = [];
      console.log('Aucune direction trouvée pour idEntite:', idEntiteNumber);
    }
    
    this.loadingIndicator = true;
    this.glogalService.get(`api/courriers/${this.typeliste}/${this.idEntite}`).subscribe({
      next: (value: any[]) => {
        this.Courriers = value;
        console.log('Courriers chargés:', value.length, 'courriers');
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  getCourrierByService() {
    console.log('=== getCourrierByService appelé ===');
    console.log('idService:', this.idService);
    
    if (!this.idService) {
      console.log('idService est null, on retourne aux courriers de la direction');
      // Si aucun service n'est sélectionné, on affiche les courriers de la direction
      this.getCourrierByEntite();
      return;
    }
    
    const selectedService = this.servicesOfDirection.find(service => service.id === Number(this.idService));
    console.log('Service sélectionné:', selectedService ? selectedService.nom : 'NULL');
    
    this.loadingIndicator = true;
    this.glogalService.get(`api/courriers/${this.typeliste}/service/${this.idService}`).subscribe({
      next: (value: any[]) => {
        this.Courriers = value;
        console.log(`Courriers du service ${selectedService?.nom}:`, value.length, 'courriers');
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des courriers du service:', err);
        // En cas d'erreur, on retourne aux courriers de la direction
        this.getCourrierByEntite();
      }
    })
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
    this.loadingIndicator = true;
    this.glogalService.get(`api/courriers/${type}/${this.idEntite}`).subscribe({
      next: (value: ActivitySupports[]) => {
        this.Courriers = value;
        this.typeliste = type;
        this.filteredData = [...value];
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      }
    })
  }

  archiveCourrier(row: any) {
    this.glogalService.update("api/courriers/archiver", row.id, {}).subscribe({
      next: (resp) => {
        this.getCourrierByEntite();
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

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.register.patchValue({ fichier: file });
      this.register.get('fichier')?.updateValueAndValidity();
    }
  }

  ImputeModal(row: any, rowIndex: number, content: any) {
    if (!this.selectedDirection && this.idEntite) {
      const idEntiteNumber = Number(this.idEntite);
      this.selectedDirection = this.directions.find(dir => dir.id === idEntiteNumber);
      if (this.selectedDirection) {
        this.servicesOfDirection = this.services.filter(service => service.parentId === this.selectedDirection!.id);
        console.log(`Direction récupérée dans ImputeModal: ${this.selectedDirection.nom}`);
        console.log('Services de cette direction:', this.servicesOfDirection.map(s => s.nom));
      }
    }
    
    if (this.selectedDirection) {
      console.log(`Modale d'imputation - Direction: ${this.selectedDirection.nom}`);
      console.log('Services disponibles:', this.servicesOfDirection.map(s => s.nom));
    } else {
      console.log('Aucune direction sélectionnée pour l\'imputation');
      console.log('idEntite:', this.idEntite);
      console.log('directions disponibles:', this.directions.map(d => d.nom));
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
        this.getCourrierByEntite();
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
    this.loadingIndicator = true;
    const fd = new FormData();
    fd.append("numero", form.value.numero);
    fd.append("objet", form.value.objet);
    fd.append("expediteur", form.value.expediteur);
    fd.append("directionId", form.value.entite);
    fd.append("fichier", form.value.fichier);

    this.glogalService.post('api/courriers/reception', fd).subscribe({
      next: (response) => {
        form.reset();
        this.selectedFile = null;
        this.modalService.dismissAll();
        this.getCourrierByEntite();
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

  addRow(content: any) {
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

  deleteRecord(row: any) {
    this.glogalService.delete("api/supports/delete", row.id!).subscribe({
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
