import React, { useEffect, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { useLocation } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import { pagesHeader } from "../../utils/navItem";
export function MainNav() {
  const [openNav, setOpenNav] = useState(false);
  const [pageHeading, setPageHeading] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    let findPageHeading = pagesHeader.find((page) => page.url.includes(pathname));
    if (findPageHeading) {
      setPageHeading(findPageHeading.key);
    }
  }, [pathname]);
  return (
    <>
      <Box
        component="header"
        sx={{
          boxShadow: "0px 3px 15px #6B6B6B1A",
          backgroundColor: "#FFFFFF",
          position: "sticky",
          height: "80px",
          opacity: 1,
          top: 0,
          zIndex: "1",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            // justifyContent: "space-between",
            minHeight: "64px",
            px: 2,
          }}
        >
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <IconButton
              onClick={() => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: "none" } }}
            >
              <ListIcon />
            </IconButton>
          </Stack>

          <Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "28px",
                color: "#000000",
                pt : '10px',
                textTransform: "uppercase",
              }}
            >
              {pageHeading}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </>
  );
}
