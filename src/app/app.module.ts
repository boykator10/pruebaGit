import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    EliminarComponent,
    GuardarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
