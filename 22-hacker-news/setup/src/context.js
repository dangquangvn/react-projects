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
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { data: news, isLoading, error } = useFetch(`${API_ENDPOINT}`);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (isLoading) {
      dispatch({ type: SET_LOADING });
    } else {
      dispatch({ type: SET_STORIES, payload: { news } });
    }
  }, [isLoading]);
  return (
    <AppContext.Provider value={{ news, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
