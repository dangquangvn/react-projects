import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
import logo from "./logo.svg";

const Home = (
  {
    /*showModal, setShowModal*/
  }
) => {
  // const modal = useContext(modalContext);
  //& 2 ways to import ContextAPI
  // use both {useContext} & {AppContext}
  // const data = useContext(AppContext);
  // or just use {useGlobalContext}
  // we need to put 'use' in name since we have hook in that, to specify with regular function
  const { isModalOpen, openSidebar, isSidebarOpen, openModal } =
    useGlobalContext();
  console.log("🚀TCL: ~ file: Home.js ~ line 9 ~ Home ~ data", isModalOpen);

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
