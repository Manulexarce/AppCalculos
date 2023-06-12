import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-calculo',
  templateUrl: './primer-calculo.component.html',
  styleUrls: ['./primer-calculo.component.css']
})

export class PrimerCalculoComponent {

  PrimerValor = 0;
  SegundoValor = 0;
  Resultado = 0;

  Datos() {
    //this.Resultado = this.PrimerValor + this.SegundoValor;
    const resultado = this.PrimerValor + this.SegundoValor;
  }
}
function sumar(PrimerValor: number, SegundoValor: number): number {
  return PrimerValor + SegundoValor;
}

const variable1 = 2;
const variable2 = 4;
const Respuesta = sumar(variable1, variable2);

console.log(Respuesta); // Imprime: 8

const operacion = new PrimerCalculoComponent();
const operacionresultado = operacion.PrimerValor + operacion.SegundoValor;

console.log ( operacionresultado);


//Aquí comienza el código del otro formulario
document.addEventListener("DOMContentLoaded", () => {
  const sumarButton = document.getElementById("sumarButton");

  if (sumarButton) {
    sumarButton.addEventListener("click", () => {
      const numero1 = parseFloat((document.getElementById("numero1") as HTMLInputElement).value);
      const numero2 = parseFloat((document.getElementById("numero2") as HTMLInputElement).value);

      const resultado = numero1 + numero2;

      const elementoResultado = document.getElementById("resultado");
      if (elementoResultado) {
        elementoResultado.textContent = `El resultado es: ${resultado}`;
      }
    });
  }
});

