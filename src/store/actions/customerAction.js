import { createAsyncThunk } from "@reduxjs/toolkit";
import { path } from "../../utils/path";
import axios from "axios";


export const getCustomersAction = createAsyncThunk("getCustomers", async (data) => {
  try {

    const response = await axios.get(`${path}/customers?column=${data.field}&type=${data.sort}`);
    if (response) {
      return response.data;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    console.log(error, "action error");
    throw new Error(error);
  }
});

export const createCustomerAction = createAsyncThunk(
  "createCustomer",
  async (data) => {
    try {
      const response = await axios.post(`${path}/customer`, data);
      if (response) {
        return response;
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error, "check Error");
      throw new Error(error);
    }
  }
);

export const updateCustomerAction = createAsyncThunk(
  "updateCustomer",
  async (data) => {
    try {
      const response = await axios.put(`${path}/customer/${data.id}`, data.formData);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const getCustomerByIdAction = createAsyncThunk(
    "getCustomerById",
    async (id) => {
      try {
        const response = await axios.get(`${path}/customer/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );

export const deleteCustomerAction = createAsyncThunk(
  "deleteCustomer",
  async (id) => {
    try {
      const response = await axios.delete(`${path}/customer/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
)
