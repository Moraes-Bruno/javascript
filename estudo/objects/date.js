//date object: Utilizado para trabalhar com data e hora

//let date = new Date();
let date = new Date(2023,0,1,2,3,4,5);

let year = date.getFullYear()

date = date.toLocaleString();
console.log(year);
console.log(date);