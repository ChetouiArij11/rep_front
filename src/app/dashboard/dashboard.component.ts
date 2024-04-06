import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Ecouteur d'événement pour le bouton de filtre
    const filterButton = document.querySelector(".jsFilter");
    if (filterButton) {
      filterButton.addEventListener("click", () => {
        const filterMenu = document.querySelector(".filter-menu");
        if (filterMenu) {
          filterMenu.classList.toggle("active");
        }
      });
    }

    // Ecouteur d'événement pour le bouton de grille
    const gridButton = document.querySelector(".grid");
    if (gridButton) {
      gridButton.addEventListener("click", () => {
        const list = document.querySelector(".list");
        const grid = document.querySelector(".grid");
        const productsAreaWrapper = document.querySelector(".products-area-wrapper");
        if (list && grid && productsAreaWrapper) {
          list.classList.remove("active");
          grid.classList.add("active");
          productsAreaWrapper.classList.add("gridView");
          productsAreaWrapper.classList.remove("tableView");
        }
      });
    }

    // Ecouteur d'événement pour le bouton de liste
    const listButton = document.querySelector(".list");
    if (listButton) {
      listButton.addEventListener("click", () => {
        const list = document.querySelector(".list");
        const grid = document.querySelector(".grid");
        const productsAreaWrapper = document.querySelector(".products-area-wrapper");
        if (list && grid && productsAreaWrapper) {
          list.classList.add("active");
          grid.classList.remove("active");
          productsAreaWrapper.classList.remove("gridView");
          productsAreaWrapper.classList.add("tableView");
        }
      });
    }

    // Ecouteur d'événement pour le commutateur de mode
    const modeSwitch = document.querySelector('.mode-switch');
    if (modeSwitch) {
      modeSwitch.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        modeSwitch.classList.toggle('active');
      });
    }
  }

}
