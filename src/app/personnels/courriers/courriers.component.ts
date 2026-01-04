import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core';
import { Activity } from '@core/models/Activity';
import { ActivitySupports } from '@core/models/ActivitySupports';
import { Entite } from '@core/models/Entite';
// import { ActivitySupportsOngletsInterface } from '@core/models/ActivitySupportsOngletsInterface';
import { Salle } from '@core/models/Salle';
import { Utilisateur } from '@core/models/Utilisateur.model';
import { GlobalService } from '@core/service/global.service';
import { SupportactivityService } from '@core/service/supportactivity.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { active } from 'd3';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-courriers',
  imports: [NgxDatatableModule, CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './courriers.component.html',
  styleUrl: './courriers.component.scss'
})
export class CourriersComponent {

  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
  // 
  entites:  Entite[] = [];
  personnel: any = undefined;
  entiteCible: any = undefined;
  Historiques: any[] = [];
  // 
  rows = [];
  salles:  Salle[] = [];
  Activitys: Activity[] = [];
  ActivitySupport: ActivitySupports[] = [];
  Courriers: any[] = [];
  typeliste: string = "actifs" // archives
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

      // numero:  new UntypedFormControl(),
      // objet:  new UntypedFormControl(),
      // expediteur:  new UntypedFormControl(),
      // directionId:  new UntypedFormControl(),
      // fichier:  new UntypedFormControl(),
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
    this.selection = SelectionType.checkbox;
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

  taille:any = "";
  ngOnInit() {
    // this.getAllSupport(); // TODO: // faire le get selon l'onglet sélection
    this.getAllEntite()
    this.getUtilisateur()
    this.register = this.fb.group({
      entite: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      objet: ['', [Validators.required]],
      expediteur: ['', [Validators.required]],
      // directionId: [''],
      fichier: [''],

      // description: [''],
      // fichier: ['', [Validators.required]],
      // idutilisateur: [0, [Validators.required]],
    });

    const userString = localStorage.getItem('currentUser');
    if (userString) {
      const user = JSON.parse(userString);
      const token = user.bearer; // ou le champ exact où est stocké ton token
      if (token) {
        const decoded = this.authService.getDecodedToken(token);
        this.currenUserData = decoded
      }
    }

  }
  // fetch data
  // getAllActivitys(){
  //   this.loadingIndicator = true;
  //   this.glogalService.get('activite').subscribe({
  //     next:(value: Activity[]) =>{
  //       this.Activitys = value;
  //       // this.filteredData = [...value];
  //       setTimeout(() =>{
  //         this.loadingIndicator = false;
  //       },500);
  //     }
  //   })
  // }

  getAllSupport(){}

  getAllEntite(){
    this.loadingIndicator = true;
    this.glogalService.get('entite').subscribe({
      next:(value: Entite[]) =>{
        this.entites = value;
        // this.Direction = value.find(el => el.nom === 'Direction');
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })
  }

  idEntite: any
  getCourrierByEntite(){
    // console.log("event -> ", this.idEntite);
    // const idEntite = event.target.value;
    // const idEntite = event.target.value;
    if(!this.idEntite) return;
    
    this.loadingIndicator = true;
    this.glogalService.get(`api/courriers/${this.typeliste}/${this.idEntite}`).subscribe({
      next:(value: any[]) => {
        this.Courriers = value;
        // this.filteredData = [...value];
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })
  }

  getAllOnglet(){
    this.loadingIndicator = true;
    this.glogalService.get('api/stats/fichiers/par-type').subscribe({
      next:(value: any) =>{
        this.taille = value
        // this.ActivitySupportOnglets = value;
        // this.handleList('1')
        // this.filteredData = [...value];
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })
  }

  handleList(type: string){
    this.loadingIndicator = true;
    this.glogalService.get(`api/courriers/${type}/${this.idEntite}`).subscribe({
      next:(value: ActivitySupports[]) =>{
        this.Courriers = value;
        this.typeliste = type;
        this.filteredData = [...value];
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })
  }

  archiveCourrier(row: any) {
    this.glogalService.update("api/courriers/archiver", row.id, {}).subscribe({
      next: (resp) => {         
        this.getCourrierByEntite() 
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
        this.getAllSupport();
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
      next:(value: any) =>{
        // console.log("value -> ", value);

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

        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      },
      error: (err) => {
        console.error('Erreur téléchargement', err);
      }
    })
  }

  getUtilisateur(){
    this.loadingIndicator = true;
    this.glogalService.get('utilisateur').subscribe({
      next:(value: Utilisateur[]) =>{
        this.Utilisateurs = value;

        // this.handleList('1')
        // this.filteredData = [...value];
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
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
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'meduim',
    });
    this.selectedRowData = row;
  }


  imputCourrier(){
    if(!this.entiteCible) return;

    const fd = new FormData();
    fd.append("entiteCibleId", this.entiteCible);
    if(this.personnel){
      fd.append("utilisateurCible", this.personnel);
    }
    this.supportactivityService.imputerCourrier(this.selectedRowData.id, fd).subscribe({
      next: (response) => {

        // Réinitialiser l'objet salles
        // form.reset();
        this.entiteCible = null;
        this.selectedFile = null;
        // Fermer les modales si nécessaire
        this.getCourrierByEntite()
        this.modalService.dismissAll();


        // Afficher un toast de succès
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
    // const direction = !!this.Direction ? this.Direction.id.toString() : null
    fd.append("numero", form.value.numero);
    fd.append("objet", form.value.objet);
    fd.append("expediteur", form.value.expediteur);
    fd.append("directionId", form.value.entite);
    fd.append("fichier", form.value.fichier);

    // fd.append("file", form.value.fichier);
    // fd.append("description", form.value.description);
    // fd.append("utilisateurId", form.value.idutilisateur);

    this.glogalService.post('api/courriers/reception', fd).subscribe({
      next: (response) => {
        
        // Ajouter la nouvelle role reçue à la liste locale
        // this.ActivitySupport.push(response);
        // console.log(this.salles)
        // this.Activitys = [...this.salles];

        // Réinitialiser l'objet salles
        form.reset();
        this.selectedFile = null;
        // Fermer les modales si nécessaire
        this.modalService.dismissAll();
        this.getCourrierByEntite()


        // Afficher un toast de succès
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


  // add new record
  addRow(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'medium',
    });
  //            

    // this.register.patchValue({
    //   id: this.getId(10, 100),
    //   img: this.newUserImg,
    // });
  }
  // edit record
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
    // this.editForm.value.id = row.id;
    
    this.selectedRowData = row;
  }

  historiqueCourrier(row: any, rowIndex: number, content: any) {
    this.selectedRowData = row;
    this.glogalService.get(`api/historique/courrier/${row.id}`).subscribe({
      next:(value: Entite[]) =>{
        this.Historiques = value;

        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'meduim',
        });
        // this.Direction = value.find(el => el.nom === 'Direction');
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })


    // this.editForm.setValue({
    //   id: row.id,
    //   statut: "",
    //   idutilisateur: "",
    //   commentaire: "",
    // });
    // this.editForm.value.id = row.id;
    

  }

  displayFile(row: any){
    window.open(`${row.url}`, "_blank");
  }

  // delete single row
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
      next:(response) =>{
        this.salles = response;
        this.loadingIndicator = true;
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
        this.getAllSupport();

      }, error: (err: { status: number; error: any; message?: string }) => {
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
    })
  }


  onEditSave(form: UntypedFormGroup) {    
    if (form?.value?.id) {
      // Préparer l'objet mis à jour (ici l'exemple suppose que `form.value` contient les nouvelles données)
      const updatedSupport = form.value;
      const fd = new FormData()
      fd.append("statut", updatedSupport.statut);
      fd.append("commentaire", updatedSupport.commentaire);
      this.glogalService.update("api/supports/update", updatedSupport.id, fd).subscribe({
        next: (resp) => {          
          this.modalService.dismissAll(); // Fermer le modal
          this.editRecordSuccess();       // Appeler callback si défini
          setTimeout(() =>{
            this.loadingIndicator = false;
          },500);
          this.getAllSupport();
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
  }

  filterDatatable(event: any) {
    const val = event.target.value.toLowerCase();

    this.ActivitySupport = this.filteredData.filter((item) => {
      // console.log("Object.values(item) -> ", Object.values(item));

      return Object.values(item).some((field: any) =>
        field?.toString().toLowerCase().includes(val)
      );
    });

    this.table.offset = 0;
  }



  addRecordSuccess() {
    this.toastr.success('Adjonction réalisée avec succès.', '');
  }
  editRecordSuccess() {
    this.toastr.success('Modification opéré', '');
  }
  deleteRecordSuccess(count: number) {
    this.toastr.error(count + 'Eradication diligente pleinement consommée.', '');
  }


}


export interface selectActivitySupportInterface {
  id?: number | undefined
  nom?: string;
  activiteNom?: string;
  type?: string;
  url?: string;
  description?: string;
  commentaire?: string;
  numero?: string;
  historiques?: any[];
  activite?: Activity;
}