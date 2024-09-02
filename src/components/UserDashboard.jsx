import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import Logo from '../assets/logo.png';
import Carousel from './Carousel'; // Import the Carousel component

const UserDashboard = () => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Redirect to login page after successful logout
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Logout error: ', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Section */}
      <div className="bg-yellow-400 p-4 flex justify-between items-center">
        <div className="flex items-center ml-10">
          <img src={Logo} alt="Logo " style={{ width: '60px' }} />
          <h1 className="text-sm font-bold uppercase ml-5 tracking-widest">Amarabelliana's Gowns and Events Stylist</h1>
        </div>
        <div className="flex space-x-6 mr-10">
          <button className="text-black focus:outline-none hover:text-gray-100">
            <i className="fas fa-envelope"></i> {/* Email Icon */}
          </button>
          <button className="text-black focus:outline-none hover:text-gray-100">
            <i className="fas fa-user"></i> {/* User Icon */}
          </button>
          <button className="text-black focus:outline-none hover:text-gray-100">
            <i className="fas fa-bell"></i> {/* Notification Icon */}
          </button>
          <button className="text-black focus:outline-none hover:text-gray-100" onClick={() => setShowLogoutPopup(true)}>
            <i className="fas fa-sign-out-alt"></i> {/* Logout Icon */}
          </button>
        </div>
      </div>

      {/* Custom Navigation Bar */}
      <div className="bg-black p-4 flex justify-start pl-8 space-x-8 text-white">
        <Link to="/home" className="bg-white text-black px-4 py-2 rounded-t-lg hover:bg-[#ffd000] transition">COLLECTIONS</Link>
        <Link to="/package" className="bg-white text-black px-4 py-2 rounded-t-lg hover:bg-[#ffd000] transition">PACKAGE</Link>
        <Link to="/customize-model" className="bg-white text-black px-4 py-2 rounded-t-lg hover:bg-[#ffd000] transition">CUSTOMIZE 3D MODEL</Link>
        <Link to="/ai-generator" className="bg-white text-black px-4 py-2 rounded-t-lg hover:bg-[#ffd000] transition">AI GENERATOR</Link>
      </div>

      {/* Carousel */}
      <div className="pt-8 px-8">
        <Carousel />
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="text-lg mb-4">Do you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
