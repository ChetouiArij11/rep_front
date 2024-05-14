import { Component } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prendrerendezvous',
  templateUrl: './prendrerendezvous.component.html',
  styleUrls: ['./prendrerendezvous.component.css']
})
export class PrendrerendezvousComponent {

  nompatient: string | undefined;
  num_tel: string | undefined;
  patient_email: string | undefined;
  date_rendezvous: string | undefined;
  motif: string | undefined;
  patientId: number | undefined;
  medecinId: number | undefined;

  constructor(
    private rendezvousService: RendezvousService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.patientId = this.authService.getCurrentUserId();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  submitForm() {
    if (this.patientId !== undefined && this.medecinId !== undefined) {
      const rendezvousData = {
        patient_id: this.patientId,
        medecin_id: this.medecinId,
        nom_patient: this.nompatient!,
        patient_email: this.patient_email!,
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
            this.openSnackBar('Rendez-vous pris avec succès !', '');
            this.router.navigate(['/profile']);
          }, (error) => {
            console.error(error);
            this.router.navigate(['/login']);
          });
      }
    } else {
      alert("Vous ne pouvez pas prendre un rendez-vous, vous devez être connecté ! Connectez-vous .");
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.medecinId = +params['id'];
    });

  }
}
