let loggedIn = false;
let username;
let passwd;

while(!loggedIn){
   username = window.prompt("Digite o seu nome de usuario");
   passwd = window.prompt("Digite sua senha")

   if(username === "admin" && passwd === "1234"){
    loggedIn = true;
   }else{
    window.alert("Usuario ou senha incorretos")
   }
}

window.alert(`bem vindo ${username}`);