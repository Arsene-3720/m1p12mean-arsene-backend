import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {
    // Écoute les changements de route
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        // Masquer le header/footer si la route correspond à "connexion"
        this.showHeaderFooter = !['/connexion', '/inscription'].includes(event.url);
      }
    });
  }
}

@NgModule({
  declarations: [
    
    // Autres composants
  ],
  // imports et bootstrap habituels
})
export class AppModule { }

