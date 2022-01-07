//useFetch.js
import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(
        "🚀TCL: ~ file: useFetch.js ~ line 15 ~ fetchData ~ data",
        data
      );

      setData(data.hits);

      // if (data.Response === "True") {
      //   setData(data.Search || data);
      //   setError({ show: false, msg: "" });
      // } else {
      //   setError({ show: true, msg: data.Error });
      // }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading, error };
}
export default useFetch;
