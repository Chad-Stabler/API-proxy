import { useState, useEffect } from 'react';
import PokeList from './PokeList';
import { getPokemon } from './services/fetch-utils';

export default function PokeSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    setQuery('');
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    const data = await getPokemon(query);

    setPokemon(data.results);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetchPokemon();

    setQuery('');
  }

  return (
    <div>
      <div className="poke-search">
        <form onSubmit={handleSubmit}>
          <input value={query} onChange={e => setQuery(e.target.value)} />
          <button>Look for your poké</button>
        </form>
        <PokeList pokemon={pokemon}/>
      </div>
    </div>
  );
}
