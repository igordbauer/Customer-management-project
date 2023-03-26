import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const ProductSaleList = ({ filteredProducts, cartHandler }) => {
  return (
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
  );
};
export default ProductSaleList;
