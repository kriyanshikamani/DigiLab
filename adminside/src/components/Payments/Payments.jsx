import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { BsFillEyeFill } from "react-icons/bs";


const Payments = () => {
  const [patients, setPatients] = useState([
    {
      id: "1001",
      firstName: "John",
      referredBy: "Dr. Smith",
    },
    {
      id: "1002",
      firstName: "Smith",
      referredBy: "Dr. Shah",
    },]);
  
  const [searchName, setSearchName] = useState("");

  const [filteredData, setFilteredData] = useState(patients);

  const handleInputChange = (e) => {
    setSearchReferredBy(e.target.value);
  };

  
  
  const search_name = () => {
    const filteredData = patients.filter((item) => {
      return item.firstName?.toLowerCase().includes(searchName.toLowerCase());
    });
    setFilteredData(filteredData);
  };

 

 
  useEffect(() => search_name(), [searchName]);

  const handleClear = () => {
   
    setSearchName("");
  
    setFilteredPatients([]);
  };

  const currentDate = new Date().toISOString().slice(0, 10);

  return (
   <>
    <div className="conitaner mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Payments</h2>
   
    <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         
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
    
          <div className="col-span-3 mt-4">
            <button type="button" onClick={handleClear} className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300 ml-2">
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
       
     
        <table className="min-w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border p-2">ID</th>
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Referred By</th>
              <th className="border p-2">Date By</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Amount</th>
       
              <th className="border p-2">View Bill</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((patient, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border p-2">{patient.id}</td>
                <td className="border p-2">{patient.firstName}</td>
                <td className="border p-2">{patient.referredBy}</td>

                <td className="border p-2">{currentDate}</td>
                <td className='border p-2'>Time</td>
                <td className="border p-2">Amount </td>
             
                
                <td className="border p-2">
                  <Link  to="/patient-bill" className="flex items-center px-2 py-1 rounded-md text-blue-500 hover:text-blue-900 ">
                    <BsFillEyeFill className="mr-1" /> View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>
      </div>
    </>
  )
}

export default Payments