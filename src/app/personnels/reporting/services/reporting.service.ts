import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

export interface Participant {
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  genre: string;
  age?: number;
  entiteNom?: string;
  activiteNom?: string;
  dateDebut?: string;
  dateFin?: string;
}

export interface EntiteDTO {
  id: number;
  nom: string;
  type: string; // "DIRECTION" ou "SERVICE"
  parentId?: number;
}

export interface ActiviteDTO {
  id: number;
  nom: string;
  entiteId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  private baseUrl = `${environment.apiUrl}/reporting`;  // Endpoint principal
  private entiteUrl = `${environment.apiUrl}/entite`;

  constructor(private http: HttpClient) {
    console.log('Base URL :', this.baseUrl);
    console.log('Entite URL :', this.entiteUrl);
  }

  // 🔹 Tous les participants (optionnel pour le premier affichage)
  getAllParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.baseUrl);
  }

  // 🔹 Participants filtrés côté backend
  getFilteredParticipants(entiteId?: number, activiteId?: number, annee?: number): Observable<Participant[]> {
    let params = new HttpParams();
    if (entiteId) params = params.set('entiteId', entiteId);
    if (activiteId) params = params.set('activiteId', activiteId);
    if (annee) params = params.set('annee', annee);

    return this.http.get<Participant[]>(this.baseUrl, { params });
  }

  // 🔹 Services
  getAllServices(): Observable<EntiteDTO[]> {
    return this.http.get<EntiteDTO[]>(`${this.entiteUrl}/services`);
  }

  // 🔹 Activités d’un service
  getActivitesByService(serviceId: number): Observable<ActiviteDTO[]> {
    return this.http.get<ActiviteDTO[]>(`${this.entiteUrl}/activites/service/${serviceId}`);
  }
}