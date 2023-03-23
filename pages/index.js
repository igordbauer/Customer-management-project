import React, { useState } from "react";
import { Box, Paper, Button, CardHeader, TextField } from "@mui/material";
import ProductItem from "../src/components/Product/ProductItem";
import useProduct from "../src/hooks/useProduct";
export default function Index() {
  const { isLoading, products } = useProduct();
  const [cart, setCart] = useState([]);
  console.log(cart);
  const cartHandler = (e) => {
    setCart((prev) => {
      return [...prev, e];
    });
  };
  const changeCartItemQuantity = (event, obj) => {
    setCart((prev) => {
      return [...prev, e];
    });
  };

  return (
    <Box sx={{ m: 2, py: 2, display: "flex", width: 1 }}>
      <Box sx={{ width: 0.5, overflow: "hidden" }}>
        {products.sort().map((e) => (
          <ProductItem
            key={e.id}
            name={e.name}
            price={e.price}
            onClick={() => cartHandler(e)}
          />
        ))}
      </Box>
      <Box sx={{ width: 0.5, ml: 10 }}>
        {cart.length !== 0 && (
          <Paper elevation={5} sx={{ mx: 3, p: 1 }}>
            {cart.map((e) => (
              <Box key={e.id} sx={{ display: "flex", alignItems: "center" }}>
                <ProductItem name={e.name} price={e.price} />
                <TextField
                  sx={{ width: 0.2, ml: 2 }}
                  id="filled-number"
                  label="Qtd"
                  type="number"
                  // onChange={(event) => changeCartItemQuantity(event, e)}
                />
              </Box>
            ))}
          </Paper>
        )}
      </Box>
    </Box>
  );
}
