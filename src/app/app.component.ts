import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'frontend';
  isLoggedIn: boolean = false; // Ajoutez cette variable si ce n'est pas déjà fait
  constructor(private router: Router) {}

  getButtonText(): string {
    return this.isLoggedIn ? 'Mon compte' : 'Se connecter';
  }
  ngOnInit() {
    // Vérifie si un token est déjà enregistré
    const token = localStorage.getItem('token');
    if (token) {
      //Redirige l'utilisateur vers la page d'accueil
      this.router.navigate(['/acc']);
    }
  }
}
