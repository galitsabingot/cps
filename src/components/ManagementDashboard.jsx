import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Initial data
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
      setStaffError('All staff fields are required');
      return;
    }
    const newId = staffList.length ? staffList[staffList.length - 1].id + 1 : 1;
    setStaffList([...staffList, { ...newStaff, id: newId }]);
    setNewStaff({ name: '', position: '', email: '' });
    setStaffError('');
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      setUserError('Both name and email are required');
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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Management Dashboard</h1>

      {/* Staff Management */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Manage Staff</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            className="p-2 border border-white-300 rounded-md mr-2"
          />
          <input
            type="text"
            placeholder="Position"
            value={newStaff.position}
            onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
            className="p-2 border border-white-300 rounded-md mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newStaff.email}
            onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
            className="p-2 border border-white-300 rounded-md"
          />
          <button
            onClick={handleAddStaff}
            className="ml-4 px-4 py-2 bg-gold text-white rounded-md"
          >
            <FontAwesomeIcon icon={faPlus} /> Add Staff
          </button>
        </div>
        {staffError && <p className="text-red-500">{staffError}</p>}
        <table className="min-w-full bg-white-800 border border-white-300 mb-6">
          <thead>
            <tr className="border-b border-white-300">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map(staff => (
              <tr key={staff.id}>
                <td className="p-4">{staff.name}</td>
                <td className="p-4">{staff.position}</td>
                <td className="p-4">{staff.email}</td>
                <td className="p-4 flex space-x-2">
                  <button
                    onClick={() => alert(`Edit staff with ID: ${staff.id}`)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteStaff(staff.id)}
                    className="text-red-500 hover:text-red-700"
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
      <div>
        <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-md mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddUser}
            className="ml-4 px-4 py-2 bg-gold text-white rounded-md"
          >
            <FontAwesomeIcon icon={faPlus} /> Add User
          </button>
        </div>
        {userError && <p className="text-red-500">{userError}</p>}
        <table className="min-w-full bg-white-800 border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr key={user.id}>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 flex space-x-2">
                  <button
                    onClick={() => alert(`Edit user with ID: ${user.id}`)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:text-red-700"
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
