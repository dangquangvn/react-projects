import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <main>
      <Categories items={items} />
      <Menu items={items} />
    </main>
  );
}

export default App;
