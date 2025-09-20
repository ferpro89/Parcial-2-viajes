import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TuristasService } from '../../servicios/turistas';

// ✅ Importar Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-turistas-crear',
  standalone: true,
  templateUrl: './crear.html',
  styleUrls: ['./crear.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // 👇 Agregar Material aquí
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CrearTuristaComponent {
  turistaForm: FormGroup;

  constructor(private fb: FormBuilder, private turistasService: TuristasService) {
    this.turistaForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      telefono: ['']
    });
  }

  guardar(): void {
    this.turistasService.crearTurista(this.turistaForm.value).subscribe(() => {
      alert('Turista creado');
      this.turistaForm.reset();
    });
  }
}
