import { getNumeroRandom } from "./numeroRandom.js";

//function recorrerString(){}

export function crearNumeroRandom(){
  let numeroString = localStorage.getItem("numeroAleatorio");
  if (!numeroString) {
    // Si no hay un número almacenado, generar uno aleatoriamente
    let numero = getNumeroRandom();
    numeroString = numero.toString();
    localStorage.setItem("numeroAleatorio", numeroString); // Guardar el número en localStorage
  }
const numeros = numeroString.split('');
  return numeros;
}

//if(usuarioAcierta){}

export function count(className) {
  const counters = document.querySelectorAll(className);
  counters.forEach((counter, index) => {
    let counterObj = { var: 0 };
    gsap.to(counterObj, {
      var: parseInt(numeros[index]), // Convertir el dígito a número entero
      onUpdate: function () {
        let number = Math.ceil(counterObj.var);
        counter.textContent = number;
      },
      ease: "circ.out",
      delay: index * 0.5,
    });
  });
}
export function count2(className,list) {
  const counters = document.querySelectorAll(className);
  let numeros = crearNumeroRandom();
  console.log(numeros.join(''));
  list.forEach((counter, index) => {
    let counterObj = { var: 0 };
    gsap.to(counterObj, {
      var: parseInt(numeros[index]), // Convertir el dígito a número entero
      onUpdate: function () {
        let roundedNumber = Math.ceil(counterObj.var);
        counters[index].textContent = roundedNumber;
      },
      ease: "circ.out",
      delay: index * 0.5,
    });
  });
}
//count(".counter")
document.addEventListener("DOMContentLoaded", function () {
  
});
