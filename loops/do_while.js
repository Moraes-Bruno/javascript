let nome;

do{
    nome = window.prompt("Digite o seu nome completo");
}while(nome == "" || nome == null)

window.alert(nome);