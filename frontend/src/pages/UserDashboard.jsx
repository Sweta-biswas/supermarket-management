import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSignup from '../components/UserSignup';
import UserSignin from '../components/UserSignin';
import Billing from '../components/Billing';
import ProductSearch from '../components/ProductSearch';

function UserDashboard() {
  return (
    <Routes>
      <Route path="signup" element={<UserSignup/>} />
      <Route path="signin" element={<UserSignin />} />
      <Route path="product-search" element={<ProductSearch />} />
      <Route path="billing" element={<Billing />} />
    </Routes>
  );
}

export default UserDashboard;