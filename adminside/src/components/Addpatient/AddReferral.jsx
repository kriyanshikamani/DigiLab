import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AddReferral = () => {
  const [referral, setReferral] = useState({
    firstName: "",
    lastName: "",
    degree: "",
    mobile: "",
    email: "",
    address: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/referral/store", referral);
      if (response.status === 201) { // Replace with the actual success status code
        toast.success("User Added Successfully");
      } else {
        toast.error("Error saving user data");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error saving user data");
    }
  };

  return (
    <div className="p-4">
      <div className='container mx-auto bg-white p-6'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Add Referral</h1>
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="firstname"
                  className="border rounded-lg px-3 py-2 w-full"
                  name="firstname"
                  onChange={(e) => setReferral({ ...referral, firstName: e.target.value })}
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="lastname"
                  className="border rounded-lg px-3 py-2 w-full"
                  name="lastname"
                  onChange={(e) => setReferral({ ...referral, lastName: e.target.value })}
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="degree"
                  className="border rounded-lg px-3 py-2 w-full"
                  name="degree"
                  onChange={(e) => setReferral({ ...referral, degree: e.target.value })}
                />
              </div>
              <div className="col-span-1">
                <input
                  type="number"
                  placeholder="mobileNumber"
                  className="border rounded-lg px-3 py-2 w-full"
                  name="mobileNumber"
                  onChange={(e) => setReferral({ ...referral, mobile: e.target.value })}
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="email"
                  className="border rounded-lg px-3 py-2 w-full"
                  name="email"
                  onChange={(e) => setReferral({ ...referral, email: e.target.value })}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                <textarea
                  placeholder="address"
                  className="border rounded-lg px-3 py-2 w-full h-24 resize-none"
                  name="address"
                  onChange={(e) => setReferral({ ...referral, address: e.target.value })}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Referral
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddReferral;
