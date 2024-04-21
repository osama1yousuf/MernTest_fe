import React from "react";
import {Box , Stack , Typography} from "@mui/material";
import logo from "../../assets/images/logo.png";

import { navItems } from "../../utils/navItem";

export function SideNav() {
  const pathname = window.location.pathname;

  return (
    <Box
      sx={{
        bgcolor: "#015249",
        display: { xs: "none", lg: "flex" },
        borderRadius: "0px 20px 20px 0px",
        flexDirection: "column",
        height: "100%",
        left: 0,
        maxWidth: "100%",
        position: "fixed",
        scrollbarWidth: "none",
        top: 0,
        width: "280px",
        zIndex: 1100,
        "&::-webkit-scrollbar": { display: "none" },
      }}
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
      <Box component="nav" sx={{ flex: "1 1 auto", p: "12px" }}>
        {renderNavItems({ pathname, items: navItems })}
      </Box>
    </Box>
  );
}

function renderNavItems({ items = [], pathname }) {
  const children = items.map((item) => (
    <NavItem key={item.key} pathname={pathname} {...item} />
  ));

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

function NavItem({ disabled, external, href, pathname, title }) {
  const active = pathname === href;

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <li>
      <Box
        to={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        onClick={handleClick}
        sx={{
          top: "229px",
          left: "40px",
          width: "230px",
          height: "49px",
          color: "white",
          textAlign: "center",
          fontSize: "33px",
          cursor:"pointer",
          background: "#043933",
          boxShadow: "0px 5px 25px #00000040",
          borderRadius: "10px",
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
    </li>
  );
}
