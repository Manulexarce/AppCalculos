import { Component } from '@angular/core';

@Component({
  selector: 'app-datospost',
  templateUrl: './datospost.component.html',
  styleUrls: ['./datospost.component.css']
})
export class DatospostComponent {
  nombre ="cagada"
  Valor(){
    this.nombre = "otra vez"
  }

}
