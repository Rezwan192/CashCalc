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

  const temp1 = []; //in place of incArray in renderGraph
  const temp2 = []; //in place of expArray in renderSpent

  /*
  const incArray = JSON.parse(JSON.stringify(fetchedIncomeData));
  const expArray = JSON.parse(JSON.stringify(fetchedExpensesData));
  console.log(incArray);
  */

  const renderGraph = (
    <LineChart width={700} height={300} data={temp1}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      <XAxis dataKey="name" />
      <Tooltip />
    </LineChart>
  );

  const renderSpent = (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="amount"
        data={temp2}
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
