import { count2 } from "./utilities.js";
import {crearNumeroRandom } from "./utilities.js";

const numero = crearNumeroRandom();
console.log(numero);
document.addEventListener('DOMContentLoaded', function () {
    const inputNumero = document.getElementById('numero');
  
    inputNumero.addEventListener('input', function (event) {
      const value = event.target.value;
      console.log(value);
      if (value < 0) {
        event.target.value = '';
      } else if (value.length > 4) {
        event.target.value = value.slice(0, 4);
      }
    });
  });
  document.getElementById("enviarBtn").addEventListener("click", function(event) {
    // Obtener el valor del input
    var numeroIngresado = document.getElementById("numero").value;
    
    // Verificar si el número es válido
    if (numeroIngresado >= 1000 && numeroIngresado <= 9999) {
        // Realizar acciones con el número capturado
        console.log("Número capturado:", numeroIngresado);
        event.preventDefault();
        
        let numeroString = localStorage.getItem('numeroAleatorio')
        if(numeroString){
          let numeroArray = numeroString.split('');
          let contadores = [];
          for (let i = 0; i < 4; i++) {
            if (numeroArray[i] == numeroIngresado[i]) {
              document.getElementById(`counter-${i + 1}`).classList.remove("bg-black");
              document.getElementById(`counter-${i + 1}`).classList.remove("bg-danger");
              document.getElementById(`counter-${i + 1}`).classList.add("bg-success");
              //count(`counter`);
              contadores.push(numeroArray[i]);
              
            } else {
              document.getElementById(`counter-${i + 1}`).classList.remove("bg-black");
              document.getElementById(`counter-${i + 1}`).classList.remove("bg-success");
              document.getElementById(`counter-${i + 1}`).classList.add("bg-danger");
            }
          }
          count2(".counter", contadores);
          if (contadores.length === 4) {
            alert("Haz ganado");
          
          }
        }
        
        // Aquí puedes agregar más acciones según tus necesidades
    } else {
        alert("Por favor ingrese un número válido de hasta 4 cifras.");
    }
});