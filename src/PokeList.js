export default function PokeList({ pokemon }) {
  return (<div>
    {
      pokemon.map((poke, i) => <div className="poke" key={poke.pokemon + i}>
        <p>{poke.pokemon}</p>
        <img src={poke.url_image} />
        <p>HP: {poke.hp}</p>
      </div>)
    }
  </div>);
}