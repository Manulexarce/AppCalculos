import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerCalculoComponent } from './primer-calculo/primer-calculo.component';
import { SegundoCalculoComponent } from './segundo-calculo/segundo-calculo.component';


const routes: Routes = [
  { path: 'pagina1', component:PrimerCalculoComponent},
  { path: 'pagina2', component:SegundoCalculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
