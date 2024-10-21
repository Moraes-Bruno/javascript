//Error: Um objeto que é criado para representar um problema que ocorre
//regularmente com input de usuario , estabelecimento de conexão , etc

try {
  console.log("hello");
} catch (e) {
  console.log("erro encontrado");
  console.error(e);
} finally {
  console.log("Encerrando conexão");
}

console.log("Fim do Programa");
