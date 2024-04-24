import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecins.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/authmedecin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-loginmedecin',
  templateUrl: './loginmedecin.component.html',
  styleUrls: ['./loginmedecin.component.css']
})
export class LoginmedecinComponent implements OnInit {
  email: string = '';
  password: string = '';
  medecinId: number = 0;
  errorMessage: string = '';




  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.email, this.password, this.medecinId).subscribe(
      (response: any) => {
        // Store the token and patientID after successful login
        if (response.medecinId) { // Check if patientID is defined
          this.authService.storeToken(response.token, response.medecinId);
          // Redirect to the profile page
          this.router.navigate(['/interfacemedecin']);
          // Display success message
          this.snackBar.open('Login successful. Welcome!', 'Close', { duration: 3000 });
        } else {
          console.error('Medecin ID is undefined in login response:', response);
          this.snackBar.open('Login failed. Please try again later.', 'Close', { duration: 3000 });
        }
      },
      error => {
        // Display error message
        this.snackBar.open('Login failed. Please check your email and password.', 'Close', { duration: 3000 });
      }
    );
  }



}
