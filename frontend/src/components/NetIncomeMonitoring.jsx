import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fullData = [
  { date: '2024-07-01', revenue: 4000, expenses: 2400 },
  { date: '2024-07-02', revenue: 3000, expenses: 1398 },
  { date: '2024-07-03', revenue: 2000, expenses: 9800 },
  { date: '2024-07-04', revenue: 2780, expenses: 3908 },
  { date: '2024-07-05', revenue: 1890, expenses: 4800 },
  { date: '2024-07-06', revenue: 2390, expenses: 3800 },
  { date: '2024-07-07', revenue: 3490, expenses: 4300 },
  { date: '2024-07-08', revenue: 4000, expenses: 2400 },
  { date: '2024-07-09', revenue: 3000, expenses: 1398 },
  { date: '2024-07-10', revenue: 2000, expenses: 9800 },
  // More data...
];

function NetIncomeMonitoring() {
  const [dateRange, setDateRange] = useState('daily');
  const [filteredData, setFilteredData] = useState(fullData);

  const filterData = (range) => {
    switch(range) {
      case 'daily':
        return fullData.slice(0, 7); // Just as an example
      case 'weekly':
        return fullData; // For weekly, keep all data, or reduce it to 7-day summaries
      case 'monthly':
        return fullData.slice(0, 30); // Example data for a month
      case 'yearly':
        return fullData.slice(0, 365); // Example data for a year
      default:
        return fullData;
    }
  };

  const handleDateRangeChange = (e) => {
    const range = e.target.value;
    setDateRange(range);
    setFilteredData(filterData(range));
  };

  const handleExport = () => {
    // Logic for exporting financial reports
    alert('Exporting report...');
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Net Income Monitoring</h2>
      
      <div className="mb-8">
        <label htmlFor="dateRange" className="block mb-2 text-sm font-medium text-gray-700">
          Date Range:
        </label>
        <select 
          id="dateRange" 
          className="p-2 border border-gray-300 rounded"
          value={dateRange}
          onChange={handleDateRangeChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Financial Reports</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Profit Calculation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="expenses" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button 
        onClick={handleExport}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Export Report
      </button>
    </div>
  );
}

export default NetIncomeMonitoring;
