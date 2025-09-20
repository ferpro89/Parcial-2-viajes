import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DestinosService {
  private apiUrl = 'https://localhost:5001/api/destinos';

  constructor(private http: HttpClient) {}

  obtenerDestinos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearDestino(destino: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, destino);
  }
}
