import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";
import { selectId } from "./authSlice";

export const apiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/cashcalc/` }),
  endpoints: (builder) => ({
    getMonthlyIncome: builder.query({
      query: (Id) => ({
        url: `${Id}/income`,
        method: "GET",
      }),
    }),
    getMonthlyExpenses: builder.query({
      query: (Id) => ({
        url: `${Id}/expenses`,
        method: "GET",
      }),
    }),
    getBudget: builder.query({
      query: (Id) => ({
        url: `${Id}/budget`,
        method: "GET",
      }),
    }),
    updateMonthlyIncome: builder.mutation({
      query: ({ Id, incomeData }) => {
        return {
          url: `${Id}/income`,
          method: "PUT",
          body: incomeData,
        };
      },
    }),
    updateMonthlyExpenses: builder.mutation({
      query: ({ Id, expensesData }) => {
        return {
          url: `${Id}/expenses`,
          method: "PUT",
          body: expensesData,
        };
      },
    }),
    updateBudget: builder.mutation({
      query: ({ Id, budgetData }) => {
        return {
          url: `${Id}/budget`,
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
