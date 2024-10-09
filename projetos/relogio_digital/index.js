function atualizarRelogio() {
  const horaAtual = new Date();
  const horas = horaAtual.getHours().toString().padStart(2, 0);
  const minutos = horaAtual.getMinutes().toString().padStart(2, 0);
  const segundos = horaAtual.getSeconds().toString().padStart(2, 0);
  const horaString = `${horas}:${minutos}:${segundos}`;
  document.getElementById("relogio").textContent = horaString;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
