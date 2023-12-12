import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
  name: "budgetData",
  initialState: {
    budget: 0, 
  },
  reducers: {
    // Update budget
    addBudget: (state, action) => {
      state.budget = action.payload; 
    },
  },
});

export const { addBudget } = budgetSlice.actions;

export default budgetSlice.reducer;