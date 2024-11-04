let fruits = ["apple", "banana", "Avocado", "orange", "Coconut"];

function display(element) {
  console.log(element);
}

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function captalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(captalize);
fruits.forEach(display);
