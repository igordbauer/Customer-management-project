import React, { useState } from "react";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
} from "@mui/material";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CustomDialog from "../shared/UI/CustomDialog";
import UpdateDialog from "../shared/UI/UpdateDialog";
import {
  deleteProduct,
  updateProduct,
} from "../../controller/product-controller";

const ProductList = ({ products, initialInputValues, inputs }) => {
  const [openDelete, setOpenDelete] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(null);
  const [id, setId] = useState(null);

  const handleOpenDelete = (id) => setOpenDelete(id);
  const handleOpenUpdate = (id) => {
    setId(id);
    setOpenUpdate(true);
  };

  const handleCloseDelete = () => setOpenDelete(null);
  const handleCloseUpdate = () => setOpenUpdate(null);
  const handleDeleteUser = async () => {
    await deleteProduct(openDelete);
    handleCloseDelete();
    // document.location.reload(true);
  };

  const handleUpdateUser = async (obj) => {
    const { name, price } = obj.inputs;
    const newObj = { name: name.value, price: price.value };
    await updateProduct(id, newObj);

    handleCloseUpdate();
    // document.location.reload(true);
  };
  return (
    <>
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
                    <TableCell align="right">
                      R$ {product.price.toFixed(2)}
                    </TableCell>
                    <TableCell width={0.2} align="right">
                      <IconButton color="primary">
                        <UpdateRoundedIcon
                          onClick={() => handleOpenUpdate(product.id)}
                        />
                      </IconButton>
                    </TableCell>
                    <TableCell width={0.2} align="right">
                      <IconButton color="error">
                        <DeleteRoundedIcon
                          onClick={() => handleOpenDelete(product.id)}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <CustomDialog
        onClose={handleCloseDelete}
        open={Boolean(openDelete)}
        onConfirm={handleDeleteUser}
        title="Do you really want to delete this product?"
        cardContent={<Typography>{"This action cannot be ondone!"}</Typography>}
      />
      <UpdateDialog
        onClose={handleCloseUpdate}
        initialInputValues={initialInputValues}
        open={openUpdate}
        id={id}
        inputs={inputs}
        array={products}
        onConfirm={handleUpdateUser}
      />
    </>
  );
};
export default ProductList;
