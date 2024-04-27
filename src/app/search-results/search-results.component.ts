// search-results.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Medecin } from '../models/medecins.model';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() medecin: Medecin | undefined;


  @Output() medecinSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
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
