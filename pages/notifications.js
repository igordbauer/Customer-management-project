import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
export default function Notifications() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Notifications
      </Typography>
      <Button variant="contained" component={Link} noLinkStyle href="/">
        Go to the main page
      </Button>
    </Box>
  );
}
