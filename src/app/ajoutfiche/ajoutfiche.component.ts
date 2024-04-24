import { Component, OnInit } from '@angular/core';
import { FicheService } from '../services/fiche.service';
import { MedecinService } from '../services/medecin.service'; // Importez le service MedecinService
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FicheMedicale } from '../models/fiche.model'; // Importez la classe FicheMedicale

@Component({
  selector: 'app-ajoutfiche',
  templateUrl: './ajoutfiche.component.html',
  styleUrls: ['./ajoutfiche.component.css']
})export class AjoutficheComponent implements OnInit  {
  patient_id: number = 0; // Valeur par défaut de patient_id
  medecin_id: number = 0; // Valeur par défaut de medecin_id
  rendezvous_id: number = 0; // Valeur par défaut de rendezvous_id
  medicaments: string = ''; // Valeur par défaut de medicaments
  recettes: string = ''; // Valeur par défaut de recettes
  description: string = ''; // Valeur par défaut de description
  id_dossier: number = 0; // Valeur par défaut de id_dossier

  isNavbarVisible: boolean | undefined;

  constructor(
    private ficheService: FicheService,
    private medecinService: MedecinService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.appComponent.isNavbarVisible = false;

    const medecinId = localStorage.getItem('medecinId');
    if (medecinId) {
      const id = parseInt(medecinId);
      this.medecinService.getMedecinById(id).subscribe((medecin: any) => {
        this.medecin_id = medecin.id;
      }, (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des informations du médecin :', error);
      });
    } else {
      console.error('Identifiant du médecin non trouvé dans le localStorage.');
    }
  }

  submitForm() {
    const fiche = {
      patient_id: this.patient_id,
      medecin_id: this.medecin_id,
      rendezvous_id: this.rendezvous_id,
      medicaments: this.medicaments,
      recettes: this.recettes,
      description: this.description,
      id_dossier: this.id_dossier
    };

    const isConfirmed = window.confirm('Confirmez-vous l\'ajout de la fiche médicale ?');

    if (isConfirmed) {
      this.ficheService.AjoutficheMedicale(fiche)
        .subscribe((response: any) => {
          console.log(response);
          window.alert('Fiche médicale ajoutée avec succès !');
        }, (error) => {
          console.log(error);
          window.alert('Une erreur s\'est produite lors de l\'ajout de la fiche médicale.');
        });
    } else {
      console.error("L'ajout de la fiche médicale a été annulé.");
    }
  }
}
