//this: Referencia ao objeto em que o THIS esta.

const person1 = {
  firstName: "Reimu",
  lastName: "Hakurei",
  favDrink: "Tea",

  sayHello: function () {
    console.log(`Hello i am ${this.firstName}`);
  },

  drink: function () {
    console.log(`${this.firstName} is drinking ${this.favDrink}`);
  },
};

const person2 = {
  firstName: "Marisa",
  lastName: "Kirisame",
  favDrink: "Tea",

  sayHello: function () {
    console.log(`Hello i am ${this.firstName}`);
  },

  drink: function () {
    console.log(`${this.firstName} is drinking ${this.favDrink}`);
  },
};

person1.sayHello();
person1.drink();
console.log("-------------------------------");
person2.drink();
