import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup, Validators
} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {Router, RouterLink} from "@angular/router";
import {Entite} from "@core/models/Entite";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {GlobalService} from "@core/service/global.service";
import { Utilisateur } from '@core/models/Utilisateur.model';
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import Swal from "sweetalert2";
import {TypeActivite} from "@core/models/TypeActivite";
import {EncryptionService} from "@core/service/encryption.service";
import { co } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-entite',
  imports: [
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './entite.component.html',
  styleUrls: ['./entite.component.scss']
})
export class EntiteComponent {
  rows = [];
  entite:  Entite[] = [];
  users:  Utilisateur[] = [];
  directions: Entite[] = []; // Liste des directions uniquement
  services: Entite[] = []; // Liste des services de la direction sélectionnée
  selectedFile: File | null = null;
  selectedUtilisateur: Utilisateur | null = null; // Déclaration de la variable pour stocker l'utilisateur sélectionné
  logoPreview: string | null = null; // Pour l'aperçu du logo
  backendUrl: string = 'http://localhost:8089'; // URL du backend pour construire les URLs complètes
  allTypeActivite: TypeActivite[] = []; // Pour la liste déroulante des types d'activités
  selectedTypeActivites: number[] = []; // Pour stocker les IDs des types d'activités sélectionnés
  utilisateursPersonnels: any[] = [];
  currentYear: number = new Date().getFullYear();
  activiteCount: { [key: number]: number } = {}
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData!: selectEntiteInterface;
  filteredData: any[] = [];
  editForm: UntypedFormGroup;
  register!: UntypedFormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  reorderable = true;
  showParentDirection = false; // Pour afficher/cacher le champ parent
  public selected: number[] = [];
  columns = [
    { prop: 'nom' }
  ];

  // Variables pour la gestion hiérarchique
  viewMode: 'directions' | 'services' = 'directions'; // Mode d'affichage actuel
  selectedDirection: Entite | null = null; // Direction sélectionnée pour voir ses services

  constructor(
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private glogalService: GlobalService,
    private router: Router,
    private encryptionService: EncryptionService // Injectez le service
  ) {
    this.editForm = this.fb.group({
      id: new UntypedFormControl(),
      nom: new UntypedFormControl(),
      description: new UntypedFormControl(),
      logo: new UntypedFormControl(),
      responsable: new UntypedFormControl(),
      allTypeActivite: new UntypedFormControl(),
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];

      // Créer un aperçu de l'image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoPreview = e.target.result;
      };
      if (this.selectedFile) {
        reader.readAsDataURL(this.selectedFile);
      }
    }
  }

  // Réinitialiser l'aperçu du logo
  resetLogoPreview() {
    this.logoPreview = null;
    this.selectedFile = null;
  }

  // Construire l'URL complète du logo
  getLogoUrl(logoPath: string | null | undefined): string {
    if (!logoPath) {
      return '';
    }
    // Si le chemin commence déjà par http, le retourner tel quel
    if (logoPath.startsWith('http')) {
      return logoPath;
    }
    // Nettoyer le chemin (enlever les double slashes)
    const cleanPath = logoPath.replace(/\/+/g, '/');
    // S'assurer que le chemin ne commence pas par un slash
    const normalizedPath = cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath;
    // Construire l'URL complète avec le backend
    return `${this.backendUrl}/${normalizedPath}`;
  }

  // Gérer les erreurs de chargement d'images
  onImageError(event: any) {
    console.log('Erreur de chargement de l\'image:', event.target.src);
    // On pourrait afficher une image par défaut ici si nécessaire
  }

 /* viewEntiteDetails(entite: Entite): void {
    const encryptedId = this.encryptionService.encrypt(entite.id ? entite.id.toString() : '');
    this.router.navigate([`admin/entiteDetail/${encryptedId}`]);
  }*/

  viewEntiteDetails(entite: Entite): void {
    this.router.navigate(['/entiteDetail'], {
      state: { entiteId: entite.id }
    });
    console.log("Entite", entite.id)
  }


  ngOnInit() {
    this.getAllEntite();
    this.getAllUtilisateur();
    this.getAllTypeActivite();
    this.getDirections(); // Charger uniquement les direction
    this.register = this.fb.group({
      id: [''],
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      logo: ['', [Validators.required]], // Logo maintenant obligatoire
      type: [null, [Validators.required]], // Nouveau champ pour le type d'entité
      parentId: [null], // ID de la direction parente pour les services
      responsable: [null], // Permet de ne pas forcer la sélection d'un responsable
      typeActivite: [null],
      // typeActivite: [null, [Validators.required]], // Ajoutez ce FormControl pour correspondre à formControlName
      selectedTypeActivites: [null], // Vous utilisez déjà selectedTypeActivites pour stocker les IDs

    });
  }

    // Gestion du changement de type d'entité
  onTypeEntiteChange(event: any) {
    const selectedType = event.target.value;
    this.showParentDirection = selectedType === 'SERVICE';

    // Mettre à jour les validateurs
    const parentControl = this.register.get('parentId');

    if (this.showParentDirection) {
      parentControl?.setValidators([Validators.required]);
    } else {
      parentControl?.clearValidators();
      parentControl?.setValue(null);
    }

    parentControl?.updateValueAndValidity();
  }

  // Récupérer uniquement les directions
  getDirections() {
    console.log('Chargement des directions...');
    this.glogalService.get('entite/directions').subscribe({
      next: (data: Entite[]) => {
        console.log('Directions reçues:', data);
        this.directions = data;
        
        // Initialiser immédiatement les compteurs d'activités à 0
        this.directions.forEach(direction => {
          if (direction.id) {
            this.activiteCount[direction.id] = 0;
          }
        });
        
        // Charger les activités après l'initialisation
        this.loadActivitiesForEntities(this.directions);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des directions', err);
      }
    });
  }

  // Afficher les services d'une direction sélectionnée
  showDirectionServices(direction: Entite) {
    console.log('Direction sélectionnée:', direction);
    this.selectedDirection = direction;
    this.viewMode = 'services';
    console.log(`Chargement des services pour la direction ${direction.id}...`);
    this.glogalService.get(`entite/parent/${direction.id}`).subscribe({
      next: (data: Entite[]) => {
        console.log('Services reçus:', data);
        this.services = data;
        
        // Initialiser immédiatement les compteurs d'activités à 0 pour les services
        this.services.forEach(service => {
          if (service.id) {
            this.activiteCount[service.id] = 0;
          }
        });
        
        // Charger les activités pour les services après l'initialisation
        this.loadActivitiesForEntities(this.services);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des services', err);
      }
    });
  }

  // Revenir à la liste des directions
  backToDirections() {
    this.viewMode = 'directions';
    this.selectedDirection = null;
    this.services = [];
  }

  // Charger les activités pour des entités spécifiques (optimisé)
  loadActivitiesForEntities(entities: Entite[]) {
    this.glogalService.get('activite').subscribe({
      next: (activites: any[]) => {
        // Compter les activités pour chaque entité
        activites.forEach(activite => {
          if (activite.entite && activite.entite.id && this.activiteCount.hasOwnProperty(activite.entite.id)) {
            this.activiteCount[activite.entite.id]++;
          }
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement des activités', err);
      }
    });
  }

  getAllEntite(){
    this.loadingIndicator = true;
    this.glogalService.get('entite').subscribe({
      next:(value: Entite[]) =>{
        this.entite = value;
        this.filteredData = [...value];

        // Charger le nombre d'activités pour chaque entité
        this.loadActiviteCountFromAllActivites();
        setTimeout(() =>{
          this.loadingIndicator = false;
        },500);
      }
    })
  }

  getAllUtilisateur(){
    this.glogalService.get('utilisateur').subscribe({
      next:(value: Entite[]) =>{
        this.users = value;
      }
    })
  }

  getAllTypeActivite(): void {
    this.glogalService.get("typeActivite").subscribe({
      next: (data: TypeActivite[]) => {
        this.allTypeActivite = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des types d'activités", err);
      }
    });
  }

  onAddRowSave(form: UntypedFormGroup) {
    this.loadingIndicator = true;
    const formData = new FormData();
    // Ajouter les données de l'entité depuis le formulaire
    formData.append('entiteOdc', new Blob([JSON.stringify(form.value)], { type: 'application/json' }));

    // Ajouter le fichier si présent
    if (this.selectedFile) {
      formData.append('logo', this.selectedFile);
    }

    // Ajouter les types d’activités sélectionnés
    // this.selectedTypeActivites.forEach(typeId => {
    //   formData.append('typeActiviteIds', typeId.toString());
    // });
    const selectedActivityIds: number[] = this.register.get('typeActivite')?.value || [];
    selectedActivityIds.forEach(typeId => {
      formData.append('typeActiviteIds', typeId.toString());
    });

    const selectedUserId: number = this.register.get('responsable')?.value;

    if (!selectedUserId) {
      this.loadingIndicator = false;
      Swal.fire({
        icon: 'info',
        title: '<span class="text-orange-500">Info</span>',
        text: 'Aucun utilisateur sélectionné ou ID non disponible.',
        confirmButtonText: 'Ok',
        customClass: {
          confirmButton: 'bg-red-500 text-white hover:bg-red-600',
        },
      });
      return;
    }

    formData.append('utilisateurId', selectedUserId.toString());

    // formData.append('utilisateurId', this.selectedUtilisateur.id.toString());
    this.glogalService.post('entite', formData).subscribe({
      next: (response) => {
        // Ajouter la nouvelle role reçue à la liste locale
        console.log(response)
        this.entite.push(response);
        this.entite = [...this.entite];

        // Réinitialiser l'objet salles
        form.reset();
        // Fermer les modales si nécessaire
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

  onCreateSave(form: UntypedFormGroup) {
  if (!form.valid) return;

  this.loadingIndicator = true;
  const formData = new FormData();

  const newEntite = {
    nom: form.value.nom,
    description: form.value.description,
    type: form.value.type, // Ajout du type d'entité
    parentId: form.value.parentId || null,
    responsable: form.value.responsable || null, // Envoyer l'objet responsable complet
    typeActiviteIds: form.value.typeActivite || [],
  };

  // Debug log pour voir l'objet envoyé
  console.log('🔍 Objet newEntite envoyé:', JSON.stringify(newEntite, null, 2));

  // Ajouter parentId seulement si c'est un SERVICE
    if (form.value.type === 'SERVICE' && form.value.parentId) {
      newEntite.parentId = form.value.parentId;
    }

  // ✅ correspond à @RequestPart("entite")
  formData.append(
    'entite',
    new Blob([JSON.stringify(newEntite)], { type: 'application/json' })
  );

  // ✅ correspond à @RequestPart("fichier")
  if (this.selectedFile) {
    formData.append('fichier', this.selectedFile, this.selectedFile.name);
  }

  this.glogalService.post('entite',formData).subscribe({
    next: (response) => {
      this.loadingIndicator = false;
      this.modalService.dismissAll();
     this.addRecordSuccess();
     
     const createdType = form.value.type;
     
     // Rafraîchir les données selon le type d'entité créée
     if (createdType === 'DIRECTION') {
       // Nouvelle direction créée : rafraîchir la liste des directions
       console.log('Création d\'une direction - rafraîchissement des directions...');
       this.getDirections();
       // S'assurer qu'on reste en mode directions
       this.viewMode = 'directions';
     } else if (createdType === 'SERVICE') {
       // Nouveau service créé : rafraîchir les services de la direction parente
       if (this.selectedDirection) {
         console.log('Création d\'un service - rafraîchissement des services de la direction:', this.selectedDirection.nom);
         this.showDirectionServices(this.selectedDirection);
       } else {
         // Si aucune direction sélectionnée, revenir aux directions
         console.log('Création d\'un service sans direction sélectionnée - retour aux directions');
         this.getDirections();
         this.viewMode = 'directions';
       }
     }
     
     // Initialiser immédiatement le compteur d'activités pour la nouvelle entité
     if (response && (response as any).id) {
       this.activiteCount[(response as any).id] = 0;
     }
     
     this.resetForm();
    },
    error: (err) => {
      this.loadingIndicator = false;
      console.error('Erreur création :', err);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: err?.error?.message || 'Erreur lors de la création de l’entité.',
      });
    },
  });
}

// Réinitialiser le formulaire
  resetForm() {
    this.register.reset();
    this.showParentDirection = false;
    this.resetLogoPreview(); // Ajout de la réinitialisation de l'aperçu
  }

  // Afficher un message de succès
  addRecordSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'Succès',
      text: 'Entité créée avec succès !',
      timer: 2000,
      showConfirmButton: false
    });
  }

  // add new record
  addRow(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    // this.register.patchValue({
    //   id: this.getId(10, 100),
    //   img: this.newUserImg,
    // });
  }

  deleteRecordSuccess(count: number) {
    this.toastr.error(count + 'Eradication diligente pleinement consommée.', '');
  }


  /**
   * Alternative : Récupère toutes les activités et compte côté client
   */
  loadActiviteCountFromAllActivites(): void {
    this.glogalService.get('activite').subscribe({
      next: (activites: any[]) => {
        // Initialiser le compteur pour toutes les entités à 0
        this.entite.forEach(entite => {
          if (entite.id) {
            this.activiteCount[entite.id] = 0;
          }
        });

        // Compter les activités pour chaque entité
        activites.forEach(activite => {
          // console.log("Activiteby entite==========", activite);
          if (activite.entite.id && this.activiteCount.hasOwnProperty(activite.entite.id)) {
            this.activiteCount[activite.entite.id]++;

          }
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement des activités', err);
        // Initialiser à 0 en cas d'erreur
        this.entite.forEach(entite => {
          if (entite.id) {
            this.activiteCount[entite.id] = 0;
          }
        });
      }
    });
  }

  // edit record
  editRow(row: any, content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.selectedRowData = row;
    // Pré-remplir le formulaire avec les données de l'entité
    this.register.patchValue({
      nom: row.nom,
      description: row.description,
      type: row.type,
      parentId: row.parentId,
      responsable: row.responsable || null // Ajouter le responsable
    });
  }

  // update record
  onUpdateSave(form: UntypedFormGroup) {
    this.loadingIndicator = true;
    
    const formData = new FormData();
    formData.append('nom', form.value.nom);
    formData.append('description', form.value.description);
    formData.append('type', form.value.type);
    
    if (form.value.parentId) {
      formData.append('parentId', form.value.parentId.toString());
    }
    
    if (this.selectedFile) {
      formData.append('fichier', this.selectedFile, this.selectedFile.name);
    }

    const selectedActivityIds: number[] = form.value.typeActivite || [];
    selectedActivityIds.forEach(typeId => {
      formData.append('typeActiviteIds', typeId.toString());
    });

    // Gérer le responsable correctement
    if (form.value.responsable) {
      if (typeof form.value.responsable === 'object' && form.value.responsable.id) {
        formData.append('utilisateurId', form.value.responsable.id.toString());
      } else if (typeof form.value.responsable === 'number') {
        formData.append('utilisateurId', form.value.responsable.toString());
      }
    }

    this.glogalService.updateEntity('entite', this.selectedRowData.id!, formData).subscribe({
      next: (response) => {
        this.loadingIndicator = false;
        this.modalService.dismissAll();
        this.toastr.success('Entité mise à jour avec succès!');
        
        // Rafraîchir les données selon le mode actuel
        if (this.viewMode === 'directions') {
          this.getDirections();
        } else {
          this.showDirectionServices(this.selectedDirection!);
        }
        
        this.resetForm();
      },
      error: (err) => {
        this.loadingIndicator = false;
        this.toastr.error('Erreur lors de la mise à jour');
        console.error('Erreur mise à jour:', err);
      }
    });
  }

  // delete single row
  deleteSingleRow(row: any) {
    Swal.fire({
      title: 'Voulez vous vraiment supprimer cette entité?',
      text: row.nom,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.glogalService.delete('entite', row.id).subscribe({
          next: () => {
            this.toastr.success('Entité supprimée avec succès');
            // Rafraîchir les données selon le mode actuel
            if (this.viewMode === 'directions') {
              this.getDirections();
            } else {
              this.showDirectionServices(this.selectedDirection!);
            }
          },
          error: (err) => {
            this.toastr.error('Erreur lors de la suppression');
            console.error('Erreur suppression:', err);
          }
        });
      }
    });
  }

}

export interface selectEntiteInterface {
  id?: number;
  nom: string;
  description: string;
  logo: string;
  responsable: Utilisateur;
  type?: string;
  parentId?: number;
}
