import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';
import { Rendezvous } from '../models/rendezvous.model';

@Component({
  selector: 'app-rendezvous-list',
  templateUrl: './rendezvous-list.component.html',
  styleUrls: ['./rendezvous-list.component.css']
})
export class RendezvousListComponent implements OnInit {
  rendezvousList: any[] = [];


  constructor(private rendezvousService: RendezvousService) { }

  ngOnInit(): void {
    this.loadRendezvousForPatient();
  }

  loadRendezvousForPatient(): void {
    this.rendezvousService.getRendezvousForPatient().subscribe(
      (rendezvous: Rendezvous[]) => {
        this.rendezvousList = rendezvous;
      },
      (error) => {
        console.error('Error fetching rendezvous:', error);
      }
    );
  }
}
