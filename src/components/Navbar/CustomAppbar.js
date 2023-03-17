import React from "react";
import { AppBar, Box, Badge, Avatar, Toolbar, IconButton } from "@mui/material";
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
              <IconButton LinkComponent={Link} href="/notifications">
                <Badge color="error" badgeContent={4}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton LinkComponent={Link} href="/settings">
                <SettingsIcon />
              </IconButton>
            </>
          )}
        </Box>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppbar;
