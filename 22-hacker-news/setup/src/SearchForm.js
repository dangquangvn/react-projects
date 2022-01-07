import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { searchQuery, handleSearchQuery } = useGlobalContext();
  return (
    <form className='search-form'>
      <h1>Search Hacker News</h1>
      <input
        type='text'
        name=''
        id=''
        placeholder='Search'
        className='form-input'
        value={searchQuery}
        onChange={(e) => handleSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
