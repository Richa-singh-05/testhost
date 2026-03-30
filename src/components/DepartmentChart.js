import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dept1", value: 28 },
  { name: "Dept2", value: 7 },
  { name: "Dept3", value: 12 },
  { name: "Dept4", value: 39 },
  { name: "Dept5", value: 32 },
  { name: "Dept6", value: 8 },
];

function DepartmentChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4f46e5" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DepartmentChart;