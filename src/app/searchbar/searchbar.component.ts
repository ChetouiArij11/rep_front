import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecins.model';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  nomMedecin: string = '';
  specialite: string = '';

  searchResults: any[] = [];
  @Input() medecin: Medecin | undefined;


  @Output() medecinSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor(private medecinService: MedecinService) {}

  searchMedecin() {
    this.medecinService.searchMedecin(this.nomMedecin, this.specialite)
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

  prendreRendezVous(id: number | undefined) {
    if (id !== undefined) {
      console.log('Selected medecin ID:', id); // Afficher l'identifiant du médecin sélectionné
      this.medecinSelected.emit(id);
    } else {
      console.error('L\'identifiant du médecin est indéfini.');
    }
  }
}
