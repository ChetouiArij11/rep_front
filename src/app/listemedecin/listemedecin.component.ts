import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecins.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-listemedecin',
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css']
})
export class ListemedecinComponent implements OnInit {
  medecins: Medecin[] = []; // Définir le tableau de médecins

  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.medecinService.getAllMedecins().subscribe(
      (data) => {
        this.medecins = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des médecins : ', error);
      }
    );
  }
}
