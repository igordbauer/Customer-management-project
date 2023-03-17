import React from "react";
import {
  Dialog,
  Paper,
  Button,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

const CustomDialog = ({
  title,
  onClose,
  open,
  onConfirm,
  cardContent,
  cancelButtonText,
}) => {
  return (
    <Dialog sx={{ borderRadius: "20px" }} onClose={onClose} open={open}>
      <Paper sx={{ p: 2 }}>
        <CardHeader title={title} />
        <CardContent>{cardContent}</CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {onConfirm && (
            <Button
              variant="contained"
              type="submit"
              color="error"
              onClick={onConfirm}
            >
              Confim
            </Button>
          )}
          <Button variant="contained" type="submit" onClick={onClose}>
            {cancelButtonText ? cancelButtonText : "Cancel"}
          </Button>
        </CardActions>
      </Paper>
    </Dialog>
  );
};

export default CustomDialog;
