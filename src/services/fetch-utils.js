export async function getPokemon(filter) {
  const rawData = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${filter}`);

  const data = await rawData.json();

  return data;
}