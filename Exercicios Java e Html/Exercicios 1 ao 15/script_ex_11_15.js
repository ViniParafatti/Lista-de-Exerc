/*
// Exercício 12: Mudar cor do <h1>
function mudarCor() {
  const cores = ["red", "blue", "green", "purple", "orange"];
  const indice = Math.floor(Math.random() * cores.length);
  document.getElementById("titulo").style.color = cores[indice];
}
*/

/*
// Exercício 13: Idade do cachorro
function idadeCachorro() {
  const idade = parseInt(document.getElementById("idadeHumano").value);
  const resultado = idade * 7;
  document.getElementById("resCachorro").innerText = `Idade do cachorro: ${resultado} anos`;
}
*/

/*
// Exercício 14: Mini calculadora
function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operacao").value;
  let resultado;

  if (op === "raiz") {
    resultado = Math.sqrt(n1).toFixed(2);
  } else {
    resultado = eval(`${n1} ${op} ${n2}`).toFixed(2);
  }

  document.getElementById("resCalc").innerText = `Resultado: ${resultado}`;
}
*/

// Exercício 15: Múltipla escolha
function verificarResposta() {
    const opcoes = document.getElementsByName("resposta");
    let selecionado = "";
  
    for (let opcao of opcoes) {
      if (opcao.checked) {
        selecionado = opcao.value;
        break;
      }
    }
  
    const resultado = document.getElementById("resQuiz");
    if (selecionado === "Brasília") {
      resultado.innerText = "✅ Resposta correta!";
      resultado.style.color = "green";
    } else if (selecionado) {
      resultado.innerText = "❌ Resposta incorreta!";
      resultado.style.color = "red";
    } else {
      resultado.innerText = "Por favor, selecione uma opção.";
      resultado.style.color = "orange";
    }
  }
  