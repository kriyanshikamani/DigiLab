import React, { useState, useContext } from "react";
import SharedContext from "../../contexts/SharedContext";
import { AiOutlineDown } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarMenus } = useContext(SharedContext);
  const [open, setOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <>
      <div className={`bg-blue-900 h-full ${open ? "w-48" : "w-14"} duration-500 text-gray-100 px-4`}>
        <div className="py-2 flex justify-end">
          <HiMenuAlt3 className="cursor-pointer text-2xl" onClick={() => setOpen(!open)} />
        </div>
        <div className="mt-3">
          <button className="bg-white text-blue-800 font-semibold py-0 px-2 my-2 rounded-full hover:bg-gray-200">
            <Link to="/add-patient">{open ? <span className="inline-flex items-center justify-center h-6 px-3 rounded-full">+ New Case</span> : <span className="inline-flex items-center justify-center h-6 rounded-full">+</span>}</Link>
          </button>
        </div>
        {sidebarMenus.map((menu, index) => (
          <div key={index} className="border-b bg-blue-900 border-blue-950  py-1">
            {menu.menuName == "Dashboard" ? (
              <Link to={menu.link} className="flex items-center w-full focus:outline-none hover:bg-[#207dac] text-gray-600 border-l-4 border-transparent hover:border-white pr-6 py-1 flex-row">
                <span className=" text-white inline-flex justify-center items-center">{menu.icon}</span>
                <span className={`text-sm hidden sm:block tracking-wide truncate mx-2 text-white ${!open && "opacity-0 translate-x-28 "}`}>{menu.menuName}</span>
              </Link>
            ) : (
              <>
                <button onClick={() => toggleSubMenu(index)} className="flex items-center w-full focus:outline-none hover:bg-[#207dac] text-gray-600 border-l-4 border-transparent hover:border-white pr-6 py-1 flex-row">
                  <span className=" inline-flex text-white justify-center items-center">{menu.icon}</span>
                  <span
                    className="text-sm hidden sm:block tracking-wide truncate mx-2 text-white
                 "
                  >
                    {menu.menuName}
                  </span>
                  <AiOutlineDown className=" text-white ms-auto " />
                </button>

                {openSubMenu === index &&
                  menu.subMenus.map((subMenu, subIndex) => (
                    <Link to={subMenu.link} key={subIndex} className={`flex flex-col text-white text-sm pl-8 pr-2 hover:bg-[#267399] w-full py-1 ${!open && "hidden"}`}>
                      {subMenu.name}
                    </Link>
                  ))}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
