//Rest parameters: Representas um numero indefinido de parametros
//Ele ira agrupar os parametros em um array

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b));
console.log(sum(a, b, c));
console.log(sum(a, b, c, d));
console.log(sum(a, b, c, d, e));

function sum(...numbers) {

    let total = 0

    for (let number of numbers) {
        total += number;
    }

    return total;

}