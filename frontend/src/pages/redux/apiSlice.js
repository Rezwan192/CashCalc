import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { selectId } from './authSlice';


export const apiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/cashcalc/` }),
  endpoints: (builder) => ({
    // ... other endpoints

    updateMonthlyIncome: builder.mutation({
      query: ( {Id, incomeData}) => {
        return {
          url: `${Id}/income`, 
          method: 'PUT',
          body: incomeData, 
        };
      },
    }),

    UpdateUsername: builder.mutation({
      query: ( {Id, newName}) => {
        console.log(Id);
        console.log(newName);
        return {
          url: `edit/update-profile-name/${Id}`, 
          method: 'PUT',
          body: newName, 
        };
      },
    }),

    UpdateEmailAndPassword: builder.mutation({
      query: ( {Id, data}) => {
        console.log(Id);
        console.log(data);
        return {
          url: `edit/update-passwordAndEmail/${Id}`, 
          method: 'PUT',
          body: data, 
        };
      },
    }),

    UpdateProfileImage: builder.mutation({
    query: ({ id, file }) => {
    const formData = new FormData();
    formData.append('image', file);

    console.log(formData);

    return {
      url: `edit/uploadImage/${id}`,
      method: 'POST',
      body: formData,
      headers: {
        // Note: Do not set Content-Type here, as it will be automatically set by FormData.
        
      },
    };
  },
}),

showUserDetails: builder.mutation({
  query: ( {Id}) => {
        console.log(Id);
        return {
          url: `cashcalc/getUserData/${Id}`, 
          method: 'GET',
        };
      },

})

  }),
});

export const { useGetMonthlyIncomeQuery, useUpdateMonthlyIncomeMutation } = apiSlice;
export const { useUpdateUsernameMutation } = apiSlice;
export const { useUpdateEmailAndPasswordMutation } = apiSlice;
export const { useUpdateProfileImageMutation } = apiSlice;
