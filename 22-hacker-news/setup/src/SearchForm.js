import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  return (
    <form className='search-form'>
      <h1>Search Hacker News</h1>
      <input
        type='text'
        name=''
        id=''
        placeholder='Search'
        className='form-input'
      />
    </form>
  );
};

export default SearchForm;
