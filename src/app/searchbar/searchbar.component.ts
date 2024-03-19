import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MedecinService } from '../services/medecin.service';


@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  nomMedecin: string = '';
  telMedecin: string = '';
  emailMedecin: string = '';
  searchResults: any[] = [];

  constructor(private medecinService: MedecinService) {}
  searchMedecin() {
    this.medecinService.searchMedecin(this.nomMedecin, this.telMedecin, this.emailMedecin)
      .subscribe(
        (response) => {
          alert(JSON.stringify(response)); // Affichez les résultats dans une alerte ou tout autre moyen souhaité
        },
        (error) => {
          console.error('Erreur lors de la recherche de médecins : ', error);
          alert('Une erreur s\'est produite lors de la recherche de médecins.');
        }
      );
  }
}


