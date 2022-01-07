import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import useFetch from "./hooks/useFetch";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  news: [],
  isLoading: true,
  error: { show: false, msg: "" },
  searchQuery: "react",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let searchUrl = state.searchQuery
    ? `${API_ENDPOINT}&query=${state.searchQuery}`
    : `${API_ENDPOINT}`;
  const { data: news, isLoading, error } = useFetch(searchUrl, 300);
  console.log(
    "🚀TCL: ~ file: context.js ~ line 26 ~ AppProvider ~ searchUrl",
    searchUrl
  );
  useEffect(() => {
    if (isLoading) {
      dispatch({ type: SET_LOADING });
    } else {
      dispatch({ type: SET_STORIES, payload: { news } });
    }
  }, [isLoading]);

  const handleSearchQuery = (value) => {
    dispatch({ type: HANDLE_SEARCH, payload: { value } });
  };

  return (
    <AppContext.Provider value={{ ...state, handleSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
