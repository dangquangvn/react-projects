import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT, useGlobalContext } from "./context";

const SingleMovie = () => {
  // const { movies, loading, searchQuery, setSearchQuery, errorValue } =
  // useGlobalContext();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const fetchSingleMovie = async () => {
    let idUrl = `&i=${id}`;
    let url = `${API_ENDPOINT}${idUrl}`;
    console.log(url);
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(
        "🚀TCL: ~ file: SingleMovie.js ~ line 20 ~ fetchSingleMovie ~ data",
        data
      );
      setMovie(data);
    } catch (error) {
      console.log("we got error");
      // console.log("error -->", error);
      // setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchSingleMovie();
  }, []);
  const { Poster, Title, Plot, Year } = movie;
  return (
    <>
      {loading ? (
        <div className='loading'></div>
      ) : (
        <section className='single-movie'>
          <img src={Poster} alt={Title} />
          <div className='single-movie-info'>
            <h2>{Title}</h2>
            <p>{Plot}</p>
            <h4>{Year}</h4>
            <Link to={"/"} className='btn'>
              back to movies
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleMovie;
