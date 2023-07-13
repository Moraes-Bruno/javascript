//super: Usado comumente para invocar um metodo construtor da classe pai


class Animal {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {

        super(name, age);
        this.speed = runSpeed;

    }

}

class Fish extends Animal {

    constructor(name, age, swinSpeed) {

        super(name, age);
        this.speed = swinSpeed;

    }

}

class Hawk extends Animal {

    constructor(name, age, flySpeed) {

        super(name, age);
        this.speed = flySpeed;

    }

}

const rabbit = new Rabbit("perna Longa", 6, 10);
const fish = new Fish("nemo", 1, 30);
const hawk = new Hawk("Zeca Urubu", 69, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.speed);