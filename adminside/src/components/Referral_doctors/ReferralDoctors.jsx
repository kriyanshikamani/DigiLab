import React, { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete } from 'react-icons/md';
import axios from "axios";

const ReferralDoctors = () => {
  const [referrals, setReferrals] = useState([]);
  const [searchReferrername, setSearchReferrername] = useState("");
  const [searchMobilenumber, setSearchMobilenumber] = useState("");

  useEffect(() => {
    fetchReferrals();
  }, []);

  const fetchReferrals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/referral/getall");
      console.log("Fetched data:", response.data); // Add this line to check the fetched data
      setReferrals(response.data);
    } catch (error) {
      console.error("Error fetching referral data:", error);
    }
  };

  const handleClear = () => {
    setSearchReferrername("");
    setSearchMobilenumber("");
    fetchReferrals();
  };

  const filteredData = referrals.filter((referral) => {
    const referrerName = `${referral.firstName} ${referral.lastName}`.toLowerCase();
    const mobile = referral.mobile || "";

    return (
      referrerName.includes(searchReferrername.toLowerCase()) &&
      (searchMobilenumber === "" || mobile.includes(searchMobilenumber))
    );
  
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleDeleteClick = async (referralId) => {
    if (window.confirm("Are you sure you want to delete this referral?")) {
      try {
        await axios.delete(`http://localhost:3000/referral/${referralId}`); 
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error('Error deleting referral:', error);
      }
    }
  };

  const handleDeleteConfirm = () => {
    // Perform delete operation here
    setShowConfirmation(false);
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
  };
  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
      return formattedDate;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };
  // const currentDate = new Date().toISOString().slice(0, 10);
  
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-3">
          <div className="relative flex-row col-span-2">
            <input
              placeholder="Search by Referrer Name"
              type="text"
              id="Referrername"
              name="Referrername"
              value={searchReferrername}
              onChange={(e) => setSearchReferrername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <BiSearchAlt2 className="text-gray-400 w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2" />
          </div>
          <div className="relative flex-row col-span-2">
            <input
              placeholder="Search by Mobile Number"
              type="text"
              id="mobile"
              name="mobile"
              value={searchMobilenumber}
              onChange={(e) => setSearchMobilenumber(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <BiSearchAlt2 className="text-gray-400 w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2" />
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={handleClear}
              className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300 ml-2"
            >
              Clear
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Referrer Doctors List</h2>

        <table className="min-w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-blue-900 text-white">
              <td className="border font-bold p-2">ID</td>
              <td className="border font-bold p-2">Reg. On</td>
              <td className="border font-bold p-2">Referrer</td>
              <td className="border font-bold p-2">Address</td>
              <td className="border font-bold p-2">Mobile Number</td>
              <td className="border font-bold p-2">Actions</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((referral, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border p-2">{index+1}</td>
                <td className="border p-2">{formatDate(referral.registeredOn)}</td>
                <td className="border p-2">{`${referral.firstName} ${referral.lastName}`}</td>
                <td className="border p-2">{referral.address}</td>
                <td className="border p-2">{referral.mobile}</td>

                <td className="border p-2">
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/edit-referral-doctors/${referral._id}`} 
                      className="flex items-center px-2 py-1 rounded-md text-blue-500 hover:text-blue-900"
                    >
                      <HiPencil className="mr-1" /> Edit
                    </Link>
                    <button
        onClick={() => handleDeleteClick(referral._id)}
        className="flex items-center px-2 py-5 rounded-md text-red-500 hover:text-blue-900"
      >
        <MdDelete className="mr-1" />
        Delete
      </button>
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-10"></div> {/* Add the overlay */}
        <div className="bg-white p-4 rounded-md shadow-md relative z-10">
         
            <p className="mb-4">Are you sure you want to delete?</p>
            <div className="flex justify-end">
              <button
            
                className="px-3 py-1 text-white bg-red-500 rounded-md mr-2"
              >
                Delete
              </button>
              <button
                onClick={handleCancelClick}
                className="px-3 py-1 text-gray-600 bg-gray-200 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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

export default ReferralDoctors;
