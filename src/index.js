import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import Collections from './pages/Collections';
import Selection from './pages/Selection';
import SignUp from './components/SignUp';
import UserDashboard from './components/UserDashboard';
import StaffDashboard from './components/StaffDashboard';
import AdminDashboard from './components/AdminDashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "collections",
      element: <Collections />,
    },
    {
      path: "selection",
      element: <Selection />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "/user-dashboard",
      element: <UserDashboard />,
    },
    {
      path: "/staff-dashboard",
      element: <StaffDashboard />,
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
