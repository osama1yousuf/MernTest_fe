import React from "react";
import {Drawer , Stack , Typography , Box} from "@mui/material";
import logo from "../../assets/images/logo.png";

import { navItems } from "../../utils/navItem";

export function MobileNav({ open, onClose }) {
  return (
    <Drawer
      PaperProps={{
        sx: {
          bgcolor: "#015249",
          color: "black",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          scrollbarWidth: "none",
          width: "320px",
          zIndex: "1100",
          "&::-webkit-scrollbar": { display: "none" },
        },
      }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box to="/" sx={{ display: "inline-flex" }}>
          <Box
            alt="logo"
            component="img"
            height={"58px"}
            src={logo}
            width={"244px"}
          />
        </Box>
      </Stack>
      <Stack spacing={2} sx={{ p: "12px" }}>
        {navItems.map((item) => (
          <NavItem key={item.key} {...item} />
        ))}
      </Stack>
    </Drawer>
  );
}

function NavItem({ href, title }) {
  return (
    <Box
      to={href}
      sx={{
        alignItems: "center",
        borderRadius: 1,
        cursor: "pointer",
        display: "flex",
        flex: "0 0 auto",
        gap: 1,
        p: "6px 16px",
        position: "relative",
        textDecoration: "none",
        whiteSpace: "nowrap",

        width: "230px",
        left: "20px",
        height: "40px",
        color: "white",
        textAlign: "center",
        background: "#043933",
        boxShadow: "0px 5px 25px #00000040",
        opacity: 1,
      }}
    >
      <Box sx={{ flex: "1 1 auto" }}>
        <Typography
          component="span"
          sx={{
            color: "inherit",
            fontSize: "20px",
            fontWeight: 500,
            textAlign: "center",
            lineHeight: "28px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
