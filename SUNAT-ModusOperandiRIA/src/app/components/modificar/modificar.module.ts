import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouter } from 'src/app/app.router';
import { RouterModule } from '@angular/router';
import { ModificarRouter } from './modificar.router';
import { ModificarComponent } from './modificar.component';
import { SelectModificarComponent } from './select-modificar/select-modificar.component';

@NgModule({
  declarations: [
    ModificarComponent,
    SelectModificarComponent
  ], 
  entryComponents: [SelectModificarComponent],
  imports: [ 
    ModificarRouter,
    CommonModule, 
    FormsModule, ReactiveFormsModule,
    NgbModule,
    RouterModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class ModificarModule { }