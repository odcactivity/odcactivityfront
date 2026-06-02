
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityValidation } from '@core/models/ActivityValidation';

import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public baseUrl = environment.apiUrl;
  a: any;
  constructor(private http: HttpClient) { }

  /**
   * Récupère des données à partir d'un point de terminaison spécifié.
   *
   * @param {string} name - Le nom du point de l'endpoint.
   * @return {Observable<any>} Un observable qui émet les données récupérées.
   */
  get(name: string): Observable<any> {
    const fullUrl = `${this.baseUrl}/${name}`;
    console.log('🌐 Appel GET à l\'URL complète:', fullUrl);
    return this.http.get(fullUrl).pipe(
      catchError(this.handleError.bind(this))
    );

  }
  getParticipantByCritere(endpoint: string, dateDebut: string, dateFin: string, activiteId: number, entiteId: number): Observable<any> {
    console.log('Appel GET à l\'endpoint :', `${this.baseUrl}/${endpoint}/${dateDebut}/${dateFin}/${activiteId}/${entiteId}`);
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getId(name: string, id: number): Observable<any> {
    console.log('Appel GET à l\'endpoint :', `${this.baseUrl}/${name}/${id}`);
    return this.http.get(`${this.baseUrl}/${name}/${id}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getById(name: string, id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}/${id}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  getByActivite(name: string, id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}/${id}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }


  /**
   * Envoie une requête POST à l'endpoint spécifié pour créer une nouvelle ressource.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {Object} object - Les données à envoyer dans le corps de la requête.
   * @return {Observable<Object>} Un observable qui émet la réponse du serveur.
   */
  post(name: string, object: Object): Observable<Object> {
    console.log('Appel POST :', `${this.baseUrl}/${name}`);
    return this.http.post(`${this.baseUrl}/${name}`, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  /** POST multipart (FormData) — ne pas forcer Content-Type, le navigateur pose le boundary. */
  postMultipart(path: string, formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/${path}`, formData).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  postCourrierValiderTransmissionDcire(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/odc/${courrierId}/valider-transmission-dcire`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierResoumettreRevision(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/odc/${courrierId}/resoumettre-revision`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  getCourriersValidationDirecteurOdc(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/api/courriers/odc-directeur/en-cours-validation`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierSuggestionDirecteurOdc(courrierId: number, texte: string): Observable<any> {
    const params = new HttpParams().set('texte', texte);
    return this.http
      .post(`${this.baseUrl}/api/courriers/odc-directeur/${courrierId}/suggestion`, null, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierAnnulerDirecteurOdc(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/odc-directeur/${courrierId}/annuler`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  getCourrierReponsesEnAttenteDirecteurOdc(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/api/courriers/odc-directeur/reponses-en-attente`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getServicesOdcPourDirecteur(): Observable<{ id: number; nom: string }[]> {
    return this.http
      .get<{ id: number; nom: string }[]>(`${this.baseUrl}/api/courriers/odc-directeur/services-odc`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierValiderReponseDirecteurOdc(courrierId: number, suggestion?: string): Observable<any> {
    let params = new HttpParams();
    if (suggestion != null && suggestion.trim() !== '') {
      params = params.set('suggestion', suggestion.trim());
    }
    return this.http
      .post(`${this.baseUrl}/api/courriers/odc-directeur/${courrierId}/valider-reponse`, {}, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierDeleguerServiceDirecteurOdc(
    courrierId: number,
    serviceEntiteId: number,
    note?: string
  ): Observable<any> {
    let params = new HttpParams().set('serviceEntiteId', String(serviceEntiteId));
    if (note != null && note.trim() !== '') {
      params = params.set('note', note.trim());
    }
    return this.http
      .post(`${this.baseUrl}/api/courriers/odc-directeur/${courrierId}/deleguer-service`, {}, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierConfirmerEnvoiPhysiqueOdc(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/odc-directeur/${courrierId}/confirmer-envoi-physique`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierValiderDechargeReponseDcire(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/dcire/${courrierId}/valider-decharge-reponse`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierTransmettreVersOdc(courrierId: number, odcDirectionId: number): Observable<any> {
    const params = new HttpParams().set('odcDirectionId', String(odcDirectionId));
    return this.http
      .post(`${this.baseUrl}/api/courriers/dcire/${courrierId}/transmettre-odc`, {}, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }

  postCourrierValiderExpeditionExterneDcire(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/dcire/${courrierId}/valider-expedition-externe`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  getStructureCourriersTableau(): Observable<Record<string, unknown[]>> {
    return this.http
      .get<Record<string, unknown[]>>(`${this.baseUrl}/api/courriers/structure-directeur/tableau`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  postStructureValiderReceptionCourrier(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/structure-directeur/${courrierId}/valider-reception`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  postStructureAccuserReceptionCourrier(courrierId: number): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/structure-directeur/${courrierId}/accuser-reception`, {})
      .pipe(catchError(this.handleError.bind(this)));
  }

  getStructureCiblesInternes(): Observable<{ id: number; nom: string }[]> {
    return this.http
      .get<{ id: number; nom: string }[]>(`${this.baseUrl}/api/courriers/structure-directeur/cibles-internes`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  /** Réponse à un courrier (multipart, même contrat que l’écran Gestion des courriers). */
  postCourrierReponseMultipart(formData: FormData): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/api/courriers/reponse`, formData)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getCourrierReponses(courrierId: number): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/api/courriers/${courrierId}/reponses`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  /** Fichier du courrier en validation ODC (sans effet sur le statut). */
  getCourrierFichierValidationDirecteurOdc(courrierId: number): Observable<HttpResponse<Blob>> {
    return this.http
      .get(`${this.baseUrl}/api/courriers/odc-directeur/${courrierId}/fichier`, {
        responseType: 'blob',
        observe: 'response',
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  patchCourrierMetadonnees(
    courrierId: number,
    body: { numero?: string; objet?: string; expediteur?: string }
  ): Observable<any> {
    return this.http
      .patch(`${this.baseUrl}/api/courriers/${courrierId}/metadonnees`, body)
      .pipe(catchError(this.handleError.bind(this)));
  }

  deleteStructureDirecteurCourrier(courrierId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/api/courriers/structure-directeur/${courrierId}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getCourrierDashboardTotaux(structureId?: number | null): Observable<Record<string, number>> {
    let params = new HttpParams();
    if (structureId != null && Number.isFinite(Number(structureId))) {
      params = params.set('structureId', String(structureId));
    }
    return this.http
      .get<Record<string, number>>(`${this.baseUrl}/api/courriers/dashboard/totaux`, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }

  getCourrierDashboardSerie(periode: string, structureId?: number | null): Observable<any> {
    let params = new HttpParams().set('periode', periode);
    if (structureId != null && Number.isFinite(Number(structureId))) {
      params = params.set('structureId', String(structureId));
    }
    return this.http
      .get(`${this.baseUrl}/api/courriers/dashboard/serie`, { params })
      .pipe(catchError(this.handleError.bind(this)));
  }
  /**
     * Met à jour un objet dans la collection spécifiée.
     *
     * @param {string} name - Le nom de l'endpoint.
     * @param {number} iduser - L'ID de DU USER createur.
     * @param {Object} object - L'objet mis à jour.
     * @return {Observable<Object>} Un observable qui émet l'objet mis à jour.
     */

  postId(name: string, iduser: number, object: Object): Observable<Object> {
    console.log('Appel POST :', `${this.baseUrl}/${name}/${iduser}`);
    return this.http.post(`${this.baseUrl}/${name}/${iduser}`, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Met à jour un objet dans la collection spécifiée.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {number} id - L'ID de l'objet à mettre à jour.
   * @param {Object} object - L'objet mis à jour.
   * @return {Observable<Object>} Un observable qui émet l'objet mis à jour.
   */
  update(name: string, id: number, object: Object): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${name}/${id}`, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  updateP(name: string, id: number, listes: Object, object: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}/${id}/${listes}`, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }


  /**
   * Met à jour un objet dans la collection spécifiée.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {number} id - L'ID de l'objet à mettre à jour.
   * @param {Object} object - L'objet mis à jour.
   * @return {Observable<Object>} Un observable qui émet l'objet mis à jour.
   */
  updateId(name: string, id: number, iduser: number, object: Object): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${name}/${id}/${iduser}`, object).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  updateEntity(name: string, id: number, object: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}/${id}`, object);
  }

  /**
   * Supprime un objet d'une collection spécifiée.
   *
   * @param {string} name - Le nom de l'endpoint .
   * @param {number} id - L'ID de l'objet à supprimer.
   * @return {Observable<any>} Un observable qui émet la réponse du serveur.
   */
  delete(name: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}/${id}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  uploadParticipants(id: number, file: File, toListeDebut: boolean) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('toListeDebut', toListeDebut.toString());

    const url = `${environment.uploadUrl}/etape/${id}/participants/upload`;
    // console.log('Appel API à l\'URL :', url); // Supprimé

    return this.http.post(url, formData).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // Gestion des erreurs améliorée
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Une erreur inconnue est survenue';
    console.error('Erreur capturée dans handleError :', error);
    // Cas 1: HttpErrorResponse normal
    if (error instanceof HttpErrorResponse) {

      if (error.error instanceof ErrorEvent) {
        // Erreur côté client
        errorMessage = `Erreur réseau : ${error.error.message}`;
      } else {
        // Erreur côté serveur : message JSON Spring (message / detail) en priorité
        let resolved = false;
        if (error.error && typeof error.error === 'object') {
          const body = error.error as Record<string, unknown>;
          if (typeof body['message'] === 'string') {
            errorMessage = body['message'] as string;
            resolved = true;
          } else if (typeof body['detail'] === 'string') {
            errorMessage = body['detail'] as string;
            resolved = true;
          }
        }
        if (!resolved && typeof error.error === 'string') {
          try {
            const parsed = JSON.parse(error.error) as { message?: string; detail?: string };
            errorMessage = parsed.message || parsed.detail || error.statusText || 'Erreur serveur';
            resolved = true;
          } catch {
            errorMessage = error.error || error.statusText || 'Erreur serveur';
            resolved = true;
          }
        }
        if (!resolved) {
          switch (error.status) {
            case 403:
              errorMessage = 'Accès interdit - Vous n\'avez pas les permissions nécessaires';
              break;
            case 404:
              errorMessage = 'Ressource non trouvée';
              break;
            case 406:
              errorMessage = 'Requête non acceptable (vérifiez les données saisies).';
              break;
            case 409:
              errorMessage = 'Conflit : cette ressource existe déjà ou est indisponible (ex. salle déjà réservée sur ces dates).';
              break;
            case 500:
              errorMessage = 'Erreur interne du serveur';
              break;
            case 0:
              errorMessage = 'Erreur de connexion - Vérifiez votre réseau ou que le serveur est accessible';
              break;
            default:
              errorMessage = error.statusText || `Erreur HTTP ${error.status}`;
          }
        }
      }
    }
    // Cas 2: Erreur quelconque (réseau, timeout, etc.)
    else if (error instanceof Error) {
      errorMessage = error.message || 'Erreur système';
    }
    // Cas 3: Objet d'erreur personnalisé
    else if (error && typeof error === 'object') {
      if (error.message) {
        errorMessage = error.message;
      } else if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage = 'Erreur inconnue';
      }
    }
    // Cas 4: String
    else if (typeof error === 'string') {
      errorMessage = error;
    }

    // console.log('Message d\'erreur final:', errorMessage); // Supprimé
    return throwError(() => new Error(errorMessage));
  }

  // Méthode utilitaire pour extraire le message d'erreur (optionnelle)
  extractMessageFromError(error: any): string {
    // console.log('Extraction du message d\'erreur:', error); // Supprimé

    let message = 'Une erreur est survenue.';

    // Si c'est une Error créée par handleError
    if (error instanceof Error) {
      return error.message;
    }

    // Si c'est un HttpErrorResponse direct
    if (error instanceof HttpErrorResponse) {
      if (error.error && typeof error.error === 'object' && error.error.message) {
        message = error.error.message;
      } else if (typeof error.error === 'string') {
        try {
          const parsed = JSON.parse(error.error);
          message = parsed.message || error.statusText || 'Erreur serveur';
        } catch (e) {
          message = error.error || error.statusText || 'Erreur serveur';
        }
      } else {
        message = error.message || error.statusText || 'Erreur serveur';
      }
    } else if (error?.message) {
      message = error.message;
    }

    return message;
  }

  createValidation(validation: ActivityValidation, fichier?: File, createOrreponse?: String): Observable<ActivityValidation> {
    const formData = new FormData();
    if (fichier) {
      console.log('Appel GET à l\'endpoint :', `${this.baseUrl}/activitevalidation/create/${createOrreponse}`);
      // console.log('Fichier à envoyer:', fichier, ) ;    
      formData.append('fichier', fichier);
    }
    formData.append('validation', new Blob([JSON.stringify(validation)], { type: 'application/json' }));

    return this.http.post<ActivityValidation>(`${this.baseUrl}/activitevalidation/create/${createOrreponse}`, formData);

  }
  getActivitesBySuperviseur(superviseurId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/activite/superviseur/${superviseurId}`);
  }
  getActivitesEnAttenteBySuperviseur(superviseurId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/activite/superviseur/${superviseurId}/attente`);
  }
  getFichierUrl(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/activitevalidation/{id}/fichier`);

  }
  getValidationFileResponse(validationId: number): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.baseUrl}/activitevalidation/${validationId}/fichier`, {
      observe: 'response',
      responseType: 'blob'
    });
  }
  getStatsFiltres(dateDebut: Date, dateFin: Date, activiteId: number, entiteId: number, etapeId: number): Observable<any> {
    this.a = {
      dateDebut: dateDebut,
      dateFin: dateFin,
      activiteId: activiteId,
      entiteId: entiteId,
      etapeId: etapeId
    }
    let params = new HttpParams();

    if (dateDebut != null) {
      params = params.set('dateDebut', dateDebut.toString());
    }
    if (dateFin != null) params = params.set('dateFin', dateFin.toString());
    if (activiteId) params = params.set('activiteId', activiteId);
    if (entiteId) params = params.set('entiteId', entiteId);
    if (etapeId) params = params.set('etapeId', etapeId);
    return this.http.get(`${this.baseUrl}/participant/critere`, { params }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  //   let url = `${this.baseUrl}/participant/${id}${dateDebut}/${dateFin}`;
  //   if (activiteId) {
  //     url += `/${activiteId}`;
  //   }
  //   if (entiteId) {
  //     url += `/${entiteId}`;
  //   }
  //   console.log("mon url=========",url);
  //   return this.http.get<any>(url);
  // } 
}
