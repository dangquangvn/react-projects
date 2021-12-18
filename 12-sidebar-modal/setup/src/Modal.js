import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ showModal, setShowModal }) => {
  return (
    <div className={`modal-overlay ${showModal ? "show-modal" : ""}`}>
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
