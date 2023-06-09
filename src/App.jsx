import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import WatchList from './Pages/WatchList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const apiKey = '10594f76';
    async function getGeneralFilmInfo() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}&type=movie`
      );
      const data = await response.json();
      const imdbIDarray = data.Search.map((movie) => movie.imdbID);
      return imdbIDarray;
    }

    async function getDetailedFilmInfo() {
      const ids = await getGeneralFilmInfo();
      console.log(ids);
      const neededMovieData = await Promise.all(
        ids.map(async (movieId) => {
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`
          );
          const data = await response.json();
          // console.log(data);
          const { Title, imdbRating, Runtime, Genre, Plot, Poster, imdbID } =
            data;
          const dataToDisplay = {
            Title,
            imdbRating,
            Runtime,
            Genre,
            Plot,
            Poster,
            imdbID,
            watchList: false,
          };
          return dataToDisplay;
        })
      );
      setDataToDisplay(neededMovieData);
    }
    getDetailedFilmInfo();
  }, [searchQuery]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dataToDisplay={dataToDisplay}
              setSearchQuery={setSearchQuery}
              setWatchList={setWatchList}
              watchList={watchList}
            />
          }
        />
        <Route
          path="watchList"
          element={
            <WatchList watchList={watchList} setWatchList={setWatchList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
