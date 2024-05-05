import { getNumeroRandom } from "./numeroRandom.js";

export function generarNumeroAleatorio() {
  let numeroString = localStorage.getItem("numeroAleatorio");

  let numero = parseInt(numeroString);

  if (isNaN(numero)) { 
    numero = getNumeroRandom();
    numeroString = numero.toString();
    localStorage.setItem("numeroAleatorio", numeroString);
  }
  numeroString = numero.toString();

  const numeros = numeroString.split('');
  console.log(numeros);
  return numeros;
}

document.addEventListener("DOMContentLoaded", function () {
  generarNumeroAleatorio();
});