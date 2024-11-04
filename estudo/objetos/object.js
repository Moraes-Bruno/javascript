// Objeto: Coleção de metodos e/ou propriedades relacionados
//Pode representar objetos da vida real(pessoas,produtos,lugares)
//Proproedade = Variavel
//Metodo = Função

const person1 = {
  firstName: "Reimu",
  lastName: "Hakurei",
  age: 21,
  isEmployed: true,

  sayHello: function () {
    console.log("Hello");
  },
  eat: function(){
    console.log("Eating Mocchi");
  }
};

const person2 = {
  firstName: "Marisa",
  lastName: "Kirisame",
  age: 20,
  isEmployed: true,

  sayHello: function () {
    console.log("Hi");
  },

  eat: function(){
    console.log("Eating");
  }
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log("---------------------------");
console.log(person2.firstName);
console.log(person2.lastName);
console.log("---------------------------");

person1.sayHello();
person2.sayHello();
console.log("---------------------------");
person1.eat();
person2.eat();
