import React from 'react';
import { Link } from 'react-router-dom';
import groceryStoreImage from '../assets/welcome.png'; // Make sure you have this image

function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-yellow-500 p-4">
      <div className="bg-white rounded-none overflow-hidden flex flex-col md:flex-row w-full md:w-4/5 h-[50vh] md:h-[60vh]">
        <div className="w-full md:w-1/2 overflow-hidden rounded-none md:rounded-none">
          <img 
            src={groceryStoreImage} 
            alt="Grocery Store" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Billing Software For
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
            Grocery Store
          </h2>
        </div>
      </div>
      <Link to="/dashboard" className="mt-8">
        <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition duration-300">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default WelcomePage;
