import { Component } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prendrerendezvous',
  templateUrl: './prendrerendezvous.component.html',
  styleUrls: ['./prendrerendezvous.component.css']
})
export class PrendrerendezvousComponent {

  nompatient: string | undefined;
  num_tel: string | undefined;
  patient_email:string | undefined;
  date_rendezvous: string | undefined;
  motif: string | undefined;
  patientId: number | undefined;
  medecinId: number | undefined; // Ajout de la propriété medecinId

  constructor(
    private rendezvousService: RendezvousService,
    private authService: AuthService,
    private _snackBar: MatSnackBar, private router: Router
  ) {
    this.patientId = this.authService.getCurrentUserId();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, // Durée d'affichage en millisecondes
      horizontalPosition: 'center', // Position horizontale de l'alerte
      verticalPosition: 'top', // Position verticale de l'alerte
    });
  }
  submitForm() {
    if (this.patientId !== undefined ) {
      const rendezvousData = {
        patient_id: this.patientId!,
        medecin_id: 11, // Utilisation de la valeur de medecinId
        nom_patient: this.nompatient!,
        patient_email : this.patient_email!,
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
            this.openSnackBar('Rendez-vous pris avec succès !', ''); // Utilisation de la fonction openSnackBar
            this.router.navigate(['/acc']);
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
