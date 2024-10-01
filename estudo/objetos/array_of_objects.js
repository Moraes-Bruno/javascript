const fruits = [
  { name: "apple", color: "Red", calories: 95 },
  { name: "banana", color: "yellow", calories: 69 },
  { name: "avocado", color: "green", calories: 80 },
  { name: "orange", color: "orange", calories: 88 },
  { name: "grape", color: "purple", calories: 20 },
];

console.log(fruits[1].name);

fruits.push({ name: "coconut", color: "white", calories: 111 });

console.log(fruits[5].name);

fruits.splice(1, 2);

console.log(fruits);

fruits.forEach((fruit) => console.log(fruit.name));
