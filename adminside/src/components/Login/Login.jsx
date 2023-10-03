
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import Logo_Balck from "../../assets/Logo_Black.png"; 

const Login = ({ onLoginSuccess}) => {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });


  const generateError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login1",
        {
          ...values,
        },
        { withCredentials: true, }
      );
     
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
        
          onLoginSuccess();
          navigate("/");
          toast.success(`Hi, ${values.email}!`, {
            position: "bottom-right",
            style: {
              backgroundColor: "black", // Background color
              color: "white",          // Text color
            },
          });
        }
      }
    } catch (err) {
       console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
    <div className="w-full max-w-md p-4">
          <form onSubmit={(e)=>handleSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex">
            <div className="flex flex-col items-center mb-6">
          <img src={Logo_Balck} alt="/" className="mx-auto border-none h-32 " />
            <span className="text-lg text-gray-600">
             Lab Reports At Your FingerTips...
            </span>
          </div>
            </div>
            <div className="border p-6 rounded">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Login to Your Account
            </h2>

         
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border border-blue-600"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border border-blue-600"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center justify-center">
              <button
  className="w-full md:w-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full focus:outline-none focus:ring focus:ring-blue-200 transition duration-300 ease-in-out"
  type="submit"
                >
                 Login
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    
  );
};

export default Login;




