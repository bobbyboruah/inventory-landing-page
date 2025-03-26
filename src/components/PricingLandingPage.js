import React, { useState } from "react";
import ModalPopup from "./ModalPopup";

export default function PricingLandingPage() {
  const [modalMessage, setModalMessage] = useState(null);

  {/* Simulation Test Drive states */}
  const [simProduct, setSimProduct] = useState("PN-55601");
  const [simCost, setSimCost] = useState(70);
  const [simMarkup, setSimMarkup] = useState(40);
  const [searchInput, setSearchInput] = useState("");
  const tips = [
    "Don’t chase volume with price. Protect your margin.",
    "Simulate before you publish to avoid pricing shocks.",
    "Watch for supplier cost creep over time.",
    "Use markup consistently across similar segments.",
    "Bundle low-margin options with high-margin services.",
  ];
  
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  

  return (
    <div className="h-screen flex flex-col bg-gray-50 text-sm">
      {modalMessage && (
  <ModalPopup message={modalMessage} onClose={() => setModalMessage(null)} />
)}

      {/* ✅ Top Bar */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div className="flex-1 flex px-6 py-4 space-x-4">

        <img
  src="/logo.png"
  alt="Pentana Solutions Logo"
  className="h-10"
/>

          <div className="text-gray-500">| DistributePower Pricing</div>
        </div>
        <div className="flex items-center space-x-4">
        <input
  type="text"
  placeholder="Search product, supplier..."
  value={searchInput}
  onChange={(e) => {
    const val = e.target.value;
    setSearchInput(val);
    if (val.length >= 3) {
      setModalMessage(
        "This is a mockup for Demo. Actual Pricing System is in Development Phase"
      );
    }
  }}
  className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


          <span className="text-gray-600">🔔</span>
          <span className="text-gray-600">👤 John</span>
        </div>
      </header>
      {/* Pricing Tips */}
      <div className="bg-yellow-50 text-yellow-800 text-sm px-6 py-2 border-b border-yellow-200">
  💡 <span className="font-semibold">Tip of the Day:</span> {randomTip}
</div>


      {/* ✅ Page Body */}
      <div className="flex flex-1">
        {/* Left Panel */}
        <aside className="w-1/4 border-r p-4 space-y-4 bg-white">
          
        <div className="bg-white border rounded-lg shadow px-4 py-3">
        <div className="bg-white border rounded-lg shadow p-4 hover:bg-yellow-200 cursor-pointer transition">
  
</div>

<h2 className="text-xs font-semibold ...">  text-gray-600 uppercase mb-3 border-b pb-1">📋 Smart Watchlist</h2>
  <ul className="space-y-2">
  {[
    {
      label: "Supplier: ABC Autoparts",
      change: "+5% List Price",
      emoji: "🧩",
      color: "text-red-600",
    },
    {
      label: "Product: PN-34829",
      change: "-12% Margin",
      emoji: "🔧",
      color: "text-green-600",
    },
    {
      label: "Option: Chrome Mirror",
      change: "Pending Simulation",
      emoji: "🎯",
      color: "text-yellow-600",
    },
  ].map((item, index) => (
    <li
      key={index}
      onClick={() => console.log(`Clicked: ${item.label}`)}
      className="flex justify-between items-center p-2 rounded hover:bg-blue-100 cursor-pointer transition duration-200"

    >
      <span>
        {item.emoji} <strong>{item.label}</strong>
      </span>
      <span className={`text-xs ${item.color}`}>{item.change}</span>
    </li>
  ))}
</ul>


</div>

<div className="bg-white border rounded-lg shadow px-6 py-5">
<h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">🚀 Quick Launch</h2>
  <div className="space-y-2">
    <button
      onClick={() => setModalMessage("Launching New Supplier Price Form")}
      className="w-full bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-sm"
    >
      ➕ New Supplier Price
    </button>
    <button
      onClick={() => setModalMessage("Opening Option Pricing Editor")}
      className="w-full bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-sm"
    >
      ➕ New Option Pricing
    </button>
    <button
       onClick={() => setModalMessage("Starting Price Simulation")}
      className="w-full bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700 text-sm"
    >
      🧪 Start Simulation
    </button>
    <button
       onClick={() => setModalMessage("Opening Upload Dialog")}
      className="w-full bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 text-sm"
    >
      ⬆️ Upload Pricing File
    </button>
  </div>
</div>


<div className="bg-white border rounded-lg shadow px-6 py-5">
<h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">📁 Recent Access</h2>

  <ul className="space-y-2 text-blue-700 text-sm">
  {[
    "📄 Simulation #SIM-20342 (Hilux)",
    "🧾 Option Update: Leather Seats",
    "🏷️ Supplier: JapanAuto – List Price",
  ].map((item, index) => (
    <li
      key={index}
      onClick={() =>
        setModalMessage(`Opening: ${item} — (Mockup Only)`)
      }
          className="p-2 rounded hover:bg-blue-100 cursor-pointer transition"
    >
      {item}
    </li>
  ))}
</ul>

</div>
{/* Simulation Test Drive */}
<div className="bg-white border rounded-lg shadow px-6 py-5">
  <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
  🧪 Price Simulation
</h2>
    <div className="grid grid-cols-3 gap-3 text-sm">
      <div>
      <button
  onClick={() => {
    const price = simCost * (1 + simMarkup / 100);
    const margin = ((price - simCost) / price) * 100;

    const result = `Simulated Price: $${price.toFixed(
      2
    )}, Margin: ${margin.toFixed(1)}%`;

    setModalMessage(result);
  }}
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
>
  🚀 Simulate
</button>

        <label className="block text-gray-500">Product</label>
        <input
  value={simProduct}
  onChange={(e) => setSimProduct(e.target.value)}
  className="w-full border rounded px-2 py-1"
/>

<input
  type="number"
  value={simCost}
  onChange={(e) => setSimCost(Number(e.target.value))}
  className="w-full border rounded px-2 py-1"
/>

<input
  type="number"
  value={simMarkup}
  onChange={(e) => setSimMarkup(Number(e.target.value))}
  className="w-full border rounded px-2 py-1"
/>

      </div>
      <div>
        <label className="block text-gray-500">Cost</label>
        <input className="w-full border rounded px-2 py-1" defaultValue="70" />
      </div>
      <div>
        <label className="block text-gray-500">Markup %</label>
        <input className="w-full border rounded px-2 py-1" defaultValue="40" />
      </div>
    </div>
    <div className="mt-4 bg-blue-50 text-blue-800 p-2 rounded text-sm">
      💡 Simulated Price: <strong>$98</strong> | Margin: <strong>28%</strong>
    </div>
  </div>
{/* add Simulation Price*/}

        </aside>

        {/* Main Panel */}
        <main className="flex-1 p-6 space-y-4">
        <div className="bg-white border rounded-lg shadow px-6 py-5">
        <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
  📅 My Tasks Timeline
</h2>

  <ul className="space-y-3">
    <li className="flex justify-between items-center">
      <div>
        <div className="font-medium text-gray-800">Approve Simulation #20431</div>
        <div className="text-xs text-gray-500">Due: Today</div>
      </div>
      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
        Pending
      </span>
    </li>
    <li className="flex justify-between items-center">
      <div>
        <div className="font-medium text-gray-800">Submit Supplier Cost Review</div>
        <div className="text-xs text-gray-500">Due: Tomorrow</div>
      </div>
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
        In Progress
      </span>
    </li>
    <li className="flex justify-between items-center">
      <div>
        <div className="font-medium text-gray-800">Update Tariff for HS9821</div>
        <div className="text-xs text-gray-500">Due: In 3 Days</div>
      </div>
      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
        Upcoming
      </span>
    </li>
  </ul>
</div>

<div className="bg-white border rounded-lg shadow px-6 py-5">
<h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
  🔍 <span title="Tracks pricing deltas across SKUs and options.">What Changed</span>
</h2>


<ul className="space-y-2 text-sm text-gray-700">
  <li
    onClick={() =>
      setModalMessage(
        "📉 SKU Margin Alert\n\nPN-55601 margin dropped from 28.2% to 20.1%.\nLast cost update was received 14 days ago from 'JapanAuto'.\nConsider reviewing simulation or supplier terms."
      )
    }
    className="hover:underline cursor-pointer p-1 rounded hover:bg-gray-100 transition"
  >
    🔻 Margin dropped by 8% on PN-55601
  </li>

  <li
    onClick={() =>
      setModalMessage(
        "📥 Simulation Uploaded\n\nNew simulation 'SIM-20342' uploaded for Toyota Camry.\nSubmitted by John.D on 24-Mar-2025.\nIncludes 5 options (e.g., Leather Seats, Tow Kit).\nAwaiting pricing approval."
      )
    }
    className="hover:underline cursor-pointer p-1 rounded hover:bg-gray-100 transition"
  >
    📥 New simulation uploaded for Toyota Camry
  </li>

  <li
    onClick={() =>
      setModalMessage(
        "💰 Supplier Price Update\n\nAutoEx submitted updated cost file.\nAvg. increase: 6.2% across 38 SKUs.\nCategory impact: Filters, Brake Pads, Cooling Systems.\nEffective from 1-Apr-2025."
      )
    }
    className="hover:underline cursor-pointer p-1 rounded hover:bg-gray-100 transition"
  >
    💰 Supplier 'AutoEx' raised cost by 6%
  </li>
</ul>

</div>

<div className="bg-white border rounded-lg shadow px-6 py-5">
<h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
title="Visualizes margin impact of pricing actions."

  📊 Impact Explorer
</h2>

  <table className="w-full text-sm">
    <thead>
      <tr className="text-gray-500 text-left border-b">
        <th className="pb-1">Brand</th>
        <th className="pb-1">Model</th>
        <th className="pb-1">Margin Δ</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="py-1">Toyota</td>
        <td>Fortuner</td>
        <td className="text-red-600 font-medium">-5%</td>
      </tr>
      <tr className="border-b">
        <td className="py-1">Mazda</td>
        <td>CX-5</td>
        <td className="text-green-600 font-medium">+3%</td>
      </tr>
      <tr>
        <td className="py-1">Nissan</td>
        <td>Navara</td>
        <td className="text-red-500 font-medium">-2%</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="bg-white border rounded-lg shadow px-6 py-5">
<h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
title="Shows pricing changes awaiting stakeholder approval."

  📌 Pending Approvals Radar
</h2>

  <ul className="space-y-2 text-sm">
    <li className="flex justify-between items-center">
      <div>
        📝 <strong>Sim #20300</strong> – Sam
      </div>
      <span className="text-red-600 text-xs">4 days idle</span>
    </li>
    <li className="flex justify-between items-center">
      <div>
        📦 <strong>Supplier Price PN-8802</strong> – Daisy
      </div>
      <span className="text-red-600 text-xs">7 days idle</span>
    </li>
  </ul>
</div>
<div className="flex space-x-4">
  {/* 🔥 Pricing Activity Heatmap */}
  <div className="w-2/3 bg-white border rounded-lg shadow px-6 py-5">
    <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
      🔥 Pricing Activity Heatmap
    </h2>
    <ul className="space-y-2 text-sm">
      <li className="flex items-center justify-between">
        <span>📅 Mar 01</span>
        <div className="w-3/4 bg-gray-200 rounded h-2">
          <div className="bg-green-500 h-2 rounded" style={{ width: "80%" }}></div>
        </div>
        <span className="text-gray-500 ml-2">12</span>
      </li>
      <li className="flex items-center justify-between">
        <span>📅 Mar 02</span>
        <div className="w-3/4 bg-gray-200 rounded h-2">
          <div className="bg-yellow-500 h-2 rounded" style={{ width: "30%" }}></div>
        </div>
        <span className="text-gray-500 ml-2">5</span>
      </li>
      <li className="flex items-center justify-between">
        <span>📅 Mar 03</span>
        <div className="w-3/4 bg-gray-200 rounded h-2">
          <div className="bg-red-300 h-2 rounded" style={{ width: "5%" }}></div>
        </div>
        <span className="text-gray-500 ml-2">0</span>
      </li>
      <li className="flex items-center justify-between">
        <span>📅 Mar 04</span>
        <div className="w-3/4 bg-gray-200 rounded h-2">
          <div className="bg-green-400 h-2 rounded" style={{ width: "50%" }}></div>
        </div>
        <span className="text-gray-500 ml-2">8</span>
      </li>
    </ul>
  </div>

  {/* 🎤 Ask Pricing Assistant */}
  <div className="w-1/3 bg-white border rounded-lg shadow px-6 py-5 text-center flex flex-col justify-between">
    <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
      🎤 Ask Pricing Assistant
    </h2>
    <button
      onClick={() =>
        setModalMessage("Showing all SKUs with margin drop >10%...")
      }
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
    >
      🔍 Show all SKUs with margin drop &gt;10%
    </button>
  </div>
</div>


        </main>
      </div>

      {/* Bottom Panel (Optional) */}
      <footer className="p-6 border-t bg-white flex justify-between space-x-4">
  

  
</footer>

    </div>
  );
}
