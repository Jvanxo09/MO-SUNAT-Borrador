import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { SelectModificarComponent } from './components/modificar/select-modificar/select-modificar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultarComponent,
    ModificarComponent,
    MantenimientoComponent,
    SelectModificarComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
