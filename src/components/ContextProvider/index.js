import React from "react";
import { ProductProvider } from "../../context/product-context";
import { CartProvider } from "../../context/cart-context";
const ContextProvider = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};
export default ContextProvider;
