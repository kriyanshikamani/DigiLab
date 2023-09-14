import React, { useState } from 'react';
import Login_page from '../../assets/Login_page.png';
import Logo from "../../assets/Logo.png";
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
          const response = await axios.post('http://localhost:3000/registration/login', {
            email,
            password,
          });
          if (response.status === 200) {
            console.log('Login successful');
            // onLogin(res.status);
            navigate('/');
          }
            alert("Login successfully.");
            // localStorage.setItem('token', "Login Successful");
            // console.log(response);
            // navigate('/');
            // window.location.reload()
        }
        catch (error) {
            if (error.response.status === 422) {
                toast.error("Invalid email or password !");
            }
            else {
                if (error.response && error.response.data && error.response.data.errors) {
                    const errors = error.response.data.errors;
                    toast.error(errors);
                }
                else {
                    console.error('Login error:', error);
                }
            }
        }

        console.log(email, password)
    };


  const handleLoginClick = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-300 to-violet-200">
      <div className="flex mt-4 w-8/12 h-3/6 bg-blue-900">
        {/* Right side - colored background */}
        <div className="w-1/2 bg-blue-800 text-white p-4 relative">
          <img src={Logo} alt="/" className="mx-auto border-none h-32" />
          <h2 className="text-2xl font-weight-200 text-center text-white mb-6">Login</h2>
          <form onSubmit={handleLogin}>
                        <div className="m-4 text-xs text-black">
                            <input
                                className="w-full border p-2  rounded-md"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="m-4 text-xs text-black">
                            <input
                                type="password"
                                name="password"
                                className="w-full border p-2 rounded-md"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
            <button type="submit" className="m-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Login
            </button>
            <button className="m-4 bg-blue-500 text-white ml-2 px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              <Link to="/Registration">Registration</Link>
            </button>
          </form>
        </div>

        {/* Left side - show properties with spinning effect */}
       <div className="w-1/2 relative">
  <img src={Login_page} alt="/" className="border-none object-contain h-full animate-spin-slow transform" />
</div>

      </div>
    </div>
  );
};

export default Login;





