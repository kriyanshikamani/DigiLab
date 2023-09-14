import React, { useState } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const [selectedGender, setSelectedGender] = useState(""); // State for selected gender
  const [showToast, setShowToast] = useState(false);

  const [user, setUser] = useState({
      id: "",
      name: "",
      mobileNumber: "",
      email: "",
      registeredOn: "",
      status: "",
      permissions: "",
  });

  const handleUpdateClick = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  
    const handleUpdatedClick = async (e) => {
     
      const response = await fetch("http://localhost:3000/user/store", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
});

if (!response.ok) {
  // Handle error, e.g., show an error toast
  toast.error("Error saving user data");
  return;
}

const data = await response.json();
// Handle success, e.g., show a success toast
toast.success("User Added Successfully");
    }
  return (
    <div className="container bg-white p-6">
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Add User</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
              <input type="text" placeholder="Name" className="border rounded-lg px-3 py-2 w-full" name="name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
            </div>
            <div className="col-span-1">
              <input type="text" placeholder="Mobile Number" className="border rounded-lg px-3 py-2 w-full" name="mobileNumber" onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })} />
            </div>
            <div className="col-span-1">
              <input type="email" placeholder="Email" className="border rounded-lg px-3 py-2 w-full" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </div>
            <div className="col-span-1">
              <input type="text" placeholder="Registered On" className="border rounded-lg px-3 py-2 w-full" name="registeredOn" onChange={(e) => setUser({ ...user, registeredOn: e.target.value })} />
            </div>
            <div className="col-span-1">
              <input type="text" placeholder="Status" className="border rounded-lg px-3 py-2 w-full" name="status" onChange={(e) => setUser({ ...user, status: e.target.value })} />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Permissions:</label>
              <textarea placeholder="Enter permissions" className="border rounded-lg px-3 py-2 w-full h-24 resize-none" name="permissions" onChange={(e) => setUser({ ...user, permissions: e.target.value })} />
            </div>
        </div>
      </div>
      <button
        onClick={handleUpdatedClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
      <ToastContainer className="mt-4 " />
    </div>
    </div>
  );
};

export default AddUser;
