const btnVermelho = document.getElementById('btnVermelho');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');

function mudarCorDeFundo(cor) {
    document.body.style.backgroundColor = cor;
}

btnVermelho.addEventListener('click', () => mudarCorDeFundo('red'));
btnAzul.addEventListener('click', () => mudarCorDeFundo('blue'));
btnVerde.addEventListener('click', () => mudarCorDeFundo('green'));