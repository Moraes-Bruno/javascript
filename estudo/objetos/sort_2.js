const people = [
  { name: "Reimu Hakurei", age: 22, gpa: 3.0 },
  { name: "Marisa Kirisame", age: 21, gpa: 3.2 },
  { name: "Sakuya Izayoi", age: 25, gpa: 3.1 },
  { name: "Patchouli Knowledge", age: 24, gpa: 4.0 },
];

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);
