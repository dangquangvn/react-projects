import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getThemeStorage = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getThemeStorage());
  const toggleTheme = () => {
    const value = localStorage.getItem("theme");
    // if (!value) return;
    if (value === "light-theme") {
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
    localStorage.setItem("theme", theme);
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
