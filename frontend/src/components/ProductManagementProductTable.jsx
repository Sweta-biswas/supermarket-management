import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductManagementProductTable = ({ products, setProducts }) => {
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://supermarket-backend-seven.vercel.app/api/v1/productmanager/get-product');
        const productsWithId = response.data.map(product => ({
          ...product,
          id: product._id,
        }));
        console.log(response.data)
        setProducts(productsWithId);
      } catch (error) {
        console.error('There was an error fetching the products:', error);
      }
    };
    fetchData();
  }, []);

  const handleUpdateProduct = async (product) => {
    try {
      const productData = {
        ...product,
        price: parseFloat(product.price),
        stock: parseInt(product.stock),
      };
      const response = await axios.put(`https://supermarket-backend-seven.vercel.app/api/v1/productmanager/update-product/${product.id}`, productData);
      setProducts(products.map(p => (p.id === response.data.id ? response.data : p)));
      setEditProductId(null);
      toast.success('Product updated successfully!');
    } catch (error) {
      console.error('There was an error updating the product:', error);
      toast.error('There was an error updating the product.');
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`https://supermarket-backend-seven.vercel.app/api/v1/productmanager/delete-product/${id}`);
      setProducts(products.filter(p => p.id !== id));
      toast.success('Product deleted successfully!');
    } catch (error) {
      console.error('There was an error deleting the product:', error);
      toast.error('There was an error deleting the product.');
    }
  };

  return (
    <table className="min-w-full bg-white border border-gray-200 rounded">
      <thead>
        <tr>
          <th className="p-2 border-b">Product</th>
          <th className="p-2 border-b">Category</th>
          <th className="p-2 border-b">Price</th>
          <th className="p-2 border-b">Stock</th>
          <th className="p-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td className="p-2 border-b">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, name: e.target.value } : p))}
                  className="p-2 border rounded"
                />
              ) : (
                product.name
              )}
            </td>
            <td className="p-2 border-b">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={product.category}
                  onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, category: e.target.value } : p))}
                  className="p-2 border rounded"
                />
              ) : (
                product.category
              )}
            </td>
            <td className="p-2 border-b">
              {editProductId === product.id ? (
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, price: e.target.value } : p))}
                  className="p-2 border rounded"
                />
              ) : (
                product.price
              )}
            </td>
            <td className="p-2 border-b">
              {editProductId === product.id ? (
                <input
                  type="number"
                  value={product.stock}
                  onChange={(e) => setProducts(products.map(p => p.id === product.id ? { ...p, stock: e.target.value } : p))}
                  className="p-2 border rounded"
                />
              ) : (
                product.stock
              )}
            </td>
            <td className="p-2 border-b">
              {editProductId === product.id ? (
                <>
                  <button
                    onClick={() => handleUpdateProduct(product)}
                    className="p-2 bg-green-500 text-white rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditProductId(null)}
                    className="p-2 bg-red-500 text-white rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setEditProductId(product.id)}
                    className="p-2 bg-yellow-500 text-white rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="p-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductManagementProductTable;