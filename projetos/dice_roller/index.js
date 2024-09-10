function rolarDado() {
  const qtdDados = document.getElementById("qtdDados").value;
  const resultaDoDado = document.getElementById("resultaDoDado");
  const dadoImg = document.getElementById("dadoImg");

  const valores = [];
  const imgs = [];

  for (let i = 0; i < qtdDados; i++) {
    const valor = Math.floor(Math.random() * 6) + 1;
    valores.push(valor)
    imgs.push(`<img src="img/${valor}.png">`)
  }

  resultaDoDado.textContent = `Dado: ${valores.join(', ')}`
  dadoImg.innerHTML = imgs.join('');
  
}
