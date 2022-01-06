import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { searchQuery, setSearchQuery, errorValue } = useGlobalContext();
  return (
    <>
      <form className='search-form'>
        <h2>Search Movies</h2>
        <input
          type='text'
          className='form-input'
          placeholder='Search Movie'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {errorValue && <div className='error'>cuoc song ma</div>}
      </form>
    </>
  );
};

export default SearchForm;
