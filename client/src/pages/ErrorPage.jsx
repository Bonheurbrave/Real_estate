import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <RiErrorWarningLine className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-8">We apologize for the inconvenience. Please try again later.</p>
      <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Go back to Home</a>
    </div>
  );
};

export default ErrorPage;
