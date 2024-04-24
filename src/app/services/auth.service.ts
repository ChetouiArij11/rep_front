import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedIn = false; // Maintenir l'état de connexion

  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:5000/auth/login_patient';

  login(adresse_email: string, cin: string, patientId: number): Observable<any> {
    const loginData = { adresse_email, cin, patientId };
    return this.http.post<any>(`${this.baseUrl}`, loginData, { responseType: 'text' as 'json' })
      .pipe(
        map(response => {
          try {
            // Supposons que votre réponse de connexion définit un jeton ou un indicateur lors d'une connexion réussie
            return JSON.parse(response);
          } catch (error) {
            return response;
          }
        }),
        catchError(error => {
          // Gérer l'erreur de manière appropriée
          return throwError(error);
        })
      ); }

  isLoggedIn(): boolean {
    return this.loggedIn; // Retourne l'état d'authentification
  }
/*
  storeToken(token: string): void {
    localStorage.setItem('token', token);

  }
  storePatientId(patientId: number): void {
    localStorage.setItem(`patientId`, `${patientId}`);
  }

*/
storeToken(token: string, patientId: number): void {
  localStorage.setItem('token', token);
  localStorage.setItem(`patientId`, `${patientId}`);
}
  // Méthode pour supprimer le token du localStorage après la déconnexion
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('patientId');
  }

   // Méthode pour obtenir l'ID de l'utilisateur connecté
   getCurrentUserId(): number | undefined {
    // Récupérer l'ID de l'utilisateur connecté depuis le localStorage ou tout autre endroit où il est stocké
    const patientId = localStorage.getItem('patientId');

    // Vérifier si l'ID de l'utilisateur est récupéré avec succès
    if (patientId) {
      // Parse l'ID récupéré en tant que nombre et le retourne
      return parseInt(patientId, 10);
    } else {
      console.error('Impossible de récupérer l\'ID de l\'utilisateur connecté.');
      return undefined;
    }
  }
}
