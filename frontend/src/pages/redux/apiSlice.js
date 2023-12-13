import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";
import { selectId } from "./authSlice";

export const apiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/cashcalc/` }),
  endpoints: (builder) => ({
    getMonthlyIncome: builder.query({
      query: (Id) => ({
        url: `income/${Id}`,
        method: "GET",
      }),
    }),
    getMonthlyExpenses: builder.query({
      query: (Id) => ({
        url: `expenses/${Id}`,
        method: "GET",
      }),
    }),
    getBudget: builder.query({
      query: (Id) => ({
        url: `budget/${Id}`,
        method: "GET",
      }),
    }),
    updateMonthlyIncome: builder.mutation({
      query: ({ Id, incomeData }) => {
        return {
          url: `income/${Id}`,
          method: "PUT",
          body: incomeData,
        };
      },
    }),
    updateMonthlyExpenses: builder.mutation({
      query: ({ Id, expensesData }) => {
        return {
          url: `expenses/${Id}`,
          method: "PUT",
          body: expensesData,
        };
      },
    }),
    updateBudget: builder.mutation({
      query: ({ Id, budgetData }) => {
        return {
          url: `budget/${Id}`,
          method: "PUT",
          body: budgetData,
        };
      },
    }),
  }),
});

export const {
  useGetMonthlyIncomeQuery,
  useGetMonthlyExpensesQuery,
  useGetBudgetQuery,
  useUpdateMonthlyIncomeMutation,
  useUpdateMonthlyExpensesMutation,
  useUpdateBudgetMutation,
} = apiSlice;
