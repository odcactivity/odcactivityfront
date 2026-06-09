import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '@core/service/global.service';
import { Entite } from '@core/models/Entite';
import { Utilisateur } from '@core/models/Utilisateur.model';
import { TypeActivite } from '@core/models/TypeActivite';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pilier-odc',
  templateUrl: './pilier-odc.component.html',
  styleUrls: ['./pilier-odc.component.sass'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgClass, NgForOf, NgIf],
})
export class PilierOdcComponent implements OnInit {
  services: Entite[] = [];
  users: Utilisateur[] = [];
  allTypeActivite: TypeActivite[] = [];
  
  odcDirection: Entite | null = null;
  odcDirectionId: number | null = null;
  
  selectedFile: File | null = null;
  logoPreview: string | null = null;
  activiteCount: { [key: number]: number } = {};
  
  register!: UntypedFormGroup;
  selectedRowData: any = null;
  loadingIndicator = false;

  private fb = inject(UntypedFormBuilder);
  private modalService = inject(NgbModal);
  private toastr = inject(ToastrService);
  private globalService = inject(GlobalService);

  ngOnInit(): void {
    this.register = this.fb.group({
      id: [''],
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      responsable: [null, [Validators.required]],
      typeActivite: [null],
    });

    this.loadOdcParentAndServices();
    this.getAllUtilisateur();
    this.getAllTypeActivite();
  }

  private normalizeEntiteLabel(raw: string | undefined | null): string {
    return String(raw ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Charge toutes les directions pour localiser la direction ODC parente,
   * puis charge ses services.
   */
  loadOdcParentAndServices(): void {
    this.loadingIndicator = true;
    this.globalService.get('entite/directions').subscribe({
      next: (directions: Entite[]) => {
        // Trouver la direction dont le nom contient ODC ou Orange Digital Center
        const found = directions.find((d) => {
          const name = this.normalizeEntiteLabel(d.nom);
          return name.includes('orange digital center') || name.includes('odc');
        });

        if (found && found.id) {
          this.odcDirection = found;
          this.odcDirectionId = found.id;
          this.loadServicesByParent(found.id);
        } else {
          console.warn('Direction ODC non trouvée parmi les directions existantes.');
          this.loadingIndicator = false;
        }
      },
      error: (err) => {
        console.error('Erreur chargement directions:', err);
        this.loadingIndicator = false;
      }
    });
  }

  /**
   * Charge les services d'un parent spécifique
   */
  loadServicesByParent(parentId: number): void {
    this.globalService.get(`entite/parent/${parentId}`).subscribe({
      next: (data: Entite[]) => {
        this.services = data;
        
        // Initialiser les compteurs d'activités
        this.services.forEach(service => {
          if (service.id) {
            this.activiteCount[service.id] = 0;
          }
        });
        
        this.loadActivitiesForEntities(this.services);
        this.loadingIndicator = false;
      },
      error: (err) => {
        console.error('Erreur chargement services ODC:', err);
        this.loadingIndicator = false;
      }
    });
  }

  /**
   * Charge les activités pour compter le nombre d'activités de chaque service
   */
  loadActivitiesForEntities(entities: Entite[]): void {
    this.globalService.get('activite').subscribe({
      next: (activites: any[]) => {
        activites.forEach(activite => {
          if (activite.entite && activite.entite.id && this.activiteCount.hasOwnProperty(activite.entite.id)) {
            this.activiteCount[activite.entite.id]++;
          }
        });
      },
      error: (err) => {
        console.error('Erreur comptage activités:', err);
      }
    });
  }

  getAllUtilisateur(): void {
    this.globalService.get('utilisateur').subscribe({
      next: (value: Utilisateur[]) => {
        this.users = value;
      },
      error: (err) => {
        console.error('Erreur chargement utilisateurs:', err);
      }
    });
  }

  getAllTypeActivite(): void {
    this.globalService.get('typeActivite').subscribe({
      next: (data: TypeActivite[]) => {
        this.allTypeActivite = data;
      },
      error: (err) => {
        console.error('Erreur chargement types activités:', err);
      }
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoPreview = e.target.result;
      };
      if (this.selectedFile) {
        reader.readAsDataURL(this.selectedFile);
      }
    }
  }

  resetLogoPreview(): void {
    this.logoPreview = null;
    this.selectedFile = null;
  }

  getLogoUrl(logoPath: string | null | undefined): string {
    if (!logoPath || logoPath.trim() === '' || logoPath === 'https://drive.google.com/thumbnail?id=') {
      return 'assets/images/default-entite.png';
    }
    if (logoPath.startsWith('https://drive.google.com/thumbnail?id=')) {
      return logoPath;
    }
    if (!logoPath.startsWith('http')) {
      const cleanPath = logoPath.replace(/\\/g, '/').replace(/\/+/g, '/');
      const normalizedPath = cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath;
      return environment.apiUrl + `/${normalizedPath}`;
    }
    return logoPath;
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/default-entite.png';
  }

  addRecord(content: any): void {
    this.resetForm();
    // Le logo est obligatoire lors de la création
    this.register.get('logo')?.setValidators([Validators.required]);
    this.register.get('logo')?.updateValueAndValidity();
    
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  editRow(row: any, content: any): void {
    this.selectedRowData = row;
    this.resetLogoPreview();
    
    // Le logo n'est pas obligatoire en édition
    this.register.get('logo')?.clearValidators();
    this.register.get('logo')?.updateValueAndValidity();
    
    this.register.patchValue({
      id: row.id,
      nom: row.nom,
      description: row.description,
      logo: '',
      responsable: row.responsable || null,
      typeActivite: row.typeActivitesIds ? row.typeActivitesIds.map((t: any) => t.id) : [],
    });

    if (row.logo) {
      this.logoPreview = this.getLogoUrl(row.logo);
    }

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  onCreateSave(form: UntypedFormGroup): void {
    if (!form.valid) return;
    if (!this.odcDirectionId) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'La direction ODC parente est introuvable. Impossible de créer le service.',
      });
      return;
    }

    this.loadingIndicator = true;
    const formData = new FormData();

    const newEntite = {
      nom: form.value.nom,
      description: form.value.description,
      type: 'SERVICE',
      parentId: this.odcDirectionId,
      responsable: form.value.responsable || null,
      typeActiviteIds: form.value.typeActivite || [],
    };

    formData.append('entite', new Blob([JSON.stringify(newEntite)], { type: 'application/json' }));

    if (this.selectedFile) {
      formData.append('fichier', this.selectedFile, this.selectedFile.name);
    }

    this.globalService.post('entite', formData).subscribe({
      next: (response: any) => {
        this.loadingIndicator = false;
        this.modalService.dismissAll();
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Service ODC créé avec succès !',
          timer: 2000,
          showConfirmButton: false
        });
        
        if (response && response.id) {
          this.activiteCount[response.id] = 0;
        }
        
        this.loadServicesByParent(this.odcDirectionId!);
        this.resetForm();
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error('Erreur création service ODC:', err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: err?.error?.message || 'Erreur lors de la création du service.',
        });
      }
    });
  }

  onUpdateSave(form: UntypedFormGroup): void {
    this.loadingIndicator = true;
    const formData = new FormData();

    formData.append('nom', form.value.nom);
    formData.append('description', form.value.description);
    formData.append('type', 'SERVICE');
    
    if (this.odcDirectionId) {
      formData.append('parentId', this.odcDirectionId.toString());
    }

    if (this.selectedFile) {
      formData.append('fichier', this.selectedFile, this.selectedFile.name);
    }

    const selectedActivityIds: number[] = form.value.typeActivite || [];
    selectedActivityIds.forEach(typeId => {
      formData.append('typeActiviteIds', typeId.toString());
    });

    if (form.value.responsable) {
      if (typeof form.value.responsable === 'object' && form.value.responsable.id) {
        formData.append('utilisateurId', form.value.responsable.id.toString());
      } else if (typeof form.value.responsable === 'number') {
        formData.append('utilisateurId', form.value.responsable.toString());
      }
    }

    this.globalService.updateEntity('entite', this.selectedRowData.id, formData).subscribe({
      next: () => {
        this.loadingIndicator = false;
        this.modalService.dismissAll();
        this.toastr.success('Service ODC mis à jour avec succès !');
        
        this.loadServicesByParent(this.odcDirectionId!);
        this.resetForm();
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.error('Erreur mise à jour service ODC:', err);
        this.toastr.error('Erreur lors de la mise à jour.');
      }
    });
  }

  deleteSingleRow(row: any): void {
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer ce service ODC ?',
      text: row.nom,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loadingIndicator = true;
        this.globalService.delete('entite', row.id).subscribe({
          next: () => {
            this.loadingIndicator = false;
            this.toastr.error('Service ODC supprimé avec succès.');
            this.loadServicesByParent(this.odcDirectionId!);
          },
          error: (err) => {
            this.loadingIndicator = false;
            console.error('Erreur suppression service ODC:', err);
            this.toastr.error('Erreur lors de la suppression.');
          }
        });
      }
    });
  }

  resetForm(): void {
    this.register.reset();
    this.resetLogoPreview();
    this.selectedRowData = null;
  }
}

