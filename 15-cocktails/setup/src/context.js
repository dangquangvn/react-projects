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
  const [loading, setLoading] = useState(false);

  //& prevent space or some special character
  const prepareSearchQuery = (query) => {
    const urlWithSearch = `${url}${query}`;
    console.log("prepareSearchQuery");
    return encodeURI(urlWithSearch);
  };

  //todo get data using useFetch hook
  // const {
  //   loading,
  //   data: { drinks },
  // } = useFetch(prepareSearchQuery(textSearch));
  //todo get data with function
  const fetchDrinks = useCallback(async () => {
    try {
      // if (!textSearch || textSearch.trim() === "") return;
      setLoading(true);
      const URL = prepareSearchQuery(textSearch);

      const response = await fetch(URL);
      const data = await response.json();
      const { drinks } = data || [];
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;

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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [textSearch]);

  useEffect(() => {
    fetchDrinks();
  }, [textSearch, fetchDrinks]);
  // useDebounce(textSearch, 500, fetchDrinks);

  // put data just fetched into state to avoid undefined
  // const getCocktails = () => {
  //   if (drinks) {
  //     const newCocktails = drinks.map((item) => {
  //       const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
  //         item;
  //       return {
  //         id: idDrink,
  //         name: strDrink,
  //         image: strDrinkThumb,
  //         info: strAlcoholic,
  //         glass: strGlass,
  //       };
  //     });
  //     setCocktails(newCocktails);
  //   } else {
  //     setCocktails([]);
  //   }
  // };
  // useEffect(() => {
  //   getCocktails();
  // }, [drinks]);

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
        // drinks,
        cocktails,
        setTextSearch,
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
