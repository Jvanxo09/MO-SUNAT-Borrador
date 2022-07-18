import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'consultar', loadChildren: () => import('./components/consultar/consultar.module').then(e => e.ConsultarModule), data: { state: 'consultar' } },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(e => e.HomeModule), data: { state: 'home' } },
  { path: 'mantenimiento', loadChildren: () => import('./components/mantenimiento/mantenimiento.module').then(e => e.MantenimientoModule), data: { state: 'mantenimiento' } },
  { path: 'registro', loadChildren: () => import('./components/registro/registro.module').then(e => e.RegistroModule), data: { state: 'registro' } },
  { path: 'modificar', loadChildren: () => import('./components/modificar/modificar.module').then(e => e.ModificarModule), data: { state: 'modificar' } },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRouter { }