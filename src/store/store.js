import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slice/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerSlice,
  },
  
});
export default store;
