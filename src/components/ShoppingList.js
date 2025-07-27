import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";
import ItemForm from "./ItemForm";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [itemList, setItemList] = useState(items);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(search) {
    setSearchText(search);
  }

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]);
  }

  const visibleItems = itemList.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />

      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={searchText}                     // ✅ prop must be "search"
        onSearchChange={handleSearchChange}     // ✅ callback for input
      />

      <ul className="Items">
        {visibleItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
