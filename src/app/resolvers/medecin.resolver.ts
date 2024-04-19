import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Medecin } from "../models/medecins.model";
import { MedecinService } from "../services/medecin.service";
import { Observable } from "rxjs";

@Injectable()
export class MedecinResolver implements Resolve<Medecin> {
  constructor(private medecinService: MedecinService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Medecin> {
    // Vous pouvez récupérer l'ID du Medecin depuis les paramètres de l'URL si nécessaire
    const MedecinId = route.params['id'];
    return this.medecinService.getmedecin(MedecinId);
  }
}
