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
  initialize(): Observable<any> {

    return this.http.get<any>('http://localhost:5000/medecins/');
  }
  constructor(private http: HttpClient) { }

  searchMedecin(nom: string, specialite: string): Observable<any> {
    // Paramètres de la requête
    let params = new HttpParams();
    if (nom) {
      params = params.append('nom', nom);
    }
    if (specialite) {
      params = params.append('specialite', specialite.toString());
    }


    // Construire l'URL en fonction des paramètres fournis
    let url = this.baseUrl + '/search';
    if (nom) {
      url += '/nom';
    } else if (specialite) {
      url += '/specialite';
    }

    // Envoi de la requête GET avec les paramètres
    return this.http.get<any>(url, { params });
  }
  getAllMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(`${this.baseUrl}`);
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:5000/auth/login_medecin', { email, password });
  }

  getmedecin(medecinId: number): Observable<Medecin> {
    return this.http.get<any>(`http://localhost:5000/medecins/${medecinId}`);
  }
  updatemedecin(MedecinData: Medecin): Observable<any> {
    return this.http.put<any>('http://localhost:5000/medecins/' + MedecinData.id, MedecinData);
  }

  getMedecinById(medecinId: number): Observable<Medecin> {
    // Construire l'URL avec l'ID du médecin
    const url = `${this.baseUrl}/${medecinId}`;
    // Envoyer une requête GET pour récupérer le médecin
    return this.http.get<Medecin>(url);
  }

}
