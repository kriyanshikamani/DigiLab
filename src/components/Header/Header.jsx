import React from "react";
import { BsCart3 } from "react-icons/bs";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const navbar = [
    { name: "Book Test/Packages", link: "/book-test-packages" },
    { name: "About Us", link: "/about-us"},
    { name: "Download Report", link: "/download-report" },
   

    { name: "Pay Online", link: "/pay-online" },
    { name: "Reviews", link: "/reviews" },
  ];

  return (
    <div className="min-w-screen flex justify-end bg-gradient-to-l from-blue-900 to-blue-600 via-blue-700  py-4 items-center">
      <ul className="flex">
        {navbar.map((Btn, index) => {
          return (
            <Link to={Btn.link} key={index} className="text-white font-semibold text-sm py-3 px-5 hover:bg-white hover:text-black cursor-pointer">
              {Btn.name}
            </Link>
          );
        })}
        <span className=" text-white hover:cursor-pointer my-auto mx-3">
          <BsCart3 size={25} />
        </span>
        <button className="rounded-sm px-4 text-white mx-3 border-blue-300 border-2 hover:bg-blue-600 font-bold text-md hover:font-extrabold cursor-pointer text-sm">
          {" "}
          <Link to="/login"> Log in</Link>
        </button>
      </ul>
    </div>
  );
};

export default Header;
