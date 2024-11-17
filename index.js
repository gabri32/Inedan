var clic = 0;

function divLogin(){ 
    const caja = document.getElementById("caja"); // Guardamos la referencia del elemento
    if (clic === 1) {
        caja.style.display = "none"; // Ocultamos la caja
        clic = 0; // Actualizamos el estado
    } else {
        caja.style.display = "block"; // Mostramos la caja
        caja.style.height = "auto"; // Ajustamos la altura (si es necesario)
        clic = 1; // Actualizamos el estado
    }

}
function divLogin2() {
    const caja = document.getElementById("caja2"); // Guardamos la referencia del elemento
    if (clic === 1) {
        caja.style.display = "none"; // Ocultamos la caja
        clic = 0; // Actualizamos el estado
    } else {
        caja.style.display = "block"; // Mostramos la caja
        caja.style.height = "auto"; // Ajustamos la altura (si es necesario)
        clic = 1; // Actualizamos el estado
    }
}
document.getElementById('current-year').textContent = new Date().getFullYear();
