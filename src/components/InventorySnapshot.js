import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const InventoryChart = () => {
  // Dummy data with fallback values
  const data = [
    { category: "Total Stock", value: 15320 },
    { category: "Critical Stock Alerts", value: 12 || 5 },
    { category: "Stock Turnover Rate", value: 3.8 || 1.5 },
  ];

  return (
    <div className="inventory-chart-container" style={{ width: "1in", height: "1in" }}>
      <h4 style={{ fontSize: "10px", marginBottom: "5px" }}>Inventory Snapshot</h4>
      <ResponsiveContainer width="100%" height={60}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <XAxis dataKey="category" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryChart;
