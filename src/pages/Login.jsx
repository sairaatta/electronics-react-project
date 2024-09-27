// src/pages/Login.jsx

import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Importing icons from React Icons
import LoginImage from '../assets/images/loginImage.png';

const Login = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#F7FAFC] p-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 flex flex-col">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 mb-2">
            Login
          </button>
          <button type="button" className="w-full text-blue-500 mb-4">
            Forgot Password?
          </button>
          <button type="button" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 mb-4">
            Create Account
          </button>

          <div className="text-center mb-4">
            <h1 className="text-gray-500">OR</h1>
          </div>

          <div className="flex justify-around">
            <button type="button" className="flex items-center justify-center w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200 mr-2">
              <FaGoogle className="mr-2" /> {/* Google Icon */}
              Login with Google
            </button>
            <button type="button" className="flex items-center justify-center w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 ml-2">
              <FaFacebook className="mr-2" /> {/* Facebook Icon */}
              Login with Facebook
            </button>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex lg:w-1/2 justify-center">
        <img src={LoginImage} alt="Login Illustration" className="object-cover h-full w-full max-w-lg rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default Login;
