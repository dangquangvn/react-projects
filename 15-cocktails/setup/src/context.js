import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { useFetch } from "./hooks/fetchHook";
import { useDebounce } from "./hooks/useDebounce";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //searchTerm / searchQuery
  const [textSearch, setTextSearch] = useState("");
  const [cocktails, setCocktails] = useState([]);

  //& prevent space or some special character
  const prepareSearchQuery = (query) => {
    const urlWithSearch = `${url}${query}`;
    console.log("prepareSearchQuery");
    return encodeURI(urlWithSearch);
  };

  //& get data using useFetch hook
  const {
    loading,
    data: { drinks },
  } = useFetch(prepareSearchQuery(textSearch));

  // put data just fetched into state to avoid undefined
  const getCocktails = () => {
    if (drinks) {
      const newCocktails = drinks.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setCocktails(newCocktails);
    } else {
      setCocktails([]);
    }
  };
  useEffect(() => {
    getCocktails();
  }, [drinks]);

  const getText = (text) => {
    setTextSearch(text);
    console.log(
      "🚀TCL: ~ file: context.js ~ line 10 ~ AppProvider ~ textSearch",
      textSearch
    );
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        // cocktailList,
        textSearch,
        getText,
        drinks,
        cocktails,
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
