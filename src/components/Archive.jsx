import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Update this path based on your actual logo path

const initialArchivedData = [
  { id: 1, name: 'Archived Item 1', date: '2024-08-01' },
  { id: 2, name: 'Archived Item 2', date: '2024-08-15' },
];

const Archive = () => {
  const [archivedItems] = useState(initialArchivedData);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex items-center mb-8">
        <img src={logo} alt="Boutique Logo" className="w-16 h-16 mr-4 rounded-full border border-gray-300" />
        <h1 className="text-4xl font-bold text-gray-800">Amarabelliana's Boutique</h1>
      </header>
      
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Archived Items</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => alert('Add new archived item')}
        >
          Add New
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left text-gray-600">Name</th>
              <th className="p-4 text-left text-gray-600">Date Archived</th>
            </tr>
          </thead>
          <tbody>
            {archivedItems.length === 0 ? (
              <tr>
                <td colSpan="2" className="p-4 text-center text-gray-600">No archived items available</td>
              </tr>
            ) : (
              archivedItems.map(item => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-800">{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Archive;
