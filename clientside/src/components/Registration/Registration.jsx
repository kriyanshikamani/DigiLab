import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [error, setError] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:3000/registration/store',
                {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                }
            );

            // Assuming your backend sends a 'token' property in the response
            const { token } = response.data;

            // Store the token in local storage or a secure cookie for later use
            localStorage.setItem('token', token);

            // Redirect the user to another page, e.g., dashboard
            window.location.href = '/';
            console.log(response);
            alert('Registration successful.');
        } catch (error) {
            // Handle errors
            if (error.response && error.response.status === 422) {
                setError('email');
                emailRef.current.focus();
            } else if (error.response && error.response.data && error.response.data.errors) {
                const errors = error.response.data.errors;
                setError('password');
                passwordRef.current.focus();
                console.log(errors);
            } else {
                console.error('Registration error:', error);
                // Handle other types of errors, such as network issues
                setError('Network error: Unable to connect to the server.');
            }
        }
        console.log(firstName, lastName, email, password, confirmPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-blue-700 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-6 font-semibold text-center">Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="text-white block font-medium mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="text-white block font-medium mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-white block font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            className={`w-full p-2 border rounded-md focus:outline-none ${error === 'email' ? 'border-red-500' : 'focus:border-blue-300'
                                }`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-white block font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            className={`w-full p-2 border rounded-md focus:outline-none ${error === 'password' ? 'border-red-500' : 'focus:border-blue-300'
                                }`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="text-white block font-medium mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={`w-full p-2 border rounded-md focus:outline-none ${
                                error === 'confirmPassword' || !passwordsMatch ? 'border-red-500' : 'focus:border-blue-300'
                            }`}
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setPasswordsMatch(true);
                            }}
                        />
                        {!passwordsMatch && (
                            <p className="text-red-600 text-md mt-1">Passwords do not match.</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-white text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-black hover:text-blue-950">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;
