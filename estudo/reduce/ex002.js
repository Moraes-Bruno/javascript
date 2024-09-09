const grades = [75, 50, 90, 80, 65, 95];

const maxScore = grades.reduce(getMax);

const  minScore = grades.reduce(getMIn);

function getMax(accumulator,element){
    return Math.max(accumulator,element)
}

function getMIn(accumulator,element){
    return Math.min(accumulator,element)
}

console.log(minScore);
console.log("------");
console.log(maxScore);