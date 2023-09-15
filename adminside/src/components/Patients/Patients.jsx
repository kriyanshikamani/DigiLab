import React, { useState, useEffect } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import {BiSearchAlt2} from "react-icons/bi";
import { Link } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      firstname: "John Doe",
      address: "123 Main St, City",
      mobile: "123-456-7890",
      registeredOn: "2023-08-01",
    },
    {
      id: 2,
      firstname: "Jane Smith",
      address: "456 Park Ave, Town",
      mobile: "987-654-3210",
      registeredOn: "2023-07-15",
    },
    // Add more sample patient data
    {
      id: 3,
      firstname: "Michael Johnson",
      address: "789 Elm Rd, Village",
      mobile: "555-123-4567",
      registeredOn: "2023-08-10",
    },
  ]);

  const [searchFirstname, setSearchfirstname] = useState("");
  const [searchMobilenumber, setSearchmobilenumber] = useState("");

  const [filteredPatients, setFilteredPatients] = useState([]);
  // const [filteredData, setFilteredData] = useState(patients);

  const handleInputChange = (e) => {
    setSearchReferredBy(e.target.value);
  };

  const search_firstname = () => {
    const filteredData = patients.filter((item) => {
      return item.firstname?.toLowerCase().includes(searchFirstname.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  const search_mobileno = () => {
    const filteredData = patients.filter((item) => {
      return item.mobile.includes(searchMobilenumber);
    });
    setFilteredData(filteredData);
  };

  useEffect(() => search_firstname(), [searchFirstname]);
  useEffect(() => search_mobileno(), [searchMobilenumber]);

  const handleClear = () => {
    setSearchfirstname("");
    setSearchmobilenumber("");
    setFilteredPatients([]);
  };
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchPatientData() {
      try {
        const response = await axios.get("http://localhost:3000/patient/getall");
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    }
  
    fetchPatientData();
  }, []);
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
          
            <input
            
              placeholder="Search by Name"
              type="text"
              id="firstname"
              name="firstname"
              value={searchFirstname}
              onChange={(e) => {
                setSearchfirstname(e.target.value);
                search_firstname();
              }}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
               <BiSearchAlt2 className="text-gray-400 w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2" /> {/* Search icon */}

          </div>

          <div className="relative">
            <input
              placeholder="Search by Mobile Number"
              type="text"
              id="mobile"
              name="mobile"
              value={searchMobilenumber}

              onChange={(e) => {
                setSearchmobilenumber(e.target.value);
                search_mobileno();
              }}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
             <BiSearchAlt2 className="text-gray-400 w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2" /> {/* Search icon */}

          </div>
        </div>

        <div className="col-span-3 mt-4">
          <button type="button" onClick={handleClear} className="bg-white border-black hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300 ml-2">
            Clear
          </button>
        </div>
      </form>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Patient List</h2>
        {filteredData.length === 0 ? ( // Check if filteredData is empty
          <div className="text-center">
            <h2 className="font-semibold  text-xl">No cases to show.</h2>

            <p className="text-gray-500 text-md"> Get started by adding a new case.</p>
            <Link to="/add-patient">
              <div className="inline-flex items-center justify-center h-8 px-4 rounded-full border-black border-2"> + New Case</div>
            </Link>
          </div>
        ) : (
          <table className="min-w-full border-collapse border border-gray-800">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Mobile Number</th>
                <th className="border p-2">Registered On</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((patient, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="border p-2">{patient.id}</td>
                  <td className="border p-2">{patient.firstname}</td>
                  <td className="border p-2">{patient.address}</td>
                  <td className="border p-2">{patient.mobile}</td>
                  <td className="border p-2">{patient.registeredOn}</td>
                  <td className="border p-2 " >
                    <div className="flex items-center space-x-2">
                    <Link to="/view-patient-details" className="flex items-center px-2 py-1 text-blue-500 hover:text-blue-900 ">
                      <BsFillEyeFill className="mr-1" /> View
                    </Link>
                    <Link to="/update-patient-details" className="flex items-center px-2 py-1 text-blue-500 hover:text-blue-900">
                      <HiPencil className="mr-1" /> Edit
                    </Link>
                    <Link to="/add-patient" className="flex items-center px-2 py-1 text-blue-500 hover:text-blue-900 ">
                      <HiPlus className="mr-1" /> Add Case
                    </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Patients;
