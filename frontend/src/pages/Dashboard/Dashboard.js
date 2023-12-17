import { useState, React } from "react";
import { LineChart, Line, XAxis, Tooltip, PieChart, Pie } from "recharts";
import renderSavings from "./savingsGraph";
import {
  useGetMonthlyIncomeQuery,
  useGetMonthlyExpensesQuery,
} from "../redux/apiSlice";
import { selectId } from "../redux/authSlice";
import { useSelector } from "react-redux";
import "./Dashboard.css";

function Dashboard() {
  //TODO: figure out dislay of savings and expenses right tab
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

  //temp array to leave "spent" div blank
  const tempArray2 = [];
  //copies monthly_income to incArray
  const incArray = fetchedIncomeData;
  //copies monthly_expenses to expArray
  const expArray = fetchedExpensesData;
  //cocats expArray to incArray,
  const concatArray = incArray.concat(expArray);
  //test to view concat success, will remove later
  console.log(concatArray);

  //map function to format Date field to remove clock
  let modifiedArr = concatArray.map(function (e) {
    return {
      ...e,
      date: new Date(e.date).toISOString().split("T")[0],
    };
  });
  //sorts Date in array from earliest date in x month to most current date in x month
  modifiedArr.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  //test to view format in console, will remove later
  console.log(modifiedArr);
  //to replace graph represenation, remove modifiedArr to array of choosing
  const renderGraph = (
    <LineChart width={700} height={300} data={modifiedArr}>
      <Line type="monotone" dataKey="incomeAmount" stroke="#8884d8" />
      <Line type="monotone" dataKey="expenseAmount" stroke="FF0000" />
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
