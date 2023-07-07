//array.foreach(): Executa a função callback provida para cada elemento do array

let cars = ["mazda", "nissan", "honda", "subaru"];
cars.forEach(capitalize);
cars.forEach(print);

function capitalize(element, index, array) {

    array[index] = element[0].toUpperCase() + element.substring(1);

}

function print(element) {

    console.log(element);

}