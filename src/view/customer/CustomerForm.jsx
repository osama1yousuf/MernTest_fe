import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import formbg from "../../assets/images/formbg.png";
import { useNavigate } from "react-router-dom";

export const CustomerForm = ({ formik, isCreate }) => {
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    formik.setFieldValue("profilePicture", e.target.files[0]);
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          boxShadow: "0px 5px 30px #0000004D",
          width: "458px",
          borderRadius: "20px",
          height: "auto",
        }}
      >
        <Box
          sx={{
            background: `url(${formbg})`,
            backgroundRepeat: "no-repeat",
            minHeight: "80px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "right",
              paddingRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              formik.resetForm();
              navigate("/");
            }}
          >
            X
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {isCreate ? "Add New Customer" : "Edit Customer"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "18px 18px",
            gap: "18px",
          }}
        >
          <TextField
            placeholder="Username"
            error={formik.errors["username"] && formik.touched["username"]}
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            sx={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FBFCFC",
            }}
            size="small"
          />
          <TextField
            placeholder="Customer Name"
            onChange={formik.handleChange}
            error={formik.errors["name"] && formik.touched["name"]}
            name="name"
            value={formik.values.name}
            sx={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FBFCFC",
            }}
            size="small"
          />
          <TextField
            placeholder="Email"
            onChange={formik.handleChange}
            error={formik.errors["email"] && formik.touched["email"]}
            name="email"
            value={formik.values.email}
            type="email"
            sx={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FBFCFC",
            }}
            size="small"
          />

          <Box>
            <input
              onChange={(e) => handleFileChange(e)}
              type="file"
              id="actual-btn"
              hidden
            />
            <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <label
                style={{
                  color: "#57BC90",
                  padding: "0.5rem",
                  fontFamily: "sans-serif",
                  borderRadius: "0.3rem",
                  cursor: "pointer",
                }}
                for="actual-btn"
              >
                Upload Photo
              </label>
              <Typography sx={{ fontSize: "13px" }}>
                {formik.values?.profilePicture?.name ||
                  formik.values?.profilePicture?.public_id}
              </Typography>
            </Box>
            {formik.errors["profilePicture"] &&
              formik.touched["profilePicture"] && (
                <Typography sx={{ fontSize: "12px", color: "red" }}>
                  {formik.errors["profilePicture"]}
                </Typography>
              )}
          </Box>
          <Button
            sx={{ background: "linear-gradient(99deg, #57BC90, #004B40)" }}
            variant="contained"
            type="submit"
          >
            {isCreate ? "Add Customer" : "Edit Customer"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
