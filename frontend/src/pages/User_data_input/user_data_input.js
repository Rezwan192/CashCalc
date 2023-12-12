import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../redux/incomeSlice";
import { addExpense } from "../redux/expensesSlice";
import {
  useUpdateMonthlyIncomeMutation,
  useUpdateMonthlyExpensesMutation,
  useUpdateBudgetMutation,
} from "../redux/apiSlice";
import { selectId } from "../redux/authSlice";
import { addBudget } from "../redux/budgetSlice";

export default function User_Data_Input() {
  const { monthly_income } = useSelector((state) => state.incomeData);
  const { monthly_expenses } = useSelector((state) => state.expensesData);
  const { budget } = useSelector((state) => state.budgetData);

  const [mutateIncome] = useUpdateMonthlyIncomeMutation();
  const [mutateExpenses] = useUpdateMonthlyExpensesMutation();
  const [mutateBudget] = useUpdateBudgetMutation();

  const Id = useSelector((state) => selectId(state));
  const stringId = Id.toString();

  const dispatch = useDispatch();

  // Set empty budget value
  const [budgetData, setBudgetData] = useState("");

  // Set an empty income object
  const [incomeData, setIncomeData] = useState({
    source: "",
    category: "",
    date: "",
    amount: "",
  });

  // Set an empty expense object
  const [expensesData, setExpensesData] = useState({
    recipient: "",
    category: "",
    date: "",
    amount: "",
  });

  const handleBudgetInputChange = (event) => {
    // Set budgetData
    setBudgetData(event.target.value);
  };

  const handleIncomeInputChange = (event, field) => {
    // Set key-value pairs for each field in incomeData
    setIncomeData({
      ...incomeData,
      [field]: event.target.value,
    });
  };

  const handleExpenseInputChange = (event, field) => {
    // Set key-value pairs for each field in expensesData
    setExpensesData({
      ...expensesData,
      [field]: event.target.value,
    });
  };

  const handleSubmitBudget = async () => {
    // Update the global state
    dispatch(addBudget(budgetData));
    // Update the database
    try {
      await mutateBudget({ Id: stringId, budgetData: budgetData });
    } catch (error) {
      console.error("Error updating budget:", error);
    }
    // Reset budgetData for subsequent entries
    setBudgetData("");
  };

  const handleSubmitIncome = async () => {
    // Update the global state
    dispatch(addIncome(incomeData));
    // Update the database
    try {
      await mutateIncome({ Id: stringId, incomeData: incomeData });
    } catch (error) {
      console.error("Error updating monthly income:", error);
    }
    // Reset incomeData for subsequent entries
    setIncomeData({
      source: "",
      category: "",
      date: "",
      amount: "",
    });
  };

  const handleSubmitExpense = async () => {
    // Update the global state
    dispatch(addExpense(expensesData));
    // Update the database
    try {
      await mutateExpenses({ Id: stringId, expensesData: expensesData });
    } catch (error) {
      console.error("Error updating monthly expenses:", error);
    }
    // Reset expenseData for subsequent entries
    setExpensesData({
      recipient: "",
      category: "",
      date: "",
      amount: "",
    });
  };

  return (
    <div>
      <h2>Get Started</h2>
      <h3>Enter Budget</h3>
      <label>
        Budget:
        <input
          type="number"
          value={budgetData}
          onChange={(e) => handleBudgetInputChange(e)}
          placeholder="Enter budget"
        />
      </label>
      <br />
      <button onClick={handleSubmitBudget}>Submit</button>
      <p>Current Budget: {budget}</p>
      <h3>Enter Monthly Income</h3>
      <label>
        Source:
        <input
          type="text"
          value={incomeData.source}
          onChange={(e) => handleIncomeInputChange(e, "source")}
          placeholder="Enter income source"
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={incomeData.category}
          onChange={(e) => handleIncomeInputChange(e, "category")}
          placeholder="Enter income category"
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={incomeData.date}
          onChange={(e) => handleIncomeInputChange(e, "date")}
          placeholder="Enter date in format: YYYY-MM-DD"
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={incomeData.amount}
          onChange={(e) => handleIncomeInputChange(e, "amount")}
          placeholder="Enter amount"
        />
      </label>
      <br />
      <button onClick={handleSubmitIncome}>Submit</button>
      {monthly_income.map((incomeEntry, index) => (
        <div key={index}>
          <p>Source: {incomeEntry.source}</p>
          <p>Category: {incomeEntry.category}</p>
          <p>Date: {incomeEntry.date}</p>
          <p>Amount: {incomeEntry.amount}</p>
        </div>
      ))}
      <h3>Enter Monthly Expenses</h3>
      <label>
        Recipient:
        <input
          type="text"
          value={expensesData.recipient}
          onChange={(e) => handleExpenseInputChange(e, "recipient")}
          placeholder="Enter expense recipient"
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={expensesData.category}
          onChange={(e) => handleExpenseInputChange(e, "category")}
          placeholder="Enter expense category"
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={expensesData.date}
          onChange={(e) => handleExpenseInputChange(e, "date")}
          placeholder="Enter date in format: YYYY-MM-DD"
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={expensesData.amount}
          onChange={(e) => handleExpenseInputChange(e, "amount")}
          placeholder="Enter amount"
        />
      </label>
      <br />
      <button onClick={handleSubmitExpense}>Submit</button>
      {monthly_expenses.map((expenseEntry, index) => (
        <div key={index}>
          <p>Recipient: {expenseEntry.recipient}</p>
          <p>Category: {expenseEntry.category}</p>
          <p>Date: {expenseEntry.date}</p>
          <p>Amount: {expenseEntry.amount}</p>
        </div>
      ))}
    </div>
  );
}
