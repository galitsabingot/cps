import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const initialSales = [
  { id: 1, date: '2024-08-15', item: 'Dress', quantity: 2, amount: 120.00 },
  { id: 2, date: '2024-08-16', item: 'Handbag', quantity: 1, amount: 75.00 },
];

const SalesReport = () => {
  const [salesList, setSalesList] = useState(initialSales);

  const [newSale, setNewSale] = useState({ date: '', item: '', quantity: '', amount: '' });

  const [salesError, setSalesError] = useState('');

  const handleAddSale = () => {
    if (!newSale.date || !newSale.item || !newSale.quantity || !newSale.amount) {
      setSalesError('All fields are required');
      return;
    }
    const newId = salesList.length ? salesList[salesList.length - 1].id + 1 : 1;
    setSalesList([...salesList, { ...newSale, id: newId }]);
    setNewSale({ date: '', item: '', quantity: '', amount: '' });
    setSalesError('');
  };

  const handleDeleteSale = (id) => {
    setSalesList(salesList.filter(sale => sale.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex items-center mb-8">
        <img src={logo} alt="Amarabelliana's Boutique Logo" className="w-16 h-16 mr-4 rounded-full border border-gray-300" />
        <h1 className="text-4xl font-bold text-gray-800">Amarabelliana's Boutique</h1>
      </header>

      {/* Sales Report */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sales Report</h2>
        <div className="mb-4 flex flex-col md:flex-row md:items-center">
          <input
            type="date"
            value={newSale.date}
            onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 bg-gray-50 text-gray-700"
          />
          <input
            type="text"
            placeholder="Item"
            value={newSale.item}
            onChange={(e) => setNewSale({ ...newSale, item: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 bg-gray-50 text-gray-700"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newSale.quantity}
            onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 bg-gray-50 text-gray-700"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newSale.amount}
            onChange={(e) => setNewSale({ ...newSale, amount: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 bg-gray-50 text-gray-700"
          />
          <button
            onClick={handleAddSale}
            className="px-6 py-4 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition ml-2"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Sale
          </button>
        </div>
        {salesError && <p className="text-red-600 mb-4">{salesError}</p>}
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left text-gray-600">Date</th>
              <th className="p-4 text-left text-gray-600">Item</th>
              <th className="p-4 text-left text-gray-600">Quantity</th>
              <th className="p-4 text-left text-gray-600">Amount ($)</th>
              <th className="p-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salesList.map(sale => (
              <tr key={sale.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 text-gray-800">{sale.date}</td>
                <td className="p-4 text-gray-800">{sale.item}</td>
                <td className="p-4 text-gray-800">{sale.quantity}</td>
                <td className="p-4 text-gray-800">{sale.amount.toFixed(2)}</td>
                <td className="p-4 flex space-x-3">
                  <button
                    onClick={() => alert(`Edit sale with ID: ${sale.id}`)}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteSale(sale.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
