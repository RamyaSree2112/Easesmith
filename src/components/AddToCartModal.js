// src/components/AddToCartModal.js
import React from 'react';
import './AddToCartModal.css';

function AddToCartModal({ product, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={() => {
          alert('Product added to cart!');
          closeModal();
        }}>
          Confirm Add to Cart
        </button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default AddToCartModal;
