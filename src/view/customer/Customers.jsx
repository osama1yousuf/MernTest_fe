import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomDataGrid from "../../components/CustomDataGrid";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomerAction,
  getCustomersAction,
} from "../../store/actions/customerAction";
import CustomModal from "../../components/CustomModal";
import deleteicon from "../../assets/images/delete.png";
export const Customers = () => {
  const { customers, loading } = useSelector((state) => state.customer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteCustomerId, setDeleteCustomerId] = useState(null);
  const [sortState, setSortState] = useState([
    {
      field: "",
      sort: "",
    },
  ]);
  useEffect(() => {
    dispatch(getCustomersAction(sortState[0]));
  }, [sortState]);

  const handleDeleteCustomer = (confirm) => {
    if (confirm) {
      dispatch(deleteCustomerAction(deleteCustomerId));
      dispatch(getCustomersAction(sortState[0]));
      setOpenDeleteModal(false);
    } else {
      setOpenDeleteModal(false);
    }
  };

  const customerColumn = [
    {
      field: "profilePicture",
      headerName: "",
      headerAlign: "center",
      sortable: false,
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content",
      renderCell: (params) => (
        <Box>
          <Box
            alt="logo"
            component="img"
            height={"70px"}
            sx={{
              objectFit: "contain",
            }}
            borderRadius={"10px"}
            src={params?.row?.profilePicture?.url}
            width={"105px"}
            opacity={"1"}
          />
        </Box>
      ),
    },
    {
      field: "username",
      headerName: "Usename",
      flex: 2,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content",
    },
    {
      field: "name",
      headerName: "Customer Name",
      flex: 2,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content",
    },
    {
      field: "id",
      headerName: "",
      sortable: false,
      flex: 2,
      minWidth: 350,
      headerAlign: "center",
      align: "center",
      headerClassName: "header-bg",
      cellClassName: "cell-content",
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            placeItems: "center",
          }}
        >
          <Button
            sx={{
              color: "rgba(0, 130, 18, 1)",
              background: "rgba(57, 181, 74, 0.4)",
            }}
            variant="contained"
            onClick={() => {
              navigate(`/customer/edit/${params?.row.id}`);
            }}
          >
            Edit
          </Button>

          <Button
            sx={{
              color: "rgba(216, 0, 0, 1)",
              background: "rgba(216, 0, 0, 0.4)",
            }}
            onClick={() => {
              setDeleteCustomerId(params?.row.id);
              setOpenDeleteModal(true);
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];
  return (
    <>
      <CustomModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        height={"20px"}
      >
        <Box
          sx={{
            width: "470px",
            height: "380px",
            boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px",
            opacity: 1,
            background: "rgba(251, 252, 252, 1)",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "right", padding: "20px" }}
          >
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => setOpenDeleteModal(false)}
            >
              X
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "30px",
            }}
          >
            <Box
              alt="logo"
              component="img"
              height={"65px"}
              src={deleteicon}
              width={"65px"}
            />
          </Box>
          <Box sx={{ textAlign: "center", mt: "18px" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
              Are you sure?
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: "10px" }}>
              Do you really want to delete this customer?
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: "5px" }}>
              This process can not be undone.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              mt: "30px",
              placeItems: "center",
            }}
          >
            <Button
              sx={{
                color: "#FFFFFF",
                background: "rgba(165, 165, 175, 1)",
              }}
              onClick={() => handleDeleteCustomer(false)}
            >
              Cancel
            </Button>

            <Button
              sx={{
                color: "#FFFFFF",
                background: "rgba(216, 0, 0, 1)",
              }}
              onClick={() => handleDeleteCustomer(true)}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </CustomModal>
      <Box>
        <Button
          sx={{ background: "linear-gradient(99deg, #57BC90, #004B40)" }}
          variant="contained"
          onClick={() => {
            navigate("/customer/create");
          }}
        >
          Add New Customer
        </Button>
        <Box sx={{ mt: "10px" }}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <CustomDataGrid
              sortState={sortState}
              setSortState={setSortState}
              columns={customerColumn}
              rows={
                customers?.data?.length > 0
                  ? customers?.data?.map((el) => {
                      return {
                        id: el._id,
                        ...el,
                      };
                    })
                  : []
              }
            />
          )}
        </Box>
      </Box>
    </>
  );
};
