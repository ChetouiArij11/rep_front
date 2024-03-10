import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../services/patients.service';
import { Patient } from '../models/patients.model'; // Assurez-vous que le nom du modèle est correctement importé

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adresse_email !: string;
  cin !: string ;
  errorMessage !: string;
  constructor(private router: Router,private patientService: PatientsService) {}


  createAccount() {
    this.router.navigate(['/test']);
  }

  ngOnInit(): void {

  }

  login() {
    console.log('Adresse e-mail:', this.adresse_email);
    console.log('CIN:', this.cin);

    if (this.adresse_email && this.cin) {
      this.patientService.login(this.adresse_email, this.cin).subscribe(
        (response) => {
          console.log('Réponse du service:', response);
          // Rediriger vers la page de profil ou autre page après la connexion réussie
        },
        (error) => {
          console.error('Erreur lors de la connexion:', error);
          this.errorMessage = 'Adresse e-mail ou CIN incorrect.';
        }
      );
    } else {
      this.errorMessage = 'Veuillez saisir votre adresse e-mail et votre numéro de carte d\'identité nationale (CIN).';
    }
  }

}

