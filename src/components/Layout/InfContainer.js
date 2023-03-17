import React from "react";
import Table from "../Table";
import { v4 } from "uuid";
import { Box } from "@mui/material";
import Form from "../Form";
const array = new Array(50).fill(null).map((e, i) => ({
  id: v4(),
  title: `text${i}`,
  priority: i % 3 ? "high" : i % 2 ? "medium" : "low",
  checked: false,
}));
const InfContainer = () => {
  return (
    <Box
      sx={{
        p: 0.5,
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ width: 0.8, height: 1 }}>
        {/* <Form /> */}
        <Table array={array} category={["low", "medium", "high"]} />
      </Box>
    </Box>
  );
};
export default InfContainer;
