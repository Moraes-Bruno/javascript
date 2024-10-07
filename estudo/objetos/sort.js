//sort(): Metodo usado para organizar elementos de um array em ordem lexicografica

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 22, 13, 10, 3, 4];

fruits.sort();
numbers.sort( (a,b)=> b - a);

console.log(fruits);
console.log(numbers);
