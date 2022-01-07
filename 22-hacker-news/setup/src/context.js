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
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let pageUrl = `&page=${state.page}`;
  let searchUrl = state.searchQuery
    ? `${API_ENDPOINT}&query=${state.searchQuery}${pageUrl}`
    : `${API_ENDPOINT}${pageUrl}`;
  const { data, isLoading, error } = useFetch(searchUrl, 300);
  console.log(
    "🚀TCL: ~ file: context.js ~ line 26 ~ AppProvider ~ searchUrl",
    searchUrl
  );
  useEffect(() => {
    if (isLoading) {
      dispatch({ type: SET_LOADING });
    } else {
      dispatch({
        type: SET_STORIES,
        payload: { news: data.hits, nbPages: data.nbPages },
      });
    }
  }, [isLoading]);

  const handleSearchQuery = (value) => {
    dispatch({ type: HANDLE_SEARCH, payload: { value } });
  };

  const handlePage = (e) => {
    console.log("handlePage", e.target.classList.contains("btn-prev"));
    const checkPrevBtn = e.target.classList.contains("btn-prev");
    dispatch({ type: HANDLE_PAGE, payload: { checkPrevBtn } });
  };

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_STORY, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleSearchQuery, handlePage, handleRemove }}
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
