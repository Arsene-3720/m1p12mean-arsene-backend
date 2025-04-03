import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { InscriptionComponent } from './client/inscription/inscription.component';
import { LoginComponent } from './client/connexion/connexion.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
    { path: 'detail/:id', component: ServiceDetailComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'connexion', component: LoginComponent },
];
