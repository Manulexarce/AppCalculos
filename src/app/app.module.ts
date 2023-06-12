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

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    DatospostComponent,
    PrimerCalculoComponent,
    SegundoCalculoComponent,
    MenuindexComponent,
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
