import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = ({ onLoginSuccess, onRegisterRedirect }) => {
  const navigate = useNavigate();
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
        "http://localhost:3000/login",
        values, // You can pass the values directly
        { withCredentials: true }
      );

      if (data.errors) {
        const { email, password } = data.errors;
        if (email) generateError(email);
        else if (password) generateError(password);
      } else {
        onLoginSuccess();
        navigate("/");
      }
    } catch (err) {
      // Handle error appropriately, e.g., show an error message
      console.error(err);
      generateError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen rounded bg-gray-100">
      <div className="w-full max-w-md p-4">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex">
            <div className="flex-col">
              <div className="text-3xl font-semibold text-gray-600">
                StockInsights
              </div>
              <span className="text-sm">Take Charge of Your Stock</span>
            </div>
          </div>
          <div className="border mt-6 p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Login Account
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
                  setValues({ ...values, email: e.target.value })
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
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="text-center md:px-[118px] lg:px-[140px] py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
            <span>
              Don't have an account?{" "}
              <Link to="/register" onClick={onRegisterRedirect}>
                Register
              </Link>
            </span>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
