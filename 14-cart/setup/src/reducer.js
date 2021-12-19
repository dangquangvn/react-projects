import React from "react";
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      const removeItem = state.cart.filter((item) => item.id !== payload.id);
      return { ...state, cart: removeItem };
    case "INCREASE":
      // const incItem = state.cart.find((item) => item.id === payload.id);
      let incCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      // return state;
      return { ...state, cart: incCart };

    case "DECREASE":
      let decCart = state.cart
        .map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: decCart };
    case "TOTAL":
      let amount = state.cart.reduce((acc, item) => {
        return acc + item.amount;
      }, 0);
      console.log(
        "🚀TCL: ~ file: reducer.js ~ line 33 ~ total ~ total",
        amount
      );
      return { ...state, amount };
    default:
      return state;
  }
};

export default reducer;
