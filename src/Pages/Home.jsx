/* eslint-disable react/prop-types */
import NavBar from '../Components/NavBar';
import MovieList from '../Components/MovieList/MovieList';
import SearchBar from '../Components/SearchBar';
// eslint-disable-next-line react/prop-types
export default function Home({
  dataToDisplay,
  setSearchQuery,
  setWatchList,
  watchList,
}) {
  return (
    <div className="app-container">
      <NavBar linkTo="watchList" linkText="WatchList" />
      <SearchBar setSearchQuery={setSearchQuery} />
      <MovieList
        dataToDisplay={dataToDisplay}
        setWatchList={setWatchList}
        watchList={watchList}
      />
    </div>
  );
}
