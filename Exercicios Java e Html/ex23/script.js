const quizForm = document.getElementById('quizForm');
const resultadoQuiz = document.getElementById('resultadoQuiz');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let pontuacao = 0;
    const respostaCorreta1 = "verdadeiro"; 
    const respostaCorreta2 = "falso";      
    
    const q1Radios = document.getElementsByName('questao1');
    let resposta1 = '';
    for (const radio of q1Radios) {
        if (radio.checked) {
            resposta1 = radio.value;
            break;
        }
    }

    const q2Radios = document.getElementsByName('questao2');
    let resposta2 = '';
    for (const radio of q2Radios) {
        if (radio.checked) {
            resposta2 = radio.value;
            break;
        }
    }

    if (resposta1 === respostaCorreta1) {
        pontuacao++;
    }
    if (resposta2 === respostaCorreta2) {
        pontuacao++;
    }

    resultadoQuiz.textContent = `Sua pontuação: ${pontuacao} de 2.`;
});