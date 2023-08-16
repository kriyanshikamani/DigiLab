import React, { useState } from 'react';
import Login_page from '../../assets/Login_page.png';
import Logo from "../../assets/Logo.png";

const Login = () => {
  const [showCard, setShowCard] = useState(false);

  const handleLoginClick = () => {
    setShowCard(!showCard);
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-300 to-violet-200">
      <div className="flex mt-4 w-8/12  h-3/6 bg-blue-900">
        {/* Right side - colored background */}
        <div className="w-1/2 bg-blue-800 text-white p-4">
       
        <img src={Logo} alt="/" className="mx-auto border-none h-32 " />
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300">Email:</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-300">Password:</label>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Login
            </button>
          </form>
        </div>

        {/* Left side - show properties */}
        <div className="w-1/2">
          <img src={Login_page} alt="/" className="border-none object-contain h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
