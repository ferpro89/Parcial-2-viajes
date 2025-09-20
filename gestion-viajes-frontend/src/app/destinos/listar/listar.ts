import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './listar.html',
  styleUrls: ['./listar.scss']
})
export class ListarComponent implements AfterViewInit {
  columnas: string[] = ['nombre', 'pais', 'descripcion', 'costo'];
  dataSource = new MatTableDataSource([
    { nombre: 'Quito', pais: 'Ecuador', descripcion: 'Ciudad capital', costo: 120 },
    { nombre: 'Cusco', pais: 'Perú', descripcion: 'Ciudad histórica', costo: 150 },
    { nombre: 'Cartagena', pais: 'Colombia', descripcion: 'Ciudad costera', costo: 180 },
    { nombre: 'Buenos Aires', pais: 'Argentina', descripcion: 'Ciudad cosmopolita', costo: 200 },
    { nombre: 'La Paz', pais: 'Bolivia', descripcion: 'Ciudad en altura', costo: 130 }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
