import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DestinosService } from '../../servicios/destinos';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear.html',
  styleUrls: ['./crear.scss']
})
export class CrearComponent {
  destinoForm: FormGroup;

  constructor(private fb: FormBuilder, private destinosService: DestinosService) {
    this.destinoForm = this.fb.group({
      nombre: [''],
      pais: [''],
      descripcion: [''],
      costo: ['']
    });
  }

  guardar(): void {
    this.destinosService.crearDestino(this.destinoForm.value).subscribe(() => {
      alert('Destino creado');
      this.destinoForm.reset();
    });
  }
}
