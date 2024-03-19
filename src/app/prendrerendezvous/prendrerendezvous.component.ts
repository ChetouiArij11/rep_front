import { Component } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';

@Component({
  selector: 'app-prendrerendezvous',
  templateUrl: './prendrerendezvous.component.html',
  styleUrls: ['./prendrerendezvous.component.css']
})
export class PrendrerendezvousComponent {
  nompatient: string | undefined;
  num_tel: string | undefined;
  date_rendezvous: string | undefined;
  motif: string | undefined;

  constructor(private rendezvousService: RendezvousService) {}

  submitForm() {
    const rendezvousData = {
      patient_id: 589759, // Remplacer par l'ID du patient
      medecin_id: 4, // Remplacer par l'ID du médecin
      nom_patient: this.nompatient!,
      date_heure: this.date_rendezvous!,
      statut: 'Nouveau', // Ou tout autre statut par défaut
      num_telephone_patient: this.num_tel!,
      motif: this.motif! // Ajoutez le motif ici
    };
    const isConfirmed = window.confirm('Confirmez-vous la prise de rendez-vous ?');

    if (isConfirmed) {
      this.rendezvousService.prendreRendezVous(rendezvousData)
        .subscribe((response) => {
          console.log(response);
          // Redirection vers la page de confirmation ou autres actions
        }, (error) => {
          console.log(error);
          // Affichage d'un message d'erreur à l'utilisateur
        });
      }
    }
  }
