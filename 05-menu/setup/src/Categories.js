import React, { useState } from "react";

const Categories = ({ items, setSelected }) => {
  const uniqueItems = [...new Set(items.map((item) => item.category))];
  console.log(
    "🚀TCL: ~ file: Categories.js ~ line 5 ~ Categories ~ uniqueItems",
    uniqueItems
  );
  return (
    <section className="menu section">
      <div className="title">
        <h2>menu project</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button type="button" className="filter-btn">
          All
        </button>
        {uniqueItems &&
          uniqueItems.map((category) => (
            <button
              type="button"
              className="filter-btn"
              key={category}
              onClick={() => setSelected(category)}
            >
              {category}
            </button>
          ))}
      </div>
    </section>
  );
};

export default Categories;
