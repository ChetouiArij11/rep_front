import { Component } from '@angular/core';
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
        (response: any[]) => {
          this.searchResults = response; // Stockez les résultats dans la propriété searchResults
        },
        (error) => {
          console.error('Erreur lors de la recherche de médecins : ', error);
          alert('Une erreur s\'est produite lors de la recherche de médecins.');
        }
      );
  }
}
