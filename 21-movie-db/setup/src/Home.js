import React, { useState } from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  return (
    <main className='section'>
      <form className='search-form'>
        <h2>Search Movies</h2>
        <input
          type='text'
          className='form-input'
          placeholder='movie name...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <section className='movies'></section>
    </main>
  );
};

export default Home;
