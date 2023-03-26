import React from "react";
import {
  AppBar,
  Box,
  Badge,
  Avatar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";

const CustomAppbar = ({ handleOpen, desktop }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: desktop ? "flex-end" : "space-between" }}>
        {!desktop && (
          <IconButton onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
        )}
        <Box
          gap={1}
          sx={{
            display: "flex",
            mr: 1,
          }}
        >
          {desktop && (
            <>
              {/* <IconButton LinkComponent={Link} href="/product">
                <Badge color="error" badgeContent={4}>
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
              <Button
                LinkComponent={Link}
                href="/product"
                variant="contained"
                color="secondary"
              >
                Criar produtos
              </Button>
              <Button
                LinkComponent={Link}
                href="/"
                variant="contained"
                color="secondary"
              >
                Venda
              </Button>
              {/* <IconButton LinkComponent={Link} href="/">
                <SettingsIcon />
              </IconButton> */}
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppbar;
