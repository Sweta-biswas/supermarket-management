import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductManagementAddProduct from './ProductManagementAddProduct';
import ProductManagementProductTable from './ProductManagementProductTable';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '' });
  const [tableKey, setTableKey] = useState(0);

  const forceTableUpdate = () => {
    setTableKey(prevKey => prevKey + 1);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Product Management</h2>

      <ProductManagementAddProduct
        setProducts={setProducts}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        forceTableUpdate={forceTableUpdate}
      />

      <ProductManagementProductTable
        products={products}
        setProducts={setProducts}
        key={tableKey}
      />

      <ToastContainer />
    </div>
  );
};

export default ProductManagement;