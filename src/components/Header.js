// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the styles

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Chapterone</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/plants">Plants & Pots</a></li>
          <li><a href="/tools">Tools</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/story">Our Story</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
