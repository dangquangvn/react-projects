import React from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: removeItem };
    default:
      return state;
  }
};

export default reducer;
