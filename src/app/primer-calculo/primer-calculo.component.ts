import { Component } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-primer-calculo',
  templateUrl: './primer-calculo.component.html',
  styleUrls: ['./primer-calculo.component.css']
})

export class PrimerCalculoComponent {
  numCajas: number = 0;

  constructor(private renderer: Renderer2, private elementRef: ElementRef){
    //Código adicional para agregar cosas de constructir

  }

  valores: string[] = []; //declarando e iniciando el array 'valores
  sumaTotal: number = 0; //Esta es una variable dentor de la clase agregarCagaTexto() para almacenar la suma total de los valores
  

  agregarCajaTexto(){
    //Codigo para agregar cajas de texto
    this.numCajas++; //Incrementa el número de cajas
    const contenedor = this.elementRef.nativeElement.querySelector('#listaUsuario');// Obtener el contenedor de las cajas de texto

    //Crea un nuevo elemento de caja de texto
    const nuevaCajaTexto = this.renderer.createElement('input');
    this.renderer.setAttribute(nuevaCajaTexto, 'type', 'text');
    this.renderer.setAttribute(nuevaCajaTexto, 'name', 'caja');
    this.renderer.setAttribute(nuevaCajaTexto, 'id', 'elemetoLista' + this.numCajas);

    
    nuevaCajaTexto.addEventListener('change', (event: { target: HTMLInputElement; }) => {
      //CAMBIO** Antes el codigo era pero fue corredigo en vez de 'input' 'change' para que así tome el valor total de la caja de texto en vez de separar cada número en una variable separada 'nuevaCajaTexto.addEventListener('', (event: { target: HTMLInputElement; }) => {'
      const contenido = (event.target as HTMLInputElement).value;
      console.log(`Este es el contenido que quiero ver en la consola ${contenido}`);
      //cualquiera de los dos funciona (arriba) o (abajo)
      console.log(contenido);

      //agragando array para almacenar llamado 'valores'
      this.valores.push(contenido);
      //realizar las operaciones con los valores almacenados
      this.realizarOperaciones();
    });
    
    
    this.renderer.addClass(nuevaCajaTexto, 'extras');//En la parte de extras es la clase a la que se asignara para personalizar el css .extras{}


    //Agrega la nueva caja de texto al contenedor

    this.renderer.appendChild(contenedor, nuevaCajaTexto);

    //Actualiza el valor del tercer caudro de texto con la suma total
    //nuevaCajaTexto.value = this.sumaTotal.toString(); //descomentar esta linea de codigo hace que caja input al agregarse tenga el calor 0 como se declaro al principio de la clase.
    if (this.numCajas === 4){
      this.realizarOperaciones();
    }
  }
  
  realizarOperaciones(){
    //realizan las operaciones necesarias con los valores almacenados en this.valores
    //sumando todos los valores EJEMPLO
    /*const suma = this.valores.reduce((total, valor) => total + parseFloat(valor), 0);
  console.log('Suma:', suma);*/

  //Ahora verificamos si hay al menos un valor en 'this.valores'
  if (this.valores.length > 0 ){
    //realizando las operaionces necesarias con los valores almacenados en this.valores
    //const suma = this.valores.reduce ((total, valor) => total + parseFloat(valor), 0);
    let suma = 0;
    for (let i = 0; i < this.valores.length; i++){
      const valor = parseFloat(this.valores[i]);
      if(!isNaN(valor)){
        suma += valor;
        
      }
    }
    this.sumaTotal = suma;
    console.log('suma total:', this.sumaTotal);//Esto en lugar de tirarme la respuesta de la variable 4 me da el número de filas que existen
    
    const elementoResultado = document.getElementById("resultado");
        if (elementoResultado){
        elementoResultado.textContent = `La suma total de todos los datos ingresados es ${suma}`;
        }//En esta parte ya lo imprime dentro de un parrafo en el front

    

    //recoddiendo el array e imprime todos los valores

    for (let i = 0; i < this.valores.length; i++){
      const valor = parseFloat(this.valores[i]);
      const contador = i + 1;
      console.log(`Valor del cuadro de texto ${contador}:`, valor);
      //mando el resulto en lugar de consola en texto para el front
   /*    const elemento = document.getElementById("ciclofor");
       if(elemento){
        elemento.textContent = `El resultado es ${i + 1}`;
       }*/
      /*const elementoResultado = document.getElementById("resultado");
        if (elementoResultado){
        elementoResultado.textContent = 'El Resultado es nulo porque no hay números para sumar'*/ 
      //ahora tomando el tercer valor del array
    //const tercerValor = this.valores[2];
    // console.log('Valor del tercer cuadro de texto:', this.valores[2]);
    }
  } else {
    console.log('No hay valores para realizar operaciones');
    const elemento = document.getElementById("ciclofor");
    if (elemento) {
      elemento.textContent = "No hay valores para realizar la operación de los elementos";
    }
  }
  


  
  }
  
  Reiniciar(){
  location.reload();
 } 
 
  
  //creando un método para llamarlos a todos los de las cajas
  inicializarCaptura() {
    let hayError = false;

    for (let i = 0; i < this.valores.length; i++) {
      const dato = this.valores[i];
    
      if (typeof dato !== 'number') {
        console.log(`Dato incorrecto en la celda ${i + 1}: ${dato}`);
        hayError = true;
      }
    }
    
    if (hayError) {
      console.log('Se encontraron errores en los datos.');
    } else {
      console.log('No se encontraron errores en los datos.');
    }
    
     if (!hayError) {
      this.realizarOperaciones();
     }
  }

}

//Configurando botón para añadir nuevas cajas de texto

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
