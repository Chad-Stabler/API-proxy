import BusinessList from './BusinessList';
import { useState, useEffect } from 'react';
import { getYelp } from './services/fetch-utils';

export default function YelpSearch() {
  const [yelp, setYelp] = useState([]);
  const [query, setQuery] = useState('Portland');

  useEffect(() => {
    fetchYelp();
  }, []);

  async function fetchYelp() {
    const data = await getYelp(query);

    setYelp(data.businesses);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetchYelp();

    setQuery('');
  }

  return (<div className='yelp-search'>
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={e => setQuery(e.target.value)}/>
      <button>Search this area</button>
    </form>
    <BusinessList businesses={yelp} />
  </div>);
}