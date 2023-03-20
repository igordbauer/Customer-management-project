import React from "react";
import { Box, CircularProgress } from "@mui/material";
function LoadingSpinner() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner;
