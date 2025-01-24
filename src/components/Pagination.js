// Pagination.js
import React from 'react';
import '../assets/Pagination.css';

const Pagination = ({ currentPage, totalProducts, limit, setCurrentPage }) => {
  const totalPages = Math.ceil(totalProducts / limit);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
