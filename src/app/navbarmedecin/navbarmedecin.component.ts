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
  userType: string = ''; // Nouvelle variable pour stocker le type d'utilisateur (patient ou médecin)

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
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
      let path = window.location.pathname.split("/").pop();
      if (path == '') {
        path = 'index.html';
      }

      const target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
      target.parent().addClass('active');
    });
  }

  refreshComponent() {
    this.cdRef.detectChanges(); // Déclenche la détection des changements
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
    const token = localStorage.getItem('token');
    if (token) {
      const userType = localStorage.getItem('userType');
      if (userType) {
        this.userType = userType; // Définit le type d'utilisateur (patient ou médecin)
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
    localStorage.removeItem('token');
    localStorage.removeItem('userType'); // Supprime également le type d'utilisateur lors de la déconnexion
    this.isLoggedIn = false;
    this.router.navigate(['/connect']);
  }
}
