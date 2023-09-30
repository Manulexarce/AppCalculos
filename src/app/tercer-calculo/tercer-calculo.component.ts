import { Component } from '@angular/core';

@Component({
  selector: 'app-tercer-calculo',
  templateUrl: './tercer-calculo.component.html',
  styleUrls: ['./tercer-calculo.component.css']
})
export class TercerCalculoComponent {

}
 //Codigo de operación básica de división

 document.addEventListener("DOMContentLoaded",() =>{
  const BotonDividir = document.getElementById("numero-BotonDividir");
  let resultado = 0;

  if (BotonDividir){
    BotonDividir.addEventListener("click", () =>{
      const PrimerValor = parseFloat((document.getElementById("numero-Dividendo") as HTMLInputElement).value);
      const SegundoValor = parseFloat((document.getElementById("numero-Divisor") as HTMLInputElement).value);

      
      if(isNaN(PrimerValor) || isNaN(SegundoValor)){

        const ResultadoElemento = document.getElementById("resultado");
        if (ResultadoElemento){
          ResultadoElemento.textContent = 'No hay resultado porque no se han ingresado uno o varios datos para realizar esta operación.'
        }
      }
      else {
        const resultado = PrimerValor / SegundoValor;

        const ResultadoElemento = document.getElementById("resultado");
        if (ResultadoElemento){
          ResultadoElemento.textContent = `El resultado de la división es: ${resultado}`;
        }

 const NuevaOperacion = document.getElementById("NewOperacion");
 if (NuevaOperacion){
  NuevaOperacion.addEventListener("click", ()=>{
    
    const NuevaDivision = parseFloat((document.getElementById("NewDivisor") as HTMLInputElement).value);

    if(!isNaN(NuevaDivision)){

    const OtraDivision = resultado / NuevaDivision;

    const resultado2 = document.getElementById("resultado2");
    if(resultado2){
      resultado2.textContent = `Se ha dividido: ${resultado} con el valor ingresado: ${NuevaDivision}. El resultado de la nueva división es:  ${OtraDivision}`;
    }
  } else {
    console.log("El valor ingresado en 'NewDivisor' no es válido");
  }
  })
 }
 const Operando = document.getElementById("Operar");

if (Operando) {
  Operando.addEventListener("click", () => {
    const Dividendo2 = document.getElementById("numero-Dividendo") as HTMLInputElement;
    if (Dividendo2) {
      Dividendo2.value = `${resultado}`;
    }
    
    //El siguiente código aún no funciona
    const NewDivisor = document.getElementById("NewDivisor") as HTMLInputElement;
    if (NewDivisor.firstChild) {
      NewDivisor.firstChild.remove();
      
    }
  });
}
//CODIGO ANTERIOR QUE DABA ERROR EN EL NewDivisor.value = '';
//---------------------------------------------------------------
//  const Operando = document.getElementById("Operar");
//  if (Operando) {
//    Operando.addEventListener("click", () => {
//      const Dividendo2 = document.getElementById("numero-Dividendo") as HTMLInputElement;
//      if (Dividendo2) {
//        Dividendo2.value = `${resultado}`;
//      }
//      const NewDivisor = document.getElementById("NewDivisor");
//      if (NewDivisor) {
//       NewDivisor.value = '';
//     }
//    });
//  }
 
}
    })
  }
 })