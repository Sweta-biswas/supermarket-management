import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardProductManager from '../components/DashboardProductManager';
import StockMonitoring from '../components/StockMonitoring';
import ProductManagement from '../components/ProductManagement';

function ProductManagerDashboard() {
  return (
    <Routes>
      <Route path="/" element={<DashboardProductManager />} />
      <Route path="/product-management" element={<ProductManagement />} />
      <Route path="/stock-monitoring" element={<StockMonitoring />} />
    </Routes>
  );
}

export default ProductManagerDashboard;
