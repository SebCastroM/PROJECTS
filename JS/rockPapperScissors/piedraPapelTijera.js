// 1 es piedra, 2 es papel y 3 es tijera
let nombre = prompt ("Nombre del jugador:")
const rock = document.getElementById("bRock")
const paper = document.getElementById("bPaper")
const scissors = document.getElementById("bScissors")
let board = document.getElementById("score")
let PC = 0
let rJugador = 0 
let rPC = 0
function jugar(opcion) {
    PC = Math.floor(Math.random()*(3 - 1 + 1))+1

    function cambiarNumAObjeto(numero) {
        switch (numero){
            case 1:
                return "Piedra"
            case 2:
                return "Papel"
            case 3:
                return "Tijera"
        }
    }

    if (opcion == PC) {
        let usuarioF = cambiarNumAObjeto(opcion)
        let pcF = cambiarNumAObjeto(PC)
        swal.fire ("EMPATE ._.","Elegiste: " + usuarioF + " y PC eligio: " + pcF, "question")
    } else if((opcion == 1 && PC == 3) || (opcion == 2 && PC == 1) || (opcion == 3 && PC == 2)) {
        let usuarioF = cambiarNumAObjeto(opcion)
        let pcF = cambiarNumAObjeto(PC)
        swal.fire ("GANASTE :)","Elegiste: " + usuarioF + " y PC eligio: " + pcF, "success")
        rJugador++
    } else {
        let usuarioF = cambiarNumAObjeto(opcion)
        let pcF = cambiarNumAObjeto(PC)
        swal.fire ("PERDISTE :(","Elegiste: " + usuarioF + " y PC eligio: " + pcF, "error")
        rPC++
    }
    board.innerHTML = nombre + ": " + rJugador + " - PC: " + rPC
    return rJugador, rPC
}
rock.addEventListener("click", ()=> jugar(1))
paper.addEventListener("click", ()=> jugar(2))
scissors.addEventListener("click", ()=> jugar(3))