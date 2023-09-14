import React, { useState } from "react";

const LiverFunctionTest = () => {
  const TestName = {
    id: 4,
    name: "LIVER FUNCTION TEST (LFT)",
  };
  const testResults = [
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "Serum Bilirubin (Total)",

          MinValue: 0.2,
          MaxValue: 1.2,
          Unit: "mg/dl",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: " Serum Bilirubin (Direct)",

          MinValue: 0,
          MaxValue: 0.3,
          Unit: "mg/dl",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "Serum Bilirubin (Indirect)",

          MinValue: 0.2,
          MaxValue: 1,
          Unit: "mg/dl",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: " SGPT (ALT)",

          MinValue: 10,
          MaxValue: 28,
          Unit: "U/I",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "SGOT (AST)",

          MinValue: 0,
          MaxValue: 31,
          Unit: "U/I",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "Serum Alkaline Phosphatase",

          MinValue: "lakhvanu",
          MaxValue: "lakhvanu",
          Unit: "U/I",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "Serum Protein",

          MinValue: 6.4,
          MaxValue: 8.3,
          Unit: "	g/dl",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "Serum Albumin",

          MinValue: 3.5,
          MaxValue: 5.2,
          Unit: "	g/dl",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "Globulin",

          MinValue: 1.8,
          MaxValue: 3.6,
          Unit: "	g/dl",
        },
      ],
    },
    {
      // Investigationtype: "",
      Rows: [
        {
          Investigation: "A/G Ratio",

          MinValue: 1.1,
          MaxValue: 2.1,
          Unit: "	g/dl",
        },
      ],
    },
  ];
  const initialInputValues = testResults.map((result) => result.Rows.map(() => ""));

  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputChange = (event, mainIndex, subIndex) => {
    const newInputValues = [...inputValues];
    newInputValues[mainIndex][subIndex] = event.target.value;
    setInputValues(newInputValues);
  };
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <h2 className="text-lg font-bold">Test Results</h2>
        <h2 className="text-lg font-bold text-center py-3">{TestName.name}</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-black text-[17px]">
              <td className="px-4 font-bold py-2 ">Investigation</td>
              <td className="px-4 font-bold py-2  text-right">Result</td>
              <td className="px-4 font-bold py-2  text-right">Unit</td>
              <td className="px-4 font-bold py-2 ">Reference Value</td>
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
                    <td className="px-8 ">{row.Investigation}</td>
                    <td className="px-8  text-right">
                      <input className="w-full px-2 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id={`inputField_${mainIndex}_${subIndex}`} value={inputValues[mainIndex][subIndex] || ""} onChange={(event) => handleInputChange(event, mainIndex, subIndex)} />
                    </td>
                    <td className="px-8  text-left">{row.Unit}</td>
                    <td className="px-8 ">
                      {row.MinValue} - {row.MaxValue}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiverFunctionTest;
