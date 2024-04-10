import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [leftPosition, setLeftPosition] = useState(100);
  const [location, setLocation] = useState({});
  const [currentSubmenu, setCurrentSubmenu] = useState({ page: "", links: [] });
  const openSubmenu = (text, coordinates) => {
    const currentPage = sublinks.find((link) => link.page === text);
    setCurrentSubmenu(currentPage);
    setLocation(coordinates);
    setSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const handleLeftPosition = (left) => {
    setLeftPosition(left);
    console.log(
      "🚀TCL: ~ file: context.js ~ line 10 ~ AppProvider ~ leftPosition",
      leftPosition
    );
  };
  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        sublinks,
        leftPosition,
        setLeftPosition,
        handleLeftPosition,
        location,
        currentSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);
