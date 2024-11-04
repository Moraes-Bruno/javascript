class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const Person1 = new Person(
  "Reimu Hakurei",
  22,
  "some street",
  "Gensokyo",
  "Japan"
);

const Person2 = new Person(
  "Marisa Kirisame",
  21,
  "some street",
  "Gensokyo",
  "Japan"
);

const person3 = new Person(
  "Sumireko Usami",
  18,
  "some Street",
  "Tokyo",
  "Japan"
);

console.log(person3.name);
console.log(person3.address.city);
