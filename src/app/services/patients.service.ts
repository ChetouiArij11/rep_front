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
  updatePatient(patientData: Patient): Observable<any> {
    return this.http.put<any>('http://localhost:5000/patients/' + patientData.id, patientData);
  }
}

