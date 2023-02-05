import React from "react";

const SearchBar = (props) => {
    return (
        <div id="search-bar">
            <label>Search for pups by name:</label>
            <input name="searchTerm"></input>
            <button onClick={() =>{ props.search("Bella")}}>Search</button>
        </div>
    )
}

export default SearchBar;