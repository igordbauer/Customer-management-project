import React, { useState, useCallback, useMemo } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import ProductSaleList from "./ProductSaleList";
import ProductCartList from "./ProductCartList";
import LoadProductsButton from "../LoadProductsButton";
import CustomDialog from "../shared/UI/CustomDialog";
import FinalizeCartList from "./FinalizeCartList";
import { createSale } from "../../controller/sale-controller";
const Cart = () => {
  const { products } = useProduct();
  const [filter, setFilter] = useState("");
  const { dispatch, cartState } = useCart();
  const [openConfirm, setOpenConfirm] = useState(null);

  const handleCloseConfim = () => setOpenConfirm(false);
  const handleOpenConfim = () => setOpenConfirm(true);

  const handleConfirmSale = async () => {
    const saleObj = {
      value: totalCart,
      date: new Date(),
      products: cartState.cartItems,
    };
    await createSale(saleObj);
    dispatch({ type: "CLEAR" });
    handleCloseConfim();
  };

  const filterHandler = (event) => {
    setFilter(event.target.value);
  };

  const cartHandler = useCallback((obj) => {
    dispatch({
      type: "ADD",
      obj,
    });
  }, []);

  const changeCartItemQuantity = (event, obj) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      obj: obj,
      quantity: event.target.value,
    });
  };

  const totalCart = useMemo(
    () =>
      cartState.cartItems.reduce((prev, next) => {
        return prev + next.price * next.quantity;
      }, 0),
    [cartState]
  );
  const filteredProducts =
    filter === ""
      ? products
      : products.filter((e) => e.name.toLowerCase().includes(filter));

  return (
    <>
      <Box sx={{ m: 2, display: "flex", width: 1, maxHeight: "700px" }}>
        <Paper
          elevation={5}
          sx={{ mx: 3, p: 1, width: 0.6, border: "1px solid primary" }}
        >
          <Box sx={{ display: "flex", width: 1, alignItems: "center" }}>
            <TextField
              sx={{
                m: 2,
                width: 0.85,
              }}
              label="Procurar produto"
              placeholder="Procurar"
              onChange={filterHandler}
            />
            <LoadProductsButton />
          </Box>
          <ProductSaleList
            filteredProducts={filteredProducts}
            cartHandler={cartHandler}
          />
        </Paper>
        <Box sx={{ width: 0.5 }}>
          <Paper elevation={5} sx={{ mx: 3, mb: 2 }}>
            <Typography
              align="center"
              p={1}
              fontWeight="600"
              fontSize="24px"
              color="orange.main"
            >
              Venda
            </Typography>
          </Paper>
          <ProductCartList changeCartItemQuantity={changeCartItemQuantity} />
          <FinalizeCartList {...{ handleOpenConfim, totalCart }} />
        </Box>
      </Box>
      <CustomDialog
        onClose={handleCloseConfim}
        open={openConfirm}
        onConfirm={handleConfirmSale}
        title="Deseja realmente terminar essa venda?"
        cardContent={
          <Typography>{"Essa ação não pode ser desfeita!"}</Typography>
        }
      />
    </>
  );
};
export default Cart;
