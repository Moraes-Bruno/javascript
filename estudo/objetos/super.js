//Super = keyword usada em uma classe para chamar um construtor ou acessar propriedade e metodos
//de uma superclasse
//this = este objeto
//super = superclasse

class Animal {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  move(speed) {
    console.log(
      `Este ${this.firstName} se move a uma velocidade de ${speed}KM/H`
    );
  }
}

class Rabbit extends Animal {
  constructor(firstName, age, runSpeed) {
    super(firstName, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`Este ${this.firstName} consegue correr`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(firstName, age, swinSpeed) {
    super(firstName, age);
    this.swinSpeed = swinSpeed;
  }

  swin() {
    console.log(`Este ${this.firstName} consegue nadar`);
    super.move(this.swinSpeed);
  }
}

class Hawk extends Animal {
  constructor(firstName, age, flySpeed) {
    super(firstName, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`Este ${this.firstName} consegue voar`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rabbit", 20, 50);
const fish = new Fish("fish", 2, 5);
const hawk = new Hawk("hawk", 3, 50);

rabbit.run();
console.log("---------------------------------------");
fish.swin();
console.log("---------------------------------------");
hawk.fly();
