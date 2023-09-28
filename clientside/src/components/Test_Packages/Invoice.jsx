import React from "react";

const Invoice = ({ bookedPackages }) => {
  // Calculate the total price
  const totalPrice = bookedPackages.reduce((total, selectedPackage) => total + selectedPackage.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Invoice</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Invoice Details</h2>
        {bookedPackages.map((selectedPackage) => (
          <div key={selectedPackage.id}>
            <h3 className="text-lg font-semibold">{selectedPackage.name}</h3>
            <p className="text-gray-600">Price: ₹{selectedPackage.price}</p>
          </div>
        ))}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Total Price:</h3>
          <p className="text-gray-600">₹{totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
