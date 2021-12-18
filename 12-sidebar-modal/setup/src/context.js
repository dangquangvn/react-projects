import React, { useState, useContext } from "react";

const AppContext = React.createContext();

// we will wrap out whole App in AppProvider
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"hello world"}>{children}</AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
