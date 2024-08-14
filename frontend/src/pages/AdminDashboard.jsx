import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardAdmin from '../components/DashboardAdmin';
import NetIncomeMonitoring from '../components/NetIncomeMonitoring';
import EmployeeManagement from '../components/EmployeeManagement';

function AdminDashboard() {
  return (
    <Routes>
      <Route path="/" element={<DashboardAdmin />} />
      <Route path="/net-income-monitoring" element={<NetIncomeMonitoring />} />
      <Route path="/employee-management" element={<EmployeeManagement />} />
    </Routes>
  );
}

export default AdminDashboard;
