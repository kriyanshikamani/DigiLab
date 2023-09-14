import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EditReferralDoctors = () => {
  const { referralId } = useParams();
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedMobileNumber, setEditedMobileNumber] = useState("");
  const [editedDegree, setEditedDegree] = useState("");
  const [editedAddress, setEditedAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchReferralData();
  }, []);

  const fetchReferralData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/referral/${referralId}`);
      const updatedReferral = response?.data;
      setEditedFirstName(updatedReferral.firstName);
      setEditedLastName(updatedReferral.lastName);
      setEditedEmail(updatedReferral.email);
      setEditedMobileNumber(updatedReferral.mobile);
      setEditedDegree(updatedReferral.degree);
      setEditedAddress(updatedReferral.address);
    } catch (error) {
      console.error("Error fetching referral data:", error);
    }
  };

  const handleUpdateClick = async () => {
    try {
      await axios.put(`http://localhost:3000/referral/${referralId}`, {
        firstName: editedFirstName,
        lastName: editedLastName,
        email: editedEmail,
        mobile: editedMobileNumber,
        degree: editedDegree,
        address: editedAddress,
      });
      alert("referral updated successfully.");
      navigate("/referral-doctors");
    } catch (error) {
      console.error("Error updating referral:", error);
    }
  };
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Update Referral Details</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input
              type="text"
              name="firstName"
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
              placeholder="First Name"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="lastName"
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
              placeholder="Last Name"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-3">
            <input
              type="email"
              name="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              placeholder="Email"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="mobile"
              value={editedMobileNumber}
              onChange={(e) => setEditedMobileNumber(e.target.value)}
              placeholder="Mobile Number"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="degree"
              value={editedDegree}
              onChange={(e) => setEditedDegree(e.target.value)}
              placeholder="Degree"
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <textarea
              name="address"
              value={editedAddress}
              onChange={(e) => setEditedAddress(e.target.value)}
              placeholder="Enter address"
              className="border rounded-lg px-3 py-2 w-full h-24 resize-none"
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleUpdateClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Referrer
      </button>
      <ToastContainer />
    </div>
  );
};

export default EditReferralDoctors;
