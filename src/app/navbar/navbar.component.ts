import { Component, Input, OnInit ,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router  , private cdRef: ChangeDetectorRef) {
    this.checkAuthentication();
  }
  ngOnInit(): void {
    this.test();

    this.refreshComponent();
    this.checkAuthentication();
    this.isLoggedIn = this.isUserLoggedIn();
    $(window).on('resize', () => {
      setTimeout(() => this.test(), 500);
    });

    $(".navbar-toggler").click(() => {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => this.test());
    });

    $(document).ready(() => {
      // Get current path and find target link
      let path = window.location.pathname.split("/").pop();

      // Account for home page with empty path
      if (path == '') {
        path = 'index.html';
      }

      const target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
      // Add active class to target link
      target.parent().addClass('active');
    });

    this.isLoggedIn = this.isUserLoggedIn();
  }
  refreshComponent() {
    this.cdRef.detectChanges(); // Trigger change detection
  }

  private test(): void {
    const tabsNewAnim = $('#navbarSupportedContent');
    const selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    const activeItemNewAnim = tabsNewAnim.find('.active');
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimTop = activeItemNewAnim.position();
    const itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": `${itemPosNewAnimTop.top}px`,
      "left": `${itemPosNewAnimLeft.left}px`,
      "height": `${activeWidthNewAnimHeight}px`,
      "width": `${activeWidthNewAnimWidth}px`
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      const activeWidthNewAnimHeight = $(this).innerHeight();
      const activeWidthNewAnimWidth = $(this).innerWidth();
      const itemPosNewAnimTop = $(this).position();
      const itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": `${itemPosNewAnimTop.top}px`,
        "left": `${itemPosNewAnimLeft.left}px`,
        "height": `${activeWidthNewAnimHeight}px`,
        "width": `${activeWidthNewAnimWidth}px`
      });
    });
  }
  checkAuthentication(): void {
    const patientID = localStorage.getItem('patientID');
    this.isLoggedIn = !!patientID; // Set isLoggedIn to true if userId exists
  }

  isUserLoggedIn(): boolean {
    // Vérifie si les informations de connexion de l'utilisateur sont présentes dans le stockage local
    const token = localStorage.getItem('token');
  return token !== null;
  }
  @Input() buttonText: string = 'Se connecter';
  logout() {
    // Supprime le token du stockage local lors de la déconnexion
    localStorage.removeItem('token');
    // Met à jour l'état de connexion
    this.isLoggedIn = false;
    // Redirige l'utilisateur vers la page de connexion
    this.router.navigate(['/connect']);
  }
}
