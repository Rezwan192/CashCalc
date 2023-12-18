import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import { apiSlice } from "./apiSlice";
import authReducer from './authSlice';
import profileImageReducer from './profileImageSlice';
import userAccountInfoSlice from "./userAccountInfoSlice";
import expensesReducer from "./expensesSlice";
import budgetReducer from "./budgetSlice";
import totalIncomeReducer from "./totalIncomeSlice";
import totalExpensesReducer from "./totalExpensesSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
    incomeData: incomeReducer,
    expensesData: expensesReducer,
    budgetData: budgetReducer,
    totalIncomeData: totalIncomeReducer,
    totalExpensesData: totalExpensesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    profileImage: profileImageReducer,
    userAccountInfo: userAccountInfoSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});