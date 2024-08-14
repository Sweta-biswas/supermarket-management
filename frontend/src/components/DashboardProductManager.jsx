import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DashboardProductManager() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('login')
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-100 p-4">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        Logout
      </button>
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Product Manager Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link 
          to="/product-manager/product-management" 
          className="p-4 bg-yellow-50 text-orange-600 w-full border rounded-full shadow-lg text-center transition-all duration-500 ease-in-out transform hover:scale-105 focus:scale-110 focus:ring-4 focus:ring-yellow-500 focus:outline-none"
        >
          Products Management
        </Link>
        <Link 
          to="/product-manager/stock-monitoring" 
          className="p-4 bg-yellow-50 text-orange-600 w-full border rounded-full shadow-lg text-center transition-all duration-500 ease-in-out transform hover:scale-105 focus:scale-110 focus:ring-4 focus:ring-yellow-500 focus:outline-none"
        >
          Stock Monitoring
        </Link>
      </div>
    </div>
  );
}

export default DashboardProductManager;