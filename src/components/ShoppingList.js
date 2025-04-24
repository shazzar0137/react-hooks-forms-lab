import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, searchText, onSearchChange }) {
  const [itemList, setItemList] = useState(items); // Local state for items
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]); // Add new item to the list
  }

  const filteredItems = itemList.filter((item) => {
    const itemName = item.name
    const searchValue = searchText || "";
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = itemName.toLowerCase().includes(searchValue.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        searchText={searchText}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;