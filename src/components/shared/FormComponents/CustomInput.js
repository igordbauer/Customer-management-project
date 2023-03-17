import React, { useReducer, useEffect } from "react";
import { TextField } from "@mui/material";
import { validate } from "../util/validators";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return {
        state,
      };
  }
};

const CustomInput = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue,
    isTouched: false,
    isValid: props.initialValidity || false,
  });
  const { inputId, onChangeInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onChangeInput(inputId, value, isValid);
  }, [inputId, isValid, onChangeInput, value]);

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => dispatch({ type: "TOUCH" });

  return (
    <TextField
      type={props.type}
      error={!inputState.isValid && inputState.isTouched}
      helperText={
        !inputState.isValid && inputState.isTouched && props.errorText
      }
      sx={props.sx}
      id={props.id}
      placeholder={props.placeholder}
      label={props.label}
      variant={props.variant}
      disabled={props.disabled}
      value={inputState.value}
      onChange={changeHandler}
      onBlur={touchHandler}
      multiline={props.multiline}
      hiddenLabel={props.hiddenLabel}
      {...props}
    />
  );
};

export default CustomInput;
