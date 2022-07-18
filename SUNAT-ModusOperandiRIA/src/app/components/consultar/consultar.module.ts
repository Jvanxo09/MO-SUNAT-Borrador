import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConsultarComponent } from './consultar.component';
import { ConsultarRouter } from './consultar.router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouter } from 'src/app/app.router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ConsultarComponent
  ], 
  entryComponents: [],
  imports: [ 
    ConsultarRouter,
    CommonModule, 
    FormsModule, ReactiveFormsModule,
    NgbModule,
    RouterModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class ConsultarModule { }