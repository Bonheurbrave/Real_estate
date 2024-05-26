import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logging in with Google...');
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with email and password...');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="bg-white text-black min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Login Page</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="block w-full px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="block w-full px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2">
          Login
        </button>
        <button onClick={handleGoogleLogin} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
