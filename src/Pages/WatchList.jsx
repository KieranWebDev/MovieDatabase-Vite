import NavBar from '../Components/NavBar.jsx';
import MovieList from '../Components/MovieList/MovieList';

export default function WatchList({ watchList, setWatchList }) {
  return (
    <div className="app-container">
      <NavBar linkTo="/" linkText="Search" />
      {watchList.length === 0 && <h1>Your watchlist is empty</h1>}
      <MovieList
        dataToDisplay={watchList}
        setWatchList={setWatchList}
        watchList={watchList}
      />
    </div>
  );
}
