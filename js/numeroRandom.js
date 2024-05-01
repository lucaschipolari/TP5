
export function getNumeroRandom() {
    const numero = Math.floor(1000+Math.random() * 9999);
    const digitos = Array.from(String(numero),Number);
    //document.querySelector('.div-1').textContent = digitos[0];
    //document.querySelector('.div-2').textContent = digitos[1];
    //document.querySelector('.div-3').textContent = digitos[2];
    //document.querySelector('.div-4').textContent = digitos[3];    

    return Math.floor(Math.random()*10);
    //return digitos;
}
document.addEventListener('DOMContentLoaded',function() {
    getNumeroRandom();
});