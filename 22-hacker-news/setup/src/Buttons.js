import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  return (
    <div className='btn-container'>
      <button className='btn-prev'>Prev</button>
      <p>0 of 50</p>
      <button className='btn-next'>Next</button>
    </div>
  );
};

export default Buttons;
