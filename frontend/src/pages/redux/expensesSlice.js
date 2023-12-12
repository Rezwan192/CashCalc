import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "expensesData",
  initialState: {
    monthly_expenses: [], 
  },
  reducers: {
    // Push new expense object to array
    addExpense: (state, action) => {
      state.monthly_expenses.push(action.payload); 
    },
    // Update expense object by income_id
    updateExpense: (state, action) => {
      const index = state.monthly_expenses.findIndex(
        (expenses) => expenses.expense_id === action.payload.expense_id
      );
      if (index !== -1) {
        state.monthly_expenses[index] = action.payload;
      }
    },
    // Remove expense object by income_id
    removeExpense: (state, action) => {
      state.monthly_expenses = state.expenses.filter(
        (expenses) => expenses.expense_id !== action.payload
      );
    },
  },
});

export const { addExpense, updateExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;