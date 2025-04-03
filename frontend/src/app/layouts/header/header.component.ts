import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isClientConnected: boolean = false;
  constructor(private router: Router) {}
    // Fonction pour gérer la déconnexion
  logout(): void {
    // Supprime le token ou les données de la session utilisateur
    localStorage.removeItem('authToken');
    this.isClientConnected = false;

    // Redirige vers la page de connexion ou d'accueil
    this.router.navigate(['/connexion']);
  }

  // Vérifie si l'utilisateur est connecté (par exemple, au chargement du composant)
  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    this.isClientConnected = !!token; // Vérifie si un token d'authentification existe
  }

  login(token: string): void {
    localStorage.setItem('authToken', token); // Stocke le token
    this.isClientConnected = true; // Met à jour l'état
  }

  navigateToLogin(): void {
    this.router.navigate(['/connexion']);
  }
}




