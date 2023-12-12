import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../redux/incomeSlice";
import { useUpdateMonthlyIncomeMutation } from "../redux/apiSlice";
import { selectId } from "../redux/authSlice";

export default function User_Data_Input() {
  const { monthly_income } = useSelector((state) => state.incomeData);
  const dispatch = useDispatch();
  const [mutate] = useUpdateMonthlyIncomeMutation();
  const Id = useSelector((state) => selectId(state)); // Use useSelector to get the current state

  // Set an empty income object
  const [incomeData, setIncomeData] = useState({
    source: "",
    category: "",
    date: null,
    amount: null,
  });

  const handleInputChange = (event, field) => {
    // Set key-value pairs for each field in incomeData
    setIncomeData({
      ...incomeData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    // Update the global state
    dispatch(addIncome(incomeData));
    // Update the database
    console.log('Id:', Id);
    try { 
 await mutate(Id.toString(), incomeData);
    } catch (error) {
      console.error("Error updating monthly income:", error);
    }
    // Reset incomeData for subsequent entries
    setIncomeData({
      source: "",
      category: "",
      date: null,
      amount: 0,
    });
  };

  return (
    <div>
      <label>
        Source:
        <input
          type="text"
          value={incomeData.source}
          onChange={(e) => handleInputChange(e, "source")}
          placeholder="Enter income source"
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={incomeData.category}
          onChange={(e) => handleInputChange(e, "category")}
          placeholder="Enter income category"
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={incomeData.date}
          onChange={(e) => handleInputChange(e, "date")}
          placeholder="Enter date in format: YYYY-MM-DD"
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={incomeData.amount}
          onChange={(e) => handleInputChange(e, "amount")}
          placeholder="Enter amount"
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {monthly_income.map((incomeEntry, index) => (
        <div key={index}>
          <p>Source: {incomeEntry.source}</p>
          <p>Category: {incomeEntry.category}</p>
          <p>Date: {incomeEntry.date}</p>
          <p>Amount: {incomeEntry.amount}</p>
        </div>
      ))}
    </div>
  );
}