import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailFetcherService {
  private apiUrl = 'http://localhost:5000/services'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  getServiceDetails(serviceId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${serviceId}`);
  }
}