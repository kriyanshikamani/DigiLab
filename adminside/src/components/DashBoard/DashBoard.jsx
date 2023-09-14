import React from 'react';
import { FaFlask } from 'react-icons/fa'; // Example icon from react-icons
import { motion } from 'framer-motion';
import lab3 from "../../assets/lab3.jpg";
import lab1 from "../../assets/lab1.avif";
import lab2 from "../../assets/lab2.jpg";
const LaboratoryDashboard = () => {
  return (
    <div className="container flex h-screen bg-white">

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl text-cyan-800 animate-pulse flex font-bold mb-4">Get Started With DigiLab<motion.span className=' ml-2' initial={{ opacity: 0 }} animate={{ opacity: 2 }} transition={{ duration: 1.5 }}>
            <FaFlask />
          </motion.span></h1>
        {/* Dashboard content */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            {/* Experiment list */}
            <h2 className="text-lg font-semibold mb-2">Recent Experiments</h2>
            {/* Render a list of recent experiments */}
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            {/* Reports */}
            <h2 className="text-lg font-semibold mb-2">Reports</h2>
            {/* Render reports or charts */}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-8 ">
         
          <div className="grid grid-cols-3 gap-4">
          <img className="rounded-lg shadow-md opacity-70" src={lab3} alt="Profile" />
            <img className="rounded-lg shadow-md opacity-70" src={lab2} alt="Profile" />
            <img className="rounded-lg shadow-md opacity-70" src={lab1} alt="Profile" />
            {/* Add more images */}
          </div>
        </div>
        
        {/* Three Containers in One Row */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            {/* Container 1 content */}
            <p className='text-end text-blue-500'>view all</p>
            <h2 className="text-lg font-semibold">Payments Due</h2>
            <p className='text-sm'>for all time</p>
            <table>
              <tr className='text-sm flex bg-gray-100 font-light'>
                <td className='px-2'>patient</td>
                <td>due</td>
                <td>acceot due</td>
              </tr>
            </table>
            {/* Add content */}
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            {/* Container 2 content */}
            <p className='text-end text-blue-500'>view all</p>
            <h2 className="text-lg font-semibold ">Recent Payments</h2>
            <p className='text-sm'>for today</p>
            {/* Add content */}
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            {/* Container 3 content */}
            <p className='text-end text-blue-500'>view all</p>
            <h2 className="text-lg font-semibold ">Recent Activities</h2>
            <p className='text-sm font-bold text-red-500 bg-red-100'>Advance plane feature</p>
            {/* Add content */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LaboratoryDashboard;
