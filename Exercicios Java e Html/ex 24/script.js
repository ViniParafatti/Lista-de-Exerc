const meuBotao = document.getElementById('meuBotao');

let clicado = false; 

meuBotao.addEventListener('click', function() {
    if (!clicado) {
        this.textContent = 'Clicado!';
        this.style.backgroundColor = 'green';
        this.style.color = 'white'; 
        clicado = true;
    } else {
        this.textContent = 'Clique aqui';
        this.style.backgroundColor = 'lightgray';
        this.style.color = 'black';
        clicado = false;
    }
});