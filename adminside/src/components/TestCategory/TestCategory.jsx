import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

const TestCategory = () => {
  const [testCategories, setTestCategories] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    async function fetchTestCategoryData() {
      try {
        const response = await axios.get("http://localhost:3000/testcategory/getall");
        setTestCategories(response?.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
        // Display a user-friendly error message here
      }
    }
  
    fetchTestCategoryData();
  }, []);
  

  const handleDeleteClick = async (testcategoryId) => {
    if (window.confirm("Are you sure you want to delete this test category?")) {
      try {
        await axios.delete(`http://localhost:3000/testcategory/${testcategoryId}`); 
        fetchData(); // Update the table after deletion
      } catch (error) {
        console.error('Error deleting test category:', error);
      }
    }
  };

 

  return (
    <div className="container mx-auto bg-white p-6">
    <div className="flex flex-row justify-between">
    <h1 className="text-2xl font-bold">Test Cetegory</h1>
     
        <Link
          to="/add-category"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">        
         Add TestCategory
        </Link>
    
</div>
<div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <span className="text-sm text-gray-500 my-2">Please email to any feedbacks or suggestions regarding this feature to digilab@gmail.com</span>
        </div>
      </div>
      <table className="my-2">
        <thead>
          <tr className="border bg-blue-800 text-white py-6 px-6">
            <th className="py-1">ID</th>
            <th className="py-1">Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {testCategories.map((category, index) => (
    <tr key={index} className="border hover:bg-gray-100">
      {/* Display the category.id */}
      <td className="py-4 px-4">{index+1}</td>
      <td className="py-4 px-4">{category.categoryname}</td>
      <td className="py-4 px-4">
        <Link
          to={`/edit-test-category/${category._id}`} 
          className="flex items-center px-2 py-1 rounded-md text-blue-500 hover:text-blue-900 "
        >
          <HiPencil className="mr-1" /> Edit
        </Link>
        <button
          onClick={() => handleDeleteClick(category._id)}
          className="flex items-center px-2 py-5 rounded-md text-red-500 hover:text-blue-900"
        >
          <MdDelete className="mr-1" />
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>

     
    </div>
  );
};

export default TestCategory;
