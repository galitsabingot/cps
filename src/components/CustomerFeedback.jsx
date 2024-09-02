import React, { useState } from 'react';
import logo from '../assets/logo.png';

const initialFeedback = [
  { id: 1, name: 'Alice Johnson', feedback: 'Great selection of clothes! Very happy with my purchase.' },
  { id: 2, name: 'Bob Brown', feedback: 'The customer service was excellent. Will definitely return.' },
];

const CustomerFeedback = () => {
  const [feedbackList] = useState(initialFeedback);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex items-center mb-8">
        <img src={logo} alt="Amarabelliana's Boutique Logo" className="w-16 h-16 mr-4 rounded-full border border-gray-300" />
        <h1 className="text-4xl font-bold text-gray-800">Amarabelliana's Boutique</h1>
      </header>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customer Feedback</h2>

      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">All Feedback</h3>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left text-gray-600">Name</th>
              <th className="p-4 text-left text-gray-600">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.map(item => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 text-gray-800">{item.name}</td>
                <td className="p-4 text-gray-800">{item.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerFeedback;
