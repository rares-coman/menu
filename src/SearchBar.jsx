import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        name="searchbar"
        style={{ borderRadius: "10px", padding: "0.5rem 1.5rem" ,borderColor:"#fff",backgroundColor:"#f3f3f3",color:'black'}}

      />
    </div>
  );
};

export default SearchBar;
