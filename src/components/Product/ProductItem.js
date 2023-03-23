import React from "react";
import { Box, Button, CardHeader } from "@mui/material";

const ProductItem = ({ name, price, onClick }) => {
  return (
    <Box sx={{ width: 1 }}>
      <Button
        onClick={onClick}
        fullWidth
        color="black"
        sx={{
          border: "0.25px solid",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <CardHeader
          sx={{ textAlign: "left" }}
          title={name}
          subheader={`R$ ${price.toFixed(2)}`}
        />
      </Button>
    </Box>
  );
};
export default ProductItem;
