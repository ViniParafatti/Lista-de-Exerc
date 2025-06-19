/*
// Exercício 5: Calcular média de 4 notas
function calcularMedia() {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);
  const n4 = parseFloat(document.getElementById("nota4").value);

  const media = ((n1 + n2 + n3 + n4) / 4).toFixed(2);
  const res = media >= 6 ? "Aprovado" : "Reprovado";
  document.getElementById("resMedia").innerText = `Média: ${media} - ${res}`;
}
*/

// Exercício 10: Validação do formulário de cadastro
document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const res = document.getElementById("resCadastro");
  
    if (!nome || !email || !telefone || !senha) {
      res.innerText = "Por favor, preencha todos os campos.";
      res.style.color = "red";
    } else {
      res.innerText = "Cadastro realizado com sucesso!";
      res.style.color = "green";
    }
  });
  