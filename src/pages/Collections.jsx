import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ballgown1 from '../assets/ballgown1.jpg';
import ballgown2 from '../assets/ballgown2.jpg';
import ballgown3 from '../assets/ballgown3.jpg';
import ballgown4 from '../assets/ballgown4.jpg';
import ballgown5 from '../assets/ballgown5.jpg';
import ballgown6 from '../assets/ballgown6.jpg';
import ballgown7 from '../assets/ballgown7.jpg';

import eveninggown1 from '../assets/eveninggown1.jpg';
import eveninggown2 from '../assets/eveninggown2.jpg';
import eveninggown3 from '../assets/eveninggown3.jpg';
import eveninggown4 from '../assets/eveninggown4.jpg';
import eveninggown5 from '../assets/eveninggown5.jpg';
import eveninggown6 from '../assets/eveninggown6.jpg';

import singleBreasted1 from '../assets/singleBreasted1.jpg';
import singleBreasted2 from '../assets/singleBreasted2.jpg';
import singleBreasted3 from '../assets/singleBreasted3.jpg';
import singleBreasted4 from '../assets/singleBreasted4.jpg';
import singleBreasted5 from '../assets/singleBreasted5.jpg';
import singleBreasted6 from '../assets/singleBreasted6.jpg';

import doubleBreasted1 from '../assets/doubleBreasted1.jpg';
import doubleBreasted2 from '../assets/doubleBreasted2.jpg';
import doubleBreasted3 from '../assets/doubleBreasted3.jpg';
import doubleBreasted4 from '../assets/doubleBreasted4.jpg';
import doubleBreasted5 from '../assets/doubleBreasted5.jpg';
import doubleBreasted6 from '../assets/doubleBreasted6.jpg';
import './Collections.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Collections = () => {
  const ballGownsRef = useRef(null);
  const eveningGownsRef = useRef(null);
  const singleBreastedRef = useRef(null);
  const doubleBreastedRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -ref.current.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: ref.current.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const handleViewDetails = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  const handleRentClick = () => {
    setShowRegistrationModal(true);
  };

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Navbar />
      {/* Gowns Collection Section */}
      <div className="p-8 bg-gray-100">
        <div className="bg-[#ffd000] mt-20 mb-6 w-full h-20 flex items-center justify-center relative">
          <h1 className="text-4xl font-bold">GOWNS COLLECTION</h1>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">BALL GOWNS</h2>
          <div className="relative flex items-center">
            <button 
              onClick={() => scrollLeft(ballGownsRef)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &lt;
            </button>
            <div 
              ref={ballGownsRef} 
              className="flex space-x-14 overflow-x-auto bg-gray-300 p-6"
            >
              {[
                ballgown1, ballgown2, ballgown3, ballgown4, ballgown5, ballgown6, ballgown7
              ].map((src, index) => (
                <div key={index} className="relative w-72 h-96 flex-shrink-0 group">
                  <img 
                    src={src} 
                    alt={`Ball Gown ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                    <button 
                      onClick={() => handleViewDetails(src)}
                      className="text-white text-lg font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => scrollRight(ballGownsRef)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">EVENING GOWNS</h2>
          <div className="relative flex items-center">
            <button 
              onClick={() => scrollLeft(eveningGownsRef)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &lt;
            </button>
            <div 
              ref={eveningGownsRef} 
              className="flex space-x-14 overflow-x-auto bg-gray-300 p-6"
            >
              {[
                eveninggown1, eveninggown2, eveninggown3, eveninggown4, eveninggown5, eveninggown6
              ].map((src, index) => (
                <div key={index} className="relative w-72 h-96 flex-shrink-0 group">
                  <img 
                    src={src} 
                    alt={`Evening Gown ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                    <button 
                      onClick={() => handleViewDetails(src)}
                      className="text-white text-lg font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => scrollRight(eveningGownsRef)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &gt;
            </button>
          </div>
        </div>
        {/* Suits Collection Section */}
        <div className="mb-12">
          <div className="bg-[#ffd000] mt-20 mb-6 w-full h-20 flex items-center justify-center relative">
            <h1 className="text-4xl font-bold">SUITS COLLECTION</h1>
          </div>
          <h2 className="text-2xl font-semibold mb-4 uppercase">Single Breasted Suits</h2>
          <div className="relative flex items-center mb-8">
            <button 
              onClick={() => scrollLeft(singleBreastedRef)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &lt;
            </button>
            <div 
              ref={singleBreastedRef} 
              className="flex space-x-14 overflow-x-auto bg-gray-300 p-6"
            >
              {[
                singleBreasted1, singleBreasted2, singleBreasted3, singleBreasted4, singleBreasted5, singleBreasted6
              ].map((src, index) => (
                <div key={index} className="relative w-72 h-96 flex-shrink-0 group">
                  <img 
                    src={src} 
                    alt={`Single Breasted Suit ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                    <button 
                      onClick={() => handleViewDetails(src)}
                      className="text-white text-lg font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => scrollRight(singleBreastedRef)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &gt;
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-4 uppercase">Double Breasted Suits</h2>
          <div className="relative flex items-center">
            <button 
              onClick={() => scrollLeft(doubleBreastedRef)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &lt;
            </button>
            <div 
              ref={doubleBreastedRef} 
              className="flex space-x-14 overflow-x-auto bg-gray-300 p-6"
            >
              {[
                doubleBreasted1, doubleBreasted2, doubleBreasted3, doubleBreasted4, doubleBreasted5, doubleBreasted6
              ].map((src, index) => (
                <div key={index} className="relative w-72 h-96 flex-shrink-0 group">
                  <img 
                    src={src} 
                    alt={`Double Breasted Suit ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                    <button 
                      onClick={() => handleViewDetails(src)}
                      className="text-white text-lg font-semibold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => scrollRight(doubleBreastedRef)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-4 rounded-full z-10 shadow-lg"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg w-1/3 relative">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-black text-4xl font-bold p-2"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Selected Gown" 
              className="w-full h-auto max-w-md mx-auto"
            />
            <button 
              onClick={handleRentClick}
              className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg"
            >
              RENT
            </button>
          </div>
        </div>
      )}
      {showRegistrationModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
    <div className="bg-white p-8 rounded-lg w-2/5 relative">
      <button 
        onClick={() => setShowRegistrationModal(false)} 
        className="absolute top-4 right-4 text-black text-4xl font-bold p-2"
      >
        &times;
      </button>
      <div className="flex items-center justify-center mb-4">
        <i className="fas fa-exclamation-triangle text-3xl text-red-500 mr-2"></i>
        <p className="text-lg text-center text-red-500">
          You need to register an account to do a transaction.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => window.location.href = 'signup'}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Register
        </button>
        <button
          onClick={() => window.location.href = 'selection'}
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};
export default Collections;