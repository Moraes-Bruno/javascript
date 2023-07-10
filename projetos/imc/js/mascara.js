// Obtém o campo de entrada
const input = document.getElementById("altura");

// Adiciona um ouvinte de evento para capturar a entrada do usuário
input.addEventListener('input', function(event) {
  // Obtém o valor atual do campo de entrada
  let valor = event.target.value;

  // Remove todos os pontos existentes do valor
  valor = valor.replace(/\./g, '');

  // Adiciona um ponto após o primeiro caractere
  if (valor.length > 0) {
    valor = valor.charAt(0) + '.' + valor.slice(1);
  }

  // Define o valor formatado de volta no campo de entrada
  event.target.value = valor;
  
});
