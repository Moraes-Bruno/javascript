const fruits = [
  { name: "apple", color: "Red", calories: 95 },
  { name: "banana", color: "yellow", calories: 69 },
  { name: "avocado", color: "green", calories: 80 },
  { name: "orange", color: "orange", calories: 88 },
  { name: "grape", color: "purple", calories: 20 },
  { name: "pineapple", color: "yellow", calories: 42 },
];

const fruitNames = fruits.map((fruit) => fruit.name);

console.log(fruitNames);

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");

console.log(yellowFruits);

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

console.log(maxFruit);
