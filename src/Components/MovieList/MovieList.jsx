/* eslint-disable react/prop-types */
import MovieCard from './MovieCard';

// eslint-disable-next-line react/prop-types
export default function MovieList({ dataToDisplay }) {
  console.log(dataToDisplay);
  return (
    <main className="search-results">
      <div className="search-results-container content-width ">
        {dataToDisplay.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </main>
  );
}
