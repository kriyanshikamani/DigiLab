
// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { HiPencil } from "react-icons/hi";
// import { MdDelete } from "react-icons/md";
// import axios from "axios";

// const TestPanel = () => {
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [panels, setTestpanel] = useState([]);
//   const { testpanelId } = useParams();

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get("http://localhost:3000/testpanel/getall");
//         setTestpanel(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     }

//     fetchUserData();
//   }, []);

//   const handleDeleteClick = async (testpanelId) => {
//     if (window.confirm("Are you sure you want to delete this test panel?")) {
//       try {
//         await axios.delete(`http://localhost:3000/testpanel/${testpanelId}`);
//         // After deleting, you can fetch the updated data
//         fetchUserData();
        
       
//       } catch (error) {
//         console.error("Error deleting test panel:", error);
//       }
//     }

//     const updateTestPanels = (updatedPanels) => {
//       setTestpanel(updatedPanels);
//     }
//   };

//   const handleDeleteConfirm = () => {
//     // Perform delete operation here
//     setShowConfirmation(false);
//   };

//   const handleCancelClick = () => {
//     setShowConfirmation(false);
//   };

//   return (
//     <div className="container mx-auto bg-white p-6">
//       <div className="flex justify-between">
//         <h1 className="text-2xl font-bold">TestPanel</h1>
//         <Link to="/add-test-panel" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
//           Add Test Panel
//         </Link>
//       </div>

//       <table className="table-auto w-full my-4">
//         <thead>
//           <tr className="border bg-blue-900 text-white">
//             <td className="px-4  py-2">Sr no.</td>
//             <td className="px-4  py-2">Name</td>
//             <td className="px-4  py-2">Category</td>
//             <td className="px-4 w-1/3 py-2">Tests</td>
//             <td colSpan={2} className="px-4  py-2">
//               Action
//             </td>
//           </tr>
//         </thead>
//         <tbody>
//           {panels.map((panel, index) => (
//             <tr key={index} className="border">
//               <td className="px-4 py-2">{index+1}</td>
//               <td className="px-4 py-2">{panel.name}</td>
//               <td className="px-4 py-2">{panel.category}</td>
//               <td className="px-4 py-2">
//                 {panel.tests.map((test, index) => (
//                   <span key={index}>{test}; </span>
//                 ))}
//               </td>
//               <td className="py-1 px-2">
//               <Link
//   to={`/edit-test-panel/${panel._id}`} // Pass the panel ID as a parameter to the edit page
//   className="flex items-center px-2 py-1 rounded-md text-blue-500 hover:text-blue-900"
// >
//   <HiPencil className="mr-1" /> Edit
// </Link>

//               </td>
//               <td>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => handleDeleteClick(panel._id)} // Pass the panel ID to the delete function
//                     className="flex items-center px-2 py-1 rounded-md text-red-500 hover:text-blue-900"
//                   >
//                     <MdDelete className="mr-1" />
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TestPanel;


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const TestPanel = () => {
  const [panels, setTestpanel] = useState([]);
  const { testpanelId } = useParams();

  useEffect(() => {
      async function fetchUserData() {
        try {
          const response = await axios.get("http://localhost:3000/testpanel/getall");
          setTestpanel(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      fetchUserData();
    }, []);

  const handleDeleteClick = async (testpanelId) => {
    if (window.confirm("Are you sure you want to delete this test panel?")) {
      try {
        await axios.delete(`http://localhost:3000/testpanel/${testpanelId}`);
        // After deleting, you can fetch the updated data
        fetchUserData();
      } catch (error) {
        console.error("Error deleting test panel:", error);
      }
    }
  }
  ;
  return (
    <div className="container mx-auto bg-white p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">TestPanel</h1>
        <Link to="/add-test-panel" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          Add Test Panel
        </Link>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <span className="text-sm text-gray-500 my-2">Please email to any feedbacks or suggestions regarding this feature to digilab@gmail.com</span>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <input type="text" placeholder="Search by Test Panel Name" className="border-2 border-gray-300 p-1 rounded-lg" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mx-2 rounded">Search</button>
        </div>
      </div>
      <div className="flex flex-row my-4">
        <table className="p-2xl">
          <thead>
            <tr className="border bg-blue-900 text-white">
              <td className="px-4  py-2">Sr no.</td>
              <td className="px-4  py-2">Name</td>
              <td className="px-4  py-2">Category</td>
              <td className="px-4 w-1/3 py-2">PRICE</td>
              <td className="px-4 w-1/3 py-2">Tests</td>
              
              <td colSpan={2} className="px-4  py-2">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {panels.map((panel, index) => (
              <tr key={panel._id} className="border">
                <td className="px-4 py-2">{index+1}</td>
                <td className="px-4 py-2">{panel.name}</td>
                <td className="px-4 py-2">{panel.category}</td>
                <td className="px-4 py-2">{panel.price}</td>
                <td className="px-4 py-2">
                  {panel.tests.map((test, index) => (
                    <span key={index}>{test}; </span>
                  ))}
                </td>
                <td className="py-1 px-2">
                <Link
    to={`/edit-test-panel/${panel._id}`} // Pass the panel ID as a parameter to the edit page
    className="flex items-center px-2 py-1 rounded-md text-blue-500 hover:text-blue-900"
  >
    <HiPencil className="mr-1" /> Edit
  </Link>
  </td>
                <td>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDeleteClick(panel._id)} // Pass the panel ID to the delete function
                      className="flex items-center px-2 py-1 rounded-md text-red-500 hover:text-blue-900"
                    >
                      <MdDelete className="mr-1" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TestPanel;
                    
