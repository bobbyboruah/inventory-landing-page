import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Pending Orders", value: 48, color: "#ff6b6b" }, // Red
  { name: "Orders in Transit", value: 29, color: "#1e90ff" }, // Blue
  { name: "Processing Speed", value: 24, color: "#32a852" }, // Green
];

const OrderFulfillmentPieChart = () => {
  return (
    <div style={{ width: "4in", height: "1.5in", position: "relative" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%" /* Moves pie chart slightly up */
            outerRadius={45}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconSize={10}
            wrapperStyle={{ fontSize: "10px" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          fontSize: "10px",
          textAlign: "center",
          marginTop: "-10px", /* Moves text up */
          color: "#333",
          position: "absolute",
          width: "100%",
          bottom: "5px", /* Positions text closer to the chart */
        }}
      >
        ⚡ Avg. Processing Speed: <strong>2.4 hrs</strong>
      </div>
    </div>
  );
};

export default OrderFulfillmentPieChart;
