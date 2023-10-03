import React, { useContext, useState, useEffect } from "react";
import SharedContext from "../../contexts/SharedContext";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Addpatient = () => {
  const { formData } = useContext(SharedContext);
  // const [patientData, setpatientData] = useState({});
  const [discount, setDiscount] = useState(0);
  const [amountReceived, setAmountReceived] = useState(0);

  const [patientData, setPatientData] = useState({
    regNo: "",
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    email: "",
    BloodGroup: "",
    referredBy: "",
    phone: "",
    address: "",
    receivedBy: "",
    total: 0,
    tests: [],
  });

  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    fetchReferrals();
  }, []);

  const fetchReferrals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/referral/getall");
      setReferrals(response.data);
    } catch (error) {
      console.error("Error fetching referral data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPatientData({ ...patientData, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Values:", patientData);
    try {
      const response = await axios.post("http://localhost:3000/patient/store", patientData);
      if (response.status === 201) {
        toast.success("Patient Added Successfully");
      } else {
        toast.error("Error saving patient data");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error saving patient data");
    }
  };

  const handleClear = () => {
    setSearchReferredBy("");
    setFilteredPatients([]);
  };

  const topics = [
   {name:"BT & CT",price:100},
   {name:"Blood Sugar Fasting & PP",price:100},
    {name:"Bilirubin Total & Direct",price:100},
    {name:"HB,TLC,DLC,ESR",price:100},
    {name:"Serum Electrolytes",price:100},
    { name: "CBC (Complete Blood Count)", price: 1000 },
    { name: "CBC with Absolute Count", price: 1000 },
    { name: "CBC with ESR", price: 1200 },
    { name: "Liver function Test", price: 1500 },
  ];

  const testsArr = [];

  topics.map((item) => {
    testsArr.push(item.name);
  });

  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  // const [total, setTotal] = useState(0);

  React.useEffect(() => {
    const totalPrice = selectedTopics.reduce((acc, topic) => acc + topic.price, 0);
    setPatientData((prevData) => ({
      ...prevData,
      total: totalPrice,
    }));
  }, [selectedTopics]);

  const addToList = (event) => {
    const selectedOptionName = event.target.value;
    const selectedTopic = topics.find((topic) => topic.name === selectedOptionName);

    if (selectedTopic) {
      setSelectedOptions([...selectedOptions, selectedTopic]);
      setSelectedTopics((prevSelectedTopics) => [...prevSelectedTopics, selectedTopic]);

      // Update patientData tests array
      setPatientData((prevData) => ({
        ...prevData,
        tests: [...prevData.tests, { name: selectedTopic.name, price: selectedTopic.price }],
      }));
    }
  };

  const removeFromList = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <ToastContainer /> {/* Add the ToastContainer here */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-sans font-semibold mb-4 bg-slate-100">Add New Patient</h2>
        <h2 className="text-xl font-semibold">Patient Details</h2>
        <div className="text-sm grid grid-cols-3 gap-4">
          {formData.map((field) => (
            <div key={field.name} className="mb-4">
              <label htmlFor={field.name} className="text-gray-700 font-semibold mb-2 block">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea id={field.name} name={field.name} required={field.required} value={patientData[field.name] || ""} onChange={handleChange} className="w-full border-2 border-gray-500 rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500" />
              ) : field.type === "radio" ? (
                <div className="flex">
                  {/* {field.options.map((option, index) => ( */}
                  <div className="flex items-center mr-4">
                    <input type="radio" name="gender" required={field.required} value="Male" onChange={handleChange} className="w-4 h-4 border-2 border-gray-500 rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500" />
                    <label htmlFor="Male" className=" text-gray-700 font-semibold w-1/2 mb-2 ml-2">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input type="radio" name="gender" required={field.required} value="Female" onChange={handleChange} className="w-4 h-4 border-2 border-gray-500 rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500" />
                    <label htmlFor="Female" className=" text-gray-700 font-semibold w-1/2 mb-2 ml-2">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input type="radio" name="gender" required={field.required} value="Other" onChange={handleChange} className="w-4 h-4 border-2 border-gray-500 rounded-lg py-2 px-2 text-gray-700 focus:outline-none  focus:border-gray-500" />
                    <label htmlFor="Other" className=" text-gray-700 font-semibold w-1/2 mb-2 ml-2">
                      Other
                    </label>
                  </div>
                  {/* ))} */}
                </div>
              ) : (
                <input type={field.type} id={field.name} name={field.name} required={field.required} value={patientData[field.name] || ""} onChange={handleChange} className="w-full h-8 border-2 border-gray-500 rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500" />
              )}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold">Case Details</h2>
          <div key="referredBy" className="mb-4">
            <label htmlFor="referredBy" className="text-gray-700 font-semibold mb-2 block">
              Referred by (Doctor)
            </label>
            <select id="referredBy" name="referredBy" required value={patientData.referredBy || ""} onChange={handleChange} className="w-full h-10 border-2 border-gray-500 rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500">
              <option value="" className="font-semibold">
                Select a doctor
              </option>
              {/* Map over referral data */}
              {referrals.map((referral) => (
                <option className="font-semibold" key={referral._id} value={`${referral.firstName} ${referral.lastName}`}>
                  {`${referral.firstName} ${referral.lastName}`} - {referral.mobile} - {referral.degree}-{referral.address}
                </option>
              ))}
            </select>
            <Link to="/add-referral" type="button" className="bg-gray-300 mx-2 font-normal text-md  mt-2 py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300">
              + Add new
            </Link>
          </div>
        </div>

        <div className="text-xl font-semibold py-2">Tests</div>
        <div className="col-span-5 py-2">
          <select className="form-select w-full h-10 border-2 border-gray-500 rounded-lg py-2 px-2 text-gray-700 focus:outline-none focus:border-gray-500" aria-label="Default select example" onChange={addToList}>
            <option value="none">None</option>
            {topics.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name} - {item.price}
              </option>
            ))}
          </select>
        </div>
        <div className="border-gray-400 border-2 rounded-md">
          <div className="grid grid-cols-1 gap-3 items-center my-1">
            <div className="flex border rounded-md p-3">
              {selectedOptions.map((option, index) => (
                <div key={index} className="flex justify-between items-center me-3 rounded-md text-sm bg-gray-300 px-3 py-2">
                  <span className="me-2">
                    {option.name} - {option.price}
                  </span>
                  <AiOutlineClose className="w-4 h-4 cursor-pointer" onClick={() => removeFromList(index)} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <div className="mb-4">
          <p className="flex items-center">
            Total: Rs.
            <span className="w-20 ml-2 p-1 border rounded">{patientData.total}</span>
          </p>
        </div>

        <div>
          <button onClick={handleSubmit} type="submit" className="bg-blue-500 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none border focus:border-blue-300">
            Create case
          </button>
          {/* <Link to="/patient-bill" type="submit" className="bg-blue-500 mx-2 font-normal text-white text-md py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none border focus:border-blue-300" onClick={handleSubmit}>
              Create case
            </Link> */}
          <button type="button" onClick={handleClear} className="bg-gray-300 mx-2 font-normal text-md py-2 px-3 rounded-lg hover:bg-gray-400 focus:outline-none border focus:border-gray-300">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addpatient;
