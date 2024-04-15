import { Component } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  cin: string | undefined;
  nomcomp: string | undefined;
  num_telephone: string | undefined;
  num_fixe_cabinet: string | undefined;
  email: string | undefined;
  specialite: string | undefined;
  adresse_cabinet: string| undefined;

  constructor(private demandeService: DemandeService) {}

  onSubmit() {
    const formData = {
      cin: this.cin,
      nomcomp: this.nomcomp,
      num_telephone: this.num_telephone,
      num_fixe_cabinet: this.num_fixe_cabinet,
      email: this.email,
      specialite: this.specialite,
      adresse_cabinet: this.adresse_cabinet
    };

    this.demandeService.ajouterDemande(formData).subscribe(
      (response: any) => {
        console.log('Demande ajoutée avec succès', response);
        // Afficher l'alerte de succès
        alert('Demande ajoutée avec succès');
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la demande', error);
        // Afficher l'alerte d'erreur
        alert('Erreur lors de l\'ajout de la demande');
      }
    );
  }
}
