import NavBar from '../Components/NavBar.jsx';
import MovieList from '../Components/MovieList/MovieList';

export default function WatchList({ watchList }) {
  return (
    <div className="app-container">
      <NavBar linkTo="/" linkText="Search" />
      <MovieList
        dataToDisplay={watchList}
        // setWatchList={setWatchList}
        // watchList={watchList}
      />
    </div>
  );
}
