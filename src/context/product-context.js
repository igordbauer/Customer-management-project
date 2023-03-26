import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../controller/product-controller";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const load = async () => {
    setIsloading(true);
    const products = await getProducts();
    setProducts(products.data);
    setIsloading(false);
  };
  useEffect(() => load(), []);

  return (
    <ProductContext.Provider
      value={{ products, isLoading, loadProducts: load }}
    >
      {children}
    </ProductContext.Provider>
  );
};
