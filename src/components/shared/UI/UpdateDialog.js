import React, { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  Paper,
  Button,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import CustomInput from "../FormComponents/CustomInput";
import useForm from "../hooks/useForm";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../util/validators";

const data = {
  name: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
};

const UpdateDialog = ({
  onClose,
  open,
  onConfirm,
  cancelButtonText,
  id,
  users,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formsState, inputHandler, setFormData] = useForm(data, true);
  const identifiedUser = users.find((e) => e._id === id);
  useEffect(() => {
    setIsLoading(true);
    if (identifiedUser && open) {
      setFormData(
        {
          name: {
            value: identifiedUser.name,
            isValid: true,
          },
          email: {
            value: identifiedUser.email,
            isValid: true,
          },
        },
        true
      );
      setIsLoading(false);
    }
  }, [id, users, identifiedUser, open, setFormData]);

  const onCloseDialog = useCallback((e) => {
    e.preventDefault();
    setFormData(data, true);
    onClose();
  }, []);
  const onConfirmDialog = useCallback(
    (e) => {
      e.preventDefault();
      onConfirm(formsState);
    },
    [formsState]
  );
  return (
    <Dialog sx={{ borderRadius: "20px" }} onClose={onCloseDialog} open={open}>
      {!isLoading && (
        <Paper sx={{ p: 2 }}>
          <form onSubmit={onConfirmDialog}>
            <>
              <CardHeader title="Update User" />
              <CardContent>
                <CustomInput
                  inputId="name"
                  type="text"
                  initialValue={formsState.inputs.name.value}
                  initialValidity={formsState.inputs.name.isValid}
                  label="Name"
                  placeholder="Please enter your name"
                  validators={[VALIDATOR_REQUIRE()]}
                  sx={{ width: 1 }}
                  errorText="Please enter a valid name"
                  onChangeInput={inputHandler}
                />
                <CustomInput
                  inputId="email"
                  type="e-mail"
                  initialValue={formsState.inputs.email.value}
                  initialValidity={formsState.inputs.email.isValid}
                  label="E-mail"
                  placeholder="Please enter your email"
                  validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                  sx={{ width: 1, my: 2 }}
                  errorText="Please enter a valid email"
                  onChangeInput={inputHandler}
                />
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {onConfirm && (
                  <Button
                    disabled={!formsState.isValid}
                    variant="contained"
                    type="submit"
                    color="error"
                  >
                    Update
                  </Button>
                )}
                <Button variant="contained" onClick={onCloseDialog}>
                  {cancelButtonText ? cancelButtonText : "Cancel"}
                </Button>
              </CardActions>
            </>
          </form>
        </Paper>
      )}
    </Dialog>
  );
};

export default UpdateDialog;
