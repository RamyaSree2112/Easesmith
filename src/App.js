// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';
import TopBar from './components/TopBar';
import ThankYouPage from './components/ThankYouPage';
import Nursery from './components/Nursery'; // Include this if needed
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div>
        <TopBar /> 
        <Header />
        <Nursery /> {/* Render Nursery component if needed */}
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/thank-you/:productName" element={<ThankYouPage />} />
        </Routes>
        <Footer /> {/* Render Footer component */}
      </div>
    </Router>
  );
}

export default App;

