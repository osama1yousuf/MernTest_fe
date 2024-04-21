import React from "react";
import {Box , Container} from "@mui/material";
import { createGlobalStyle } from "styled-components";


import { MainNav } from "./MainNav";
import { SideNav } from "./SideNav";
const GlobalStyles = createGlobalStyle`
  body {
    --MainNav-height: 56px;
    --MainNav-zIndex: 1000;
    --SideNav-width: 280px;
    --SideNav-zIndex: 1100;
    --MobileNav-width: 320px;
    --MobileNav-zIndex: 1100;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100%",
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            pl: { lg: "280px" },
          }}
        >
          <MainNav />
          <main>
            <Container maxWidth="xl" sx={{ py: "64px" }}>
              {children}
            </Container>
          </main>
        </Box>
      </Box>
    </>
    
  );
}
