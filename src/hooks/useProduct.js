import { useContext } from "react";
import { ProductContext } from "../context/product-context";
const useProduct = () => {
  const { isLoading, products } = useContext(ProductContext);
  return { isLoading, products };
};
export default useProduct;
