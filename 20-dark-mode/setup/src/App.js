import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const handleDarkMode = () => {
    console.log("dark");
  };
  return (
    <main className='dark-theme'>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={handleDarkMode}>
            Toggle
          </button>
        </div>
        <div className='articles'>
          {data && data.map((item) => <Article key={item.id} {...item} />)}
        </div>
      </nav>
    </main>
  );
}

export default App;
