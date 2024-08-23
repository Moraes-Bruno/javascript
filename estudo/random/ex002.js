const btn = document.getElementById("button");
const result = document.getElementById("result");

btn.onclick = gerarNumero;

function gerarNumero(){
    result.textContent = Math.floor(Math.random() * 100);
}