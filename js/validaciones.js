// import { count2 } from "./utilities.js";
import { generarNumeroAleatorio } from "./utilities.js";


// const [first, setfirst] = useState(0);

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
  document.addEventListener("DOMContentLoaded", function() {
    const inputNumero = document.getElementById("numero");
    const enviarBtn = document.getElementById("enviarBtn");
  
    
    function handleKeyPress(event) {
      if (event.key === "Enter") {
        event.preventDefault(); 
        enviarFormulario();
      }
    }
  
    // Función para enviar el formulario
    function enviarFormulario() {
      let numeroIngresado = document.getElementById("numero").value;
    
      if (numeroIngresado.length === 4) {
          
          console.log("Número capturado:", numeroIngresado);
          event.preventDefault();
          
          let numeroString = localStorage.getItem('numeroAleatorio')
          if(numeroString){
            let numeroArray = numeroString.split('');
            let contadores = [];
            for (let i = 0; i < numeroArray.length; i++) {
              if (numeroArray[i] == numeroIngresado[i]) {
                document.getElementById(`counter-${i + 1}`).classList.remove("bg-black");
                document.getElementById(`counter-${i + 1}`).classList.remove("bg-danger");
                document.getElementById(`counter-${i + 1}`).classList.add("bg-success");
                document.getElementById(`counter-${i + 1}`).textContent = numeroArray[i];
                contadores.push(i);
                
              } else {
                document.getElementById(`counter-${i + 1}`).classList.remove("bg-black");
                document.getElementById(`counter-${i + 1}`).classList.remove("bg-success");
                document.getElementById(`counter-${i + 1}`).classList.add("bg-danger");
  
              }
            }
            if (contadores.length === 4) {
              if (confirm("¡Haz ganado! ¿Quieres volver a jugar?")) {
                document.getElementById("numero").value = "";
                localStorage.setItem("numeroAleatorio", null);
                generarNumeroAleatorio();
                window.location.reload();
              } else {
                
              }
            }
  
          }
      } else {
          alert("Por favor ingrese un número válido de hasta 4 cifras.");
      }
    }
  
    inputNumero.addEventListener("keypress", handleKeyPress);
    enviarBtn.addEventListener("click", enviarFormulario);
    
  });