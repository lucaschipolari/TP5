function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleDateString('es-ES', options);
    document.getElementById('date-time').textContent = dateTimeString;
}
setInterval(updateDateTime, 1000);

updateDateTime();