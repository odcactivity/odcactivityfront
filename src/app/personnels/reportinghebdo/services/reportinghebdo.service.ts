import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportingHebdoActiviteDTO } from '@core/models/reportinghebdo.model';

@Injectable({ providedIn: 'root' })
export class ReportingHebdoService {

  private apiUrl = 'http://localhost:8089/reportinghebdo/activites';

  constructor(private http: HttpClient) {}

  getActivites(
    entiteId: number,
    dateDebut: string,
    dateFin: string
  ) {
    return this.http.get<ReportingHebdoActiviteDTO[]>(
      `${this.apiUrl}?entiteId=${entiteId}&dateDebut=${dateDebut}&dateFin=${dateFin}`
    );
  }
}

