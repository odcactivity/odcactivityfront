import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import { canonicalizeAppRoles } from '@core/utils/app-roles';
import { GlobalService } from '@core/service/global.service';
import { SupportactivityService } from '@core/service/supportactivity.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';

interface StructureCourriersTableau {
  enAttenteValidation: unknown[];
  recus: unknown[];
  emis: unknown[];
  tout: unknown[];
}

interface CibleInterne {
  id: number;
  nom: string;
}

@Component({
  selector: 'app-structure-courriers',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModalModule],
  templateUrl: './structure-courriers.component.html',
  styleUrl: './structure-courriers.component.scss',
})
export class StructureCourriersComponent implements OnInit, OnDestroy {
  onglet: 'tout' | 'attente' | 'recus' | 'emis' = 'tout';
  loading = false;
  tout: unknown[] = [];
  enAttente: unknown[] = [];
  recus: unknown[] = [];
  emis: unknown[] = [];
  ciblesInternes: CibleInterne[] = [];
  selected: Record<string, unknown> | null = null;
  structureLabel = 'Structure';
  private dataSub?: Subscription;

  interne = {
    cibleDirectionId: null as number | null,
    numero: '',
    objet: '',
    expediteur: '',
    fichier: null as File | null,
  };

  replyObjet = '';
  replyMessage = '';
  replyFichier: File | null = null;

  reponsesCourrier: unknown[] = [];
  editCourrier = { numero: '', objet: '', expediteur: '' };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService,
    private readonly global: GlobalService,
    private readonly supportactivityService: SupportactivityService,
    private readonly toast: ToastrService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((d) => {
      this.structureLabel =
        d['structureLabel'] != null && String(d['structureLabel']).trim() !== ''
          ? String(d['structureLabel'])
          : this.labelFromRoles();
      this.load();
    });
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }

  private labelFromRoles(): string {
    const r = canonicalizeAppRoles(this.auth.getCurrentUserFromStorage()?.roles || []);
    if (r.includes('DIRECTEUR_FONDATION')) {
      return 'Fondation';
    }
    if (r.includes('DIRECTEUR_RSE')) {
      return 'RSE';
    }
    if (r.includes('DIRECTEUR_DCI')) {
      return 'DCI';
    }
    return 'Structure';
  }

  private userEmail(): string {
    const u = this.auth.getCurrentUserFromStorage() as { email?: string } | null;
    return (u?.email || '').trim();
  }

  load(): void {
    this.loading = true;
    this.selected = null;
    forkJoin({
      tab: this.global.getStructureCourriersTableau(),
      cibles: this.global.getStructureCiblesInternes().pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ tab, cibles }) => {
        const t = tab as unknown as StructureCourriersTableau;
        this.tout = Array.isArray(t?.tout) ? t.tout : [];
        this.enAttente = Array.isArray(t?.enAttenteValidation) ? t.enAttenteValidation : [];
        this.recus = Array.isArray(t?.recus) ? t.recus : [];
        this.emis = Array.isArray(t?.emis) ? t.emis : [];
        this.ciblesInternes = Array.isArray(cibles) ? (cibles as CibleInterne[]) : [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Impossible de charger les courriers.');
      },
    });
  }

  setOnglet(t: 'tout' | 'attente' | 'recus' | 'emis'): void {
    this.onglet = t;
    this.selected = null;
    this.replyObjet = '';
    this.replyMessage = '';
    this.replyFichier = null;
  }

  rowsCourants(): unknown[] {
    switch (this.onglet) {
      case 'tout':
        return this.tout;
      case 'attente':
        return this.enAttente;
      case 'recus':
        return this.recus;
      default:
        return this.emis;
    }
  }

  selectRow(row: unknown): void {
    this.selected = row && typeof row === 'object' ? (row as Record<string, unknown>) : null;
    this.replyObjet = '';
    this.replyMessage = '';
    this.replyFichier = null;
    this.reponsesCourrier = [];
    const rawId = this.selected?.['id'];
    const id = typeof rawId === 'number' ? rawId : Number(rawId);
    if (this.selected && Number.isFinite(id)) {
      this.global.getCourrierReponses(id).subscribe({
        next: (r) => {
          this.reponsesCourrier = Array.isArray(r) ? r : [];
        },
        error: () => {
          this.reponsesCourrier = [];
        },
      });
    }
  }

  libelleEtapeCourrier(row: Record<string, unknown>): string {
    const s = row['statut'] != null ? String(row['statut']) : '';
    const map: Record<string, string> = {
      ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE: 'En attente de votre validation',
      ATTENTE_VALIDATION_DIRECTEUR_ODC: 'En validation directeur ODC',
      ATTENTE_VALIDATION_ODC: 'En validation ODC',
      EN_REVISION_ADMIN_COURRIER: 'Révision admin',
      ENVOYER: 'Reçu sur votre structure — à traiter',
      IMPUTER: 'Transmis à un service',
      EN_COURS: 'Pris en charge / en traitement',
      REPONDU: 'Répondu',
      TRANSMIS_DCIRE: 'Transmis (sortant)',
      ARCHIVER: 'Archivé',
    };
    return map[s] || s || '—';
  }

  peutAccuserReception(row: Record<string, unknown> | null): boolean {
    if (!row) {
      return false;
    }
    return String(row['statut'] || '') === 'ENVOYER';
  }

  peutRepondre(row: Record<string, unknown> | null): boolean {
    if (!row) {
      return false;
    }
    const s = String(row['statut'] || '');
    if (s === 'REPONDU' || s === 'ARCHIVER' || s === 'ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE') {
      return false;
    }
    return s === 'ENVOYER' || s === 'EN_COURS' || s === 'IMPUTER';
  }

  accuserReceptionOp(): void {
    const raw = this.selected?.['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id) || !this.peutAccuserReception(this.selected)) {
      return;
    }
    this.global.postStructureAccuserReceptionCourrier(id).subscribe({
      next: () => {
        this.toast.success('Accusé de réception enregistré — statut mis à jour (visible côté expéditeur).');
        this.load();
      },
      error: () => this.toast.error('Action impossible.'),
    });
  }

  envoyerReponse(): void {
    const raw = this.selected?.['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    const email = this.userEmail();
    if (raw == null || !Number.isFinite(id) || !email) {
      this.toast.warning('Sélectionnez un courrier et vérifiez votre profil (e-mail).');
      return;
    }
    const obj = (this.replyObjet || '').trim();
    const msg = (this.replyMessage || '').trim();
    if (!obj || !msg) {
      this.toast.warning('Objet et message sont obligatoires pour une réponse.');
      return;
    }
    const fd = new FormData();
    fd.append('courrierId', String(id));
    fd.append('email', email);
    fd.append('objet', obj);
    fd.append('message', msg);
    if (this.replyFichier) {
      fd.append('file', this.replyFichier);
    }
    this.global.postCourrierReponseMultipart(fd).subscribe({
      next: () => {
        this.toast.success('Réponse enregistrée — le courrier est marqué comme répondu.');
        this.replyObjet = '';
        this.replyMessage = '';
        this.replyFichier = null;
        this.load();
      },
      error: () => this.toast.error('Envoi de la réponse impossible.'),
    });
  }

  onReplyFile(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    this.replyFichier = input.files?.[0] ?? null;
  }

  onInterneFile(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    this.interne.fichier = input.files?.[0] ?? null;
  }

  openInterneModal(tpl: TemplateRef<unknown>): void {
    this.interne = {
      cibleDirectionId: null,
      numero: '',
      objet: '',
      expediteur: '',
      fichier: null,
    };
    this.modalService.open(tpl, { size: 'lg', scrollable: true });
  }

  saveInterne(modal: { close: () => void }): void {
    if (
      this.interne.cibleDirectionId == null ||
      !this.interne.numero?.trim() ||
      !this.interne.objet?.trim() ||
      !this.interne.expediteur?.trim()
    ) {
      this.toast.warning('Renseignez la direction cible, le numéro, l’objet et l’expéditeur.');
      return;
    }
    const fd = new FormData();
    fd.append('cibleDirectionId', String(this.interne.cibleDirectionId));
    fd.append('numero', this.interne.numero.trim());
    fd.append('objet', this.interne.objet.trim());
    fd.append('expediteur', this.interne.expediteur.trim());
    if (this.interne.fichier) {
      fd.append('fichier', this.interne.fichier);
    }
    this.global.postMultipart('api/courriers/structure-directeur/courrier-interne', fd).subscribe({
      next: () => {
        this.toast.success('Courrier interne enregistré.');
        modal.close();
        this.load();
      },
      error: () => this.toast.error('Enregistrement impossible.'),
    });
  }

  validerReception(): void {
    const raw = this.selected?.['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    this.global.postStructureValiderReceptionCourrier(id).subscribe({
      next: () => {
        this.toast.success('Courrier validé — disponible pour traitement dans votre structure.');
        this.load();
      },
      error: () => this.toast.error('Validation impossible.'),
    });
  }

  peutModifierOuSupprimerCourrier(row: Record<string, unknown>): boolean {
    const s = String(row['statut'] || '');
    return s !== 'ARCHIVER';
  }

  openEditCourrierModal(tpl: TemplateRef<unknown>, row: Record<string, unknown>): void {
    this.selected = row;
    this.editCourrier = {
      numero: String(row['numero'] ?? ''),
      objet: String(row['objet'] ?? ''),
      expediteur: String(row['expediteur'] ?? ''),
    };
    this.modalService.open(tpl, { size: 'lg', scrollable: true });
  }

  saveEditCourrier(modal: { close: () => void }): void {
    const raw = this.selected?.['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    const { numero, objet, expediteur } = this.editCourrier;
    if (!numero?.trim() || !objet?.trim() || !expediteur?.trim()) {
      this.toast.warning('Numéro, objet et expéditeur sont obligatoires.');
      return;
    }
    this.global
      .patchCourrierMetadonnees(id, {
        numero: numero.trim(),
        objet: objet.trim(),
        expediteur: expediteur.trim(),
      })
      .subscribe({
        next: () => {
          this.toast.success('Courrier mis à jour.');
          modal.close();
          this.load();
        },
        error: () => this.toast.error('Modification impossible.'),
      });
  }

  supprimerCourrierStructure(row: Record<string, unknown>): void {
    const raw = row['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    if (!window.confirm('Supprimer définitivement ce courrier et son historique ?')) {
      return;
    }
    this.global.deleteStructureDirecteurCourrier(id).subscribe({
      next: () => {
        this.toast.success('Courrier supprimé.');
        this.selected = null;
        this.load();
      },
      error: () => this.toast.error('Suppression impossible.'),
    });
  }

  openPiece(row: Record<string, unknown>): void {
    const raw = row['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    const numero = row['numero'];
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    this.supportactivityService.downloadCourrierFile(id).subscribe({
      next: (value: { body?: Blob; headers?: { get: (h: string) => string | null } }) => {
        const blob = value.body;
        if (!blob) {
          return;
        }
        let filename = String(numero ?? 'courrier');
        const cd = value.headers?.get('content-disposition');
        if (cd) {
          const match = cd.match(/filename="(.+)"/);
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
      },
      error: () => this.toast.error('Téléchargement impossible.'),
    });
  }
}
