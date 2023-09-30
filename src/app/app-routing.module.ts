import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerCalculoComponent } from './primer-calculo/primer-calculo.component';
import { SegundoCalculoComponent } from './segundo-calculo/segundo-calculo.component';
import { TercerCalculoComponent } from './tercer-calculo/tercer-calculo.component';
import { CuartoCalculoComponent } from './cuarto-calculo/cuarto-calculo.component';

const routes: Routes = [
  { path: 'pagina1', component:PrimerCalculoComponent},
  { path: 'pagina2', component:SegundoCalculoComponent},
  { path: 'pagina3', component:TercerCalculoComponent},
  { path: 'pagina4', component:CuartoCalculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
