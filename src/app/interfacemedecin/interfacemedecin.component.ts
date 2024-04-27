import { Component, OnInit } from '@angular/core';
declare var Chart: any;
@Component({
  selector: 'app-interfacemedecin',
  templateUrl: './interfacemedecin.component.html',
  styleUrls: ['./interfacemedecin.component.css']
})
export class InterfacemedecinComponent implements OnInit {


  ngOnInit(): void {
    const selectTag = document.getElementById("medecinId") as HTMLSelectElement;

    selectTag.addEventListener("change", async (e) => {
      localStorage.setItem("medecinId", selectTag.value);
      window.location.href = "/interfacemedecin";
    });

  }}