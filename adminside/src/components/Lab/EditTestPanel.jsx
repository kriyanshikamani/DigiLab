import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";

const EditTestPanel = () => {

  const { testpanelId } = useParams();

  const navigate = useNavigate();

  const topicList = [
    "Hemoglobin", "Total Leukocyte Count", "Differential Leucocyte Count", "Differential Leukocyte Count (Absolute count)", " Neutrophil Lymphocyte Ratio", " Platelet Count", "Total RBC Count", "Hematocrit Value", "Hct", "Mean Corpuscular Volume", "MCV", "Mean Cell Haemoglobin", "MCH", "Mean Cell Haemoglobin CON", "MCHC", "Mean Platelet Volume", "MPV", "R.D.W. - CV", "R.D.W.-SD","Hemoglobin", "Total Leukocyte Count", "Differential Leucocyte Count"," Platelet Count", "Total RBC Count", "Hematocrit Value", "Hct", "Mean Corpuscular Volume", "MCV", "Mean Cell Haemoglobin", "MCH", "Mean Cell Haemoglobin CON", "MCHC", "Mean Platelet Volume", "MPV", "R.D.W.-SD", "R.D.W.-CV", "P-LCR", "P.D.W."
  
  ];

  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    topics: [],
  });

  useEffect(() => {
    fetchData();
  }, [testpanelId]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/testpanel/${testpanelId}`);
      const updatedTestPanel = response?.data;
      setData(updatedTestPanel);
    } catch (error) {
      console.error("Error fetching tests data:", error);
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const updatedTopics = [...data.topics, selectedValue];
    setData({ ...data, topics: updatedTopics });
  };

  const removeFromList = (index) => {
    const updatedTopics = [...data.topics];
    updatedTopics.splice(index, 1);
    setData({ ...data, topics: updatedTopics });
  };

  const handleUpdatedClick = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/testpanel/${testpanelId}`, data);
      if (response.status === 200) {
        toast.success("Test Package Updated Successfully");
        navigate("/test-packages");
      } else {
        toast.error("Tests Update Failed");
      }
    } catch (error) {
      console.error("Error updating tests:", error);
    }
  };

  return (
    <div className="container bg-white p-6">
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Edit Test Panel</h1>
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <input type="text" placeholder="Name" name="name" value={data.name} onChange={handleInputChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div className="col-span-1">
              <input type="number" placeholder="Price" name="price" value={data.price} onChange={handleInputChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div className="col-span-2">
              <label className="block font-bold mb-2">Select Laboratory Category:</label>
              <select className="form-select w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50" name="category" value={data.category} onChange={handleInputChange}>
                <option value="none">None</option>
                <option value="microbiology">Microbiology</option>
                <option value="biochemistry">Biochemistry</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xl font-semibold py-2">Tests</div>
      <div className="col-span-5 py-2">
        <select className="form-select" aria-label="Default select example" name="topics" onChange={handleSelectChange} value="">
          <option value="" disabled>
            Select a topic
          </option>
          {topicList.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="border-gray-400 border-2 rounded-md ">
        <div className="grid grid-cols-1 gap-3 items-center my-1 ">
          <div className="flex border rounded-md p-3">
          {data.topics && data.topics.map((option, index) => (
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

export default EditTestPanel;

