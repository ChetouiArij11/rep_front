import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medecin } from '../models/medecins.model';

@Component({
  selector: 'app-cardmedecin',
  templateUrl: './cardmedecin.component.html',
  styleUrls: ['./cardmedecin.component.css']
})
export class CardmedecinComponent implements OnInit {
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
