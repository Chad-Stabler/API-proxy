export async function getPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/poke?pokeQuery=${filter}`);

  const data = await rawData.json();

  return data;
}

export async function getYelp(filter) {
  const rawData = await fetch(`/.netlify/functions/yelp?yelpQuery=${filter}`);

  const data = await rawData.json();

  return data;
}