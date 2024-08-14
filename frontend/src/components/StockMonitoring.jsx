import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';  // Import the Line component
import 'chart.js/auto'; // Import Chart.js to ensure it registers all components

const StockMonitoring = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ category: '', lowStockOnly: false });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://supermarket-backend-seven.vercel.app/api/v1/productmanager/get-product');
        console.log('API Response:', response.data); // Log the API response
        setProducts(response.data || []); // Use response.data directly if it's an array
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch products:', err); // Log any errors
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(product =>
      (filters.category ? product.category === filters.category : true) &&
      (filters.lowStockOnly ? product.stock < 10 : true) &&
      (search ? product.name.toLowerCase().includes(search.toLowerCase()) : true)
    );

  const stockLevels = filteredProducts.map(p => p.stock);
  const stockLabels = filteredProducts.map(p => p.name);

  const data = {
    labels: stockLabels,
    datasets: [
      {
        label: 'Stock Level Trend',
        data: stockLevels,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Stock Monitoring</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="p-2 border rounded ml-2"
        >
          <option value="">All Categories</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          {/* Add more categories as needed */}
        </select>
        <label className="ml-2">
          <input
            type="checkbox"
            checked={filters.lowStockOnly}
            onChange={(e) => setFilters({ ...filters, lowStockOnly: e.target.checked })}
          />
          Low Stock Only
        </label>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr>
            <th className="p-2 border-b">Product</th>
            <th className="p-2 border-b">Category</th>
            <th className="p-2 border-b">Stock Level</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <tr key={product._id} className={product.stock < 10 ? 'bg-red-100' : ''}>
                <td className="p-2 border-b">{product.name}</td>
                <td className="p-2 border-b">{product.category}</td>
                <td className="p-2 border-b">{product.stock}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2 border-b" colSpan="3">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-6">
        {/* Render chart only if there is data */}
        {filteredProducts.length > 0 && <Line data={data} />}
      </div>
    </div>
  );
};

export default StockMonitoring;
