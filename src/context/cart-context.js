import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { obj } = action;
      if (state.cartItems.find((e) => e.id === action.obj.id)) {
        const newArray = state.cartItems.map((e) => {
          if (e.id === obj.id) {
            return {
              ...e,
              quantity: parseInt(e.quantity) + 1,
            };
          } else {
            return e;
          }
        });
        return {
          cartItems: newArray,
        };
      } else {
        const newObj = {
          ...obj,
          quantity: 1,
        };
        return {
          cartItems: [...state.cartItems, newObj],
        };
      }
    }
    case "CHANGE_QUANTITY": {
      const { obj, quantity } = action;
      let newArray;
      if (parseInt(quantity) === 0) {
        newArray = state.cartItems.filter((e) => e.id !== obj.id);
      } else {
        newArray = state.cartItems.map((e) => {
          if (e.id === obj.id) {
            return {
              ...e,
              quantity: parseInt(quantity),
            };
          } else {
            return e;
          }
        });
      }
      return {
        cartItems: newArray,
      };
    }
    default:
      return state;
  }
};
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ dispatch, cartState }}>
      {children}
    </CartContext.Provider>
  );
};
