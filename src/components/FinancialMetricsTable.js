import React from "react";

const financialData = [
  { metric: "Total Inventory Value", value: "$5.6M", change: "+2.1%" },
  { metric: "Gross Margin ROI (GMROI)", value: "4.5x", change: "-0.5%" },
  { metric: "Holding Cost", value: "2.1%", change: "+0.3%" },
  { metric: "COGS Trend", value: "$3.2M", change: "-1.8%" },
];

const FinancialMetricsTable = () => {
  return (
    <div style={{ width: "4in", height: "1.5in", padding: "10px", overflow: "hidden" }}>
      <h3 style={{ fontSize: "12px", marginBottom: "4px" }}>💰 Financial & Profitability Metrics</h3>
      <table style={{ width: "100%", fontSize: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th style={{ padding: "5px", textAlign: "left" }}>Metric</th>
            <th style={{ padding: "5px", textAlign: "right" }}>Value</th>
            <th style={{ padding: "5px", textAlign: "right" }}>Change</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef" }}>
              <td style={{ padding: "5px" }}>{row.metric}</td>
              <td style={{ padding: "5px", textAlign: "right" }}>{row.value}</td>
              <td
                style={{
                  padding: "5px",
                  textAlign: "right",
                  color: row.change.includes("+") ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {row.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialMetricsTable;
