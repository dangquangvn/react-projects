import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { useOnClickOutside } from "./hooks/onClickOutsideHook";
const Modal = (
  {
    /*showModal, setShowModal*/
  }
) => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const modalRef = useRef();
  useOnClickOutside(modalRef, closeModal);
  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div className='modal-container' ref={modalRef}>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
