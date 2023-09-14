import React, { useState } from "react";
import {Link} from 'react-router-dom'
const UpdatePatientsDetails = () => {
  const [selectedGender, setSelectedGender] = useState(""); // State for selected gender
  const [showToast, setShowToast] = useState(false);

  const handleUpdateClick = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };


  return (
    <div className="container bg-white p-6">
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Update Patient Details</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input type="text" placeholder="First Name" className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-1">
            <input type="text" placeholder="Last Name" className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input type="radio" id="male" value="male" checked={selectedGender === "male"} onChange={(e) => setSelectedGender(e.target.value)} />
                <label htmlFor="male" className="ml-2 cursor-pointer">
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="female" value="female" checked={selectedGender === "female"} onChange={(e) => setSelectedGender(e.target.value)} />
                <label htmlFor="female" className="ml-2 cursor-pointer">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <input type="text" placeholder="Mobile Number" className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-1">
            <input type="email" placeholder="Email" className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <textarea placeholder="Enter address" className="border rounded-lg px-3 py-2 w-full h-24 resize-none" />
          </div>
        </div>
      </div>
      <Link to="/view-patient-details" onCli className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</Link>
    </div>
    </div>
  );
};

export default UpdatePatientsDetails;
