import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [selected, setSelected] = useState("all");
  console.log("🚀TCL: ~ file: App.js ~ line 8 ~ App ~ selected", selected);
  return (
    <main>
      <Categories items={items} setSelected={setSelected} />
      <Menu items={items} selected={selected} />
    </main>
  );
}

export default App;
