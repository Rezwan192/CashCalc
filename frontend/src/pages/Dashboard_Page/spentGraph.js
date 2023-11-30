import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Jan", val: 400 },
  { name: "Feb", val: 300 },
  { name: "Mar", val: 200 },
  { name: "Apr", val: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderSpent = (
  <PieChart width={400} height={400}>
    <Pie
      dataKey="val"
      data={data}
      cx={200} //positioning on x-axis
      cy={200} //positioning on y-axis
      innerRadius={60} //affects inner circle in pie
      outerRadius={90} //affects pie itself
      paddingAngle={5} //distance between segmented bars
      fill="FF0000" //determines color in pie
    />
    {data.map((e, index) => (
      <Cell key={e.val} fill={COLORS[index % COLORS.length]} />
    ))}
  </PieChart>
);

export default renderSpent;
