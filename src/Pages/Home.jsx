import NavBar from '../Components/NavBar';
import MovieList from '../Components/MovieList/MovieList';

// eslint-disable-next-line react/prop-types
export default function Home({ dataToDisplay }) {
  return (
    <div className="app-container">
      <NavBar linkTo="watchList" linkText="WatchList" />
      <MovieList dataToDisplay={dataToDisplay} />
    </div>
  );
}
