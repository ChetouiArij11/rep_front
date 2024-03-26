import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patients.model';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  storedUserId!: string;
  userIdAsNumber!: number;
  user!: Patient;
  errorMessage: string = '';

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    const patientId = localStorage.getItem('patientId');
    if (patientId) {
      this.userIdAsNumber = parseInt(patientId);
      if (!isNaN(this.userIdAsNumber)) {
        this.loadData();
      } else {
        console.error('Invalid user ID:', patientId);
        this.errorMessage = 'Invalid user ID.';
      }
    } else {
      console.log('No user ID found in localStorage');
      this.errorMessage = 'No user ID found.';
    }
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
