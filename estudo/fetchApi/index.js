async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const pokeImg = document.getElementById("pokemonSprite");

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("pokemon nao encontrado");
    }

    const data = await response.json();
    const pokeSprite = data.sprites.front_default;

    pokeImg.src = pokeSprite;
    pokeImg.style.display = "block";
  } catch (e) {
    console.error(e);
  }
}
