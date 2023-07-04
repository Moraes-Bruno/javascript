document.getElementById("button").onclick = function () {

    let temp;

    if (document.getElementById("cel").checked) {

        temp = Number(document.getElementById("temp").value);
        temp = toCelsius(temp);

        document.getElementById("result").innerHTML = "A temperatura em Celsius é: " + temp + " Graus Celcius"

    } else if (document.getElementById("fh").checked) {

        temp = Number(document.getElementById("temp").value);
        temp = toFh(temp);

        document.getElementById("result").innerHTML = "A Temperatura em Fh é " + temp

    } else {
        document.getElementById("result").innerHTML = "Selecione uma opção Valida"
    }
}

function toCelsius(temp) {

    let conversion = (temp - 32) * (5 / 9)
    return parseFloat(conversion.toFixed(2));

}

function toFh(temp) {

    let conversion = (temp * 9 / 5) + 32
    return parseFloat(conversion.toFixed(2))
}