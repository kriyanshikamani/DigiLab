import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewCategory = () => {
  const [category, setCategory] = useState({
    categoryname: "",
  });

  const handleSaveClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/testcategory/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });

      if (!response.ok) {
        throw new Error("Error saving category data");
      }

      // Assuming the server responds with a success message
      const data = await response.json();

      toast.success("Category Added Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error saving category data");
    }
  };

  const handleCategoryNameChange = (e) => {
    setCategory({
      ...category,
      categoryname: e.target.value,
    });
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">New category</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Category Name"
              className="border rounded-lg px-3 py-2 w-full"
              value={category.categoryname}
              onChange={handleCategoryNameChange}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddNewCategory;
