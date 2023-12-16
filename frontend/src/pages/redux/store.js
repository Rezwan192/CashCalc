import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import { apiSlice } from "./apiSlice";
import authReducer from './authSlice';
import profileImageReducer from './profileImageSlice';
import userAccountInfoSlice from "./userAccountInfoSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
    incomeData: incomeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    profileImage: profileImageReducer,
    userAccountInfo: userAccountInfoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});