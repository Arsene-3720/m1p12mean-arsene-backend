import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ce service sera disponible dans l'ensemble de l'application
})
export class ProfileService {
  private baseUrl = 'http://localhost:5000'; // URL de base de l'API backend

  constructor(private http: HttpClient) {}

  // Obtenir les informations du profil
  getProfile(clientId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile/${clientId}`);
  }

  // Ajouter un nouveau véhicule
  addVehicle(vehicleData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vehicles/add`, vehicleData);
  }

  // Supprimer un véhicule
  deleteVehicle(vehicleId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/vehicles/${vehicleId}`);
  }

  // Mettre à jour un véhicule existant
  updateVehicle(vehicleId: string, vehicleData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/vehicles/${vehicleId}`, vehicleData);
  }
}
