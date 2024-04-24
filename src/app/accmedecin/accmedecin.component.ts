import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accmedecin',
  templateUrl: './accmedecin.component.html',
  styleUrls: ['./accmedecin.component.css']
})
export class AccmedecinComponent implements OnInit  {
  isModalVisible: boolean = false;

  ngOnInit(): void {
    const selectTag = document.getElementById("medecinId") as HTMLSelectElement;

    selectTag.addEventListener("change", async (e) => {
      localStorage.setItem("medecinId", selectTag.value);
      window.location.href = "/interfacemedecin";
    });
  }

}
