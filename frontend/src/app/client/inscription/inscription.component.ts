import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-inscription',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  messages: { type: string; text: string }[] = []; // Messages de retour
  formData: any = {}; // Données du formulaire
  vehicles: any[] = []; // Liste des véhicules

  accountFields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Votre email', error: '' },
    { name: 'password', label: 'Mot de passe', type: 'password', placeholder: 'Votre mot de passe', error: '' },
  ];

  personalFields = [
    { name: 'prenom', label: 'Prénom', type: 'text', placeholder: 'Votre prénom', error: '' },
    { name: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom', error: '' },
    { name: 'telephone', label: 'Téléphone', type: 'text', placeholder: 'Votre téléphone', error: '' },
  ];

  constructor() {}

  // Ajouter un véhicule
  addVehicle(): void {
    this.vehicles.push({ marque: '', modele: '', annee: '', immatriculation: '' });
  }

  // Envoyer le formulaire
  onSubmit(event: Event): void {
    event.preventDefault();

    // Simuler une validation et soumission
    if (!this.formData.email || !this.formData.password) {
      this.messages.push({ type: 'error', text: 'Veuillez remplir tous les champs obligatoires.' });
      return;
    }

    console.log('Données soumises:', this.formData, this.vehicles);
    this.messages.push({ type: 'success', text: 'Compte créé avec succès !' });
  }
}
