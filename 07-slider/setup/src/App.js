import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState(data);
  const checkNumber = (num) => {
    if (num < 0) {
      return data.length - 1;
    } else if (num > data.length - 1) {
      return 0;
    } else {
      return num;
    }
  };
  const handlePrev = () => {
    setValue((prev) => checkNumber(prev - 1));
  };
  const handleNext = () => {
    setValue((prev) => checkNumber(prev + 1));
  };
  const handleCLass = (index) => {
    switch (value) {
      case checkNumber(index):
        return "activeSlide";
      case checkNumber(index + 1):
        return "lastSlide";
      case checkNumber(index - 1):
        return "nextSlide";
      default:
        return "nextSlide";
    }
  };
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews Project
        </h2>
      </div>
      <div className="section-center">
        {person.map(({ id, image, name, title, quote }, index) => (
          <article key={id} className={handleCLass(index)}>
            <img src={image} alt="" className="person-img" />
            <h4>{name}</h4>
            <p>{title}</p>
            <p>{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}
        <button className="prev" onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
