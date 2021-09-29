import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // get all items data
  const [menuItems, setMenuItems] = useState(items);
  // get all categories data
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const filterItems = items.filter((item) => item.category === category);
    setMenuItems(filterItems);
  };
  return (
    <main>
      <Categories
        items={items}
        categories={categories}
        filterItems={filterItems}
      />
      <Menu items={items} menuItems={menuItems} />
    </main>
  );
}

export default App;
