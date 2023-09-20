import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePatientsDetails = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedMobileNumber, setEditedMobileNumber] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedAddress, setEditedAddress] = useState("");
  const [editedGender, setEditedGender] = useState("");

  useEffect(() => {
    if (patientId) {
      fetchPatientData();
    }
  }, [patientId]);

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/patient/${patientId}`);
      const updatedPatient = response?.data;
      setEditedFirstName(updatedPatient.firstname);
      setEditedLastName(updatedPatient.lastname);
      setEditedMobileNumber(updatedPatient.phone);
      setEditedEmail(updatedPatient.email);
      setEditedAddress(updatedPatient.address);
      setEditedGender(updatedPatient.gender);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  const handleUpdateClick = async () => {
    try {
      await axios.put(`http://localhost:3000/patient/${patientId}`, {
        firstname: editedFirstName,
        lastname: editedLastName,
        phone: editedMobileNumber,
        email: editedEmail,
        address: editedAddress,
        gender: editedGender,
      });
      alert("Patient updated successfully.");
      navigate("/patients");
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  return (
    <div className="bg-white p-6">
      <div className="mx-auto mt-4 max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Update Patient Details</h1>
        <div className="mb-4 space-y-4">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={editedMobileNumber}
            onChange={(e) => setEditedMobileNumber(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full resize-none"
          />
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  checked={editedGender === "male"}
                  onChange={() => setEditedGender("male")}
                />
                <label htmlFor="male" className="ml-2 cursor-pointer">
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  checked={editedGender === "female"}
                  onChange={() => setEditedGender("female")}
                />
                <label htmlFor="female" className="ml-2 cursor-pointer">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
          onClick={handleUpdateClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdatePatientsDetails;
