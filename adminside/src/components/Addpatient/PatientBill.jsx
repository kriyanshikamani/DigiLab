import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientBill = () => {
  const { patientId } = useParams();
  const [patientData, setpatientData] = useState(null);

  const getPatientData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/patient/${patientId}`);
      console.log("Response:", response.data); // Log the response data for debugging
      setpatientData(response?.data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  useEffect(() => {
    getPatientData();
  }, [patientId]);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  const inData = {
    billNumber: 1006,
    registrationNumber: 1006,
    patientName: "Ms. Vidhi patel",
    ageSex: "20 YRS 2 months 4 days / F",
    mobile: "4569879532",
    referredBy: "Dr. Aastha  (MBBS)",
    date: "08/08/2023",
    receivedBy: "Priya",
    investigations: [
      { name: "AEC", fee: 100 },
      { name: "ABG", fee: 100 },
    ],
    totalFees: 200,
    discount: 200,
    amountPaid: 0,
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-2 gap-8">
      <div>
        <div className="border border-black px-2">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">DigiLab</h2>
            <p className="text-gray-500">Phone no.: 9876584231</p>
            {/* Add the barcode here */}
            <img src={`https://barcode.tec-it.com/barcode.ashx?data=${patientData.regNo}&code=Code128&dpi=96`} alt="Barcode" className="w-24 ml-auto p-2" />
            {/* <p className="text-xl font-semibold">Bill no. {patientData.regNo}</p> */}
          </div>
          <p className="text-lg">Reg. no. {patientData.regNo}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="justify-start">
              <p className="text-lg font-semibold">Name : {patientData.firstname} </p>
              <p className="text-md">Age : {patientData.age}</p>
              <p className="text-md">Mobile: {patientData.phone}</p>
            </div>

            <div>
              <div className="justify-end">
                <p className="text-md font-semibold">Referred by: {patientData.referredBy}</p>
                <p className="text-md">Date: {inData.date}</p>
                <p className="text-md">Received by: {patientData.receivedBy}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl  text-center font-semibold">Case Details:</h3>
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-md font-semibold bg-gray-200 border border-gray-300">Lab investigations</th>
                  <th className="px-4 py-2 text-right text-md font-semibold bg-gray-200 border border-gray-300">Fee</th>
                </tr>
              </thead>
              <tbody>
                {patientData.tests.map((investigation, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-left text-md border border-gray-300">{investigation.name}</td>
                    <td className="px-4 py-2 text-right text-md border border-gray-300 pr-6">Rs. {investigation.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-xl text-center font-semibold">Payment Details:</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="justify-start">
                <p className="text-md font-semibold">Total Fees:</p>
                <p className="text-md font-semibold">Discount:</p>
                <p className="text-md font-semibold">Amount Paid:</p>
              </div>
              <div className="justify-end text-right">
                <p className="text-md">Rs. {patientData.total}</p>
                {/* <p className="text-md">Rs. {patientData.discount.toFixed(2)}</p>
                <p className="text-md">Rs. {patientData.amountPaid.toFixed(2)}</p> */}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center col-span-2">
            <p className="text-lg font-bold">~~~ Thank You ~~~</p>
          </div>
        </div>
      </div>

      <div></div>
      <div className="justify-start py-3">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-2 p mx-2 border-blue-700 hover:border-blue-500 rounded px-7 py-1">Print</button>
        <Link to="/complete-blood-count" className="bg-white hover:bg-gray-200 border-blue-500  text-blue-900 font-bold border   rounded px-7 py-1">
          Enter Results
        </Link>
        {/* <Link to="/cbc-with-abosulte-count" className="bg-white hover:bg-gray-200 border-blue-500  text-blue-900 font-bold border   rounded px-7 py-1">
          Enter Results
        </Link> */}
        {/* <Link to="/cbc-with-esr" className="bg-white hover:bg-gray-200 border-blue-500  text-blue-900 font-bold border   rounded px-7 py-1">
          Enter Results
        </Link> */}
        {/* <Link to="/liver-function-test" className="bg-white hover:bg-gray-200 border-blue-500  text-blue-900 font-bold border   rounded px-7 py-1">
          Enter Results
        </Link> */}

        <button className="bg-white hover:bg-gray-200 text-Black mx-16 font-bold border-black border-2 rounded px-7 py-1">Settings</button>
      </div>
    </div>
  );
};

export default PatientBill;
