let numbers = [1, 2, 3, 4, 5];

function display(element) {
  console.log(element);
}

function double(element, index, array) {
  array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

numbers.forEach(triple);
numbers.forEach(display);

