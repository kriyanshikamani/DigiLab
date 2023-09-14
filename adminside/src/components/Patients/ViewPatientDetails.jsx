import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import { HiPencil, HiPlus } from "react-icons/hi";
import {Link} from "react-router-dom";

const ViewPatientDetails = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [patientName, setPatientName] = useState("Kriyanshi Kamani");

  const handleUpdateName = (updatedName) => {
    setPatientName(updatedName);
  };
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  

  return (

    <div className="bg-gray-100 p-6 rounded-lg shadow-md relative">
      <h1 className="font-bold text-2xl mb-4">View Patient Details</h1>
     
      <div className="flex justify-between">
      <div className="text-center my-8">
        <h2 className="text-3xl font-semibold text-gray-800">{patientName}</h2>
      </div>
      </div>
        <div className="flex space-x-4 justify-end">
          <Link to="/update-patient-details" className="flex items-center px-4 py-2 border-2 border-black rounded-md">
            <HiPencil className="mr-2" /> Edit Profile
          </Link>
          <Link to="/add-patient" className="flex items-center px-4 py-2 border-2 border-black rounded-md">
            <HiPlus className="mr-2" /> Add Case
          </Link>
        </div>
      
      <div className="flex justify-between">
        <div>
          <button
            className={`${
              activeSection === "profile" ? "text-blue-500" : "text-gray-600"
            } font-medium`}
            onClick={() => handleSectionChange("profile")}
          >
            Profile
          </button>
          <button
            className={`ml-4 ${
              activeSection === "cases" ? "text-blue-500" : "text-gray-600"
            } font-medium`}
            onClick={() => handleSectionChange("cases")}
          >
            Cases
          </button>
        </div>
      </div>

      {activeSection === "profile" && (
         <div className="mt-4 border-t border-gray-300 pt-4">
        <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-4">
          <div className="flex">
            <div className="w-1/2 p-6 border-r border-gray-200">
              <div className="flex flex-col">
                <div className="flex items-center text-lg text-gray-600">
                  <BsFillPersonFill className="mr-2" />
                  {patientName}
                </div>
                <div className="flex items-center text-lg text-gray-600 mb-2">
                  20 years
                </div>
                <div className="flex items-center text-lg text-gray-600 mb-2">
                  <IoCall className="mr-2" />
                  +91-9876543314
                </div>
                <div className="flex items-center text-lg text-gray-600">
                  <SiGmail className="mr-2" />
                  adjfh@gmail.com
                </div>
              </div>
            </div>
            <div className="w-1/2 p-6">
              <div className="flex items-center text-lg text-gray-600">
                <ImLocation2 className="mr-2" />
                123, xyz street, abc city, 123456
              </div>
            </div>
          </div>
        </div>
        </div>
      )}

      {activeSection === "cases" && (
        <div className="mt-4 border-t border-gray-300 pt-4">
          <p className="text-gray-600">Cases</p>
        </div>
      )}
    </div>
  );
};

export default ViewPatientDetails;
