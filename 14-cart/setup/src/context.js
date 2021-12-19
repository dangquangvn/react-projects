import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 100,
  amount: 5,
};

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems);
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeSingleItem = (id) => {
    console.log(id);
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: { id } });
  };
  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: { id } });
  };

  const getTotal = () => {
    dispatch({ type: "TOTAL" });
  };

  useEffect(() => {
    getTotal();
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeSingleItem,
        increaseItem,
        decreaseItem,
        getTotal,
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
