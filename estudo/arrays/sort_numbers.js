let grades = [5, 8, 10, 8, 3, 7];
grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y) {

    return y - x;

}

function ascendingSort(x, y) {

    return x - y;

}

function print(element) {

    console.log(element);

}
