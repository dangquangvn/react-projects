import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { textSearch, getText } = useGlobalContext();
  return (
    <div className='section search'>
      <form className='search-form '>
        <div className='form-control'>
          <label htmlFor='cocktailName'> Search Your Favorite Cocktail</label>
          <input
            type='text'
            name='cocktailName'
            id='cocktailName'
            value={textSearch}
            onChange={(e) => getText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
