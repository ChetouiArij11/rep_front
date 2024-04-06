import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const selectTag = document.getElementById("select-dept") as HTMLSelectElement;

    selectTag.addEventListener("change", async (e) => {
      localStorage.setItem("deptID", selectTag.value);
      window.location.href = "/acc";
    });
  }

}
