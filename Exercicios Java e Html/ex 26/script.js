const minhaImagem = document.getElementById('minhaImagem');

const srcOriginal = 'imagem_original.jpg'; 
const srcNova = 'imagem_nova.jpg';       


minhaImagem.addEventListener('mouseover', function() {
    this.src = srcNova;
    this.alt = 'Imagem Nova';
});


minhaImagem.addEventListener('mouseout', function() {
    this.src = srcOriginal;
    this.alt = 'Imagem Original';
});