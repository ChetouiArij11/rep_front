import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendezvous } from '../models/rendezvous.model';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private baseUrl = 'http://localhost:5000/rendezvous';

  constructor(private http: HttpClient) { }

  prendreRendezVous(rendezvous: Rendezvous): Observable<any> {
    return this.http.post(this.baseUrl, rendezvous);
  }
}
