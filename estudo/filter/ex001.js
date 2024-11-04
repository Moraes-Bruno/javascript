// filter(): cria um novo array,filtrando elementos do array original

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 === 1;
}

console.log(oddNums);
console.log("-------------------");
console.log(evenNums);
