class Car {

    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log(`You drive the ${this.model}`);
    }

}

function startRace(car) {

    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Color ${car.color}`);
    car.drive();
    console.log("----------------------")

}

const car1 = new Car("RX7", 1993, "Sunburst Yellow");
const car2 = new Car("Skyline GT-R", 1999, "Midnight Purple");
const car3 = new Car("Supra", 1999, "Red");

const cars = [car1, car2, car3];

//cars[0].drive();

cars.forEach(startRace);