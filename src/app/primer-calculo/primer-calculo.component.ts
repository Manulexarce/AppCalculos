import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-calculo',
  templateUrl: './primer-calculo.component.html',
  styleUrls: ['./primer-calculo.component.css']
})

export class PrimerCalculoComponent {

}

//Aquí comienza el código del otro formulario
document.addEventListener("DOMContentLoaded", () => {
  const sumarButton = document.getElementById("sumarButton");
  

  if (sumarButton) {
    sumarButton.addEventListener("click", () => {
      
      const numero1 = parseFloat((document.getElementById("numero1") as HTMLInputElement).value);
      const numero2 = parseFloat((document.getElementById("numero2") as HTMLInputElement).value);

      if (isNaN(numero1) || isNaN(numero2)){
        //esta acción se ejecutara cuando los campos input no tienen contenido
        const elementoResultado = document.getElementById("resultado");
        if (elementoResultado){
        elementoResultado.textContent = 'El Resultado es nulo porque no hay números para sumar'
      }
    }
      else{

      const resultado = numero1 + numero2;

      const elementoResultado = document.getElementById("resultado");
      if (elementoResultado) {
        elementoResultado.textContent = `El resultado es: ${resultado}`;
      }
    }
  });
}
});
