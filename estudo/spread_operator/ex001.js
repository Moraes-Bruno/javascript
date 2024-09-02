let numbers = [1,2,3,4,5,6,7,8,9];

let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(min);
console.log(max);

console.log("-------------------------------");

let userName = "John Doe";
let letters = [...userName].join("-");

console.log(letters);

console.log("-------------------------------");

let fruits = ["apple","Orange","Banana"];
let newFruits = [...fruits];

console.log(newFruits);

console.log("-------------------------------");

let vegetables = ["carrots","celery","potatoes"];

let foods = [...fruits,...vegetables,"eggs","Milk"];

console.log(foods.sort());