import React from "react";
import "./print.css";

const PrintPage = ({ labInfo, patientData, TestName, testResults, inputValues }) => {
  return (
    <div className="print-page">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{labInfo.name}</h1>
        </div>
        <div className="text-right">
          {/* Lab contact info */}
        </div>
      </header>

      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="mb-4 flex">
          <div className="flex-1 text-left">
            <h2 className="text-lg font-bold">Patient Information</h2>
            <p>Name: {patientData.name}</p>
            <p>Age: {patientData.age}</p>
            <p>Sex: {patientData.sex}</p>
            <p>PID: {patientData.pid}</p>
          </div>
          <div className="flex-1 text-right">
            <p>Ref. By: {patientData.referredBy}</p>
            <p>Date: {patientData.date}</p>
            <p>Receive By: {patientData.receivedBy}</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Test Results</h2>
          <h2 className="text-lg font-bold text-center py-3">{TestName.name}</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black text-[17px]">
                <td className="px-4 font-bold ">Investigation</td>
                <td className="px-4 font-bold  text-right">Result</td>
                <td className="px-4 font-bold  text-right">Unit</td>
                <td className="px-4 font-bold ">Reference Value</td>
              </tr>
            </thead>
            <tbody>
              {testResults.map((result, mainIndex) => (
                <React.Fragment key={mainIndex}>
                  <tr className="text-sm">
                    <td className="px-8 py-2 font-semibold" colSpan="4">
                      {result.Investigationtype}
                    </td>
                  </tr>
                  {result.Rows.map((row, subIndex) => (
                    <tr key={subIndex} className="text-sm">
                      <td className="px-8 py-2">{row.Investigation}</td>
                      <td className="px-8 py-2 text-right">
                        {inputValues[mainIndex][subIndex] || ""} {/* Display input value */}
                      </td>
                      <td className="px-8 py-2 text-left">{row.Unit}</td>
                      <td className="px-8 py-2">
                        {row.MinValue} - {row.MaxValue}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <hr />
        <footer className="bg-white-500 text-black p-4 text-center my-10">
          <div className="flex flex-col items-center">
            <div className="text-base ">
              {labInfo.name}
              <div className="flex space-x-40 mt-16 ">
                {/* Lab personnel */}
              </div>
            </div>
          </div>
          <hr />
          <p className="mt-4">****End of Report****</p>
        </footer>
      </div>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-2 p mx-2 border-blue-700 hover:border-blue-500 rounded px-7 py-1 mb-7 noprint" onClick={() => window.print()}>
  Print
</button>

    </div>
  );
};

export default PrintPage;
