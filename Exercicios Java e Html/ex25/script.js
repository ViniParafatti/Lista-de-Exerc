const btnContador = document.getElementById('btnContador');
const contadorDisplay = document.getElementById('contadorCliques');

let contagem = 0;


function incrementarContagem() {
    contagem++;
    contadorDisplay.textContent = contagem;
}


function resetarContagem() {
    contagem = 0;
    contadorDisplay.textContent = contagem;
}


btnContador.addEventListener('click', incrementarContagem);


btnContador.addEventListener('dblclick', resetarContagem);