function calculoImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function tabelaImc(imc) {

    switch (true) {
        case (imc <= 18.5): document.getElementById("p1").innerHTML = "Você esta abaixo do peso";
            break
        case (imc >= 18.6 && imc <= 24.9): document.getElementById("p1").innerHTML = "Peso Ideal(Parabens)";
            break
        case (imc >= 25 && imc <= 29.9): document.getElementById("p1").innerHTML = "Você esta levemente acima do peso";
            break
        case (imc >= 30 && imc <= 34.9): document.getElementById("p1").innerHTML = "Obesidade Grau I";
            break
        case (imc >= 35 && imc <= 39.9): document.getElementById("p1").innerHTML = "Obesidade Grau II";
            break
        case (imc >= 40): document.getElementById("p1").innerHTML = "Obesidade Grau III";
            break
        default: document.getElementById("p1").innerHTML = "Peso e/ou altura digitado invalido(s)";
    }

}

document.getElementById("botao").onclick = function () {

    let peso, altura, imc

    peso = Number(document.getElementById("peso").value);
    altura = Number(document.getElementById("altura").value);

    imc = calculoImc(peso, altura);
    tabelaImc(imc);

}