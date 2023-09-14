import { createContext ,useState} from "react";
import about_test from "../assets/about_test.png";
import about_staff from "../assets/about_staff.png";
import about_patient from "../assets/about_patient.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BiUserCircle, BiUser } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import review_img1 from "../assets/review_img1.jpg";
import review_img3 from "../assets/review_img3.jpg";
import review_img2 from "../assets/review_img2.jpg";


const SharedContext = createContext();

export function SharedContextProvider({ children }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [open, setOpen] = useState(true);

  
  const sidebarMenus = [
    { name: "Dashboard", icon: <AiOutlineDashboard />, subMenus: [] },
    { name: "vendors", icon: <BiUserCircle />, subMenus: [] },
    { name: "Customers", icon: <BiUser />, subMenus: [] },
    { name: "Reports", icon: <SlGraph />, subMenus: [] },
    { name: "Purchases", icon: <HiOutlineShoppingBag />, subMenus: ["Purchase-Orders", "Purchase-Bills"] },
    { name: "Sales", icon: <CgShoppingCart />, subMenus: ["Sales-Orders", "Sales-Bills"] },
    { name: "Items", icon: <CgShoppingCart />, subMenus: ["categories", "products"] },
    { name: "Sales", icon: <BiUserCircle />, subMenus: ["invoices", "payments"] },
  ];

  const data = [
    {
      imageSrc: about_test,
      number: 80,
      text: "Tests per day",
    },
    {
      imageSrc: about_patient,
      number: 50,
      text: "Patients",
    },
    {
      imageSrc: about_staff,
      number: 20,
      text: "Lab Technician",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "John Doe",
      time:"a week ago",
      review: "This laboratory is amazing! The service and accuracy are top-notch.",
      rating: 5,
      imageSrc: review_img1,
    },
    {
      id: 2,
      name: "Jane Smith",
      time:"a week ago",
      review: "I had a great experience with this laboratory. Highly recommended.",
      rating: 4,
      imageSrc: review_img2,
    },
    {
      id: 3,
      name: "Michael Johnson",
      time:"a week ago",
      review: "Excellent lab with friendly staff and quick results.",
      rating: 3,
      imageSrc: review_img3,
    },
    {
      id: 4,
      name: "Emily Brown",
      time:"2 week ago",
      review: "The best lab in town. Accurate and reliable.",
      rating: 2,
      imageSrc: review_img2,
    },
    {
      id: 5,
      name: "David Lee",
      time:"2 week ago",
      review: "Impressive services and affordable prices.",
      rating: 4,
      imageSrc: review_img1,
    },
    {
      id: 6,
      name: "Sarah Martinez",
      time:"3 week ago",
      review: "Professional and efficient lab. Satisfied with their services.",
      rating: 5,
      imageSrc: review_img3,
    },
    {
      id: 7,
      name: "Daniel Wilson",
      time:"3 week ago",
      review: "Highly skilled technicians and excellent customer service.",
      rating: 3,
      imageSrc: review_img2,
    },
    {
      id: 8,
      name: "Olivia Taylor",
      time:"a month ago",
      review: "Accurate results and quick turnaround time.",
      rating: 5,
      imageSrc: review_img3,
    },
  ];
 

  const toggleMenu = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const value = {
    open,setOpen,
    openMenuIndex, setOpenMenuIndex,
    sidebarMenus,
    toggleMenu,
    data,
    customers
  };

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>;
}

export default SharedContext;
