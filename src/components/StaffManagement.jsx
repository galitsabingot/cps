import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const initialStaff = [
  { id: 1, name: 'John Doe', position: 'Manager', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', position: 'Sales Associate', email: 'jane.smith@example.com' },
];

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 2, name: 'Bob Brown', email: 'bob.brown@example.com' },
];

const ManagementDashboard = () => {
  const [staffList, setStaffList] = useState(initialStaff);
  const [userList, setUserList] = useState(initialUsers);

  const [newStaff, setNewStaff] = useState({ name: '', position: '', email: '' });
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const [staffError, setStaffError] = useState('');
  const [userError, setUserError] = useState('');

  const handleAddStaff = () => {
    if (!newStaff.name || !newStaff.position || !newStaff.email) {
      setStaffError('All fields are required');
      return;
    }
    const newId = staffList.length ? staffList[staffList.length - 1].id + 1 : 1;
    setStaffList([...staffList, { ...newStaff, id: newId }]);
    setNewStaff({ name: '', position: '', email: '' });
    setStaffError('');
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      setUserError('Both fields are required');
      return;
    }
    const newId = userList.length ? userList[userList.length - 1].id + 1 : 1;
    setUserList([...userList, { ...newUser, id: newId }]);
    setNewUser({ name: '', email: '' });
    setUserError('');
  };

  const handleDeleteStaff = (id) => {
    setStaffList(staffList.filter(staff => staff.id !== id));
  };

  const handleDeleteUser = (id) => {
    setUserList(userList.filter(user => user.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex items-center mb-8">
        <img src={logo} alt="Amarabelliana's Boutique Logo" className="w-16 h-16 mr-4 rounded-full border border-gray-300" />
        <h1 className="text-4xl font-bold text-gray-800">Amarabelliana's Boutique</h1>
      </header>

      {/* Staff Management */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Staff</h2>
        <div className="mb-4 flex flex-col md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 bg-gray-50 text-gray-700"
          />
          <input
            type="text"
            placeholder="Position"
            value={newStaff.position}
            onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 bg-gray-50 text-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            value={newStaff.email}
            onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 bg-gray-50 text-gray-700"
          />
          <button
            onClick={handleAddStaff}
            className="px-4 py-3 m-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Staff
          </button>
        </div>
        {staffError && <p className="text-red-600 mb-4">{staffError}</p>}
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left text-gray-600">Name</th>
              <th className="p-4 text-left text-gray-600">Position</th>
              <th className="p-4 text-left text-gray-600">Email</th>
              <th className="p-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map(staff => (
              <tr key={staff.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 text-gray-800">{staff.name}</td>
                <td className="p-4 text-gray-800">{staff.position}</td>
                <td className="p-4 text-gray-800">{staff.email}</td>
                <td className="p-4 flex space-x-3">
                  <button
                    onClick={() => alert(`Edit staff with ID: ${staff.id}`)}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteStaff(staff.id)}
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

      {/* User Management */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Users</h2>
        <div className="mb-4 flex flex-col md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 bg-gray-50 text-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-md mb-2 md:mb-0 bg-gray-50 text-gray-700"
          />
          <button
            onClick={handleAddUser}
            className="px-4 py-3 m-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition"

          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add User
          </button>
        </div>
        {userError && <p className="text-red-600 mb-4">{userError}</p>}
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left text-gray-600">Name</th>
              <th className="p-4 text-left text-gray-600">Email</th>
              <th className="p-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="p-4 text-gray-800">{user.name}</td>
                <td className="p-4 text-gray-800">{user.email}</td>
                <td className="p-4 flex space-x-3">
                  <button
                    onClick={() => alert(`Edit user with ID: ${user.id}`)}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
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

export default ManagementDashboard;
