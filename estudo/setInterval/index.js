//setInterval(): Invoca uma função repetidamente dps de um tempo em milisegundos

let count = 0;

let max = window.prompt("Count up to what #?");
max = Number(max);

function countUp() {

    count++;
    console.log(count);

    if (count == max) {
        clearInterval(timer);
    }

}

const timer = setInterval(countUp, 1000);
