class Car {

    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

}

const car1 = new Car("RX7", 1993, "Sunburst Yellow");
const car2 = new Car("Skyline GT-R", 1999, "Midnight Purple");
const car3 = new Car("Supra", 1999, "Red");

changeColor(car2,"Bayside Blue");
displayInfo(car2);

function displayInfo(car) {

    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Color ${car.color}`);

}

function changeColor(car,color){

    car.color = color;

}