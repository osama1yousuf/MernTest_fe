import { Box, Modal, Stack, useTheme, Typography, Grid } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const CustomModal = ({
  children,
  open,
  handleClose,
  width,
  showButton,
  isLoading = false,
  height,
  heading,
  btnLabel,
  handleClick,
}) => {
  const theme = useTheme();
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "52%",
    transform: "translate(-50%, -50%)",
    border: "1px solid grey",
    // boxShadow: 24,
    // minHeight:'70%',
  };

  return (
    <Modal onClose={handleClose} open={open} sx={{ zIndex: "4444" }}>
      <Box sx={modalStyle}>
        <Box>{children}</Box>
        {showButton && (
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: "row",
              padding: "12px",
              justifyContent: "flex-end",
              position: "sticky",
              bottom: "0",
              background: "#f0f5f7",
            }}
            gap={2}
          >

          </Stack>
        )}
      </Box>
    </Modal>
  );
};

export default CustomModal;