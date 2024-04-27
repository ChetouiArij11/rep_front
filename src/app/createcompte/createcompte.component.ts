import { Component } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importer MatSnackBar pour les alertes Snackbar
import { Patient } from '../models/patients.model';

@Component({
  selector: 'app-createcompte',
  templateUrl: './createcompte.component.html',
  styleUrls: ['./createcompte.component.css']
})
export class CreatecompteComponent {

  patient: Patient = {
    nom: '',
    prenom: '',
    date_de_naissance: new Date(),
    sexe: '',
    adresse: '',
    numero_de_telephone: '',
    adresse_email: '',
    autres_informations_medicales: '',
    cin: ''
  };

  constructor(
    private patientService: PatientsService,
    private _snackBar: MatSnackBar // Injecter MatSnackBar dans le constructeur
  ) { }

  sexe: string = '';

  submitPatient() {
    this.patientService.createPatient(this.patient)
      .subscribe(
        response => {
          // Afficher une alerte Snackbar pour indiquer que le patient a été créé avec succès
          this.openSnackBar('Patient créé avec succès!', '');
          this.resetForm();
        },
        error => {
          console.error('Erreur lors de la création du patient :', error);
          alert('Une erreur s\'est produite lors de la création du patient.');
        }
      );
  }

  resetForm() {
    this.patient = {
      nom: '',
      prenom: '',
      date_de_naissance: new Date(),
      sexe: '',
      adresse: '',
      numero_de_telephone: '',
      adresse_email: '',
      autres_informations_medicales: '',
      cin: ''
    };
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
