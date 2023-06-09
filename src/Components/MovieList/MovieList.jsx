/* eslint-disable react/prop-types */
import MovieCard from './MovieCard';

// eslint-disable-next-line react/prop-types
export default function MovieList({ dataToDisplay, setWatchList, watchList }) {
  return (
    <main className="search-results">
      <div className="search-results-container content-width ">
        {dataToDisplay.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            setWatchList={setWatchList}
            watchList={watchList}
          />
        ))}
      </div>
    </main>
  );
}
