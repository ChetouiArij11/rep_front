import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Maintain authentication state

  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:5000/auth';

  login(adresse_email: string, cin: string): Observable<any> {
    const loginData = { adresse_email, cin };

    return this.http.post<any>(`${this.baseUrl}/login_patient`, loginData, { responseType: 'text' as 'json' })
      .pipe(
        map(response => {
          try {
            // Assuming your login response sets some token or flag upon successful login
            this.loggedIn = true; // Set loggedIn to true upon successful login
            return JSON.parse(response);
          } catch (error) {
            return response;
          }
        }),
        catchError(error => {
          // Handle error appropriately
          return throwError(error);
        })
      );
  }

  isLoggedIn(): boolean {
    return this.loggedIn; // Return the authentication state
  }
}
