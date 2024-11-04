//setTimeout(() => console.log("Hello"), 2000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));

const cubes = numbers.map((element) => Math.pow(element, 3));

const evenNumbers = numbers.filter((element) => element % 2 === 0);

const oddNumbers = numbers.filter((element) => element % 2 === 1);

const total = numbers.reduce((accumulator, element) => accumulator + element);

const maxValue = numbers.reduce((accumulator, element) =>
  Math.max(accumulator, element)
);

const minValue = numbers.reduce((accumulator, element) =>
  Math.min(accumulator, element)
);

console.log(`Numeros: ${numbers}`);
console.log("-------------------------------------------");
console.log(`Elevado ao quadrado: ${squares}`);
console.log("-------------------------------------------");
console.log(`Elevado ao cubo: ${cubes}`);
console.log("-------------------------------------------");
console.log(`Numeros Pares: ${evenNumbers}`);
console.log("-------------------------------------------");
console.log(`Numeros Impares: ${oddNumbers}`);
console.log("-------------------------------------------");
console.log(`Total: ${total}`);
console.log("-------------------------------------------");
console.log(`Maximo: ${maxValue}`);
console.log("-------------------------------------------");
console.log(`Minimo: ${minValue}`);
