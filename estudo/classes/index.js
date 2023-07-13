//Classes: São como uma planta para criar objetos,
//define quais atributos e metodos o mesmo deve termutiliza-se de motdos contrutores para propriedades unicas
//Atributos: Caracteristicas de um Objeto
//Metodos: O que aquele objeto faz

class Player {

    score = 0;

    pause() {
        console.log("You paused the game");
    }

    exit() {
        console.log("You exited the game");
    }

}

const player1 = new Player();//Cria um objeto da classes Player

player1.score += 1;

console.log(player1.score);

player1.pause();
player1.exit();


