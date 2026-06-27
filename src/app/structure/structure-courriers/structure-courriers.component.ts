import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  onglet: 'recus' | 'emis' | 'repondus' | 'nonRepondus' = 'recus';
  loading = false;
  tout: unknown[] = [];
  enAttente: unknown[] = [];
  recus: unknown[] = [];
  emis: unknown[] = [];
  ciblesInternes: CibleInterne[] = [];
  selected: Record<string, unknown> | null = null;
  structureLabel = 'Structure';
  private dataSub?: Subscription;

  // Variables pour la délégation par email
  deleguerEmail = '';
  deleguerNote = '';

  // Variables pour la création de courrier (style ODC director)
  structureEmissionType: 'dcire' | 'email' = 'dcire';
  structureEmissionEmail = '';
  structureCourrierCreate = { expediteur: '', objet: '', fichier: null as File | null };

  replyObjet = '';
  replyMessage = '';
  replyFichier: File | null = null;

  reponsesCourrier: unknown[] = [];
  historiquesCourrier: Record<string, unknown>[] = [];
  editCourrier = { numero: '', objet: '', expediteur: '' };
  /** Direction de l’utilisateur connecté (pour distinguer détention réelle vs simple visibilité « émis »). */
  private maDirectionId: number | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly auth: AuthService,
    private readonly global: GlobalService,
    private readonly supportactivityService: SupportactivityService,
    private readonly toast: ToastrService,
    private readonly modalService: NgbModal
  ) {}

  /** Fondation / RSE / DCI : réception et réponse uniquement (émission réservée à la DCIRE). */
  receiveOnlyMode = false;

  ngOnInit(): void {
    const roles = canonicalizeAppRoles(this.auth.getCurrentUserFromStorage()?.roles || []);
    // Toutes les structures RSE, DCI et Fondation ont le même workflow complet que ODC
    this.receiveOnlyMode = false;
    const u = this.auth.getCurrentUserFromStorage() as { entite?: { id?: number } } | null;
    const raw = u?.entite?.id;
    this.maDirectionId = raw != null && Number.isFinite(Number(raw)) ? Number(raw) : null;
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
    this.historiquesCourrier = [];
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

  setOnglet(t: 'recus' | 'emis' | 'repondus' | 'nonRepondus'): void {
    this.onglet = t;
    this.selected = null;
    this.historiquesCourrier = [];
    this.replyObjet = '';
    this.replyMessage = '';
    this.replyFichier = null;
  }

  get listRecus(): unknown[] {
    return this.recusEtLegacyAttente();
  }

  get listEmis(): unknown[] {
    return this.emis;
  }

  get listRepondus(): unknown[] {
    return this.tout.filter((row: any) => row.statut === 'REPONDU');
  }

  get listNonRepondus(): unknown[] {
    return this.recusEtLegacyAttente().filter((row: any) => row.statut !== 'REPONDU' && row.statut !== 'ARCHIVER');
  }

  get divisionLabel(): string {
    const r = canonicalizeAppRoles(this.auth.getCurrentUserFromStorage()?.roles || []);
    if (r.includes('DIRECTEUR_FONDATION')) return 'FONDATION';
    if (r.includes('DIRECTEUR_RSE')) return 'RSE';
    if (r.includes('DIRECTEUR_DCI')) return 'DCI';
    return 'STRUCTURE';
  }

  repondus(): unknown[] {
    return this.tout.filter((row) => {
      const r = row as Record<string, unknown>;
      return String(r['statut'] || '') === 'REPONDU';
    });
  }

  /** Reçus + anciens en attente validation (rétrocompatibilité) — Fondation / RSE / DCI. */
  recusEtLegacyAttente(): unknown[] {
    const byId = new Map<number, unknown>();
    for (const row of [...this.enAttente, ...this.recus]) {
      const r = row as Record<string, unknown>;
      const id = typeof r['id'] === 'number' ? r['id'] : Number(r['id']);
      if (Number.isFinite(id) && !byId.has(id)) {
        byId.set(id, row);
      }
    }
    return [...byId.values()];
  }

  rowsCourants(): unknown[] {
    if (this.receiveOnlyMode) {
      if (this.onglet === 'repondus') {
        return this.repondus();
      }
      return this.recusEtLegacyAttente();
    }
    switch (this.onglet) {
      case 'recus':
        return this.listRecus;
      case 'emis':
        return this.listEmis;
      case 'repondus':
        return this.listRepondus;
      case 'nonRepondus':
        return this.listNonRepondus;
      default:
        return this.listRecus;
    }
  }

  selectRow(row: unknown): void {
    this.selected = row && typeof row === 'object' ? (row as Record<string, unknown>) : null;
    this.replyObjet = '';
    this.replyMessage = '';
    this.replyFichier = null;
    this.reponsesCourrier = [];
    this.historiquesCourrier = [];
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
      this.global.get(`api/historique/courrier/${id}`).subscribe({
        next: (h) => {
          this.historiquesCourrier = Array.isArray(h) ? (h as Record<string, unknown>[]) : [];
        },
        error: () => {
          this.historiquesCourrier = [];
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

  /** Courrier réellement en possession de ma direction (ou d’un service rattaché). */
  private estDetenuParMaStructure(row: Record<string, unknown> | null): boolean {
    if (!row || this.maDirectionId == null) {
      return false;
    }
    const entRaw = row['entite'] as unknown;
    // entite peut être un objet OU un id (selon API / sérialisation)
    const entId =
      typeof entRaw === 'number'
        ? entRaw
        : typeof (entRaw as any)?.id === 'number'
          ? (entRaw as any).id
          : Number((entRaw as any)?.id);
    const entIdFlat = typeof row['entiteId'] === 'number' ? (row['entiteId'] as number) : Number(row['entiteId']);
    const directionInitialId =
      typeof (row['directionInitial'] as any)?.id === 'number'
        ? (row['directionInitial'] as any).id
        : Number((row['directionInitial'] as any)?.id ?? row['directionInitialId']);

    if (Number.isFinite(entId) && entId === this.maDirectionId) {
      return true;
    }
    if (Number.isFinite(entIdFlat) && entIdFlat === this.maDirectionId) {
      return true;
    }
    // Certains courriers DCIRE vers structure peuvent rester “rattachés” à directionInitial
    if (Number.isFinite(directionInitialId) && directionInitialId === this.maDirectionId) {
      return true;
    }

    const entObj = typeof entRaw === 'object' && entRaw != null ? (entRaw as any) : null;
    const parent = entObj?.parent as any;
    const pid = typeof parent?.id === 'number' ? parent.id : Number(parent?.id);
    if (Number.isFinite(pid) && pid === this.maDirectionId) {
      return true;
    }
    const parentIdFlat = typeof entObj?.parentId === 'number' ? entObj.parentId : Number(entObj?.parentId);
    return Number.isFinite(parentIdFlat) && parentIdFlat === this.maDirectionId;
  }

  peutAccuserReception(row: Record<string, unknown> | null): boolean {
    if (!row) {
      return false;
    }
    return String(row['statut'] || '') === 'ENVOYER' && this.estDetenuParMaStructure(row);
  }

  private estCourrierAdresseDepuisDcire(row: Record<string, unknown>): boolean {
    const exp = String(row['expediteur'] || '').toUpperCase();
    if (exp.includes('KEÏTA') || exp.includes('DCIRE')) {
      return true;
    }
    const so = row['structureOrigine'] as { nom?: string } | undefined;
    const nom = String(so?.nom || '').toUpperCase();
    return nom.includes('DCIRE') || nom.replace(/\s/g, '').includes('DCIRE');
  }

  peutRepondre(row: Record<string, unknown> | null): boolean {
    if (!row) {
      return false;
    }
    const s = String(row['statut'] || '');
    if (s === 'REPONDU' || s === 'ARCHIVER' || s === 'ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE') {
      return false;
    }
    if (!this.estDetenuParMaStructure(row)) {
      return false;
    }
    if (this.receiveOnlyMode && !this.estCourrierAdresseDepuisDcire(row)) {
      return false;
    }
    return s === 'ENVOYER' || s === 'EN_COURS' || s === 'IMPUTER';
  }

  scrollVersFormulaireReponse(): void {
    setTimeout(() => {
      document.getElementById('structure-reponse-courrier')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  preparerReponse(row: unknown): void {
    this.selectRow(row);
    if (this.peutRepondre(this.selected)) {
      const num = String(this.selected?.['numero'] || '');
      if (!this.replyObjet.trim()) {
        this.replyObjet = num ? `Re: ${num}` : 'Réponse au courrier';
      }
      this.scrollVersFormulaireReponse();
    } else {
      this.toast.warning('Ce courrier ne peut pas recevoir de réponse pour le moment.');
    }
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
      error: (err: { error?: { message?: string } }) => {
        const msg = err?.error?.message || 'Envoi de la réponse impossible.';
        this.toast.error(msg);
      },
    });
  }

  onReplyFile(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    this.replyFichier = input.files?.[0] ?? null;
  }

  openStructureCreateModal(tpl: unknown): void {
    this.structureCourrierCreate = { expediteur: this.structureLabel, objet: '', fichier: null };
    this.structureEmissionType = 'dcire';
    this.structureEmissionEmail = '';
    this.modalService.open(tpl as TemplateRef<unknown>, { size: 'lg', scrollable: true });
  }

  onStructureCreateFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.structureCourrierCreate.fichier = input.files?.[0] ?? null;
  }

  saveStructureCourrier(modal: { close: () => void }): void {
    const exp = (this.structureCourrierCreate.expediteur || '').trim();
    const obj = (this.structureCourrierCreate.objet || '').trim();

    if (!exp || !obj) {
      this.toast.warning('Expéditeur et objet sont obligatoires.');
      return;
    }

    if (this.structureEmissionType === 'email') {
      const emailDest = (this.structureEmissionEmail || '').trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailDest || !emailRegex.test(emailDest)) {
        this.toast.error('Veuillez saisir une adresse email destinataire valide.');
        return;
      }
      const fd = new FormData();
      fd.append('numero', `${this.divisionLabel}-${Date.now()}`);
      fd.append('expediteur', exp);
      fd.append('objet', obj);
      fd.append('emailDestinataire', emailDest);
      if (this.maDirectionId != null) {
        fd.append('directionId', String(this.maDirectionId));
      }
      if (this.structureCourrierCreate.fichier) {
        fd.append('fichier', this.structureCourrierCreate.fichier);
      }
      this.loading = true;
      this.global.postMultipart('api/courriers/odc/emission-email', fd).subscribe({
        next: () => {
          this.loading = false;
          modal.close();
          this.toast.success('Courrier envoyé par email avec succès.');
          this.load();
        },
        error: (err: any) => {
          this.loading = false;
          this.toast.error(err?.error?.message || 'Envoi par email impossible.');
        },
      });
      return;
    }

    // Option DCIRE
    if (this.maDirectionId == null) {
      this.toast.error('Direction introuvable.');
      return;
    }
    const fd = new FormData();
    fd.append('numero', `${this.divisionLabel}-${Date.now()}`);
    fd.append('expediteur', exp);
    fd.append('objet', obj);
    fd.append('directionId', String(this.maDirectionId));
    if (this.structureCourrierCreate.fichier) {
      fd.append('fichier', this.structureCourrierCreate.fichier);
    }
    this.loading = true;
    this.global.postMultipart('api/courriers/reception', fd).subscribe({
      next: () => {
        this.loading = false;
        modal.close();
        this.toast.success('Courrier envoyé vers la DCIRE.');
        this.load();
      },
      error: (err: any) => {
        this.loading = false;
        this.toast.error(err?.error?.message || 'Envoi impossible.');
      },
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

  peutDeleguer(row: Record<string, unknown> | null): boolean {
    if (!row) {
      return false;
    }
    const s = String(row['statut'] || '');
    if (s === 'REPONDU' || s === 'ARCHIVER' || s === 'ATTENTE_VALIDATION_DIRECTEUR_STRUCTURE') {
      return false;
    }
    return this.estDetenuParMaStructure(row);
  }

  openDeleguerModal(tpl: TemplateRef<unknown>, row: Record<string, unknown>): void {
    this.selected = row;
    this.deleguerEmail = '';
    this.deleguerNote = '';
    this.modalService.open(tpl, { size: 'md', backdrop: 'static' });
  }

  validerDelegation(modal: { close: () => void }): void {
    const raw = this.selected?.['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    const email = (this.deleguerEmail || '').trim();
    if (!email) {
      this.toast.warning("L'adresse e-mail est obligatoire.");
      return;
    }
    const note = (this.deleguerNote || '').trim();

    this.global.postStructureDeleguerEmail(id, email, note).subscribe({
      next: () => {
        this.toast.success('Le courrier a été délégué avec succès par e-mail.');
        modal.close();
        this.load();
      },
      error: (err: { error?: { message?: string } }) => {
        const msg = err?.error?.message || 'Impossible de déléguer le courrier.';
        this.toast.error(msg);
      }
    });
  }

  openPiece(row: Record<string, unknown>): void {
    const raw = row['id'];
    const id = typeof raw === 'number' ? raw : Number(raw);
    const numero = row['numero'];
    if (raw == null || !Number.isFinite(id)) {
      return;
    }
    this.global.openCourrierFile(id).subscribe({
      next: (resp) => {
        try {
          this.global.triggerFileDownloadFromResponse(resp, `${numero ?? 'courrier'}.pdf`);
        } catch {
          this.toast.error('Téléchargement impossible.');
        }
      },
      error: () => this.toast.error('Téléchargement impossible.'),
    });
  }
}
