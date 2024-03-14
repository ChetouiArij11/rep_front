import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patients.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adresse_email !: string;
  cin !: string;
  errorMessage !: string;

  constructor(private router: Router, private patientService: PatientsService) {}

  createAccount() {
    this.router.navigate(['/createcompte']);
  }

  ngOnInit(): void {}

  login() {
    console.log('Adresse e-mail:', this.adresse_email);
    console.log('CIN:', this.cin);

    if (this.adresse_email && this.cin && this.validateCIN(this.cin)) {
      this.patientService.login(this.adresse_email, this.cin).subscribe(
        (response) => {
          console.log('Réponse du service:', response);
          // Rediriger vers la page de profil ou autre page après la connexion réussie
          // this.router.navigate(['/profile']);
        },
        (error) => {
          console.error('Erreur lors de la connexion:', error);
          if (error instanceof HttpErrorResponse) {
            this.errorMessage = error.message; // Afficher le message d'erreur HTTP
          } else {
            this.errorMessage = 'Une erreur s\'est produite lors de la connexion.';
          }
        }
      );
    }
  }

  validateCIN(cin: string): boolean {
    // Vérifie si le CIN a exactement 8 caractères et tous les caractères sont des chiffres
    return cin.length === 8 && /^\d+$/.test(cin);
  }
}
