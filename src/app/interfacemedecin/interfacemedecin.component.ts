import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';
import { MedecinService } from '../services/medecin.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Rendezvous } from '../models/rendezvous.model';
declare var Chart: any;
@Component({
  selector: 'app-interfacemedecin',
  templateUrl: './interfacemedecin.component.html',
  styleUrls: ['./interfacemedecin.component.css']
})
export class InterfacemedecinComponent implements OnInit {

  isNavbarVisible: boolean | undefined;

  constructor(private rendezvousService: RendezvousService,
    private medecinService: MedecinService,
    private router: Router,
    private appComponent: AppComponent) { }
  ngOnInit(): void {
    const selectTag = document.getElementById("medecinId") as HTMLSelectElement;
    this.appComponent.isNavbarVisible = false;


    selectTag.addEventListener("change", async (e) => {
      localStorage.setItem("medecinId", selectTag.value);
      window.location.href = "/interfacemedecin";
    });

  }




}
