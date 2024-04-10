import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [listData, setListData] = useState(data);
  // const [people, setPeople] = useState(data);
  const clearButton = () => {
    setListData([]);
  };
  return (
    <main className='section'>
      <div className='container'>
        <h3>{listData.length} birthdays today</h3>
        {listData.map(({ name, age, image }, index) => (
          <List name={name} age={age} image={image} key={index} />
        ))}
        <button onClick={clearButton}>Clear All</button>
      </div>
    </main>
  );
}
export default App;
