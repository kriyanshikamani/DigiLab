import React from "react";
import { HiPencil } from "react-icons/hi";
import {Link} from "react-router-dom"

const ViewTestPanel = () => {
  const testPanelData = [
    { id: 1, name: "humonio", fee: 100, changeFee: "Change" },
    // Add more data items as needed
  ];

  return (
    <div className="container mx-auto mt-4">
     <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Test Panel</h1>
        <Link
          to="/edit-test-panel"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center"
        >
          <HiPencil className="mr-1" />
          Edit
        </Link>
      </div>
 
      <table className="min-w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-blue-900 text-white">
            <th className="px-4 py-2">S. no.</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Fee</th>
            <th className="px-4 py-2">Change Fee</th>
          </tr>
        </thead>
        <tbody>
          {testPanelData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.fee}</td>
              <td className="border px-4 py-2">{item.changeFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTestPanel;
