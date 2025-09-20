import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservasService } from '../../servicios/reservas';

@Component({
  selector: 'app-reservas-crear',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
