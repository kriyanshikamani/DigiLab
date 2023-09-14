import React,{useState} from 'react'

const CbcWithAbCount = () => {
    const TestName = {
        id: 1,
        name: "(CBC) With Absolute Count",
      };
      const testResults = [
        {
          Investigationtype: "HEMOGLOBIN",
          Rows: [
            {
              Investigation: "Hemoglobin(Hb)",
             
              MinValue: 12,
              MaxValue: 15,
              Unit: "g/dl",
            },
          ],
        },
    
        {
          Investigationtype: "LEUKOCYTE COUNT",
          Rows: [
            {
              Investigation: " Total Leukocyte Count",
                    MinValue: 4000,
              MaxValue: 11000,
              Unit: "cumm",
            },
          ],
        },
        {
          Investigationtype: "DIFFERENTIAL LEUCOCYTE COUNT",
          Rows: [
            {
              Investigation: "Neutrophils",
                     MinValue: 40,
              MaxValue: 80,
              Unit: "%",
            },
            {
              Investigation: "Lymphocyte",
                      MinValue: 20,
              MaxValue: 40,
              Unit: "%",
            },
            {
              Investigation: "Eosinophils",
                     MinValue: 1,
              MaxValue: 6,
              Unit: "%",
            },
            {
                Investigation: "Monocytes",
                       MinValue: 2,
                MaxValue: 10,
                Unit: "%",
              },
              {
                Investigation: "Basophils",
                       MinValue: 0,
                MaxValue: 12,
                Unit: "%",
              },
          ],
        },
        {
          Investigationtype: "WEB COUNT",
          Rows: [
            {
              Investigation: "Total Web count",
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
                   MinValue: 50,
              MaxValue: 62,
              Unit: "%",
            },
            {
              Investigation: "Lymphocytes",
                   MinValue: 20,
              MaxValue: 40,
              Unit: "%",
            },
            {
              Investigation: "Eoinophils",
                  MinValue: 0,
              MaxValue: 6,
              Unit: "%",
            },
            {
              Investigation: "Monocytes",
                  MinValue: 0,
              MaxValue: 10,
              Unit: "%",
            },
            {
              Investigation: "Basophils",
                  MinValue: 0,
              MaxValue: 2,
              Unit: "%",
            },
          ],
        },
        {
          Investigationtype: "DIFFERENTIAL LEUKOCYTE COUNT (ABSOLUTE COUNT)",
          Rows:[
            {
              Investigation: "Neutrophils",
        
              MinValue: 2,
              MaxValue: 7,
              Unit: "x10^9/L",
            },
            {
                Investigation: "Lymphocytes",
          
                MinValue: 1,
                MaxValue: 3,
                Unit: "x10^9/L",
              },
              
              {
                Investigation: "Eosinophils",
          
                MinValue: 0.2,
                MaxValue: 0.5,
                Unit: "x10^9/L",
              },
              {
                Investigation: "Monocytes",
          
                MinValue: 0.1,
                MaxValue: 1,
                Unit: "x10^9/L",
              },
              {
                Investigation: "Basophils",
          
                MinValue: 0.1,
                MaxValue: 0.2,
                Unit: "x10^9/L",
              },
          ],
        },
        {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: " Neutrophil Lymphocyte Ratio",
               
                MinValue: "lakhvanu",
                MaxValue: "lakhvanu",
                Unit: "lakhvanu",
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: " Platelet Count",
               
                MinValue: 1.5,
                MaxValue: 4.5,
                Unit: "lakhs/cumm",
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: " Total RBC Count",
               
                MinValue: 3.9,
                MaxValue: 4.8,
                Unit: "	million/cumm",
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: "Hematocrit Value, Hct",
               
                MinValue: 36,
                MaxValue: 46,
                Unit: "%",
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: " Mean Corpuscular Volume, MCV",
               
                MinValue: 83,
                MaxValue: 101,
                Unit: "FL",
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: " Mean Cell Haemoglobin, MCH",
               
                MinValue: 27,
                MaxValue: 32,
                Unit: "pg"}
            ],
          }, {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: "Mean Cell Haemoglobin CON, MCHC",
               
                MinValue: 31.5,
                MaxValue: 34.5,
                Unit: "%",
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: " Mean Platelet Volume, MPV",
               
                MinValue: 6.5,
                MaxValue: 12,
                Unit:"FL" ,
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: "R.D.W. - CV",
               
                MinValue: 11.4,
                MaxValue: 14,
                Unit: "%",
              },
            ],
          },
          {
            // Investigationtype: "",
            Rows: [
              {
                Investigation: " R.D.W. - SD",
               
                MinValue: 39,
                MaxValue: 46,
                Unit: "FL",
              },
            ],
          }
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
  )
}

export default CbcWithAbCount