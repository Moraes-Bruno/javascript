const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
const paragrafo = document.getElementById("paragrafo");
let contador = 0;

//chamando as funcoes quando o usuario clica em um dos botoes
increment.addEventListener("click", incrementar);
reset.addEventListener("click", reiniciar);
decrement.addEventListener("click", decrementar);

function incrementar() {
  contador++;
  paragrafo.textContent = contador;
}

function reiniciar() {
  contador = 0;
  paragrafo.textContent = contador;
}

function decrementar() {
  if (contador <= 0) {
    contador = 0;
    paragrafo.textContent = contador;
  } else {
    contador--;
    paragrafo.textContent = contador;
  }
}
