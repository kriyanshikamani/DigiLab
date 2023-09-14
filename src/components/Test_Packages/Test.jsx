import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Test = () => {
  const [testTypeFilter, setTestTypeFilter] = useState("All");


  

  // Sample test data
  const tests = [
    {
      id: 1,
      Title: "CBC(With absolute counts)",
      TestType: "Single Test",
      Data: [
        {
          Known:"Also Know as:",
          Description:"A CBC with absolute counts measures vital blood components, aiding in diagnosing health issues.",
          Price:149
        },
      ],
    },
    {
      id: 2,
      Title: "Complete Blood Count(CBC)",
      TestType: "Single Test",
      Data: [
        {
          Known:"Also Know as:",
          Description: "A CBC (Complete Blood Count) assesses essential blood components for diagnosing health issues.",
          Price: 100,
        },
      ],
    },
    {
      id: 3,
      Title: "Kidney Function Test(KFT",
      TestType: "Single Test",
      Data: [
        {
          Known:"Also Know as:",
          Description: "Kidney Function Test (KFT) evaluates your kidney health through blood and urine analysis kidney",
          Price: 100,
        },
      ],
    },
    {
      id: 4,
      Title: "CBC With ESR",
      TestType: "Single Test",
      Data: [
        {
          Known:"Also Know as:",
          Description: "A CBC with ESR (Erythrocyte Sedimentation Rate) helps diagnose health issues by measuring blood components and inflammation levels.",
          Price: 100,
        },
      ],
    },
    {
      id: 5,
      Title: "Liver Function Test(LFT)",
      TestType: "Single Test",
      Data: [
        {
          Known:"Also Know as:",
          Description: "LFT (Liver Function Test) measures liver health by analyzing blood markers, aiding in disease diagnosis and monitoring.",
          Price: 100,
        },
      ],
    },
    {
      id:6,
      Title:"Testing Blood Sugar",
      TestType: "Single Test",
      Data: [
        {
          Known:"Also Know as:",
          Description: "Fasting Blood Sugar (FBS),Fasting  Plasma Glouse(FPG),Fasting Blood Glouse(FBG),Testing Blood Sugar is monitoring blood.",
          Price: 100,
        },
      ],
    },
   
   
  ,
      {
        id: 1,
        Title: "BT & CT",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Clotting Time, Bleeding Time",
            Price: 200
          }
        ]
      },
      {
        id: 2,
        Title: "Bilirubin Total, Direct and Indirect",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Serum Bilirubin (Indirect), Serum Bilirubin (Direct), Serum Bilirubin (Total)",
            Price: 200
          }
        ]
      },
      {
        id: 3,
        Title: "Blood Sugar Fasting & PP",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Blood Sugar PP, Fasting Blood Sugar",
            Price: 200
          }
        ]
      },
      {
        id: 4,
        Title: "HB, TLC, DLC",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Differential Leucocyte Count, Total Leukocyte Count, Hemoglobin",
            Price: 200
          }
        ]
      },
      {
        id: 5,
        Title: "HB, TLC, DLC, ESR",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Erythrocyte Sedimentation Rate (Wintrobe), Differential Leucocyte Count, Total Leukocyte Count, Hemoglobin",
            Price: 200
          }
        ]
      },
      {
        id: 6,
        Title: "Pregnancy Profile - 1",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Random Blood Sugar, Urine Routine Examination, Blood Group & Rh., HBsAg, VDRL, HIV (Card Test), Hemoglobin",
            Price: 200
          }
        ]
      },
      {
        id: 7,
        Title: "Pregnancy Profile - 2",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Random Blood Sugar, Urine Routine Examination, Blood Group & Rh., VDRL, Hepatitis C Virus, HCV, Serum Bilirubin (Total), HIV (Card Test), Serum Creatinine, Hemoglobin, Complete Blood Count (CBC)",
            Price: 200
          }
        ]
      },
      {
        id: 8,
        Title: "Pregnancy Profile - 3",
        TestType: "Package",
        Data: [
          {
            Known: "Also Know as:",
            Description: "Random Blood Sugar, Urine Routine Examination, Blood Group & Rh., Hemoglobin",
            Price: 200
          }
        ]
      }
    ]
    
  
  

  const filteredTests = tests.filter((test) => {
    // Filter by Test Type
    if (testTypeFilter === "All" || test.TestType === testTypeFilter) {
      return true;
    }
    return false;
  });

  return (
    <div className="container bg-white p-6 mx-auto mt-4">
      <div className="mb-4">
        <select
          value={testTypeFilter}
          onChange={(e) => setTestTypeFilter(e.target.value)}
        >
          <option value="All">Test Type (All)</option>
          <option value="Single Test">Single Test</option>
          <option value="Package">Package</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto text-sm">
        {filteredTests.map((test, index) => (
          <div
            href="#"
            key={index}
            className="block max-w-sm p-6 bg-white border-gray-200 rounded-lg border-2 shadow-gray-600 hover:bg-gray-100"
          >
            <div className="flex">
              <span className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {test.Title}
              </span>
              <span className="ms-auto">
                <Link to="/test-description">
                  <AiOutlineRight
                    size={20}
                    className="rounded-full bg-blue-900 p-1 text-white"
                  />
                </Link>
              </span>
            </div>
            {test.Data.map((itemData, dataIndex) => (
              <div key={dataIndex} className="mb-4">
                <ul>
                  <li className="text-gray-600">{itemData.Known}</li>
                  <li className="text-black-900">{itemData.Description}</li>
                </ul>
                <div className="text-black-900">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold my-4">
                      ₹ {itemData.Price}
                    </span>
                  </div>
                  <div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book
                  </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { AiOutlineRight } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Test = () => {
//   const [testData, setTestData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/testpanel/getall")
//       .then((response) => {
//         setTestData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container bg-white p-6 mx-auto mt-4">
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <div>
//           <p>Error: {error.message}</p>
//           {/* You can render an error message or handle it as per your application's needs */}
//         </div>
//       ) : (
//         <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto text-sm">
//           {testData.map((test, index) => (
//             <div
//               href="#"
//               key={index}
//               className="block max-w-sm p-6 bg-white border-gray-200 rounded-lg border-2 shadow-gray-600 hover:bg-gray-100"
//             >
//               <div className="flex">
//                 <span className="mb-2 text-xl font-bold tracking-tight text-gray-900">
//                   {test.Title}
//                 </span>
//                 <span className="ms-auto">
//                   <Link to="/test-description">
//                     <AiOutlineRight
//                       size={20}
//                       className="rounded-full bg-blue-900 p-1 text-white"
//                     />
//                   </Link>
//                 </span>
//               </div>

//               {test.Data.map((itemData, dataIndex) => (
//                 <div key={dataIndex} className="mb-4">
//                   <ul>
//                     <li className="text-gray-600">{itemData.Known}</li>
//                     <li className="text-black-900">{itemData.Description}</li>
//                   </ul>
//                   <div className="text-black-900">
//                     <div className="flex flex-col">
//                       <span className="text-lg font-bold my-4">
//                         ₹ {itemData.Price}
//                       </span>
//                     </div>
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;
