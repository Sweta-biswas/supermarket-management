import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const fixedAdminUsername = 'Admin';
    const fixedAdminPassword = 'admin@123';

    if (username === fixedAdminUsername && password === fixedAdminPassword) {
      toast.success("Sign in successful!");
      localStorage.setItem('login', 'admin');
      setTimeout(() => {
        navigate('/admin');
      }, 2000);
    } else {
      toast.error('Wrong credentials. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">Sign In</h1>

        <form onSubmit={handleSignIn} className="grid gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 bg-yellow-50 text-slate-500 w-full border rounded-full shadow-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 bg-yellow-50 text-slate-500 w-full border rounded-full shadow-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="p-3 bg-orange-500 text-white w-full border rounded-full shadow-lg text-center transition-all duration-300 ease-in-out transform hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;