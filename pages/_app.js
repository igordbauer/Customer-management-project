import React, { useState } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme";
import CustomDrawer from "../src/components/Navbar/CustomDrawer";
import CustomAppbar from "../src/components/Navbar/CustomAppbar";
import { useMediaQuery } from "@mui/material";
import ContextProvider from "../src/components/ContextProvider";

export default function MyApp({ Component, pageProps }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpen = () => setOpenDrawer(true);
  const handleClose = () => setOpenDrawer(false);

  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <CustomAppbar {...{ handleOpen, desktop }} />
          {!desktop && <CustomDrawer {...{ handleClose, openDrawer }} />}
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Component {...pageProps} />
          </Container>
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}
