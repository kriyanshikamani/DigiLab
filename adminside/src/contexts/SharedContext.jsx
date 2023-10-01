import { useState, createContext ,useEffect} from "react";
import { ImHome3 } from "react-icons/im";
import { FaNotesMedical } from "react-icons/fa";
import { RiMicroscopeFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import ActionBtn from "../components/TableData/ActionBtn.jsx";
// import { get } from "mongoose";
import axios from "axios";

const SharedContext = createContext();
export function SharedContextProvider({ children }) {
  const [patientData, setpatientData] = useState({});
  const [doctorData, setDoctorData] = useState([]);

useEffect(() => {

  getDoctorData();
}, []);

  const getDoctorData = async () => {
    const response = await axios.get("http://localhost:3000/referral/getall");
    setDoctorData(response?.data);
  };

  const sidebarMenus = [
    { menuName: "Dashboard", link: "/", icon: <ImHome3 className="text-xl" /> },
    {
      menuName: "Cases",
      icon: <FaNotesMedical className="text-xl" />,
      subMenus: [
        { name: "All Cases", link: "/all-cases" },
        { name: "Patients", link: "/patients" },
       
        { name: "Referral Doctors", link: "/referral-doctors" },
      ],
    },
    {
      menuName: "Labs",
      icon: <RiMicroscopeFill className="text-xl" />,
      subMenus: [
        { name: "test Panel", link: "/test-panels" },
        { name: "Test Packages", link: "/test-packages" },
        { name: "Test categories", link: "/test-categories" },
      ],
    },
    {
      menuName: "Manage",
      icon: <FaUser className="text-xl" />,
      subMenus: [
        { name: "User", link: "/user" },
       
      ],
    },
   
  ];
  
  useEffect(() =>{
   getPatientData();
  }, []);

  const getPatientData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/patient/getall");
      // console.log("Response:", response.data); // Log the response data for debugging
      setpatientData(response?.data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  const formData =[
    { label: "Reg No", type: "text", name: "regNo", required: true },
        { label: "First Name", type: "text", name: "firstname", required: true },
        { label: "Last Name", type: "text", name: "lastname", required: true },
        { label: "Gender", type: "radio", name: "gender", options:["male","female","other"], required: true, },
        { label: "Age", type: "number", name: "age", required: true },
        { label: " Email", type: "email", name: "email", required: true, },
        { label: "Blood Group", type: "text", name: "BloodGroup", required: true },
        { label: "Phone", type: "text", name: "phone", required: true },
        { label: "Address", type: "textarea", name: "address", required: true },
        { label: "Received By", type: "text", name: "receivedBy", required: true },
        // { label: "Test", type: "text", name: "test", required: true },
        // { label: "Date", type: "date", name: "date", required: true },
        // { label: "Total Amount", type: "number", name: "totalAmount", required: true },

        
      ];

  const tableData = {
    PatientFields: ["ID", "Name", "Gender", "BloodGroup", "Phone", "Address", "Action"],
    patientTableData: [
      {
        id: 1,
        name: "Priyanka Vts",
        gender: "Female",
        bloodgroup: "O+",
        address: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 2,
        name: "Kriyanshi",
        gender: "Female",
        bloodgroup: "O+",
        address: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
      {
        id: 3,
        name: "Priyansi",
        gender: "Female",
        bloodgroup: "O+",
        address: "Rajkot",
        phone: "1234567890",
        action: <ActionBtn />,
      },
    ],
  };

  const value = {
    sidebarMenus,
    formData,
    patientData,
    setpatientData,
    tableData,
    doctorData,
    getPatientData,

  };

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;
