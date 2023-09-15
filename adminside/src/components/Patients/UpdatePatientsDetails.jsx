import React, { useState ,useEffect} from "react";
import {Link} from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";



const UpdatePatientsDetails = () => {
  const { patientId } = useParams();
  const [patientid, setpatientId] = useState(null);
  const [editedfirstName, setEditedFirstName] = useState('');
  const [editedlastName, setEditedLastName] = useState('');
  const [editedMobileNumber, setEditedMobileNumber] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(""); // State for selected gender


useEffect(() => {
    console.log("patient ID:", patientId);
    if (patientId) {
      // Fetch the testcategory data for editing
      fetchPatientData();
    }
  }, [patientId]);

  const fetchPatientData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/patient/${patientId}`);
      const updatedPatient = response?.data;
      setEditedFirstName(updatedPatient.firstName); // Set the edited category name
      setEditedLastName(updatedPatient.lastName);
      setEditedMobileNumber(updatedPatient.mobileNumber);
      setEditedEmail(updatedPatient.email);
      setEditedAddress(updatedPatient.address);
      setpatientId(updatedPatient);
    } catch (error) {
      console.error("Error fetching testcategory data:", error);
    }
  };
  const handleUpdateClick = async () => {
    try {
      await axios.put(`http://localhost:3000/patient/${patientId}`, {
        firstName: editedfirstName,
        lastName: editedlastName,
        mobileNumber: editedMobileNumber,
        email: editedEmail,
        address: editedAddress,
      });
      alert("Patient updated successfully.");
      navigate("/view-patient-details");
      // Handle success (e.g., show a success message or navigate back)
    } catch (error) {
      console.error("Error updating patient:", error);
      // Handle error (e.g., show an error message)
    }
  };

  


  return (
    <div className="container bg-white p-6">
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Update Patient Details</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input type="text" placeholder="First Name" 
            name="firstName"
            value={editedfirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-1">
            <input type="text" placeholder="Last Name"
            name="lastName"
            value={editedlastName}
            onChange={(e) => setEditedLastName(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full" />
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
            <input type="text" placeholder="Mobile Number" 
            name="mobileNumber"
            value={editedMobileNumber}
            onChange={(e) => setEditedMobileNumber(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-1">
            <input type="email" placeholder="Email" 
            name="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <textarea placeholder="Enter address"
            name="address"
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full h-24 resize-none" />
          </div>
        </div>
      </div>
      <Link to="/view-patient-details" 
      onClick={handleUpdateClick}
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</Link>
    </div>
    </div>
  );
};

export default UpdatePatientsDetails;
