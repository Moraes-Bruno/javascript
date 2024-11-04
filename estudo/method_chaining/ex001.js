//Method chainig: Chamar um metodo depois do outro

let username = window.prompt("Digite o seu nome");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

window.alert(username);