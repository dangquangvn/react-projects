import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { useFetch } from "./hooks/fetchHook";
import { useDebounce } from "./hooks/useDebounce";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [textSearch, setTextSearch] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  // get cocktail data
  // const { loading, data: cocktailList } = useFetch(`${url}${searchQuery}`);
  // const { loading, data: cocktailList } = useFetch(`${url}${textSearch}`);
  const {
    loading,
    data: { drinks },
  } = useFetch(`${url}${textSearch}`);

  const prepareSearchQuery = (query) => {
    const urlWithSearch = `${url}${query}`;

    return encodeURI(urlWithSearch);
  };
  // get list based on text search
  // const fetchDataBasedOnSearch = async (text) => {
  //   const response = await fetch(`${url}${text}`);
  //   const data = await response.json();
  //   setData(data);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchDataBasedOnSearch();
  // }, []);
  const getText = (text) => {
    setTextSearch(text);
    console.log(
      "🚀TCL: ~ file: context.js ~ line 10 ~ AppProvider ~ textSearch",
      textSearch
    );
  };
  // const searchTvShow = async () => {
  //   if (!searchQuery || searchQuery.trim() === "") return;

  //   setLoading(true);
  //   setNoTvShows(false);

  //   const URL = prepareSearchQuery(searchQuery);

  //   const response = await axios.get(URL).catch((err) => {
  //     console.log("Error: ", err);
  //   });

  //   if (response) {
  //     console.log("Response: ", response.data);
  //     if (response.data && response.data.length === 0) setNoTvShows(true);

  //     setTvShows(response.data);
  //   }

  //   setLoading(false);
  // };
  // useDebounce(textSearch, 5000, getText);
  return (
    <AppContext.Provider
      value={{
        loading,
        // cocktailList,
        textSearch,
        getText,
        drinks,
      }}
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
