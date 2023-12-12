import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "incomeData",
  initialState: {
    monthly_income: [], 
  },
  reducers: {
    // Push new income object to array
    addIncome: (state, action) => {
      state.monthly_income.push(action.payload); 
    },
    // Update income object by income_id
    updateIncome: (state, action) => {
      const index = state.monthly_income.findIndex(
        (income) => income.income_id === action.payload.income_id
      );
      if (index !== -1) {
        state.monthly_income[index] = action.payload;
      }
    },
    // Remove income object by income_id
    removeIncome: (state, action) => {
      state.monthly_income = state.monthly_income.filter(
        (income) => income.income_id !== action.payload
      );
    },
  },
});

export const { addIncome, updateIncome, removeIncome } = incomeSlice.actions;

export default incomeSlice.reducer;