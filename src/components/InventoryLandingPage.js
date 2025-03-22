import React, { useState, useEffect } from "react";
import "./InventoryLandingPage.css";
import InventorySnapshotChart from "./InventorySnapshotChart";
import OrderFulfillmentPieChart from "./OrderFulfillmentPieChart";
import StockMovementLineChart from "./StockMovementLineChart";
import FinancialMetricsTable from "./FinancialMetricsTable";

const InventoryLandingPage = () => {
const [activeMenu, setActiveMenu] = useState(null);
const [selectedKPI, setSelectedKPI] = useState([]); // ✅ Support multiple selections
const [showSupplierModal, setShowSupplierModal] = useState(false);
const [movementLogs, setMovementLogs] = useState([]);

const initialZones = [
  { zone: "A", status: "Idle", sku: 0, frozen: true },
  { zone: "B", status: "Receiving", sku: 5, frozen: false },
  { zone: "C", status: "Picking", sku: 7, frozen: false },
  { zone: "D", status: "Restocking", sku: 4, frozen: false },
];

const statusOptions = [
  { label: "Idle", color: "red", emoji: "🔴" },
  { label: "Receiving", color: "green", emoji: "🟢" },
  { label: "Picking", color: "orange", emoji: "🟠" },
  { label: "Restocking", color: "gold", emoji: "🟡" },
];

const [zoneData, setZoneData] = useState(initialZones);

useEffect(() => {
  const interval = setInterval(() => {
    setZoneData(prev =>
      prev.map(zone => {
        const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
        const isIdle = randomStatus.label === "Idle";
        return {
          ...zone,
          status: randomStatus.label,
          emoji: randomStatus.emoji,
          color: randomStatus.color,
          sku: isIdle ? zone.sku : zone.sku + Math.floor(Math.random() * 3),
          frozen: isIdle
        };
      })
    );
  }, 30000);

  return () => clearInterval(interval);
}, []);


const allLogs = [
  "📦 SKU-103 moved from Warehouse A → Warehouse B",
  "📦 SKU-208 scanned at Dock 3",
  "📦 SKU-451 tagged via RFID at Exit Gate",
  "📦 SKU-332 loaded onto Truck 2",
  "📦 SKU-890 relocated from Bay 5 to Bay 1",
  "📦 SKU-121 received at Inbound Dock",
  "📦 SKU-555 RFID ping from Packing Station"
];

useEffect(() => {
  const interval = setInterval(() => {
    setMovementLogs(prev => {
      const newLog = allLogs[Math.floor(Math.random() * allLogs.length)];
      return [newLog, ...prev].slice(0, 3); // keep latest 3 logs
    });
  }, 3000); // update every 3 seconds

  return () => clearInterval(interval); // cleanup on unmount
}, []);

const handleKpiClick = (kpi) => {
  setSelectedKPI(prev =>
    prev.includes(kpi)
      ? prev.filter(item => item !== kpi)  // Deselect
      : [...prev, kpi]                     // Add
  );
};

const toggleMenu = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };
  console.log("Selected KPI:", selectedKPI); // ✅ This is safe! 

 
  return (
    
    <div className="inventory-container">
      {/* Header Banner 
      <div className="banner">
      <img src="/logo.png" alt="Pentana Solutions" className="banner-logo" />
        <h1 className="banner-text">Power Inventory Landing Page</h1>
      </div>*/}
      {/*Replace it with this updated version*/}
      <div className="banner" style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 1rem"
}}>
  {/* Left - Logo */}
  <img src="/logo.png" alt="Power Inventory" className="banner-logo" />

  {/* Center - Title */}
  <h1 className="banner-text" style={{
    margin: 0,
    fontSize: "1.25rem",
    flexGrow: 1,
    textAlign: "center"
  }}>
    Power Inventory Landing Page
  </h1>

  {/* Right - Live Feed Summary */}
  <div style={{
    backgroundColor: "#e6f4ea",
    color: "#444",
    fontSize: "0.65rem",
    padding: "0.5rem",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    width: "230px",
    maxHeight: "60px",
    overflowY: "auto"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
  <strong style={{ fontSize: "0.7rem" }}>📡 Live Feed</strong>
  <span className="blinking-dot"></span>
</div>

<ul style={{
  padding: "0",
  margin: "0",
  listStyle: "none",
  textAlign: "left"
}}>
  {movementLogs.map((log, i) => (
    <li key={i} style={{
      marginBottom: "4px",
      textAlign: "left",
      wordBreak: "break-word"
    }}>{log}</li>
  ))}
</ul>

   </div>
   </div>
{/*Replace it with this updated version:*/}

      {/* Main Content with Three Sections */}
      <div className="main-content">
        {/* Left Pane - Smart Inventory Menu */}
        <div className="left-pane pane-bg">
          <ul className="menu">
            <li onClick={() => toggleMenu("overview")}>Inventory Overview & Quick Access</li>
            {activeMenu === "overview" && (
  <ul className="submenu">
    <li>Dashboard</li>
    <li>Search & Lookup</li>
    <li>Inventory Health</li>
    <li>Multi-Warehouse View</li>
  </ul>
  
)}  // ✅ Now correctly closed

            <li onClick={() => toggleMenu("stock")}>Stock & Warehouse Management</li>
            {activeMenu === "stock" && (
              <ul className="submenu">
                <li>Stock Levels</li>
                <li>Warehouse Operations</li>
                <li>Stock Adjustments</li>
              </ul>
            )}

            <li onClick={() => toggleMenu("orders")}>Order & Fulfillment Management</li>
            {activeMenu === "orders" && (
              <ul className="submenu">
                <li>Orders & Allocations</li>
                <li>Receiving & Putaway</li>
                <li>Picking & Packing</li>
                <li>Shipping & Dispatch</li>
              </ul>
            )}

            <li onClick={() => toggleMenu("pricing")}>Pricing & Financials</li>
            {activeMenu === "pricing" && (
              <ul className="submenu">
                <li>Pricing System Integration</li>
                <li>Supplier Invoice Management</li>
              </ul>
            )}

            <li onClick={() => toggleMenu("analytics")}>Analytics & Reporting</li>
            {activeMenu === "analytics" && (
              <ul className="submenu">
                <li>Stock Movement Report</li>
                <li>Inventory Forecasting</li>
                <li>Inventory Turnover Rate</li>
                <li>Audit & Compliance</li>
              </ul>
            )}

            <li onClick={() => toggleMenu("settings")}>Settings & User Management</li>
            {activeMenu === "settings" && (
              <ul className="submenu">
                <li>System Settings</li>
                <li>User Roles & Access Control</li>
                <li>Integrations</li>
              </ul>
            )}
         </ul>  {/* ✅ This closes <ul className="menu"> */}
         <div className="zone-activity-card">
  {/* 🏭 Warehouse Zone Activity card content will go here next */}
</div>

        {/* 🏭 Warehouse Zone Activity Card */}
<div style={{
  marginTop: "1rem",
  fontSize: "0.55rem",
  backgroundColor: "#ffffff", // bright white for better contrast
  border: "1px solid #888",
  borderRadius: "6px",
  padding: "6px",
  textAlign: "left",
  width: "calc(100% - 0.35cm)",
  boxShadow: "0 0 6px rgba(0,0,0,0.15)"
}}>
  <h4 style={{
    fontSize: "0.65rem",
    marginBottom: "6px",
    backgroundColor: "#007bff",
    color: "white",
    padding: "4px",
    borderRadius: "4px"
  }}>🏭 Warehouse Zone Activity</h4>
  <table style={{
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.5rem"
  }}>
    <thead>
      <tr style={{ backgroundColor: "#f0f0f0" }}>
        <th style={{ padding: "3px" }}>Zone</th>
        <th style={{ padding: "3px" }}>Status</th>
        <th style={{ padding: "3px" }}>SKU Count</th>
      </tr>
    </thead>
    <tbody>
      {zoneData.map((zone, idx) => (
        <tr key={idx} style={{
          backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#ffffff"
        }}>
          <td style={{ padding: "3px", fontWeight: "bold" }}>{zone.zone}</td>
          <td style={{
            padding: "3px",
            color: zone.color,
            fontWeight: zone.status === "Idle" ? "normal" : "bold"
          }}>
            {zone.emoji} {zone.status}
          </td>
          <td style={{ padding: "3px" }}>{zone.sku}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        </div>

       {/* Middle Pane with Two Subsections */}
       {showSupplierModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h3 className="modal-title">🏦 Supplier Score Breakdown</h3>
      <table className="modal-table">
        <thead>
          <tr>
            <th>Supplier #</th>
            <th>Name</th>
            <th>On-Time %</th>
            <th>Quality</th>
            <th>Fill Rate %</th>
            <th>Communication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SUP-001</td>
            <td>Global Auto Parts</td>
            <td>96%</td>
            <td>4.8</td>
            <td>98%</td>
            <td>4.5</td>
          </tr>
          <tr>
            <td>SUP-002</td>
            <td>Autotech Distributors</td>
            <td>92%</td>
            <td>4.5</td>
            <td>94%</td>
            <td>4.2</td>
          </tr>
          <tr>
            <td>SUP-003</td>
            <td>RapidSpare Supplies</td>
            <td>89%</td>
            <td>4.3</td>
            <td>90%</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>SUP-004</td>
            <td>Speedline Components</td>
            <td>94%</td>
            <td>4.7</td>
            <td>95%</td>
            <td>4.6</td>
          </tr>
        </tbody>
      </table>
      <button className="close-button" onClick={() => setShowSupplierModal(false)}>Close</button>
    </div>
  </div>
)}
   
<div className="middle-pane">
  {/* Upper Middle Pane with 2x2 Grid Dashboard Layout */}
  <div className="upper-middle-pane">
    <div className="dashboard-grid">
   {/* Real-Time Inventory Snapshot - Row 1 Left */}
<div className="dashboard-card first-quadrant">
  <h3 style={{ fontSize: "12px" }}>📦 Real-Time Inventory Snapshot</h3>
  <InventorySnapshotChart />
</div>
     {/* Order & Fulfillment Status - Row 1 Right */}
<div className="dashboard-card">
  <h3 style={{ fontSize: "12px", marginBottom: "4px" }}>🚚 Order & Fulfillment Status</h3>
  <OrderFulfillmentPieChart />
</div>
     {/* Stock Movement & Aging Report - Row 2 Left */}
<div className="dashboard-card">
  <h3 style={{ fontSize: "12px", marginBottom: "4px" }}>📊 Stock Movement & Aging Report</h3>
  <StockMovementLineChart />
</div>

      {/* Financial & Profitability Metrics - Row 2 Right */}
<div className="dashboard-card">
  <FinancialMetricsTable />
</div>

    </div>{/*this ends .upper-middle-pane*/}

{/* Lower Middle Pane - Label + 3 KPI Blocks */}
<div className="lower-middle-pane pane-bg" style={{
  width: "calc(100% - 38%)",
  margin: "0 auto",
  padding: "1rem",
  boxSizing: "border-box",
  overflowX: "hidden",
  minHeight: "200px" // Ajusting the heaight
}}>

  {/* Section Heading */}
  <div style={{ width: "100%" }}>
    <h2 style={{
      fontSize: "0.75rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "1rem"
    }}>
      🧭 Customised KPIs & Details
    </h2>
  </div>

  {/* KPI Card Container */}
  <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    textAlign: "left",
    flexWrap: "nowrap",
    width: "100%"
  }}>
    {/* ⏳ Aging Stock Report */}
    {selectedKPI.includes("Aging Stock") && (
      <div style={{
        fontSize: "0.55rem",
        color: "#444",
        width: "33.3%",
        flexShrink: 0
      }}>
        <h4 style={{ marginBottom: "0.5rem", fontSize: "0.7rem", fontWeight: "normal" }}>
          ⏳ Aging Stock Report
        </h4>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.55rem",
          textAlign: "left",
        }}>
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "white" }}>
              <th style={{ padding: "4px" }}>SKU</th>
              <th style={{ padding: "4px" }}>Days Old</th>
              <th style={{ padding: "4px" }}>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#f8f8f8" }}>
              <td style={{ padding: "4px" }}>BAT-245</td>
              <td style={{ padding: "4px" }}>110</td>
              <td style={{ padding: "4px" }}>Seasonal sales drop</td>
            </tr>
            <tr>
              <td style={{ padding: "4px" }}>OIL-678</td>
              <td style={{ padding: "4px" }}>95</td>
              <td style={{ padding: "4px" }}>Overstocked from bulk order</td>
            </tr>
            <tr style={{ backgroundColor: "#f8f8f8" }}>
              <td style={{ padding: "4px" }}>FLT-902</td>
              <td style={{ padding: "4px" }}>130</td>
              <td style={{ padding: "4px" }}>Late stock clearance</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}

    {/* 🤖 AI-Powered Slow-Moving Stock Report */}
    {selectedKPI.includes("AI-Powered Slow-Moving Stocks") && (
      <div style={{
        fontSize: "0.55rem",
        color: "#444",
        width: "33.3%",
        flexShrink: 0
      }}>
        <h4 style={{ marginBottom: "0.5rem", fontSize: "0.7rem", fontWeight: "normal" }}>
          🤖 AI-Powered Slow-Moving Stock Insights
        </h4>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.55rem",
          textAlign: "left",
        }}>
          <thead>
            <tr style={{ backgroundColor: "#28a745", color: "white" }}>
              <th style={{ padding: "4px" }}>SKU</th>
              <th style={{ padding: "4px" }}>Predicted Risk</th>
              <th style={{ padding: "4px" }}>Confidence</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <td style={{ padding: "4px" }}>ELE-889</td>
              <td style={{ padding: "4px" }}>High</td>
              <td style={{ padding: "4px" }}>92%</td>
            </tr>
            <tr>
              <td style={{ padding: "4px" }}>ENG-441</td>
              <td style={{ padding: "4px" }}>Moderate</td>
              <td style={{ padding: "4px" }}>85%</td>
            </tr>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <td style={{ padding: "4px" }}>BRK-775</td>
              <td style={{ padding: "4px" }}>High</td>
              <td style={{ padding: "4px" }}>90%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}

    {/* ⏱️ Supplier Lead Time Report */}
    {selectedKPI.includes("Lead Time") && (
      <div style={{
        fontSize: "0.55rem",
        color: "#444",
        width: "33.3%",
        flexShrink: 0
      }}>
        <h4 style={{ marginBottom: "0.5rem", fontSize: "0.7rem", fontWeight: "normal" }}>
          ⏱️ Supplier Lead Time Insights
        </h4>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.55rem",
          textAlign: "left",
        }}>
          <thead>
            <tr style={{ backgroundColor: "#ff9800", color: "white" }}>
              <th style={{ padding: "4px" }}>Supplier</th>
              <th style={{ padding: "4px" }}>Avg. Days</th>
              <th style={{ padding: "4px" }}>Last Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#fdf6ed" }}>
              <td style={{ padding: "4px" }}>Autotech Distributors</td>
              <td style={{ padding: "4px" }}>4.5</td>
              <td style={{ padding: "4px" }}>2 days ago</td>
            </tr>
            <tr>
              <td style={{ padding: "4px" }}>Global Auto Parts</td>
              <td style={{ padding: "4px" }}>5.1</td>
              <td style={{ padding: "4px" }}>Yesterday</td>
            </tr>
            <tr style={{ backgroundColor: "#fdf6ed" }}>
              <td style={{ padding: "4px" }}>RapidSpare Supplies</td>
              <td style={{ padding: "4px" }}>4.8</td>
              <td style={{ padding: "4px" }}>Today</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}

  </div> {/* End KPI card container */}
</div> {/* End Lower Middle Pane */}

  </div>{/*this ends .middle-pane*/}
        </div>

        {/* Right Pane - Smart KPIs Grouped & Hyperlinked with Tooltips */}
        <div className="right-pane-expanded pane-bg">
          <h3 className="kpi-header">Inventory KPIs</h3>

          <div className="kpi-group">
            <h4>Inventory Health & Stock</h4>
            <div className="kpi-list">
              <div title="Total monetary value of all stock currently held.">
                <a href="#">💰 Total Stock Value: $12.8M</a>
              </div>
              <div title="Number of times stock is sold and replaced over a given period.">
                <a href="#">🔄 Stock Turnover: 3.5x</a>
              </div>
              <div title="Percentage of warehouse space being utilized.">
                <a href="#">🏪 Warehouse Utilization: 82%</a>
              </div>
              <div title="Percentage of stock that has remained unsold for over 90 days.">
              <a href="#" onClick={(e) => { e.preventDefault(); handleKpiClick("Aging Stock"); }}>
                   ⏳ Aging Stock: 10% (90+ days) </a>

              </div>
            </div>
          </div>

          <div className="kpi-group">
            <h4>Order & Fulfillment</h4>
            <div className="kpi-list">
              <div title="Percentage of orders fulfilled completely without issues.">
                <a href="#">✅ Order Fill Rate: 97.6%</a>
              </div>
              <div title="Average time taken to process and ship an order.">
                <a href="#">⚡ Processing Speed: 2.2 hrs</a>
              </div>
              <div title="Percentage of orders shipped without errors or delays.">
                <a href="#">📦 Perfect Order Rate: 91.2%</a>
              </div>
            </div>
          </div>

          <div className="kpi-group">
            <h4>Supplier & Procurement</h4>
            <div className="kpi-list">
              <div title="Overall performance score of suppliers based on delivery accuracy and timeliness.">
              <a href="#" onClick={(e) => { e.preventDefault(); setShowSupplierModal(true); }}>
                  🏦 Supplier Score: 95% </a>
              </div>
              <div title="Average time taken for suppliers to deliver inventory.">
              <a href="#" onClick={(e) => { e.preventDefault(); handleKpiClick("Lead Time"); }}>
                     ⏳ Lead Time: Avg. 4.8 days </a>
              </div>
            </div>
          </div>

          <div className="kpi-group">
            <h4>Financial Performance</h4>
            <div className="kpi-list">
              <div title="Profitability measure of inventory, showing return per dollar invested.">
                <a href="#">📊 GMROI: 4.2x</a>
              </div>
              <div title="Recent trend in Cost of Goods Sold (COGS).">
                <a href="#">📉 COGS Trend: Down 1.8%</a>
              </div>
              <div title="Percentage of revenue spent on holding inventory.">
                <a href="#">🏢 Holding Cost: 1.5%</a>
              </div>
            </div>
          </div>

          <div className="kpi-group">
            <h4>AI-Driven Insights & Predictions</h4>
            <div className="kpi-list">
              <div title="Accuracy of AI-based demand forecasting models.">
                <a href="#">🧠 AI Forecast Accuracy: 93.5%</a>
              </div>
              <div title="Number of SKUs identified as overstocked by AI analysis.">
              <a href="#" onClick={(e) => { e.preventDefault(); handleKpiClick("AI-Based Overstock Alert"); }}>
                   ⚠️ AI-Based Overstock Alert: 7 SKUs </a>

              </div>
              <div title="Percentage of inventory flagged as slow-moving by AI models.">
              <a href="#" onClick={(e) => { e.preventDefault(); handleKpiClick("AI-Powered Slow-Moving Stocks"); }}>
                    ⏳ AI-Powered Slow-Moving Stock: 5.6% </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryLandingPage;