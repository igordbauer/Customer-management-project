import React from "react";
import { Drawer, Box, Avatar, Button } from "@mui/material";
import Link from "next/link";

const CustomDrawer = ({ openDrawer, handleClose }) => {
  return (
    <Drawer
      open={openDrawer}
      variant="temporary"
      onClose={handleClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box
        sx={{
          minWidth: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Box sx={{ m: 3 }}>
          <Avatar src="/public/logoooo.jpg" sx={{ width: 70, height: 70 }} />
        </Box>
        <Box
          gap={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleClose}
            LinkComponent={Link}
            href="/notifications"
          >
            Notifications
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            LinkComponent={Link}
            href="/settings"
          >
            Settings
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
