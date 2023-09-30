import { Component } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-segundo-calculo',
  templateUrl: './segundo-calculo.component.html',
  styleUrls: ['./segundo-calculo.component.css']
})

export class SegundoCalculoComponent {
  numCajas: number = 0;

  constructor(private renderer: Renderer2, private elementRef: ElementRef){
    //Código adicional para agregar cosas de constructir

  }

  valores: string[] = []; //declarando e iniciando el array 'valores
  restaTotal: number = 0; //Esta es una variable dentor de la clase agregarCagaTexto() para almacenar la suma total de los valores
  
  Reiniciar(){
    location.reload();
   } 
   

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
  
  realizarOperaciones() {
    if (this.valores.length > 0) {
      let resta = parseFloat(this.valores[0]); // Inicializa con el primer valor
      for (let i = 1; i < this.valores.length; i++) { // Comienza en el segundo valor
        const valor = parseFloat(this.valores[i]);
        if (!isNaN(valor)) {
          resta -= valor; // Resta el valor actual a la variable 'resta'
        }
      }
      this.restaTotal = resta;
      console.log('resta total:', this.restaTotal);
  
      const elementoResultado = document.getElementById("resultado");
      if (elementoResultado) {
        elementoResultado.textContent = `La resta total de todos los datos ingresados es ${resta}`;
      }
  
      for (let i = 0; i < this.valores.length; i++) {
        const valor = parseFloat(this.valores[i]);
        console.log(`Valor del cuadro de texto ${i + 1}:`, valor);
        console.log('Valor del tercer cuadro de texto:', this.valores[2]);
      }
    } else {
      console.log('No hay valores para realizar operaciones');
      const elemento = document.getElementById("ciclofor");
      if (elemento) {
        elemento.textContent = `No hay valores para realizar la operación de los elementos`;
      }
    }
  }
  
  //creando un método para llamarlos a todos los de las cajas
  inicializarCaptura() {
    let hayError = false;
  
    for (let i = 1; i < this.valores.length; i++) {
      const dato = this.valores[i];
  
      if (typeof dato !== 'number') {
        console.log(`Dato incorrecto en la celda ${i}: ${dato}`);
        const elemento = document.getElementById("ciclofor");
  
        if (elemento) {
          elemento.textContent = `Un dato ingresado en una de las celdas no es correcto.`;
          elemento.style.color = "black";//cambia el color de la respuesta
        }
  
        hayError = true;
      }
    }
  
    if (!hayError) {
      this.realizarOperaciones();
    }
  }
  

}

//Configurando botón para añadir nuevas cajas de texto

//Aquí comienza el código del otro formulario
document.addEventListener("DOMContentLoaded", () => {
  const botonRestar = document.getElementById("botonRestar");
  

  if (botonRestar) {
    botonRestar.addEventListener("click", () => {
      
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

      const resultado = numero1 - numero2;

      const elementoResultado = document.getElementById("resultado");
      if (elementoResultado) {
        elementoResultado.textContent = `El resultado es: ${resultado}`;
      }
    }
  });
}
});
