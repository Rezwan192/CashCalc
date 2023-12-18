import { AreaChart, Area, XAxis } from "recharts";

const data = [
  { name: "J", val: 400 },
  { name: "F", val: 300 },
  { name: "M", val: 200 },
  { name: "A", val: 300 },
];

const renderSavings = (
  <AreaChart width={300} height={300} data={data}>
    <Area type="monotone" dataKey="val" stroke="#8884d8" />
    <XAxis dataKey="name" />
  </AreaChart>
);

export default renderSavings;