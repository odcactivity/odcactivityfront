import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Participant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  genre: string;
  activiteNom: string;
  entiteNom: string;
  age?: number; 
   dateDebut?: string; 
  dateFin?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  private baseUrl = 'http://localhost:8089/reporting'; 

  constructor(private http: HttpClient) {}

  getAllParticipants(): Observable<Participant[]> {
    const token = localStorage.getItem('token'); 
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get<Participant[]>(`${this.baseUrl}/participants`, { headers });
  }
}
