// 1 es piedra, 2 es papel y 3 es tijera
let nombre = prompt ("Nombre del jugador:")
const jugar = document.getElementById("boton");
let opcionJugador1 = document.getElementById("opcionJugador")
let PC = 2
let rJugador = 0
let rPC = 0

jugar.addEventListener("click", resultado);
function resultado() {
    if (opcionJugador1.value == "") {
        alert('INGRESE UNA OPCION')
    } else if (opcionJugador1.value == PC) {
        alert('EMPATE')
    } else if((opcionJugador1.value == 1 && PC == 3) || (opcionJugador1.value == 2 && PC == 1) || (opcionJugador1.value == 3 && PC == 2)) {
        alert('GANASTE')
        rJugador = rJugador + 1
    } else {
        alert('PERDISTE')
        rPC = rPC + 1
    }
    alert (nombre + ": " + rJugador + " - PC: " + rPC)
}