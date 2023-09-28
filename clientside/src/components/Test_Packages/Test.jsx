import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Test = () => {
  const [packages, setTestpackage] = useState([]);
  const { testpackageId } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("http://localhost:3000/testpackage/getall");
        setTestpackage(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Test Packages</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {packages.map((item, index) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{item.name}</h2>
            <p className="text-gray-600">Fees: ₹{item.price}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Included tests and panels:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {item.topics.map((test, subIndex) => (
                  <li key={subIndex}>{test}</li>
                ))}
              </ul>
            </div>
          <button
  onClick={() => handleBooking(item.id)}
  className="mt-4 block text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
  Book
</button>

          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Test;
