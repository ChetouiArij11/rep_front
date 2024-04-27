import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'frontend';
  isLoggedIn: boolean = false;
  isNavbarVisible: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Vérifie si un token est déjà enregistré
    const token = localStorage.getItem('token');
    this.isLoggedIn  = true;
    if (token) {
      //Redirige l'utilisateur vers la page d'accueil
      this.router.navigate(['/acc']);
    }
  }

  isMedecinRoute(): boolean {
    // Mettez ici la logique pour déterminer si l'utilisateur est sur la route de l'interface médecin
    return this.router.url.includes('interfacemedecin');
  }

  getButtonText(): string {
    return this.isLoggedIn ? 'Se connecter' : 'Mon compte';
  }
}
