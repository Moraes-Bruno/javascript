// inheritance(herança): Permite que uma classe herde propriedades e metodos de um classe ja existente

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run(){
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "Fish";

  swin(){
    console.log(`This ${this.name} is swimming`);
  }
}

class Fox extends Animal {
  name = "Fox";

  sneak(){
    console.log(`This ${this.name} is sneaking`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const fox = new Fox();

//rabbit.alive = false;

console.log(fox.alive);

fox.eat();
fox.sleep();

fox.sneak();