import { createSlice } from "@reduxjs/toolkit";
import {
  getCustomersAction,
  createCustomerAction,
  updateCustomerAction,
  getCustomerByIdAction,
  deleteCustomerAction,
} from "../actions/customerAction";

const initialState = {
  customers: {},
  customer: {},
  loading: true,
  error: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomersAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCustomersAction.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(getCustomersAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCustomerByIdAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCustomerByIdAction.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload;
      })
      .addCase(getCustomerByIdAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCustomerAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCustomerAction.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createCustomerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCustomerAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCustomerAction.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateCustomerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCustomerAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCustomerAction.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteCustomerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;
