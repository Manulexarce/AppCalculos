import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-calculo',
  templateUrl: './segundo-calculo.component.html',
  styleUrls: ['./segundo-calculo.component.css']
})
export class SegundoCalculoComponent {

}


//Aquí comienza el código del otro formulario
document.addEventListener("DOMContentLoaded", () => {
  const botonRestar = document.getElementById("botonRestar");
  

  if (botonRestar) {
    botonRestar.addEventListener("click", () => {
      
      const valor1 = parseFloat((document.getElementById("valor1") as HTMLInputElement).value);
      const valor2 = parseFloat((document.getElementById("valor2") as HTMLInputElement).value);

      if (isNaN(valor1) || isNaN(valor2)){
        //esta acción se ejecutara cuando los campos input no tienen contenido
        const elementoResultado = document.getElementById("resultado");
        if (elementoResultado){
        elementoResultado.textContent = 'El Resultado es nulo porque no hay números para realizar la resta'
      }
    }
      else{

      const resultado = valor1 - valor2;

      const elementoResultado = document.getElementById("resultado");
      if (elementoResultado) {
        elementoResultado.textContent = `El resultado es: ${resultado}`;
      }
    }
  });
}
});