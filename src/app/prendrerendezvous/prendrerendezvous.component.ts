import { Component } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';
import { AuthService } from '../services/auth.service'; // Importer le service AuthService

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

  constructor(
    private rendezvousService: RendezvousService,
    private authService: AuthService // Injecter le service AuthService
  ) {
    // Récupérer l'ID du patient connecté lors de l'initialisation du composant
    this.patientId = this.authService.getCurrentUserId(); // Utiliser la méthode getCurrentUserId() du service AuthService
  }

  submitForm() {
    // Vérifier si l'ID du patient est défini
    if (this.patientId !== undefined) {
      const rendezvousData = {
        patient_id: this.patientId!,
        medecin_id: 4,
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
            // Affichage d'un message d'erreur à l'utilisateur
          });
        }
    } else {
      console.error("Impossible de récupérer l'ID du patient connecté.");
    }
  }
}
