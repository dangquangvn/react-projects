import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = (/*{ Poster, Title, Year, imdbID }*/) => {
  const { movies, loading, searchQuery, setSearchQuery, errorValue } =
    useGlobalContext();
  return (
    <section className='movies'>
      {loading ? (
        <div className='loading'></div>
      ) : (
        movies.map(({ Poster, Title, Year, imdbID }) => (
          <Link to={`/movies/${imdbID}`} className='movie' key={imdbID}>
            <img src={Poster} alt={Title} />
            <div className='movie-info'>
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </Link>
        ))
        // <h1>Movies.map</h1>
      )}
    </section>
  );
};

export default Movies;
