import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  canActivate(): boolean {
    // Check if userId exists in localStorage
    const patientID = localStorage.getItem('patientID');

    if (patientID) {
      return true; // Allow access to the route
    } else {
      this.snackBar.open('oups, il semble que vous n\'êtes pas connecté ! veuillez vous connecter ou créer un compte si vous n\'en avez pas.', 'Close', {
        duration: 5000,
        panelClass: ['green-snackbar'],
      });
      this.router.navigate(['/connect']); // Replace 'login' with your desired route
      return false; // Prevent access to the route
    }
  }
}
