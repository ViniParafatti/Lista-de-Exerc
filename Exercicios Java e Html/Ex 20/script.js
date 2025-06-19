
const inputNome = document.getElementById('primeiroNome');
const btnSaudar = document.getElementById('btnSaudar');
const divMensagem = document.getElementById('mensagemSaudacao');


function exibirSaudacao() {
    const nome = inputNome.value.trim(); 

    
    if (nome === '') {
        divMensagem.textContent = 'Por favor, digite seu primeiro nome.';
    } else {
        divMensagem.textContent = `Olá, ${nome}! Estamos felizes em te ver aqui!`;
    }
}

btnSaudar.addEventListener('click', exibirSaudacao);