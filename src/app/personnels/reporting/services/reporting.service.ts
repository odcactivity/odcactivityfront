import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

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
  private baseUrl = environment.apiUrl;
//  'http://activiteodc-env.eba-qpcww8sx.us-east-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) {}

  getAllParticipants(): Observable<Participant[]> {
    const token = localStorage.getItem('token'); 
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get<Participant[]>(`${this.baseUrl}/reporting/participants`, { headers });
  }
}
