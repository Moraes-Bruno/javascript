/* Nested Function:Uma função dentro de outra função,a função externa consegue acessar a função interna,
mas a função interna esta "escondida" do exterior da função externa a mesma */

let username = "john";
let inbox = 0;

function login() {

    function displayUsername() {
        console.log(username);
    }

    function inboxmsg() {
        console.log("Voce tem " + inbox + " Mensagem(s)")
    }

    displayUsername();
    inboxmsg();

}

login();