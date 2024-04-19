import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendezvous } from '../models/rendezvous.model';


@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private baseUrl = 'http://localhost:5000/rendezvous';
  private patientId: number | null;

  constructor(private http: HttpClient) {
    this.patientId = parseInt(localStorage.getItem('patientId') || '', 10);
   }

   prendreRendezVous(rendezvousData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, rendezvousData);
  }

  getRendezvousForPatient(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/patient/${this.patientId}`);
  }

  deleteRendezvous(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
