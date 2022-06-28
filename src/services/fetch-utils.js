export async function getPokemon(filter) {
  const rawData = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${filter}`);

  const data = await rawData.json();

  return data;
}

export async function getYelp(filter) {
  const rawData = await fetch(`https://api.yelp.com/v3/businesses/search?location=${filter}`);

  const data = await rawData.json();

  return data;
}