import React, { useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
function App() {
  const [showModal, setShowModal] = useState(false);

  // contextAPI
  const modalContext = React.createContext();
  return (
    <modalContext.Provider value={(showModal, setShowModal)}>
      <h2>modal-sidebar project setup</h2>
      <Home showModal={showModal} setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Sidebar />
    </modalContext.Provider>
  );
}

export default App;
