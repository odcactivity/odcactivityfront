import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportingHebdoActiviteDTO } from '@core/models/reportinghebdo.model';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class ReportingHebdoService {

  private apiUrl = '${environment.apiUrl}/reportinghebdo/activites';

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

