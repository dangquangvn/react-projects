import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { handleCloseModal, isModalOpen, correct, index, quiz } =
    useGlobalContext();
  const correctAnswerPercentage = Math.round((correct / quiz.length) * 100);
  return (
    <div className={`modal-container ${isModalOpen ? "isOpen" : ""}`}>
      <div className='modal-content'>
        <h1>Congrats!</h1>
        <p>You answered {correctAnswerPercentage}% of questions correctly</p>
        <button className='close-btn' onClick={handleCloseModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
