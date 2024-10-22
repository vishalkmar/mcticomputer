import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('key'); // Replace 'adminToken' with your key
  
  return isAuthenticated ? element : <Navigate to="/adminlogin" />;
};

export default ProtectedRoute;
