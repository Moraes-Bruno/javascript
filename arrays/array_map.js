//array.map: Executa a função callback provida para cada elemento do array e cria um novo array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print);
console.log("-----------------");
cubes.forEach(print);

function square(numbers) {

    return Math.pow(numbers, 2);

}

function cube(numbers) {

    return Math.pow(numbers, 3);

}

function print(element) {

    console.log(element);

}