import { Routes } from '@angular/router';
import { CrearReservaComponent } from './reservas/crear/crear';
import { CrearTuristaComponent } from './turistas/crear/crear';
import { ListarTuristasComponent } from './turistas/listar/listar';
import { CrearComponent } from './destinos/crear/crear';
import { ListarComponent } from './destinos/listar/listar';

export const routes: Routes = [
  { path: 'destinos', component: ListarComponent },
  { path: 'destinos/crear', component: CrearComponent },
  { path: 'turistas', component: ListarTuristasComponent },
  { path: 'turistas/crear', component: CrearTuristaComponent },
  { path: 'reservas/crear', component: CrearReservaComponent },
  { path: '', redirectTo: '/destinos', pathMatch: 'full' }
];
