import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceFetcherService } from '../services/service-fetcher.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule, CommonModule], // Importation des modules nécessaires
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listeService: any[] = []; // Stocke la liste des services

  constructor(private serviceFetcher: ServiceFetcherService) {}

  ngOnInit(): void {
    // Récupère les services depuis l'API
    this.serviceFetcher.getServices().subscribe((data) => {
      this.listeService = data; // Attribue les données récupérées à listeService
    });
  }
}
