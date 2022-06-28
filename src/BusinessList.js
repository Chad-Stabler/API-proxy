export default function BusinessList({ businesses }) {
  return (<div>
    {
      businesses.map((business, i) => <div className="business" key={business.name + i}>
        <p>{business.name}</p>
        <img src={business.image_url}/>
        <p>{business.is_closed ? 'open' : 'closed'}</p>
      </div>)
    }
  </div>);
}