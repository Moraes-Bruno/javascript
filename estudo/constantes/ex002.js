const radius = document.getElementById("radius");
const submit = document.getElementById("submit");
const resultado = document.getElementById("resultado");
const PI = 3.14159;
let circumference;

submit.addEventListener("click",checar)

function checar (){
    if (radius.value != ""){
        calculo()
    }else{
        window.alert("Digite um numero")
    }
}

function calculo() {
  circumference = 2 * PI * Number(radius.value);

  resultado.textContent = `A circumferencia é ${circumference.toFixed(2)}cm`;
}
