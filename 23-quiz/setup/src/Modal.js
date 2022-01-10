import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { handleCloseModal } = useGlobalContext();
  return (
    <div className='modal-container isOpen'>
      <div className='modal-content'>
        <h1>Congrats!</h1>
        <p>You answered 0% of questions correctly</p>
        <button className='close-btn' onClick={handleCloseModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
