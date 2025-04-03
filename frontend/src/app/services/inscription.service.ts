import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  private apiUrl = 'http://localhost:5000/clients/inscription'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer les données d'inscription
  inscrireClient(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
