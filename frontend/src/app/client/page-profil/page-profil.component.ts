import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css'],
})
export class ProfileComponent implements OnInit {
  client: any = null;
  vehiculeList: any[] = [];
  rendezVousList: any[] = [];
  showAddVehicleForm: boolean = false;
  selectedVehicle: any = null;
  showEditVehicleForm: boolean = false;

  newVehicle = {
    marque: '',
    modele: '',
    annee: null,
    numero_immatriculation: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Remplace "clientId" par une variable dynamique ou fixe
    const clientId = 'client_id_example';
    this.http.get(`http://localhost:5000/profile/${clientId}`).subscribe({
      next: (data: any) => {
        this.client = data.client;
        this.vehiculeList = data.vehiculeList;
        this.rendezVousList = data.rendezVousList;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des données :', err);
      },
    });
  }

  toggleAddVehicleForm(): void {
    this.showAddVehicleForm = !this.showAddVehicleForm;
  }

  addVehicle(event: Event): void {
    event.preventDefault();
    this.http.post(`http://localhost:5000/vehicles/add`, this.newVehicle).subscribe({
      next: (data: any) => {
        alert('Véhicule ajouté avec succès.');
        this.vehiculeList.push(data.vehicle);
        this.showAddVehicleForm = false;
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout du véhicule :', err);
      },
    });
  }

  cancelAddVehicle(): void {
    this.showAddVehicleForm = false;
  }

  deleteVehicle(vehicleId: string): void {
    this.http.delete(`http://localhost:5000/vehicles/${vehicleId}`).subscribe({
      next: () => {
        alert('Véhicule supprimé avec succès.');
        this.vehiculeList = this.vehiculeList.filter((v) => v.id !== vehicleId);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression du véhicule :', err);
      },
    });
  }

  editVehicle(vehicle: any): void {
    this.selectedVehicle = { ...vehicle }; // Copier les données du véhicule sélectionné
    this.showEditVehicleForm = true; // Affiche le formulaire d'édition
  }
}
