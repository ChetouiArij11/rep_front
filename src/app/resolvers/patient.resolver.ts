import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Patient } from "../models/patients.model";
import { PatientsService } from "../services/patients.service";
import { Observable } from "rxjs";

@Injectable()
export class PatientResolver implements Resolve<Patient> {
  constructor(private patientService: PatientsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Patient> {
    // Vous pouvez récupérer l'ID du patient depuis les paramètres de l'URL si nécessaire
    const patientId = route.params['id'];
    return this.patientService.getPatient(patientId);
  }
}
