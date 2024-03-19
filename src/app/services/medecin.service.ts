// medecin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecins.model';
@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  // URL de votre backend
  private baseUrl = 'http://localhost:5000/medecins'; // Assurez-vous de modifier l'URL en fonction de votre configuration backend

  constructor(private http: HttpClient) { }

  searchMedecin(nom: string, telMedecin: string, email: string): Observable<any> {
    // Paramètres de la requête
    let params = new HttpParams();
    if (nom) {
      params = params.append('nom', nom);
    }
    if (telMedecin) {
      params = params.append('telMedecin', telMedecin.toString());
    }
    if (email) {
      params = params.append('email', email);
    }

    // Construire l'URL en fonction des paramètres fournis
    let url = this.baseUrl + '/search';
    if (nom) {
      url += '/nom';
    } else if (telMedecin) {
      url += '/telMedecin';
    } else if (email) {
      url += '/email';
    }

    // Envoi de la requête GET avec les paramètres
    return this.http.get<any>(url, { params });
  }
  getAllMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(`${this.baseUrl}`);
  }
}
