import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbarmedecin',
  templateUrl: './navbarmedecin.component.html',
  styleUrls: ['./navbarmedecin.component.css']
})
export class NavbarmedecinComponent implements OnInit {
  isLoggedIn: boolean = false;
  medecinId: string = ''; // Nouvelle variable pour stocker le type d'utilisateur (patient ou médecin)

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    this.checkAuthentication();
  }

  ngOnInit(): void {

  }

  checkAuthentication(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const medecinId = localStorage.getItem('medecinId');
      if (medecinId) {
        this.medecinId = medecinId; 
        this.isLoggedIn = true;
      }
    }
  }

  isUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  @Input() buttonText: string = 'Se connecter';

  logout() {
    this.router.navigate(['/connect']);
    localStorage.removeItem('token');
    localStorage.removeItem('medecinId');
    this.isLoggedIn = false;

  }
}
