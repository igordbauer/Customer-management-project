import React from "react";
import { Box, Paper, CardHeader, Button, Checkbox } from "@mui/material";

const TableItem = (props) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        minWidth: "300px",
        justifyContent: "space-between",
        alignItems: "center",
        my: 0.5,
      }}
    >
      <CardHeader title={props.title} subheader={props.priority} />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {!props.firstCategory && (
            <Button onClick={props.switchLowerHandler}>lower</Button>
          )}
          {!props.lastCategory && (
            <Button onClick={props.switchHigherHandler}>higher</Button>
          )}
        </Box>
        <Checkbox onClick={props.handleCheck} />
      </Box>
    </Paper>
  );
};
export default TableItem;
