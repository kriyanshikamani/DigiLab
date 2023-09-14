import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
const Login = ({onLogin}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement logic here
    if(email=="priyakriya@gmail.com" && password==123)
    {
      onLogin();
    }
    else{
      alert("please enter valid user name and password");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen rounded bg-gray-100">
      
      <div className="w-full max-w-md p-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                Sign up here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
