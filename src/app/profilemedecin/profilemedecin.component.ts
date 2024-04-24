

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Importez Router depuis @angular/router
import { Medecin } from '../models/medecins.model';
import { MedecinService } from '../services/medecin.service';
import { AuthService } from '../services/authmedecin.service'; // Importez AuthService
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-profilemedecin',
  templateUrl: './profilemedecin.component.html',
  styleUrls: ['./profilemedecin.component.css']
})
export class ProfilemedecinComponent implements OnInit {

  storedUserId!: string;
  medecinId!: number;
  user!: Medecin;
  errorMessage: string = '';
  isNavbarVisible: boolean | undefined;
  isLoggedIn: boolean = false; // Ajoutez cette variable si ce n'est pas déjà fait
  constructor(
    private medecinService: MedecinService,
    private authService: AuthService, // Injectez AuthService
    private appComponent: AppComponent,

    private router: Router // Injectez Router
  ) { }

  ngOnInit(): void {
    const medecinId = localStorage.getItem('medecinId');
    if (medecinId) {
      this.medecinId = parseInt(medecinId);
      if (!isNaN(this.medecinId)) {
        this.loadData();
      } else {
        console.error('Invalid user ID:', medecinId);
        this.errorMessage = 'Invalid user ID.';
      }
    } else {
      console.log('No user ID found in localStorage');
      this.errorMessage = 'No user ID found.';
    }
    this.appComponent.isNavbarVisible = false;

  }

  loadData() {
    this.medecinService.getmedecin(this.medecinId).subscribe(
      (data: Medecin) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
        this.errorMessage = 'Une erreur s\'est produite lors de la récupération des données du profil.';
      }
    );
  }



  getButtonText(): string {
    return this.isLoggedIn ? 'Mon compte' : 'Se connecter';
  }
  logout(): void {
    this.authService.logout();
    // Redirect to login page or any other desired page
    this.router.navigate(['/loginmedecin']);
  }
}


