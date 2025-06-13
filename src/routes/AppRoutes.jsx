import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Restaurants from '../pages/Restaurants';
import Table from '../pages/Table';
import Dashboard from '../pages/Dashboard';
import Bookings from '../pages/Bookings';

// Components
import NotFound from '../components/NotFound';

const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About user={user} />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurant/:id" element={<Table />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
