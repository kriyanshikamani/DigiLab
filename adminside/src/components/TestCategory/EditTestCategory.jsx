import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTestCategory = () => {

  const { testcategoryId } = useParams();
  const [testcategory, setTestCategory] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    console.log("TestCategory ID:", testcategoryId)
    if (testcategoryId) {
      // Fetch the testcategory data for editing
      fetchTestCategoryData();
    }
  }, [testcategoryId]);

  const fetchTestCategoryData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/testcategory/${testcategoryId}`);
      const updatedTestCategory = response?.data;
      setEditedCategoryName(updatedTestCategory.categoryname); // Set the edited category name
      setTestCategory(updatedTestCategory);
    } catch (error) {
      console.error('Error fetching testcategory data:', error);
    }
  };
  
  const handleUpdateClick = async () => {
    try {
      await axios.put(`http://localhost:3000/testcategory/${testcategoryId}`, {
        categoryname: editedCategoryName,
      });
      alert("test category updated successfully.");
        navigate("/test-categories");
      // Handle success (e.g., show a success message or navigate back)
    } catch (error) {
      console.error('Error updating test category:', error);
      // Handle error (e.g., show an error message)
    }
  };
  
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Edit category</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input
  type="text"
  placeholder="Category Name"
  className="border rounded-lg px-3 py-2 w-full"
  value={editedCategoryName}
  onChange={(e) => setEditedCategoryName(e.target.value)}
/>

          </div>
        </div>
      </div>
      <div>
      <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={handleUpdateClick}
>
  Save
</button>
 
      </div>
    </div>
  );
};

export default EditTestCategory;
