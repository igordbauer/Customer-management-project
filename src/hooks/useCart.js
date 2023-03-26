import { useContext } from "react";
import { CartContext } from "../context/cart-context";

const useCart = () => {
  const { dispatch, cartState } = useContext(CartContext);

  return {
    dispatch,
    cartState,
  };
};
export default useCart;
