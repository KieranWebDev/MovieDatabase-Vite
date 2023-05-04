import searchIcon from '../assets/imagesAndIcons/search-icon.png';
// import { useState } from 'react';

export default function SearchBar({ setSearchQuery }) {
  let searchValue = '';

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchValue);
  }
  return (
    <div className="search-bar">
      <form>
        <img src={searchIcon} alt="search-icon" className="search-icon" />
        <input
          onChange={(e) => (searchValue = e.target.value)}
          type="text"
          placeholder="Search for a movie"
          name="searchQuery"
        />
        <button onClick={handleSubmit} id="search-button">
          Search
        </button>
      </form>
    </div>
  );
}
