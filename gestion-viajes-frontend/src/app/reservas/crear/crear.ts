import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservasService } from '../../servicios/reservas';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reservas-crear',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './crear.html',
  styleUrls: ['./crear.scss']
})
export class CrearReservaComponent {
  reservaForm: FormGroup;

  constructor(private fb: FormBuilder, private reservasService: ReservasService) {
    this.reservaForm = this.fb.group({
      turista_id: [''],
      destino_id: [''],
      fecha_reserva: [''],
      cantidad_personas: ['']
    });
  }

  guardar(): void {
    this.reservasService.crearReserva(this.reservaForm.value).subscribe(() => {
      alert('Reserva creada');
      this.reservaForm.reset();
    });
  }
}

