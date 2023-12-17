import { useState, React } from "react";
import { LineChart, Line, XAxis, Tooltip, PieChart, Pie } from "recharts";
import renderSavings from "./savingsGraph";
import {
  useGetMonthlyIncomeQuery,
  useGetMonthlyExpensesQuery,
  useGetBudgetQuery,
} from "../redux/apiSlice";
import { selectId } from "../redux/authSlice";
import { useSelector } from "react-redux";
import "./Dashboard.css";

function Dashboard() {
  /*
        {isIncomeLoading ? (
          <p>Loading income data...</p>
        ) : incomeError ? (
          <p>Error loading income data</p>
        ) : fetchedIncomeData ? (
          <>incArray = JSON.parse(JSON.stringify(fetchedIncomeData))</>
        ) : null}
*/

  //TODO: solve undefined parse error, figure out dislay of savings and expenses right tab
  const [Income, setIncome] = useState("100");
  const [Expenses, setExpenses] = useState("100");
  const [Spent, setSpent] = useState("100");

  const Id = useSelector((state) => selectId(state));
  const stringId = Id.toString();

  const {
    data: fetchedIncomeData,
    error: incomeError,
    isLoading: isIncomeLoading,
  } = useGetMonthlyIncomeQuery(stringId);
  const {
    data: fetchedExpensesData,
    error: expensesError,
    isLoading: isExpensesLoading,
  } = useGetMonthlyExpensesQuery(stringId);
  const {
    data: fetchedBudgetData,
    error: budgetError,
    isLoading: isBudgetLoading,
  } = useGetBudgetQuery(stringId);

  //const tempArray1 = fetchedIncomeData;
  const tempArray2 = [];

  const incArray = fetchedIncomeData;
  /*
  let modifiedIncArr = incArray.map(function (incArrayTime) {
    return {
      ...incArrayTime,
      date: new Date(incArrayTime.date).toISOString().split("T")[0],
    };
  });
  modifiedIncArr.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
  //const expArray = JSON.parse(JSON.stringify(fetchedExpensesData));
  */
  console.log(incArray);
  const renderGraph = (
    <LineChart width={700} height={300} data={incArray}>
      <Line type="monotone" dataKey="incomeAmount" stroke="#8884d8" />
      <XAxis dataKey="date" />
      <Tooltip />
    </LineChart>
  );

  const renderSpent = (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="expenseAmount"
        data={tempArray2}
        cx={200} //positioning on x-axis
        cy={200} //positioning on y-axis
        innerRadius={60} //affects inner circle in pie
        outerRadius={90} //affects pie itself
        paddingAngle={5} //distance between segmented bars
        fill="FF0000" //determines color in pie
      />
      <Tooltip />
    </PieChart>
  );

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
        <section>
          Income Expenses <br />{" "}
        </section>
        {Income}
        {Expenses}
      </div>

      <div className="spent">
        Spent <br />
        {Spent}
        <renderSpent>{renderSpent}</renderSpent>
      </div>

      <div className="expenses">
        <section>---------------------------------------</section>
        <section className="color">Expenses</section>
        <body>
          Rent: 1000$ <br />
          Food: 500$ <br />
          Transportation: 200$ <br />
          Other: 300$
        </body>
        <section className="bold">
          ---------------------------------------
        </section>
      </div>
    </>
  );
}

export default Dashboard;
