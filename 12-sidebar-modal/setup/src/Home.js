import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const Home = ({ showModal, setShowModal }) => {
  // const modal = useContext(modalContext);
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn' onClick={() => setShowModal(!showModal)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
