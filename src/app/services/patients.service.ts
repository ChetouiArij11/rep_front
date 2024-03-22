// patient.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from '../models/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  initialize(): Observable<any> {
    // Mettez en œuvre votre logique d'initialisation ici
    // Par exemple, effectuez une requête HTTP pour récupérer des données initiales
    return this.http.get<any>('http://localhost:5000/patients/');
  }
  constructor(private http: HttpClient) { }

  // Fonction pour créer un nouveau patient
  createPatient(patientData: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/patients/ajout', patientData);
  }

  // Fonction de connexion
  login(adresse_email: string, cin: string): Observable<any> {
    return this.http.post<any>('http://localhost:5000/auth/login_patient', { adresse_email, cin });
  }
  // Méthode pour récupérer les détails d'un patient
  getPatient(patientId: number): Observable<Patient> {
    return this.http.get<any>(`http://localhost:5000/patients/${patientId}`);
  }
  /*login(adresse_email: string, cin: string): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        if (adresse_email && cin) {
          // Vérifier si l'adresse email est au bon format
          const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (!emailPattern.test(adresse_email)) {
            observer.error('Adresse email incorrecte.');
            observer.complete();
            return;
          }
          // Vérifier si le CIN est au bon format (par exemple, 8 chiffres)
          const cinPattern = /^\d{8}$/;
          if (!cinPattern.test(cin)) {
            observer.error('Numéro de carte d\'identité nationale (CIN) incorrect.');
            observer.complete();
            return;
          }
          // Si tout est bon, retourner un succès
          observer.next({ success: true });
        } else {
          observer.error('Veuillez saisir votre adresse email et votre numéro de carte d\'identité nationale (CIN).');
        }
        observer.complete();
      }, 1000);
    });
  }*/

}

