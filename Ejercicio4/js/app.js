document.addEventListener('DOMContentLoaded', function () {
    let tiempoInicio;
    let tiempoTranscurrido = 0;
    let intervaloCronometro;

    const mostrarTiempo = document.getElementById('displayTime');
    const btnIniciar = document.getElementById('btnIniciar');
    const btnPausar = document.getElementById('btnPausar');
    const btnReiniciar = document.getElementById('btnReiniciar');

    function formatearTiempo(ms) {
        const horas = Math.floor(ms / 3600000);
        const minutos = Math.floor((ms % 3600000) / 60000);
        const segundos = Math.floor((ms % 60000) / 1000);

        return (
            (horas < 10 ? '0' : '') + horas + ':' +
            (minutos < 10 ? '0' : '') + minutos + ':' +
            (segundos < 10 ? '0' : '') + segundos
        );
    }

    function actualizarMostrar() {
        const tiempoActual = Date.now();
        const diferenciaTiempo = tiempoActual - tiempoInicio + tiempoTranscurrido;
        mostrarTiempo.textContent = formatearTiempo(diferenciaTiempo);
    }

    btnIniciar.addEventListener('click', function () {
        tiempoInicio = Date.now() - tiempoTranscurrido;
        intervaloCronometro = setInterval(actualizarMostrar, 1000);
        btnIniciar.disabled = true;
        btnPausar.disabled = false;
    });

    btnPausar.addEventListener('click', function () {
        clearInterval(intervaloCronometro);
        tiempoTranscurrido = Date.now() - tiempoInicio;
        btnIniciar.disabled = false;
        btnPausar.disabled = true;
    });

    btnReiniciar.addEventListener('click', function () {
        clearInterval(intervaloCronometro);
        tiempoTranscurrido = 0;
        mostrarTiempo.textContent = '00:00:00';
        btnIniciar.disabled = false;
        btnPausar.disabled = true;
    });
});