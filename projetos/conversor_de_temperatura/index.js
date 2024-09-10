const temp = document.getElementById("temp");
const celsius = document.getElementById("celsius");
const fh = document.getElementById("fh");
const submit = document.getElementById("submit");
const resposta = document.getElementById("resposta");
let value;

function converter() {
  if (celsius.checked) {
    value = Number(temp.value);
    value = ((value * 9) / 5 + 32).toFixed(1);

    resposta.textContent = `${value}F`;
  } else if (fh.checked) {
    value = Number(temp.value);
    value = (((value - 32) * 5) / 9).toFixed(1);

    resposta.textContent = `${value}C`;
  } else {
    resposta.textContent = "Selecione Uma Opção Valida";
  }
}
