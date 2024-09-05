// Callback: Uma função que é passada como argumento para outra função
//comumente usada em operações assincronas

function hello(callback) {
  console.log("Hello");
  callback();
}

function leave(){
    console.log("Leave");
}

function goodBye() {
  console.log("Goodbye");
}

hello(leave);
