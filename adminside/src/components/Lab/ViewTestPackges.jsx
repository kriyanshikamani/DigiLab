import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {Link} from "react-router-dom"

const ViewTestPackages = () => {
  const topics = ["CK-MB", "Clotting Time", "Bilirubin Total, Direct and Indirect", "Blood Group", "Blood Sugar Fasting", "Blood Sugar PP", "Blood Urea", "Blood Urea Nitrogen", "Blood "];
  const categories = [
    'Chemistry',
    'Biology',
    'Physics',
    'Microbiology',
    'Genetics',
    'Biochemistry',
    'Environmental Science',
  ];

  const [selectedCategory, setSelectedCategory] = useState('none');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [patientName, setPatientName] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToList = (event) => {
    const selectedOption = event.target.value;
    setSelectedOptions([...selectedOptions, selectedOption]);
  };

  const removeFromList = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Update Patient Details</h1>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg px-3 py-2 w-full"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label className="block font-bold mb-2">Select Laboratory Category:</label>
            <select
              className="form-select w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="none">None</option>
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="text-xl font-semibold py-2">Tests</div>
      <div className="col-span-5 py-2">
        <select className="form-select" aria-label="Default select example" onChange={addToList}>
          <option value="none">None</option>
          {topics.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <div className="border-gray-400 border-2 rounded-md">
        <div className="grid grid-cols-1 gap-3 items-center my-1">
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300 ml-2">
          Clear
        </button>
      </div>

      {/* Table to display selected information */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Selected Information</h2>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Tests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">{patientName}</td>
              <td className="py-2 px-4 border">{selectedCategory !== 'none' ? selectedCategory : 'None'}</td>
              <td className="py-2 px-4 border">
                {selectedOptions.length > 0 ? (
                  <ul>
                    {selectedOptions.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                ) : (
                  'None'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTestPackages;
