import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { GlobalService } from '../../../core/service/global.service';

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

  constructor(private http: HttpClient, private globalService: GlobalService) {}

  getAllParticipants(): Observable<Participant[]> {
    console.log('📡 Appel API à participant...');
    return this.globalService.get('participant');
  }
}
