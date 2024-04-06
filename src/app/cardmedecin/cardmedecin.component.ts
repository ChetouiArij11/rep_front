import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Medecin } from '../models/medecins.model';

@Component({
  selector: 'app-cardmedecin',
  templateUrl: './cardmedecin.component.html',
  styleUrls: ['./cardmedecin.component.css']
})
export class CardmedecinComponent implements OnInit {
  @Input() medecin: Medecin | undefined;


  @Output() medecinSelected: EventEmitter<number> = new EventEmitter<number>(); // Événement émettant l'ID du médecin sélectionné


  constructor() { }

  ngOnInit(): void {
  }
  prendreRendezVous(id: number | undefined) {
    if (id !== undefined) {
      // Logique pour prendre rendez-vous avec le médecin ayant l'id spécifié
      console.log('Prise de rendez-vous avec le médecin ayant l\'id ' + id);
      this.medecinSelected.emit(id);
    } else {
      console.error('L\'identifiant du médecin est indéfini.');
    }
  }


}
