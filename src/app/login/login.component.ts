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
  adresse_email !: string;
  cin !: string;
  errorMessage !: string;
  isLoggedIn: boolean = false;


  createAccount() {
    this.router.navigate(['/createcompte']);
  }

  ngOnInit(): void {}

  constructor(private location: Location, private authService: AuthService, private router: Router, private snackBar: MatSnackBar,private cdRef: ChangeDetectorRef) {}


refreshComponent() {
    this.cdRef.detectChanges(); // Trigger change detection
  }
checkAuthentication(): void {
    const patientID = localStorage.getItem('patientID');
    this.isLoggedIn = !!patientID; // Set isLoggedIn to true if patientID exists
  }


  login(): void {
    const email = this.adresse_email;
const cin = this.cin;
    this.authService.login(email,cin).subscribe(
      (patientID: string) => {
        // Store the user ID in localStorage upon successful login
        localStorage.setItem('patientID', patientID);
        console.log('Login successful. patient ID stored:', patientID);
        this.refreshComponent();
        this.checkAuthentication();
        this.snackBar.open('La connexion a réussi. bienvenue !', 'Close', {
          duration: 10000,
          panelClass: ['green-snackbar'],
        });
        this.location.go('/profile');
        window.location.reload();
      },
      error => {
        console.error('Login Failed', error);
        this.snackBar.open('La connexion a échoué. Veuillez vérifier votre adresse e-mail et votre mot de passe.', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  validateCIN(cin: string): boolean {
    // Vérifie si le CIN a exactement 8 caractères et tous les caractères sont des chiffres
    return cin.length === 8 && /^\d+$/.test(cin);
  }

}
