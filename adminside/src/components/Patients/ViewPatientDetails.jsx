import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsFillPersonFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import { HiPencil, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const ViewPatientDetails = () => {
  const { patientId } = useParams();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    async function fetchPatientData() {
      try {
        const response = await axios.get(`http://localhost:3000/patient/${patientId}`);
        setPatientData(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
      
    }

    fetchPatientData();
  }, [patientId]);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      {patientData ? (
        <>
          <h1 className="text-2xl font-semibold mb-4 text-center text-blue-500">
            {patientData.firstname} {patientData.lastname}'s Details
          </h1>
          <div className="border rounded-lg p-4 mb-4 bg-gray-100">
            <div className="mb-4">
              <div className="text-lg font-semibold text-gray-800 mb-2">
                <BsFillPersonFill className="mr-2 text-xl text-blue-500" />
                <span>{patientData.firstname} {patientData.lastname} , {patientData.gender}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <IoCall className="mr-2 text-xl" />
                <span className="text-lg">{patientData.phone}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <SiGmail className="mr-2 text-xl " />
                <span className="text-lg">{patientData.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ImLocation2 className="mr-2 text-xl" />
                <span className="text-lg">{patientData.address}</span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Link
                to="/update-patient-details"
                className="flex items-center px-4 py-2 border-2 border-black rounded-md text-blue-500 hover:text-blue-900"
              >
                <HiPencil className="mr-2 text-xl" /> Edit Profile
              </Link>
              <Link
                to="/add-patient"
                className="flex items-center ml-4 px-4 py-2 border-2 border-black rounded-md text-blue-500 hover:text-blue-900"
              >
                <HiPlus className="mr-2 text-xl" /> Add Case
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default ViewPatientDetails;
