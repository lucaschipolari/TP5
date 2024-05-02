import { getNumeroRandom } from "./numeroRandom";

    
/*function getNumeros(){
    const ingreso = document.getElementById('numero');
    const enviarBtn = document.getElementById('enviarBtn');

    ingreso.addEventListener('input', function(e){
        const value = e.target.value;
        console.log(value);
        alert("hola")
    
    })
    enviarBtn.addEventListener('click', () => {
        const numero = parseFloat(ingreso.value);
        console.log(numero);
    }); // Añadir el paréntesis de cierre aquí
}*/
/*
document.addEventListener('DOMContentLoaded', () => {
   getNumeros()
});
*/
document.getElementById("enviarBtn").addEventListener("click", function(event) {
    // Obtener el valor del input
    var numeroIngresado = document.getElementById("numero").value;
    
    // Verificar si el número es válido
    if (numeroIngresado >= 1000 && numeroIngresado <= 9999) {
        // Realizar acciones con el número capturado
        console.log("Número capturado:", numeroIngresado);
        numeroIngresado = numeroIngresado.split("");

        event.preventDefault();
        
        // Aquí puedes agregar más acciones según tus necesidades
    } else {
        alert("Por favor ingrese un número válido de hasta 4 cifras.");
    }
});