document.addEventListener('DOMContentLoaded', function () {
    const inputNumero = document.getElementById('numero');
  
    inputNumero.addEventListener('input', function (event) {
      const value = event.target.value;
      if (value < 0) {
        event.target.value = '';
      } else if (value.length > 4) {
        event.target.value = value.slice(0, 4);
      }
    });
  });