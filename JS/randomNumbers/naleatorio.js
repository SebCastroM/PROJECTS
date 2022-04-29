var z, i;
var reps1 = document.getElementById("nnumeros");
var mini1 = document.getElementById("nmin");
var maxi1 = document.getElementById("nmax");
var resultados = document.getElementById("resultados");

// var resultadox = document.getElementById("nresultado");

var button = document.getElementById("boton");

button.addEventListener("click", generar)

function generar() {
  var reps = parseInt(reps1.value);
  var mini = parseInt(mini1.value);
  var maxi = parseInt(maxi1.value);

  for (var i = 0; i < reps; i++) {
    var z = aleatorio(mini, maxi);
    if (i == reps-1){
      resultados.innerHTML += `${z} </br> `
    }
    else{
      resultados.innerHTML += `${z}, `
    }
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
