import { Component } from '@angular/core';
import { FicheService } from '../services/fiche.service';
import { MedecinService } from '../services/medecin.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FicheMedicale } from '../models/fiche.model';

@Component({
  selector: 'app-listefiche',
  templateUrl: './listefiche.component.html',
  styleUrls: ['./listefiche.component.css']
})
export class ListeficheComponent {
  isNavbarVisible: boolean | undefined;
  medecin_id: any;
  fiches: FicheMedicale[] = [];
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
        // Une fois que l'identifiant du médecin est récupéré, chargez les fiches associées à ce médecin
        this.getFiches();
      }, (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des informations du médecin :', error);
      });
    } else {
      console.error('Identifiant du médecin non trouvé dans le localStorage.');
    }
  }

  getFiches(): void {
    this.ficheService.getAllFichesByMedecin(this.medecin_id).subscribe(
      (fiches: FicheMedicale[]) => {
        this.fiches = fiches;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des fiches :', error);
      }
    );
  }
  updateFiche(id: number): void {
    // Implémentez ici la logique pour mettre à jour une fiche
    console.log("Mise à jour de la fiche avec l'ID :", id);
    // Redirigez l'utilisateur vers la page de mise à jour de la fiche
    this.router.navigate(['/update-fiche', id]);
  }
}
