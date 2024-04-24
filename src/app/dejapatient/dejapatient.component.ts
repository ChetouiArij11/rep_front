import { Component, OnInit } from '@angular/core';
import { FicheService } from '../services/fiche.service'; // Assurez-vous d'importer correctement le service FicheService
import { FicheMedicale } from '../models/fiche.model'; // Assurez-vous d'importer correctement le modèle FicheMedicale
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dejapatient',
  templateUrl: './dejapatient.component.html',
  styleUrls: ['./dejapatient.component.css']
})
export class DejapatientComponent implements OnInit{
  ficheID ?: number;
  fiche: FicheMedicale | undefined = undefined;

  constructor(private route: ActivatedRoute, private ficheservice: FicheService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ficheID = +params['id'];
      this.getPatientDetails();
    });
  }

  getPatientDetails() {
    if (this.ficheID !== undefined) {
      this.ficheservice.getFicheById(this.ficheID).subscribe(
        (fiche: FicheMedicale) => {
          this.fiche = fiche;
        },
        error => {
          console.error('Erreur lors de la récupération des détails du patient:', error);
        }
      );
    } else {
      console.error('Identifiant du patient non fourni dans l\'URL.');
    }
  }

  updatefiche() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour votre fiche?')) {
    if (this.fiche !== undefined) { // Vérifiez si patient est défini
      this.ficheservice.updateFicheMedicale(this.fiche).subscribe(
        response => {
          console.log('fiche du patient mis à jour avec succès:', response);
          window.alert('fiche mis à jour avec succès!');
          // Rediriger ou afficher un message de succès
        },
        error => {
          console.error('Erreur lors de la mise à jour du fiche du patient:', error);
        }
      );
    } else {
      console.error('Impossible de mettre à jour le fiche: patient non défini.');
    }

  }
}
}
