// src/components/Pagination.js
import React from 'react';

function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} onClick={() => onPageChange(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
