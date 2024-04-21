import React from "react";
import { useFormik } from "formik";
import { customerSchema } from "../../utils/formikIntialVal";
import { CustomerForm } from "./CustomerForm";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCustomerAction } from "../../store/actions/customerAction";
import { toast } from "react-toastify";
import { customerSechema } from "../../utils/validationSchema";
export const CreateCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: customerSchema,
    validationSchema : customerSechema,
    onSubmit: (values) => {
      let formDate = new FormData();
      formDate.set("name", values.name);
      formDate.set("email", values.email);
      formDate.set("username", values.username);
      formDate.set("profilePicture", values.profilePicture);
      dispatch(createCustomerAction(formDate))
        .unwrap()
        .then(() => {
          toast.success("Customer has been created successfully!");
        })
        .catch(() => {
          toast.error("Customer Creation Failed.");
        });
      navigate("/");
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <CustomerForm formik={formik} isCreate={true} />
      </form>
    </Box>
  );
};
