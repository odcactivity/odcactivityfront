import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

export interface Entite {
  id: number;
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class EntiteService {

  private baseUrl =environment.apiUrl;
   

  constructor(private http: HttpClient) {}

  /**
   * Récupère toutes les entités
   */
  getAllEntites(): Observable<Entite[]> {
    return this.http.get<Entite[]>(this.baseUrl);
  }
}
