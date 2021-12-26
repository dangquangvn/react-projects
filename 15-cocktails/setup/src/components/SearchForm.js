import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { textSearch, getText, setTextSearch } = useGlobalContext();
  const searchValue = useRef("");

  // mouse on input when reload
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setTextSearch(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='section search'>
      <form className='search-form'>
        <div className='form-control' onSubmit={handleSubmit}>
          <label htmlFor='cocktailName'> Search Your Favorite Cocktail</label>
          <input
            type='text'
            name='cocktailName'
            id='cocktailName'
            //& controlled input
            // value={textSearch}
            // onChange={(e) => getText(e.target.value)}
            //& uncontrolled input using Refs
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
