import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Import images
import ballGown1 from '../assets/ballgown1.jpg';
import eveningGown1 from '../assets/eveninggown1.jpg';
import singleBreasted1 from '../assets/singleBreasted1.jpg';
import doubleBreasted1 from '../assets/doubleBreasted1.jpg';

// Sample data for gowns and suits
const sampleGowns = [
  { id: 1, name: 'Ball Gown 1', category: 'Ball Gown', image: ballGown1 },
  { id: 2, name: 'Evening Gown 1', category: 'Evening Gown', image: eveningGown1 },
  // Add more gowns as needed
];

const sampleSuits = [
  { id: 1, name: 'Single Breasted Suit 1', category: 'Single Breasted', image: singleBreasted1 },
  { id: 2, name: 'Double Breasted Suit 1', category: 'Double Breasted', image: doubleBreasted1 },
  // Add more suits as needed
];

const InventoryManagement = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gold mb-6 text-center">Inventory Management</h1>

      {/* Gowns Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gold mb-4">Gowns</h2>
        <div className="grid grid-cols-2 gap-6">
          {sampleGowns.map(gown => (
            <div key={gown.id} className="bg-white-800 p-4 shadow-md rounded-lg text-gold">
              <img src={gown.image} alt={gown.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{gown.name}</h3>
              <p className="mb-2">{gown.category}</p>
              <div className="flex justify-between">
                <FontAwesomeIcon icon={faEdit} className="text-xl cursor-pointer" title="Edit" />
                <FontAwesomeIcon icon={faTrash} className="text-xl cursor-pointer" title="Delete" />
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-gold text-black px-4 py-2 rounded-md">
          <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Gown
        </button>
      </div>

      {/* Suits Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gold mb-4">Suits</h2>
        <div className="grid grid-cols-2 gap-6">
          {sampleSuits.map(suit => (
            <div key={suit.id} className="bg-white-800 p-4 shadow-md rounded-lg text-gold">
              <img src={suit.image} alt={suit.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{suit.name}</h3>
              <p className="mb-2">{suit.category}</p>
              <div className="flex justify-between">
                <FontAwesomeIcon icon={faEdit} className="text-xl cursor-pointer" title="Edit" />
                <FontAwesomeIcon icon={faTrash} className="text-xl cursor-pointer" title="Delete" />
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-gold text-black px-4 py-2 rounded-md">
          <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Suit
        </button>
      </div>
    </div>
  );
};

export default InventoryManagement;
