import React, { useState, useEffect, useContext } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import SharedContext from "../../contexts/SharedContext";
// import Shared

const All_cases = () => {
  // const [patients, setPatients] = useState([]);

  const {patientData} = useContext(SharedContext);

  const [getPatientData, setPatientData] =useState(patientData);
  const [searchRegNo, setSearchRegNo] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchReferredBy, setSearchReferredBy] = useState("");

  const [filteredPatients, setFilteredPatients] = useState([]);
  const [filteredData, setFilteredData] = useState(getPatientData);

  const handleInputChange = (e) => {
    setSearchReferredBy(e.target.value);
  };
// try to fetch data patient

  useEffect(()=>{
    setPatientData(patientData);
  },[patientData])

  const search_regNo = () => {
    const filteredData = getPatientData.filter((item) => {
      return item.regNo.includes(searchRegNo);
    });
    setFilteredData(filteredData);
  };
  console.log(getPatientData)

  const search_name = () => {
    const filteredData = getPatientData.filter((item) => {
      return item.firstName?.toLowerCase().includes(searchName.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  const search_referral = () => {
    const filteredData = getPatientData?.filter((item) => {
      return item.referredBy?.toLowerCase().includes(searchReferredBy.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  // useEffect(() => search_referral(), [searchReferredBy]);
  // useEffect(() => search_regNo(), [searchRegNo]);
  // useEffect(() => search_name(), [searchName]);

  const handleClear = () => {
    setSearchReferredBy("");
    setSearchName("");
    setSearchRegNo("");
    setFilteredPatients([]);
  };

  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="container bg-white p-6 mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">All Cases</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="regNo">
              Reg. No
            </label> */}
            <input
              type="text"
              placeholder="Reg .no."
              className="border px-2 py-1"
              value={searchRegNo}
              onChange={(e) => {
                setSearchRegNo(e.target.value);
                search_regNo();
              }}
            />
          </div>
          <div className="col-span-1">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label> */}
            <input
              type="text"
              placeholder="Name"
              className="border px-2 py-1"
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value);
                search_name();
              }}
            />
          </div>
          <div className="col-span-1">
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referredBy">
              Referred By
            </label> */}
            <input
              type="text"
              placeholder="Referred By"
              className="border px-2 py-1"
              value={searchReferredBy}
              onChange={(e) => {
                setSearchReferredBy(e.target.value);
                search_referral();
              }}
            />
          </div>
          <div className="col-span-3 mt-4">
            <button type="button" onClick={handleClear} className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300 ml-2">
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2 text-center">Patient List</h2>
        {/* {filteredData.length === 0 ? ( // Check if filteredData is empty
          <div className="text-center">
            <h2 className="font-semibold  text-xl">No cases to show.</h2>

            <p className="text-gray-500 text-md"> Get started by adding a new case.</p>
            <Link to="/add-patient">
              <div className="inline-flex items-center justify-center h-8 px-4 rounded-full border-black border-2"> + New Case</div>
            </Link>
          </div>
        ) : ( */}
          <table className="min-w-full border-collapse border border-gray-800">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="border p-2">Sr No</th>
                {/* <th className="border p-2">Date</th> */}
                <th className="border p-2">Patient</th>
                <th className="border p-2">referralDoctor</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">Total</th>
                {/* <th className="border p-2">Paid</th> */}
                {/* <th className="border p-2">Discount</th> */}
                <th className="border p-2">View Bill</th>
              </tr>
            </thead>
            <tbody>
              {getPatientData?.map((patient, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="border p-2">{index+1}</td>
                  <td className="border p-2">{patient.firstname} {patient.lastname}</td>
                  <td className="border p-2">{patient.referredBy}</td>
                  <td className="border p-2">{patient.gender}</td>
                  <td className="border p-2">{patient.total}</td>
                  <td className="border p-2">
                    <Link to={`/patient-bill/${patient._id}`} className="flex items-center px-2 py-1 rounded-md text-blue-500 hover:text-blue-900 ">
                      <BsFillEyeFill className="mr-1" /> View
                    </Link>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        {/* )} */}
      </div>
    </div>
  );
};

export default All_cases;
