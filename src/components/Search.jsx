import React from "react";

function Search({ handleSearch }) {
  return (
    <input
      type="search"
      placeholder="search monsters"
      onChange={handleSearch}
      className=""
    />
  );
}

export default Search;
