import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("")

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(e){
    setSearchText(e.target.value)
  }
  function handleNewItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]); // Example usage
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleNewItem} searchText={searchText} onSearchChange={handleSearchChange} />
    </div>
  );
}

export default App;