import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT, useGlobalContext } from "./context";

const SingleMovie = () => {
  // const { movies, loading, searchQuery, setSearchQuery, errorValue } =
  // useGlobalContext();
  // const {  error } = useGlobalContext();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });
  const fetchSingleMovie = async () => {
    let idUrl = `&i=${id}`;
    let url = `${API_ENDPOINT}${idUrl}`;
    console.log(url);
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError({ show: true, msg: data.Error });
      }
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
  if (loading) {
    return <div className='loading'></div>;
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to={"/"} className='btn'>
          back to movies
        </Link>
      </div>
    );
  }
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
