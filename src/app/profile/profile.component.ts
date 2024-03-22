// profile.component.ts

import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patients.model'; // Importez le modèle de profil
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  storedUserId!: string;
  userIdAsNumber!: number;
  user!: Patient; // Utilisez le modèle de profil ici
  errorMessage: string = '';

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('patientID');
    this.storedUserId = userId ?? 'DefaultUserID';
    console.log('Stored User ID:', this.storedUserId);
    this.userIdAsNumber = parseInt(this.storedUserId);
    this.loadData();
  }

  loadData() {
    this.patientsService.getPatient(this.userIdAsNumber).subscribe(
      (data: Patient) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
        this.errorMessage = 'Une erreur s\'est produite lors de la récupération des données du profil.';
      }
    );
  }
}
