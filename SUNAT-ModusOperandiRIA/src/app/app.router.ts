import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'consultar', loadChildren: () => import('./components/consultar/consultar.module').then(e => e.ConsultarModule), data: { state: 'consultar' } },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRouter { }