import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importez Router depuis @angular/router
import { Patient } from '../models/patients.model';
import { PatientsService } from '../services/patients.service';
import { AuthService } from '../services/auth.service'; // Importez AuthService


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  storedUserId!: string;
  patientId!: number;
  user!: Patient;
  errorMessage: string = '';
  listemedecin: string = '/listemedecin';
  constructor(
    private patientsService: PatientsService,
    private authService: AuthService, // Injectez AuthService

    private router: Router // Injectez Router
  ) { }

  ngOnInit(): void {
    const patientId = localStorage.getItem('patientId');
    if (patientId) {
      this.patientId = parseInt(patientId);
      if (!isNaN(this.patientId)) {
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
    this.patientsService.getPatient(this.patientId).subscribe(
      (data: Patient) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
        this.errorMessage = 'Une erreur s\'est produite lors de la récupération des données du profil.';
      }
    );
  }

  logout(): void {
    this.authService.logout();
    // Redirect to login page or any other desired page
    this.router.navigate(['/login']);
  }
}
