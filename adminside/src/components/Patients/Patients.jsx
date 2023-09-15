
import React, { useState, useEffect } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";

const Patients = () => {
  const [patientData, setPatientData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchMobileNumber, setSearchMobileNumber] = useState("");

  useEffect(() => {
    async function fetchPatientData() {
      try {
        const response = await axios.get("http://localhost:3000/patient/getall");
        setPatientData(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }

    fetchPatientData();
  }, []);

  const filterPatients = () => {
    const filteredData = patientData.filter((patient) => {
      const nameMatch = patient.firstname.toLowerCase().includes(searchName.toLowerCase()) ||
        patient.lastname.toLowerCase().includes(searchName.toLowerCase());
      const emailMatch = patient.email.toLowerCase().includes(searchEmail.toLowerCase());
      const mobileMatch = String(patient.phone).includes(searchMobileNumber); // Convert to string
  
      // Combine the conditions based on the search fields
      return (!searchName || nameMatch) && (!searchEmail || emailMatch) && (!searchMobileNumber || mobileMatch);
    });
    return filteredData;
  };
  

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              placeholder="Search by Name"
              type="text"
              id="name"
              name="name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <BiSearchAlt2 className="text-gray-400 w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2" />
          </div>
          <div className="relative">
            <input
              placeholder="Search by Email"
              type="text"
              id="email"
              name="email"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <BiSearchAlt2 className="text-gray-400 w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2" />
          </div>
          <div className="relative">
            <input
              placeholder="Search by Mobile Number"
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={searchMobileNumber}
              onChange={(e) => setSearchMobileNumber(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <BiSearchAlt2 className="text-gray-400 w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2" />
          </div>
        </div>
      </form>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Patient List</h2>
        <table className="min-w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Mobile Number</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterPatients().map((patient, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{patient.firstname} {patient.lastname}</td>
                <td className="border p-2">{patient.address}</td>
                <td className="border p-2">{patient.phone}</td>
                <td className="border p-2">{patient.email}</td>
                <td className="border p-2">
                  <div className="flex items-center space-x-2">
                    <Link to="/view-patient-details" className="flex items-center px-2 py-1 text-blue-500 hover:text-blue-900">
                      <BsFillEyeFill className="mr-1" /> View
                    </Link>
                    <Link to="/update-patient-details" className="flex items-center px-2 py-1 text-blue-500 hover:text-blue-900">
                      <HiPencil className="mr-1" /> Edit
                    </Link>
                    <Link to="/add-patient" className="flex items-center px-2 py-1 text-blue-500 hover:text-blue-900">
                      <HiPlus className="mr-1" /> Add Case
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
