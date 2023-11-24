import { useState, React } from "react";
import renderGraph from "./Graph";
import renderSavings from "./savingsGraph";
import renderSpent from "./spentGraph";
import "./Dashboard.css";

//Add <Link to="/Dashboard">Dashboard</Link> in layout to view dashboard

function Dashboard() {
  //stub values, may be useful to update vars by state
  const [Income, setIncome] = useState("100");
  const [Expenses, setExpenses] = useState("100");
  const [Spent, setSpent] = useState("100");

  return (
    <>
      <h1 className="centerText">Dashboard</h1>

      <div className="incExpenses">
        Income and Expenses
        <renderGraph>{renderGraph}</renderGraph>
      </div>

      <div className="savings">
        Your Savings in 2023
        <renderSavings>{renderSavings}</renderSavings>
      </div>

      <div className="displayIncExpenses">
        Income Expenses <br />
        {Income} {Expenses}
      </div>

      <div className="spent">
        Spent <br />
        {Spent}
        <renderSpent>{renderSpent}</renderSpent>
      </div>
    </>
  );
}

export default Dashboard;
