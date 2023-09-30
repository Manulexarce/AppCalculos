import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatospostComponent } from './datospost/datospost.component';
import { PrimerCalculoComponent } from './primer-calculo/primer-calculo.component';
import { SegundoCalculoComponent } from './segundo-calculo/segundo-calculo.component';
import { MenuindexComponent } from './menuindex/menuindex.component';
import { TercerCalculoComponent } from './tercer-calculo/tercer-calculo.component';
import { CuartoCalculoComponent } from './cuarto-calculo/cuarto-calculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    DatospostComponent,
    PrimerCalculoComponent,
    SegundoCalculoComponent,
    MenuindexComponent,
    TercerCalculoComponent,
    CuartoCalculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
