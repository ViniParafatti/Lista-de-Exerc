const meuParagrafo = document.getElementById('meuParagrafo');
let textoOriginal = "Dê um duplo clique aqui para mudar o texto!";
let textoAlternativo = "Texto alterado com sucesso! Dê outro duplo clique para voltar.";
let atualEhOriginal = true; 

meuParagrafo.addEventListener('dblclick', function() {
    if (atualEhOriginal) {
        this.textContent = textoAlternativo;
        atualEhOriginal = false;
    } else {
        this.textContent = textoOriginal;
        atualEhOriginal = true;
    }
});