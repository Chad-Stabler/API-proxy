export default function Spinner({ isLoading }) {
  return (isLoading ? <div className="spinner">loading</div> : <></>);
}