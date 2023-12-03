import React from "react";

const Filter = ({ search, onSearchChange }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={handleSearchChange}
      data-testid="filter-input"
    />
  );
};

export default Filter;
