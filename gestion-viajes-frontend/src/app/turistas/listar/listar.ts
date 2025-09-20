import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TuristasService } from '../../servicios/turistas';

@Component({
  selector: 'app-turistas-listar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './listar.html',
  styleUrls: ['./listar.scss']
})
export class ListarTuristasComponent {
  turistas: any[] = [];
  columnas: string[] = ['nombre', 'apellido', 'correo', 'telefono'];

  constructor(private turistasService: TuristasService) {}

  ngOnInit(): void {
    this.turistasService.obtenerTuristas().subscribe(data => {
      this.turistas = data;
    });
  }
}

