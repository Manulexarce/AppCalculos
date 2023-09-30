import { Component } from '@angular/core';

@Component({
  selector: 'app-cuarto-calculo',
  templateUrl: './cuarto-calculo.component.html',
  styleUrls: ['./cuarto-calculo.component.css']
})
export class CuartoCalculoComponent {

}

document.addEventListener("DOMContentLoaded",() =>{

  const BotonResultado = document.getElementById("ResultadoBoton");
  let Respuesta = 0;
  let PrimerValor = 0;
  let Respuesta2 = 0;

  if(BotonResultado){
    BotonResultado.addEventListener("click", () =>{
      
    const Porcentaje = parseFloat ((document.getElementById("numero1") as HTMLInputElement). value);
    const Numero = parseFloat ((document.getElementById("numero2") as HTMLInputElement). value);

      if(isNaN(Porcentaje) || isNaN(Numero)){

        const ResultadoTexto = document.getElementById("resultado");
        if (ResultadoTexto){
          ResultadoTexto.textContent = 'No se ha ingresado uno o más de los valores aún para poder proseguir.'
        }
      }
      else{
        //Primero tomo el número para convertirlo en un valor porcentual
        const PrimerValor = Porcentaje / 100;
        //En la siguiente variable estamos guardando el porcentaje introducido al número ingresado
        const Respuesta = PrimerValor * Numero;
        //Ahora la resta de la respuesta del porcentaje sacado al número para dar como resultado
        //completo de cuanto queda al sacarle el tanto porciento a un número
        const Respuesta2 = Numero - Respuesta;


        const ResultadoTexto = document.getElementById("resultado");
        if(ResultadoTexto){
          ResultadoTexto.innerHTML = `El ${Porcentaje} % de ${Numero} es: ${Respuesta} <br> y el resultado de restarle el porcentaje obtenido es: ${Respuesta2}`;
        }
      }

    })
  }


});