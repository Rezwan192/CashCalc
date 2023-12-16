import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import expensesReducer from "./expensesSlice";
import budgetReducer from "./budgetSlice";
import totalIncomeReducer from "./totalIncomeSlice";
import totalExpensesReducer from "./totalExpensesSlice";
import { apiSlice } from "./apiSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    incomeData: incomeReducer,
    expensesData: expensesReducer,
    budgetData: budgetReducer,
    totalIncomeData: totalIncomeReducer,
    totalExpensesData: totalExpensesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
