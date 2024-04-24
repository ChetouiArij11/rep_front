// update-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patients.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  patientId ?: number;
  patient: Patient | undefined = undefined;

  constructor(private route: ActivatedRoute, private patientService: PatientsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.patientId = +params['id'];
      this.getPatientDetails();
    });
  }

  getPatientDetails() {
    if (this.patientId !== undefined) {
      this.patientService.getPatient(this.patientId).subscribe(
        (patient: Patient) => {
          this.patient = patient;
        },
        error => {
          console.error('Erreur lors de la récupération des détails du patient:', error);
        }
      );
    } else {
      console.error('Identifiant du patient non fourni dans l\'URL.');
    }
  }

  updateProfile() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour votre profil?')) {
    if (this.patient !== undefined) { // Vérifiez si patient est défini
      this.patientService.updatePatient(this.patient).subscribe(
        response => {
          console.log('Profil du patient mis à jour avec succès:', response);
          window.alert('Profil mis à jour avec succès!');
          // Rediriger ou afficher un message de succès
        },
        error => {
          console.error('Erreur lors de la mise à jour du profil du patient:', error);
        }
      );
    } else {
      console.error('Impossible de mettre à jour le profil: patient non défini.');
    }

  }
}
}
