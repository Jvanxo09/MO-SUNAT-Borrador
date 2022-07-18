import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouter } from 'src/app/app.router';
import { RouterModule } from '@angular/router';
import { RegistroRouter } from './registro.router';
import { RegistroComponent } from './registro.component';

@NgModule({
  declarations: [
    RegistroComponent
  ], 
  entryComponents: [],
  imports: [ 
    RegistroRouter,
    CommonModule, 
    FormsModule, ReactiveFormsModule,
    NgbModule,
    RouterModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class RegistroModule { }