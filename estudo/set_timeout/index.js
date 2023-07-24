//setTimeout(): Invoca uma função dps de um tempo (em milissegundos)
//É uma função assincrona


let item = "imaginaryMOney(crypto)";
let price = 420.69

function firstMsg(item, price) {
    alert(`Buy this ${item} for $${price}`);
}
function secondtMsg() {
    alert("Not a Scam");
}
function thirdMsg() {
    alert("Do it!!!!");
}

let timer1 = setTimeout(firstMsg, 3000, item, price);
let timer2 = setTimeout(secondtMsg, 6000);
let timer3 = setTimeout(thirdMsg, 9000);

document.getElementById("botao").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("thanks for buying")
}

