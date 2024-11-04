/*
A sintaxe do parâmetro rest permite que uma função aceite um número indefinido de argumentos como uma matriz, 
fornecendo uma maneira de representar funções variádicas em JavaScript.
 */
const food1 = "pizza";
const food2 = "Lasagna";
const food3 = "Hot Dog Paulista";
const food4 = "Sushi de Salsicha";
const food5 = "Miojo";

function openFridge(...foods) {
  console.log(foods);
}

function getFood(...foods) {
  return foods;
}

openFridge(food1, food2, food3, food4, food5);

const almoco = getFood(food1, food2, food3, food4, food5);
console.log(almoco);
