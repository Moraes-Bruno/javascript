let captalize = function (texto) {
  let palavras = texto.split(" ");

  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
  }

  let frase = palavras.join(" ");

  return console.log(frase);
};

captalize("how can mirrors be real if our eyes aren't real");
