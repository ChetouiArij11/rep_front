import { Component, OnInit } from '@angular/core';
import { FicheService } from '../services/fiche.service';
import { FicheMedicale } from '../models/fiche.model';
import { ActivatedRoute, Router } from '@angular/router'; // Importer ActivatedRoute et Router
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dejapatient',
  templateUrl: './dejapatient.component.html',
  styleUrls: ['./dejapatient.component.css']
})
export class DejapatientComponent implements OnInit {
  ficheID ?: number;
  fiche: FicheMedicale | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Injecter le service Router
    private ficheservice: FicheService,
    private _snackBar: MatSnackBar // Injecter MatSnackBar pour les alertes
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ficheID = +params['id'];
      this.getPatientDetails();
    });
  }

  getPatientDetails() {
    if (this.ficheID !== undefined) {
      this.ficheservice.getFicheById(this.ficheID).subscribe(
        (fiche: FicheMedicale) => {
          this.fiche = fiche;
        },
        error => {
          console.error('Erreur lors de la récupération des détails du patient:', error);
        }
      );
    } else {
      console.error('Identifiant du patient non fourni dans l\'URL.');
    }
  }

  updatefiche() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour votre fiche?')) {
      if (this.fiche !== undefined) {
        this.ficheservice.updateFicheMedicale(this.fiche).subscribe(
          response => {
            console.log('fiche du patient mis à jour avec succès:', response);
            this.openSnackBar('Fiche mise à jour avec succès!', ''); // Afficher une alerte de succès
            this.router.navigate(['/dejapatient']);// Rediriger vers la page dejapatient
          },
          error => {
            console.error('Erreur lors de la mise à jour du fiche du patient:', error);
          }
        );
      } else {
        console.error('Impossible de mettre à jour le fiche: patient non défini.');
      }
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
