// 1 es piedra, 2 es papel y 3 es tijera
let nombre = prompt ("Nombre del jugador:")
const rock = document.getElementById("bRock")
const papper = document.getElementById("bPapper")
const scissor = document.getElementById("bScissor")
let board = document.getElementById("score")
let PC = 0
let rJugador = 0 
let rPC = 0
function jugar(opcion) {
    PC = Math.floor(Math.random()*(3 - 1 + 1))+1
    if (PC == 1){
        alert ('PC saco Piedra')
    } else if (PC == 2){
        alert ('PC saco Papel')
    } else if (PC == 3){
        alert ('PC saco Tijera')
    }
    if (opcion == PC) {
        alert('EMPATE')
    } else if((opcion == 1 && PC == 3) || (opcion == 2 && PC == 1) || (opcion == 3 && PC == 2)) {
        alert('GANASTE')
        rJugador += 1
    } else {
        alert('PERDISTE')
        rPC += 1 
    }
    board.innerHTML = nombre + ": " + rJugador + " - PC: " + rPC
    return rJugador, rPC
}
rock.addEventListener("click", ()=> jugar(1))
papper.addEventListener("click", ()=> jugar(2))
scissor.addEventListener("click", ()=> jugar(3))