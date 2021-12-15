import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import { useEffect } from "react";

function App() {
  const [color, setColor] = useState(
    `${localStorage.getItem("color") || "#f15025"}`
  );
  const [error, setError] = useState(false);
  // list
  const [colorArray, setColorArray] = useState(
    new Values(`${localStorage.getItem("color") || "#f15025"}`).all(10)
  );
  // const [colorArray, setColorArray] = useState("");
  console.log(localStorage.getItem("color"));

  // render first time get in
  // useEffect(() => {
  //   if (!color) return;
  //   const renderColor = new Values(color);
  //   setColorArray(renderColor.all(10));
  //   console.log(
  //     "🚀TCL: ~ file: App.js ~ line 9 ~ App ~ colorArray",
  //     colorArray
  //   );
  // }, []);

  // click submit btn
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);
    try {
      setError(false);
      if (!color) return;
      localStorage.setItem("color", color);
      const renderColor = new Values(color).all(10);
      setColorArray(renderColor);
      console.log(
        "🚀TCL: ~ file: App.js ~ line 9 ~ App ~ colorArray",
        colorArray
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
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
            className={`${error ? "error" : null}`}
            placeholder={"#f15025"}
            value={color || localStorage.getItem("color")}
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
