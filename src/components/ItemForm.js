import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      category,
    };
    onItemFormSubmit(newItem); // Pass the new item to the callback function
    setName(""); // Reset the form after submission
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          aria-label="Name"
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange} aria-label="Category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
