import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import ProductManagerDashboard from './pages/ProductManagerDashboard';
import UserDashboard from './pages/UserDashboard';
import Dashboard from './pages/Dashboard';
import WelcomePage from './pages/WelcomePage';
import SignIn from './components/AdminSignin';
import ProductManagerSignIn from './components/ProductManagerSignin';
import Protected from './components/Protected';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/signin" element={isAuthenticated ? <Navigate to="/admin" /> : <SignIn />}/> */}
          <Route path="/signin" element={<Protected Component={SignIn}/>}/>
          <Route path="/product-manager-signin" element={<Protected Component={ProductManagerSignIn} />} />
          <Route path="/admin/*" element={<Protected Component={AdminDashboard} />} />
          <Route path="/product-manager/*" element={<Protected Component={ProductManagerDashboard} />} />
          <Route path="/user/*" element={<Protected Component={UserDashboard} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;