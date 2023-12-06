import { LineChart, Line, XAxis } from "recharts"; //YAxis to import y-axis

const data = [
  { name: "J", val: 400 },
  { name: "Feb", val: 300 },
  { name: "Mar", val: 200 },
  { name: "Apr", val: 300 },
  { name: "May", val: 400 },
  { name: "Jun", val: 500 },
];

//stroke determines color in hexadecimal
const renderGraph = (
  <LineChart width={700} height={300} data={data}>
    <Line type="monotone" dataKey="val" stroke="#8884d8" />
    <XAxis dataKey="name" />
  </LineChart>
);

export default renderGraph;
