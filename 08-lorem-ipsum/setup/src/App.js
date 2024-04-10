import React, { useState } from "react";
import data from "./data";
function App() {
  const [lines, setLines] = useState(4);
  const [paragraphs, setParagraphs] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(lines);
    if (lines <= 0) {
      amount = 1;
    }
    if (lines > data.length - 1) {
      amount = data.length - 1;
    }
    setParagraphs(data.slice(0, amount));
  };
  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>Lorem Generate Text Project</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          value={lines}
          onChange={(e) => {
            setLines(e.target.value);
          }}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
