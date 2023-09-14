import React, { useState } from "react";

const Completebloodcount = () => {
  const patientData = {
    name: "Jalpa S. Sharma",
    age: "21 Years",
    sex: "Female",
    pid: "555",

    referredBy: "Dr. Hiren Shah",
    date: "08/08/2023",
    receivedBy: "Priya",
  };

  const TestName = {
    id: 2,
    name: "COMPLETE BLOOD COUNT(CBC)",
  };
  const testResults = [
    {
      Investigationtype: "HEMOGLOBIN",
      Rows: [
        {
          Investigation: "Hemoglobin(Hb)",
          Result: 12.5,
          MinValue: 13.0,
          MaxValue: 17.0,
          Unit: "g/dl",
        },
      ],
    },

    {
      Investigationtype: "RBC COUNT",
      Rows: [
        {
          Investigation: "Total RBC count",
          Result: 5.2,
          MinValue: 4.5,
          MaxValue: 5.5,
          Unit: "mill/cumm",
        },
      ],
    },
    {
      Investigationtype: "BLOOD INDICES",
      Rows: [
        {
          Investigation: "Packed Cell Volume(PCV)",
          Result: 37.5,
          MinValue: 40,
          MaxValue: 50,
          Unit: "%",
        },
        {
          Investigation: "Mean Corpuscular Volume",
          Result: 72.12,
          MinValue: 50,
          MaxValue: 62,
          Unit: "%",
        },
        {
          Investigation: "RDW",
          Result: 13.6,
          MinValue: 11.6,
          MaxValue: 14.0,
          Unit: "%",
        },
      ],
    },
    {
      Investigationtype: "WEB COUNT",
      Rows: [
        {
          Investigation: "Total Web count",
          Result: 9000,
          MinValue: 4000,
          MaxValue: 10000,
          Unit: "CUMM",
        },
      ],
    },
    {
      Investigationtype: "DIFFRENTIAL WEC COUNT",
      Rows: [
        {
          Investigation: "Neutrophils",
          Result: 60,
          MinValue: 50,
          MaxValue: 62,
          Unit: "%",
        },
        {
          Investigation: "Lymphocytes",
          Result: 31,
          MinValue: 20,
          MaxValue: 40,
          Unit: "%",
        },
        {
          Investigation: "Eoinophils",
          Result: 1,
          MinValue: 0,
          MaxValue: 6,
          Unit: "%",
        },
        {
          Investigation: "Monocytes",
          Result: 7,
          MinValue: 0,
          MaxValue: 10,
          Unit: "%",
        },
        {
          Investigation: "Basophils",
          Result: 1,
          MinValue: 0,
          MaxValue: 2,
          Unit: "%",
        },
      ],
    },
    {
      Investigationtype: "PLATELET COUNT",
      Rows: [
        {
          Investigation: "Platelet Count",
          Result: 320000,
          MinValue: 15000,
          MaxValue: 41000,
          Unit: "cumm",
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
  const labInfo = {
    name: "DigiLab LAB",
    contact: "Contact: 123-456-7890",
    email: "Email: info@digilab.com",
    personnel: [
      { name: "Dr. Vimal Shah", title: "(MD, Pathologist)" },
      { name: "Medical Lab Technician", title: "(DMLT, BMLT)" },
      { name: "Dr. Payal Shah", title: "(MD, Pathologist)" },
    ],
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{labInfo.name}</h1>
        </div>
        <div className="text-right">
          <p>{labInfo.contact}</p>
          <p>{labInfo.email}</p>
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
                        <input className="w-full px-2 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id={`inputField_${mainIndex}_${subIndex}`} value={inputValues[mainIndex][subIndex] || ""} onChange={(event) => handleInputChange(event, mainIndex, subIndex)} />
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
                {labInfo.personnel.map((person, index) => (
                  <div key={index}>
                    <div className="font-bold">{person.name}</div> {person.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <p className="mt-4">****End of Report****</p>
        </footer>
      </div>
    </div>
  );
};

export default Completebloodcount;
