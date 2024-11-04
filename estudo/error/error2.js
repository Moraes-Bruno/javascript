try {
  const dividendo = Number(window.prompt("Insira um dividendo: "));
  const divisor = Number(window.prompt("Insira um divisor: "));

  if (divisor === 0) {
    throw new Error("Um numero nao pode ser divido por zero");
  }

  if (dividendo || divisor != Number) {
    throw new Error("Caracteres nao são permitidos");
  }

  const result = dividendo / divisor;

  window.alert(`O resultado é ${result}`);
} catch (e) {
  console.error(e);
} finally {
  console.log("fim do programa");
}
