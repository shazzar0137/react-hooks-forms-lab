import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // State for controlled inputs
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  // Event handlers for input changes
  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  // Form submit handler
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem); // Pass the new item to the parent component
    setItemName(""); // Reset form inputs
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
        >
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

