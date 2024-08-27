import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const StaffDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-16 px-8">
        <h1 className="text-3xl font-bold mb-4">Staff Dashboard</h1>
        <p>Welcome to the Staff Dashboard.</p>
        {/* Add additional content and functionality for the staff dashboard here */}
        <Link to="/" className="text-blue-500 hover:underline">Logout</Link>
      </div>
    </div>
  );
};

export default StaffDashboard;
