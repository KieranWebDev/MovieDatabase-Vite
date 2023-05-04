import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import WatchList from './Pages/WatchList';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watchList" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;
