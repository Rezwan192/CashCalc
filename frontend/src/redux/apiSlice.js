import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/cashcalc' }), 
  endpoints: (builder) => ({
    // Get monthly income array by userId
    getMonthlyIncome: builder.query({
      query: (id) => `${id}/income`, 
    }),
    // Add entry to monthly income array by userId
    updateMonthlyIncome: builder.mutation({
      query: ({ id, incomeData }) => ({
        url: `${id}/income`,
        method: 'PUT',
        body: incomeData, 
      }),
    }),
  }),
});

export const { useGetMonthlyIncomeQuery, useUpdateMonthlyIncomeMutation } = apiSlice;