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

  login(adresse_email: string, cin: string): Observable<any> {
    const loginData = { adresse_email, cin };

    return this.http.post<any>(`${this.baseUrl}`, loginData, { responseType: 'text' as 'json' })
      .pipe(
        map(response => {
          try {
            // Supposons que votre réponse de connexion définit un jeton ou un indicateur lors d'une connexion réussie
            this.loggedIn = true; // Définir loggedIn sur true lors d'une connexion réussie
            return JSON.parse(response);
          } catch (error) {
            return response;
          }
        }),
        catchError(error => {
          // Gérer l'erreur de manière appropriée
          return throwError(error);
        })
      );
  }

  isLoggedIn(): boolean {
    return this.loggedIn; // Retourne l'état d'authentification
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);

  }
  storePatientID(patientID: string): void {
    // Implémentez la méthode pour stocker le patientID dans le localStorage
    localStorage.setItem('patientID', patientID);
  }
  // Méthode pour supprimer le token du localStorage après la déconnexion
  logout(): void {
    localStorage.removeItem('token');
  }
}
