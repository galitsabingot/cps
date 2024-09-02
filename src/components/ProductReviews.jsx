import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const initialReviews = [
  { id: 1, product: 'Summer Dress', review: 'Absolutely love this dress! It fits perfectly and the quality is great.', rating: 5 },
  { id: 2, product: 'Leather Jacket', review: 'The jacket is stylish and well-made, but it took a while to arrive.', rating: 4 },
];

const ProductReviews = () => {
  const [reviewsList] = useState(initialReviews);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex items-center mb-8">
        <img src={logo} alt="Amarabelliana's Boutique Logo" className="w-16 h-16 mr-4 rounded-full border border-gray-300" />
        <h1 className="text-4xl font-bold text-gray-800">Amarabelliana's Boutique</h1>
      </header>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Reviews</h2>

      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">All Reviews</h3>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left text-gray-600">Product</th>
              <th className="p-4 text-left text-gray-600">Review</th>
              <th className="p-4 text-left text-gray-600">Rating</th>
            </tr>
          </thead>
          <tbody>
            {reviewsList.map(item => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 text-gray-800">{item.product}</td>
                <td className="p-4 text-gray-800">{item.review}</td>
                <td className="p-4 text-gray-800">
                  {[...Array(item.rating)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReviews;
