// src/components/FilterSorting.js
import React from 'react';
import '../assets/FilterSorting.css';

const FilterSorting = () => {
  return (
    <div className="filter-sorting">
      <button className="filter-btn">Filter</button>
      <span>Showing 1-16 of 32 results</span>
      <div className="sort-options">
        <label>Show:</label>
        <select>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
        <label>Sort by:</label>
        <select>
          <option value="default">Default</option>
          <option value="price-low-high">Price (Low to High)</option>
          <option value="price-high-low">Price (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSorting;
