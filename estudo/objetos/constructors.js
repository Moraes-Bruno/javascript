//constructor: Metodo Especial para definir metodos e propriedades de um objeto

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);

  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}

const car1 = new Car("Mazda", "RX-7", "1993", "Sunburst Yellow");
const car2 = new Car("Subaru", "Impreza", "2004", "Blue mica");
const car3 = new Car("Honda", "NSX", "1995", "championship White");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log("------------------------------");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log("------------------------------");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
console.log("------------------------------");
car1.drive();
console.log("------------------------------");
car2.drive();
console.log("------------------------------");
car3.drive();
