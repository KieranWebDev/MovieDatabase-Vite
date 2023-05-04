import addIcon from '../../assets/imagesAndIcons/add-icon.png';
import subtractIcon from '../../assets/imagesAndIcons/subtract-icon.png';

// Genre,
// Plot,
// Poster,
// Runtime,
// Title,
// imdbID,
// imdbRating,

export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt="" />
      </div>

      <div className="movie-info-container">
        <div className="title-and-rating">
          <h2>{movie.Title}</h2> <span>⭐ {movie.imdbRating}</span>
        </div>
        <div className="movie-info">
          <span>{movie.Runtime}</span>
          <span>{movie.Genre}</span>
          <button id="add-to-watchlist" className="add-to-watchlist">
            <img src={addIcon} alt="add-icon" />
            Watchlist
          </button>
          <button
            id="remove-from-watchlist"
            className="remove-from-watchlist hidden"
          >
            <img src={subtractIcon} alt="add-icon" />
            Watchlist
          </button>
        </div>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}
