import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import dam from '../images/dam.jpg'
import {LiaSearchSolid} from 'react-icons/lia'
const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-white font-semibold text-lg"> Bobo E-State</h1>
      </div>
      <div className="flex items-center justify-center flex-1">
        <div className="relative">
          <input
            type="text"
            className="border border-gray-600 bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search e-state..."
          />
          <LiaSearchSolid
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"            />
           
        </div>
      </div>
      <div className="flex items-center">
        <Link to="/" className="text-white mx-4 hover:text-blue-500">
          Home
        </Link>
        <Link to="/signup" className="text-white mx-4 hover:text-blue-500">
          SignUp
        </Link>
        <img
          src={dam}
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navigation;
