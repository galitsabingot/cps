import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-16 px-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome to the Admin Dashboard.</p>
        {/* Add additional content and functionality for the admin dashboard here */}
        <Link to="/" className="text-blue-500 hover:underline">Logout</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
