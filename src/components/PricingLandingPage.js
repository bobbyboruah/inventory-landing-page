import React, { useState } from "react";
import ModalPopup from "./ModalPopup";

export default function PricingLandingPage() {
  const [modalMessage, setModalMessage] = useState(null);

  {/* Simulation Test Drive states */}
  const [simProduct, setSimProduct] = useState("PN-55601");
  const [simCost, setSimCost] = useState("70");
  const [simMarkup, setSimMarkup] = useState("40");
  const [simResult, setSimResult] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [shipping, setShipping] = useState("");
  const [gst, setGst] = useState("");
  const [fxRate, setFxRate] = useState("");

  const [chatHistory, setChatHistory] = useState([
  { sender: "bot", message: "Hi there! Ask me anything about pricing or simulation." }
]);

  const tips = [
    "Don’t chase volume with price. Protect your margin.",
    "Simulate before you publish to avoid pricing shocks.",
    "Watch for supplier cost creep over time.",
    "Use markup consistently across similar segments.",
    "Bundle low-margin options with high-margin services.",
  ];
  
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const handleChatSubmit = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;
  
    const updated = [...chatHistory, { sender: "user", message: trimmed }];
    const inputLower = trimmed.toLowerCase();
  
    const keywords = [
      "margin", "supplier", "simulation", "sku", "product", "price",
      "discount", "bundle", "tariff", "duty", "buying", "cost", "markup",
      "standard cost", "version", "option", "override", "uom", "pack", "rate",
      "country", "origin", "list price", "po type", "simulation id",
      "effective from", "effective to", "exchange rate", "local price",
      "included", "model price", "net price", "multi-currency",
      "lead time", "stock", "review", "price increase", "price drop",
      "simulation result", "supplier upload", "filter", "battery", "engine",
      "brake", "clutch", "alternator", "radiator", "headlight", "starter"
    ];
  
    const matchedKeyword = keywords.find((kw) => inputLower.includes(kw));
    let reply = "";
  
    if (matchedKeyword) {
      if (inputLower.includes("margin")) {
        reply = "Margin for Toyota Fortuner dropped by 5%. CX-5 improved by 3%.";
      } else if (inputLower.includes("supplier")) {
        reply = "Supplier 'AutoEx' increased cost by 6% across 38 SKUs.";
      } else if (inputLower.includes("simulation")) {
        reply = "Simulation SIM-20342 includes 5 options for Camry.";
      } else {
        reply = `✅ You're asking about "${matchedKeyword}". This will be supported in the full version.`;
      }
    } else {
      reply = "🤖 Ask me pricing-related questions like margin, supplier, simulation, etc.";
    }
  
    setChatHistory([...updated, { sender: "bot", message: reply }]);
    setChatInput("");
  };
  

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
          <span className="text-gray-600">👤 Bobby</span>
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
        

<h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">📋 Smart Watchlist</h2>
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
    {
      label: "Simulation Approval Pending",
      change: "(Count=5 | Due:27-Mar-2025)",
      emoji: "📥",
      color: "text-orange-600",
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
{/* 🔧 Price Simulation Card */}
<div className="bg-white border rounded-lg shadow px-6 py-5">
  <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
    🧪 Price Simulation
  </h2>

  {/* Non-Editable Info Panel */}
  <div className="flex justify-between mb-4 text-xs text-gray-600 bg-gray-50 rounded px-3 py-2">
    <div>
      <div className="font-medium">Product Code</div>
      <div>{simProduct}</div>
    </div>
    <div>
      <div className="font-medium">Competitor Price</div>
      <div>$102.00</div>
    </div>
    <div>
      <div className="font-medium">Last Published Price</div>
      <div>$95.00</div>
    </div>
  </div>

  {/* Editable Fields with Validation */}
  <div className="space-y-3 text-xs">
    <div className="flex items-center space-x-2">
      <label className="w-24 text-gray-500">Cost</label>
      <input
        type="number"
        value={simCost}
        onChange={(e) => {
          const val = e.target.value;
          if (!isNaN(val) && val >= 0) setSimCost(val);
        }}
        className="w-24 border rounded px-2 py-1"
      />
    </div>

    <div className="flex items-center space-x-2">
      <label className="w-24 text-gray-500">Markup %</label>
      <input
        type="number"
        value={simMarkup}
        onChange={(e) => {
          const val = e.target.value;
          if (!isNaN(val) && val >= 0 && val <= 100) setSimMarkup(val);
        }}
        className="w-24 border rounded px-2 py-1"
      />
    </div>

    <div className="flex items-center space-x-2">
      <label className="w-24 text-gray-500">Shipping</label>
      <input
        type="number"
        value={shipping}
        onChange={(e) => {
          const val = e.target.value;
          if (!isNaN(val) && val >= 0) setShipping(val);
        }}
        className="w-24 border rounded px-2 py-1"
      />
    </div>

    <div className="flex items-center space-x-2">
      <label className="w-24 text-gray-500">GST %</label>
      <input
        type="number"
        value={gst}
        onChange={(e) => {
          const val = e.target.value;
          if (!isNaN(val) && val >= 0 && val <= 100) setGst(val);
        }}
        className="w-24 border rounded px-2 py-1"
      />
    </div>

    <div className="flex items-center space-x-2">
      <label className="w-24 text-gray-500">FX Rate</label>
      <input
        type="number"
        value={fxRate}
        onChange={(e) => {
          const val = e.target.value;
          if (!isNaN(val) && val > 0) setFxRate(val);
        }}
        className="w-24 border rounded px-2 py-1"
      />
    </div>

    {/* Simulate Button */}
    <div className="flex justify-end pt-2">
      <button
        onClick={() => {
          const costNum = parseFloat(simCost);
          const markupNum = parseFloat(simMarkup);
          const shippingNum = parseFloat(shipping);
          const gstNum = parseFloat(gst);
          const fxNum = parseFloat(fxRate);

          if (
            isNaN(costNum) ||
            isNaN(markupNum) ||
            isNaN(shippingNum) ||
            isNaN(gstNum) ||
            isNaN(fxNum)
          ) {
            setSimResult("⚠️ Please enter all valid numeric inputs.");
            return;
          }

          const baseCost = (costNum + shippingNum) * fxNum;
          const priceExGST = baseCost * (1 + markupNum / 100);
          const gstAmount = priceExGST * (gstNum / 100);
          const finalPrice = priceExGST + gstAmount;
          const margin = ((finalPrice - baseCost) / finalPrice) * 100;

          const result = `💡 Simulated Price: $${finalPrice.toFixed(2)} | Margin: ${margin.toFixed(
            1
          )}%`;
          setSimResult(result);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-xs"
      >
        🚀 Simulate
      </button>
    </div>

    {/* Result Display */}
    {simResult && (
      <div className="mt-3 bg-blue-50 text-blue-800 p-2 rounded text-xs">
        {simResult}
      </div>
    )}
  </div>
</div>


{/* add Simulation Price*/}

        </aside>

        {/* Main Panel */}
        <main className="flex-1 p-6 space-y-4">
        <div className="bg-white border rounded-lg shadow px-6 py-5">
        <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
  📅 Dairy
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
  🔍 <span title="Tracks pricing deltas across SKUs and options.">Recent Changed</span>
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
  <h2
    className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1"
    title="Visualizes margin impact of pricing actions."
  >
    📊 Impact Explorer
  </h2>

  <table className="w-full text-sm table-auto">
    <thead>
      <tr className="text-gray-500 text-left border-b">
        <th className="pb-1">Brand</th>
        <th className="pb-1">Model</th>
        <th className="pb-1">Margin Δ</th>
        <th className="pb-1">Reason</th>
        <th className="pb-1">Action-able</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="py-1">Toyota</td>
        <td>Fortuner</td>
        <td className="text-red-600 font-medium">-5%</td>
        <td className="text-gray-700">Supplier cost increased by 4%</td>
        <td>
          <button
            onClick={() =>
              setModalMessage(
                "📝 Action: Review Supplier Terms\n\nMargin drop triggered by cost spike from AutoEx.\nSuggested: Re-negotiate contract or consider alternate supplier."
              )
            }
            className="text-blue-700 underline hover:text-blue-900"
          >
            Review supplier terms
          </button>
        </td>
      </tr>
      <tr className="border-b">
        <td className="py-1">Mazda</td>
        <td>CX-5</td>
        <td className="text-green-600 font-medium">+3%</td>
        <td className="text-gray-700">Bundle pricing improved</td>
        <td>
          <button
            onClick={() =>
              setModalMessage(
                "✅ Action: Replicate Strategy\n\nThis pricing bundle improved margin.\nApply similar bundling logic to other models with low margin."
              )
            }
            className="text-blue-700 underline hover:text-blue-900"
          >
            Replicate to other SKUs
          </button>
        </td>
      </tr>
      <tr>
        <td className="py-1">Nissan</td>
        <td>Navara</td>
        <td className="text-red-500 font-medium">-2%</td>
        <td className="text-gray-700">Currency impact on imports</td>
        <td>
          <button
            onClick={() =>
              setModalMessage(
                "📊 Action: Run FX-Adjusted Simulation\n\nCurrency depreciation increased costs.\nRun new simulation with updated exchange rate to evaluate margin impact."
              )
            }
            className="text-blue-700 underline hover:text-blue-900"
          >
            Run simulation with adjusted FX
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div className="bg-white border rounded-lg shadow px-6 py-5">
  <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
    📌 Pending Approvals Radar
  </h2>

  <table className="w-full text-sm">
    <thead>
      <tr className="text-gray-500 text-left border-b">
        <th className="pb-1">Type</th>
        <th className="pb-1">Owner</th>
        <th className="pb-1">Idle Days</th>
        <th className="pb-1">Notes</th>
      </tr>
    </thead>
    <tbody>
      {[
        {
          type: "Simulation Approval – SIM-20400",
          owner: "Antony C.",
          idle: "4 days",
          notes:
            "Waiting on regional price validation for Ford Ranger variant.",
        },
        {
          type: "Supplier Upload – PN-8802",
          owner: "Darryl H.",
          idle: "7 days",
          notes:
            "Bulk upload with conflicting SKUs, flagged by data QA.",
        },
        {
          type: "Manual Override – PN-44100",
          owner: "Glen S.",
          idle: "2 days",
          notes:
            "Urgent override request – linked to OEM promotional pricing.",
        },
      ].map((item, idx) => (
        <tr key={idx} className="border-b hover:bg-gray-50">
          <td className="py-1">{item.type}</td>
          <td>{item.owner}</td>
          <td className="text-red-600">{item.idle}</td>
          <td className="text-xs text-gray-700">{item.notes}</td>
        </tr>
      ))}
    </tbody>
  </table>
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
{/* 🎤 Ask Pricing Assistant (Chatbot UI) */}
<div className="w-1/3 bg-white border rounded-lg shadow px-4 py-5 flex flex-col justify-between">
  <h2 className="text-sm font-bold text-gray-600 uppercase mb-3 border-b pb-1">
    🎤 Ask Pricing Assistant
  </h2>

  <div className="flex-1 mb-3 space-y-2 overflow-y-auto pr-2" style={{ maxHeight: "12rem" }}>
  {chatHistory.map((chat, index) => (
    <div
      key={index}
      className={`p-2 rounded text-sm ${
        chat.sender === "bot"
          ? "bg-gray-100 text-left text-gray-800"
          : "bg-blue-100 text-right text-blue-800"
      }`}
    >
      {chat.message}
    </div>
  ))}
</div>


  <div className="flex space-x-2">
  <input
  type="text"
  value={chatInput}
  onChange={(e) => setChatInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") handleChatSubmit();
  }}
  placeholder="Ask me something..."
  className="flex-1 border rounded px-2 py-1 text-sm"
/>

    <button
      
      onClick={handleChatSubmit}

      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
    >
      Send
    </button>
  </div>
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
