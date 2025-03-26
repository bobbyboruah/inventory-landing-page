import React, { useState } from "react";
import SupplierPricingEditor from "./SupplierPricingEditor";

export default function SupplierPricingWorkbench() {
  const [activeTab, setActiveTab] = useState("supplier");
  const [showEditor, setShowEditor] = useState(false);

  const supplierProduct = {
    productNumber: "PN-12345",
    supplier: "Supplier1",
    listPrice: 60,
    buyingPrice: 36,
  };

  const optionProduct = {
    optionName: "Red Paint",
    model: "Hilux",
    brand: "Toyota",
    price: 200,
    bundled: "Yes"
  };

  if (showEditor) {
    return (
      <div className="p-4">
        <button onClick={() => setShowEditor(false)} className="mb-4 text-blue-600 underline">
          ← Back to Workbench
        </button>
        <SupplierPricingEditor
  type={activeTab}
  data={activeTab === "supplier" ? supplierProduct : optionProduct}
  onSave={() => setShowEditor(false)}
/>

        <SupplierPricingEditor type={activeTab} data={activeTab === "supplier" ? supplierProduct : optionProduct} />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Pricing Workbench</h1>

      {/* Tabs */}
      <div className="mb-4">
        <button
          className={`px-4 py-2 border rounded-l ${activeTab === "supplier" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          onClick={() => setActiveTab("supplier")}
        >
          Supplier Pricing
        </button>
        <button
          className={`px-4 py-2 border rounded-r ${activeTab === "option" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          onClick={() => setActiveTab("option")}
        >
          Option Pricing
        </button>
      </div>

      {/* Supplier Pricing Table */}
      {activeTab === "supplier" && (
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Supplier</th>
              <th className="p-2 border">List Price</th>
              <th className="p-2 border">Buying Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">{supplierProduct.productNumber}</td>
              <td className="p-2 border">{supplierProduct.supplier}</td>
              <td className="p-2 border">${supplierProduct.listPrice}</td>
              <td className="p-2 border">${supplierProduct.buyingPrice}</td>
              <td className="p-2 border">
                <button onClick={() => setShowEditor(true)} className="text-blue-600 underline">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {/* Option Pricing Table */}
      {activeTab === "option" && (
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Option</th>
              <th className="p-2 border">Brand</th>
              <th className="p-2 border">Model</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Bundled</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">{optionProduct.optionName}</td>
              <td className="p-2 border">{optionProduct.brand}</td>
              <td className="p-2 border">{optionProduct.model}</td>
              <td className="p-2 border">${optionProduct.price}</td>
              <td className="p-2 border">{optionProduct.bundled}</td>
              <td className="p-2 border">
                <button onClick={() => setShowEditor(true)} className="text-blue-600 underline">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
