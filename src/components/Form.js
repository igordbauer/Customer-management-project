import React, { useState } from "react";
import CustomDialog from "./shared/UI/CustomDialog";
import {
  CardHeader,
  CardContent,
  CardActions,
  Paper,
  Button,
} from "@mui/material";
import useForm from "./shared/hooks/useForm";
import CustomInput from "./shared/FormComponents/CustomInput";
import { createProduct } from "../controller/product-controller";
const Form = (props) => {
  const [formsState, inputHandler] = useForm(props.initialInputValues, false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    document.location.reload(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    handleOpen();
    try {
      await createProduct(formsState);
    } catch (e) {
      throw new Error("Erro ao criar produto");
    }
  };

  return (
    <>
      <Paper
        elevation={10}
        sx={{
          p: 2,
          mb: 2,
          minWidth: "275px",
          width: 1,
          backgroundColor: "#fff",
        }}
      >
        <form onSubmit={submitHandler}>
          <CardHeader title={props.formTitle} />
          <CardContent>
            {props.inputs.map((e) => (
              <CustomInput
                size="large"
                sx={{ width: 1, my: 0.5 }}
                onChangeInput={inputHandler}
                key={e.inputId}
                inputId={e.inputId}
                type={e.type}
                initialValue={""}
                initialValidity={false}
                label={e.label}
                placeholder={e.placeholder}
                validators={e.validators}
                errorText={e.errorText}
                InputProps={{
                  startAdornment: e.startAdornment,
                }}
                {...e}
              />
            ))}
          </CardContent>
          <CardActions
            sx={{ m: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              disabled={!formsState.isValid}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </CardActions>
        </form>
      </Paper>
      {open && (
        <CustomDialog
          onClose={handleClose}
          open={open}
          cancelButtonText="Close"
          title="User created successfully!"
          cardContent={null}
        />
      )}
    </>
  );
};

export default Form;
