// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

function ProductCard({ product, viewProduct, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => viewProduct(product)}>View Product</button>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
