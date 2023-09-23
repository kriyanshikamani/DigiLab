import React, { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const TestPackages = () => {
  const [packages, setTestpackage] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const { testpackageId } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("http://localhost:3000/testpackage/getall");
        setTestpackage(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  const handleDeleteClick = async (testpackageId) => {
    if (window.confirm("Are you sure you want to delete this test package?")) {
      try {
        await axios.delete(`http://localhost:3000/testpackage/${testpackageId}`);
        fetchData();
      } catch (error) {
        console.error("Error deleting test package:", error);
      }
    }


    const updateTestPackages = (updatedPackages) => {
      setTestpackage(updatedPackages);
    };
  };
  return (
    <div className="container mx-auto bg-white p-6">
        <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Test Packages</h1>
        <Link to="/add-test-package" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Add Test Package</Link>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <span className="text-sm text-gray-500 my-2">Please email to any feedbacks or suggestions regarding this feature to digilab@gmail.com</span>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <input type="text" placeholder="Search by Test Package Name" className="border-2 border-gray-300 p-1 rounded-lg" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mx-2 rounded">Search</button>
        </div>
      </div>
      <div className="flex flex-row my-4">
        <table className="p-2xl">
          <thead>
            <tr className="border bg-blue-900 text-center text-white py-6 px-6">
              <td>Sr no.</td>
              <td>Test Package Name</td>
              <td>Fees</td>
             
              <td>Included tests and panels</td>
              <td colSpan={2}>Action</td>
            </tr>
          </thead>
          <tbody>
            {packages.map((item,index) => (
              <tr key={item.id} className="border hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.price}</td>
               
                <td className="py-2 px-4">
                  {item.topics.map((test) => (
                    <span>{test}, </span>
                  ))}
                </td>
                <td className="py-1 px-2">
                  <Link 
                  // to="/edit-test-package" 
                  to={`/edit-test-package/${item._id}`} >
                  <button type="button"
                    // onClick={()=>{handleUpdate(item._id)}}
                    className="flex items-center px-2 py-1 rounded-md text-blue-500 hover:text-blue-900"
                  >
            <HiPencil className="mr-1" /> Edit
                  </button></Link>
                </td>
                <td>
                <div className="flex items-center">
      <button
        onClick={() => handleDeleteClick(item._id)}
        className="flex items-center px-2 py-1 rounded-md text-red-500 hover:text-blue-900"
      >
        <MdDelete className="mr-1" />
        Delete
      </button>

     
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

export default TestPackages;
