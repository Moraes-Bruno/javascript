const display = document.getElementById("display");
const displayTempo = document.getElementById("displayTempo");
let timer = null;
let tempoInicio = 0;
let tempoDecorrido = 0;
let rodando = false;
let tempos = [];

function iniciar() {
  if (!rodando) {
    tempoInicio = Date.now() - tempoDecorrido;
    timer = setInterval(update, 10);
    rodando = true;
  }
}

function pausar() {
  if (rodando) {
    clearInterval(timer);
    tempoDecorrido = Date.now() - tempoInicio;
    rodando = false;
  }
}

function reiniciar() {
  clearInterval(timer);
  tempoInicio = 0;
  tempoDecorrido = 0;
  rodando = false;
  display.textContent = "00:00:00:00";
}

function checkpoint() {
  const horaAtual = Date.now();
  decorrido = horaAtual - tempoInicio;

  const [horas, minutos, segundos, milissegundos] = [
    (decorrido / 3600000) | 0,
    ((decorrido % 3600000) / 60000) | 0,
    ((decorrido % 60000) / 1000) | 0,
    decorrido % 1000,
  ];

  const horarioString = `${horas}:${minutos}:${segundos}:${milissegundos}`;

  tempos.push(horarioString);
  const li = document.createElement("li");
  li.innerText = horarioString;
  document.getElementById("displayTempo").appendChild(li);
}

function resetCheckpoint() {
    tempos = []; 
    document.getElementById("displayTempo").innerHTML = ""; 
  }
function update() {
  const horaAtual = Date.now();
  tempoDecorrido = horaAtual - tempoInicio;

  let horas = String(Math.floor(tempoDecorrido / (1000 * 60 * 60))).padStart(
    2,
    "0"
  );
  let minutos = String(
    Math.floor((tempoDecorrido / (1000 * 60)) % 60)
  ).padStart(2, "0");
  let segundos = String(Math.floor((tempoDecorrido / 1000) % 60)).padStart(
    2,
    "0"
  );
  let milissegundos = String(Math.floor((tempoDecorrido % 1000) / 10)).padStart(
    2,
    "0"
  );

  display.textContent = `${horas}:${minutos}:${segundos}:${milissegundos}`;
}
