import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = (/*{ Poster, Title, Year, imdbID }*/) => {
  const { movies, loading, error } = useGlobalContext();
  return (
    <>
      {loading ? (
        <div className='loading'></div>
      ) : (
        <section className='movies'>
          {movies.map(({ Poster, Title, Year, imdbID }) => (
            <Link to={`/movies/${imdbID}`} className='movie' key={imdbID}>
              <img src={Poster === "N/A" ? url : Poster} alt={Title} />
              <div className='movie-info'>
                <h4>{Title}</h4>
                <p>{Year}</p>
              </div>
            </Link>
          ))}
        </section>
      )}
    </>
  );
};

export default Movies;
