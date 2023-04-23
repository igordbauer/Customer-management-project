import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Paper,
} from "@mui/material";
import useCart from "../../hooks/useCart";

const ProductCartList = ({ changeCartItemQuantity }) => {
  const { cartState } = useCart();
  return (
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
  );
};
export default ProductCartList;
