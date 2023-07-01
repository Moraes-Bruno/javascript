let nome = "";

while(nome == "" || nome == null){
    nome = window.prompt("Digite o seu nome");
}

window.alert("Olá, "+nome)