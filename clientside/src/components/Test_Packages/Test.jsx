import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Test = () => {
  const [testPackages, setTestPackages] = useState([]);
  const [testPanels, setTestPanels] = useState([]);
  const [selectedTests, setSelectedTests] = useState([]); // State to store selected tests
  const [invoice, setInvoice] = useState(null); // State to store the generated invoice
  const { testpackageId } = useParams();

  // Function to handle selecting a test
  const selectTest = (testItem) => {
    setSelectedTests([...selectedTests, testItem]);
  };

  // Function to handle deselecting a test
  const deselectTest = (testItem) => {
    const updatedSelectedTests = selectedTests.filter((selectedTest) => selectedTest !== testItem);
    setSelectedTests(updatedSelectedTests);
  };

  // Function to handle booking and generate an invoice
  const bookTests = () => {
    // Here you can process the selectedTests array to generate the invoice details
    // For example, you can calculate the total price by summing the prices of selected tests

    // Calculate the total price of selected tests
    const totalPrice = selectedTests.reduce((total, testItem) => total + testItem.price, 0);

    // Create an invoice object
    const generatedInvoice = {
      tests: selectedTests,
      totalPrice: totalPrice,
      // Add more invoice details as needed
    };

    // Set the invoice in the state
    setInvoice(generatedInvoice);
  };

  // Function to close the invoice modal
  const closeInvoice = () => {
    setInvoice(null);
    setSelectedTests([]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const testPackagesResponse = await axios.get("http://localhost:3000/testpackage/getall");
        const testPanelsResponse = await axios.get("http://localhost:3000/testpanel/getall");
        setTestPackages(testPackagesResponse.data);
        setTestPanels(testPanelsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Test Packages and Panels</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testPackages.map((packageItem, index) => (
          <div key={packageItem._id} className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{packageItem.name}</h2>
            <p className="text-gray-600">Fees: ₹{packageItem.price}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Included tests and panels:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {packageItem.topics.map((test, subIndex) => (
                  <li key={subIndex}>{test}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => selectTest(packageItem)}
              className="block mt-4 text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Select
            </button>
          </div>
        ))}

        {testPanels.map((panel, index) => (
          <div key={panel._id} className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{panel.name}</h2>
            <p className="text-gray-600">Category: {panel.category}</p>
            <p className="text-gray-600">Fees: ₹{panel.price}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Tests:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {panel.tests.map((test, subIndex) => (
                  <li key={subIndex}>{test}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => selectTest(panel)}
              className="block mt-4 text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
             Select
            </button>
          </div>
        ))}
      </div>

      {/* Invoice Modal */}
      {invoice && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
    <div className="bg-white p-4 shadow-lg rounded-lg w-96">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Check Total Amount</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Selected Tests:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {invoice.tests.map((test, subIndex) => (
            <li key={subIndex}>{test.name}</li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xl text-blue-700 font-semibold">Total Price: ₹{invoice.totalPrice}</p>
      <button
        onClick={closeInvoice}
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none"
      >
        Close 
      </button>
    </div>
  </div>
)}

<div className="text-center mt-6">
  <button
    onClick={bookTests}
    className={`bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none ${
      selectedTests.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    disabled={selectedTests.length === 0}
  >
   Check Selected Tests
  </button>
</div>

    </div>
  );
};

export default Test;
