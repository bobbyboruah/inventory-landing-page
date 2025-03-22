import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", fast: 200, slow: 80, aging: 50 },
  { month: "Feb", fast: 220, slow: 85, aging: 55 },
  { month: "Mar", fast: 250, slow: 90, aging: 60 },
  { month: "Apr", fast: 270, slow: 95, aging: 65 },
  { month: "May", fast: 300, slow: 100, aging: 70 },
  { month: "Jun", fast: 310, slow: 110, aging: 75 },
];

const StockMovementLineChart = () => {
  return (
    <div style={{ width: "4in", height: "1.5in", position: "relative" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="fast" stroke="#28a745" name="Fast-Moving SKUs" />
          <Line type="monotone" dataKey="slow" stroke="#ffc107" name="Slow-Moving SKUs" />
          <Line type="monotone" dataKey="aging" stroke="#dc3545" name="Aging Stock (90+ days)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockMovementLineChart;
