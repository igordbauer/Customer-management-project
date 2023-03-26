import React, { useReducer, useState, useCallback, useMemo } from "react";
import {
  Box,
  Paper,
  Button,
  CardHeader,
  Typography,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import useProduct from "../../hooks/useProduct";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { obj } = action;
      if (state.cartItems.find((e) => e.id === action.obj.id)) {
        const newArray = state.cartItems.map((e) => {
          if (e.id === obj.id) {
            return {
              ...e,
              quantity: parseInt(e.quantity) + 1,
            };
          } else {
            return e;
          }
        });
        return {
          cartItems: newArray,
        };
      } else {
        const newObj = {
          ...obj,
          quantity: 1,
        };
        return {
          cartItems: [...state.cartItems, newObj],
        };
      }
    }
    case "CHANGE_QUANTITY": {
      const { obj, quantity } = action;
      let newArray;
      if (parseInt(quantity) === 0) {
        newArray = state.cartItems.filter((e) => e.id !== obj.id);
      } else {
        newArray = state.cartItems.map((e) => {
          if (e.id === obj.id) {
            return {
              ...e,
              quantity: parseInt(quantity),
            };
          } else {
            return e;
          }
        });
      }
      return {
        cartItems: newArray,
      };
    }
    default:
      return state;
  }
};

const Cart = () => {
  const { products } = useProduct();
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });
  const [filter, setFilter] = useState("");

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
    filter === "" ? products : products.filter((e) => e.name.includes(filter));

  return (
    <Box sx={{ m: 2, display: "flex", width: 1, maxHeight: "700px" }}>
      <Paper
        elevation={5}
        sx={{ mx: 3, p: 1, width: 0.6, border: "1px solid primary" }}
      >
        <TextField
          sx={{
            m: 2,
            width: 0.9,
          }}
          label="Procurar produto"
          placeholder="Procurar"
          onChange={filterHandler}
        />
        <TableContainer sx={{ maxHeight: "600px" }}>
          <Table stickyHeader sx={{ width: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "20px" }}>Produto</TableCell>
                <TableCell sx={{ fontSize: "20px" }} align="right">
                  Preço
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((e) => (
                <TableRow
                  hover
                  key={e.id}
                  onClick={() => cartHandler(e)}
                  sx={{
                    cursor: "pointer",
                    "&:last-child td, &:last-child th": { border: 0 },
                    width: 1,
                  }}
                >
                  <TableCell component="th" scope="row">
                    {e.name}
                  </TableCell>
                  <TableCell align="right">R$ {e.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
        <Paper elevation={10} sx={{ mx: 3, minHeight: "500px" }}>
          <TableContainer sx={{ maxHeight: "500px" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Produto</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell align="right">Quantidade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartState.cartItems.map((e) => (
                  <TableRow
                    key={e.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {e.name}
                    </TableCell>
                    <TableCell align="right">R$ {e.price.toFixed(2)}</TableCell>
                    <TableCell align="right">
                      <TextField
                        sx={{ width: 0.5, ml: 2 }}
                        id="filled-number"
                        label="Qtd"
                        value={e.quantity || "0"}
                        type="number"
                        onChange={(event) => changeCartItemQuantity(event, e)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
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
          <Box></Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default Cart;
