// src/components/ProductListPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import AddToCartModal from './AddToCartModal';
import Pagination from './Pagination';
import mockProducts from '../mockData';
import './ProductListPage.css'; // Ensure you have this CSS file

function ProductListPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [products] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the cart modal
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Function to close the cart modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to view product and navigate to Thank You page
  const viewProduct = (product) => {
    navigate(`/thank-you/${product.name}`); // Navigate to Thank You page
  };

  return (
    <div className="product-list-container" style={{ display: 'flex' }}>
      <div className="image-side" style={{ flex: '1', marginRight: '20px' }}>
        <img src="/images/nursery/component.jpg" alt="Nursery" style={{ width: '100%', height: 'auto' }} /> {/* Replace with your actual image path */}
      </div>
      <div className="product-side" style={{ flex: '2' }}>
        <div className="product-row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewProduct={viewProduct}
              addToCart={() => openModal(product)}
            />
          ))}
        </div>

        {modalOpen && (
          <AddToCartModal product={selectedProduct} closeModal={closeModal} />
        )}

        <Pagination totalPages={3} currentPage={1} onPageChange={() => {}} />
      </div>
    </div>
  );
}

export default ProductListPage;
