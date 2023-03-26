import React from "react";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import useProduct from "../../hooks/useProduct";
const LoadProductsButton = () => {
  const { loadProducts } = useProduct();

  return (
    <IconButton onClick={loadProducts} sx={{ height: "44px" }}>
      <RefreshIcon color="primary" />
    </IconButton>
  );
};
export default LoadProductsButton;
