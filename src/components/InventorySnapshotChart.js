import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const data = [
  { name: "Total Stock", value: 5000 },
  { name: "Critical Alerts", value: 1000 },
  { name: "Turnover Rate", value: 2000 },
  { name: "Backorders", value: 800 },
  { name: "Reserved", value: 1200 },
];

const colors = ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f"];

const InventorySnapshotChart = () => {
  return (
    <div style={{ width: "4.5in", height: "100px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 5, bottom: 3, left: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" fontSize={10} />
          <YAxis type="category" dataKey="name" fontSize={10} width={100} />
          <Tooltip />
          <Bar dataKey="value">
            <LabelList dataKey="value" position="right" fontSize={10} />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventorySnapshotChart;
