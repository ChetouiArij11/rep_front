import { Component } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patients.model'; // Assurez-vous que le nom du modèle est correctement importé

@Component({
  selector: 'app-createcompte',
  templateUrl: './createcompte.component.html',
  styleUrls: ['./createcompte.component.css']
})
export class CreatecompteComponent {

  // Modèle pour les données du formulaire
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

  constructor(private patientService: PatientsService) { }

  sexe: string = '';

  submitPatient() {
    // Appel du service pour créer un nouveau patient
    this.patientService.createPatient(this.patient)
      .subscribe(
        response => {
          // Traitement de la réponse de l'API (succès)
          alert('Patient créé avec succès!');
          // Réinitialiser le formulaire après la soumission réussie
          this.resetForm();
        },
        error => {
          // Gestion des erreurs
          console.error('Erreur lors de la création du patient :', error);
          alert('Une erreur s\'est produite lors de la création du patient.');
        }
      );
  }

  // Réinitialiser le formulaire après la soumission réussie
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
}
