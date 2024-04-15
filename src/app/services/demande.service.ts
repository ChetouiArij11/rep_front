import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Importez Observable depuis rxjs

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer les données du formulaire au backend
  ajouterDemande(demandeData: any): Observable<any> { // Déclarez le type de retour comme Observable<any>
    // Utilisation de HttpClient.post pour envoyer les données au backend
    return this.http.post<any>('http://localhost:5000/demande', demandeData);
  }
}
