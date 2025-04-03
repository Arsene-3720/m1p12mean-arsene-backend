import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DetailFetcherService } from '../services/detail-fetcher.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
})
export class ServiceDetailComponent implements OnInit {
  service: any = null; // Stocke les informations sur le service
  details: any[] = []; // Stocke les détails associés
  serviceId: string = ''; // ID du service
  currentYear: number = new Date().getFullYear(); // Année actuelle

  constructor(
    private route: ActivatedRoute,
    private detailFetcher: DetailFetcherService // Utilisation du service d'API
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du service depuis les paramètres de la route
    this.serviceId = this.route.snapshot.paramMap.get('id') || '';

    // Charger les données du service et des détails associés
    this.detailFetcher.getServiceDetails(this.serviceId).subscribe((data) => {
      this.service = data.service; // Informations sur le service
      this.details = data.details; // Liste des détails associés
    });
  }
}
