import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Billing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState(location.state?.cart || []);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [discount, setDiscount] = useState(0); // New state for discount

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/user/search');
      toast.error('Your cart is empty!', { position: 'top-center' });
    }
  }, [cart, navigate]);

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = (discount / 100) * subtotal; // Calculate discount
    return subtotal - discountAmount;
  };

  const handlePayment = async () => {
    if (paymentMethod) {
      const userId= localStorage.getItem("userId")
      try {
        // Make API call to process payment
        const response = await axios.post('https://supermarket-backend-seven.vercel.app/api/v1/purchase/purchase-product', {
        
          products: cart.map(item => ({
            productId: item._id,
            quantity: item.quantity
          })),
          total: calculateTotal(),
          paymentMethod
        },{
          headers: {
            Authorization:"Bearer " + localStorage.getItem("token")
          }
        });

        if (response.status === 201) {
          toast.success('Payment successful!', { position: 'top-center' });
          
          setTimeout(() => navigate('/user/product-search'), 2000);
        }
      } catch (error) {
        console.error('Payment error:', error);
        toast.error('Payment failed. Please try again.', { position: 'top-center' });
      }
    } else {
      toast.error('Please select a payment method.', { position: 'top-center' });
    }
  };

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/calculator-dollar-bills-orange-background-copy-space-generative-ai_962169-29.jpg')" }}
    >
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg" style={{ transform: "scale(1.1)" }}>
        <h1 className="text-4xl font-bold mb-8 text-center">Billing</h1>
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="flex justify-between mb-4">
              <span className="text-lg">{item.name} (₹{item.price?.toFixed(2)} x {item.quantity})</span>
              <span className="text-lg">₹{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-6">
          <span className="text-xl font-bold">Subtotal:</span>
          <span className="text-xl">₹{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
        </div>

        {/* Discount Section */}
        <div className="mt-6">
          <label className="block text-xl font-semibold mb-2">Discount (%)</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="p-3 w-full border rounded text-lg"
            placeholder="Enter discount percentage"
          />
        </div>

        <div className="flex justify-between mt-6">
          <span className="text-xl font-bold">Total After Discount:</span>
          <span className="text-xl font-bold">₹{calculateTotal().toFixed(2)}</span>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="p-3 w-full border rounded text-lg"
          >
            <option value="">Choose a method...</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>

        <button
          onClick={handlePayment}
          className="mt-8 p-3 w-full bg-green-500 text-white rounded-lg shadow-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Complete Payment
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Billing;
