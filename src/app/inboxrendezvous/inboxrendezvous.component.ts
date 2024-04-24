import { Component } from '@angular/core';
import { RendezvousService } from '../services/rendezvous.service';
import { Rendezvous } from '../models/rendezvous.model';
import { AppComponent } from '../app.component';
import { MedecinService } from '../services/medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inboxrendezvous',
  templateUrl: './inboxrendezvous.component.html',
  styleUrls: ['./inboxrendezvous.component.css']
})
export class InboxrendezvousComponent {
  rendezvousList: Rendezvous[] = [];

  isNavbarVisible: boolean | undefined;

  constructor(private rendezvousService: RendezvousService,
    private medecinService: MedecinService,
    private router: Router,
    private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.isNavbarVisible = false;
    // Chargez les rendez-vous du médecin lors de l'initialisation du composant
    this.loadRendezvousForMedecin();
  }

  loadRendezvousForMedecin(): void {
    this.rendezvousService.getAllbyMedecin().subscribe(
      (rendezvous: Rendezvous[]) => {
        this.rendezvousList = rendezvous;
      },
      (error) => {
        console.error('Error fetching rendezvous:', error);
      }
    );
  }

  deleteRendezvous(id: number): void {
    const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette demande ?");
    if (confirmDelete) {
      this.rendezvousService.deleteRendezvous(id).subscribe(
        () => {
          alert("Demande supprimée avec succès !");
          // Suppression réussie, actualisez la liste des demandes
          this.loadRendezvousForMedecin();
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la suppression de la demande : ', error);
        }
      );
    }
  }

  getMailtoLink(patient_email: string): string {
    const subject = encodeURIComponent('Confirmation de rendezvous');
    const body = encodeURIComponent('Bonjour, ');
    return `mailto:${patient_email}?subject=${subject}&body=${body}`;
  }
}
