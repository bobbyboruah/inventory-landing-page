import React, { useState } from "react";

export default function SupplierPricingEditor({ type, data, onSave }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Data:", formData); // Simulate saving to backend
    alert("Pricing details saved!");
    onSave(); // Go back to Workbench
  };

  return (
    <div className="border rounded-xl p-6 max-w-3xl mx-auto shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">
        {type === "supplier" ? "Edit Supplier Pricing" : "Edit Option Pricing"}
      </h2>

      {type === "supplier" && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Product Number</label>
            <input
              name="productNumber"
              className="mt-1 border rounded w-full p-2"
              value={formData.productNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Supplier</label>
            <input
              name="supplier"
              className="mt-1 border rounded w-full p-2"
              value={formData.supplier}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">List Price</label>
            <input
              name="listPrice"
              type="number"
              className="mt-1 border rounded w-full p-2"
              value={formData.listPrice}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Buying Price</label>
            <input
              name="buyingPrice"
              type="number"
              className="mt-1 border rounded w-full p-2"
              value={formData.buyingPrice}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {type === "option" && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Option Name</label>
            <input
              name="optionName"
              className="mt-1 border rounded w-full p-2"
              value={formData.optionName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Brand</label>
            <input
              name="brand"
              className="mt-1 border rounded w-full p-2"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Model</label>
            <input
              name="model"
              className="mt-1 border rounded w-full p-2"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              name="price"
              type="number"
              className="mt-1 border rounded w-full p-2"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <div className="mt-6 text-right">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  );
}
