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
import InventoryManagement from './components/InventoryManagement';
import StaffManagement from './components/StaffManagement';
import UserManagement from './components/ManagementDashboard';
import SalesReport from './components/SalesReport';
import Archive from './components/Archive'; // Import Archive component
import CustomerFeedback from './components/CustomerFeedback'; // Import CustomerFeedback component
import ProductReviews from './components/ProductReviews'; // Import ProductReviews component

// Define the routes
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
    {
        path: "/inventory-management",
        element: <InventoryManagement />,
    },
    {
        path: "/staff-management",
        element: <StaffManagement />,
    },
    {
        path: "/user-management",
        element: <UserManagement />,
    },
    {
        path: "/sales-report",
        element: <SalesReport />,
    },
    {
        path: "/archive",
        element: <Archive />, // Route for Archive
    },
    {
        path: "/customer-feedback",
        element: <CustomerFeedback />, // Route for Customer Feedback
    },
    {
        path: "/product-reviews", // Route for Product Reviews
        element: <ProductReviews />,
    },
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
