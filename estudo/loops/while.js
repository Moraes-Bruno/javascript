let username = "";

while(username === "" || username === null){
    username = window.prompt("Digite o seu nome");
}

window.alert(`Ola ${username}`);