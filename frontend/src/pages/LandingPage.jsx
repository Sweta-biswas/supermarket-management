import React from 'react';
import { Link } from 'react-router-dom';
import landingPageImage from '../assets/welcome.png'; 
import awardsImage from '../assets/awards.png';
import IntegratedManagementImage from '../assets/Flowchart.png';
import logo from '../assets/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBoxesStacked, faTags, faChartLine, faUsers, faCashRegister, faSearch, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-100 p-4">
      {/* Header */}
      <header className="bg-white w-full flex items-center p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 sm:h-10" />
          <div className="text-red-500 text-xl sm:text-2xl">
            <span className="font-bold">Easy</span>
            <span className="font-normal">Bill</span>
          </div>
        </div>
      </header>

      {/* First section */}
      <div className="w-full max-w-full mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-auto md:h-[550px]">
          <div className="w-full md:w-1/2 h-64 md:h-full">
            <img 
              src={landingPageImage} 
              alt="POS Software"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Supermarket Management with EasyBill
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              EasyBill is your all-in-one solution for efficient supermarket management. From stock monitoring to employee management, our system streamlines your operations and boosts productivity.
            </p>
            <Link to="/welcome" className="mt-4 sm:mt-8">
              <button className="bg-red-500 text-white py-2 px-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                Explore EasyBill →
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Benefits section */}
      <div className="w-full max-w-6xl mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center p-4">Benefits of EasyBill Supermarket Management System</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center p-4">
            <FontAwesomeIcon icon={faBoxesStacked} className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Stock Monitoring</h3>
            <p className="text-gray-600">Keep track of inventory levels in real-time, preventing stockouts and overstocking issues.</p>
          </div>
          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center p-4">
            <FontAwesomeIcon icon={faSearch} className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Product Search</h3>
            <p className="text-gray-600">Easily locate products with advanced search and filtering options, improving customer service.</p>
          </div>
          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center p-4">
            <FontAwesomeIcon icon={faCashRegister} className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Streamlined Billing</h3>
            <p className="text-gray-600">Process transactions quickly and accurately, enhancing customer satisfaction and reducing wait times.</p>
          </div>
          {/* Benefit 4 */}
          <div className="flex flex-col items-center text-center p-4">
            <FontAwesomeIcon icon={faTags} className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Product Management</h3>
            <p className="text-gray-600">Easily add, update, and organize your product catalog, ensuring accurate pricing and descriptions.</p>
          </div>
          {/* Benefit 5 */}
          <div className="flex flex-col items-center text-center p-4">
            <FontAwesomeIcon icon={faChartLine} className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Net Income Monitoring</h3>
            <p className="text-gray-600">Track your financial performance with detailed reports and analytics for informed decision-making.</p>
          </div>
          {/* Benefit 6 */}
          <div className="flex flex-col items-center text-center p-4">
            <FontAwesomeIcon icon={faUsers} className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Employee Management</h3>
            <p className="text-gray-600">Efficiently manage staff schedules, roles, and performance to optimize workforce productivity.</p>
          </div>
        </div>
      </div>

      {/* Awards & Accomplishments section */}
      <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center p-4">Awards and Accomplishments</h2>
        <div className="w-full max-w-6xl mx-auto mt-12 flex justify-center p-4">
          <img src={awardsImage} alt="Awards and Accomplishments" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* What is Supermarket POS system? */}
      <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center p-4">What is EasyBill Supermarket Management System?</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 p-4">
          EasyBill is a comprehensive Supermarket Management System designed to streamline all aspects of your supermarket operations. Our system integrates key functionalities such as stock monitoring, product search, billing, product management, net income monitoring, and employee management. With EasyBill, you can efficiently manage your inventory, process sales, track finances, and optimize your workforce, all from a single, user-friendly platform. Our system is built to enhance productivity, improve customer experience, and provide valuable insights to drive your business growth.
        </p>
      </div>

      {/* What are the benefits of Supermarket POS software? */}
      <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center p-4">What are the benefits of EasyBill Supermarket Management System?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="flex items-start">
            <div className="mr-4 text-red-500">
              <FontAwesomeIcon icon={faBoxesStacked} className="text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Stock Management</h3>
              <p className="text-gray-600">Our stock monitoring feature helps you maintain optimal inventory levels, preventing stockouts and overstocking.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-red-500">
              <FontAwesomeIcon icon={faChartLine} className="text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Financial Oversight</h3>
              <p className="text-gray-600">With our net income monitoring feature, you can track revenue, expenses, and profits in real-time, enabling better financial decision-making.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What are the key features of Supermarket POS software? */}
      <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center p-4">What are the key features of EasyBill Supermarket Management System?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="flex items-start">
            <div className="mr-4 text-red-500">
              <FontAwesomeIcon icon={faSearch} className="text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Product Search</h3>
              <p className="text-gray-600">Our robust product search feature allows quick and easy lookup of items, enhancing both staff efficiency and customer satisfaction.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-red-500">
              <FontAwesomeIcon icon={faCashRegister} className="text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Streamlined Billing Process</h3>
              <p className="text-gray-600">EasyBill's billing system simplifies checkout, handles various payment methods, and automatically updates inventory, ensuring a smooth transaction process.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why is EasyBill the best Supermarket POS system? */}
      <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center p-4">Why is EasyBill the best Supermarket Management System?</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 p-4">
          EasyBill stands out as the premier Supermarket Management System due to its comprehensive approach to supermarket operations. Our system integrates critical functions like stock monitoring, product management, billing, and financial tracking into a single, user-friendly platform. EasyBill's unique strength lies in its ability to provide real-time insights across all aspects of your business, from inventory levels to net income. With features like employee management and advanced product search, EasyBill not only streamlines your operations but also enhances customer experience. Our system is designed to grow with your business, making it the ideal choice for supermarkets of all sizes looking to optimize their operations and boost profitability.
        </p>
      </div>

      {/* Integrated Management Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center p-4">
          Integrated Management System for Seamless Supermarket Operations
        </h2>
        <div className="w-full max-w-6xl mx-auto mt-12 flex flex-col md:flex-row justify-center items-center p-4">
          <div className="w-full md:w-1/2 p-4">
            <img src={IntegratedManagementImage} alt="Integrated Supermarket Management" className="w-full h-auto object-contain" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700">
              <li>Efficient Stock Monitoring</li>
              <li>Quick Product Search and Management</li>
              <li>Streamlined Billing Process</li>
              <li>Comprehensive Net Income Tracking</li>
              <li>Effective Employee Management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-full bg-gray-900 mt-5 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About EasyBill */}
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="EasyBill Logo" className="h-10 mr-2" />
                <span className="text-2xl font-bold">EasyBill</span>
              </div>
              <p className="text-gray-400 mb-4">
                Streamlining supermarket operations with our comprehensive management solution.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/stock-monitoring" className="text-gray-400 hover:text-white transition-colors duration-300">Stock Monitoring</Link></li>
              <li><Link to="/product-search" className="text-gray-400 hover:text-white transition-colors duration-300">Product Search</Link></li>
              <li><Link to="/billing" className="text-gray-400 hover:text-white transition-colors duration-300">Billing</Link></li>
              <li><Link to="/product-management" className="text-gray-400 hover:text-white transition-colors duration-300">Product Management</Link></li>
              <li><Link to="/net-income-monitoring" className="text-gray-400 hover:text-white transition-colors duration-300">Net Income Monitoring</Link></li>
              <li><Link to="/employee-management" className="text-gray-400 hover:text-white transition-colors duration-300">Employee Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" />
                <span className="text-gray-400">123 EasyBill Street, Tech City, 12345</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-500" />
                <a href="mailto:support@easybill.com" className="text-gray-400 hover:text-white transition-colors duration-300">support@easybill.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} EasyBill. All rights reserved.
          </p>
          <div className="mt-2">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300 mr-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default LandingPage;