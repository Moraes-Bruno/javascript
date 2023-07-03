let user = "John";
let items = 4;
let total = 100.75;

console.log(`Olá ${user}`);
console.log(`Você possui ${items} items no carrinho`);
console.log(`Total a pagar R$${total}`);

let text = 
`Olá ${user} <br>
Você possui ${items} items no carrinho <br>
Total a pagar R$${total} <br>`;

document.getElementById("label").innerHTML = text;