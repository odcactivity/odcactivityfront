import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SupportactivityService {
  public baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

    download(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/api/supports/doawload/${id}`,    {
        responseType: 'blob',
        observe: 'response'
      }) 
  }

    downloadCourrierFile(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/api/courriers/${id}/ouvrir`,    {
        responseType: 'blob',
        observe: 'response'
      }) 
  }

    imputerCourrier(id: any, body: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/api/courriers/${id}/imputer`, body) 
  }
}