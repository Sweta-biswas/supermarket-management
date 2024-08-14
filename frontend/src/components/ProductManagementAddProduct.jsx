import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductManagementAddProduct = ({ setProducts, newProduct, setNewProduct, forceTableUpdate }) => {
  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stock) {
      toast.error('Please fill out all fields!');
      return;
    }
  
    try {
      const productData = {
        ...newProduct,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
      };
  
      // Show toast notification first
      toast.success('Product added successfully!');
  
      // Immediately update the product list with the new product
      setProducts(prevProducts => [...prevProducts, { ...productData, id: Date.now() }]);
  
      // Force table update
      forceTableUpdate();
  
      // Then add the product to the backend
      await axios.post('https://supermarket-backend-seven.vercel.app/api/v1/productmanager/add-product', productData);
  
      // Clear the form
      setNewProduct({ name: '', category: '', price: '', stock: '' });
    } catch (error) {
      console.error('There was an error adding the product:', error);
      toast.error('There was an error adding the product.');
    }
  };
  
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Add New Product</h3>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <input
        type="number"
        placeholder="Stock"
        value={newProduct.stock}
        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <button
        onClick={handleAddProduct}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductManagementAddProduct;