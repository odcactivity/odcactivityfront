import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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
  
  // Solution temporaire : suivre les courriers répondus localement
  courriersRepondusLocalement: number[] = [];
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
    
    // Conversion du typeliste vers la constante backend
    let backendType: string;
    switch(this.typeliste) {
      case 'actifs':
        backendType = 'ENVOYER';
        break;
      case 'archives':
        backendType = 'ARCHIVER';
        break;
      case 'envoyes':
        backendType = 'REPONDU';
        break;
      default:
        backendType = 'ENVOYER';
    }
    
    this.loadingIndicator = true;
    this.glogalService.get(`api/courriers/${backendType}/${this.idEntite}`).subscribe({
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
    console.log('servicesOfDirection disponibles:', this.servicesOfDirection.map(s => `${s.id}: ${s.nom}`));
    
    if (!this.idService) {
      console.log('idService est null, on retourne aux courriers de la direction');
      // Si aucun service n'est sélectionné, on affiche les courriers de la direction
      this.getCourrierByEntite();
      return;
    }
    
    const selectedService = this.servicesOfDirection.find(service => service.id === Number(this.idService));
    console.log('Service sélectionné:', selectedService ? selectedService.nom : 'NULL');
    console.log('Service ID comparé:', Number(this.idService));
    
    if (!selectedService) {
      console.log('Service non trouvé dans servicesOfDirection, on retourne aux courriers de la direction');
      this.getCourrierByEntite();
      return;
    }
    
    // Conversion du typeliste vers la constante backend
    let backendType: string;
    switch(this.typeliste) {
      case 'actifs':
        backendType = 'ENVOYER';
        break;
      case 'archives':
        backendType = 'ARCHIVER';
        break;
      case 'envoyes':
        backendType = 'REPONDU';
        break;
      default:
        backendType = 'ENVOYER';
    }
    
    this.loadingIndicator = true;
    console.log(`Appel API: api/courriers/${backendType}/${this.idService}`);
    
    // Utilise le même endpoint que pour les directions
    this.glogalService.get(`api/courriers/${backendType}/${this.idService}`).subscribe({
      next: (value: any[]) => {
        this.Courriers = value;
        console.log(`Courriers du service ${selectedService.nom}:`, value.length, 'courriers');
        console.log('Détails des courriers:', value);
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 500);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des courriers du service:', err);
        console.log('Retour aux courriers de la direction en cas d\'erreur');
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
    
    // Conversion des types frontend vers les constantes backend
    let backendType: string;
    switch(type) {
      case 'actifs':
        backendType = 'ENVOYER';  // Utilise ENVOYER au lieu de RECU
        break;
      case 'archives':
        backendType = 'ARCHIVER';
        break;
      case 'envoyes':
        backendType = 'REPONDU';
        break;
      default:
        backendType = 'ENVOYER';
    }
    
    console.log(`🔄 handleList: ${type} -> ${backendType}`);
    
    this.glogalService.get(`api/courriers/${backendType}/${this.idEntite}`).subscribe({
      next: (value: ActivitySupports[]) => {
        // 🔥 Solution temporaire : si on demande les REPONDUS et que le backend retourne 0,
        // on ajoute les courriers qui ont été répondus localement
        if (type === 'envoyes' && value.length === 0) {
          console.log('🔍 Backend retourne 0 REPONDUS, recherche des courriers répondus localement...');
          
          // Récupérer tous les courriers ENVOYER et filtrer ceux qui ont été répondus localement
          this.glogalService.get(`api/courriers/ENVOYER/${this.idEntite}`).subscribe({
            next: (envoyers: ActivitySupports[]) => {
              const repondusLocalement = envoyers.filter(courrier => 
                // Filtrer les courriers qui ont été marqués comme répondus dans le frontend
                this.courriersRepondusLocalement?.includes(courrier.id)
              );
              
              console.log(`📊 Courriers répondus localement: ${repondusLocalement.length}`);
              this.Courriers = repondusLocalement;
              this.typeliste = type;
              this.filteredData = [...repondusLocalement];
              setTimeout(() => {
                this.loadingIndicator = false;
              }, 500);
            },
            error: (err) => {
              console.error('❌ Erreur lors de la recherche des courriers répondus localement:', err);
              this.Courriers = value;
              this.typeliste = type;
              this.filteredData = [...value];
              setTimeout(() => {
                this.loadingIndicator = false;
              }, 500);
            }
          });
        } else {
          this.Courriers = value;
          this.typeliste = type;
          this.filteredData = [...value];
          console.log(`✅ Courriers chargés pour ${backendType}:`, value.length, 'courriers');
          setTimeout(() => {
            this.loadingIndicator = false;
          }, 500);
        }
      },
      error: (err) => {
        console.error(`❌ Erreur lors du chargement des courriers ${backendType}:`, err);
        this.loadingIndicator = false;
        this.toastr.error(`Erreur lors du chargement des courriers: ${err.message || 'Erreur serveur'}`);
      }
    });
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

    // Logique existante pour l'imputation normale
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
        console.log('✅ Courrier créé avec succès:', response);
        
        // Réinitialiser le formulaire complètement
        form.reset();
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
        this.handleList('envoyes');
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