//destructuring = Extraia valores de arrays e objetos

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//---------------------------------

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors[0]);
console.log(colors[4]);

//---------------------------------

const [firstC, secondC, thirdC, ...extraC] = colors;

console.log(firstC);
console.log(secondC);
console.log(thirdC);
console.log(extraC);

//--------------------------------

const person1 = {
  fName: "Jonh",
  lName: "Doe",
  age: 19,
  job: "unknown",
};

const person2 = {
  fName: "Jane",
  lName: "Doe",
  age: 20,
};

const { fName, lName, age, job="unemployed" } = person1;

console.log(fName);
