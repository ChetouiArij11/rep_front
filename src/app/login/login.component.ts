import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patients.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adresse_email: string = '';
  cin: string = '';
  errorMessage: string = '';



  createAccount() {
    this.router.navigate(['/createcompte']);
  }

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}


  login(): void {
    this.authService.login(this.adresse_email, this.cin).subscribe(
      (response: any) => {
        // Stocker le token après une connexion réussie
        this.authService.storeToken(response.token);
        this.authService.storePatientID(response.patientID);
        // Rediriger vers la page de profil
        this.router.navigate(['/profile']);
        // Afficher un message de succès
        this.snackBar.open('La connexion a réussi. Bienvenue !', 'Fermer', { duration: 3000 });
      },
      error => {
        // Afficher un message d'erreur
        this.snackBar.open('La connexion a échoué. Veuillez vérifier votre adresse e-mail et votre mot de passe.', 'Fermer', { duration: 3000 });
      }
    );
  }
  validateCIN(cin: string): boolean {
    // Vérifie si le CIN a exactement 8 caractères et tous les caractères sont des chiffres
    return cin.length === 8 && /^\d+$/.test(cin);
  }

}
