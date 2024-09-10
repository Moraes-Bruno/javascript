const numero = document.getElementById("numero");
const submit = document.getElementById("submit");
const resposta = document.getElementById("resposta");
const tentativa = document.getElementById("tentativas");
const minNum = 1;
const maxNum = 50;
let qtdTentativa  = 0;
let aleatorio;

submit.onclick = gerarAleatorio;

function gerarAleatorio() {
  aleatorio = (Math.random() * (maxNum - minNum)).toFixed(0);
    
  if (numero.value == aleatorio) {
    resposta.innerText = "Parabens Voce Acertou";
    qtdTentativa = 0;
  } else {
    qtdTentativa++;
    tentativa.innerText = `Tentativas: ${qtdTentativa}`;
    resposta.innerText = `Voce errou! A resposta é ${aleatorio} e voce digitou ${numero.value}`;
  }
}
