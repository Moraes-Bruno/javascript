//Sŧatic: Pertence a classe e não aos objetos

class Car{

    //Adicionando a palavra static faz com que esse atyributo pertença e class e não ao objeto
    static numberOfCars = 0;


    constructor(model){

        this.model = model;
        Car.numberOfCars += 1; 

    }

    static startRace(){

        console.log("3...2...1...GO!!!!!");

    }

}

const car1 = new Car("Chevette");
const car2 = new Car("Omega");
const car3 = new Car("Kadett");

console.log(Car.numberOfCars);

const car4 = new Car("Caravan");

console.log(Car.numberOfCars);

Car.startRace();