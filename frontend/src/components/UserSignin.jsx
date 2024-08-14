import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://supermarket-backend-seven.vercel.app/api/v1/user/signin', {
        email,
        password
      });
      localStorage.setItem("userId",response.data.userId)
      localStorage.setItem("token",response.data.token)
      localStorage.setItem('login','user')
      
      if (response.status === 200) {
        toast.success("Sign in successful!");
        setTimeout(() => {
          navigate('/user/product-search');
        }, 2000);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">Sign In</h1>

        <form onSubmit={handleSignIn} className="grid gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

      <p className="mt-6 text-slate-600">
        Don't have an account? <Link to="/user/signup" className="text-blue-500 hover:underline">Sign up</Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default SignIn;