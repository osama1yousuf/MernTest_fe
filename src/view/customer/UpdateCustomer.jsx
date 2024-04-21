import React, { useEffect } from "react";
import { useFormik } from "formik";
import { customerSchema } from "../../utils/formikIntialVal";
import { CustomerForm } from "./CustomerForm";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomerByIdAction,
  updateCustomerAction,
} from "../../store/actions/customerAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customerSechema } from "../../utils/validationSchema";
export const UpdateCustomer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customers, loading } = useSelector((state) => state.customer);
  const editCustomer = customers?.data?.find((c) => c._id === id);
  const formik = useFormik({
    initialValues: editCustomer,
    validationSchema: customerSechema,
    onSubmit: (values) => {
      let formDate = new FormData();
      formDate.set("name", values.name);
      formDate.set("email", values.email);
      formDate.set("username", values.username);
      {
        values.profilePicture.name &&
          formDate.set("profilePicture", values.profilePicture);
      }
      dispatch(updateCustomerAction({ id: id, formData: formDate }))
        .unwrap()
        .then(() => {
          toast.success("Customer Updated Successfully!");
        })
        .catch(() => {
          toast.error("Customer Updation Failed.");
        });
      navigate("/");
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        {loading ? <CircularProgress /> : <CustomerForm formik={formik} />}
      </form>
    </Box>
  );
};
