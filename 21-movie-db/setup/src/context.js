import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log("🚀TCL: ~ file: context.js ~ line 4 ~ API_ENDPOINT", API_ENDPOINT);
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  console.log(
    "🚀TCL: ~ file: context.js ~ line 11 ~ AppProvider ~ error",
    error
  );
  const [searchQuery, setSearchQuery] = useState("batman");
  const fetchMovies = async () => {
    let searchUrl = `&s=${searchQuery}`;
    let url = `${API_ENDPOINT}${searchUrl}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log("error -->", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies();
  }, [
    searchQuery,
    /*searchQuery*/
  ]);
  return (
    <AppContext.Provider
      value={{ movies, loading, searchQuery, setSearchQuery, error }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
