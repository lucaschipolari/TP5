import {getNumeroRandom} from "./numeroRandom.js";
function count() {
    const counters = document.querySelectorAll('.counter'); // Obtener todas las etiquetas con clase '.counter'
    
    counters.forEach((counter, index) => {
      let counterObj = { var: 0 };
  
      gsap.to(counterObj, 3, {
        var: getNumeroRandom(),
        onUpdate: function() {
          let number = Math.ceil(counterObj.var);
          counter.textContent = number; // Actualizar el contenido de la etiqueta actual
        },
        ease: 'circ.out',
        delay: index * 0.5 // Agregar un pequeño retraso para animar las etiquetas una tras otra
      });
    });
  }
  
  // Llama a la función para iniciar la animación
  count();
  
  document.addEventListener("DOMContentLoaded", function() {
    count(); // Inicia el conteo animado cuando la página se cargue
  });