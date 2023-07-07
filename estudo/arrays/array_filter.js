//array.filter(): cria um novo array com os elemento que passaram na condição provida pela função

// Definição do array de idades
const ages = [18, 16, 21, 17, 19, 90];

// Filtrar as idades que são de adultos
const adults = ages.filter(age => age >= 18);

// Filtrar as idades que são de menores de idade
const underAge = ages.filter(age => age < 18);

// Imprimir os adultos no console
adults.forEach(adult => console.log(adult));

// Imprimir uma linha separadora no console
console.log("-----------------------");

// Imprimir os menores de idade no console
underAge.forEach(element => console.log(element));

