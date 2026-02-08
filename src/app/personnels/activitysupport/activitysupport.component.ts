import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core';
import { Activity } from '@core/models/Activity';
import { ActivitySupports } from '@core/models/ActivitySupports';
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
  selector: 'app-activitysupport',
  imports: [NgxDatatableModule, CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './activitysupport.component.html',
  styleUrl: './activitysupport.component.scss'
})
export class ActivitysupportComponent {
  @ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
  rows = [];
  salles:  Salle[] = [];
  Activitys: Activity[] = [];
  ActivitySupport: ActivitySupports[] = [];
  typeliste: string = "RAPPORT"
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
    this.getAllActivitys();
    this.getAllSupport(); // TODO: // faire le get selon l'onglet sélection
    this.getUtilisateur(); // TODO: // faire le get selon l'onglet sélection
    this.getAllOnglet()
    this.register = this.fb.group({
      idActivite: ['', [Validators.required]],
      description: [''],
      fichier: ['', [Validators.required]],
      idutilisateur: [0, [Validators.required]],
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
  getAllActivitys(){
    this.loadingIndicator = true;
    this.glogalService.get('activite').subscribe({
      next:(value: Activity[]) =>{
        this.Activitys = value;
        // this.filteredData = [...value];
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })
  }

  getAllSupport(){
    this.loadingIndicator = true;
    this.glogalService.get(`api/supports/type/${this.typeliste}`).subscribe({
      next:(value: ActivitySupports[]) =>{
        this.ActivitySupport = value;
        // this.handleList('1')
        this.filteredData = [...value];
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
    this.glogalService.get(`api/supports/type/${type}`).subscribe({
      next:(value: ActivitySupports[]) =>{
        this.ActivitySupport = value;
        this.typeliste = type;
        // this.handleList('1')
        this.filteredData = [...value];
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })
  }

  download(row: any) {
    this.loadingIndicator = true;
    this.supportactivityService.download(row.id).subscribe({
      next:(value: any) =>{
        console.log("value -> ", value);

        const blob = value.body!;
        const contentDisposition = value.headers.get('content-disposition');
  
        let filename = `${row.nom}`;
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

  onAddRowSave(form: UntypedFormGroup) {
    this.loadingIndicator = true;
    const fd = new FormData();
    

    fd.append("file", form.value.fichier);
    fd.append("idActivite",form.value.idActivite);
    fd.append("description", form.value.description);
    fd.append("utilisateurId", form.value.idutilisateur);

    this.glogalService.post('api/supports/upload-validated', fd).subscribe({
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
        this.getAllSupport()


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
  historiques?: any[];
  activite?: Activity;
}

