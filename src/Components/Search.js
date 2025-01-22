import React, { useState } from "react";
import MainBody from "./MainBody";
const Search = () => {
  const [searchInput, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  return (
    <div className="search-container">
      {/* Search Input */}
      <input
        type="search"
        className="search-input"
        placeholder="Search for restaurant, item or more"
        value={searchInput}
        data-testid="search_input"
        onChange={(e) => {
          setSearchText(e.target.value);
          const data = filterData(setSearchText, allRestaurants);
          setFilteredRestaurants(data);
          // const data = filterData(searchInput, allRestaurants);
          // setFilteredRestaurants(data);
        }}
        onKeyDown={() => {
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurants(data);
        }}
      />
      <button
        className="search-btn"
        data-testid="search-btn"
        onClick={() => {
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurants(data);
        }}
        onKeyDown={() => {
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
