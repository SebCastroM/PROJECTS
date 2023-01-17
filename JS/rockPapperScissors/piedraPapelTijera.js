// 1 es piedra, 2 es papel y 3 es tijera
let nombre = prompt ("Nombre del jugador:")
let board = document.getElementById("dashboard")
const jugar = document.getElementById("boton");
let opcionJugador1 = document.getElementById("opcionJugador")
let PC = 0
let rJugador = 0
let rPC = 0
jugar.addEventListener("click", resultado);

function resultado() {
    PC = Math.floor(Math.random()*(3 - 1 + 1))+1

    if (PC == 1){
        alert ('PC saco Piedra')
    } else if (PC == 2){
        alert ('PC saco Papel')
    } else if (PC == 3){
        alert ('PC saco Tijera')
    }
    if (opcionJugador1.value == "") {
        alert('INGRESE UNA OPCION')
    } else if (opcionJugador1.value == PC) {
        alert('EMPATE')
    } else if((opcionJugador1.value == 1 && PC == 3) || (opcionJugador1.value == 2 && PC == 1) || (opcionJugador1.value == 3 && PC == 2)) {
        alert('GANASTE')
        rJugador += 1
    } else {
        alert('PERDISTE')
        rPC += 1 
    }
    board.innerHTML = nombre + ": " + rJugador + " - PC: " + rPC
}