import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouter } from 'src/app/app.router';
import { RouterModule } from '@angular/router';
import { MantenimientoComponent } from './mantenimiento.component';
import { MantenimientoRouter } from './mantenimiento.router';

@NgModule({
  declarations: [
    MantenimientoComponent
  ], 
  entryComponents: [],
  imports: [ 
    MantenimientoRouter,
    CommonModule, 
    FormsModule, ReactiveFormsModule,
    NgbModule,
    RouterModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class MantenimientoModule { }