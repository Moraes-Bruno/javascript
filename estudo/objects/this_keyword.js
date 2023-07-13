//this: Referncia a um objeto em particular,o objeto depende do contexto imediato 

const car = {

    model:"RX7",
    color:"Maziora",
    year: 1993,

    drift: function(){
        console.log("Dejavu");
    },
    drive: function(){
        console.log(`You drive the ${this.model}`);
    }

}

const car2 = {

    model:"Isuzu Piaza turbo",
    color:"Red",
    year: 1980,

    drift: function(){
        console.log("Dejavu");
    },
    drive: function(){
        console.log(`You drive the ${this.model}`);
    }

}

car.drive();
car2.drive();
