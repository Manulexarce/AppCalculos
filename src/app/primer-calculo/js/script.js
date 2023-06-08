//Aquí comienza el código del otro formulario
function sumar(){

  const numero1 = parseFloat (document.getElementById("numero1"). value);
  const numero2 = parseFloat (document.getElementById("numero2"). value);

  const resultado = numero1 + numero2;

  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado){
    elementoResultado.textContent = 'El resultado es: ${resultado}';
  }

}