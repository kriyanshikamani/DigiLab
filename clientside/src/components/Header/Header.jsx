import React, { useEffect } from "react";
//import { BsCart3 } from "react-icons/bs";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {

  const navbar = [
    { name: "Home", link: "/" },
    { name: "Book Test/Packages", link: "/book-test-packages" },
    { name: "About Us", link: "/about-us" },
    { name: "Download Report", link: "/download-report" },
    { name: "Pay Online", link: "/pay-online" },
    { name: "Reviews", link: "/reviews" },
  ];
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/register");
      } else {
        const { data } = await axios.post("http://localhost:3000", {}, { withCredentials: true });
        if (!data.status) {
          removeCookie("jwt");
          navigate("/register");
        }
      }
    };
  
    verifyUser();
  }, [cookies, navigate, removeCookie]);
    const logOut = () => {
      removeCookie("jwt");
      window.history.replaceState(null, "", "/register");
      navigate("/register");
    }

  return (
    <div className="min-w-screen flex justify-between bg-gradient-to-l from-blue-900 to-blue-600 via-blue-700  py-4 items-center">
      <div className="flex items-center ml-0">
        <img className="w-[140px]" src={Logo} alt="logo" />
      </div>
      <ul className="flex">
        {navbar.map((Btn, index) => (
          <Link to={Btn.link} key={index} className="text-white font-semibold text-xl py-3 px-5 relative transition duration-300 hover:underline hover:text-blue-400 cursor-pointer hover:scale-105">
            {Btn.name}
          </Link>
        ))}
        {/* <span className=" text-white hover:cursor-pointer my-auto mx-3">
          <BsCart3 size={25} />
        </span> */}
        <button className="rounded-sm px-4 text-white mx-3 border-blue-400 border-2 hover:bg-blue-700 font-bold text-md hover:font-extrabold cursor-pointer text-lg">
          <Link to="/login">Log in</Link>
        </button>
        <button className="rounded-sm px-4 text-white mx-3 border-blue-400 border-2 hover:bg-blue-700 font-bold text-md hover:font-extrabold cursor-pointer text-lg" onClick={logOut}>
          Log out
        </button>
      </ul>
    </div>
  );
};

export default Header;
