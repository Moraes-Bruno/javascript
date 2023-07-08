let a, b, c;

document.getElementById("botao").onclick = function () {

    a = Number(document.getElementById("sideA").value);
    b = Number(document.getElementById("sideB").value);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    let cform = parseFloat(c.toFixed(2));

    document.getElementById("p1").innerHTML = "O valor da Hipotenusa é: " + cform;

}