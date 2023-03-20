import React from "react";
import { Box } from "@mui/material";
import ProductList from "../src/components/Product";
import useProduct from "../src/hooks/useProduct";
import Form from "../src/components/Form";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_NUMBER,
} from "../src/components/shared/util/validators";
import LoadingSpinner from "../src/components/Loading/LoadingSpinner";

export default function Index() {
  const inputs = [
    {
      inputId: "name",
      type: "text",
      label: "Nome do Produto",
      placeholder: "Por favor coloque um nome para o produto",
      validators: [VALIDATOR_REQUIRE()],
      errorText: "Por favor entre um nome válido para o produto",
    },
    {
      inputId: "price",
      label: "Preço do Produto",
      placeholder: "Por favor coloque um valor para o produto",
      validators: [VALIDATOR_REQUIRE(), VALIDATOR_NUMBER()],
      errorText:
        "Por favor entre um preço válido para o produto (usar ponto em vez de vírgula)",
      // startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
  ];

  const { isLoading, products } = useProduct();
  const initialInputValues = Object.fromEntries(
    inputs.map((e) => [e.inputId, { value: "", isValid: false }])
  );
  return (
    <Box sx={{ m: 2 }}>
      <Form
        formTitle="Criar Produto"
        initialInputValues={initialInputValues}
        inputs={inputs}
      />
      {isLoading ? (
        <Box sx={{ mt: 9 }}>
          <LoadingSpinner />
        </Box>
      ) : (
        <ProductList {...{ products, inputs, initialInputValues }} />
      )}
    </Box>
  );
}
