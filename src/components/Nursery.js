// Nursery.js
import React from 'react';
import './Nursery.css'; // Optional: If you have a CSS file for styling

function Nursery() {
  return (
    <div className="nursery">
      <h2>Nursery</h2>
      <img src="/images/nursery/nursery.jpg" alt="Nursery" /> {/* Adjust the path as needed */}
      <p>
        This is a description of the nursery. Here you can provide information about the plants, care tips, and any other relevant details.
      </p>
    </div>
  );
}

export default Nursery;
