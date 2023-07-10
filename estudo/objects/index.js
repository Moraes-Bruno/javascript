//Object: Um grupo de Atributos e metodos.
//Atributos = Caracteristcias de um objeto(o que um objeto tem).
//Metodos:O que um objeto faz.

const car = {

    model:"RX7",
    color:"Maziora",
    year: 1993,

    drift: function(){
        console.log("Dejavu");
    },
    drive: function(){
        console.log("Y0u drive the car");
    }

}

console.log(car.model);

car.drift();