import { useContext } from "react";
import { ProductContext } from "../context/product-context";
const useProduct = () => {
  const { isLoading, products, loadProducts } = useContext(ProductContext);
  const cartProducts = products.map((e) => ({ ...e, quantity: 0 }));
  return { isLoading, products: cartProducts, loadProducts };
};
export default useProduct;
