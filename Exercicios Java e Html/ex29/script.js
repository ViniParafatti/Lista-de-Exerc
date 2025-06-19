const checkboxTermos = document.getElementById('checkboxTermos');
const btnEnviar = document.getElementById('btnEnviar');


checkboxTermos.addEventListener('change', function() {
    if (checkboxTermos.checked) {
        btnEnviar.style.display = 'block'; 
    } else {
        btnEnviar.style.display = 'none';
    }
});

btnEnviar.addEventListener('click', function() {
    alert('Formulário enviado com sucesso!');
});