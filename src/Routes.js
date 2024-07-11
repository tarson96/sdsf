// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import TAORigsWebsite from './TAORigsWebsite';
import App from './App';
import ProductDetailPage from './ProductDetailPage';

const RoutesWrapper = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<TAORigsWebsite />} />
      <Route path="/pdetails" element={<ProductDetailPage />} />
    </Routes>
  </Router>
);

export default RoutesWrapper;
