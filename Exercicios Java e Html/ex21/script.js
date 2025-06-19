// Constantes para os elementos HTML
const displayTempo = document.getElementById('displayTempo');
const btnIniciar = document.getElementById('btnIniciar');
const btnPausar = document.getElementById('btnPausar');
const btnZerar = document.getElementById('btnZerar');



let segundosRestantes = 60; 

let intervalo; 

function atualizarDisplay() {
    displayTempo.textContent = segundosRestantes;
}

function iniciarTemporizador() {
    if (intervalo) {
        return;
    }
    intervalo = setInterval(() => {
        segundosRestantes--;
        atualizarDisplay(); 
        if (segundosRestantes <= 0) {
            zerarTemporizador();  
            alert("Tempo esgotado!");
        }
    }, 1000); 
    btnIniciar.disabled = true;
    btnPausar.disabled = false;
    btnZerar.disabled = false;
}
function pausarTemporizador() {
    clearInterval(intervalo); 
    
    intervalo = null; 
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
}
function zerarTemporizador() {
    pausarTemporizador(); 
    
    segundosRestantes = 60; 
    
    atualizarDisplay(); 
    
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnZerar.disabled = true;
}

btnIniciar.addEventListener('click', iniciarTemporizador);
btnPausar.addEventListener('click', pausarTemporizador);
btnZerar.addEventListener('click', zerarTemporizador);

atualizarDisplay();
btnPausar.disabled = true; 
btnZerar.disabled = true; 