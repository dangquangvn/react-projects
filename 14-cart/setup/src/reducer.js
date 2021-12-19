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
      // let amount = state.cart.reduce((acc, item) => {
      //   return acc + item.amount;
      // }, 0);
      // let total = state.cart.reduce((acc, item) => {
      //   return acc + item.price * item.amount;
      // }, 0);
      let { amount, total } = state.cart.reduce(
        // acc : cong don
        // item: state.cart[index]
        (acc, item) => {
          const { price, amount } = item;
          const itemTotal = price * amount;
          acc.amount += amount; //number of items
          acc.total += itemTotal; // price of 1 item * number of item

          return acc;
        },
        {
          amount: 0,
          total: 0,
        }
      );
      total = parseFloat(total.toFixed(2)); // toFixed will limit number after dau phay, but toFixed will return a 'string'
      // use passeFloat to convert it into number again
      return { ...state, amount, total };
    default:
      return state;
  }
};

export default reducer;
