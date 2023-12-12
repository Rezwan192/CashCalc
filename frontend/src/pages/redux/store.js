import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import { apiSlice } from "./apiSlice";
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    incomeData: incomeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});