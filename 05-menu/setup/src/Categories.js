import React, { useState } from "react";

const Categories = ({ items, categories, filterItems }) => {
  return (
    <section className="menu section">
      <div className="title">
        <h2>menu project</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {categories.map((category) => (
          <button
            type="button"
            className="filter-btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
