import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'http://localhost:5000/api/reservas'; // URL del backend

  constructor(private http: HttpClient) {}

  crearReserva(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
