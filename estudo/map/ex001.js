// .map(): Recebe um callback e aplica ele a todos os elementos de um array e retorna um novo array

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

const cubes = numbers.map(cube);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

function display(element) {
  console.log(element);
}

cubes.forEach(display);
