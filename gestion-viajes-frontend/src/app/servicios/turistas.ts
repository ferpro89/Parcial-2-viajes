import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TuristasService {
  private apiUrl = 'https://localhost:5001/api/turistas';

  constructor(private http: HttpClient) {}

  obtenerTuristas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearTurista(turista: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, turista);
  }
}
