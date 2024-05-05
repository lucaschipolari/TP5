import {
  validarDNI,
  validarNombre,
  validarTelefono,
  validarAltura,
  validarPeso,
} from "./validaciones.js";
import { Persona } from "./persona.js";


const $form = document.getElementById("formulario");
const $inputDni = document.getElementById("dni");
const $inputSexo = document.getElementById("sexo");
const $inputPeso = document.getElementById("peso");
const $inputAltura = document.getElementById("altura");
const $inputFechaDeNacimiento = document.getElementById("fechaNacimiento");
const $inputNombre = document.getElementById("nombre");
const $inputTelefono = document.getElementById("telefono");


function limpiarErrores() {
    const inputs = $form.querySelectorAll('.is-invalid');
    inputs.forEach(input => {
      input.classList.remove('is-invalid');
      input.classList.remove('is-valid');
    });
  }
  
$form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = $inputNombre.value;
  const dni = $inputDni.value;
  const sexo = $inputSexo.value;
  const peso = $inputPeso.value;
  const altura = $inputAltura.value;
  const fechaDeNacimiento = new Date($inputFechaDeNacimiento.value);
  const telefono = $inputTelefono.value;

  if (!validarNombre($inputNombre)) {
    //document.getElementById('mensaje').innerText = 'Por favor, ingresa un nombre válido.';
    return;
  }
  if (!validarDNI($inputDni)) {
    return;
  }
  if (!validarPeso($inputPeso)) {
    return;
  }

  if (!validarTelefono($inputTelefono)) {
    return;
  }

  if (!validarAltura($inputAltura)) {
    return;
  }

  alert("Datos ingresados correctamente");
  $form.reset();
  limpiarErrores();

  const persona = new Persona(nombre, dni, sexo, peso, altura, fechaDeNacimiento ,telefono);
  
  document.getElementById('generacion-resultado').textContent = persona.mostrarGeneracion();

});
