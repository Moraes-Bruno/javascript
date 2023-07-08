const ANSWEAR = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("botao").onclick = function () {

    let guess = document.getElementById("num").value;
    guesses++;

    if (guess == ANSWEAR) {
        window.alert(`${ANSWEAR} is the number.It took you ${guesses} guesses`);
    } else if (guess < ANSWEAR) {
        window.alert("Too small")
    } else {
        window.alert("Too large")
    }



}

