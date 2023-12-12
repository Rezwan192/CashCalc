import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import expensesReducer from "./expensesSlice";
import budgetReducer from "./budgetSlice";
import { apiSlice } from "./apiSlice";
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    incomeData: incomeReducer,
    expensesData: expensesReducer,
    budgetData: budgetReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});