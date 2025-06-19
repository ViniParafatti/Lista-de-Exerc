const campoTexto = document.getElementById('campoTexto');
const mensagemTeclado = document.getElementById('mensagemTeclado');

campoTexto.addEventListener('keydown', function(event) {
   
    mensagemTeclado.textContent = `Você pressionou: ${event.key}`;
});