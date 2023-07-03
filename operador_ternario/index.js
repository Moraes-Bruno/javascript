let age = checkAge(17);
console.log(age)

function checkAge(age){

    return age >=18 ? true : false;

}

checkWinner(true);

function checkWinner(win){
    win ? console.log("You win") : console.log("You Lose");
}