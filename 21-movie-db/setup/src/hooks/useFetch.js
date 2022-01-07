//useFetch.js
import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlParams) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { data, isLoading, error };
}
export default useFetch;
