import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  return (
    <div className='section search'>
      <form className='search-form '>
        <div className='form-control'>
          <label for='cocktailName'> Search Your Favorite Cocktail</label>
          <input type='text' name='cocktailName' id='cocktailName' />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
