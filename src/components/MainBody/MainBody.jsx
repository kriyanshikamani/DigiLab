import React from "react";
import drimage from "../../assets/drimage.png";
import lab_cont from "../../assets/lab_cont.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";

const Mainbody = () => {
  return (
    <div>
    <div className=" bg-gradient-to-l from-pink-100 to-white-100  via-sky-100">
      <div className="grid grid-cols-2 divide-x justify-end my-3 ">
        <h1 className="animate-pulse font-bold text-blue-900 text-4xl from-neutral-700 mx-10 my-10">
          Lab Results
          <br />
          At Your Fingertips
        </h1>
        <img src={drimage} alt="/" className="h-80 w-10/12 mx-4 my-10 border-none" />
      </div>
      </div>
      <div>
        <div className="w-full max-w-6xl mx-auto p-4 border bg-blue-300 border-gray-200 rounded-lg shadow ">
          <div className="flow-root">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={lab_cont} alt="Thomas image" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">Need help with booking your test??</p>
                <p className="text-md text-gray-500 truncate dark:text-blue-400">Our experts are here to help you</p>
              </div>
              <div className="inline-flex text-lg items-center  font-semibold text-gray-900 dark:text-white">
                <BiSolidPhoneCall />
                +91987654321
              </div>
            </div>
          </div>
        </div>
      </div>
  
  </div>
  );
};

export default Mainbody;
