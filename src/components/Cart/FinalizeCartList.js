import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";

const FinalizeCartList = ({ totalCart, handleOpenConfim }) => {
  return (
    <Paper
      elevation={10}
      sx={{ mx: 3, my: 3, background: "red", height: "110px" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          height="50px"
          align="left"
          p={1}
          fontWeight="600"
          color="white"
          fontSize="20px"
        >
          Total:
        </Typography>
        <Typography
          height="50px"
          p={1}
          fontWeight="600"
          color="white"
          fontSize="32px"
        >
          R$ {totalCart.toFixed(2)}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button onClick={handleOpenConfim} sx={{ mx: 1 }} variant="contained">
          Finalizar
        </Button>
      </Box>
    </Paper>
  );
};

export default FinalizeCartList;
