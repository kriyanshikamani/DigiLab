import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const AddTestPackages = () => {
  const topics = ["Bleeding Time", "Clotting Time", "Serum Bilirubin (Indirect)", "Serum Bilirubin (Direct)", "Serum Bilirubin (Total)", "Blood Sugar PP", "Fasting Blood Sugar", "Differential Leucocyte Count", "Total Leukocyte Count", "Hemoglobin", "Erythrocyte Sedimentation Rate (Wintrobe)", "Random Blood Sugar", "Blood Group & Rh.", "HBsAg", "Platelet Count", "Hepatitis C Virus", "HCV", "HIV (Card Test)", "Differential Leucocyte Count", "Serum Urea", "Serum Creatinine", "Total Leukocyte Count", "Hemoglobin", "Serum Potassium", "Serum Sodium"];

  // const [selectedCategory, setSelectedCategory] = useState("none");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [testpackage, setTestpackage] = useState({
    name: "",
    price: "",
    category: "",
    topics: [],
  });

  const categories = [
    { id: 1, name: "microbiology" },
    { id: 2, name: "biochemistry" },
    {id: 3, name: "hematology"}
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTestpackage({
      ...testpackage,
      [name]: value,
    });
  };

  const addToList = (event) => {
    const selectedOption = event.target.value;
    setSelectedOptions([...selectedOptions, selectedOption]);
    setTestpackage({
      ...testpackage,
      topics: [...testpackage.topics, selectedOption],
    });
  };
  

  const removeFromList = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);
  };

  const handleUpdatedClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/testpackage/store", testpackage);
      if (response.status === 201) {
        // Replace with the actual success status code
        toast.success("test package Added Successfully");
      } else {
        toast.error("Error saving user data");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error saving user data");
    }

    console.log(testpackage);
  };

  return (
    <div className="container bg-white p-6">
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Add Test Package</h1>
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <input type="text" placeholder="Name" name="name" value={testpackage.name} onChange={handleInputChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div className="col-span-1">
              <input type="number" placeholder="Price" name="price" value={testpackage.price} onChange={handleInputChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div className="col-span-2">
              <label className="block font-bold mb-2">Select Laboratory Category:</label>
              <select className="form-select w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50" name="category" id="category"  onChange={handleInputChange}>
                <option value="none">None</option>
                <option value="microbiology">Microbiology</option>
                <option value="biochemistry">Biochemistry</option>
                <option value="hematology">Hematology</option>
              </select>

              {/* <input type="text" placeholder="Category" name="category" value={testpackage.category} onChange={handleInputChange} className="border rounded-lg px-3 py-2 w-full" /> */}
              {/* {selectedCategory !== "none" && (
                <div className="mt-4">
                  <p className="font-semibold">You have selected: {selectedCategory}</p>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>

      <div className="text-xl font-semibold py-2">Tests</div>
      <div className="col-span-5 py-2">
      <select className="form-select" aria-label="Default select example" name="topics" onChange={(event) => { handleInputChange(event); addToList(event); }}>
  <option value="none">None</option>
  {topics.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ))}
</select>

        {/* <input type="text" placeholder="Topics" name="topics" value={testpackage.topics} onChange={handleInputChange} className="border rounded-lg px-3 py-2 w-full" /> */}
      </div>
      <div className="border-gray-400 border-2  rounded-md ">
        <div className="grid grid-cols-1 gap-3 items-center my-1 ">
          <div className="flex border rounded-md p-3">
            {selectedOptions.map((option, index) => (
              <div key={index} className="flex justify-between items-center me-3 rounded-md text-sm bg-gray-300 px-3 py-2">
                <span className="me-2">{option}</span>
                <AiOutlineClose className="w-4 h-4 cursor-pointer" onClick={() => removeFromList(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button type="button" onClick={handleUpdatedClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300 ml-2">Clear</button>
      </div>
    </div>
  );
};

export default AddTestPackages;
