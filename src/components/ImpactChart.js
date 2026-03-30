import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Efficiency", value: 6 },
  { name: "New Service", value: 6 },
  { name: "Revenue", value: 4 },
  { name: "Others", value: 8 },
];

const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

function ImpactChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="value" outerRadius={80}>
          {data.map((entry, i) => (
            <Cell key={i} fill={colors[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ImpactChart;