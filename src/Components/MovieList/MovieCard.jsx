/* eslint-disable react/prop-types */
import addIcon from '../../assets/imagesAndIcons/add-icon.png';
import subtractIcon from '../../assets/imagesAndIcons/subtract-icon.png';
import { useState } from 'react';

export default function MovieCard({ movie, setWatchList, watchList }) {
  const [isOnWatchList, setIsOnWatchList] = useState(movie.watchList);

  function addToWatchList() {
    setIsOnWatchList(!isOnWatchList);
    setWatchList([movie, ...watchList]);
    console.log(watchList);
  }
  function removeFromWatchList() {
    setIsOnWatchList(!isOnWatchList);
    setWatchList(watchList.filter((item) => item.Title !== movie.Title));
    console.log(watchList);
  }

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
          {!isOnWatchList && (
            <button onClick={addToWatchList} className="add-to-watchlist">
              <img src={addIcon} alt="add-icon" />
              Watch list
            </button>
          )}
          {isOnWatchList && (
            <button
              onClick={removeFromWatchList}
              id="remove-from-watchlist"
              className="remove-from-watchlist"
            >
              <img src={subtractIcon} alt="add-icon" />
              Remove
            </button>
          )}
        </div>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}
