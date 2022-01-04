import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      console.log("dark");
      setTheme("dark-theme");
    } else {
      console.log("light");
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    console.log(document.documentElement.className);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={toggleTheme}>
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
