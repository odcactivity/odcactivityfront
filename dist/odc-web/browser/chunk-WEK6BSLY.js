import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  Injectable,
  catchError,
  environment,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EQOE5FII.js";

// src/app/core/service/global.service.ts
var GlobalService = class _GlobalService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.apiUrl;
  }
  /**
   * Récupère des données à partir d'un point de terminaison spécifié.
   *
   * @param {string} name - Le nom du point de l'endpoint.
   * @return {Observable<any>} Un observable qui émet les données récupérées.
   */
  get(name) {
    const fullUrl = `${this.baseUrl}/${name}`;
    console.log("\u{1F310} Appel GET \xE0 l'URL compl\xE8te:", fullUrl);
    return this.http.get(fullUrl).pipe(catchError(this.handleError.bind(this)));
  }
  getParticipantByCritere(endpoint, dateDebut, dateFin, activiteId, entiteId) {
    console.log("Appel GET \xE0 l'endpoint :", `${this.baseUrl}/${endpoint}/${dateDebut}/${dateFin}/${activiteId}/${entiteId}`);
    return this.http.get(`${this.baseUrl}/${endpoint}`).pipe(catchError(this.handleError.bind(this)));
  }
  getId(name, id) {
    console.log("Appel GET \xE0 l'endpoint :", `${this.baseUrl}/${name}/${id}`);
    return this.http.get(`${this.baseUrl}/${name}/${id}`).pipe(catchError(this.handleError.bind(this)));
  }
  getById(name, id) {
    return this.http.get(`${this.baseUrl}/${name}/${id}`).pipe(catchError(this.handleError.bind(this)));
  }
  getByActivite(name, id) {
    return this.http.get(`${this.baseUrl}/${name}/${id}`).pipe(catchError(this.handleError.bind(this)));
  }
  /**
   * Envoie une requête POST à l'endpoint spécifié pour créer une nouvelle ressource.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {Object} object - Les données à envoyer dans le corps de la requête.
   * @return {Observable<Object>} Un observable qui émet la réponse du serveur.
   */
  post(name, object) {
    console.log("Appel POST \xE0 l'endpoint :", Object);
    return this.http.post(`${this.baseUrl}/${name}`, object).pipe(catchError(this.handleError.bind(this)));
  }
  /**
     * Met à jour un objet dans la collection spécifiée.
     *
     * @param {string} name - Le nom de l'endpoint.
     * @param {number} iduser - L'ID de DU USER createur.
     * @param {Object} object - L'objet mis à jour.
     * @return {Observable<Object>} Un observable qui émet l'objet mis à jour.
     */
  postId(name, iduser, object) {
    console.log("Appel POST \xE0 l'endpoint :", Object);
    return this.http.post(`${this.baseUrl}/${name}/${iduser}`, object).pipe(catchError(this.handleError.bind(this)));
  }
  /**
   * Met à jour un objet dans la collection spécifiée.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {number} id - L'ID de l'objet à mettre à jour.
   * @param {Object} object - L'objet mis à jour.
   * @return {Observable<Object>} Un observable qui émet l'objet mis à jour.
   */
  update(name, id, object) {
    return this.http.patch(`${this.baseUrl}/${name}/${id}`, object).pipe(catchError(this.handleError.bind(this)));
  }
  updateP(name, id, listes, object) {
    return this.http.put(`${this.baseUrl}/${name}/${id}/${listes}`, object).pipe(catchError(this.handleError.bind(this)));
  }
  /**
   * Met à jour un objet dans la collection spécifiée.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {number} id - L'ID de l'objet à mettre à jour.
   * @param {Object} object - L'objet mis à jour.
   * @return {Observable<Object>} Un observable qui émet l'objet mis à jour.
   */
  updateId(name, id, iduser, object) {
    return this.http.patch(`${this.baseUrl}/${name}/${id}/${iduser}`, object).pipe(catchError(this.handleError.bind(this)));
  }
  updateEntity(name, id, object) {
    return this.http.put(`${this.baseUrl}/${name}/${id}`, object);
  }
  /**
   * Supprime un objet d'une collection spécifiée.
   *
   * @param {string} name - Le nom de l'endpoint .
   * @param {number} id - L'ID de l'objet à supprimer.
   * @return {Observable<any>} Un observable qui émet la réponse du serveur.
   */
  delete(name, id) {
    return this.http.delete(`${this.baseUrl}/${name}/${id}`).pipe(catchError(this.handleError.bind(this)));
  }
  uploadParticipants(id, file, toListeDebut) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("toListeDebut", toListeDebut.toString());
    const url = `${environment.uploadUrl}/etape/${id}/participants/upload`;
    return this.http.post(url, formData).pipe(catchError(this.handleError.bind(this)));
  }
  // Gestion des erreurs améliorée
  handleError(error) {
    let errorMessage = "Une erreur inconnue est survenue";
    console.error("Erreur captur\xE9e dans handleError :", error);
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Erreur r\xE9seau : ${error.error.message}`;
      } else {
        if (error.error && typeof error.error === "object" && error.error.message) {
          errorMessage = error.error.message;
        } else if (typeof error.error === "string") {
          try {
            const parsed = JSON.parse(error.error);
            errorMessage = parsed.message || error.statusText || "Erreur serveur";
          } catch (e) {
            errorMessage = error.error || error.statusText || "Erreur serveur";
          }
        } else {
          switch (error.status) {
            case 403:
              errorMessage = "Acc\xE8s interdit - Vous n'avez pas les permissions n\xE9cessaires";
              break;
            case 404:
              errorMessage = "Ressource non trouv\xE9e";
              break;
            case 409:
              errorMessage = "Ce nom existe d\xE9j\xE0. Veuillez en choisir un autre.";
              break;
            case 500:
              errorMessage = "Erreur interne du serveur";
              break;
            case 0:
              errorMessage = "Erreur de connexion - V\xE9rifiez votre r\xE9seau ou que le serveur est accessible";
              break;
            default:
              errorMessage = error.statusText || `Erreur HTTP ${error.status}`;
          }
        }
      }
    } else if (error instanceof Error) {
      errorMessage = error.message || "Erreur syst\xE8me";
    } else if (error && typeof error === "object") {
      if (error.message) {
        errorMessage = error.message;
      } else if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage = "Erreur inconnue";
      }
    } else if (typeof error === "string") {
      errorMessage = error;
    }
    return throwError(() => new Error(errorMessage));
  }
  // Méthode utilitaire pour extraire le message d'erreur (optionnelle)
  extractMessageFromError(error) {
    let message = "Une erreur est survenue.";
    if (error instanceof Error) {
      return error.message;
    }
    if (error instanceof HttpErrorResponse) {
      if (error.error && typeof error.error === "object" && error.error.message) {
        message = error.error.message;
      } else if (typeof error.error === "string") {
        try {
          const parsed = JSON.parse(error.error);
          message = parsed.message || error.statusText || "Erreur serveur";
        } catch (e) {
          message = error.error || error.statusText || "Erreur serveur";
        }
      } else {
        message = error.message || error.statusText || "Erreur serveur";
      }
    } else if (error?.message) {
      message = error.message;
    }
    return message;
  }
  createValidation(validation, fichier, createOrreponse) {
    const formData = new FormData();
    if (fichier) {
      console.log("Appel GET \xE0 l'endpoint :", `${this.baseUrl}/activitevalidation/create/${createOrreponse}`);
      formData.append("fichier", fichier);
    }
    formData.append("validation", new Blob([JSON.stringify(validation)], { type: "application/json" }));
    return this.http.post(`${this.baseUrl}/activitevalidation/create/${createOrreponse}`, formData);
  }
  getActivitesBySuperviseur(superviseurId) {
    return this.http.get(`${this.baseUrl}/activite/superviseur/${superviseurId}`);
  }
  getActivitesEnAttenteBySuperviseur(superviseurId) {
    return this.http.get(`${this.baseUrl}/activite/superviseur/${superviseurId}/attente`);
  }
  getFichierUrl(id) {
    return this.http.get(`${this.baseUrl}/activitevalidation/{id}/fichier`);
  }
  getValidationFileResponse(validationId) {
    return this.http.get(`${this.baseUrl}/activitevalidation/${validationId}/fichier`, {
      observe: "response",
      responseType: "blob"
    });
  }
  getStatsFiltres(dateDebut, dateFin, activiteId, entiteId, etapeId) {
    this.a = {
      dateDebut,
      dateFin,
      activiteId,
      entiteId,
      etapeId
    };
    let params = new HttpParams();
    if (dateDebut != null) {
      params = params.set("dateDebut", dateDebut.toString());
    }
    if (dateFin != null)
      params = params.set("dateFin", dateFin.toString());
    if (activiteId)
      params = params.set("activiteId", activiteId);
    if (entiteId)
      params = params.set("entiteId", entiteId);
    if (etapeId)
      params = params.set("etapeId", etapeId);
    return this.http.get(`${this.baseUrl}/participant/critere`, { params }).pipe(catchError(this.handleError.bind(this)));
  }
  static {
    this.\u0275fac = function GlobalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalService, factory: _GlobalService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  GlobalService
};
//# sourceMappingURL=chunk-WEK6BSLY.js.map
