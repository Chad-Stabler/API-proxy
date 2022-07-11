import BusinessList from './BusinessList';
import { useState, useEffect } from 'react';
import { getYelp } from './services/fetch-utils';
import Spinner from './Spinner';

export default function YelpSearch() {
  const [yelp, setYelp] = useState([]);
  const [query, setQuery] = useState('Portland');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchYelp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchYelp() {
    setIsLoading(true);
    const data = await getYelp(query);

    setYelp(data.businesses);
    setIsLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetchYelp();

    setQuery('');
  }

  return (<div className='yelp-search'>
    {
      isLoading ? <Spinner isLoading={isLoading} /> : <><form onSubmit={handleSubmit}>
        <input value={query} onChange={e => setQuery(e.target.value)}/>
        <button>Search this area</button>
      </form>
      <BusinessList businesses={yelp} />
      </>
    }
  </div>);
}