import React from "react";
import { Box } from "@mui/material";
import ProductList from "../src/components/Product";
import useProduct from "../src/hooks/useProduct";
import Form from "../src/components/Form";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_NUMBER,
} from "../src/components/shared/util/validators";

export default function Index() {
  const inputs = [
    {
      inputId: "name",
      type: "text",
      label: "Nome do Produto",
      placeholder: "Please enter your name",
      validators: [VALIDATOR_REQUIRE()],
      errorText: "Por favor entre um nome válido para o produto",
    },
    {
      inputId: "price",
      label: "Preço do Produto",
      placeholder: "Please enter your name",
      validators: [VALIDATOR_REQUIRE(), VALIDATOR_NUMBER()],
      errorText:
        "Por favor entre um preço válido para o produto (usar ponto em vez de vírgula)",
      // startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
  ];

  const { isLoading, products } = useProduct();

  return (
    <Box sx={{ m: 2 }}>
      <Form formTitle="Criar Produto" inputs={inputs} />
      {!isLoading && <ProductList {...{ products }} />}
    </Box>
  );
}
