import React from "react";
import "./SearchBox.css";

const Search = ({ handleSearch, placeholder }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleSearch}
      className="search-box"
    />
  );
};

export default Search;
