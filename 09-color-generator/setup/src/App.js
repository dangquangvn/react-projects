import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import { useEffect } from "react";

function App() {
  const [color, setColor] = useState("#f15025");
  const [colorArray, setColorArray] = useState([]);

  // render first time get in
  useEffect(() => {
    if (!color) return;
    const renderColor = new Values(color);
    setColorArray(renderColor.all(10));
    console.log(
      "🚀TCL: ~ file: App.js ~ line 9 ~ App ~ colorArray",
      colorArray
    );
  }, []);

  // click submit btn
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);
    if (!color) return;
    const renderColor = new Values(color);
    setColorArray(renderColor.all(10));
    console.log(
      "🚀TCL: ~ file: App.js ~ line 9 ~ App ~ colorArray",
      colorArray
    );
  };
  return (
    <>
      <section className='container'>
        <h3>color generator project</h3>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            name='color'
            id='color'
            className='null'
            placeholder='#f15025'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {colorArray.map((colorShade, index) => {
          return <SingleColor key={index} colorShade={colorShade} />;
        })}
      </section>
    </>
  );
}

export default App;
