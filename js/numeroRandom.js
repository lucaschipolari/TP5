
export function getNumeroRandom() {
    return Math.floor(1000+Math.random() * 9999);
    
}
document.addEventListener('DOMContentLoaded',function() {
    getNumeroRandom();
});