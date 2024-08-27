import React, { useState } from 'react';
import { auth, db } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Selection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const role = userDoc.data().role;

      if (role === 'user') {
        window.location.href = '/user-dashboard';
      } else {
        setError('This account cannot log in via the User Login.');
      }
    } catch (error) {
      setError('Failed to log in. Please check your credentials and try again.');
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStaffAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const role = userDoc.data().role;

      if (role === 'staff' || role === 'admin') {
        window.location.href = role === 'staff' ? '/staff-dashboard' : '/admin-dashboard';
      } else {
        setError('This account cannot log in via the Staff/Admin Login.');
      }
    } catch (error) {
      setError('Failed to log in. Please check your credentials and try again.');
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className='absolute mix-blend-multiply filter blur-xl opacity-95 animate-blob animation-delay-2000 top-28 left-44 w-96 h-96 bg-purple-400 rounded-full z-10 pointer-events-none'></div>
      <div className='absolute mix-blend-multiply filter blur-xl opacity-95 animate-blob animation-delay-4000 top-96 left-80 w-96 h-96 bg-yellow-300 rounded-full z-10 pointer-events-none'></div>
      <div className='absolute mix-blend-multiply filter blur-xl opacity-95 animate-blob top-48 left-1/4 w-96 h-96 bg-pink-400 rounded-full z-10 pointer-events-none'></div>
      <div className='absolute mix-blend-multiply filter blur-xl opacity-95 animate-blob animation-delay-2000 bottom-10 right-24 w-96 h-96 bg-green-400 rounded-full z-10 pointer-events-none'></div>
      <div className='absolute mix-blend-multiply filter blur-xl opacity-95 animate-blob animation-delay-4000 bottom-1 right-80 w-96 h-96 bg-yellow-300 rounded-full z-10 pointer-events-none'></div>
      <h1 className="text-3xl font-bold mb-8">Select Login</h1>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <button
            type="button"
            onClick={handleUserLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            User Login
          </button>
          <button
            type="button"
            onClick={handleStaffAdminLogin}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Staff/Admin Login
          </button>
        </div>
        {loading && <p className="mt-4 text-gray-700">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
      <div className="mt-8">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default Selection;
