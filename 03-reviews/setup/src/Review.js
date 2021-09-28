import React, { useEffect, useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [num, setNum] = useState(0);
  console.log("🚀TCL: ~ file: Review.js ~ line 8 ~ Review ~ num", num);
  const [showPerson, setShowPerson] = useState(people[0]);
  const { id, name, job, text, image } = showPerson;
  const handlePrevPersion = () => {
    setNum((prev) => {
      let newNum = prev - 1;
      newNum < 0 ? setNum(people.length - 1) : setNum(newNum);
    });
  };
  const handleNextPersion = () => {
    setNum((prev) => {
      let newNum = prev + 1;
      newNum > people.length - 1 ? setNum(0) : setNum(newNum);
    });
  };
  useEffect(() => {
    setShowPerson(people[num]);
  }, [num]);
  return (
    <section className="container">
      <div className="title">
        <h2>Reviews Project</h2>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
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
      </article>
    </section>
  );
};

export default Review;
