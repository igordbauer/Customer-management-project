import React from "react";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const ProductList = ({ products }) => {
  return (
    <Paper elevation={10} sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "500px" }}>
        <Table stickyHeader sx={{ width: 1 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nome do Produto</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0 ? (
              <TableCell component="th" scope="row">
                Nenhum produto na lista
              </TableCell>
            ) : (
              products.sort().map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">R$ {product.price}</TableCell>
                  <TableCell width={0.2} align="right">
                    <IconButton color="primary">
                      <UpdateRoundedIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell width={0.2} align="right">
                    <IconButton color="error">
                      <DeleteRoundedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default ProductList;
