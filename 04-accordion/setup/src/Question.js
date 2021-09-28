import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setVisible(!isVisible)}>
          {isVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isVisible && <p>{info}</p>}
    </article>
  );
};

export default Question;
