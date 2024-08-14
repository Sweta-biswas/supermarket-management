import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Regular expression for at least 6 characters and one special character
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    console.log(password,confirmPassword);

    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 6 characters long and include at least one special character!');
      return;
    }

    try {
      const response = await axios.post('https://supermarket-backend-seven.vercel.app/api/v1/user/signup', {
        email,
        password
      });

      if (response.status === 201) {
        toast.success('Sign up successful!');
        localStorage.setItem("userId",response.data.userId)
        localStorage.setItem("token",response.data.token)
        
        localStorage.setItem('login','user')
        setTimeout(() => {
          navigate('/user/product-search');
        }, 2000);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">Sign Up</h1>

        <form onSubmit={handleSignUp} className="grid gap-4">
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 bg-yellow-50 text-slate-500 w-full border rounded-full shadow-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="p-3 bg-orange-500 text-white w-full border rounded-full shadow-lg text-center transition-all duration-300 ease-in-out transform hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>

      <p className="mt-6 text-slate-600">
        Already have an account? <Link to="/user/signin" className="text-blue-500 hover:underline">Sign in</Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default SignUp;