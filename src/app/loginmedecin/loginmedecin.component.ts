import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patients.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-loginmedecin',
  templateUrl: './loginmedecin.component.html',
  styleUrls: ['./loginmedecin.component.css']
})
export class LoginmedecinComponent implements OnInit {
  adresse_email: string = '';
  cin: string = '';
  patientId: number = 0;
  errorMessage: string = '';



  createAccount() {
    this.router.navigate(['/createcompte']);
  }

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.adresse_email, this.cin, this.patientId).subscribe(
      (response: any) => {
        // Store the token and patientID after successful login
        if (response.patientID) { // Check if patientID is defined
          this.authService.storeToken(response.token, response.patientID);
          // Redirect to the profile page
          this.router.navigate(['/profile']);
          // Display success message
          this.snackBar.open('Login successful. Welcome!', 'Close', { duration: 3000 });
        } else {
          console.error('Patient ID is undefined in login response:', response);
          this.snackBar.open('Login failed. Please try again later.', 'Close', { duration: 3000 });
        }
      },
      error => {
        // Display error message
        this.snackBar.open('Login failed. Please check your email and password.', 'Close', { duration: 3000 });
      }
    );
  }


/*
  login(): void {
    this.authService.login(this.adresse_email, this.cin, this.patientID).subscribe(
      (response: any) => {
        // Stocker le token après une connexion réussie
        this.authService.storeToken(response.token);

        this.authService.storePatientId(response.patientID);
        // Rediriger vers la page de profil
        this.router.navigate(['/acc']);
        // Afficher un message de succès
        this.snackBar.open('La connexion a réussi. Bienvenue !', 'Fermer', { duration: 3000 });
      },
      error => {
        // Afficher un message d'erreur
        this.snackBar.open('La connexion a échoué. Veuillez vérifier votre adresse e-mail et votre mot de passe.', 'Fermer', { duration: 3000 });
      }
    );
  }

*/
  validateCIN(cin: string): boolean {
    // Vérifie si le CIN a exactement 8 caractères et tous les caractères sont des chiffres
    return cin.length === 8 && /^\d+$/.test(cin);
  }

}
