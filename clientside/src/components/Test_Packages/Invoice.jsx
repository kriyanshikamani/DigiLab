import React from "react";
import { useLocation } from "react-router-dom";

const Invoice = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const testName = queryParams.get("testName");
  const testPrice = queryParams.get("testPrice");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Invoice</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Test Name: {testName}</h2>
        <p className="text-gray-600">Total Amount: ₹{testPrice}</p>
        {/* Add more invoice details here */}
      </div>
    </div>
  );
};

export default Invoice;
