let z, i;
let reps1 = document.getElementById("nNumeros");
let mini1 = document.getElementById("nMin");
let maxi1 = document.getElementById("nMax");
let resultados = document.getElementById("resultados");
// var resultadox = document.getElementById("nresultado");
const button = document.getElementById("boton");
button.addEventListener("click", generar)
function generar() {
  let reps = parseInt(reps1.value);
  let mini = parseInt(mini1.value);
  let maxi = parseInt(maxi1.value);

  for (let i = 0; i < reps; i++) {
    let z = aleatorio(mini, maxi);
    if (i == reps-1){
      resultados.innerHTML += `${z} </br> `
    }
    else{
      resultados.innerHTML += `${z}, `
    }
  }
}
function aleatorio(min, max) {
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
