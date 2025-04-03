import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;
  messages: { type: string; text: string }[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  // Fonction pour soumettre le formulaire
  // onSubmit(event: Event): void {

  //   // Réinitialiser les erreurs
  //   this.emailError = false;
  //   this.passwordError = false;
  //   this.loginError = false;

  //   // Validation de l'email
  //   if (!this.email.trim()) {
  //     this.emailError = true;
  //     this.messages.push({ type: 'error', text: 'Veuillez entrer votre adresse email' });
  //   } else if (!/^\S+@\S+\.\S+$/.test(this.email.trim())) {
  //     this.emailError = true;
  //     this.messages.push({ type: 'error', text: 'Veuillez entrer une adresse email valide' });
  //   }

  //   // Validation du mot de passe
  //   if (!this.password.trim()) {
  //     this.passwordError = true;
  //     this.messages.push({ type: 'error', text: 'Veuillez entrer votre mot de passe' });
  //   }

  //   // Si les validations sont correctes, envoyer une requête au backend
  //   if (!this.emailError && !this.passwordError) {
  //     this.http.post<any>('http://localhost:5000/clients/connexion', { email: this.email, password: this.password })
  // .subscribe({
  //   next: (response) => {
  //     if (response.token) {
  //       localStorage.setItem('authToken', response.token);
  //       this.messages.push({ type: 'success', text: 'Connexion réussie !' });
  //       this.router.navigate(['/profil']); // Redirige l'utilisateur
  //     }
  //   },
  //   error: (err) => {
  //     console.error('Erreur lors de la connexion :', err);
  //     this.messages.push({ type: 'error', text: err.error.message || 'Erreur inconnue.' });
  //   }
  // });

  //   }
  // }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Données envoyées :', { email: this.email, password: this.password });
  
    this.http.post<any>('http://localhost:5000/clients/connexion', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        console.log('Connexion réussie', response);
      },
      error: (err) => {
        console.error('Erreur lors de la connexion :', err);
      }
    });
  }
  
  // Fonction pour afficher/masquer le mot de passe
  togglePasswordVisibility(): void {
    const passwordField = document.querySelector('input[type="password"]') as HTMLInputElement;
    if (passwordField) {
      const type = passwordField.type === 'password' ? 'text' : 'password';
      passwordField.type = type;
    }
  }
}



@NgModule({
  declarations: [
    
    // Autres composants
  ],
  // imports et bootstrap habituels
})
export class AppModule { }
