import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { selectId } from './authSlice';


export const apiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/cashcalc/` }),
  endpoints: (builder) => ({
    // ... other endpoints

    updateMonthlyIncome: builder.mutation({
      query: ( Id, incomeData) => {
        return {
          url: `${Id}/income`, 
          method: 'PUT',
          body: incomeData, 
        };
      },
    }),
  }),
});

export const { useGetMonthlyIncomeQuery, useUpdateMonthlyIncomeMutation } = apiSlice;
