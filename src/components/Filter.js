import React from "react";

function Filter({ selectedCategory, onCategoryChange, search, onSearchChange }) {
  function handleSearch(e) {
    onSearchChange(e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}                     // ✅ controlled input
        onChange={handleSearch}
      />

      <select
        name="filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
