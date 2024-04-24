// FicheMedicale.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FicheMedicale } from '../models/fiche.model';

@Injectable({
  providedIn: 'root'
})
export class FicheService {
  private baseUrl = 'http://localhost:5000/fiche';

  constructor(private http: HttpClient) { }

  getAllfiche(): Observable<FicheMedicale[]> {
    return this.http.get<FicheMedicale[]>(`${this.baseUrl}`);
  }
  getAllFichesByMedecin(medecinId: number): Observable<FicheMedicale[]> {
    return this.http.get<FicheMedicale[]>(`${this.baseUrl}/medecin/${medecinId}`);
  }

  getFicheById(id: number): Observable<FicheMedicale> {
    return this.http.get<FicheMedicale>(`${this.baseUrl}/${id}`);
  }

  AjoutficheMedicale(ajoutFicheMedicaleData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, ajoutFicheMedicaleData);
  }
  updateFicheMedicale(fiche: FicheMedicale): Observable<any> {
    const url = `${this.baseUrl}/${fiche.id}`;
    return this.http.put<any>(url, fiche);
  }

}
