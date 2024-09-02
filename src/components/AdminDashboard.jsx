import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// Import images
import logo from '../assets/logo.png';
import ballGown1 from '../assets/ballgown1.jpg';
import ballGown2 from '../assets/ballgown2.jpg';
import ballGown3 from '../assets/ballgown3.jpg';
import singleBreasted1 from '../assets/singleBreasted1.jpg';
import singleBreasted2 from '../assets/singleBreasted2.jpg';
import singleBreasted3 from '../assets/singleBreasted3.jpg';
import doubleBreasted1 from '../assets/doubleBreasted1.jpg'; 
import doubleBreasted2 from '../assets/doubleBreasted2.jpg';
import doubleBreasted3 from '../assets/doubleBreasted3.jpg';
import eveningGown1 from '../assets/eveninggown1.jpg';
import eveningGown2 from '../assets/eveninggown2.jpg';
import eveningGown3 from '../assets/eveninggown3.jpg';
import eveningGown4 from '../assets/eveninggown4.jpg'; 
import eveningGown5 from '../assets/eveninggown5.jpg';
import eveningGown6 from '../assets/eveninggown6.jpg';
import returnedSuit1 from '../assets/singleBreasted4.jpg'; 
import returnedSuit2 from '../assets/singleBreasted5.jpg';
import returnedSuit3 from '../assets/singleBreasted6.jpg';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white-900 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-black text-gold p-6">
        <div className="flex items-center mb-6">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
          <h2 className="text-2xl text-white font-bold">Amarabelliana's Boutique</h2>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/inventory-management" className="text-white hover:text-white">Inventory Management</Link>
            </li>
            <li className="mb-4">
              <Link to="/staff-management" className="text-white hover:text-white">Staff & User Management</Link>
            </li>
            <li className="mb-4">
              <Link to="/archive" className="text-white hover:text-white">Archive</Link>
            </li>
            <li className="mb-4">
              <Link to="/sales-report" className="text-white hover:text-white">Sales Report</Link>
            </li>
            <li className="mb-4">
              <Link to="/customer-feedback" className="text-white hover:text-white">Customer Feedback</Link>
            </li>
            <li className="mb-4">
              <Link to="/product-reviews" className="text-white hover:text-white">Product Reviews</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content Area */}
      <div className="w-3/4 p-8">
        {/* Top Bar with Icons and Admin Dashboard Text */}
        <div className="flex flex-col">
          <div className="flex justify-end items-center space-x-6 mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-gold text-xl cursor-pointer" title="Messages" />
            <FontAwesomeIcon icon={faBell} className="text-gold text-xl cursor-pointer" title="Notifications" />
            <FontAwesomeIcon icon={faUser} className="text-gold text-xl cursor-pointer" title="Profile" />
            <Link to="/" className="text-gold text-xl cursor-pointer" title="Logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gold mb-4 text-center">Admin Dashboard</h1>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Gowns Overview Section */}
          <div className="bg-white-800 p-4 shadow-md rounded-lg text-gold">
            <h2 className="text-xl font-semibold mb-2">Gowns Overview</h2>
            <div>
              <h3 className="font-medium">Ball Gowns</h3>
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src={ballGown1} 
                  alt="Ball Gown 1" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={ballGown2} 
                  alt="Ball Gown 2" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={ballGown3} 
                  alt="Ball Gown 3" 
                  className="w-full h-48 object-cover rounded-md" 
                />
              </div>

              <h3 className="font-medium mt-4">Evening Gowns</h3>
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src={eveningGown1} 
                  alt="Evening Gown 1" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={eveningGown2} 
                  alt="Evening Gown 2" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={eveningGown3} 
                  alt="Evening Gown 3" 
                  className="w-full h-48 object-cover rounded-md" 
                />
              </div>
            </div>
          </div>

          {/* Suits Overview Section */}
          <div className="bg-white-800 p-4 shadow-md rounded-lg text-gold">
            <h2 className="text-xl font-semibold mb-2">Suits Overview</h2>
            <div>
              <h3 className="font-medium">Single Breasted Suits</h3>
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src={singleBreasted1} 
                  alt="Single Breasted Suit 1" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={singleBreasted2} 
                  alt="Single Breasted Suit 2" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={singleBreasted3} 
                  alt="Single Breasted Suit 3" 
                  className="w-full h-48 object-cover rounded-md" 
                />
              </div>

              <h3 className="font-medium mt-4">Double Breasted Suits</h3>
              <div className="grid grid-cols-3 gap-2">
                <img 
                  src={doubleBreasted1} 
                  alt="Double Breasted Suit 1" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={doubleBreasted2} 
                  alt="Double Breasted Suit 2" 
                  className="w-full h-48 object-cover rounded-md" 
                />
                <img 
                  src={doubleBreasted3} 
                  alt="Double Breasted Suit 3" 
                  className="w-full h-48 object-cover rounded-md" 
                />
              </div>
            </div>
          </div>

          {/* Returned Gowns Section */}
          <div className="bg-white-800 p-4 shadow-md rounded-lg text-gold">
            <h2 className="text-xl font-semibold mb-2">Returned Gowns</h2>
            <div className="grid grid-cols-3 gap-2">
              <img 
                src={eveningGown4} 
                alt="Returned Gown 1" 
                className="w-full h-48 object-cover rounded-md" 
              />
              <img 
                src={eveningGown5} 
                alt="Returned Gown 2" 
                className="w-full h-48 object-cover rounded-md" 
              />
              <img 
                src={eveningGown6} 
                alt="Returned Gown 3" 
                className="w-full h-48 object-cover rounded-md" 
              />
            </div>
          </div>

          {/* Returned Suits Section */}
          <div className="bg-white-800 p-4 shadow-md rounded-lg text-gold">
            <h2 className="text-xl font-semibold mb-2">Returned Suits</h2>
            <div className="grid grid-cols-3 gap-2">
              <img 
                src={returnedSuit1} 
                alt="Returned Suit 1" 
                className="w-full h-48 object-cover rounded-md" 
              />
              <img 
                src={returnedSuit2} 
                alt="Returned Suit 2" 
                className="w-full h-48 object-cover rounded-md" 
              />
              <img 
                src={returnedSuit3} 
                alt="Returned Suit 3" 
                className="w-full h-48 object-cover rounded-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
