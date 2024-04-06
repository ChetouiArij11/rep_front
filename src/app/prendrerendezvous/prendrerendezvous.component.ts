import { Component } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';
import { AuthService } from '../services/auth.service';

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
  patientId: number | undefined;
  medecinId: number | undefined; // Ajout de la propriété medecinId

  constructor(
    private rendezvousService: RendezvousService,
    private authService: AuthService
  ) {
    this.patientId = this.authService.getCurrentUserId();
  }

  submitForm() {
    if (this.patientId !== undefined ) {
      const rendezvousData = {
        patient_id: this.patientId!,
        medecin_id: 5, // Utilisation de la valeur de medecinId
        nom_patient: this.nompatient!,
        date_heure: this.date_rendezvous!,
        statut: 'Nouveau',
        num_telephone_patient: this.num_tel!,
        motif: this.motif!
      };
      const isConfirmed = window.confirm('Confirmez-vous la prise de rendez-vous ?');

      if (isConfirmed) {
        this.rendezvousService.prendreRendezVous(rendezvousData)
          .subscribe((response) => {
            console.log(response);
            window.alert('Rendez-vous pris avec succès !');
          }, (error) => {
            console.log(error);
          });
      }
    } else {
      console.error("Impossible de récupérer l'ID du patient connecté ou l'ID du médecin sélectionné.");
    }
  }

  // Méthode appelée lorsqu'un médecin est sélectionné

}
