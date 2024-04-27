import { Component } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importer MatSnackBar pour les alertes Snackbar

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  cin: string | undefined;
  nomcomp: string | undefined;
  num_telephone: string | undefined;
  num_fixe_cabinet: string | undefined;
  email: string | undefined;
  specialite: string | undefined;
  adresse_cabinet: string | undefined;

  constructor(
    private demandeService: DemandeService,
    private _snackBar: MatSnackBar // Injecter MatSnackBar dans le constructeur
  ) {}

  onSubmit() {
    const formData = {
      cin: this.cin,
      nomcomp: this.nomcomp,
      num_telephone: this.num_telephone,
      num_fixe_cabinet: this.num_fixe_cabinet,
      email: this.email,
      specialite: this.specialite,
      adresse_cabinet: this.adresse_cabinet
    };

    this.demandeService.ajouterDemande(formData).subscribe(
      (response: any) => {
        console.log('Demande ajoutée avec succès', response);
        this.openSnackBar('Demande ajoutée avec succès', ''); // Utiliser la méthode openSnackBar pour afficher l'alerte de succès
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la demande', error);
        this.openSnackBar('Erreur lors de l\'ajout de la demande', ''); // Utiliser la méthode openSnackBar pour afficher l'alerte d'erreur
      }
    );
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
