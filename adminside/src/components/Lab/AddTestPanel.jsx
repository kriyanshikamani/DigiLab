import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddTestPanel = () => {
  const tests = ["Hemoglobin", "Total Leukocyte Count", "Differential Leucocyte Count", "Differential Leukocyte Count (Absolute count)", " Neutrophil Lymphocyte Ratio", " Platelet Count", "Total RBC Count", "Hematocrit Value", "Hct", "Mean Corpuscular Volume", "MCV", "Mean Cell Haemoglobin", "MCH", "Mean Cell Haemoglobin CON", "MCHC", "Mean Platelet Volume", "MPV", "R.D.W. - CV", "R.D.W.-SD","Hemoglobin", "Total Leukocyte Count", "Differential Leucocyte Count"," Platelet Count", "Total RBC Count", "Hematocrit Value", "Hct", "Mean Corpuscular Volume", "MCV", "Mean Cell Haemoglobin", "MCH", "Mean Cell Haemoglobin CON", "MCHC", "Mean Platelet Volume", "MPV", "R.D.W.-SD", "R.D.W.-CV", "P-LCR", "P.D.W."];
  const topics = ["CBC(With absolute counts)", "Complete Blood Count(CBC)", "CBC With ESR", "Liver Function Test(LFT)", "Kidney Function Test(KFT)", "Lipid Profile", "Thyroid Profile", "Vitamin B12"];

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedTests, setSelectedTests] = useState([]);
  const categories = [
    { id: 1, name: "microbiology" },
    { id: 2, name: "biochemistry" },
    { id: 3, name: "hematology" },
  ];

  
  const [testpanel, setTestPanel] = useState({
    name: "",
    price: "",
    category: "",
    tests: [],
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTestPanel((prevTestPanel) => ({
      ...prevTestPanel,
      [name]: value,
    }));
  };
  const handleCategoryChange = (event) => {
    setTestPanel({
      ...testpanel,
      category: event.target.value,
    });
  };
  
 
  
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addToList = (event) => {
    const selectedOption = event.target.value;
    setSelectedOptions([...selectedOptions, selectedOption]);
    setTestPanel({
      ...testpanel,
      tests: [...testpanel.tests, selectedOption],
    });
  };

  const removeFromList = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);

    const updatedTests = [...testpanel.tests];
    updatedTests.splice(index, 1);
    setTestPanel({
      ...testpanel,
      tests: updatedTests,
    });
  };

  const handleUpdatedClick = async () => {
    try {
      console.log("Sending POST request with data:", testpanel);
      const response = await axios.post("http://localhost:3000/testpanel/store", testpanel);
      console.log("Response:", response);
      if (response.status === 201) {
        toast.success("Tests Added Successfully");
         navigate("/test-panels");
      } else {
        toast.error("Error saving user data");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error saving user data");
    }
  };
  

  return (
    <div className="container bg-white p-6">
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Add Test Panel</h1>
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <input type="text" name="name" placeholder="Name" className="border rounded-lg px-3 py-2 w-full" value={testpanel.name} onChange={handleInputChange} />
            </div>
            <div className="col-span-1">
              <input type="number" name="price" placeholder="Price" className="border rounded-lg px-3 py-2 w-full" value={testpanel.price} onChange={handleInputChange} />
            </div>
            {/* For selecting laboratory category */}
            <div className="col-span-2">
              
            <label className="block font-bold mb-2">Select Laboratory Category:</label>
              <select className="form-select w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50" name="category" id="category"  onChange={handleCategoryChange}>
                <option value="none">None</option>
                <option value="microbiology">Microbiology</option>
                <option value="biochemistry">Biochemistry</option>
                <option value="hematology">Hematology</option>
              </select>

              {/* For selecting laboratory tests */}
              {/* <select
                className="form-select w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                name="category"
                value={selectedTests} 
                onChange={handleInputChange} 
              >
                <option value="none">None</option>
                {topics.map((category, index) => (
                  <option value={category} key={index}>
                    {category}
                  </option>
                ))}
              </select> */}


            </div>
          </div>
        </div>
      </div>

      <div className="text-xl font-semibold py-2">Tests</div>
      <div className="col-span-5 py-2">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(event) => {
            handleInputChange(event);
            addToList(event);
          }}
        >
          <option value="none">None</option>
          {tests.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
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
        <button
          // to="/view-test-panel"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleUpdatedClick}
        >
          Save
        </button>
        <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300 ml-2">Clear</button>
      </div>
    </div>
  );
};

export default AddTestPanel;
