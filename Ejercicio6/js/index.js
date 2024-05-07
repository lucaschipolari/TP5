const form = document.getElementById('horaForm');
const mensaje = document.getElementById('mensaje');
const timer = document.getElementById('timer');
const btnPausar = document.getElementById('btnPausar');
const btnReiniciar = document.getElementById('btnReiniciar');
const btnIniciar = document.getElementById('btnIniciar');
let tiempoRestante = 0;
let intervaloCronometro;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const hora = document.getElementById('hora').value;
  const minutos = document.getElementById('minutos').value;
  const segundos = document.getElementById('segundos').value;

  const horaVal = validarHora(hora);
  const minutosVal = validarMinutosSegundos(minutos);
  const segundosVal = validarMinutosSegundos(segundos);

  if (horaVal && minutosVal && segundosVal) {
    tiempoRestante = parseInt(hora) * 3600 + parseInt(minutos) * 60 + parseInt(segundos);
    mostrarTemporizador(tiempoRestante);
    btnIniciar.disabled=false;
    mensaje.textContent = 'Hora válida: ' + hora + ':' + minutos + ':' + segundos;
    mensaje.style.color = 'green';
  } else {
    mensaje.textContent = 'Ingrese una hora válida en el formato HH:MM:SS';
    mensaje.style.color = 'red';
  }
});

function validarHora(hora) {
  const regexHora = /^(0[0-9]|1[0-9]|2[0-3])$/; 
  return regexHora.test(hora);
}

function validarMinutosSegundos(value) {
  const regexMS = /^[0-5]?[0-9]$/;
  return regexMS.test(value);
}

function formatearTiempo(ms) {
  const horas = Math.floor(ms / 3600);
  const minutos = Math.floor((ms % 3600) / 60);
  const segundos = Math.floor(ms % 60);

  return (
    (horas < 10 ? '0' : '') + horas + ':' +
    (minutos < 10 ? '0' : '') + minutos + ':' +
    (segundos < 10 ? '0' : '') + segundos
  );
}

function actualizarMostrar() {
  timer.textContent = formatearTiempo(tiempoRestante);
  if (tiempoRestante <= 0) {
    clearInterval(intervaloCronometro);
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnReiniciar.disabled = true;
  } else {
    tiempoRestante--;
  }
}

btnIniciar.addEventListener('click', function () {
  intervaloCronometro = setInterval(actualizarMostrar, 1000);
  btnIniciar.disabled = true;
  btnPausar.disabled = false;
  btnReiniciar.disabled = false;
});

btnPausar.addEventListener('click', function () {
  clearInterval(intervaloCronometro);
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
});

btnReiniciar.addEventListener('click', function () {
  clearInterval(intervaloCronometro);
  tiempoRestante = 0;
  timer.textContent = '00:00:00';
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
  btnReiniciar.disabled = true;
});

function mostrarTemporizador(tiempo) {
  timer.textContent = formatearTiempo(tiempo);
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
  btnReiniciar.disabled = true;
}
