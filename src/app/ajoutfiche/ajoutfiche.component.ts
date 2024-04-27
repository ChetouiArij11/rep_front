import { Component, OnInit } from '@angular/core';
import { FicheService } from '../services/fiche.service';
import { MedecinService } from '../services/medecin.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importer MatSnackBar pour les alertes Snackbar
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FicheMedicale } from '../models/fiche.model';

@Component({
  selector: 'app-ajoutfiche',
  templateUrl: './ajoutfiche.component.html',
  styleUrls: ['./ajoutfiche.component.css']
})
export class AjoutficheComponent implements OnInit {
  patient_id: number = 0;
  medecin_id: number = 0;
  rendezvous_id: number = 0;
  medicaments: string = '';
  recettes: string = '';
  description: string = '';
  id_dossier: number = 0;

  isNavbarVisible: boolean | undefined;

  constructor(
    private ficheService: FicheService,
    private medecinService: MedecinService,
    private router: Router,
    private _snackBar: MatSnackBar, // Injecter MatSnackBar dans le constructeur
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.appComponent.isNavbarVisible = false;

    const medecinId = localStorage.getItem('medecinId');
    if (medecinId) {
      const id = parseInt(medecinId);
      this.medecinService.getMedecinById(id).subscribe((medecin: any) => {
        this.medecin_id = medecin.id;
      }, (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des informations du médecin :', error);
      });
    } else {
      console.error('Identifiant du médecin non trouvé dans le localStorage.');
    }
  }

  submitForm() {
    const fiche = {
      patient_id: this.patient_id,
      medecin_id: this.medecin_id,
      rendezvous_id: this.rendezvous_id,
      medicaments: this.medicaments,
      recettes: this.recettes,
      description: this.description,
      id_dossier: this.id_dossier
    };

    const isConfirmed = window.confirm('Confirmez-vous l\'ajout de la fiche médicale ?');

    if (isConfirmed) {
      this.ficheService.AjoutficheMedicale(fiche)
        .subscribe((response: any) => {
          console.log(response);
          this.openSnackBar('Fiche médicale ajoutée avec succès!', ''); // Utiliser la méthode openSnackBar
        }, (error) => {
          console.log(error);
          window.alert('Une erreur s\'est produite lors de l\'ajout de la fiche médicale.');
        });
    } else {
      console.error("L'ajout de la fiche médicale a été annulé.");
    }
  }

  // Méthode pour afficher une alerte Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
