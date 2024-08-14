import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  // Custom product images
  const productImages = {
    shampoo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpxfbbENI8ItUGPOluyoxbG-fo263chPoKg&s',
    soap: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDRjYwyED0wY3LgNXCJpElgWBn9xyWX6_7A&s',
    toothpaste: 'https://t3.ftcdn.net/jpg/05/17/38/42/360_F_517384239_mC6q5IZNDnAjQsDREEDuEe3s78pixMFF.jpg',
    deodorant: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMrhuq2JQuYYFRhwCuPzsjA_XHipMM-TrsA&s',
    lotion: 'https://t3.ftcdn.net/jpg/08/34/64/62/360_F_834646268_4jz6ppyOQP2rDx5PJ6mHWyr7b6JYEdBG.jpg',
    perfume: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ip-A5c_GEkyEmYxoQgVfSCKX8SC4eEBooA&s',
    facewash: 'https://graphicsfamily.com/wp-content/uploads/2020/07/facewash-packaging-design-free-download-scaled.jpg',
    hairgel: 'https://www.arata.in/cdn/shop/products/30.03.2022-TTD1205000.jpg?v=1650448538&width=720',
    sunscreen: 'https://www.shutterstock.com/image-vector/3d-summer-sunscreen-tube-ad-260nw-2012548070.jpg',
    moisturizer: 'https://img.freepik.com/premium-photo/face-cream-moisturiser-jar-glass-blue-background-beauty-product-skincare-cosmetic-science_360074-7852.jpg',
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJNfKh_9MfvK7UEVY7EQOVFiQxxMh_OVGKw&s'
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://supermarket-backend-seven.vercel.app/api/v1/productmanager/get-product')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item._id === selectedProduct._id);
        if (existingProduct) {
          return prevCart.map(item =>
            item._id === selectedProduct._id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...selectedProduct, quantity: 1 }];
        }
      });
      setSelectedProduct(null); // Close the modal after adding to cart
    }
  };

  const handleBuyNow = () => {
    if (selectedProduct) {
      navigate('/user/billing', { state: { cart: [{ ...selectedProduct, quantity: 1 }] } });
    }
  };

  const getProductImage = (product) => {
    if (!product || !product.name) {
      return productImages.default;
    }
    const productName = product.name.toLowerCase();
    for (const [key, value] of Object.entries(productImages)) {
      if (productName.includes(key)) {
        return value;
      }
    }
    return productImages.default;
  };

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 87%)`;
  };

  const handleLogout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    window.location.reload();
    navigate('/');
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4 relative"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20240327/pngtree-supermarket-aisle-with-empty-shopping-cart-at-grocery-store-retail-business-image_15646095.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        Logout
      </button>
      <div className="w-full max-w-4xl bg-opacity-90 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            className="p-4 w-full border rounded-full shadow-lg text-center transition-all duration-500 ease-in-out focus:ring-4 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="aspect-square rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 relative"
              style={{ backgroundColor: getRandomPastelColor() }}
              onClick={() => handleProductClick(product)}
            >
              <div className="relative w-full h-3/4 overflow-hidden rounded-b-lg">
                <img
                  src={getProductImage(product)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-75">
                <h2 className="text-sm font-bold truncate">{product.name}</h2>
                <p className="text-xs text-gray-700 font-semibold">₹{product.price?.toFixed(2) || 'N/A'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center transition-all duration-300 ease-in-out p-4">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <div className="flex justify-between mt-4">
              <button
                className="p-2 bg-gray-500 text-white rounded transition-transform duration-200 ease-in-out transform hover:scale-105"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
              <button
                className="p-2 bg-yellow-500 text-white rounded transition-transform duration-200 ease-in-out transform hover:scale-105"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="p-2 bg-blue-500 text-white rounded transition-transform duration-200 ease-in-out transform hover:scale-105"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-lg">
          <h3 className="font-bold mb-2">Cart Items</h3>
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between mb-2">
                <span>{item.name} (₹{item.price?.toFixed(2)} x {item.quantity})</span>
                <div>
                  <button
                    className="bg-gray-200 p-1 rounded text-xs"
                    onClick={() => setCart(cart.map(i => i._id === item._id ? { ...i, quantity: Math.max(i.quantity - 1, 1) } : i))}
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-200 p-1 rounded text-xs ml-2"
                    onClick={() => setCart(cart.map(i => i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i))}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white p-1 rounded text-xs ml-2"
                    onClick={() => setCart(cart.filter(i => i._id !== item._id))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 p-2 bg-green-500 text-white rounded w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => navigate('/user/billing', { state: { cart } })}
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductSearch;