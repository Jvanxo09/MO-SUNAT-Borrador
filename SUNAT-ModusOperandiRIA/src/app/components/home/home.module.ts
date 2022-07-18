import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouter } from 'src/app/app.router';
import { RouterModule } from '@angular/router';
import { HomeRouter } from './home.router';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ], 
  entryComponents: [],
  imports: [ 
    HomeRouter,
    CommonModule, 
    FormsModule, ReactiveFormsModule,
    NgbModule,
    RouterModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class HomeModule { }