// closure = uma função definida dentro de outra função
// A função interna possui acesso ao escopo e as variaveis da função externa

function outer() {
  let msg = "hello";
  function inner() {
    console.log(msg);
  }

  inner();
}

outer();
