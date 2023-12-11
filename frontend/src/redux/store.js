import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import { apiSlice } from "./apiSlice";

export default configureStore({
  reducer: {
    incomeData: incomeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
