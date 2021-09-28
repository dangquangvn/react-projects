import React, { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, text, image } = people[index];
  const checkNumber = (number) =>
    number > people.length - 1 ? 0 : number < 0 ? people.length - 1 : number;
  const handlePrevPersion = () => {
    setIndex((prev) => {
      let newNum = prev - 1;
      return checkNumber(newNum);
    });
  };
  const handleNextPersion = () => {
    setIndex((prev) => {
      let newNum = prev + 1;
      return checkNumber(newNum);
    });
  };
  const randomPerson = () => {
    let max = people.length;
    let min = 0;
    let randomNum = Math.max(Math.floor(Math.random() * max), min);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };
  return (
    <section className="container">
      <div className="title">
        <h2>Reviews Project</h2>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={handlePrevPersion}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNextPersion}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          Suprise Me
        </button>
      </article>
    </section>
  );
};

export default Review;
